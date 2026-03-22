"use client";

import { motion } from "framer-motion";
import type { Review } from "@/lib/reviews";
import { Star } from "lucide-react";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <motion.article
      className="min-w-[280px] max-w-sm flex-shrink-0 rounded-sm border border-border-subtle bg-surface-card p-6 shadow-md sm:min-w-[320px]"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      <div className="flex items-center gap-1 text-gold">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/95">
        &ldquo;{review.text}&rdquo;
      </p>
      <p className="mt-4 font-display text-lg text-gold">{review.name}</p>
    </motion.article>
  );
}
