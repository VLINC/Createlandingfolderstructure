import React, { useState, useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApplicationPageNew() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    homeSize: "",
    applicantType: "",
    dateOfBirth: "",
    additionalInfo: "",
  });
  
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Apply for 40% Off - Community Assistance Program | Victorious Love Pro Clean";
    console.log("ApplicationPageNew loaded");
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return (
      <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-12 rounded-[1.25rem] shadow-md text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-[#D91429] mb-4">Application Submitted Successfully!</h1>
            <p className="text-xl text-gray-700 mb-8">
              Thank you for applying to our Community Assistance Program. Our team will review your application 
              within 24-48 hours and contact you at <strong>{formData.email}</strong> with next steps.
            </p>
            <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
              <h3 className="font-bold text-lg mb-2">What Happens Next</h3>
              <ul className="text-left space-y-2 text-gray-700">
                <li>✓ We'll verify your eligibility documentation</li>
                <li>✓ You'll receive an approval email within 1-2 business days</li>
                <li>✓ Your 40% discount will be automatically applied to your account</li>
                <li>✓ You can then schedule your first cleaning service!</li>
              </ul>
            </div>
            <Link
              to="/"
              className="inline-block bg-[#D91429] text-white px-8 py-3 rounded-[1.25rem] font-bold hover:bg-red-700 transition"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-4xl mx-auto">
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
        <div className="text-center mb-8">
          <div className="inline-block bg-[#D91429]/10 text-[#D91429] px-6 py-2 rounded-full mb-4 font-semibold">
            Community Assistance Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#D91429] mb-4">
            Apply for 40% Off
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Complete this application to receive your Community Assistance Program discount. 
            All information is kept confidential and secure.
          </p>
        </div>

        {/* Eligibility Reminder */}
        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-[1.25rem] mb-8">
          <h3 className="font-bold text-lg mb-3">Who Qualifies for 40% Off</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="font-bold mb-1">👵 Seniors</div>
              <div className="text-gray-700">Age 50 and older</div>
            </div>
            <div>
              <div className="font-bold mb-1">♿ Individuals with Disabilities</div>
              <div className="text-gray-700">Physical or cognitive disabilities</div>
            </div>
            <div>
              <div className="font-bold mb-1">❤️ Family Caregivers</div>
              <div className="text-gray-700">Caring for seniors or disabled individuals</div>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white p-8 rounded-[1.25rem] shadow-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#D91429] mb-4">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block font-semibold mb-2">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block font-semibold mb-2">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#D91429] mb-4">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block font-semibold mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-semibold mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#D91429] mb-4">Service Address</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block font-semibold mb-2">
                    Street Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="city" className="block font-semibold mb-2">
                      City <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block font-semibold mb-2">
                      State <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block font-semibold mb-2">
                      ZIP Code <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="homeSize" className="block font-semibold mb-2">
                    Home Size (Square Feet) <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="homeSize"
                    name="homeSize"
                    value={formData.homeSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  >
                    <option value="">Select your home size</option>
                    <option value="under-1000">Under 1,000 sq ft</option>
                    <option value="1000-1500">1,000 - 1,500 sq ft</option>
                    <option value="1500-2000">1,500 - 2,000 sq ft</option>
                    <option value="over-2000">Over 2,000 sq ft (Custom pricing)</option>
                  </select>
                  {formData.homeSize === "over-2000" && (
                    <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-[1.25rem] text-sm text-gray-700">
                      <strong>Note:</strong> Homes over 2,000 sq ft require custom pricing. 
                      Our team will contact you with a personalized quote.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Eligibility Information */}
            <div>
              <h2 className="text-2xl font-bold text-[#D91429] mb-4">Eligibility Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="applicantType" className="block font-semibold mb-2">
                    I am applying as: <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="applicantType"
                    name="applicantType"
                    value={formData.applicantType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  >
                    <option value="">Select applicant type</option>
                    <option value="senior">Senior (Age 50+)</option>
                    <option value="disability">Individual with Disability</option>
                    <option value="caregiver">Family Caregiver</option>
                  </select>
                </div>

                {formData.applicantType === "senior" && (
                  <div>
                    <label htmlFor="dateOfBirth" className="block font-semibold mb-2">
                      Date of Birth <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      You must be 50 years or older to qualify for the senior discount.
                    </p>
                  </div>
                )}

                <div>
                  <label htmlFor="additionalInfo" className="block font-semibold mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about any special needs, accessibility requirements, or scheduling preferences..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-[1.25rem] focus:outline-none focus:ring-2 focus:ring-[#D91429]"
                  />
                </div>
              </div>
            </div>

            {/* Document Upload Note */}
            <div className="bg-gray-50 p-6 rounded-[1.25rem] border-2 border-gray-200">
              <h3 className="font-bold mb-2">📎 Next Steps: Document Verification</h3>
              <p className="text-sm text-gray-700 mb-3">
                After submitting this application, our team will contact you to collect verification documents:
              </p>
              <ul className="text-sm text-gray-700 space-y-1 ml-4">
                <li>• <strong>Seniors:</strong> Government-issued ID showing date of birth</li>
                <li>• <strong>Individuals with Disabilities:</strong> Disability documentation or SSDI letter</li>
                <li>• <strong>Caregivers:</strong> Proof of caregiving relationship</li>
              </ul>
            </div>

            {/* Terms and Privacy */}
            <div className="bg-blue-50 p-6 rounded-[1.25rem] border border-blue-200">
              <p className="text-sm text-gray-700">
                By submitting this application, you agree to our terms of service and privacy policy. 
                All information provided will be kept confidential and used solely for verifying eligibility 
                for the Community Assistance Program. We respect your privacy and will never share your 
                information with third parties.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#D91429] text-white px-12 py-4 rounded-[1.25rem] text-lg font-bold hover:bg-red-700 transition shadow-lg"
              >
                Submit Application
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Applications are typically reviewed within 24-48 hours
              </p>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center bg-gray-100 p-6 rounded-[1.25rem]">
          <p className="text-gray-700">
            <strong>Need help with your application</strong><br />
            Contact us at <a href="mailto:support@proincorporated.services" className="text-[#D91429] font-semibold">support@proincorporated.services</a> or call during business hours.
          </p>
        </div>
      </div>
    </div>
  );
}










