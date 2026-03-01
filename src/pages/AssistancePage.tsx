import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function AssistancePage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#D91429] hover:text-red-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Main Content */}
        <section className="bg-white p-12 rounded-[1.25rem] shadow-md">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D91429] mb-6">
            Community Assistance Program
          </h1>

          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-10">
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

        {/* Why Choose Section */}
        <section className="bg-white p-12 rounded-[1.25rem] shadow-md mt-8">
          <h2 className="text-3xl font-bold text-center text-[#D91429] mb-6">
            Why Choose Victorious Love Pro Clean
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-center">
            Victorious Love Pro Clean is committed to delivering dependable, high-quality cleaning services built on professionalism, integrity, and attention to detail. Our experienced providers use proven cleaning methods, industry-grade products, and a consistent quality control process to ensure every space is cleaned to the highest standard. We prioritize reliability, clear communication, and respect for your home or business, with affordable monthly subscriptions that work for everyone. With flexible plans designed to fit different needs and budgets, Victorious Love Pro Clean delivers consistent, trusted service you can confidently rely on.
          </p>
        </section>
      </div>
    </div>
  );
}