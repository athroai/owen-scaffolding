import { CTABanner } from "@/components/CTABanner";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Hero } from "@/components/Hero";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { SectionReveal } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { StaggerChildren } from "@/components/StaggerChildren";
import { TrustBar } from "@/components/TrustBar";
import { HERO_IMAGE } from "@/lib/site-images";
import { serviceSummaries } from "@/lib/services";
import {
  defaultDescription,
  getSiteUrl,
  titleBase,
} from "@/lib/metadata";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: titleBase,
  description: defaultDescription,
  openGraph: {
    title: titleBase,
    description: defaultDescription,
    url: getSiteUrl(),
  },
};

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Owen Scaffolding Limited",
    image: `${siteUrl}/owen-logo.png`,
    "@id": `${siteUrl}/#business`,
    url: siteUrl,
    telephone: "+447890055319",
    email: "owenscaffolding@hotmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cardigan",
      addressRegion: "West Wales",
      addressCountry: "GB",
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.0837,
        longitude: -4.6599,
      },
      description: "West Wales and surrounding areas",
    },
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  };

  return (
    <>
      <Script
        id="ld-json-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero imageSrc={HERO_IMAGE} />
      <TrustBar />
      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-label text-gold">
                Services
              </p>
              <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                What We Do
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm text-muted sm:text-base">
                Comprehensive scaffolding for homes, businesses, and complex
                sites — planned, erected, and dismantled with care.
              </p>
            </div>
          </SectionReveal>
          <StaggerChildren className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceSummaries.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <FeaturedWork />
      </section>

      <section className="bg-background py-20 sm:py-24">
        <ReviewsCarousel />
      </section>

      <CTABanner
        title="Ready to Get Started?"
        description="Contact us today for your free, no-obligation quote."
        buttonLabel="Request a Quote"
      />
    </>
  );
}
