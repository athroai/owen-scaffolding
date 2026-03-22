"use client";

import { SectionReveal } from "@/components/SectionReveal";
import { Facebook, Instagram, MapPin, Phone } from "lucide-react";

export function ContactDetailsBlock() {
  return (
    <SectionReveal>
      <p className="text-xs uppercase tracking-label text-gold">Contact</p>
      <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
        Speak with the team
      </h2>
      <ul className="mt-8 space-y-6 text-sm sm:text-base">
        <li className="flex gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-xs uppercase tracking-label text-gold">Phone</p>
            <a
              href="tel:07890055319"
              className="text-lg font-semibold text-foreground hover:text-gold"
            >
              07890 055319
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 h-5 w-5 shrink-0 text-center text-gold">@</span>
          <div>
            <p className="text-xs uppercase tracking-label text-gold">Email</p>
            <a
              href="mailto:owenscaffolding@hotmail.com"
              className="text-foreground/95 hover:text-gold"
            >
              owenscaffolding@hotmail.com
            </a>
          </div>
        </li>
        <li className="flex gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
          <div>
            <p className="text-xs uppercase tracking-label text-gold">Location</p>
            <p className="text-foreground/95">Cardigan, West Wales</p>
          </div>
        </li>
        <li className="flex gap-3">
          <span className="mt-0.5 h-5 w-5 shrink-0 text-center text-gold">◎</span>
          <div>
            <p className="text-xs uppercase tracking-label text-gold">Hours</p>
            <p className="text-foreground/95">Always Open</p>
          </div>
        </li>
      </ul>

      <div className="mt-8 flex gap-4">
        <a
          href="https://facebook.com/owenscaffolding"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </a>
        <a
          href="https://instagram.com/owenscaffolding"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold/10"
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </a>
      </div>

      <div className="mt-10 overflow-hidden rounded-sm border border-gold/20">
        <iframe
          title="Map — Cardigan, West Wales"
          src="https://maps.google.com/maps?q=Cardigan%2C%20West%20Wales&t=m&z=12&ie=UTF8&iwloc=&output=embed"
          className="h-64 w-full grayscale invert"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SectionReveal>
  );
}
