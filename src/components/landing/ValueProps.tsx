import { Smartphone, Globe, Zap, Headphones } from "lucide-react";

const items = [
  {
    icon: Smartphone,
    title: "Free Mobile Card Readers",
    body: "Encrypted Bluetooth readers compatible with iOS and Android. Accept payments anywhere — zero hardware cost.",
  },
  {
    icon: Globe,
    title: "FirstData™ Global Gateway",
    body: "Authorize, settle, and manage credit card and electronic check transactions across web, retail, and mobile.",
  },
  {
    icon: Zap,
    title: "Next-Day Deposits",
    body: "Your revenue hits your business account the next business day — no waiting on processor batch delays.",
  },
  {
    icon: Headphones,
    title: "24/7 US-Based Support",
    body: "Free merchant account setup, reprogramming, and round-the-clock technical support from real humans.",
  },
];

export function ValueProps() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">The SwipeCards advantage</div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink mb-5 text-balance">
            Everything you need to take payments — and keep more of them.
          </h2>
          <p className="text-lg text-muted-foreground">
            Honest pricing, premium hardware, and the service you deserve. No hidden fees, ever.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-brand/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                <item.icon className="size-5" />
              </div>
              <h3 className="text-base font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
