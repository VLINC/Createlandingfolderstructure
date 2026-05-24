import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Users, Check } from "lucide-react";

export default function FamilyHomeCleaningPage() {
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
              <Users className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Family Home Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Regular cleaning to keep busy family homes organized</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Family life is busy, and keeping up with household chores can feel overwhelming. Our Family Home Cleaning 
            service is designed specifically for families with children, providing regular, reliable cleaning that 
            helps maintain a healthy, organized home environment.
          </p>
          <p className="text-gray-700">
            We understand the unique challenges of family households - from sticky fingers and toy clutter to 
            pet messes and high-traffic areas. Our service adapts to your family's needs, schedule, and lifestyle, 
            giving you more time to focus on what matters most: your family.
          </p>
        </div>

        {/* Perfect For */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Perfect For</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Working Parents</h3>
                <p className="text-gray-700">Reclaim your weekends and spend quality time with your kids instead of cleaning.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Growing Families</h3>
                <p className="text-gray-700">From newborns to teenagers, we handle the mess at every stage.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Multi-Generational Homes</h3>
                <p className="text-gray-700">Supporting families caring for children and elderly parents under one roof.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Pet-Friendly Households</h3>
                <p className="text-gray-700">We love pets! Specialized cleaning for homes with furry family members.</p>
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
                Kid-Friendly Spaces
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Playroom organizing and cleaning</li>
                <li>• Toy sanitizing (high-touch items)</li>
                <li>• Children's bathroom cleaning</li>
                <li>• Bedroom tidying and vacuuming</li>
                <li>• Stain treatment on carpets</li>
                <li>• Doorknob and light switch sanitizing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                High-Traffic Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Kitchen deep cleaning</li>
                <li>• Living room dusting and vacuuming</li>
                <li>• Entryway and mudroom cleaning</li>
                <li>• Stairway vacuuming</li>
                <li>• Floor mopping (all hard surfaces)</li>
                <li>• Baseboards and corners</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Family Bathrooms
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Toilet cleaning and sanitizing</li>
                <li>• Tub and shower scrubbing</li>
                <li>• Sink and counter disinfecting</li>
                <li>• Mirror and fixture cleaning</li>
                <li>• Floor sanitizing</li>
                <li>• Toothbrush holder cleaning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Pet Care Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Pet feeding area cleaning</li>
                <li>• Litter box area sanitizing</li>
                <li>• Pet hair removal (furniture/floors)</li>
                <li>• Water bowl area wiping</li>
                <li>• Pet bed area vacuuming</li>
                <li>• Odor control</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Benefits for Your Family</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Healthier home environment for growing children</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">More quality family time on weekends</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Reduced stress for busy parents</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Consistent cleaning schedule you can rely on</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Child-safe, eco-friendly cleaning products</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Organized, clutter-free living spaces</p>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Community Assistance Available</h2>
          <p className="text-gray-700 mb-2">
            <strong>Family caregivers</strong> who care for aging parents, family members with disabilities, 
            or other dependents may qualify for our <strong>40% Community Assistance Program</strong>.
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
            Get Started - Apply for Service
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











