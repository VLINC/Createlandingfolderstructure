import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wind, Check } from "lucide-react";

export default function AirFresheningPage() {
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
              <Wind className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Air Freshening</h1>
              <p className="text-lg text-gray-600 mt-2">Natural air quality improvement and odor elimination</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Air Freshening service goes beyond masking odors – we eliminate them at the source and create a 
            naturally fresh, pleasant-smelling home environment. We use safe, eco-friendly methods to improve indoor 
            air quality and leave your home smelling clean and inviting.
          </p>
          <p className="text-gray-700">
            Perfect for homes with pets, smokers, cooking odors, or musty smells. We offer both fragrance-free options 
            for those with sensitivities and natural scent options for those who prefer a fresh aroma throughout their home.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Odor Source Elimination
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Identify and remove odor sources</li>
                <li>• Deep clean affected areas</li>
                <li>• Trash and waste removal</li>
                <li>• Pet area deodorizing</li>
                <li>• Kitchen odor elimination</li>
                <li>• Bathroom freshening</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Air Quality Improvement
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Open windows for ventilation (weather permitting)</li>
                <li>• Air vent cover cleaning</li>
                <li>• Dust removal (improves air quality)</li>
                <li>• Filter replacement reminders</li>
                <li>• Ceiling fan cleaning</li>
                <li>• Natural air circulation techniques</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Natural Freshening Methods
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Baking soda odor absorption</li>
                <li>• Essential oil diffusion (optional)</li>
                <li>• Natural botanical sachets</li>
                <li>• Activated charcoal placement</li>
                <li>• Fresh herb bundles</li>
                <li>• Citrus-based natural cleaners</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Specialized Applications
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Carpet deodorizing treatment</li>
                <li>• Upholstery freshening</li>
                <li>• Closet and drawer sachets</li>
                <li>• Refrigerator deodorizing</li>
                <li>• Shoe and closet odor removal</li>
                <li>• Linen and fabric refreshing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scent Options */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Scent & Sensitivity Options</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Fragrance-Free Option</h3>
                <p className="text-gray-700">Perfect for individuals with allergies, asthma, chemical sensitivities, or fragrance aversions. We focus solely on odor elimination without adding any scents.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Natural Light Scents</h3>
                <p className="text-gray-700">Gentle, naturally-derived aromas like lavender, lemon, eucalyptus, or vanilla using essential oils and botanical products.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Custom Preferences</h3>
                <p className="text-gray-700">We accommodate your specific scent preferences and sensitivities. Just let us know what works best for you and your family.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Seasonal Aromas</h3>
                <p className="text-gray-700">Optional seasonal scents like cinnamon in fall, pine in winter, floral in spring, and citrus in summer.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Health & Wellness Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Improved indoor air quality</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Reduced allergens and irritants</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Stress reduction through aromatherapy</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Better sleep environment</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Enhanced mood and well-being</p>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <p className="text-gray-700">Welcoming atmosphere for guests</p>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Included with All Cleaning Services</h2>
          <p className="text-gray-700 mb-2">
            Air Freshening is automatically included with all our residential cleaning packages at no extra charge. 
            Seniors (50+), individuals with disabilities, and family caregivers qualify for our <strong>40% Community 
            Assistance Program</strong>.
          </p>
          <p className="text-gray-700">
            Standard pricing: $100/month | With assistance: $60/month (includes air freshening service)
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
