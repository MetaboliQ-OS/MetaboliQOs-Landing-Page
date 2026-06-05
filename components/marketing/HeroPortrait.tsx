import Image from "next/image";

export function HeroPortrait({ className = "" }: { className?: string }) {
  const featherMask =
    "radial-gradient(ellipse 78% 88% at 50% 43%, #000 52%, rgba(0,0,0,0.6) 76%, transparent 100%)";

  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 66% 62% at 50% 42%, rgba(201,168,76,0.16), transparent 70%)",
        }}
      />
      <Image
        src="/images/hero-founder-v4.jpg"
        alt="Mru Patel — building MetaboliQ OS"
        width={852}
        height={820}
        className="h-auto w-full object-contain object-center"
        priority
        fetchPriority="high"
        sizes="(max-width: 1023px) 320px, 360px"
        style={{ WebkitMaskImage: featherMask, maskImage: featherMask }}
      />
    </div>
  );
}
