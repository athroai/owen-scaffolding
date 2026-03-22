"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const DURATION_MS = 2200;

export function LoadingScreen() {
  const [visible, setVisible] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    const already =
      typeof sessionStorage !== "undefined" &&
      sessionStorage.getItem("hasLoaded") === "true";
    if (already) return;
    setVisible(true);
    const t = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("hasLoaded", "true");
    }, DURATION_MS);
    return () => window.clearTimeout(t);
  }, []);

  if (!hydrated) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="relative flex flex-col items-center px-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-24 w-64 sm:h-28 sm:w-72">
              <Image
                src="/owen-logo.png"
                alt="Owen Scaffolding Limited"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 256px, 288px"
              />
            </div>
            <div className="relative mt-10 h-1 w-56 overflow-hidden rounded-full bg-surface sm:w-72">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-dark via-gold to-gold-light"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 1.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
