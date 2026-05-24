import React from "react";

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#0f172a", color: "#cbd5e1" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2.5rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Column 1 — Company */}
        <div>
          <p style={{ color: "#D91429", fontWeight: 800, fontSize: "1rem", marginBottom: "1rem" }}>
            Victorious Love Company LLC
          </p>
          <p style={{ color: "#94a3b8", fontWeight: 600, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
            Business Address
          </p>
          <div style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 2 }}>
            <p style={{ margin: 0 }}>PO Box 1074</p>
            <p style={{ margin: 0 }}>Florissant, MO 63031</p>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Quick Links
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Access Programs", href: "#access-programs" },
              { label: "Pricing", href: "/pricing" },
              { label: "Terms of Service", href: "/terms.html" },
              { label: "Privacy Policy", href: "/privacy.html" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{ color: "#94a3b8", textDecoration: "none", fontSize: "0.875rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#D91429")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
            Contact Us
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", fontSize: "0.875rem" }}>
            <div>
              <p style={{ color: "#475569", fontSize: "0.7rem", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Phone</p>
              <a href="tel:9129158209" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 500 }}>
                (912) 915-8209
              </a>
            </div>
            <div>
              <p style={{ color: "#475569", fontSize: "0.7rem", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Email</p>
              <a href="mailto:support@proincorporated.services" style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}>
                support@proincorporated.services
              </a>
            </div>
            <div>
              <p style={{ color: "#475569", fontSize: "0.7rem", marginBottom: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Hours</p>
              <p style={{ color: "#cbd5e1", fontWeight: 500, margin: 0 }}>Mon–Fri: 8:00am – 6:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1e293b", padding: "1.25rem 1.5rem", textAlign: "center", fontSize: "0.75rem", color: "#334155" }}>
        © {new Date().getFullYear()} Victorious Love Company LLC · All rights reserved.
      </div>
    </footer>
  );
}
