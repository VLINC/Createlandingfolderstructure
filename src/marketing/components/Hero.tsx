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
            margin: "0 0 2.5rem",
            color: "#ffffff",
          }}
        >
          Professional Cleaning,{" "}
          <span style={{ color: "#D91429" }}>On Your Schedule</span>
        </h1>

        <div
          style={{
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
      </div>
    </section>
  );
}
