import React from "react";

export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e293b 100%)",
        paddingTop: "calc(64px + 4rem)",
        paddingBottom: "4rem",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "52rem",
          margin: "0 auto",
          padding: "0 1.5rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem, 8vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            margin: 0,
            color: "#ffffff",
          }}
        >
          Professional Cleaning,{" "}
          <span style={{ color: "#D91429" }}>On Your Schedule</span>
        </h1>

        <p
          style={{
            marginTop: "1.25rem",
            fontSize: "1.1rem",
            color: "#cbd5e1",
            maxWidth: "36rem",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.7,
          }}
        >
          Trusted local cleaning providers serving Kansas City and the surrounding area.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.875rem",
            alignItems: "center",
          }}
        >
          <a
            href="https://app.procleanvlinc.com/#/signup/location"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "340px",
              background: "#D91429",
              color: "#ffffff",
              textAlign: "center",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(217,20,41,0.4)",
            }}
          >
            Sign Up as a Provider
          </a>
          <a
            href="https://app.procleanvlincservice.com/login"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              width: "100%",
              maxWidth: "340px",
              background: "rgba(255,255,255,0.08)",
              color: "#ffffff",
              textAlign: "center",
              padding: "1rem 1.5rem",
              borderRadius: "8px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.3)",
            }}
          >
            Sign Up as a Customer
          </a>
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "3rem",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "26rem",
            marginLeft: "auto",
            marginRight: "auto",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "2rem",
          }}
        >
          {[
            { value: "500+", label: "Cleans Done" },
            { value: "100%", label: "Verified" },
            { value: "5★", label: "Avg Rating" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>{stat.value}</p>
              <p style={{ fontSize: "0.7rem", color: "#94a3b8", marginTop: "4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
