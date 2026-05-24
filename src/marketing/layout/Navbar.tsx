import React, { useState, useEffect } from "react";

const HEADER_HEIGHT = 64;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookingInfoOpen, setBookingInfoOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", `${HEADER_HEIGHT}px`);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#navbar-root")) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const close = () => {
    setOpen(false);
    setBookingInfoOpen(false);
  };

  return (
    <header
      id="navbar-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: `${HEADER_HEIGHT}px`,
        background: "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="/" style={{ color: "#D91429", fontWeight: 800, fontSize: "1rem", textDecoration: "none", letterSpacing: "-0.01em" }}>
          Victorious Love Company LLC
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#about"            className="hover:text-[#D91429] transition-colors">About Us</a>
          <a href="#services"         className="hover:text-[#D91429] transition-colors">Services</a>
          <a href="#how-it-works"     className="hover:text-[#D91429] transition-colors">How It Works</a>
          <a href="/become-a-provider" className="hover:text-[#D91429] transition-colors">Earn More</a>
          <a href="#contact"          className="hover:text-[#D91429] transition-colors">Contact</a>
          <a
            href="/signup"
            className="bg-[#D91429] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#b91023] transition-colors"
          >
            Sign Up
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-md" style={{ zIndex: 9998 }}>
          <nav className="flex flex-col px-6 py-4 gap-1 text-slate-800 font-medium text-base">

            {/* About Us */}
            <a href="#about" onClick={close} className="py-2 hover:text-[#D91429] transition-colors">
              About Us
            </a>

            {/* Services */}
            <a href="#services" onClick={close} className="py-2 hover:text-[#D91429] transition-colors">
              Services
            </a>

            {/* How It Works */}
            <a href="#how-it-works" onClick={close} className="py-2 hover:text-[#D91429] transition-colors">
              How It Works
            </a>

            {/* Earn More — provider landing */}
            <a
              href="/become-a-provider"
              onClick={close}
              className="py-2 hover:text-[#D91429] transition-colors flex items-center gap-1"
            >
              Earn More
              <span className="text-xs bg-[#D91429] text-white rounded-full px-2 py-0.5 font-semibold">Providers</span>
            </a>

            {/* Booking Info — accordion */}
            <div className="border-t border-slate-100 mt-1 pt-2">
              <button
                onClick={() => setBookingInfoOpen(!bookingInfoOpen)}
                className="w-full flex items-center justify-between py-2 text-slate-800 font-medium hover:text-[#D91429] transition-colors"
                aria-expanded={bookingInfoOpen}
              >
                <span>Booking Info &amp; Pricing</span>
                <svg
                  className={`w-4 h-4 transition-transform ${bookingInfoOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {bookingInfoOpen && (
                <div className="pb-4 text-sm text-slate-600 space-y-4">

                  {/* First-time */}
                  <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                    <p className="font-bold text-green-800 mb-1">🎉 First-Time Customers — Flat Rate</p>
                    <p className="text-green-700 text-xs mb-2">Your very first clean is a simple flat fee based on your home size. No surprises.</p>
                    <table className="w-full text-xs text-green-900">
                      <thead>
                        <tr className="border-b border-green-200">
                          <th className="text-left py-1">Home Size</th>
                          <th className="text-right py-1">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="py-0.5">Up to 2,000 sq ft</td><td className="text-right">$75</td></tr>
                        <tr><td className="py-0.5">2,001 – 3,500 sq ft</td><td className="text-right">$125</td></tr>
                        <tr><td className="py-0.5">3,501 – 5,000 sq ft</td><td className="text-right">$175</td></tr>
                        <tr><td className="py-0.5">5,001 – 8,000 sq ft</td><td className="text-right">$275</td></tr>
                        <tr><td className="py-0.5">8,001+ sq ft</td><td className="text-right">$425</td></tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-green-700 mt-2 italic">After your first clean, you'll receive subscription options.</p>
                  </div>

                  {/* Returning / how pricing is built */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
                    <p className="font-bold text-slate-800">📐 How Your Price Is Calculated</p>
                    <p className="text-xs text-slate-600">Returning customer pricing is built in layers:</p>

                    <div className="space-y-2 text-xs">
                      <div>
                        <p className="font-semibold text-slate-700">① Property Type (base rate per sq ft)</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>Apartment — $0.08 / sq ft</li>
                          <li>Condo — $0.09 / sq ft</li>
                          <li>Townhouse — $0.10 / sq ft</li>
                          <li>House — $0.12 / sq ft</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">② Tiered Square Footage</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>First 1,500 sq ft — full rate</li>
                          <li>1,501 – 3,000 sq ft — ×1.15</li>
                          <li>3,001 – 5,000 sq ft — ×1.30</li>
                          <li>5,001+ sq ft — ×1.45</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">③ Bedrooms Multiplier</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>1 bed — ×1.00 · 2 bed — ×1.05</li>
                          <li>3 bed — ×1.10 · 4 bed — ×1.20 · 5+ — ×1.30</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">④ Location Tier</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>Premium market — ×1.35</li>
                          <li>Standard market — ×1.00</li>
                          <li>Economy market — ×0.85</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">⑤ Service Type Multiplier</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>Standard clean — ×1.00</li>
                          <li>Deep clean — ×1.30</li>
                          <li>Move in/out — ×1.50</li>
                          <li>Post-construction — ×1.60</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">⑥ Frequency Discount</p>
                        <ul className="ml-3 mt-0.5 space-y-0.5 text-slate-600">
                          <li>Weekly — 30% off monthly price</li>
                          <li>Bi-weekly — 18% off monthly price</li>
                          <li>Monthly — full price</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-700">⑦ Demand Adjustment</p>
                        <p className="ml-3 text-slate-600">Live demand in your zip code can shift your price ±15% (0.85× – 1.25×).</p>
                      </div>
                    </div>
                  </div>

                  {/* Membership / booking fee */}
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 space-y-1">
                    <p className="font-bold text-blue-800">💳 What You Pay at Booking</p>
                    <ul className="text-xs text-blue-700 space-y-1 ml-1">
                      <li>✅ <strong>No membership</strong> — cleaning price + $5 booking fee</li>
                      <li>✅ <strong>Active subscription</strong> — $5 booking fee only (cleaning covered)</li>
                      <li>✅ <strong>Affordable Access approved</strong> — $0 total (fully covered)</li>
                    </ul>
                    <p className="text-xs text-blue-600 mt-1">The $5 booking fee helps maintain verified, background-checked providers.</p>
                  </div>

                  <a
                    href="/plans"
                    onClick={close}
                    className="block text-center bg-[#D91429] text-white py-2 rounded-lg text-sm font-semibold"
                  >
                    View Subscription Plans
                  </a>
                </div>
              )}
            </div>

            {/* Contact */}
            <a href="#contact" onClick={close} className="py-2 border-t border-slate-100 hover:text-[#D91429] transition-colors">
              Contact
            </a>

            {/* Sign Up CTAs */}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-slate-100">
              <a
                href="/become-a-provider"
                onClick={close}
                className="bg-slate-900 text-white text-center px-4 py-2.5 rounded-lg font-semibold text-sm"
              >
                Sign Up as a Provider
              </a>
              <a
                href="/signup"
                onClick={close}
                className="bg-[#D91429] text-white text-center px-4 py-2.5 rounded-lg font-semibold text-sm"
              >
                Sign Up as a Customer
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}
