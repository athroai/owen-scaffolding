/** Homepage card slug — `servicesAnchor` is the hash on /services */
export type ServiceCardSlug =
  | "domestic"
  | "commercial"
  | "industrial"
  | "chimney"
  | "bespoke"
  | "emergency";

export type ServiceSummary = {
  slug: ServiceCardSlug;
  /** Section id on /services */
  servicesAnchor: string;
  title: string;
  shortDescription: string;
};

export const serviceSummaries: ServiceSummary[] = [
  {
    slug: "domestic",
    servicesAnchor: "domestic",
    title: "Domestic Scaffolding",
    shortDescription:
      "Safe, tidy access for homes — extensions, roofing, and maintenance.",
  },
  {
    slug: "commercial",
    servicesAnchor: "commercial",
    title: "Commercial Scaffolding",
    shortDescription:
      "Retail, offices, and industrial units with professional documentation.",
  },
  {
    slug: "industrial",
    servicesAnchor: "bespoke",
    title: "Industrial & Complex Access",
    shortDescription:
      "Multi-storey and demanding sites where experience and planning matter.",
  },
  {
    slug: "chimney",
    servicesAnchor: "chimney",
    title: "Chimney & Roof Work",
    shortDescription:
      "Specialist access for stacks, ridges, and full roof repairs.",
  },
  {
    slug: "bespoke",
    servicesAnchor: "bespoke",
    title: "Bespoke Access Solutions",
    shortDescription:
      "Tight spaces and awkward jobs — engineered access built to fit.",
  },
  {
    slug: "emergency",
    servicesAnchor: "emergency",
    title: "Emergency Call-Out",
    shortDescription:
      "Rapid response when weather or damage makes access urgent.",
  },
];
