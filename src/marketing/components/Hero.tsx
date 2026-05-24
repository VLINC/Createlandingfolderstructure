import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#0f172a] via-[#172554] to-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">
          Professional Cleaning, On Your Schedule
        </h2>
        <p className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl">
          Trusted local cleaning providers serving Kansas City and the surrounding area.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://vlincapp.pro/app"
            className="inline-flex items-center justify-center rounded-md bg-[#D91429] px-6 py-3 text-base font-semibold text-white hover:bg-[#b91023] transition-colors"
          >
            Book a Cleaning
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-md border border-white/60 px-6 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Download the App
          </a>
        </div>
      </div>
    </section>
  );
}
