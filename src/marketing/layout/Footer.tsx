import React from "react";

export default function Footer() {
  return (
    <footer id="contact" style={{ background: "#0f172a", color: "#cbd5e1" }}>
      <div
        style={{
          maxWidth: "72rem",
          margin: "0 auto",
          padding: "4rem 1.5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {/* Column 1 — Company */}
        <div>
          <p style={{ color: "#D91429", fontWeight: 800, fontSize: "1rem", marginBottom: "0.75rem" }}>
            Victorious Love Company LLC
          </p>
          <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "#94a3b8" }}>
            Professional cleaning services you can trust — serving Kansas City and surrounding areas.
          </p>
          <div style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.8 }}>
            <p style={{ fontWeight: 600, color: "#94a3b8", marginBottom: "0.25rem" }}>Business Address</p>
            <p>Dystini Transportation LLC</p>
            <p>DBA Victorious Love Company LLC</p>
            <p>PO Box 1074</p>
            <p>Florissant, MO 63031</p>
          </div>
        </div>

        {/* Column 2 — Links */}
        <div>
          <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Quick Links
          </p>
          <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {[
              { label: "Services", href: "#services" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Access Programs", href: "#access-programs" },
              { label: "Contact", href: "#contact" },
              { label: "Terms of Service", href: "/terms.html" },
              { label: "Privacy Policy", href: "/privacy.html" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: "#94a3b8",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  transition: "color 0.15s",
                }}
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
          <p style={{ color: "#ffffff", fontWeight: 700, fontSize: "0.875rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Contact Us
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.875rem" }}>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "2px" }}>Phone</p>
              <a
                href="tel:9129158209"
                style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 500 }}
              >
                (912) 915-8209
              </a>
            </div>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "2px" }}>Email</p>
              <a
                href="mailto:support@proincorporated.services"
                style={{ color: "#cbd5e1", textDecoration: "none", fontWeight: 500, wordBreak: "break-all" }}
              >
                support@proincorporated.services
              </a>
            </div>
            <div>
              <p style={{ color: "#64748b", fontSize: "0.75rem", marginBottom: "2px" }}>Hours</p>
              <p style={{ color: "#cbd5e1", fontWeight: 500 }}>Mon–Fri: 8:00am – 6:00pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #1e293b" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            padding: "1.25rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            alignItems: "center",
            textAlign: "center",
            fontSize: "0.75rem",
            color: "#475569",
          }}
        >
          <p>© {new Date().getFullYear()} Dystini Transportation LLC — All rights reserved.</p>
          <p>DBA Victorious Love Company LLC · Florissant, MO 63031</p>
        </div>
      </div>
    </footer>
  );
}
