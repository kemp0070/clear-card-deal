import { ArrowRight } from "lucide-react";

export function RatesTable() {
  return (
    <section id="rates" className="py-20 lg:py-28 bg-ink text-background relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] bg-brand/20 blur-[140px] rounded-full" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
            Already processing?
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight text-balance">
            We'll beat the rate you're paying today.
          </h2>
          <p className="text-background/70 leading-relaxed">
            Have a POS already? Keep it. We reprogram most major terminals for free and drop you
            onto a lower rate — usually by the next business day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <BeatCard
            big="Keep"
            title="Your POS"
            body="We support most major terminals. No new hardware needed to switch and save."
          />
          <BeatCard
            big="Keep"
            title="Your bank"
            body="Deposits land in your existing business account. Nothing to change on your end."
          />
          <BeatCard
            big="Lose"
            title="The fees"
            body="Custom pricing built around your industry, ticket size, and volume — always lower than the bank."
          />
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand mb-2">
              How to get your custom quote
            </div>
            <p className="text-lg font-semibold">
              Email your most recent processing statement to{" "}
              <a href="mailto:sales@swipecards.cc" className="text-brand hover:underline">
                sales@swipecards.cc
              </a>
            </p>
            <p className="text-sm text-background/60 mt-1">
              We'll send back a side-by-side savings breakdown by the next business day.
            </p>
          </div>
          <a
            href="#apply"
            className="shrink-0 inline-flex items-center gap-2 bg-brand text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:bg-brand-dark transition-colors"
          >
            Start saving <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function BeatCard({ big, title, body }: { big: string; title: string; body: string }) {
  return (
    <div className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-7 overflow-hidden">
      <div className="text-3d-light text-5xl font-bold mb-1">{big}</div>
      <div className="text-xl font-bold mb-3">{title}</div>
      <p className="text-sm text-background/70 leading-relaxed">{body}</p>
    </div>
  );
}
