import React from "react";

const services = [
  {
    title: "Standard Clean",
    description: "Routine cleaning to keep your home fresh and comfortable.",
    emoji: "🧹",
  },
  {
    title: "Deep Clean",
    description: "A detailed top-to-bottom clean for high-touch and hard-to-reach areas.",
    emoji: "✨",
  },
  {
    title: "Move In/Out Clean",
    description: "Thorough cleaning for smooth transitions between homes.",
    emoji: "🏠",
  },
  {
    title: "Post-Construction Clean",
    description: "Dust and debris removal after renovation or construction projects.",
    emoji: "🔨",
  },
  {
    title: "Commercial Clean",
    description: "Reliable office and workspace cleaning tailored to your schedule.",
    emoji: "🏢",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#D91429] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Services</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">Professional cleaning for every need — residential and commercial.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4">{s.emoji}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
