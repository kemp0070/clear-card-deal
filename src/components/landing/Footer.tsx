import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <div className="size-7 bg-brand rounded-md flex items-center justify-center">
                <div className="size-2.5 bg-background rounded-full" />
              </div>
              <span className="font-bold tracking-tight text-lg">
                SwipeCards<span className="text-brand">.cc</span>
              </span>
            </div>
            <p className="text-background/60 max-w-sm leading-relaxed mb-6">
              Honest credit card processing at industry-best rates. Get all the features you deserve
              without the hidden fees.
            </p>
            <a
              href="#apply"
              className="inline-flex items-center bg-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors"
            >
              Ask about our referral program →
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Contact</h4>
            <address className="not-italic text-sm text-background/70 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-background/40" />
                <span>110 E Schiller #310<br />Elmhurst, IL 60126</span>
              </div>
              <a href="mailto:sales@swipecards.cc" className="flex items-center gap-2.5 hover:text-background transition-colors">
                <Mail className="size-4 text-background/40" /> sales@swipecards.cc
              </a>
              <a href="tel:18665635691" className="flex items-center gap-2.5 hover:text-background transition-colors">
                <Phone className="size-4 text-background/40" /> 866-563-5691
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Solutions</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#equipment" className="hover:text-background transition-colors">POS Terminals</a></li>
              <li><a href="#equipment" className="hover:text-background transition-colors">Mobile Payments</a></li>
              <li><a href="#equipment" className="hover:text-background transition-colors">Retail Solutions</a></li>
              <li><a href="#equipment" className="hover:text-background transition-colors">Restaurant Solutions</a></li>
              <li><a href="#rates" className="hover:text-background transition-colors">Rates & Pricing</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-[11px] text-background/40 leading-relaxed">
            All trademarks, service marks and trade names referenced in this material are the property of their respective owners.
            First Data Independent Sales (FDIS) is a registered ISO/MSP of Wells Fargo Bank, N.A., Walnut Creek, CA. American
            Express requires separate approval. FDIS Agent #114518 is an independent agent for FDIS.
          </p>
          <p className="text-[11px] text-background/40">
            &copy; {new Date().getFullYear()} SwipeCards.cc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
