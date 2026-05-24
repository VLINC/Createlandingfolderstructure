import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Check } from "lucide-react";

export default function TrashRecyclingPage() {
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
              <Trash2 className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Trash & Recycling</h1>
              <p className="text-lg text-gray-600 mt-2">Complete waste management and recycling services</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Trash & Recycling service takes the hassle out of waste management. We collect, sort, and properly 
            dispose of household waste and recyclables throughout your home during every cleaning visit. This service 
            ensures a cleaner, healthier living environment and supports environmental sustainability.
          </p>
          <p className="text-gray-700">
            Perfect for seniors, individuals with mobility challenges, and busy families who need help managing 
            household waste. We handle everything from kitchen garbage to recycling bins, making your home cleaner 
            and more organized.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Trash Collection
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Empty all trash bins throughout home</li>
                <li>• Replace trash bag liners</li>
                <li>• Kitchen waste removal</li>
                <li>• Bathroom waste disposal</li>
                <li>• Bedroom and office trash</li>
                <li>• Take trash to outdoor bins</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Recycling Management
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Sort recyclable materials</li>
                <li>• Empty recycling bins</li>
                <li>• Rinse containers (if needed)</li>
                <li>• Organize recyclables properly</li>
                <li>• Transport to outdoor recycling bins</li>
                <li>• Follow local recycling guidelines</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bin Maintenance
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Wipe down trash bin exteriors</li>
                <li>• Sanitize kitchen trash cans</li>
                <li>• Clean recycling containers</li>
                <li>• Deodorize bins as needed</li>
                <li>• Replace worn liners</li>
                <li>• Organize outdoor waste area</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Special Waste Handling
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Pet waste disposal (litter boxes)</li>
                <li>• Compost material handling</li>
                <li>• Expired food removal (with permission)</li>
                <li>• Old newspapers and magazines</li>
                <li>• Cardboard breakdown and removal</li>
                <li>• Proper hazardous waste guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Benefits</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Healthier Home Environment</h3>
                <p className="text-gray-700">Regular waste removal prevents odors, bacteria growth, and pest attraction.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Mobility Assistance</h3>
                <p className="text-gray-700">Ideal for seniors and those with disabilities who struggle to carry trash to outdoor bins.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Environmental Responsibility</h3>
                <p className="text-gray-700">Proper recycling and waste sorting helps reduce environmental impact.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Convenience & Time Savings</h3>
                <p className="text-gray-700">No need to remember trash day or struggle with heavy bins.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Perfect For */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-[#D91429]/20 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-3 text-gray-700">
            <p>✓ Seniors with limited mobility</p>
            <p>✓ Individuals with disabilities</p>
            <p>✓ Busy families and working parents</p>
            <p>✓ Multi-story homes</p>
            <p>✓ Eco-conscious households</p>
            <p>✓ Post-surgery recovery periods</p>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Included with All Cleaning Services</h2>
          <p className="text-gray-700 mb-2">
            Trash & Recycling is automatically included with all our residential cleaning packages at no extra charge. 
            Seniors (50+), individuals with disabilities, and family caregivers qualify for our <strong>40% Community 
            Assistance Program</strong>.
          </p>
          <p className="text-gray-700">
            Standard pricing: $100/month | With assistance: $60/month (includes trash & recycling service)
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg mb-4"
          >
            Get Started - Apply Now
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











