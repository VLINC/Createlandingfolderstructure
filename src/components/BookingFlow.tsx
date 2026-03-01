import { Calendar, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function BookingFlow() {
  const steps = [
    {
      icon: Calendar,
      title: "1. Sign Up",
      description: "Create your account and tell us about your cleaning needs. Quick and easy setup in minutes."
    },
    {
      icon: CheckCircle,
      title: "2. Get Matched",
      description: "We connect you with trusted, background-checked professionals in your area who fit your needs."
    },
    {
      icon: Sparkles,
      title: "3. Book & Relax",
      description: "Choose your schedule, confirm your booking, and enjoy a spotless home with care and attention."
    }
  ];

  return (
    <section id="booking" className="py-20 px-6 bg-white fade-in" role="region" aria-labelledby="booking-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="booking-title" className="text-3xl font-bold text-center mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple, transparent, and designed with your convenience in mind
        </p>

        <div className="grid md:grid-cols-3 gap-10 mb-12" role="list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={index}
                className="text-center p-6 rounded-[1.25rem] bg-gray-50 hover:bg-gray-100 transition focus-within:ring-2 focus-within:ring-[#D91429]"
                role="listitem"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#D91429] text-white mb-4" aria-hidden="true">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/login"
            className="bg-[#D91429] text-white px-10 py-4 rounded-[1.25rem] text-lg font-semibold shadow-lg hover:bg-[#b81022] transition inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-[#D91429] focus:ring-offset-2"
            aria-label="Sign up or log in to get started"
          >
            <Calendar size={20} aria-hidden="true" />
            Sign Up / Log In
          </Link>
          <p className="text-sm text-gray-500 mt-3" role="note">
            No credit card required to create an account
          </p>
        </div>
      </div>
    </section>
  );
}