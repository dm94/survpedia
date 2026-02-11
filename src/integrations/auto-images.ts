import { existsSync } from "fs";
import fs from "fs/promises";
import path from "path";

import type { AstroIntegration } from "astro";
import matter from "gray-matter";

// Helper to recursively find files
async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map(dirent => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

// Helper to download image
async function downloadImage(url: string, filepath: string) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error(`Failed to download image: ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);
  await fs.writeFile(filepath, buffer);
}

export default function autoImages(): AstroIntegration {
  return {
    name: "auto-images",
    hooks: {
      "astro:config:setup": async ({ logger }) => {
        logger.info("Auto-Images: Checking for missing images in content...");

        const contentDir = path.join(process.cwd(), "src/content");
        const assetsDir = path.join(process.cwd(), "src/assets/images");

        // Ensure assets dir exists
        if (!existsSync(assetsDir)) {
          await fs.mkdir(assetsDir, { recursive: true });
        }

        // Collections to check
        const collections = ["materials", "inventions", "knowledge"];

        for (const collection of collections) {
          const collectionDir = path.join(contentDir, collection);
          if (!existsSync(collectionDir)) {
            continue;
          }

          // Find all md/mdx files
          const allFiles = await getFiles(collectionDir);
          const contentFiles = allFiles.filter(
            f => f.endsWith(".md") || f.endsWith(".mdx")
          );

          for (const file of contentFiles) {
            try {
              const content = await fs.readFile(file, "utf-8");
              const parsed = matter(content);

              if (!parsed.data.image) {
                logger.info(
                  `Auto-Images: Generating image for ${path.basename(file)}...`
                );

                const title =
                  parsed.data.title || path.basename(file, path.extname(file));
                // Create a safe filename (slugify logic roughly)
                const safeName = path
                  .basename(file, path.extname(file))
                  .toLowerCase()
                  .replace(/[^a-z0-9]/g, "-");
                const imageFilename = `${safeName}.jpg`;

                // We organize generated images by collection
                const collectionAssetsDir = path.join(assetsDir, collection);
                if (!existsSync(collectionAssetsDir)) {
                  await fs.mkdir(collectionAssetsDir, { recursive: true });
                }

                const imagePath = path.join(collectionAssetsDir, imageFilename);

                // Check if image already exists (maybe from previous run or shared)
                if (!existsSync(imagePath)) {
                  try {
                    // Use pollinations.ai
                    // Prompt: "scientific illustration of {title} {collection} high quality realistic"
                    // Add "no text" to try to avoid text in image
                    const prompt = encodeURIComponent(
                      `illustration of ${title} ${collection} high quality realistic no text`
                    );
                    // Random seed based on title to keep it consistent-ish or just random?
                    // Pollinations caches by prompt, so it should be stable for same prompt.
                    const url = `https://image.pollinations.ai/prompt/${prompt}?width=1024&height=1024&nologo=true&model=klein-large`;

                    logger.info(`Auto-Images: Downloading from ${url}`);
                    await downloadImage(url, imagePath);
                    logger.info(`Auto-Images: Saved to ${imagePath}`);
                  } catch (e) {
                    logger.error(
                      `Auto-Images: Failed to download image for ${title}: ${e}`
                    );
                    continue; // Skip updating file if image failed
                  }
                }

                // Calculate relative path from file to imagePath
                // file: d:\Github\survpedia\src\content\elements\en\hydrogen.md
                // imagePath: d:\Github\survpedia\src\assets\images\elements\hydrogen.jpg
                // relative: ..\..\..\assets\images\elements\hydrogen.jpg (on windows)
                // We need to ensure posix style slashes for Astro/Markdown
                let relativePath = path.relative(path.dirname(file), imagePath);
                relativePath = relativePath.split(path.sep).join("/");

                // Update frontmatter
                parsed.data.image = relativePath;

                // Reconstruct file
                // parsed.content has the body.
                // matter.stringify recreates the file.
                const newContent = matter.stringify(
                  parsed.content,
                  parsed.data
                );
                await fs.writeFile(file, newContent);
                logger.info(
                  `Auto-Images: Updated ${path.basename(file)} with new image.`
                );
              }
            } catch (err) {
              logger.error(
                `Auto-Images: Error processing file ${file}: ${err}`
              );
            }
          }
        }
      },
    },
  };
}
