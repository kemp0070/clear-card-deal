const steps = [
  {
    n: "01",
    title: "Submit your info",
    body: "Tell us about your business in 60 seconds — no commitment, no obligation.",
  },
  {
    n: "02",
    title: "Quick verification",
    body: "A dedicated account manager calls within 2 hours with a custom rate proposal.",
  },
  {
    n: "03",
    title: "Start processing",
    body: "Free hardware ships overnight. Most merchants are live the next business day.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">How it works</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink tracking-tight">
            From application to first swipe in 24 hours.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative p-8 rounded-2xl bg-surface border border-border">
              <div className="text-5xl font-bold text-brand/20 mb-4 font-mono">{s.n}</div>
              <h3 className="text-lg font-bold text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
