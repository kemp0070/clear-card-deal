import logoAsset from "@/assets/swipecards-logo.png.asset.json";

export function Logo({ className = "h-7", invert = false }: { className?: string; invert?: boolean }) {
  return (
    <img
      src={logoAsset.url}
      alt="SwipeCards"
      width={300}
      height={64}
      className={`${className} w-auto ${invert ? "invert brightness-200" : ""}`}
    />
  );
}
