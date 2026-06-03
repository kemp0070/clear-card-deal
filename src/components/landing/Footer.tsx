import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-background pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Logo className="h-8" invert />
            </div>
            <p className="text-background/60 max-w-sm leading-relaxed">
              Honest credit card processing for modern businesses. Lower rates, transparent
              contracts, free mobile card readers, and real support — without changing your bank.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Contact</h4>
            <address className="not-italic text-sm text-background/70 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-background/40" />
                <span>110 E Schiller #310<br />Elmhurst, IL 60126</span>
              </div>
              <a href="mailto:sales@swipecards.cc" className="flex items-center gap-2.5 hover:text-background transition-colors">
                <Mail className="size-4 text-background/40" />
                <span>sales@swipecards.cc</span>
              </a>
              <a href="tel:16304920697" className="flex items-center gap-2.5 hover:text-background transition-colors">
                <Phone className="size-4 text-background/40" />
                <span>(630) 492-0697</span>
              </a>
            </address>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand mb-5">Explore</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#solutions" className="hover:text-background transition-colors">Solutions</a></li>
              <li><a href="#equipment" className="hover:text-background transition-colors">Equipment</a></li>
              <li><a href="#rates" className="hover:text-background transition-colors">Rates</a></li>
              <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="#partner" className="hover:text-background transition-colors">Become a seller</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-3">
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
