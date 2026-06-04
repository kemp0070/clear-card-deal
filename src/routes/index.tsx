import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { TrustStrip } from "@/components/landing/TrustStrip";
import { ValueProps } from "@/components/landing/ValueProps";
import { RatesTable } from "@/components/landing/RatesTable";
import { StatementCTA } from "@/components/landing/StatementCTA";
import { EquipmentShowcase } from "@/components/landing/EquipmentShowcase";
import { FAQ } from "@/components/landing/FAQ";
import { ApplyForm } from "@/components/landing/ApplyForm";
import { Referral } from "@/components/landing/Referral";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "SwipeCards.cc — Lower Your Credit Card Processing Fees";
const DESCRIPTION =
  "Honest pricing, zero term transparent contracts, next-day deposits, and 24/7 U.S.-based support. \n\nNever accepted credit cards before?  Contact us.\nAlready have a processor? Contact us.\nNeed support with your credit card or POS system?  Contact us.\n\n\nWe are proud to have a 98% client retention over 15 years — because we treat your business like our own.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SwipeCards.cc",
          url: "https://swipecards.cc",
          email: "sales@swipecards.cc",
          telephone: "+1-630-492-0697",
          address: {
            "@type": "PostalAddress",
            streetAddress: "110 E Schiller #310",
            addressLocality: "Elmhurst",
            addressRegion: "IL",
            postalCode: "60126",
            addressCountry: "US",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <ValueProps />
        <RatesTable />
        <StatementCTA />
        <EquipmentShowcase />
        <FAQ />
        <ApplyForm />
        <Referral />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}

