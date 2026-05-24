import React, { useState, useEffect } from "react";

const HEADER_HEIGHT = 64;

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "/terms.html" },
  { label: "Privacy", href: "/privacy.html" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.setProperty("--header-height", `${HEADER_HEIGHT}px`);
  }, []);

  return (
    <header
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
        <span style={{ color: "#D91429", fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.01em" }}>
          Victorious Love Company LLC
        </span>

        {/* Hamburger button — always visible */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="18" y1="6" x2="6" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: `${HEADER_HEIGHT}px`,
            left: 0,
            right: 0,
            background: "#ffffff",
            borderBottom: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
            zIndex: 9998,
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column", padding: "8px 20px 16px" }}>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 4px",
                  borderBottom: "1px solid #f1f5f9",
                  color: "#1e293b",
                  fontWeight: 500,
                  fontSize: "1rem",
                  textDecoration: "none",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/signup"
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                marginTop: "12px",
                background: "#D91429",
                color: "#fff",
                textAlign: "center",
                padding: "14px",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
              }}
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
