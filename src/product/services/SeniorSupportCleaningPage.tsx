import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Check } from "lucide-react";

export default function SeniorSupportCleaningPage() {
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
              <Heart className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Senior Support Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Compassionate cleaning services for seniors and those with limited mobility</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Senior Support Cleaning service is specifically designed for older adults who need help maintaining 
            their homes. We understand the unique challenges seniors face and provide compassionate, reliable service 
            that helps them age in place with dignity and comfort.
          </p>
          <p className="text-gray-700">
            Our trained staff works at a pace that's comfortable for seniors, respects their routines, and provides 
            friendly companionship during visits. We're committed to helping seniors maintain their independence 
            while living in a clean, safe environment.
          </p>
        </div>

        {/* What Makes This Different */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">What Makes This Service Special</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Patient & Understanding Staff</h3>
                <p className="text-gray-700">Our team is specially trained to work with seniors, understanding mobility challenges and communication needs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Consistent Caregivers</h3>
                <p className="text-gray-700">Same cleaning professionals each visit to build trust and familiarity.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Safety-Focused Approach</h3>
                <p className="text-gray-700">Extra attention to fall hazards, clutter removal, and creating safe pathways.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Flexible Scheduling</h3>
                <p className="text-gray-700">We work around medical appointments, family visits, and daily routines.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Essential Living Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Dusting all reachable surfaces</li>
                <li>• Vacuuming and floor cleaning</li>
                <li>• Trash removal</li>
                <li>• Light organizing and tidying</li>
                <li>• Clearing walkways</li>
                <li>• Pet area cleaning (if applicable)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Kitchen Support
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Counter and table wiping</li>
                <li>• Dish washing assistance</li>
                <li>• Appliance cleaning</li>
                <li>• Sink sanitizing</li>
                <li>• Floor cleaning</li>
                <li>• Expired food removal (with permission)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bathroom Care
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Toilet cleaning and sanitizing</li>
                <li>• Shower/tub cleaning</li>
                <li>• Sink and counter cleaning</li>
                <li>• Mirror cleaning</li>
                <li>• Floor cleaning</li>
                <li>• Grab bar wiping</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bedroom Comfort
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Bed making and linen changes</li>
                <li>• Surface dusting</li>
                <li>• Floor vacuuming/cleaning</li>
                <li>• Nightstand organizing</li>
                <li>• Window sill cleaning</li>
                <li>• Clutter management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who Qualifies */}
        <div className="bg-gradient-to-r from-[#D91429]/10 to-blue-50 border-2 border-[#D91429]/20 p-8 rounded-[1.25rem] mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">40% Community Assistance Program</h2>
          <p className="text-gray-700 mb-4">
            <strong>Seniors aged 50 and older automatically qualify</strong> for our Community Assistance Program, 
            reducing your monthly rate from $100 to just <strong>$60/month</strong>.
          </p>
          <div className="bg-white p-6 rounded-[1.25rem] mb-4">
            <h3 className="font-bold mb-3">Flexible Payment Options:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>$60/month</strong> - One monthly payment</li>
              <li>✓ <strong>$30 bi-weekly</strong> - Two payments per month</li>
              <li>✓ <strong>$15/week</strong> - Four payments per month</li>
            </ul>
          </div>
          <p className="text-gray-700 text-sm">
            *For homes up to 2,000 square feet. Larger homes require custom quotes.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg mb-4"
          >
            Apply Now - Get 40% Off (Age 50+)
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











