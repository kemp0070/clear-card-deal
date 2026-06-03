import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Do I need to switch banks?",
    a: "No. We deposit directly into your existing business account — nothing to change on your end.",
  },
  {
    q: "I already have a POS. Can you still lower my rate?",
    a: "Yes. We support most major POS platforms and reprogram terminals for free so you can keep your current setup and pay less.",
  },
  {
    q: "How fast are deposits?",
    a: "Most merchants are set up with next-day funding — your batch is in your account the next business morning.",
  },
  {
    q: "How is pricing structured?",
    a: "Every quote is custom to your business. Email a copy of your processing statement to sales@swipecards.cc and we'll send back an exact side-by-side comparison by the next business day.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">FAQ</div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink">
            Quick answers.
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
