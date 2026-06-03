import { Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#top" className="flex items-center">
            <Logo className="h-6" />
          </a>
          <div className="hidden md:flex gap-7 text-sm font-medium text-muted-foreground">
            <a href="#solutions" className="hover:text-brand transition-colors">Solutions</a>
            <a href="#equipment" className="hover:text-brand transition-colors">Equipment</a>
            <a href="#rates" className="hover:text-brand transition-colors">Rates</a>
            <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="tel:18665635691" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-ink">
            <Phone className="size-4 text-brand" /> 866-563-5691
          </a>
          <a
            href="#apply"
            className="bg-brand text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors shadow-sm"
          >
            Apply Now
          </a>
        </div>
      </div>
    </nav>
  );
}
