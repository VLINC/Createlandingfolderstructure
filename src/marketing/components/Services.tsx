import React, { useState } from "react";

/* ── Data ─────────────────────────────────────────────────────── */
interface ServiceData {
  emoji: string;
  title: string;
  description: string;
  included: string[];
  duration: string;
  process: string;
  beforeLabel: string;
  afterLabel: string;
  beforeBg: string;
  afterBg: string;
  faqs: { q: string; a: string }[];
}

const services: ServiceData[] = [
  {
    emoji: "🧹",
    title: "Standard Clean",
    description: "Routine cleaning designed to keep your home fresh, organized, and comfortable on a regular basis.",
    included: ["Dusting surfaces", "Vacuuming & mopping", "Trash removal", "Kitchen wipe-downs", "Bathroom surface cleaning", "Bedroom & living area reset"],
    duration: "2 – 3 hours",
    process: "Our team arrives with all supplies, follows a room-by-room checklist, and leaves your home feeling refreshed and tidy — perfect for weekly or biweekly upkeep.",
    beforeLabel: "Dusty surfaces, cluttered counters, unvacuumed floors.",
    afterLabel: "Gleaming surfaces, spotless floors, and a reset living space.",
    beforeBg: "linear-gradient(135deg, #94a3b8 0%, #64748b 100%)",
    afterBg: "linear-gradient(135deg, #34d399 0%, #059669 100%)",
    faqs: [
      { q: "How often should I book a standard clean?", a: "Most customers book weekly or biweekly to maintain a consistently clean home with minimal effort." },
      { q: "Do I need to be home during the cleaning?", a: "No — many clients provide access instructions and return to a clean home." },
    ],
  },
  {
    emoji: "✨",
    title: "Deep Clean",
    description: "A detailed top-to-bottom cleaning service focused on buildup, high-touch surfaces, and neglected areas.",
    included: ["Baseboards", "Detailed dusting", "Appliance exterior cleaning", "Door frames & trim", "Hard-to-reach areas", "Extra bathroom & kitchen detailing"],
    duration: "4 – 6 hours",
    process: "Every corner gets attention. We tackle accumulated dust, grease buildup, and surface grime that routine cleans may skip — leaving your home truly deep-cleaned.",
    beforeLabel: "Built-up grime on baseboards, greasy appliances, dusty trim.",
    afterLabel: "Every surface scrubbed, appliances polished, trim spotless.",
    beforeBg: "linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",
    afterBg: "linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)",
    faqs: [
      { q: "How is a deep clean different from a standard clean?", a: "A deep clean covers areas typically skipped during routine cleans — baseboards, door frames, appliance exteriors, and buildup-prone surfaces." },
      { q: "How often should I deep clean?", a: "We recommend a deep clean every 1–3 months depending on household activity." },
    ],
  },
  {
    emoji: "🏠",
    title: "Move In / Move Out Clean",
    description: "Detailed cleaning designed for moving transitions, preparing homes for new occupancy or final walkthroughs.",
    included: ["Empty-room cleaning", "Cabinet & drawer wipe-downs", "Appliance cleaning", "Floor detailing", "Bathroom sanitization", "Dust & debris removal"],
    duration: "4 – 8 hours",
    process: "We clean the entire property from top to bottom — perfect for landlords, tenants, and homeowners ensuring a fresh start or a clean handoff.",
    beforeLabel: "Empty rooms with dust, debris, and leftover residue.",
    afterLabel: "Move-in ready — every room sanitized and spotless.",
    beforeBg: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)",
    afterBg: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)",
    faqs: [
      { q: "When should I schedule a move-out clean?", a: "Schedule your move-out clean on your last day in the property or the day before your final walkthrough." },
      { q: "Does this include appliances?", a: "Yes — appliance exteriors and interiors (oven, fridge) are included in move-in/out cleans." },
    ],
  },
  {
    emoji: "🚿",
    title: "Bathroom Detail Clean",
    description: "Focused bathroom deep cleaning designed to restore shine and remove buildup from high-moisture areas.",
    included: ["Tile & grout scrubbing", "Mirror polishing", "Fixture detailing", "Sink & vanity cleaning", "Toilet sanitization", "Shower & tub deep cleaning"],
    duration: "1 – 2 hours per bathroom",
    process: "High-moisture bathrooms accumulate soap scum, mildew, and mineral deposits over time. Our focused detail clean restores grout color, polishes fixtures, and sanitizes every surface.",
    beforeLabel: "Soap scum on tiles, dull grout, water-stained fixtures.",
    afterLabel: "Bright grout, gleaming fixtures, and a sanitized shower.",
    beforeBg: "linear-gradient(135deg, #94a3b8 0%, #475569 100%)",
    afterBg: "linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)",
    faqs: [
      { q: "Can you remove grout stains?", a: "Yes — our grout scrubbing treatment significantly improves grout appearance and removes mold/mildew buildup." },
      { q: "How often should bathrooms be detail-cleaned?", a: "Monthly detail cleans are recommended to prevent heavy buildup." },
    ],
  },
  {
    emoji: "🍳",
    title: "Kitchen Detail Clean",
    description: "Comprehensive kitchen cleaning focused on surfaces, appliances, and high-use cooking areas.",
    included: ["Countertop sanitization", "Appliance exterior cleaning", "Sink detailing", "Cabinet wipe-downs", "Stove & microwave cleaning", "Floor cleaning"],
    duration: "1.5 – 3 hours",
    process: "Kitchens are the hardest-working rooms in a home. We tackle grease buildup, sanitize food-prep surfaces, degrease the stovetop, and leave every appliance exterior polished and clean.",
    beforeLabel: "Grease on stovetop, stained counters, food residue buildup.",
    afterLabel: "Degreased appliances, sanitized counters, polished sink.",
    beforeBg: "linear-gradient(135deg, #fb923c 0%, #ea580c 100%)",
    afterBg: "linear-gradient(135deg, #4ade80 0%, #16a34a 100%)",
    faqs: [
      { q: "Does this include inside the oven?", a: "Oven interior cleaning is available as an add-on. The standard kitchen detail covers exterior surfaces and appliance fronts." },
      { q: "Is countertop sanitization food-safe?", a: "Yes — we use food-safe sanitizing solutions on all kitchen surfaces." },
    ],
  },
];

/* ── Before / After Slider ───────────────────────────────────── */
function BeforeAfterSlider({ service }: { service: ServiceData }) {
  const [side, setSide] = useState<"before" | "after">("before");
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      {/* Toggle */}
      <div style={{ display: "flex", borderRadius: "8px", overflow: "hidden", border: "1px solid #e2e8f0", marginBottom: "0.75rem" }}>
        {(["before", "after"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSide(s)}
            style={{
              flex: 1,
              padding: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              background: side === s ? (s === "before" ? "#0f172a" : "#D91429") : "#f8fafc",
              color: side === s ? "#ffffff" : "#64748b",
              transition: "all 0.2s",
            }}
          >
            {s === "before" ? "⬛ Before" : "✅ After"}
          </button>
        ))}
      </div>

      {/* Image placeholder with gradient */}
      <div
        style={{
          borderRadius: "10px",
          overflow: "hidden",
          height: "180px",
          background: side === "before" ? service.beforeBg : service.afterBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background 0.4s ease",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
            {side === "before" ? "🏚️" : "🏠✨"}
          </div>
          <p style={{ color: "#ffffff", fontWeight: 600, fontSize: "0.85rem", margin: 0, textShadow: "0 1px 4px rgba(0,0,0,0.4)", lineHeight: 1.5 }}>
            {side === "before" ? service.beforeLabel : service.afterLabel}
          </p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "8px",
            right: "10px",
            background: side === "before" ? "rgba(0,0,0,0.5)" : "rgba(217,20,41,0.85)",
            color: "#fff",
            fontSize: "0.7rem",
            fontWeight: 700,
            padding: "3px 10px",
            borderRadius: "999px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {side}
        </div>
      </div>
    </div>
  );
}

/* ── Modal ───────────────────────────────────────────────────── */
function ServiceModal({ service, onClose }: { service: ServiceData; onClose: () => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        zIndex: 10000,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "0",
        backdropFilter: "blur(3px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          borderRadius: "20px 20px 0 0",
          width: "100%",
          maxWidth: "580px",
          maxHeight: "90vh",
          overflowY: "auto",
          padding: "1.75rem 1.5rem 2.5rem",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Handle bar */}
        <div style={{ width: "40px", height: "4px", background: "#e2e8f0", borderRadius: "999px", margin: "0 auto 1.25rem" }} />

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
          <span style={{ fontSize: "2.25rem" }}>{service.emoji}</span>
          <div>
            <h2 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0f172a", margin: 0 }}>{service.title}</h2>
            <p style={{ fontSize: "0.8rem", color: "#D91429", fontWeight: 600, margin: 0 }}>⏱ {service.duration}</p>
          </div>
          <button
            onClick={onClose}
            style={{ marginLeft: "auto", background: "#f1f5f9", border: "none", cursor: "pointer", borderRadius: "50%", width: "32px", height: "32px", fontSize: "1rem", color: "#475569" }}
          >✕</button>
        </div>

        <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: 1.7, marginBottom: "1.5rem" }}>{service.description}</p>

        {/* Before / After */}
        <BeforeAfterSlider service={service} />

        {/* What's Included */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            ✅ What's Included
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {service.included.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.9rem", color: "#334155" }}>
                <span style={{ color: "#D91429", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Cleaning Process */}
        <div style={{ background: "#f8fafc", borderRadius: "10px", padding: "1rem 1.1rem", marginBottom: "1.5rem", borderLeft: "3px solid #D91429" }}>
          <h3 style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>
            🔍 Cleaning Process
          </h3>
          <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.7, margin: 0 }}>{service.process}</p>
        </div>

        {/* FAQs */}
        <div>
          <h3 style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0f172a", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.75rem" }}>
            💬 FAQs
          </h3>
          {service.faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: "1px solid #f1f5f9", marginBottom: "0.5rem" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.75rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  textAlign: "left",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#0f172a",
                }}
              >
                {faq.q}
                <span style={{ color: "#D91429", fontWeight: 900, flexShrink: 0, marginLeft: "0.5rem" }}>{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && (
                <p style={{ fontSize: "0.85rem", color: "#475569", lineHeight: 1.7, padding: "0 0 0.75rem", margin: 0 }}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="/signup"
          style={{
            display: "block",
            marginTop: "1.75rem",
            background: "#D91429",
            color: "#ffffff",
            textAlign: "center",
            padding: "1rem",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 4px 14px rgba(217,20,41,0.3)",
          }}
        >
          Book This Service
        </a>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ── Services Section ────────────────────────────────────────── */
export default function Services() {
  const [active, setActive] = useState<ServiceData | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="services" style={{ background: "#f8fafc", padding: "5rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
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
          <p style={{ marginTop: "0.5rem", color: "#94a3b8", fontSize: "0.8rem" }}>
            Tap any service card to view before &amp; after examples
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {services.map((s) => (
            <button
              key={s.title}
              onClick={() => setActive(s)}
              onMouseEnter={() => setHovered(s.title)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                padding: "1.75rem",
                border: hovered === s.title ? "1.5px solid #D91429" : "1.5px solid #e2e8f0",
                boxShadow: hovered === s.title ? "0 8px 28px rgba(217,20,41,0.15)" : "0 1px 4px rgba(0,0,0,0.04)",
                cursor: "pointer",
                textAlign: "left",
                transform: hovered === s.title ? "translateY(-3px)" : "translateY(0)",
                transition: "all 0.2s ease",
                width: "100%",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.emoji}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.5rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "0 0 1rem", lineHeight: 1.6 }}>{s.description}</p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#D91429",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                View Transformation →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </section>
  );
}
