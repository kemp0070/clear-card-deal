import { Smartphone, Zap, Headphones } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "Free hardware",
    body: "Mobile readers and FirstData™ terminals at no cost. Accept chip, swipe, and contactless anywhere.",
  },
  {
    icon: Zap,
    title: "Next-day deposits",
    body: "Revenue lands in your existing business account the next business day — no batch delays.",
  },
  {
    icon: Headphones,
    title: "24/7 US support",
    body: "Real humans, around the clock. Free setup, reprogramming, and ongoing technical help.",
  },
];

export function ValueProps() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
            The SwipeCards advantage
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink text-balance">
            Everything you need to take payments — and keep more of them.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-brand/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                <item.icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
