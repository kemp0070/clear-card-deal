## Goal

Rebuild SwipeCards.cc as a modern, single-page site that combines the best of Stripe, Square, Helcim, and Mercury — clean fintech aesthetic, transparent rates, strong conversion path. Keep all original business info (services, contact, FDIS disclosure).

## Design direction (chosen: Modern Fintech Minimal)

- **Palette (trust-forward white/grey/blue):**
  - Background: `#ffffff` / surface `#f8fafc`
  - Foreground: `#0f172a` (deep slate, near-black for authority)
  - Muted: `#64748b`
  - Brand blue: `#2563eb` (primary CTA, accents)
  - Brand dark: `#1d4ed8` (hover)
  - Soft blue tint: `#eff6ff` (icon backgrounds)
  - Borders: `#e2e8f0`
- **Typography:** Inter (corporate, sleek, geometric) via `@fontsource/inter` — weights 400/500/600/700. Tight tracking on headlines, generous line-height on body.
- **Motion:** restrained — fade-up on scroll, counter animation on savings number, gentle hover-lift on cards. No flashy parallax.
- **Radius:** `0.75rem` base, larger (1.5rem/24px) on hero cards.

## Page sections (single long landing page, `/`)

1. **Sticky nav** — logo (SwipeCards.cc), section anchors (Solutions, Equipment, Rates, Apply), prominent "Apply Now" pill CTA + phone number.
2. **Hero** — split: left "Lower your processing fees without switching banks" headline + subheadline + dual CTA (Apply Now / See Rates) + phone. Right: animated "Potential Savings" card with live-feel rate comparison (current 2.9%+30¢ vs SwipeCards 1.8%+10¢) and a small bar chart.
3. **Trust strip** — Visa / Mastercard / Amex / Discover / FirstData wordmarks, muted/grayscale.
4. **Value props (4-card grid)** — Free Mobile Card Readers, FirstData Global Gateway, Next Day Deposits, 24/7 US Support. Each with small soft-blue icon tile.
5. **Rates / "Save on every swipe"** — comparison table (Traditional Bank vs SwipeCards) for Credit Swiped, Debit Swiped, E-commerce/Keyed. Dark-mode panel for contrast.
6. **Equipment showcase (zigzag)** — two blocks with generated product imagery:
   - FirstData POS terminals (retail) — bullets: inventory sync, multi-lane, employee mgmt.
   - Restaurant / Mobile solutions — bullets: pay-at-table, split-bill, mobile card reader.
7. **How it works** — 3 steps: Submit info → Quick verification → Start processing (next-day shipping).
8. **Referral program callout** — dark card, "Earn $200 for every merchant you refer."
9. **FAQ** — 5–6 accordion items (Do I need to switch banks? What hardware do I get? How fast are deposits? Is there a contract? What if I already have a POS? How is pricing structured?).
10. **Apply form** — fields: currently accept cards (Yes/No), monthly volume (select), interested in (POS / Mobile / Retail / Restaurant — multi-select chips), business name, contact name, email, phone. Submits to a server function that emails sales@swipecards.cc (stub for now — form posts but logs; wire to email later if user wants).
11. **Footer** — SwipeCards.cc identity, contact block (110 E Schiller #310, Elmhurst IL 60126; sales@swipecards.cc; 866-563-5691), solutions links (anchor to sections), full FDIS legal disclosure verbatim from current site, copyright.

## Technical plan

- **Stack:** existing TanStack Start template. All work in `src/routes/index.tsx` plus extracted components in `src/components/landing/`.
- **Components to create** (`src/components/landing/`):
  - `Nav.tsx`, `Hero.tsx`, `TrustStrip.tsx`, `ValueProps.tsx`, `RatesTable.tsx`, `EquipmentShowcase.tsx`, `HowItWorks.tsx`, `Referral.tsx`, `FAQ.tsx` (uses shadcn Accordion), `ApplyForm.tsx`, `Footer.tsx`.
- **Fonts:** `bun add @fontsource/inter`, import in `src/router.tsx` or root entry. No Google Fonts `<link>`.
- **Design tokens:** update `src/styles.css` `:root` and `.dark` blocks with the new palette in `oklch`. All components use semantic Tailwind classes (`bg-background`, `text-foreground`, `bg-primary`, etc.) — no hardcoded hex in components.
- **Images:** generate 2 product photos with `imagegen` (fast tier) and save to `src/assets/`:
  - POS retail terminal on a clean counter
  - Handheld mobile card reader / tableside device
- **SEO:** update `src/routes/index.tsx` `head()` — title "SwipeCards.cc — Lower Your Credit Card Processing Fees", meta description, og:title, og:description, og:url (relative), canonical (relative on leaf), JSON-LD `Organization` with name/address/phone.
- **Apply form submission:** for v1, client-side validation + a placeholder server function (`src/lib/apply.functions.ts`) that logs the submission and returns success. If the user wants real email delivery later, we wire it to Resend / similar via Lovable Cloud — flagged as a follow-up, not in this scope.
- **Animation:** small `useInView` fade-up via Intersection Observer (no extra library needed) or `motion/react` if already preferred — will use plain CSS keyframes + IO to keep deps lean.

## Out of scope (call out)

- Real email/CRM delivery for the apply form (placeholder submission only).
- Multi-page routes (Pricing, About, etc.) — single long page per your pick.
- Authentication, dashboard, or any logged-in experience.
- Blog/content pages.

Ready to build on approval.