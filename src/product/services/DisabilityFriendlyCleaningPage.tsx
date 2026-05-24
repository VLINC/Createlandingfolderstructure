import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HandHeart, Check } from "lucide-react";

export default function DisabilityFriendlyCleaningPage() {
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
              <HandHeart className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Disability-Friendly Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Accessible cleaning services for individuals with disabilities</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Disability-Friendly Cleaning service is designed to support individuals with physical, cognitive, 
            or developmental disabilities, as well as their family caregivers. We provide accessible, respectful 
            service that accommodates various needs and helps create a safe, clean living environment.
          </p>
          <p className="text-gray-700">
            We work closely with clients and their caregivers to understand specific requirements, sensitivities, 
            and preferences. Our goal is to reduce the burden of household maintenance so you can focus on health, 
            well-being, and quality of life.
          </p>
        </div>

        {/* What Makes This Different */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Specialized Approach</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Accessibility Focused</h3>
                <p className="text-gray-700">We understand mobility aids, wheelchair access, and the importance of maintaining clear pathways.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Sensory Considerations</h3>
                <p className="text-gray-700">Fragrance-free and low-noise cleaning options available for those with sensory sensitivities.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Trained & Compassionate Staff</h3>
                <p className="text-gray-700">Our team is trained in disability awareness and respectful communication.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Caregiver Support</h3>
                <p className="text-gray-700">We coordinate with family members and professional caregivers to ensure continuity of care.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Flexible & Adaptable</h3>
                <p className="text-gray-700">Services customized to individual needs, routines, and comfort levels.</p>
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
                Accessible Cleaning
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Clear pathways and walkways</li>
                <li>• Remove trip hazards</li>
                <li>• Wheelchair-accessible cleaning</li>
                <li>• Adaptive equipment care</li>
                <li>• Organized storage solutions</li>
                <li>• Medical supply area cleaning</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Essential Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• All standard cleaning tasks</li>
                <li>• Kitchen cleaning and sanitizing</li>
                <li>• Bathroom deep cleaning</li>
                <li>• Bedroom and living areas</li>
                <li>• Floor care (all surfaces)</li>
                <li>• Trash and recycling removal</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Special Accommodations
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Fragrance-free products (if needed)</li>
                <li>• Quiet cleaning methods available</li>
                <li>• Working around medical equipment</li>
                <li>• Communication cards/visual aids</li>
                <li>• Predictable routines and schedules</li>
                <li>• Privacy and dignity maintained</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Safety & Support
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Slip-resistant floor cleaning</li>
                <li>• Proper placement of items</li>
                <li>• Clutter reduction strategies</li>
                <li>• Emergency contact awareness</li>
                <li>• Coordination with care team</li>
                <li>• Respectful communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Who Qualifies */}
        <div className="bg-gradient-to-r from-[#D91429]/10 to-blue-50 border-2 border-[#D91429]/20 p-8 rounded-[1.25rem] mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">40% Community Assistance Program</h2>
          <p className="text-gray-700 mb-4">
            <strong>Individuals with disabilities and their family caregivers qualify</strong> for our Community 
            Assistance Program, reducing your monthly rate from $100 to just <strong>$60/month</strong>.
          </p>
          <div className="bg-white p-6 rounded-[1.25rem] mb-4">
            <h3 className="font-bold mb-3">Flexible Payment Options:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>$60/month</strong> - One monthly payment</li>
              <li>✓ <strong>$30 bi-weekly</strong> - Two payments per month</li>
              <li>✓ <strong>$15/week</strong> - Four payments per month</li>
            </ul>
          </div>
          <p className="text-gray-700 mb-3">
            We understand that many individuals with disabilities are on fixed incomes (SSI, SSDI). Our flexible 
            payment plans make quality cleaning services accessible and affordable.
          </p>
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
            Apply Now - Get 40% Off
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











