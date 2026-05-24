import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, TruckIcon, Check } from "lucide-react";

export default function MoveInMoveOutPage() {
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
              <TruckIcon className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Move-In/Move-Out Cleaning</h1>
              <p className="text-lg text-gray-600 mt-2">Comprehensive cleaning for home transitions</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Moving is stressful enough without worrying about cleaning. Our Move-In/Move-Out Cleaning service 
            provides thorough, detailed cleaning for empty homes during transitions. Whether you're preparing 
            a property for new tenants, getting ready to move into a new home, or ensuring you get your security 
            deposit back, we've got you covered.
          </p>
          <p className="text-gray-700">
            We clean every corner, closet, and crevice to ensure the property is spotless. Our service meets 
            landlord and property management standards, making transitions smoother for everyone involved.
          </p>
        </div>

        {/* Service Types */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">Two Service Options</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-2 border-[#D91429]/20 p-6 rounded-[1.25rem]">
              <h3 className="text-xl font-bold text-[#D91429] mb-3">Move-Out Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Perfect for tenants and homeowners preparing to leave a property. We ensure the space is 
                clean and ready for the next occupant or final inspection.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Maximize security deposit return</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Meet lease requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Leave home in pristine condition</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[#D91429]/20 p-6 rounded-[1.25rem]">
              <h3 className="text-xl font-bold text-[#D91429] mb-3">Move-In Cleaning</h3>
              <p className="text-gray-700 mb-4">
                Start fresh in your new home with a deep clean before you unpack. We sanitize every surface 
                so you can move in with confidence.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Sanitize before unpacking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Remove previous tenant residue</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-[#D91429] flex-shrink-0 mt-0.5" />
                  <span>Fresh start in clean home</span>
                </li>
              </ul>
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
                Kitchen Deep Clean
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Inside and outside all cabinets</li>
                <li>• Inside oven, microwave, refrigerator</li>
                <li>• Countertops and backsplash</li>
                <li>• Sink and faucet deep clean</li>
                <li>• All appliance surfaces</li>
                <li>• Floor scrubbing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bathroom Intensive Clean
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Inside cabinets and drawers</li>
                <li>• Toilet deep clean and sanitize</li>
                <li>• Shower/tub scrubbing and grout</li>
                <li>• Sink, counters, and mirrors</li>
                <li>• Light fixtures and exhaust fans</li>
                <li>• Floor scrubbing and sanitizing</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                All Rooms & Spaces
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Inside all closets</li>
                <li>• Baseboards throughout</li>
                <li>• Window sills and tracks</li>
                <li>• Light fixtures and ceiling fans</li>
                <li>• Door frames and switches</li>
                <li>• All floors (vacuum and mop)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Detail Work
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Air vent covers</li>
                <li>• Blinds dusting (if present)</li>
                <li>• Wall spot cleaning</li>
                <li>• Behind and under appliances</li>
                <li>• Laundry room cleaning</li>
                <li>• Garage sweep (if applicable)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Why Choose Our Move-In/Move-Out Service</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Landlord & Property Manager Approved</h3>
                <p className="text-gray-700">Our cleaning meets industry standards for move-out inspections.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Flexible Scheduling</h3>
                <p className="text-gray-700">We work around your moving timeline, including weekends and last-minute requests.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">No Furniture Required</h3>
                <p className="text-gray-700">We clean empty properties, making it easier to access every area.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Stress-Free Transitions</h3>
                <p className="text-gray-700">One less thing to worry about during your move.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Community Assistance Available</h2>
          <p className="text-gray-700 mb-2">
            Seniors (50+), individuals with disabilities, and family caregivers may qualify for our 
            <strong> 40% Community Assistance Program</strong> on move-in/move-out cleaning services.
          </p>
          <p className="text-gray-700">
            Contact us for custom quotes based on home size and cleaning requirements.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg mb-4"
          >
            Book Move Cleaning - Get 40% Off
          </Link>
          <p className="text-gray-600">
            <Link to="/services" className="text-[#D91429] hover:underline">View all services</Link>
          </p>
        </div>
      </div>
    </div>
  );
}











