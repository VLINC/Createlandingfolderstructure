import React from "react";
import { Sparkles, Brush, Home, Hammer, Building2 } from "lucide-react";

const services = [
  {
    title: "Standard Clean",
    description: "Routine cleaning to keep your home fresh and comfortable.",
    icon: Sparkles,
  },
  {
    title: "Deep Clean",
    description: "A detailed top-to-bottom clean for high-touch and hard-to-reach areas.",
    icon: Brush,
  },
  {
    title: "Move In/Out Clean",
    description: "Thorough cleaning for smooth transitions between homes.",
    icon: Home,
  },
  {
    title: "Post-Construction Clean",
    description: "Dust and debris removal after renovation or construction projects.",
    icon: Hammer,
  },
  {
    title: "Commercial Clean",
    description: "Reliable office and workspace cleaning tailored to your schedule.",
    icon: Building2,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-slate-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Our Services</h3>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                <Icon className="h-8 w-8 text-[#D91429]" />
                <h4 className="mt-4 text-xl font-semibold">{service.title}</h4>
                <p className="mt-2 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
