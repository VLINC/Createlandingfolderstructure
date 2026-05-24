import React from "react";

const steps = [
  {
    step: "01",
    title: "Book Online or In the App",
    description: "Choose your service, pick a time, and confirm your booking in minutes.",
  },
  {
    step: "02",
    title: "A Verified Provider Arrives",
    description: "Your background-checked professional arrives on time, fully equipped.",
  },
  {
    step: "03",
    title: "Enjoy Your Clean Space",
    description: "Sit back and relax — we handle everything so you don't have to.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-[#D91429] font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto">Getting a professional clean is quick and easy.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D91429] text-white text-xl font-extrabold mb-5 shadow-lg">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
