import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowLeft } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
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

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D91429] mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            See what our clients have to say about Victorious Love Pro Clean's professional cleaning services.
          </p>
        </div>

        {/* Reviews Section - Ready for Content */}
        <div className="bg-white p-12 rounded-[1.25rem] shadow-md mb-8">
          <div className="text-center py-12">
            <div className="flex justify-center gap-1 mb-6">
              <Star className="w-12 h-12 text-gray-300 fill-gray-300" />
              <Star className="w-12 h-12 text-gray-300 fill-gray-300" />
              <Star className="w-12 h-12 text-gray-300 fill-gray-300" />
              <Star className="w-12 h-12 text-gray-300 fill-gray-300" />
              <Star className="w-12 h-12 text-gray-300 fill-gray-300" />
            </div>
            <p className="text-lg text-gray-500 mb-4">Customer reviews coming soon.</p>
            <p className="text-gray-600">
              We're collecting testimonials from our valued clients.
            </p>
          </div>
        </div>

        {/* Leave a Review Section */}
        <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-[1.25rem] mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4 text-center">
            Share Your Experience
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Are you a current customer We'd love to hear about your experience with our services.
          </p>
          <div className="text-center">
            <a
              href="mailto:support@proincorporated.servicessubject=Customer Review"
              className="inline-block bg-[#D91429] text-white px-8 py-3 rounded-[1.25rem] font-bold hover:bg-red-700 transition"
            >
              Submit a Review
            </a>
          </div>
        </div>

        {/* Community Assistance CTA */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md text-center">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">
            Ready to Experience Our Service
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Qualify for 40% off with our Community Assistance Program
          </p>
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg"
          >
            Apply Now - Get 40% Off
          </Link>
        </div>
      </div>
    </div>
  );
}










