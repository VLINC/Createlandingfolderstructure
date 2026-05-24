import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e293b] text-white"
      style={{ paddingTop: "calc(var(--header-height) + 4rem)", paddingBottom: "5rem" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#D91429] font-semibold text-sm uppercase tracking-widest mb-4">
          Victorious Love Company LLC
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Professional Cleaning,<br />
          <span className="text-[#D91429]">On Your Schedule</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
          Trusted local cleaning providers serving Kansas City and the surrounding area.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="https://vlincapp.pro/app"
            className="inline-flex items-center justify-center rounded-lg bg-[#D91429] px-8 py-4 text-base font-bold text-white hover:bg-[#b91023] transition-colors shadow-lg"
          >
            Book a Cleaning
          </a>
          <a
            href="#download"
            className="inline-flex items-center justify-center rounded-lg border-2 border-white/60 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
          >
            Download the App
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
          <div>
            <p className="text-2xl font-bold text-white">500+</p>
            <p className="text-xs text-slate-400 mt-1">Cleans Done</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-xs text-slate-400 mt-1">Verified Providers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-white">5★</p>
            <p className="text-xs text-slate-400 mt-1">Avg Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
