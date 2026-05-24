import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Droplet, Check, Leaf } from "lucide-react";

export default function EcoFriendlyProductsPage() {
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
              <Leaf className="w-8 h-8 text-[#D91429]" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-[#D91429]">Eco-Friendly Products</h1>
              <p className="text-lg text-gray-600 mt-2">Green cleaning solutions for a healthier home and planet</p>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Our Commitment to Green Cleaning</h2>
          <p className="text-gray-700 mb-4">
            At Victorious Love Pro Clean, we believe in protecting both your family's health and our planet. Our 
            eco-friendly cleaning products are carefully selected to be effective, safe, and environmentally 
            responsible. We use plant-based, biodegradable, non-toxic cleaning solutions that deliver professional 
            results without harsh chemicals.
          </p>
          <p className="text-gray-700">
            Our green cleaning approach is especially important for households with children, pets, elderly residents, 
            individuals with allergies or chemical sensitivities, and anyone committed to reducing their environmental 
            impact. You get a spotlessly clean home without compromising safety or sustainability.
          </p>
        </div>

        {/* Product Features */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-6">What Makes Our Products Eco-Friendly</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Plant-Based Ingredients
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Derived from natural, renewable sources</li>
                <li>• No petroleum-based chemicals</li>
                <li>• Essential oil-based fragrances</li>
                <li>• Coconut and palm kernel surfactants</li>
                <li>• Citrus and vinegar-based cleaners</li>
                <li>• Natural enzyme formulas</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Biodegradable & Safe
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Breaks down naturally in the environment</li>
                <li>• Won't pollute waterways</li>
                <li>• Safe for septic systems</li>
                <li>• Non-toxic to aquatic life</li>
                <li>• Phosphate-free formulas</li>
                <li>• Low environmental impact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Health-Conscious
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• No harsh fumes or strong odors</li>
                <li>• Hypoallergenic options available</li>
                <li>• Free from toxic chemicals</li>
                <li>• No ammonia, bleach, or chlorine</li>
                <li>• Asthma & allergy-friendly certified</li>
                <li>• Safe around children and pets</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-[#D91429]" />
                Environmentally Responsible
              </h3>
              <ul className="space-y-2 text-gray-700 ml-7">
                <li>• Recyclable packaging</li>
                <li>• Reduced plastic waste</li>
                <li>• Concentrated formulas (less shipping)</li>
                <li>• Cruelty-free (not tested on animals)</li>
                <li>• Carbon-neutral when possible</li>
                <li>• Sustainable sourcing practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Products We Use */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Types of Eco-Friendly Products We Use</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">All-Purpose Cleaners</h3>
                <p className="text-gray-700">Plant-based multi-surface cleaners for countertops, tables, appliances, and general cleaning tasks.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Natural Disinfectants</h3>
                <p className="text-gray-700">Botanical-based sanitizers that kill 99.9% of germs without harsh chemicals like bleach or ammonia.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Glass & Window Cleaners</h3>
                <p className="text-gray-700">Streak-free formulas made with vinegar and plant-derived alcohol, no ammonia or harsh solvents.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Floor Cleaners</h3>
                <p className="text-gray-700">Safe for all floor types including hardwood, tile, and laminate. Biodegradable and residue-free.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Bathroom Cleaners</h3>
                <p className="text-gray-700">Effective against soap scum and hard water without harsh acids or toxic fumes.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Droplet className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Furniture Polish</h3>
                <p className="text-gray-700">Natural oils and plant-based ingredients that clean and protect wood surfaces.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md mb-8">
          <h2 className="text-2xl font-bold text-[#D91429] mb-4">Benefits for Your Family & Home</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Safer for Children</h3>
                <p className="text-gray-700 text-sm">No toxic residues on surfaces where kids play and eat</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Pet-Friendly</h3>
                <p className="text-gray-700 text-sm">Safe for homes with cats, dogs, and other pets</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Allergy Relief</h3>
                <p className="text-gray-700 text-sm">Reduces triggers for asthma and allergies</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Better Air Quality</h3>
                <p className="text-gray-700 text-sm">No harsh chemical fumes or VOCs</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Environmental Protection</h3>
                <p className="text-gray-700 text-sm">Reduce your household's ecological footprint</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-[#D91429] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold">Effective Cleaning</h3>
                <p className="text-gray-700 text-sm">Professional results without compromise</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Our Products Meet These Standards</h2>
          <div className="grid md:grid-cols-2 gap-3 text-gray-700">
            <p>✓ EPA Safer Choice certified</p>
            <p>✓ Green Seal certified</p>
            <p>✓ USDA Bio-Preferred</p>
            <p>✓ Leaping Bunny (cruelty-free)</p>
            <p>✓ EWG verified (Environmental Working Group)</p>
            <p>✓ Asthma & Allergy Friendly certified</p>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h2 className="text-xl font-bold text-[#D91429] mb-3">Standard with All Services - No Extra Cost</h2>
          <p className="text-gray-700 mb-2">
            Eco-friendly products are our standard – we use them in all our cleaning services at no additional charge. 
            Seniors (50+), individuals with disabilities, and family caregivers qualify for our <strong>40% Community 
            Assistance Program</strong>.
          </p>
          <p className="text-gray-700">
            Standard pricing: $100/month | With assistance: $60/month (all eco-friendly products included)
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











