import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Gift } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(120),
  email: z.string().trim().email("Valid email required").max(255),
});

export function Referral() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! We'll be in touch about our partner program.");
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
                <Gift className="size-3.5" /> Referral program
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
                Become a SwipeCards.cc partner.
              </h2>
              <p className="text-background/70 max-w-xl">
                Help fellow business owners save on processing. Drop us your name and email and we'll
                send over the details of our referral program.
              </p>
            </div>
            <form
              onSubmit={onSubmit}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 backdrop-blur"
            >
              <label className="block">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-background/60 mb-2">
                  Your name
                </span>
                <input
                  name="name"
                  placeholder="Jane Doe"
                  className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>
              <label className="block">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-background/60 mb-2">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full h-11 px-4 bg-white/5 border border-white/10 rounded-lg text-sm text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </label>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-background text-ink font-bold py-3.5 rounded-xl hover:bg-brand hover:text-primary-foreground transition-colors disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Become a partner"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
