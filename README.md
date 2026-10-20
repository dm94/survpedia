# Survpedia

A modern, fast, and multilingual technological survival manual codex built with Astro.

## 🚀 Technologies

This project uses the following main technologies and libraries:

- **[Astro](https://astro.build/)**: Web framework for building fast, content-focused websites.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for styling.
- **[MDX](https://mdxjs.com/)**: Markdown for the component era, used for content.
- **[Pagefind](https://pagefind.app/)**: Static search library that runs after the build.
- **TypeScript**: For safer and more robust development.

## ✨ Features

- 🌍 **Internationalization (i18n)**: Native support for English (`en`) and Spanish (`es`).
- 🔍 **Integrated Search**: Fast search functionality powered by Pagefind.
- 📱 **Responsive Design**: Adapted to different screen sizes.
- ⚡ **High Performance**: Static generation for fast loading.
- 🛡️ **Hotlink Protection**: Images embedded on other websites return `403`.

## 🛠️ Installation and Usage

Ensure you have [Node.js](https://nodejs.org/) installed on your system.

1. **Install dependencies**

   ```bash
   npm install
   # or if using pnpm
   pnpm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   The site will be available at `http://localhost:4321`.

3. **Build for production**

   ```bash
   npm run build
   # or
   pnpm build
   ```

   This command will generate static files in the `dist` folder and create the search index with Pagefind.

4. **Preview the build**

   ```bash
   npm run preview
   # or
   pnpm preview
   ```

## 📂 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable Astro components
├── content/         # Content in Markdown/MDX (elements, inventions, materials)
├── i18n/            # i18n configurations and translations
├── layouts/         # Main layout templates
├── pages/           # Routes and site pages
└── styles/          # Global styles
```

## 🛡️ Hotlink Protection

Images may only be embedded by this site's own pages. Requests for images (`/_astro/*`, `/logo.png`, `/favicon.png`) coming from another website are denied with `403 Forbidden` before they reach the CDN cache, so third parties cannot use this deployment as a free image host.

This is a [Vercel Firewall custom rule](https://vercel.com/docs/vercel-firewall/vercel-waf/custom-rules), not code: it runs at the edge, costs no function invocations and survives deployments. It lives in the Vercel project — `Firewall` → `⋯` → `Configure` → `Add New…` → `Rule` — so it is not stored in this repository.

**Rule 1 — foreign referer.** All conditions combined with AND:

- Request Path — _Matches expression_:

  ```text
  ^/(_astro/.*\.(webp|avif|png|jpe?g|gif|svg)|(favicon|logo)\.png)$
  ```

- Request Header `referer` — _Exists_
- Request Header `referer` — _Does not match expression_:

  ```text
  ^https?://([\w-]+\.)*survpedia\.deeme\.dev(:\d+)?(/|$)|^https?://survpedia(-[\w-]+)?\.vercel\.app(/|$)|^https?://([\w-]+\.)*(google\.[a-z.]+|bing\.com|duckduckgo\.com|yandex\.[a-z.]+)(/|$)
  ```

- Then — **Deny**. Save the rule and publish it with `Review Changes`.

**Rule 2 — hidden referer.** Same Request Path condition, plus Request Header `sec-fetch-site` _Equals_ `cross-site` and Request Header `referer` _Does not exist_, then **Deny**. This also catches hotlinks that strip the referer with `referrerpolicy="no-referrer"`.

If the dashboard does not list the `Exists` operator on your plan, stage the same rules with the CLI: `vercel firewall rules add` accepts header conditions such as `{"type":"header","op":"ex","key":"referer"}` and `{"type":"header","op":"re","key":"referer","neg":true,"value":"…"}`, followed by `vercel firewall diff` and `vercel firewall publish`.

Direct visits, crawlers and CLI tools keep working because a request without a `referer` never matches Rule 1. Search engines and the `survpedia*.vercel.app` preview deployments are part of the allowed expression, so image-search results and previews keep working. Add every new domain of the site to that expression. `Referer` is client-controlled, so this deters hotlinking rather than securing content.

## 🤝 Contributing

If you wish to contribute to the project, please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.
