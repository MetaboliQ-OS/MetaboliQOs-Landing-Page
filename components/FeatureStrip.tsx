const features = [
  "Personalized Metabolic OS",
  "Real-Time Biomarker Signals",
  "AI-Coach Recommendations",
  "Precision Habit Protocols",
];

export function FeatureStrip() {
  return (
    <section className="mx-auto mt-12 w-[92%] max-w-6xl">
      <div className="grid gap-4 rounded-2xl glass p-4 md:grid-cols-4">
        {features.map((feature) => (
          <div key={feature} className="rounded-xl bg-[#111111] px-4 py-3 gold-border">
            <p className="text-center text-sm text-text-primary">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
