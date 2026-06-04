import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  businessName: z.string().trim().min(1, "Business name required").max(120),
  contactName: z.string().trim().min(1, "Your name required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(40),
  acceptsCards: z.enum(["yes", "no"]),
  volume: z.string(),
  interests: z.array(z.string()).min(1, "Pick at least one"),
});

const INTERESTS = ["POS System", "Mobile Payments", "Retail Solutions", "Restaurant Solutions"];
const VOLUMES = ["$0 – $10k", "$10k – $50k", "$50k – $250k", "$250k+"];

export function ApplyForm() {
  const [accepts, setAccepts] = useState<"yes" | "no">("yes");
  const [volume, setVolume] = useState(VOLUMES[1]);
  const [interests, setInterests] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (i: string) =>
    setInterests((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      businessName: form.get("businessName"),
      contactName: form.get("contactName"),
      email: form.get("email"),
      phone: form.get("phone"),
      acceptsCards: accepts,
      volume,
      interests,
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    // Placeholder submission — wire to email/CRM later
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thanks! We'll get back to you by the next business day.");
    (e.target as HTMLFormElement).reset();
    setInterests([]);
  };

  return (
    <section id="apply" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
        <div className="lg:sticky lg:top-24">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">Apply now</div>
          <h2 className="text-3xl lg:text-5xl font-bold text-ink tracking-tight mb-5 text-balance">
            Get your custom rate proposal by the next business day.
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            No commitment — just an honest, side-by-side comparison of your current rates against ours, prepared by a dedicated account manager.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-brand" /> 60-second electronic application</div>
            <div className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-brand" /> Custom proposal, not a generic quote</div>
            <div className="flex items-center gap-3"><span className="size-1.5 rounded-full bg-brand" /> Hardware specific to your business needs</div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card border border-border rounded-3xl p-8 lg:p-10 shadow-xl shadow-brand/5 space-y-7"
        >
          <Field label="Currently accept credit cards?">
            <div className="grid grid-cols-2 gap-3">
              {(["yes", "no"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setAccepts(v)}
                  className={`py-3 rounded-lg border text-sm font-semibold capitalize transition-colors ${
                    accepts === v
                      ? "bg-brand text-primary-foreground border-brand"
                      : "bg-surface border-border text-ink hover:border-brand/40"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </Field>

          <Field label="Estimated monthly volume">
            <select
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              className="w-full h-11 px-4 bg-surface border border-border rounded-lg text-sm font-medium text-ink focus:outline-none focus:ring-2 focus:ring-brand"
            >
              {VOLUMES.map((v) => (
                <option key={v}>{v}</option>
              ))}
            </select>
          </Field>

          <Field label="I'm interested in">
            <div className="grid grid-cols-2 gap-2.5">
              {INTERESTS.map((i) => {
                const on = interests.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggle(i)}
                    className={`py-3 px-3 rounded-lg border text-xs font-semibold transition-colors text-left ${
                      on
                        ? "bg-brand-soft border-brand text-brand"
                        : "bg-surface border-border text-ink hover:border-brand/40"
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </Field>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Business name">
              <Input name="businessName" placeholder="Acme Coffee" />
            </Field>
            <Field label="Your name">
              <Input name="contactName" placeholder="Jane Doe" />
            </Field>
            <Field label="Email">
              <Input name="email" type="email" placeholder="jane@acme.com" />
            </Field>
            <Field label="Phone">
              <Input name="phone" type="tel" placeholder="(555) 123-4567" />
            </Field>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-brand text-primary-foreground font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors shadow-lg shadow-brand/20 disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Request my proposal"}
          </button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting you agree to be contacted by SwipeCards.cc. We don't share your info.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-11 px-4 bg-surface border border-border rounded-lg text-sm text-ink placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand"
    />
  );
}
