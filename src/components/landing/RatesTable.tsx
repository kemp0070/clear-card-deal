export function RatesTable() {
  return (
    <section id="rates" className="py-24 lg:py-32 bg-ink text-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Honest pricing</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Save on every swipe.</h2>
          <p className="text-background/60 max-w-xl mx-auto">
            Traditional banks often charge up to 3.5% per transaction. Our rates are always lower —
            customized to your business, your volume, and your industry.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur grid md:grid-cols-2">
          <div className="p-10 border-b md:border-b-0 md:border-r border-white/10">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-background/50 mb-4">
              Traditional bank
            </div>
            <div className="text-5xl font-bold text-background/60 line-through mb-3">3.50%</div>
            <p className="text-sm text-background/60 leading-relaxed">
              Tiered pricing, hidden monthly minimums, and rates that can quietly creep up over time.
            </p>
          </div>
          <div className="p-10 bg-brand/5">
            <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand mb-4">
              SwipeCards.cc
            </div>
            <div className="text-5xl font-bold text-brand mb-3">Always lower</div>
            <p className="text-sm text-background/70 leading-relaxed">
              Every quote is custom to your business. Send us a copy of your current processing
              statement and we'll show you exactly how much you'll save.
            </p>
          </div>
        </div>
        <p className="text-center mt-8 text-sm text-background/60">
          Email your most recent processing statement to{" "}
          <a href="mailto:sales@swipecards.cc" className="text-brand font-semibold hover:underline">
            sales@swipecards.cc
          </a>{" "}
          and we'll get back to you by the next business day.
        </p>
      </div>
    </section>
  );
}
