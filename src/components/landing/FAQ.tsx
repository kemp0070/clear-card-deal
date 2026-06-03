import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Do I need to switch banks to use SwipeCards?",
    a: "No. We deposit directly to your existing business bank account. There's nothing to change on your end.",
  },
  {
    q: "What hardware do I get?",
    a: "All approved merchants get a free mobile card reader. Retail and restaurant accounts also qualify for free FirstData™ POS terminals — we'll match the hardware to your business.",
  },
  {
    q: "How fast are deposits?",
    a: "Most clients are set up with next-day funding. We can usually have your batch in your account by the next business morning.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. We compete on rates and service — not lock-in. You can leave any time with no early termination fees.",
  },
  {
    q: "I already have a POS system — can you still help?",
    a: "Yes. We support most major POS platforms and can reprogram your existing terminals to run on our lower rates. Setup is free.",
  },
  {
    q: "How is pricing structured?",
    a: "We use interchange-plus pricing: you pay the true wholesale card-network cost plus a small, transparent markup. No hidden tiers, no surprise fees.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">FAQ</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Common questions, honest answers.
          </h2>
        </div>
        <Accordion type="single" collapsible className="bg-card rounded-2xl border border-border px-6">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left font-semibold text-ink hover:no-underline py-5">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
