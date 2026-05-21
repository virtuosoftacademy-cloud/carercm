"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    state: "",
    city: "",
    zipCode: "",
    message: "",
    ageAbove18: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle Radio Change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, ageAbove18: value }));
    if (errors.ageAbove18) {
      setErrors((prev) => ({ ...prev, ageAbove18: "" }));
    }
  };

  // Validate Form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "Zip Code is required";
    if (!formData.ageAbove18) newErrors.ageAbove18 = "Please select if you are 18 or older";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Console mein values show karo
      console.log("=== Form Submitted ===");
      console.log("Full Name:", formData.fullName);
      console.log("Email:", formData.email);
      console.log("Phone Number:", formData.phoneNumber);
      console.log("State:", formData.state);
      console.log("City:", formData.city);
      console.log("Zip Code:", formData.zipCode);
      console.log("Message:", formData.message);
      console.log("Age 18+:", formData.ageAbove18);
      console.log("======================");
      
      // Simulate API call
      setTimeout(() => {
        // Clear form after submit
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          state: "",
          city: "",
          zipCode: "",
          message: "",
          ageAbove18: "",
        });
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Hide success message after 3 seconds
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 500);
    }
  };

  return (
    <section className="w-full bg-[#f3f4f6] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a] mb-6">
              Join Us in Making a Difference!
            </h1>
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
          </div>
          <p className="text-gray text-xs max-w-3xl mx-auto">
            Get a free, no-obligation RCM audit in 48 hours. We'll review your denial rates, 
            AR aging and coding patterns and show you the dollar gap in black and white.
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-4xl text-center">
            Form submitted successfully! Thank you for contacting us.
          </div>
        )}

        <form onSubmit={handleSubmit} className="rounded-2xl p-6 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            <div className="col-span-1">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.fullName ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>

            <div className="col-span-1">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="col-span-1">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.phoneNumber ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="col-span-1">
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your state"
              />
              {errors.state && (
                <p className="text-red-500 text-xs mt-1">{errors.state}</p>
              )}
            </div>

            <div className="col-span-1">
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.city ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your city"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
              )}
            </div>

            <div className="col-span-1">
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-4xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${
                  errors.zipCode ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter zip code"
              />
              {errors.zipCode && (
                <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
              )}
            </div>

            <div className="col-span-1 md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition"
                placeholder="Tell us more..."
              />
            </div>

            <div className="grid grid-cols-3 items-center gap-4 col-span-1 md:col-span-2">
              <label className="block text-gray mb-3 text-xs">
                Are you 18 years of age or older? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ageAbove18"
                    value="yes"
                    checked={formData.ageAbove18 === "yes"}
                    onChange={handleRadioChange}
                    className="w-4 h-4 text-[#19a9e5] focus:ring-[#19a9e5]"
                  />
                  <span className="text-gray text-xs">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="ageAbove18"
                    value="no"
                    checked={formData.ageAbove18 === "no"}
                    onChange={handleRadioChange}
                    className="w-4 h-4 text-[#19a9e5] focus:ring-[#19a9e5]"
                  />
                  <span className="text-gray text-xs">No</span>
                </label>
              </div>
              {errors.ageAbove18 && (
                <p className="text-red-500 text-xs mt-1">{errors.ageAbove18}</p>
              )}
            </div>

          </div>

          <div className="mt-8 text-center justify-end flex">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn !px-12 ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}