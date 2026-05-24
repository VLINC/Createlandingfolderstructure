import React from "react";

export default function AboutUs() {
  return (
    <section id="about" style={{ background: "#ffffff", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: "52rem", margin: "0 auto" }}>

        {/* Label */}
        <p
          style={{
            color: "#D91429",
            fontWeight: 700,
            fontSize: "0.8rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            marginBottom: "0.75rem",
            textAlign: "center",
          }}
        >
          Who We Are
        </p>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
            fontWeight: 900,
            color: "#0f172a",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Founded with Purpose,{" "}
          <span style={{ color: "#D91429" }}>Built on Faith</span>
        </h2>

        {/* Divider */}
        <div
          style={{
            width: "48px",
            height: "4px",
            background: "#D91429",
            borderRadius: "2px",
            margin: "0 auto 2.5rem",
          }}
        />

        {/* Body paragraphs */}
        {[
          "Victorious Love Company LLC is a modern multi-industry brand committed to innovation, excellence, and meaningful service. As a Christian-based company, we believe in operating with integrity, compassion, professionalism, and a dedication to positively impacting the communities we serve.",
          "Our mission is to create brands and experiences that improve everyday life through quality services, modern technology, and customer-focused solutions.",
          "Through Victorious Love Pro Clean, we provide reliable residential cleaning services powered by a modern mobile platform that connects customers with trusted cleaning professionals through a seamless and convenient experience.",
          "Beyond cleaning services, we are expanding into the fashion and lifestyle industry with clothing, footwear, and apparel designed to combine comfort, confidence, and contemporary style. We are also growing within the beauty industry by developing self-care and beauty products centered around wellness, confidence, and everyday luxury.",
          "Innovation remains at the center of everything we build. From technology-driven platforms to fashion and beauty products, our focus is to deliver quality, creativity, trust, and lasting value through every brand and experience we create.",
        ].map((para, i) => (
          <p
            key={i}
            style={{
              fontSize: "1rem",
              lineHeight: 1.85,
              color: "#475569",
              marginBottom: "1.25rem",
            }}
          >
            {para}
          </p>
        ))}

        {/* Closing statement */}
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: "#0f172a",
            fontWeight: 600,
            marginTop: "0.5rem",
            paddingTop: "1.25rem",
            borderTop: "1px solid #e2e8f0",
          }}
        >
          Guided by faith and driven by vision, we continue building a future focused on empowerment, opportunity, growth, and lasting impact.
        </p>
      </div>
    </section>
  );
}
