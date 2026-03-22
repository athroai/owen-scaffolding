const titleBase = "Owen Scaffolding | Professional Scaffolding in West Wales";

export const defaultDescription =
  "Fully qualified, insured and H&S compliant scaffolding services with 20+ years experience. Based in Cardigan, West Wales. Call 07890 055319 for a free quote.";

export function getSiteUrl(): string {
  if (typeof process.env.NEXT_PUBLIC_SITE_URL === "string" && process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return "https://owenscaffolding.co.uk";
}

export const defaultOpenGraph = {
  title: titleBase,
  description: defaultDescription,
  locale: "en_GB",
  type: "website" as const,
};

export { titleBase };
