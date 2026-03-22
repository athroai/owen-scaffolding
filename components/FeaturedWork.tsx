"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_WORK } from "@/lib/site-images";
import { Button } from "@/components/ui/button";
import { SectionReveal } from "@/components/SectionReveal";

export function FeaturedWork() {
  return (
    <SectionReveal className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xs uppercase tracking-label text-gold">Portfolio</p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          Our Work Speaks for Itself
        </h2>
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {FEATURED_WORK.map((src, i) => (
          <motion.div
            key={src}
            className="mb-4 break-inside-avoid overflow-hidden rounded-sm border border-border-subtle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <div className="group relative aspect-[4/3] w-full overflow-hidden bg-surface">
              <Image
                src={src}
                alt="Owen Scaffolding project"
                fill
                quality={85}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
              />
              <div className="pointer-events-none absolute inset-0 bg-gold/0 transition-colors duration-300 group-hover:bg-gold/25" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/gallery">View Full Gallery</Link>
        </Button>
      </div>
    </SectionReveal>
  );
}
