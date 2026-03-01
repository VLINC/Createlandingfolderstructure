import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Check } from "lucide-react";

export default function ResidentialCleaningPage() {
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
              <Home className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Residential Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Professional home cleaning for houses and apartments</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our residential cleaning service provides comprehensive cleaning for homes up to 2,000 square feet. 
            We understand that maintaining a clean home is essential for your family's health and well-being, 
            and our professional team ensures every corner of your home sparkles.
          </p>
          <p className="text-gray-700">
            Perfect for busy families, working professionals, and anyone who values a clean, organized living space. 
            We customize our services to meet your specific needs and schedule.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Kitchen Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Countertops and backsplash wiping</li>
                <li>• Sink and faucet cleaning</li>
                <li>• Appliance exterior cleaning</li>
                <li>• Cabinet front wiping</li>
                <li>• Floor mopping and vacuuming</li>
                <li>• Trash removal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bathroom Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Toilet cleaning and sanitizing</li>
                <li>• Shower and tub scrubbing</li>
                <li>• Sink and countertop cleaning</li>
                <li>• Mirror and fixture polishing</li>
                <li>• Floor cleaning</li>
                <li>• Trash removal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bedroom Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Dusting all surfaces</li>
                <li>• Bed making (linens provided by client)</li>
                <li>• Vacuuming carpets and rugs</li>
                <li>• Floor cleaning</li>
                <li>• Window sill dusting</li>
                <li>• Trash removal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Living Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Dusting furniture and surfaces</li>
                <li>• Vacuuming carpets and upholstery</li>
                <li>• Floor mopping and cleaning</li>
                <li>• Window sill and baseboard cleaning</li>
                <li>• Light organizing (upon request)</li>
                <li>• Trash removal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Why Choose Residential Cleaning?</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Regular Maintenance</h3>
                <p className="text-gray-700">Keep your home consistently clean with scheduled weekly or bi-weekly service.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Time Savings</h3>
                <p className="text-gray-700">Spend more time with family and less time cleaning - we handle the dirty work.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Professional Quality</h3>
                <p className="text-gray-700">Our trained staff uses professional-grade equipment and eco-friendly products.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Customizable Service</h3>
                <p className="text-gray-700">We tailor our cleaning to your specific needs and preferences.</p>
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
            Standard pricing: $100/month for homes up to 2,000 sq ft | With assistance: $60/month
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg mb-4"
          >
            Apply for Service - Get 40% Off
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
