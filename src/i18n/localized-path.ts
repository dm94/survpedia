import { getCollection, type CollectionKey } from 'astro:content';

import { defaultLang, ui } from './ui';

const langCodes = Object.keys(ui);

const contentCollections: CollectionKey[] = [
  'elements',
  'inventions',
  'materials',
  'knowledge',
];

/**
 * Slugs whose translation differs between languages, so a locale swap cannot
 * be resolved by reusing the same slug. Keys are collection-relative slugs.
 */
const slugTranslations: Record<string, Record<string, string>> = {
  materials: {
    cal: 'lime',
    lime: 'cal',
    arena: 'sand',
    sand: 'arena',
    arcilla: 'clay',
    clay: 'arcilla',
    ladrillo: 'brick',
    brick: 'ladrillo',
    mortero: 'mortar',
    mortar: 'mortero',
    piedra: 'stone',
    stone: 'piedra',
    rubi: 'ruby',
    ruby: 'rubi',
  },
};

/**
 * Builds the equivalent pathname for a target language by swapping the locale
 * prefix, keeping the rest of the path untouched.
 */
export function getLocalizedPath(targetLang: string, pathname: string) {
  const segments = pathname.split('/').filter(Boolean);
  const hasLangPrefix = langCodes.includes(segments[0] ?? '');
  const rest = hasLangPrefix ? segments.slice(1) : segments;
  return `/${[targetLang, ...rest].join('/')}`;
}

/**
 * Resolves the equivalent pathname for a target language, keeping the current
 * entry when possible. Detail pages are matched by slug first and by title
 * afterwards, so translated slugs still resolve. When no equivalent entry
 * exists, it falls back to the collection listing instead of a dead link.
 */
export async function getLocalizedPathname(
  targetLang: string,
  pathname: string
): Promise<string> {
  const segments = pathname.split('/').filter(Boolean);
  const hasLangPrefix = langCodes.includes(segments[0] ?? '');
  const currentLang = hasLangPrefix ? segments[0] : defaultLang;
  const rest = hasLangPrefix ? segments.slice(1) : segments;
  const [collection, ...slugParts] = rest;
  const slug = slugParts.join('/');

  if (
    !slug ||
    !collection ||
    !contentCollections.includes(collection as CollectionKey)
  ) {
    return `/${[targetLang, ...rest].join('/')}`;
  }

  const entries = await getCollection(collection as CollectionKey);
  const current = entries.find(entry => entry.id === `${currentLang}/${slug}`);
  const translatedSlug = slugTranslations[collection]?.[slug];
  const localized =
    entries.find(entry => entry.id === `${targetLang}/${slug}`) ??
    (translatedSlug
      ? entries.find(entry => entry.id === `${targetLang}/${translatedSlug}`)
      : undefined) ??
    (current
      ? entries.find(
          entry =>
            entry.id.startsWith(`${targetLang}/`) &&
            entry.data.title === current.data.title
        )
      : undefined);

  if (!localized) {
    return `/${targetLang}/${collection}`;
  }

  const localizedSlug = localized.id.split('/').slice(1).join('/');
  return `/${targetLang}/${collection}/${localizedSlug}`;
}
