import { ContactDetailsBlock } from "@/components/contact/ContactDetailsBlock";
import { ContactBot } from "@/components/ContactBot";
import { CTABanner } from "@/components/CTABanner";
import { PageHero } from "@/components/PageHero";
import { PAGE_HERO_CONTACT } from "@/lib/site-images";
import { defaultDescription, getSiteUrl } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote from Owen Scaffolding — call 07890 055319 or email owenscaffolding@hotmail.com. Based in Cardigan, West Wales.",
  openGraph: {
    title: "Contact Owen Scaffolding",
    description: defaultDescription,
    url: `${getSiteUrl()}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get in Touch"
        subtitle="Free quotes, no obligation. We typically respond within a few hours."
        imageSrc={PAGE_HERO_CONTACT}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <ContactDetailsBlock />

          <div id="quote" className="scroll-mt-28">
            <ContactBot />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
