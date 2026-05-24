import React from "react";

export default function PlatformOverview() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          How Our Platform Works
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A modern platform connecting customers and providers through services, memberships, and opportunities.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#D91429] text-white text-xl font-bold">
              1
            </div>
            <h3 className="mt-4 font-semibold text-lg">
              Create an Account
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Join the platform as a customer or provider to access services and opportunities.
            </p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#D91429] text-white text-xl font-bold">
              2
            </div>
            <h3 className="mt-4 font-semibold text-lg">
              Explore the Platform
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Browse services, memberships, and tools designed to support your needs.
            </p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#D91429] text-white text-xl font-bold">
              3
            </div>
            <h3 className="mt-4 font-semibold text-lg">
              Connect & Grow
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Customers connect with providers while providers grow their business through our platform.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}












