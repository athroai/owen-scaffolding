import { ValuesSection } from "@/components/about/ValuesSection";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { ABOUT_STORY_IMAGE, PAGE_HERO_ABOUT } from "@/lib/site-images";
import { defaultDescription, getSiteUrl } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Family-run scaffolding in Cardigan, West Wales — 20+ years experience, CISRS-compliant, and trusted across the region.",
  openGraph: {
    title: "About Owen Scaffolding",
    description: defaultDescription,
    url: `${getSiteUrl()}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Owen Scaffolding"
        subtitle="20+ Years. One Standard. The Highest."
        imageSrc={PAGE_HERO_ABOUT}
      />

      <section className="bg-background py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <SectionReveal>
            <p className="text-xs uppercase tracking-label text-gold">Our story</p>
            <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
              Built on reputation
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
              <p>
                Owen Scaffolding Limited is a family-run scaffolding contractor
                based in Cardigan, West Wales. Led by Colin Owen, the business has
                built its reputation on reliability, safety, and honest hard work.
                With over 20 years of experience in the industry, we&apos;ve handled
                everything from straightforward domestic jobs to complex, bespoke
                access solutions that other contractors turned away.
              </p>
              <p>
                We believe in turning up when we say we will, leaving the site
                tidy, charging fair prices, and making the job as easy as
                possible for our customers. That&apos;s not a sales pitch —
                it&apos;s what our reviews say.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/20">
            <Image
              src={ABOUT_STORY_IMAGE}
              alt="Owen Scaffolding on site"
              fill
              quality={85}
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </SectionReveal>
        </div>
      </section>

      <ValuesSection />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center">
            <p className="text-xs uppercase tracking-label text-gold">
              Credentials
            </p>
            <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
              Professional standards you can verify
            </h2>
          </SectionReveal>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "CISRS Qualified",
              "Public Liability Insured",
              "H&S Compliant",
              "20+ Years Experience",
            ].map((label) => (
              <div
                key={label}
                className="rounded-full border border-gold/35 px-5 py-2 text-xs font-semibold uppercase tracking-label text-gold"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
