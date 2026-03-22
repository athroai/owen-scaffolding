"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CTABannerProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

export function CTABanner({
  title = "Get Your Free Quote Today",
  description = "Contact us today for your free, no-obligation quote.",
  buttonLabel = "Request a Quote",
}: CTABannerProps) {
  return (
    <motion.section
      className="relative overflow-hidden border-y border-gold/25 bg-gold-gradient-dark py-14"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,0,0,0.35),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-background sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-base text-background/90 sm:text-lg">{description}</p>
        <Button
          asChild
          size="lg"
          className="bg-background text-gold hover:bg-background/90"
        >
          <Link href="/contact">{buttonLabel}</Link>
        </Button>
      </div>
    </motion.section>
  );
}
