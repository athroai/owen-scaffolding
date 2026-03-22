"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ServiceCardSlug, ServiceSummary } from "@/lib/services";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Factory,
  Flame,
  Home,
  Layers,
  Wrench,
} from "lucide-react";
import { staggerItem } from "@/components/StaggerChildren";
import { ArrowRight } from "lucide-react";

const serviceIcons: Record<ServiceCardSlug, LucideIcon> = {
  domestic: Home,
  commercial: Building2,
  industrial: Factory,
  chimney: Layers,
  bespoke: Wrench,
  emergency: Flame,
};

export function ServiceCard({ service }: { service: ServiceSummary }) {
  const Icon = serviceIcons[service.slug];
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-sm border border-border-subtle bg-surface-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-gold-glow"
    >
      <div className="mb-4 inline-flex rounded-full border border-gold/30 bg-surface p-3 text-gold">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-xl text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.shortDescription}
      </p>
      <Link
        href={`/services#${service.servicesAnchor}`}
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-label text-gold transition-colors hover:text-gold-light"
      >
        Learn More
        <ArrowRight className="h-4 w-4" />
      </Link>
    </motion.article>
  );
}
