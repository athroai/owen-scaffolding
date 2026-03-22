"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  MapPin,
  Shield,
  Sparkles,
} from "lucide-react";

const items = [
  { icon: Sparkles, label: "20+ Years Experience" },
  { icon: Shield, label: "Fully Insured" },
  { icon: ClipboardCheck, label: "H&S Compliant" },
  { icon: BadgeCheck, label: "Free Quotes" },
  { icon: MapPin, label: "Based in Cardigan, Wales" },
];

export function TrustBar() {
  return (
    <motion.div
      className="border-y border-border-subtle bg-surface py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 sm:px-6 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-2 text-sm text-foreground/90"
          >
            <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden />
            <span className="font-sans">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
