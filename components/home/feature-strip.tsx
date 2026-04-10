const features = [
  {
    title: "30-sec summary",
    description: "Skip the transcript and get the main read in one glance."
  },
  {
    title: "Key metrics",
    description: "Revenue, EPS, guidance and after-hours reaction in one layer."
  },
  {
    title: "Trend view",
    description: "See whether the quarter is part of a real pattern or just noise."
  }
];

export function FeatureStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5 text-sm text-slate-300"
        >
          <p className="font-medium text-white">{feature.title}</p>
          <p className="mt-2 leading-6 text-slate-400">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
