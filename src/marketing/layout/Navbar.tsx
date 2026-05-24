import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (typeof document === "undefined") return null;

  const header = (
    <>
      <header
        className="site-header bg-white border-b"
        style={{
          position: "fixed",
          top: "env(safe-area-inset-top, 0px)",
          left: 0,
          right: 0,
          zIndex: 99999,
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        aria-label="Main header"
      >
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          <h1 className="text-lg font-bold tracking-tight">Victorious Love Pro Clean</h1>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-[#D91429] transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-[#D91429] transition-colors">How It Works</a>
            <a href="#contact" className="hover:text-[#D91429] transition-colors">Contact</a>
            <a href="#download" className="bg-[#D91429] text-white px-4 py-2 rounded-md hover:bg-[#b91023] transition-colors">Get the App</a>
          </nav>

          <button
            type="button"
            className="md:hidden text-[#D91429] text-2xl leading-none font-bold"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            ≡
          </button>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[var(--header-height)] left-0 right-0 z-[99998] bg-white border-b shadow-sm">
          <nav className="flex flex-col px-6 py-4 text-slate-700 font-medium">
            <a href="#services" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
            <a href="#how-it-works" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
            <a href="#contact" className="py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <a href="#download" className="py-2 text-[#D91429] font-semibold" onClick={() => setIsMobileMenuOpen(false)}>Get the App</a>
          </nav>
        </div>
      )}
    </>
  );

  return createPortal(header, document.body);
}
