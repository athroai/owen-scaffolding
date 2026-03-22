"use client";

import type { GalleryCategory, GalleryImage } from "@/lib/gallery";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const TABS: { id: GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "domestic", label: "Domestic" },
  { id: "commercial", label: "Commercial" },
  { id: "roofing", label: "Roofing" },
  { id: "complex", label: "Complex Jobs" },
];

const blur =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

type Props = {
  images: GalleryImage[];
};

export function GalleryGrid({ images }: Props) {
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "all") return images;
    return images.filter((img) => img.category === filter);
  }, [filter, images]);

  const slides = useMemo(
    () => filtered.map((img) => ({ src: img.src })),
    [filtered]
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {TABS.map((tab) => {
          const active = filter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-label transition-colors ${
                active
                  ? "border-gold bg-gold/15 text-gold"
                  : "border-gold/20 text-foreground/80 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((img, i) => (
          <motion.button
            key={img.filename}
            type="button"
            className="group relative mb-4 w-full break-inside-avoid overflow-hidden rounded-sm border border-gold/20 text-left"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ delay: (i % 8) * 0.02, duration: 0.45 }}
            onClick={() => {
              const idx = filtered.findIndex((x) => x.filename === img.filename);
              setIndex(idx >= 0 ? idx : 0);
              setOpen(true);
            }}
          >
            <div className="relative aspect-[4/3] w-full bg-surface">
              <Image
                src={img.src}
                alt="Owen Scaffolding project"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={85}
                placeholder="blur"
                blurDataURL={blur}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/25" />
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        on={{
          view: ({ index: i }) => {
            setIndex(i);
          },
        }}
      />
    </div>
  );
}
