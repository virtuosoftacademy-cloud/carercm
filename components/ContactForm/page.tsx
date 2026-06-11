"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    workEmail: "",
    medicalSpecialty: "",
    monthlyClaimsVolume: "",
    currentBillingSetup: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbxsxLUF2UWVbgoS4U3LvdCDI2Kta5O-IyvF6Y39jhrPqBAQqzl7sdcmcWSd8qGvx4LqfQ/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Email is invalid";
    }
    if (!formData.medicalSpecialty.trim()) newErrors.medicalSpecialty = "Medical Specialty is required";
    if (!formData.monthlyClaimsVolume.trim()) newErrors.monthlyClaimsVolume = "Monthly Claims Volume is required";
    if (!formData.currentBillingSetup.trim()) newErrors.currentBillingSetup = "Current Billing Setup is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        console.log("Form submitted to Google Sheets:", formData);

        setFormData({
          firstName: "",
          workEmail: "",
          medicalSpecialty: "",
          monthlyClaimsVolume: "",
          currentBillingSetup: "",
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

  const specialties = [
    "Select specialty",
    "Denial Management",
    "Payment Posting",
    "Reporting",
    "In-house dedicated billing team",
    "Front-desk / admin staff doing billing",
    "Physician handling billing personally",
    "Outsourced to a US billing company",
    "Outsourced offshore (non-US)",
    "Using billing software only (no dedicated person)",
    "Combination of in-house + software",
    "Primary Care / Family Medicine",
    "Internal Medicine",
    "Orthopedics",
    "Dermatology",
    "Mental Health / Behavioral Health",
    "Cardiology",
    "Neurology",
    "OB/GYN",
    "Pediatrics",
    "Urgent Care",
    "Physical Therapy / Rehab",
    "Chiropractic",
    "Pain Management",
    "Gastroenterology",
    "Ophthalmology",
    "ENT",
    "Radiology",
    "Urology",
    "Oncology",
    "Other Specialty"
  ];

  const claimsVolumes = [
    "Select range",
    "Under 100 claims/month",
    "100 - 300 claims/month",
    "300 - 500 claims/month",
    "500 - 1,000 claims/month",
    "10,000+ claims/month"
  ];

  const billingSetups = [
    "How are you currently handling billing?",
    "In-house dedicated billing team",
    "Front-desk / admin staff doing billing",
    "Physician handling billing personally",
    "Outsourced to a US billing company",
    "Outsourced offshore (non-US)",
    "Using billing software only (no dedicated person)",
    "Combination of in-house + software"
  ];

  return (
    <section className="w-full bg-[#0AADE4] ">
      <div className="max-w-5xl mx-auto py-20">
        <div className="mb-8 sm:mb-10">
          <div className="mb-4 flex justify-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
              <p className="text-white text-xs font-medium">Only 8 audit slots left this week</p>
            </div>
          </div>

          <h1 className="text-center text-[44px] font-semibold leading-tight text-white mb-4">
            Find Out Exactly How Much Your Practice is <br className="hidden sm:block" />
            Leaving on the Table
          </h1>

          <p className="text-center text-white/90 text-xs font-normal max-w-2xl mx-auto">
            We'll audit your denial rates, AR aging and coding patterns — and show you the dollar gap in black and white. No pitch. Just numbers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8 sm:mb-10 border-y border-white/30 py-4">

          <span className="flex items-center gap-2 text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <span>500+ practices audited</span>
          </span>

          <span className="flex items-center gap-2 text-white text-xs">
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 320 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2413_1960)">
                <path d="M140.039 92.9167C153.255 92.4011 167.447 92.9105 180.729 92.9977C184.439 93.022 188.572 97.0838 188.856 100.796C189.575 110.213 189.106 119.993 189.201 129.511C197.875 129.652 206.58 129.373 215.265 129.552C221.612 129.684 225.794 133.393 225.827 139.971C225.888 151.62 225.827 163.285 225.837 174.934C225.841 176.556 225.861 178.294 225.595 179.904C223.614 189.288 213.19 187.932 206.025 187.894L189.149 187.864C188.958 194.017 189.249 200.193 189.18 206.369C189.13 210.848 189.899 216.297 187.21 220.2C185.219 223.094 182.978 223.927 179.688 224.483L179.342 224.496C171.958 224.762 163.455 224.388 155.969 224.54C152.228 224.614 141.597 224.756 138.57 224.133C136.751 223.758 135.079 222.869 133.753 221.568C132.771 220.601 131.418 218.572 131.284 217.274C130.375 208.482 130.805 196.791 130.828 187.888C122.682 187.69 114.429 187.943 106.258 187.9C101.48 187.875 94.8198 185.662 94.4505 180.008C93.6574 167.794 94.3889 155.213 94.1214 142.998C93.7973 128.189 102.08 129.416 113.201 129.445L130.79 129.485C130.918 123.382 130.688 117.284 130.747 111.155C130.793 106.384 129.969 100.448 133.13 96.4304C135.13 93.8886 137.001 93.2914 140.039 92.9167ZM175.923 106.056C165.292 105.99 154.66 105.98 144.029 106.029L144.049 124.723C144.191 142.477 144.821 142.866 126.966 142.791C120.459 142.738 113.953 142.723 107.446 142.744C107.388 153.229 107.287 164.16 107.44 174.638C113.856 174.676 120.273 174.675 126.69 174.634C142.136 174.521 144.691 173.497 144.076 190.497C143.847 196.816 143.925 204.876 144.069 211.296L175.944 211.326L175.932 191.233C175.843 173.562 176.418 174.484 193.503 174.624C199.877 174.675 206.252 174.689 212.624 174.665L212.634 142.691L194.201 142.683C175.955 142.801 175.743 143.64 175.877 125.091C175.928 118.746 175.944 112.401 175.923 106.056Z" fill="white" />
                <path d="M176.328 0.521753C179.816 0.521413 183.673 0.354601 187.072 0.521753C196.89 1.00459 207.074 -1.55626 214.678 6.23953C221.305 13.0304 220.429 20.7438 220.392 29.3352L220.375 43.4221C235.122 43.5967 249.902 43.3978 264.656 43.4622C272.668 43.4972 280.141 43.2473 288.004 45.2161C295.497 47.0123 302.367 50.7937 307.892 56.1624C318.869 66.999 319.954 80.1307 320.025 94.4954L320.044 192.407L320.035 219.57C320.025 236.295 320.806 251.811 307.943 264.681C302.333 270.184 295.322 274.042 287.67 275.828C278.132 278.137 260.603 277.477 250.27 277.477H89.767L59.9428 277.491C42.7737 277.501 25.711 278.302 12.35 265.007C1.70234 254.412 0.159512 242.637 0.0189944 228.396L-0.0015134 130.468L0.00239285 101.432C0.00676425 94.3819 -0.205305 84.1813 1.10591 77.3274C2.60454 69.2658 6.46157 61.8303 12.187 55.9622C26.7019 41.3529 47.0036 43.2542 65.77 43.2727L99.6655 43.2786C99.7642 36.3807 99.6267 29.2601 99.6459 22.3548C99.6832 8.92954 106.427 1.30891 119.866 0.600855C120.32 0.575582 120.709 0.561863 121.166 0.559839L176.328 0.521753ZM57.7729 56.6477C52.8354 56.638 46.478 56.4747 41.644 56.8538C8.92928 60.8817 13.0883 86.4289 13.0883 111.61L13.0942 161.41L13.0883 209.608C13.0839 219.148 12.7379 228.54 13.6499 238.047C15.1664 253.859 26.4485 263.01 41.8569 264.074C47.6319 264.476 53.3566 264.326 59.1518 264.326L88.0454 264.307L179.031 264.3H246.119L266.104 264.32C270.123 264.32 275.514 264.452 279.413 263.943C288.112 262.676 295.352 260.306 300.847 252.929C306.622 245.178 306.931 235.58 306.952 226.313C306.965 220.23 306.942 214.143 306.942 208.064L306.935 156.653L306.942 110.68C306.962 94.9996 309.789 72.8231 295.396 62.6692C285.969 56.0178 274.989 56.6349 264.08 56.6477L240.768 56.678L165.549 56.6839L83.1997 56.6809L57.7729 56.6477ZM170.753 13.2698C153.774 13.2742 135.202 12.8627 118.353 13.3284C116.589 13.7742 115.113 14.2351 114.137 15.9036C111.677 20.1105 112.78 37.492 112.82 43.2591L202.106 43.2874L207.236 43.2718C207.263 38.3428 208.414 18.145 205.541 15.2425C204.332 14.0205 202.826 13.5861 201.16 13.4075C197.408 13.0051 193.513 13.2134 189.739 13.2249L170.753 13.2698Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2413_1960">
                  <rect width="320" height="278" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>HIPAA compliant process</span>
          </span>

          <span className="flex items-center gap-2 text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <span>Results in 48 hours</span>
          </span>

          <span className="flex items-center gap-2 text-white text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
            <span>No commitment required</span>
          </span>
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 text-xs border border-green-400 text-green-700 rounded-xl text-center">
            ✅ Form submitted successfully! We'll contact you within 48 hours.
          </div>
        )}

        <form onSubmit={handleSubmit} className="w-full p-4 sm-p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">

            <div>
              <label className="block text-white text-xs font-normal mb-1">Your First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition text-gray-700 ${errors.firstName ? "border-red-500" : "border-gray-300"}`}
                placeholder="Dr. Sarah"
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="block text-white text-xs font-normal mb-1">Work Email</label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition text-gray-700 ${errors.workEmail ? "border-red-500" : "border-gray-300"}`}
                placeholder="sarah@yourpractice.com"
              />
              {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
            </div>

            <div>
              <label className="block text-white text-xs font-normal mb-1">Medical Specialty</label>
              <select
                name="medicalSpecialty"
                value={formData.medicalSpecialty}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition text-gray-700 appearance-none cursor-pointer ${errors.medicalSpecialty ? "border-red-500" : "border-gray-300"}`}
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1rem"
                }}
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty === "Select specialty" ? "" : specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
              {errors.medicalSpecialty && <p className="text-red-500 text-xs mt-1">{errors.medicalSpecialty}</p>}
            </div>

            <div>
              <label className="block text-white text-xs font-normal mb-1">Monthly Claims Vollme</label>
              <select
                name="monthlyClaimsVolume"
                value={formData.monthlyClaimsVolume}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition text-gray-700 appearance-none cursor-pointer ${errors.monthlyClaimsVolume ? "border-red-500" : "border-gray-300"}`}
                style={{
                  backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 1rem center",
                  backgroundSize: "1rem"
                }}
              >
                {claimsVolumes.map((volume, index) => (
                  <option key={index} value={volume === "Select range" ? "" : volume}>
                    {volume}
                  </option>
                ))}
              </select>
              {errors.monthlyClaimsVolume && <p className="text-red-500 text-xs mt-1">{errors.monthlyClaimsVolume}</p>}
            </div>
          </div>

          <div className="mt-4 sm:mt-5 md:mt-6">
            <label className="block text-white text-xs font-normal mb-1">Current Billing Setup</label>
            <select
              name="currentBillingSetup"
              value={formData.currentBillingSetup}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-[#19a9e5] transition text-gray-700 appearance-none cursor-pointer ${errors.currentBillingSetup ? "border-red-500" : "border-gray-300"}`}
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23666' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem"
              }}
            >
              {billingSetups.map((setup, index) => (
                <option key={index} value={setup === "How are you currently handling billing?" ? "" : setup}>
                  {setup}
                </option>
              ))}
            </select>
            {errors.currentBillingSetup && <p className="text-red-500 text-xs mt-1">{errors.currentBillingSetup}</p>}
          </div>

          <div className="mt-8 sm:mt-10 text-center">
            <p className="text-white text-xs font-normal mb-4">
              We'll audit denial rates, AR aging & coding patterns — and show you <strong>exactly how much revenue you're <br className="hidden sm:block" />leaving uncollected.</strong> Free. In 48 hours.
            </p>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn !bg-[#00427f] hover:!bg-[#ffffff] hover:!text-[#00427f] cursor-pointer ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Submitting..." : "Get my free RCM audit"}
            </button>
            <p className="text-white/80 text-xs font-normal mt-4">
              No credit card. No sales call unless you ask for one.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}