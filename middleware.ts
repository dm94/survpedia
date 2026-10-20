import { next } from "@vercel/functions";

/**
 * Hosts whose pages are allowed to embed this site's images.
 * `survpedia.deeme.dev` is the production domain; add any alias here.
 * Requests coming from the deployment's own host (previews, vercel.app)
 * are always allowed, so previews keep working.
 */
const ALLOWED_REFERER_HOSTS = new Set([
  "survpedia.deeme.dev",
  "www.survpedia.deeme.dev",
]);

/**
 * Search engines keep fetching images with their own referer. Allowing them
 * preserves image-search results and link previews instead of returning 403.
 */
const SEARCH_ENGINE_HOST =
  /(^|\.)(google\.[a-z.]+|bing\.com|duckduckgo\.com|yandex\.[a-z.]+|search\.brave\.com|ecosia\.org)$/i;

/** Files treated as protected images: everything Astro emits into `_astro/`. */
const IMAGE_PATH = /\.(?:avif|gif|jpe?g|png|svg|webp)$/i;

interface RequestSignals {
  /** Hostname the request was sent to. */
  requestHost: string;
  /** Pathname of the requested asset. */
  pathname: string;
  /** Value of the `Referer` header, if any. */
  referer: string | null;
  /** Value of the `Sec-Fetch-Site` header, if any. */
  fetchSite: string | null;
}

function toHostname(value: string | null): string | null {
  if (!value) {
    return null;
  }

  try {
    return new URL(value).hostname.toLowerCase();
  } catch {
    return null;
  }
}

/**
 * Decides whether an image request was embedded by another website.
 *
 * The `Referer` header is the main signal. `Sec-Fetch-Site` is a
 * browser-controlled header that survives `referrerpolicy="no-referrer"`,
 * so it catches hotlinks that hide the referer without breaking crawlers,
 * CLI tools or direct visits (which send no fetch-site header at all).
 */
export function isHotlink({
  requestHost,
  pathname,
  referer,
  fetchSite,
}: RequestSignals): boolean {
  if (!IMAGE_PATH.test(pathname)) {
    return false;
  }

  // The browser already confirmed the request comes from this same site,
  // or from a direct visit (address bar, bookmark, image opened in a tab).
  if (
    fetchSite === "same-origin" ||
    fetchSite === "same-site" ||
    fetchSite === "none"
  ) {
    return false;
  }

  const refererHost = toHostname(referer);

  if (!refererHost) {
    // Without a referer only a cross-site fetch is suspicious enough to block.
    return fetchSite === "cross-site";
  }

  if (refererHost === requestHost.toLowerCase()) {
    return false;
  }

  if (ALLOWED_REFERER_HOSTS.has(refererHost)) {
    return false;
  }

  return !SEARCH_ENGINE_HOST.test(refererHost);
}

export default function middleware(request: Request): Response {
  const url = new URL(request.url);
  const blocked = isHotlink({
    requestHost: url.hostname,
    pathname: url.pathname,
    referer: request.headers.get("referer"),
    fetchSite: request.headers.get("sec-fetch-site"),
  });

  if (!blocked) {
    return next();
  }

  return new Response(
    "Hotlinking is not allowed. Please link to https://survpedia.deeme.dev instead.",
    {
      status: 403,
      headers: {
        "cache-control": "public, max-age=3600",
        "content-type": "text/plain; charset=utf-8",
        "x-robots-tag": "noindex",
      },
    }
  );
}

export const config = {
  runtime: "nodejs",
  // Only assets are inspected: everything Astro writes to `_astro/`
  // (images, CSS and JS, filtered by extension in code) plus public files.
  matcher: ["/_astro/:path*", "/favicon.png", "/logo.png"],
};
