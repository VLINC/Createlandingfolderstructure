import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-[#D91429] text-white text-center fade-in" role="region" aria-labelledby="cta-title">
      <h2 className="text-3xl font-bold">Ready to Get Started?</h2>

      <p className="mt-4 text-lg opacity-90">
        Join thousands of families who trust Victorious Love Pro Clean.
      </p>

      <button
        onClick={() =>
          (window.location.href = "https://app.procleanvlinc.com/login")
        }
        className="mt-8 bg-white text-[#D91429] px-10 py-4 rounded-[1.25rem] text-lg font-semibold shadow hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#D91429]"
        aria-label="Sign up or log in to get started"
      >
        Sign Up / Log In
      </button>
    </section>
  );
}
