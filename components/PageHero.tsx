"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
};

export function PageHero({ title, subtitle, imageSrc }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden pb-16 pt-28 sm:min-h-[48vh] sm:pb-20 sm:pt-32">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,0.95), rgba(10,10,10,0.55))",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs uppercase tracking-label text-gold">Owen Scaffolding</p>
          <h1 className="mt-3 font-display text-4xl text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/90">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
