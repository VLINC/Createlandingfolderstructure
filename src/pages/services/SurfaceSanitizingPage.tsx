import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Check } from "lucide-react";

export default function SurfaceSanitizingPage() {
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
              <h1 className="text-4xl font-bold text-[#D91429]">Surface Sanitizing</h1>
              <p className="text-lg text-gray-600 mt-2">Professional disinfection and sanitization services</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Surface Sanitizing service provides thorough disinfection of high-touch surfaces and frequently used 
            areas throughout your home. We use EPA-registered, hospital-grade disinfectants that are proven effective 
            against bacteria, viruses, and other harmful pathogens while remaining safe for your family and pets.
          </p>
          <p className="text-gray-700">
            This service is especially important for households with young children, elderly residents, individuals 
            with compromised immune systems, or anyone concerned about illness prevention. We focus on the areas 
            most likely to harbor germs and bacteria.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                High-Touch Surfaces
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Door handles and knobs</li>
                <li>• Light switches</li>
                <li>• Handrails and banisters</li>
                <li>• Cabinet handles</li>
                <li>• Drawer pulls</li>
                <li>• Appliance handles (fridge, oven, microwave)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Kitchen Sanitization
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Countertops and backsplash</li>
                <li>• Sink and faucet handles</li>
                <li>• Cutting boards and prep surfaces</li>
                <li>• Refrigerator shelves and door seals</li>
                <li>• Microwave interior</li>
                <li>• Trash can surfaces</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Bathroom Disinfection
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Toilet seats, handles, and bases</li>
                <li>• Sink faucets and handles</li>
                <li>• Shower and tub surfaces</li>
                <li>• Bathroom countertops</li>
                <li>• Toilet paper holders</li>
                <li>• Towel bars and hooks</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Living & Bedroom Areas
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Remote controls</li>
                <li>• Phone handsets</li>
                <li>• Tabletops and desktops</li>
                <li>• Nightstands</li>
                <li>• Window sills</li>
                <li>• Chair arms and surfaces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Focus Areas */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Special Focus Areas</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Electronics & Devices</h3>
                <p className="text-gray-700">Keyboards, tablets, phone surfaces, TV remotes, game controllers, and computer mice using electronics-safe disinfectants.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Children's Areas</h3>
                <p className="text-gray-700">Toy sanitization, high chair trays, changing tables, crib rails, and play areas using child-safe, non-toxic products.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Medical Equipment Areas</h3>
                <p className="text-gray-700">Surfaces around wheelchairs, walkers, canes, grab bars, and other mobility or medical equipment (not the equipment itself).</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Pet Contact Areas</h3>
                <p className="text-gray-700">Pet feeding areas, water bowl surroundings, and surfaces where pets frequently make contact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Our Sanitization Process</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D91429] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="font-bold">Clean First</h3>
                <p className="text-gray-700">Remove visible dirt and debris before sanitizing for maximum effectiveness.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D91429] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="font-bold">Apply Disinfectant</h3>
                <p className="text-gray-700">Use EPA-registered hospital-grade disinfectants on all high-touch surfaces.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D91429] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="font-bold">Proper Dwell Time</h3>
                <p className="text-gray-700">Allow disinfectant to remain on surfaces for the recommended contact time to kill germs.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D91429] text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h3 className="font-bold">Safe Finish</h3>
                <p className="text-gray-700">Wipe or rinse as needed to leave surfaces clean, sanitized, and safe for use.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-[#D91429]/20 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Safe & Effective Products</h2>
          <p className="text-gray-700 mb-3">
            We use EPA-registered disinfectants proven effective against common household pathogens including:
          </p>
          <div className="grid md:grid-cols-2 gap-2 text-gray-700 mb-3">
            <p>✓ Bacteria (E. coli, Salmonella, Staphylococcus)</p>
            <p>✓ Viruses (Influenza, cold viruses)</p>
            <p>✓ Fungi and mold spores</p>
            <p>✓ Other common household germs</p>
          </div>
          <p className="text-gray-700 text-sm">
            All products are safe for use around children and pets when used as directed. We also offer fragrance-free 
            and hypoallergenic options for sensitive households.
          </p>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Included with All Cleaning Services</h2>
          <p className="text-gray-700 mb-2">
            Surface Sanitizing is automatically included with all our residential cleaning packages at no extra charge. 
            Seniors (50+), individuals with disabilities, and family caregivers qualify for our <strong>40% Community 
            Assistance Program</strong>.
          </p>
          <p className="text-gray-700">
            Standard pricing: $100/month | With assistance: $60/month (includes surface sanitizing)
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
