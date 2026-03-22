import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import {
  defaultDescription,
  defaultOpenGraph,
  getSiteUrl,
  titleBase,
} from "@/lib/metadata";
import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "600", "700"],
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: titleBase,
    template: "%s | Owen Scaffolding",
  },
  description: defaultDescription,
  openGraph: {
    ...defaultOpenGraph,
    url: siteUrl,
    siteName: "Owen Scaffolding Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: titleBase,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
