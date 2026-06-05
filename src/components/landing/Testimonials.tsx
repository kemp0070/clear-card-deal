import { Star } from "lucide-react";

const reviews = [
  {
    stars: 5,
    text: "Switching to SwipeCards was one of the best decisions I made for my gym. We were overpaying on processing fees for years without realizing it. Dean came in, ran our numbers, and we started saving almost immediately. Next-day deposits alone changed our cash flow completely.",
    name: "J.M.",
    role: "Gym Owner",
    location: "Elmhurst, IL",
  },
  {
    stars: 5,
    text: "I was skeptical at first because we already had a system in place. But the team at SwipeCards integrated with what we had, cut our fees significantly, and the whole setup took less than a week. Wish we had done it sooner.",
    name: "R.T.",
    role: "Restaurant Owner",
    location: "Nashville, TN",
  },
  {
    stars: 5,
    text: "As a small salon owner I didn't think I processed enough volume to matter. SwipeCards proved me wrong. The free equipment and transparent contract were what sold me. No surprises, ever.",
    name: "A.L.",
    role: "Salon Owner",
    location: "Austin, TX",
  },
  {
    stars: 5,
    text: "The 24/7 support is real. I had an issue on a Saturday night during a busy shift and someone actually picked up and walked me through it in ten minutes. That kind of service is rare.",
    name: "M.K.",
    role: "Retail Shop Owner",
    location: "Denver, CO",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-brand-soft relative overflow-hidden">
      <div className="absolute -top-40 -right-40 size-[500px] bg-brand/10 blur-[140px] rounded-full" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-brand mb-3">
            What merchants say
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-ink text-balance">
            Trusted by business owners nationwide.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name + review.location}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-brand text-brand"
                  />
                ))}
              </div>
              <blockquote className="text-ink leading-relaxed text-[15px] flex-1">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-sm font-semibold text-ink">{review.name}</div>
                <div className="text-xs text-muted-foreground">
                  {review.role} — {review.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
