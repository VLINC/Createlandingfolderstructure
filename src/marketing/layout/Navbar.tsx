import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ height: "var(--header-height)" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        <span className="text-lg font-bold text-slate-900 tracking-tight">
          Victorious Love Company LLC
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#services" className="hover:text-[#D91429] transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-[#D91429] transition-colors">How It Works</a>
          <a href="#contact" className="hover:text-[#D91429] transition-colors">Contact</a>
          <a
            href="#download"
            className="bg-[#D91429] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#b91023] transition-colors"
          >
            Get the App
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-700 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-md">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-800 font-medium text-base">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="bg-[#D91429] text-white text-center px-4 py-2 rounded-md font-semibold"
            >
              Get the App
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
