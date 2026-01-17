# Survpedia

A modern, fast, and multilingual survival encyclopedia built with Astro.

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

## 🤝 Contributing

If you wish to contribute to the project, please review the [CONTRIBUTING.md](CONTRIBUTING.md) file for contribution guidelines.
