import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PAGE_HERO_SERVICES, SERVICE_IMAGES } from "@/lib/site-images";
import { defaultDescription, getSiteUrl } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Domestic, commercial, chimney and roof access, bespoke solutions, emergency call-out, and scaffold hire across West Wales.",
  openGraph: {
    title: "Scaffolding Services | Owen Scaffolding",
    description: defaultDescription,
    url: `${getSiteUrl()}/services`,
  },
};

const sections = [
  {
    id: "domestic",
    title: "Domestic Scaffolding",
    image: SERVICE_IMAGES.domestic,
    body: [
      "Whether you are re-roofing, extending, repairing a chimney, or painting and maintaining your property, we provide safe, tidy domestic scaffolding that is erected quickly and with minimal disruption.",
      "Our team understands home environments — we protect driveways and gardens where we can, communicate clearly, and leave the site in good order.",
      "From single-storey builds to more involved projects, you get the same careful planning and professional finish.",
    ],
    bullets: [
      "Extensions and structural work",
      "Roofing, chimney, and maintenance access",
      "Neighbour-friendly, tidy sites",
      "Free, no-obligation quotes",
    ],
  },
  {
    id: "commercial",
    title: "Commercial Scaffolding",
    image: SERVICE_IMAGES.commercial,
    body: [
      "We support offices, retail units, industrial buildings, and mixed-use sites across West Wales. Work is planned to suit your programme, your tenants, and your site rules.",
      "Where required, RAMS documentation can be provided to keep your project aligned with site procedures and insurer expectations.",
      "If you are refurbishing, re-cladding, or maintaining a commercial asset, we build access that keeps your teams moving safely.",
    ],
    bullets: [
      "Retail, office, and industrial projects",
      "Programme-aware planning",
      "RAMS documentation available",
      "Professional site presence",
    ],
  },
  {
    id: "chimney",
    title: "Chimney & Roof Access",
    image: SERVICE_IMAGES.chimney,
    body: [
      "Chimney stacks, ridge lines, and full roof repairs often need precise, stable access — not a rushed tower and hope. We specialise in safe routes to height for roofers, chimney engineers, and maintenance teams.",
      "Where access is awkward or the building is sensitive, we engineer solutions that protect the structure and the people working on it.",
      "If others have said it is too difficult, speak to us — tight spaces are where experience counts.",
    ],
    bullets: [
      "Chimney stacks and pots",
      "Ridge work and roof planes",
      "Partnering with your roofer or specialist trades",
      "Adaptable as the job evolves",
    ],
  },
  {
    id: "bespoke",
    title: "Bespoke & Complex Access",
    image: SERVICE_IMAGES.bespoke,
    body: [
      "Some sites are tight, sloping, or constrained by neighbouring boundaries. Others need multi-level, multi-trade access with careful sequencing. That is where bespoke scaffolding matters.",
      "We design and build access that fits the reality of your site — not a textbook drawing. If another contractor has walked away, we still want the conversation.",
      "Industrial and complex projects sit here too: heavier loads, integrated ladders and gates, and coordination with other trades.",
    ],
    bullets: [
      "Tight lanes and poor access",
      "Multi-storey and multi-trade sites",
      "Industrial and non-standard structures",
      "Problem-solving with site surveys",
    ],
  },
  {
    id: "emergency",
    title: "Emergency Call-Out",
    image: SERVICE_IMAGES.emergency,
    body: [
      "Storms, slipped slates, and sudden structural issues cannot wait. We provide fast-response scaffolding to make a building safe and workable again.",
      "We prioritise clear communication, rapid attendance where possible, and a practical plan that gets trades on site quickly.",
      "If you are unsure whether it is an emergency, call anyway — we will advise honestly.",
    ],
    bullets: [
      "Storm and impact damage",
      "Urgent temporary weather protection",
      "Rapid attendance across the region",
      "Straightforward pricing and advice",
    ],
  },
  {
    id: "hire",
    title: "Scaffold Hire",
    image: SERVICE_IMAGES.hire,
    body: [
      "Short-term or long-term hire is available throughout West Wales, with full erection, adaptation, and dismantling handled by our own team.",
      "Hire periods flex around your programme — we align dismantling with your completion dates to avoid unnecessary cost.",
      "Whether it is a small domestic tower or a larger commercial package, you get equipment that is fit for purpose and installed by qualified scaffolders.",
    ],
    bullets: [
      "Short and long-term packages",
      "Full erect and dismantle service",
      "Adaptations as your job changes",
      "Coverage across West Wales",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="From single-storey domestic scaffolding to complex commercial access — we handle it all."
        imageSrc={PAGE_HERO_SERVICES}
      />

      <div className="bg-background pb-8 pt-4">
        {sections.map((s, idx) => (
          <section
            key={s.id}
            id={s.id}
            className={`scroll-mt-28 border-t border-gold/15 py-16 sm:py-20 ${
              idx === 0 ? "border-t-0 pt-8 sm:pt-10" : ""
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
                <SectionReveal
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-sm border border-gold/20",
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    quality={85}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </SectionReveal>
                <SectionReveal
                  className={cn(idx % 2 === 1 ? "lg:order-1" : "lg:order-2")}
                >
                  <p className="text-xs uppercase tracking-label text-gold">
                    Service
                  </p>
                  <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
                    {s.title}
                  </h2>
                  <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 24)}>{p}</p>
                    ))}
                  </div>
                  <ul className="mt-6 space-y-2 text-sm text-foreground/90">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href={`/contact#quote`}>Get a Quote for This Service</Link>
                  </Button>
                </SectionReveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTABanner />
    </>
  );
}
