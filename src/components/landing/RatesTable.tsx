export function RatesTable() {
  const rows = [
    { type: "Credit (Swiped)", bank: "2.90% + 30¢", us: "1.50% + 10¢" },
    { type: "Debit (Swiped)", bank: "1.90% + 20¢", us: "0.50% + 5¢" },
    { type: "E-commerce / Keyed", bank: "3.50% + 30¢", us: "2.20% + 15¢" },
    { type: "Monthly minimum", bank: "$25", us: "$0" },
  ];
  return (
    <section id="rates" className="py-24 lg:py-32 bg-ink text-background">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Honest pricing</div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 tracking-tight">Save on every swipe.</h2>
          <p className="text-background/60 max-w-xl mx-auto">
            See what wholesale interchange-plus pricing looks like compared to traditional bank rates.
          </p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur">
          <div className="grid grid-cols-3 px-8 py-5 border-b border-white/10 text-[10px] font-bold uppercase tracking-[0.18em] text-background/50">
            <div>Transaction type</div>
            <div>Traditional bank</div>
            <div className="text-brand">SwipeCards rate</div>
          </div>
          {rows.map((row) => (
            <div
              key={row.type}
              className="grid grid-cols-3 px-8 py-6 border-b border-white/5 last:border-0 items-center"
            >
              <div className="font-semibold">{row.type}</div>
              <div className="text-background/50 line-through">{row.bank}</div>
              <div className="text-brand font-bold text-lg">{row.us}</div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-xs text-background/40">
          * Custom rates based on business type and monthly processing volume. Already have a POS system? We can still lower your rate.
        </p>
      </div>
    </section>
  );
}
