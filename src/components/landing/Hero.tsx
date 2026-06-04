import { ArrowRight, ShieldCheck, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[640px] bg-gradient-to-b from-brand-soft/60 via-background to-background -z-10" />
      <div className="absolute inset-x-0 top-0 h-[640px] surface-grid opacity-40 -z-10" />
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="size-3.5" /> Lower rates, guaranteed
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.02] tracking-tight mb-6 text-balance">
            Lowest Rates & <span className="text-brand">Best Service</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[52ch] mb-8 leading-relaxed whitespace-pre-line">
            Honest pricing, zero term transparent contracts, next-day deposits, and 24/7 U.S.-based support.&nbsp;
            {"\n\n"}
            Never accepted credit cards before?&nbsp; Contact us.
            {"\n"}
            Already have a processor? Contact us.
            {"\n"}
            Need support with your credit card or POS system?&nbsp; Contact us.
            {"\n\n\n"}
            <strong className="text-ink font-semibold">We are proud to have a 98% client retention over 15 years — because we treat your business like our own.</strong>
          </p>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-brand text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20"
            >
              Get my rate <ArrowRight className="size-4" />
            </a>
            <a
              href="mailto:sales@swipecards.cc"
              className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold bg-card border border-border hover:border-brand/40 transition-colors"
            >
              Email your statement
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <Pill>Transparent contracts</Pill>
            <Pill>Free mobile card readers</Pill>
            <Pill>Keep your bank</Pill>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="size-4 rounded-full bg-brand-soft text-brand grid place-items-center">
        <Check className="size-2.5" strokeWidth={3} />
      </span>
      {children}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="relative bg-card rounded-3xl p-10 lg:p-12 border border-border shadow-2xl shadow-brand/10 overflow-hidden">
        <div className="absolute -top-20 -right-20 size-64 bg-brand/15 blur-[100px] rounded-full" />
        <div className="relative">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
            AVERAGE MERCHANT SAVINGS WHEN THEY MAKE THE SWITCH
          </div>
          <div className="text-[7rem] sm:text-[8.5rem] font-bold text-3d leading-none mb-2">
            27%
          </div>
          <div className="mt-8 pt-6 border-t border-border grid grid-cols-3 gap-4">
            <Stat label="Setup fee" value="$0" />
            <Stat label="SUPPORT" value="24/7" />
            <Stat label="FUNDING" value="NEXT DAY" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 bg-ink text-background rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
        <div className="text-[10px] uppercase tracking-widest opacity-70">Reply by</div>
        <div className="text-sm font-bold">Next business day</div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
      <div className="text-base font-bold text-ink">{value}</div>
    </div>
  );
}
