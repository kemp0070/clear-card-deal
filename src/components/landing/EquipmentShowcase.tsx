import { Check } from "lucide-react";
import retailImg from "@/assets/pos-retail.jpg";
import mobileImg from "@/assets/pos-mobile.jpg";

function Feature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-sm font-medium text-ink">
      <span className="size-5 rounded-full bg-brand-soft text-brand grid place-items-center">
        <Check className="size-3" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

export function EquipmentShowcase() {
  return (
    <section id="equipment" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Equipment</div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink text-balance">
            FirstData™ POS hardware built for every business.
          </h2>
        </div>

        <div className="space-y-24">
          {/* Retail */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden border border-border bg-card shadow-xl shadow-ink/5">
              <img
                src={retailImg}
                alt="FirstData retail POS terminal on a marble counter"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <div className="font-mono text-xs text-brand font-bold mb-3 uppercase tracking-widest">
                Retail & Restaurant Solutions
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-ink mb-5 tracking-tight">
                One easy-to-use system that runs your entire business.
              </h3>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                Replace your cash register and payment terminal with an integrated POS that handles
                inventory, employees, reporting, and customer-facing displays.
              </p>
              <ul className="space-y-3 mb-8">
                <Feature>Dual-screen customer-facing display</Feature>
                <Feature>Real-time inventory & employee management</Feature>
                <Feature>Pay-at-table, tipping & kitchen integration</Feature>
                <Feature>End-to-end encryption & PCI compliance</Feature>
              </ul>
              <a href="#apply" className="inline-flex items-center font-semibold text-brand hover:text-brand-dark border-b-2 border-brand pb-1">
                Get a custom hardware quote →
              </a>
            </div>
          </div>

          {/* Mobile */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2 rounded-3xl overflow-hidden border border-border bg-card shadow-xl shadow-ink/5">
              <img
                src={mobileImg}
                alt="Handheld mobile credit card reader and tableside payment terminal"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="lg:order-1">
              <div className="font-mono text-xs text-brand font-bold mb-3 uppercase tracking-widest">
                Mobile Payments
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-ink mb-5 tracking-tight">
                A little card reader that packs a big punch.
              </h3>
              <p className="text-muted-foreground mb-7 leading-relaxed">
                Latest in mobile payment security, durable design, paired with an easy-to-use mobile
                app. Take secure payments anywhere your business goes.
              </p>
              <ul className="space-y-3 mb-8">
                <Feature>Bluetooth chip, swipe & contactless</Feature>
                <Feature>Works with iOS and Android</Feature>
                <Feature>Built-in fraud protection</Feature>
                <Feature>Real-time sales reporting in-app</Feature>
              </ul>
              <a href="#apply" className="inline-flex items-center font-semibold text-brand hover:text-brand-dark border-b-2 border-brand pb-1">
                Request a free reader →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
