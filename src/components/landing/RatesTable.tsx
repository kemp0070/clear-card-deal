

export function RatesTable() {
  return (
    <section id="rates" className="py-20 lg:py-28 bg-brand-soft text-ink relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] bg-brand/15 blur-[140px] rounded-full" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
            Already processing?
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-5 tracking-tight text-balance text-ink">
            We'll beat the rate you're paying today.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Have a POS already? We can reprogram most major terminals for free and move you to a lower rate.
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
            title="Your Bank"
            body="Deposits land in your existing business account the next business day. Nothing to change on your end."
          />
          <BeatCard
            big="Change"
            title="The Fees"
            body="Custom pricing built around your industry, ticket size, and volume — always lower than what your bank charges."
          />
        </div>

      </div>
    </section>
  );
}

function BeatCard({ big, title, body }: { big: string; title: string; body: string }) {
  return (
    <div className="relative rounded-2xl bg-background border border-border shadow-sm p-7 overflow-hidden">
      <div className="text-3d text-5xl font-bold mb-1">{big}</div>
      <div className="text-xl font-bold mb-3 text-ink">{title}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
