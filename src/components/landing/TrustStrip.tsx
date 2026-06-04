export function TrustStrip() {
  const partners = ["VISA", "Mastercard", "AMEX", "Discover", "Apple & Google Pay"];
  return (
    <div className="border-y border-border bg-surface py-10">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[10px] uppercase tracking-[0.22em] font-bold text-ink mb-7">
          Trusted networks & processing partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-4">
          {partners.map((p) => (
            <span key={p} className="font-bold text-lg tracking-tight text-ink">
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
