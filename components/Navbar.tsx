"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border-subtle bg-background/95 shadow-lg backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Link href="/" className="relative z-10 flex items-center gap-2">
            <div className="relative h-10 w-36 sm:h-11 sm:w-40">
              <Image
                src="/owen-logo.png"
                alt="Owen Scaffolding"
                fill
                className="object-contain object-left"
                priority
                sizes="160px"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "font-sans text-sm uppercase tracking-label transition-colors",
                    active
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  )}
                >
                  <span className="relative">
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-1 left-0 h-px w-full bg-gold" />
                    )}
                  </span>
                </Link>
              );
            })}
            <Button asChild size="sm" className="ml-2">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </nav>

          <button
            type="button"
            className="relative z-10 rounded-sm p-2 text-gold lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70"
              aria-label="Close menu backdrop"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col border-l border-gold/30 bg-background px-6 pb-10 pt-20 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
            >
              <div className="flex flex-1 flex-col gap-6">
                {links.map((l) => {
                  const active =
                    l.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(l.href);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={cn(
                        "border-b border-border-subtle py-3 font-sans text-lg uppercase tracking-label",
                        active ? "text-gold" : "text-foreground/90"
                      )}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </div>
              <Button asChild className="w-full">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
