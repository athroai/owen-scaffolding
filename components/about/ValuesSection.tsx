"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { Award, BadgeCheck, Clock, Shield } from "lucide-react";

const values = [
  {
    title: "Safety First",
    body: "Fully CISRS-compliant, H&S trained",
    icon: Shield,
  },
  {
    title: "Reliability",
    body: "We turn up. Every time.",
    icon: Clock,
  },
  {
    title: "Quality",
    body: "Every scaffold is built as if our name depends on it. Because it does.",
    icon: Award,
  },
  {
    title: "Fair Pricing",
    body: "Competitive rates, no hidden costs, free quotes always",
    icon: BadgeCheck,
  },
];

export function ValuesSection() {
  return (
    <section className="border-y border-gold/20 bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="text-center">
          <p className="text-xs uppercase tracking-label text-gold">Values</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
            What we stand for
          </h2>
        </SectionReveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <SectionReveal
                key={v.title}
                className="rounded-sm border border-gold/20 bg-surface-card p-6"
              >
                <div className="inline-flex rounded-full border border-gold/30 p-3 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-xl text-white">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
