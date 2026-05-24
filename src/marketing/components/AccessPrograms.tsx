import React from "react";

export default function AccessPrograms() {
  return (
    <section id="access-programs" style={{ background: "#ffffff", padding: "5rem 0" }}>
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#D91429", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
            Vlinc Access Program
          </p>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 900, color: "#0f172a", margin: 0 }}>
            Professional Cleaning, Made Affordable
          </h2>
          <p style={{ marginTop: "0.75rem", color: "#64748b", fontSize: "1rem", maxWidth: "38rem", marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
            Our Access Program is designed for individuals with disabilities and low-income households who deserve a clean, healthy home — without the financial burden.
          </p>
        </div>

        {/* Who qualifies */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2rem",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
            Who Qualifies?
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0.75rem" }}>
            {[
              "✅ Supplemental Security Income (SSI) recipients",
              "✅ Social Security Disability Insurance (SSDI) recipients",
              "✅ Other disability benefit recipients",
              "✅ Low-income households needing assistance",
            ].map((item) => (
              <p key={item} style={{ fontSize: "0.9rem", color: "#334155", margin: 0, lineHeight: 1.6 }}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* How it works steps */}
        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1.5rem", textAlign: "center" }}>
            How It Works
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {[
              { step: "01", title: "Apply in the App", desc: "Sign up as a customer and submit your Vlinc Access application directly from the app." },
              { step: "02", title: "Submit Documents", desc: "Upload your SSI/SSDI award letter or utility bill for income verification." },
              { step: "03", title: "Get Approved", desc: "Our team reviews your application — typically within 3 business days." },
              { step: "04", title: "Pay Activation Fee", desc: "Once approved, pay a one-time $12.00 activation fee to unlock your membership." },
              { step: "05", title: "Start Membership", desc: "Begin your $19/month membership and enjoy unlimited professional cleanings." },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    background: "#D91429",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.step}
                </div>
                <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "#0f172a", margin: "0 0 0.4rem" }}>{item.title}</h4>
                <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          <div
            style={{
              background: "#f8fafc",
              borderRadius: "14px",
              padding: "1.75rem",
              border: "1px solid #e2e8f0",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>One-Time</p>
            <p style={{ fontSize: "2rem", fontWeight: 900, color: "#0f172a", margin: "0 0 0.25rem" }}>$12.00</p>
            <p style={{ fontSize: "0.875rem", color: "#64748b", margin: 0 }}>Activation fee — paid after approval</p>
          </div>
          <div
            style={{
              background: "#D91429",
              borderRadius: "14px",
              padding: "1.75rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.5rem" }}>Monthly</p>
            <p style={{ fontSize: "2rem", fontWeight: 900, color: "#ffffff", margin: "0 0 0.25rem" }}>$19/mo</p>
            <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", margin: 0 }}>Unlimited bookings · Cancel anytime</p>
          </div>
        </div>

        {/* Benefits */}
        <div
          style={{
            background: "#f8fafc",
            borderRadius: "16px",
            padding: "2rem",
            marginBottom: "2.5rem",
            border: "1px solid #e2e8f0",
          }}
        >
          <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0f172a", marginBottom: "1rem" }}>
            Membership Benefits
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {[
              "✅ Unlimited cleaning bookings",
              "✅ Priority scheduling",
              "✅ Verified, background-checked providers",
              "✅ 100% satisfaction guarantee",
              "✅ Cancel anytime — no contracts",
            ].map((b) => (
              <p key={b} style={{ fontSize: "0.9rem", color: "#334155", margin: 0, lineHeight: 1.6 }}>
                {b}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="https://app.procleanvlincservice.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#D91429",
              color: "#ffffff",
              padding: "0.9rem 2.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(217,20,41,0.3)",
            }}
          >
            Apply for Vlinc Access
          </a>
          <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "#94a3b8" }}>
            Sign up as a customer to begin your application.
          </p>
        </div>

      </div>
    </section>
  );
}
