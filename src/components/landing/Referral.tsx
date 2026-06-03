import { Gift } from "lucide-react";

export function Referral() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-ink text-background rounded-3xl p-12 lg:p-16 overflow-hidden">
          <div className="absolute -top-24 -right-24 size-80 bg-brand/30 blur-[120px] rounded-full" />
          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-background/80 text-xs font-bold uppercase tracking-wider mb-5">
                <Gift className="size-3.5" /> Referral program
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                Earn $200 for every merchant you refer.
              </h2>
              <p className="text-background/70 max-w-xl">
                Help a fellow business owner save on processing — and put cash in your pocket every time. No caps, no expiration.
              </p>
            </div>
            <a
              href="#apply"
              className="bg-background text-ink px-7 py-4 rounded-xl font-bold hover:bg-brand hover:text-primary-foreground transition-colors shadow-lg whitespace-nowrap"
            >
              Become a partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
