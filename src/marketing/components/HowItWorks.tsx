import React from "react";
import { CalendarCheck2, ShieldCheck, Smile } from "lucide-react";

const steps = [
  { title: "Book online or in the app", icon: CalendarCheck2 },
  { title: "A verified provider arrives", icon: ShieldCheck },
  { title: "Enjoy your clean space", icon: Smile },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">How It Works</h3>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article key={step.title} className="rounded-xl border border-slate-200 p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D91429] text-white font-bold">
                    {index + 1}
                  </span>
                  <Icon className="h-6 w-6 text-[#D91429]" />
                </div>
                <p className="mt-4 text-lg font-medium text-slate-800">{step.title}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
