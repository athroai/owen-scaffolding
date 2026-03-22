import { CTABanner } from "@/components/CTABanner";

/** Large image index — avoid static generation timeout at build time */
export const dynamic = "force-dynamic";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { getGalleryImages } from "@/lib/gallery";
import { PAGE_HERO_GALLERY } from "@/lib/site-images";
import { defaultDescription, getSiteUrl } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse recent Owen Scaffolding projects across West Wales — domestic, commercial, roofing, and complex access.",
  openGraph: {
    title: "Project Gallery | Owen Scaffolding",
    description: defaultDescription,
    url: `${getSiteUrl()}/gallery`,
  },
};

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A snapshot of the access solutions we build — safe, tidy, and built to last."
        imageSrc={PAGE_HERO_GALLERY}
      />
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center">
            <p className="text-xs uppercase tracking-label text-gold">Portfolio</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              On-site photography
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
              Tap any image to view full screen. Use the arrows to move between
              photos.
            </p>
          </SectionReveal>
          <div className="mt-14">
            <GalleryGrid images={images} />
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
