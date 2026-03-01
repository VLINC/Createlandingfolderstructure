import React from "react";
import { Link } from "react-router-dom";
import { Home, Sparkles, Heart, HandHeart, Users, TruckIcon, ArrowLeft, Bed, Sofa, Utensils, Droplet, Wind, Trash2, Car, Warehouse, Waves } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[#D91429] hover:text-red-700 transition font-semibold"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#D91429] mb-4">
            Our Cleaning Services
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Professional cleaning services tailored for families, seniors, and individuals with disabilities.
          </p>
        </div>

        {/* Service Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#D91429] mb-8 text-center">Types of Cleaning Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Residential Cleaning */}
            <Link to="/services/residential-cleaning" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Residential Cleaning</h3>
              <p className="text-gray-700">
                Complete home cleaning services for houses and apartments up to 2,000 sq ft.
              </p>
            </Link>

            {/* Deep Cleaning */}
            <Link to="/services/deep-cleaning" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deep Cleaning</h3>
              <p className="text-gray-700">
                Thorough, detailed cleaning for hard-to-reach areas and built-up grime.
              </p>
            </Link>

            {/* Senior Support Cleaning */}
            <Link to="/services/senior-support-cleaning" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Senior Support Cleaning</h3>
              <p className="text-gray-700">
                Compassionate cleaning services designed for seniors and those with limited mobility.
              </p>
            </Link>

            {/* Disability-Friendly Cleaning */}
            <Link to="/services/disability-friendly-cleaning" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <HandHeart className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Disability-Friendly Cleaning</h3>
              <p className="text-gray-700">
                Accessible cleaning services for individuals with disabilities and their caregivers.
              </p>
            </Link>

            {/* Family Home Cleaning */}
            <Link to="/services/family-home-cleaning" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Home Cleaning</h3>
              <p className="text-gray-700">
                Regular cleaning services to keep busy family homes clean and organized.
              </p>
            </Link>

            {/* Move-In/Move-Out Cleaning */}
            <Link to="/services/move-in-move-out" className="bg-white p-6 rounded-[1.25rem] shadow-md hover:shadow-lg transition block">
              <div className="w-12 h-12 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center mb-4">
                <TruckIcon className="w-6 h-6 text-[#D91429]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Move-In/Move-Out</h3>
              <p className="text-gray-700">
                Comprehensive cleaning for empty homes during transitions.
              </p>
            </Link>
          </div>
        </div>

        {/* What We Clean */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#D91429] mb-8 text-center">What We Clean</h2>
          <div className="bg-white p-8 rounded-[1.25rem] shadow-md">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Kitchen */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Utensils className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Kitchen</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Countertops and backsplash</li>
                  <li>• Sink and faucet</li>
                  <li>• Appliance exterior (refrigerator, stove, microwave)</li>
                  <li>• Cabinet fronts</li>
                  <li>• Floor mopping and vacuuming</li>
                  <li>• Trash removal</li>
                </ul>
              </div>

              {/* Bathrooms */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Droplet className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Bathrooms</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Toilet cleaning and sanitizing</li>
                  <li>• Shower and tub scrubbing</li>
                  <li>• Sink and countertop</li>
                  <li>• Mirror and fixtures</li>
                  <li>• Floor cleaning</li>
                  <li>• Trash removal</li>
                </ul>
              </div>

              {/* Bedrooms */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Bed className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Bedrooms</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dusting furniture and surfaces</li>
                  <li>• Bed making (linens provided by client)</li>
                  <li>• Vacuuming carpets and rugs</li>
                  <li>• Floor cleaning</li>
                  <li>• Window sill dusting</li>
                  <li>• Trash removal</li>
                </ul>
              </div>

              {/* Living Areas */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Sofa className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Living Areas</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Dusting all surfaces and furniture</li>
                  <li>• Vacuuming carpets and upholstery</li>
                  <li>• Floor mopping and cleaning</li>
                  <li>• Window sill and baseboard cleaning</li>
                  <li>• Trash removal</li>
                  <li>• Light organizing (upon request)</li>
                </ul>
              </div>

              {/* Basement */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Warehouse className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Basement</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Floor sweeping and mopping</li>
                  <li>• Cobweb removal</li>
                  <li>• Storage area organizing</li>
                  <li>• Dusting surfaces and shelves</li>
                  <li>• Stairway cleaning</li>
                  <li>• Trash and debris removal</li>
                </ul>
              </div>

              {/* Car Detailing */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Car Cleaning</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Interior vacuuming</li>
                  <li>• Dashboard and console wiping</li>
                  <li>• Window and mirror cleaning</li>
                  <li>• Seat cleaning and conditioning</li>
                  <li>• Floor mat cleaning</li>
                  <li>• Exterior wash and wipe down</li>
                </ul>
              </div>

              {/* Pool Cleaning */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#D91429]/10 rounded-[1.25rem] flex items-center justify-center">
                    <Waves className="w-5 h-5 text-[#D91429]" />
                  </div>
                  <h3 className="text-xl font-bold">Pool Area</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Pool deck sweeping and hosing</li>
                  <li>• Furniture wiping and organizing</li>
                  <li>• Skimming surface debris</li>
                  <li>• Filter basket emptying</li>
                  <li>• Surrounding area tidying</li>
                  <li>• Trash removal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#D91429] mb-6 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/services/trash-recycling" className="bg-white p-4 rounded-[1.25rem] shadow-sm hover:shadow-md transition text-center block">
              <Trash2 className="w-8 h-8 text-[#D91429] mx-auto mb-2" />
              <p className="font-semibold">Trash & Recycling</p>
            </Link>
            <Link to="/services/air-freshening" className="bg-white p-4 rounded-[1.25rem] shadow-sm hover:shadow-md transition text-center block">
              <Wind className="w-8 h-8 text-[#D91429] mx-auto mb-2" />
              <p className="font-semibold">Air Freshening</p>
            </Link>
            <Link to="/services/surface-sanitizing" className="bg-white p-4 rounded-[1.25rem] shadow-sm hover:shadow-md transition text-center block">
              <Sparkles className="w-8 h-8 text-[#D91429] mx-auto mb-2" />
              <p className="font-semibold">Surface Sanitizing</p>
            </Link>
            <Link to="/services/eco-friendly-products" className="bg-white p-4 rounded-[1.25rem] shadow-sm hover:shadow-md transition text-center block">
              <Droplet className="w-8 h-8 text-[#D91429] mx-auto mb-2" />
              <p className="font-semibold">Eco-Friendly Products</p>
            </Link>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#D91429] mb-8 text-center">Why Choose Victorious Love Pro Clean</h2>
          <div className="bg-white p-8 md:p-10 rounded-[1.25rem] shadow-md">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Victorious Love Pro Clean is committed to delivering dependable, high-quality cleaning services built on professionalism, integrity, and attention to detail. Our experienced providers use proven cleaning methods, industry-grade products, and a consistent quality control process to ensure every space is cleaned to the highest standard. We prioritize reliability, clear communication, and respect for your home or business, with affordable monthly subscriptions that work for everyone. With flexible plans designed to fit different needs and budgets, Victorious Love Pro Clean delivers consistent, trusted service you can confidently rely on.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/apply"
            className="inline-block bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] font-bold hover:bg-red-700 transition shadow-lg text-lg"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}