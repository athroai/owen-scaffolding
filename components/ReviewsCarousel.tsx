"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { reviews } from "@/lib/reviews";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionReveal } from "@/components/SectionReveal";

export function ReviewsCarousel() {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <SectionReveal>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-label text-gold">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </div>
        <div ref={constraintsRef} className="relative mt-12 overflow-hidden pb-2">
          <motion.div
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
            drag="x"
            dragConstraints={constraintsRef}
            dragElastic={0.08}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 28 }}
          >
            {reviews.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}
