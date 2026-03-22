"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const line =
  "Professional scaffolding services across West Wales and beyond. Fully qualified, insured and H&S compliant — with over 20 years of experience.";

const titleWords = "Built to the Highest Standard".split(" ");

export function Hero({ imageSrc }: { imageSrc: string }) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
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
              "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-28 pt-28 text-center sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">
            {titleWords.map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="inline-block pr-[0.2em]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.08 * i,
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          className="mt-8 max-w-3xl text-base leading-relaxed text-foreground sm:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {line}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.55 }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold text-gold">
            <Link href="/gallery">View Our Work</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <ChevronDown className="h-8 w-8 opacity-70" />
      </motion.div>
    </section>
  );
}
