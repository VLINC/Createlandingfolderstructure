import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 px-6 text-center fade-in pt-24" role="region" aria-labelledby="hero-title">
      <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-[#D91429]">
        Professional Home Cleaning Near You
      </h1>

      <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
        Local & reliable. Serving families, seniors, and communities with care, dignity, and
        exceptional quality. Trusted providers—ready to help your home shine.
      </p>

      {/* Trust indicators */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <span aria-hidden="true">✓</span> Insured & Bonded
        </span>
        <span aria-hidden="true">•</span>
        <span className="flex items-center gap-1">
          <span aria-hidden="true">✓</span> Background-checked
        </span>
        <span aria-hidden="true">•</span>
        <span className="flex items-center gap-1">
          <span aria-hidden="true">✓</span> Eco-friendly options
        </span>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/login"
          className="bg-[#D91429] text-white px-10 py-4 rounded-[1.25rem] text-lg font-semibold shadow-lg hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2"
          aria-label="Sign up or log in to your account"
        >
          Sign Up / Log In
        </Link>

        <Link
          to="/signup/provider"
          className="bg-white text-[#D91429] border-2 border-[#D91429] px-10 py-4 rounded-[1.25rem] text-lg font-semibold hover:bg-gray-50 transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2"
        >
          Apply as a Provider
        </Link>
      </div>
    </section>
  );
}