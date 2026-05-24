import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProviderSignupLandingPage() {
  const navigate = useNavigate();

  const steps = [
    "Welcome",
    "Create Account",
    "Background Check Intake",
    "Background Check Status",
    "Identity Verification",
    "Activation Fee",
    "Tax Forms",
    "Document Upload",
    "Safety Acknowledgments",
    "Work Rules",
    "Preferences",
    "Permissions",
    "Review",
    "Complete"
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Become a Pro Clean Provider
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Join a trusted cleaning platform and start receiving jobs in your area.
          Our onboarding process is simple, secure, and takes about 5–10 minutes.
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-left flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <div>
                <p className="text-sm font-semibold text-[#D91429] mb-1">
                  Step {index + 1}
                </p>
                <p className="text-gray-900 font-medium">{step}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/provider-signup/welcome")}
          className="bg-[#D91429] hover:bg-[#A00F1F] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-transform hover:scale-105"
        >
          Start Provider Onboarding
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Takes about 5–10 minutes to complete.
        </p>
      </div>
    </div>
  );
}













