import fs from "fs";
import path from "path";

export type GalleryCategory =
  | "all"
  | "domestic"
  | "commercial"
  | "roofing"
  | "complex";

const TAGS: Exclude<GalleryCategory, "all">[] = [
  "domestic",
  "commercial",
  "roofing",
  "complex",
];

function stableCategory(filename: string): Exclude<GalleryCategory, "all"> {
  let hash = 0;
  for (let i = 0; i < filename.length; i++) {
    hash = (hash + filename.charCodeAt(i) * (i + 1)) % 10007;
  }
  return TAGS[hash % TAGS.length];
}

export type GalleryImage = {
  src: string;
  filename: string;
  category: Exclude<GalleryCategory, "all">;
};

export function getGalleryImages(): GalleryImage[] {
  const dir = path.join(process.cwd(), "public", "images");
  const files = fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort();

  return files.map((filename) => ({
    filename,
    src: `/images/${filename}`,
    category: stableCategory(filename),
  }));
}
