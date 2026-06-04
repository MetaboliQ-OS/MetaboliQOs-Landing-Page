const stats = [
  { label: "Founding Waitlist", value: "14,000+" },
  { label: "Health Operators", value: "310+" },
  { label: "Early Partners", value: "42" },
];

export function SocialProof() {
  return (
    <section className="mx-auto mt-16 w-[92%] max-w-6xl rounded-2xl glass p-8">
      <h2 className="text-center text-3xl font-semibold">
        Trusted by <span className="gold-text">High Performers</span>
      </h2>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-[#111111] p-5 text-center gold-border">
            <p className="text-3xl font-bold gold-text">{stat.value}</p>
            <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
