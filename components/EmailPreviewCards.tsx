const cards = [
  {
    title: "Welcome to MetaboliQ OS",
    text: "Your onboarding protocol is ready. Sync your biomarkers to start daily optimization.",
  },
  {
    title: "Weekly Metabolic Brief",
    text: "Your recovery index improved by 18%. Continue the evening glucose protocol.",
  },
  {
    title: "Beta Access Update",
    text: "You are verified and in priority queue. We will notify you when your invite unlocks.",
  },
];

export function EmailPreviewCards() {
  return (
    <section className="mx-auto mt-16 w-[92%] max-w-6xl">
      <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight">
        Premium <span className="gold-text">Email Intelligence</span>
      </h2>
      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c9a84c]">Preview</p>
            <h3 className="mt-3 text-lg font-semibold text-text-primary">{card.title}</h3>
            <p className="mt-2 text-sm text-text-secondary">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
