"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    yourName: "",
    practiceName: "",
    medicalSpecialty: "",
    monthlyClaimsVolume: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 🔴 YAHAN APNI GOOGLE SHEETS WEB APP URL LAGAYEIN 🔴
  // Google Sheets Script Editor se deploy karne ke baad yeh URL yahan paste karein
  const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxsxLUF2UWVbgoS4U3LvdCDI2Kta5O-IyvF6Y39jhrPqBAQqzl7sdcmcWSd8qGvx4LqfQ/exec";

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate Form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.yourName.trim()) newErrors.yourName = "Your Name is required";
    if (!formData.practiceName.trim()) newErrors.practiceName = "Practice Name is required";
    if (!formData.medicalSpecialty.trim()) newErrors.medicalSpecialty = "Medical Specialty is required";
    if (!formData.monthlyClaimsVolume.trim()) newErrors.monthlyClaimsVolume = "Monthly Claims Volume is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Submit - Data Google Sheet mein save hoga
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        // Google Sheets API call
        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors", // Important for Google Sheets
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Form submitted to Google Sheets:", formData);
        
        // Reset form
        setFormData({
          yourName: "",
          practiceName: "",
          medicalSpecialty: "",
          monthlyClaimsVolume: "",
          email: "",
          phoneNumber: "",
        });
        
        setSubmitSuccess(true);
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 3000);
        
      } catch (error) {
        console.error("Submit error:", error);
        alert("Error submitting form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Medical specialties options
  const specialties = [
    "Medical Specialty",
    "Cardiology",
    "Dermatology",
    "Emergency Medicine",
    "Family Medicine",
    "Gastroenterology",
    "Internal Medicine",
    "Neurology",
    "Obstetrics & Gynecology",
    "Ophthalmology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "Radiology",
    "Surgery",
    "Urology",
    "Other"
  ];

  return (
    <section className="w-full bg-[#0AADE4] px-4 py-8 sm:p-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <h1 className="text-[44px] font-semibold leading-tight text-white mb-3 sm:mb-4">
            Find out exactly how much your practice is <br className="hidden sm:block" />leaving on the table
          </h1>
          <p className="text-white text-xs font-normal max-w-2xl mx-auto px-2 sm:px-0">
            We'll audit your denial rates, AR aging and coding patterns - and show you the dollar gap in black and white. No pitch, Just numbers.
          </p>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 text-xs border border-green-400 text-green-700 rounded-xl text-center">
            ✅ Form submitted successfully! Your information has been saved. We'll contact you within 48 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="rounded-2xl px-0 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

            <div>
              <input
                type="text"
                name="yourName"
                value={formData.yourName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.yourName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Your Name"
              />
              {errors.yourName && (
                <p className="text-red-500 text-xs mt-1">{errors.yourName}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.practiceName ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Practice Name"
              />
              {errors.practiceName && (
                <p className="text-red-500 text-xs mt-1">{errors.practiceName}</p>
              )}
            </div>

            <div>
              <select
                name="medicalSpecialty"
                value={formData.medicalSpecialty}
                onChange={handleChange}
                className={`w-full px-4 py-3 border text-[#666] rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.medicalSpecialty ? "border-red-500" : "border-gray-300"
                  }`}
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty === "Medical Specialty" ? "" : specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
              {errors.medicalSpecialty && (
                <p className="text-red-500 text-xs mt-1">{errors.medicalSpecialty}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="monthlyClaimsVolume"
                value={formData.monthlyClaimsVolume}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.monthlyClaimsVolume ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Monthly Claims Volume"
              />
              {errors.monthlyClaimsVolume && (
                <p className="text-red-500 text-xs mt-1">{errors.monthlyClaimsVolume}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Email Address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                placeholder="Phone Number"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-white text-[20px] font-600 mb-4 px-2 sm:px-0">
              See exactly how much revenue your practice is leaving on the table. <br className="hidden sm:block" /> We'll show you in black and white — free, in 48 hours.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#00427F] text-white font-normal text-xs py-3 px-6 sm:px-10 rounded-2xl transition duration-300 w-full sm:w-auto ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
            >
              {isSubmitting ? "Submitting..." : "Get my free RCM audit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}