import { ArrowRight, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-brand-soft/60 via-background to-background -z-10" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-soft border border-brand/15 text-brand text-xs font-semibold uppercase tracking-wider mb-6">
            <ShieldCheck className="size-3.5" /> Industry-best rates, guaranteed
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-6 text-balance">
            Lower your processing fees{" "}
            <span className="text-brand">without switching banks.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[52ch] mb-10 leading-relaxed">
            Honest merchant services for modern business. Custom rates that always beat the
            banks, next-day deposits, free mobile card readers, and 24/7 US support.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#apply"
              className="inline-flex items-center gap-2 bg-brand text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors shadow-lg shadow-brand/15"
            >
              Apply Now <ArrowRight className="size-4" />
            </a>
            <a
              href="#rates"
              className="inline-flex items-center px-6 py-3.5 rounded-xl font-semibold bg-card border border-border hover:bg-surface transition-colors"
            >
              See Our Rates
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> No long-term contracts</div>
            <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> Free terminal program</div>
            <div className="hidden sm:flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-500" /> 24/7 US support</div>
          </div>
        </div>

        <SavingsCard />
      </div>
    </section>
  );
}

function SavingsCard() {
  return (
    <div className="relative animate-fade-up [animation-delay:120ms]">
      <div className="bg-card rounded-3xl p-8 border border-border shadow-2xl shadow-brand/10">
        <div className="flex items-center justify-between mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Rate comparison
          </span>
          <span className="flex items-center gap-1.5 text-brand font-semibold text-xs">
            <span className="size-1.5 rounded-full bg-brand animate-pulse" /> Custom quote
          </span>
        </div>
        <div className="mb-8">
          <div className="text-4xl font-bold text-ink tracking-tight">Always lower</div>
          <div className="text-sm text-muted-foreground mt-1">
            than what traditional banks charge
          </div>
        </div>
        <div className="h-px bg-border mb-6" />
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 bg-surface rounded-xl border border-border">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
              Traditional bank
            </div>
            <div className="text-sm font-semibold text-ink line-through opacity-70">Up to 3.5%</div>
          </div>
          <div className="p-4 bg-brand-soft rounded-xl border border-brand/20">
            <div className="text-[10px] font-semibold uppercase tracking-wider text-brand mb-1.5">
              SwipeCards
            </div>
            <div className="text-sm font-bold text-brand">Lower, always</div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-5 leading-relaxed">
          Send your current processing statement to{" "}
          <span className="text-brand font-semibold">sales@swipecards.cc</span> for an exact
          side-by-side quote.
        </p>
      </div>
      <div className="absolute -bottom-5 -right-5 bg-ink text-background rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
        <div className="text-[10px] uppercase tracking-widest opacity-70">Reply time</div>
        <div className="text-lg font-bold">Next business day</div>
      </div>
    </div>
  );
}
