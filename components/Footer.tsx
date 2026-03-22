import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="relative mb-4 h-12 w-44">
              <Image
                src="/owen-logo.png"
                alt="Owen Scaffolding Limited"
                fill
                className="object-contain object-left"
                sizes="176px"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Professional scaffolding across West Wales — fully qualified,
              insured, and built to the highest standard.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com/owenscaffolding"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-subtle p-2 text-gold transition-colors hover:bg-gold/10"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/owenscaffolding"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-subtle p-2 text-gold transition-colors hover:bg-gold/10"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Quick Links</h3>
            <div className="mt-4 h-px w-12 bg-gold/50" />
            <ul className="mt-6 space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-foreground/85 transition-colors hover:text-gold"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-gold">Contact</h3>
            <div className="mt-4 h-px w-12 bg-gold/50" />
            <ul className="mt-6 space-y-3 text-sm text-foreground/85">
              <li>
                <a href="tel:07890055319" className="hover:text-gold">
                  07890 055319
                </a>
              </li>
              <li>
                <a
                  href="mailto:owenscaffolding@hotmail.com"
                  className="hover:text-gold"
                >
                  owenscaffolding@hotmail.com
                </a>
              </li>
              <li>Cardigan, West Wales</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border-subtle pt-8 text-center text-xs text-muted">
          © 2025 Owen Scaffolding Limited. All rights reserved. Registered in
          Wales.
        </div>
      </div>
    </footer>
  );
}
