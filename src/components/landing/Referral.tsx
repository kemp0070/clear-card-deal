import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Briefcase } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().min(7, "Valid phone required").max(40),
});

export function Referral() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! Someone from the team will be in touch shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="partner" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-ink text-background rounded-3xl p-10 lg:p-14 overflow-hidden">
          <div className="absolute -top-24 -right-24 size-80 bg-brand/30 blur-[120px] rounded-full" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-background/80 text-xs font-bold uppercase tracking-wider mb-5">
                <Briefcase className="size-3.5" /> Sales opportunity
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                Become a SwipeCards seller.
              </h2>
              <p className="text-background/70 max-w-xl leading-relaxed">
                Join our team and help businesses everywhere stop overpaying on processing. Drop
                your name, email, and phone number — we'll reach out with everything you need to
                get started.
              </p>
            </div>
            <form
              onSubmit={onSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur"
            >
              <SellerField label="Your name">
                <input
                  name="name"
                  placeholder="Jane Doe"
                  className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </SellerField>
              <SellerField label="Email">
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </SellerField>
              <SellerField label="Phone">
                <input
                  name="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </SellerField>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-background text-ink font-bold py-3.5 rounded-xl hover:bg-brand hover:text-primary-foreground transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Become a seller"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function SellerField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-widest text-background/60 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
