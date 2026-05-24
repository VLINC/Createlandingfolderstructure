import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  padding: "10px 16px",
                  textAlign: "left",
                  fontWeight: 700,
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "#ffffff" }}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  style={{
                    padding: "10px 16px",
                    color: "#334155",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          fontSize: "1.25rem",
          fontWeight: 800,
          color: "#0f172a",
          marginBottom: "0.75rem",
          paddingBottom: "0.5rem",
          borderBottom: "2px solid #D91429",
          display: "inline-block",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

export default function PricingPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <Navbar />
      <main style={{ paddingTop: "calc(var(--header-height) + 3rem)", paddingBottom: "5rem" }}>
        <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem" }}>

          {/* Page Header */}
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ color: "#D91429", fontWeight: 700, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "0.5rem" }}>
              Transparent Pricing
            </p>
            <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.75rem)", fontWeight: 900, color: "#0f172a", lineHeight: 1.2, marginBottom: "1rem" }}>
              How Pricing Works
            </h1>
            <p style={{ fontSize: "1rem", color: "#475569", maxWidth: "42rem", margin: "0 auto", lineHeight: 1.8 }}>
              At Victorious Love Pro Clean, our pricing system is designed to be transparent, flexible, and personalized
              based on your home and service needs. Every quote is automatically calculated using several factors to
              ensure fair and accurate pricing for each customer.
            </p>
          </div>

          {/* What Affects Pricing */}
          <Section title="What Affects Pricing?">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
              Your cleaning quote is based on:
            </p>
            <ul style={{ paddingLeft: "1.25rem", color: "#475569", lineHeight: 2.2, fontSize: "0.95rem" }}>
              {[
                "Property type (Apartment, Condo, Townhouse, or House)",
                "Square footage — larger homes may cost more depending on size tiers",
                "Number of bedrooms",
                "Service type — Standard, Deep Cleaning, Move-Out, or Post-Construction",
                "Location demand and market area",
                "Cleaning frequency — Weekly, Biweekly, or Monthly service plans",
                "Membership status and approved discounts",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* First-Time Pricing */}
          <Section title="First-Time Customer Pricing">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              New customers receive a simplified introductory cleaning rate based on home size. This allows you to try
              the platform before selecting recurring service options.
            </p>
            <Table
              headers={["Home Size", "Starting Price"]}
              rows={[
                ["Under 2,000 sq ft", "$75"],
                ["2,001 – 3,500 sq ft", "$125"],
                ["3,501 – 5,000 sq ft", "$175"],
                ["5,001 – 8,000 sq ft", "$275"],
                ["Over 8,000 sq ft", "$425"],
              ]}
            />
            <p style={{ color: "#64748b", fontSize: "0.875rem", fontStyle: "italic" }}>
              After your first cleaning, recurring subscription and service plan options become available.
            </p>
          </Section>

          {/* Recurring Pricing */}
          <Section title="Recurring Cleaning Pricing">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Returning customers receive dynamic pricing calculated from several factors including home size, property
              type, and service frequency.
            </p>
            <Table
              headers={["Cleaning Schedule", "Pricing Benefit"]}
              rows={[
                ["Weekly", "Lowest recurring rate"],
                ["Biweekly", "Recommended balance of value and maintenance"],
                ["Monthly", "Standard full-rate recurring service"],
              ]}
            />
            <p style={{ color: "#64748b", fontSize: "0.875rem", fontStyle: "italic" }}>
              Biweekly service is typically recommended as the best balance between maintenance and affordability.
            </p>
          </Section>

          {/* Service Type Adjustments */}
          <Section title="Service Type Adjustments">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Some cleaning services require additional labor, equipment, or preparation time.
            </p>
            <Table
              headers={["Service Type", "Pricing Adjustment"]}
              rows={[
                ["Deep Cleaning", "+30%"],
                ["Move-Out Cleaning", "+50%"],
                ["Post-Construction Cleaning", "+60%"],
              ]}
            />
          </Section>

          {/* Membership Benefits */}
          <Section title="Membership Benefits">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              Customers with an active membership may receive reduced costs and special pricing advantages.
            </p>
            <Table
              headers={["Membership Status", "Cost"]}
              rows={[
                ["Standard Customers", "Cleaning cost + $5 booking fee"],
                ["Active Members", "Only $5 booking fee"],
                ["Affordable Access Approved", "$0 total cost"],
              ]}
            />
          </Section>

          {/* What To Expect */}
          <Section title="What To Expect">
            <p style={{ color: "#475569", lineHeight: 1.8, marginBottom: "1rem" }}>
              When requesting a quote, customers can expect:
            </p>
            <ul style={{ paddingLeft: "1.25rem", color: "#475569", lineHeight: 2.2, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              {[
                "Instant automated pricing",
                "Transparent pricing calculations",
                "No hidden service charges",
                "Personalized rates based on home details",
                "Flexible recurring cleaning options",
                "Secure and seamless booking through our mobile platform",
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{ color: "#0f172a", fontWeight: 600, lineHeight: 1.8, padding: "1.25rem", background: "#fff", borderLeft: "4px solid #D91429", borderRadius: "0 8px 8px 0" }}>
              Our goal is to make professional cleaning simple, affordable, and easy to understand while delivering
              high-quality service tailored to your needs.
            </p>
          </Section>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href="/signup"
              style={{
                display: "inline-block",
                background: "#D91429",
                color: "#ffffff",
                padding: "1rem 2.5rem",
                borderRadius: "8px",
                fontWeight: 700,
                fontSize: "1rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(217,20,41,0.35)",
              }}
            >
              Book Your First Cleaning
            </a>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
