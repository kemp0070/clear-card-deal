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
  "Honest credit card processing at industry-best rates. Free hardware, next-day deposits, and 24/7 US support. Already have a POS? We'll beat your current rate.";

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
          telephone: "+1-866-563-5691",
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

