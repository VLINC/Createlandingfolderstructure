import { Link } from "react-router-dom";

export default function Assistance() {
  return (
    <section id="assistance" className="py-20 px-6 bg-gray-100 fade-in" role="region" aria-labelledby="assistance-title">
      <h2 id="assistance-title" className="text-3xl font-bold text-center text-[#D91429]">
        Community Assistance Program
      </h2>

      <p className="text-center mt-4 text-gray-700 max-w-2xl mx-auto">
        We proudly offer a <strong>40% discount</strong> to seniors, individuals
        with disabilities, and low-income households. Everyone deserves a clean,
        safe, and welcoming home.
      </p>

      <div className="mt-10 flex justify-center">
        <Link
          to="/apply"
          className="bg-[#D91429] text-white px-10 py-4 rounded-[1.25rem] text-lg font-semibold shadow-lg hover:bg-[#b81022] transition focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2 inline-block"
          aria-label="Check eligibility for 40% community assistance discount"
        >
          Check Eligibility
        </Link>
      </div>
    </section>
  );
}












