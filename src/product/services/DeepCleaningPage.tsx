import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Check } from "lucide-react";

export default function DeepCleaningPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-[#D91429] hover:text-red-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Deep Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Thorough, intensive cleaning for your entire home</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our deep cleaning service goes beyond regular maintenance cleaning to tackle hard-to-reach areas, 
            built-up grime, and overlooked spaces. This comprehensive service is perfect for spring cleaning, 
            preparing for special occasions, or getting your home back to pristine condition.
          </p>
          <p className="text-gray-700">
            Deep cleaning includes everything in our standard residential cleaning plus extensive attention to 
            detail in areas that often get neglected. We recommend deep cleaning 2-4 times per year or when 
            moving into a new home.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Intensive Kitchen Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Deep clean inside oven</li>
                <li>• Refrigerator interior cleaning</li>
                <li>• Cabinet interior wiping</li>
                <li>• Backsplash deep scrubbing</li>
                <li>• Range hood cleaning</li>
                <li>• Baseboards and corners</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bathroom Deep Clean
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Grout scrubbing and sanitizing</li>
                <li>• Tile deep cleaning</li>
                <li>• Cabinet interior wiping</li>
                <li>• Exhaust fan cleaning</li>
                <li>• Behind toilet cleaning</li>
                <li>• Fixture deep polishing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Detailed Room Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Baseboards throughout home</li>
                <li>• Door frames and light switches</li>
                <li>• Window sills and tracks</li>
                <li>• Ceiling fans and light fixtures</li>
                <li>• Under furniture (movable items)</li>
                <li>• Closet organization (upon request)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Hard-to-Reach Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Behind and under appliances</li>
                <li>• Top of cabinets and shelves</li>
                <li>• Air vent covers</li>
                <li>• Wall spot cleaning</li>
                <li>• Blinds dusting</li>
                <li>• All corners and crevices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to Choose */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">When to Choose Deep Cleaning</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Seasonal Cleaning</h3>
                <p className="text-gray-700">Perfect for spring cleaning or preparing your home for the holidays.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">After Renovation</h3>
                <p className="text-gray-700">Remove construction dust and debris after remodeling projects.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Long-Term Buildup</h3>
                <p className="text-gray-700">Address grime and dirt that has accumulated over months or years.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Special Occasions</h3>
                <p className="text-gray-700">Get your home spotless before hosting guests or events.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Community Assistance Available</h2>
          <p className="text-gray-700 mb-2">
            Seniors (50+), individuals with disabilities, and family caregivers may qualify for our 
            <strong> 40% Community Assistance Program</strong>.
          </p>
          <p className="text-gray-700">
            Deep cleaning services available at discounted rates for qualifying households.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg mb-4"
          >
            Schedule Deep Cleaning - Get 40% Off
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











