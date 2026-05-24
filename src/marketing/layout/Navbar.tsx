import React, { useState, useEffect } from "react";

const HEADER_HEIGHT = 64;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

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
        {/* Brand */}
        <a
          href="/"
          style={{
            color: "#D91429",
            fontWeight: 800,
            fontSize: "1rem",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          Victorious Love Company LLC
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {open ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: `${HEADER_HEIGHT}px`,
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
            zIndex: 9998,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", padding: "8px 24px 20px" }}>

            {/* About Us */}
            <a
              href="#about"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                borderBottom: "1px solid #f1f5f9",
                color: "#1e293b",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              About Us
            </a>

            {/* Earn More — Providers */}
            <a
              href="https://procleanvlinc.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 0",
                borderBottom: "1px solid #f1f5f9",
                color: "#1e293b",
                fontWeight: 500,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Earn More
              <span
                style={{
                  background: "#D91429",
                  color: "#fff",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  padding: "2px 7px",
                  borderRadius: "999px",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Providers
              </span>
            </a>

            {/* Booking Info & Pricing — Accordion */}
            <div style={{ borderBottom: "1px solid #f1f5f9" }}>
              <button
                onClick={() => setBookingOpen(!bookingOpen)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "14px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#1e293b",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textAlign: "left",
                }}
              >
                Booking Info &amp; Pricing
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{
                    transform: bookingOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                    flexShrink: 0,
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {bookingOpen && (
                <div
                  style={{
                    padding: "4px 0 16px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    fontSize: "0.9rem",
                    color: "#475569",
                  }}
                >
                  <p>🧹 <strong>Standard Clean</strong> — starting at $89</p>
                  <p>✨ <strong>Deep Clean</strong> — starting at $149</p>
                  <p>🏠 <strong>Move In/Out</strong> — starting at $179</p>
                  <p>🏢 <strong>Commercial</strong> — custom quote</p>
                  <p style={{ marginTop: "6px", fontSize: "0.8rem", color: "#94a3b8" }}>
                    Book online or call <a href="tel:9129158209" style={{ color: "#D91429", textDecoration: "none" }}>(912) 915-8209</a>
                  </p>
                </div>
              )}
            </div>

            {/* Sign Up section */}
            <p
              style={{
                marginTop: "20px",
                marginBottom: "10px",
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "#94a3b8",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Sign Up
            </p>

            <a
              href="/become-a-provider"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                background: "#D91429",
                color: "#ffffff",
                textAlign: "center",
                padding: "14px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Sign Up as a Provider
            </a>

            <a
              href="/signup"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                background: "#0f172a",
                color: "#ffffff",
                textAlign: "center",
                padding: "14px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Sign Up as a Customer
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
