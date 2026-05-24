import React from "react";

const services = [
  {
    emoji: "🧹",
    title: "Standard Clean",
    description: "Routine cleaning to keep your home fresh, tidy, and comfortable every week.",
  },
  {
    emoji: "✨",
    title: "Deep Clean",
    description: "A thorough top-to-bottom clean targeting high-touch surfaces and hard-to-reach areas.",
  },
  {
    emoji: "🏠",
    title: "Move In / Move Out Clean",
    description: "Detailed cleaning for smooth transitions — whether you are moving in or moving out.",
  },
  {
    emoji: "🚿",
    title: "Bathroom Detail Clean",
    description: "Focused deep cleaning of bathrooms — grout, fixtures, mirrors, and tile scrubbed spotless.",
  },
  {
    emoji: "🍳",
    title: "Kitchen Detail Clean",
    description: "Complete kitchen clean including appliances, cabinets, countertops, and sink areas.",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#f8fafc", padding: "5rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#D91429", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
            What We Offer
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0f172a", margin: 0 }}>
            Our Services
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#64748b", fontSize: "1rem", maxWidth: "36rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Professional residential cleaning tailored to your needs — scheduled when it works for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((s) => (
            <div
              key={s.title}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "1.75rem",
                border: "1px solid #e2e8f0",
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.emoji}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.5rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0, lineHeight: 1.6 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
