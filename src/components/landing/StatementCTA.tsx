import { Mail, ArrowRight, FileText } from "lucide-react";

export function StatementCTA() {
  return (
    <section className="py-16 lg:py-20 bg-brand-soft">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border-2 border-brand/20 bg-gradient-to-br from-brand-soft via-background to-brand-soft p-8 lg:p-12 shadow-xl shadow-brand/10">
          <div className="absolute -top-20 -right-20 size-72 bg-brand/20 blur-[100px] rounded-full" />
          <div className="absolute top-6 right-6 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand text-primary-foreground text-[10px] font-bold uppercase tracking-widest shadow-md">
            <span className="size-1.5 rounded-full bg-background animate-pulse" /> Fastest path to savings
          </div>
          <div className="relative grid lg:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <div className="size-16 lg:size-20 rounded-2xl bg-brand text-primary-foreground grid place-items-center shadow-lg shadow-brand/30 shrink-0">
              <FileText className="size-8 lg:size-10" strokeWidth={1.75} />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-2">
                Already processing?
              </div>
              <h2 className="text-2xl lg:text-4xl font-bold text-ink tracking-tight mb-3 text-balance">
                Email us your processing statement.
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Send a copy of your most recent statement to{" "}
                <a
                  href="mailto:sales@swipecards.cc?subject=Processing%20statement%20review"
                  className="text-brand font-bold hover:underline"
                >
                  sales@swipecards.cc
                </a>{" "}
                and we'll send back an exact savings breakdown by the{" "}
                <strong className="text-ink font-semibold">next business day</strong>.
              </p>
            </div>
            <a
              href="mailto:sales@swipecards.cc?subject=Processing%20statement%20review"
              className="shrink-0 inline-flex items-center gap-2 bg-ink text-background px-6 py-4 rounded-xl font-bold hover:bg-brand transition-colors shadow-lg whitespace-nowrap"
            >
              <Mail className="size-4" /> Email statement <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
