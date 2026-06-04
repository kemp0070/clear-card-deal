import { BadgeDollarSign, Zap, Building2, MonitorSmartphone, Settings2, Headphones } from "lucide-react";

const items = [
  {
    icon: BadgeDollarSign,
    title: "Honest Pricing",
    body: "Honest credit card processing for modern businesses. Lower rates, transparent contracts, tailored hardware solutions, and real support.  You can spend your time on other areas of your business, and leave this to us.",
  },
  {
    icon: Zap,
    title: "Next-Day Deposits",
    body: "Get your funds when you need them with automated next-business-day deposits directly to your bank account.",
  },
  {
    icon: Building2,
    title: "Merchant Account Setup",
    body: "Full onboarding handled for you — underwriting, account provisioning, and go-live coordination from day one.",
  },
  {
    icon: MonitorSmartphone,
    title: "Gateway Software Included",
    body: "Virtual terminal, online payments, invoicing, and reporting — all bundled into your merchant account at no extra cost. ",
  },
  {
    icon: Settings2,
    title: "Free Terminal Programming",
    body: "We never charge our clients a fee to program their terminals.",
  },
  {
    icon: Headphones,
    title: "24/7 U.S. Based Support",
    body: "Real support, around the clock — free setup assistance, ongoing technical support, and a dedicated account manager for the life of your account.",
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
            Everything you need to accept payments — and keep more of every swipe.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="group p-7 bg-card rounded-2xl border border-border hover:border-brand/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              <div className="size-11 rounded-xl bg-brand-soft text-brand grid place-items-center mb-5 group-hover:bg-brand group-hover:text-primary-foreground transition-colors">
                <item.icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line font-bold text-sm">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
