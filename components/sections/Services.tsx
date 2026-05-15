"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Pre-registration / Registration",
    description: "Undocumented or delayed charges are revenues that do not materialize. We ensure your every service is captured, coded correctly and submitted, nothing falls through the cracks.",
    icon: "/Vector.png",
    link: "#"
  },
  {
    id: 2,
    title: "Charge Capture",
    description: "A clean claim submitted fast is the difference between 30-day payment and 90-day AR. We submit accurate claims the first time reducing rejections before they become denials.",
    icon: "/ix_capture.png",
    link: "#"
  },
  {
    id: 3,
    title: "Claims Submission",
    description: "A clean claim submitted fast is the difference between 20-day payment and 90-day AR. We submit accurate claims the first time reducing rejections before they ever become denials.",
    icon: "/academicons_acclaim.png",
    link: "#"
  },
  {
    id: 4,
    title: "Denial Management",
    description: "65% of denied claims are never reworked. We chase every one. Our denial management workflow identifies the root cause, appeals aggressively and recovers revenue most practices simply write off.",
    icon: "/fluent_shifts-deny-24-filled.png",
    link: "#"
  },
  {
    id: 5,
    title: "Payment Posting",
    description: "Payers routinely underpay contracted rates and most practices never catch it. We post and audit payments against your fee schedule so underpayments get flagged and recovered.",
    icon: "/hugeicons_payment-02.png",
    link: "#"
  },
  {
    id: 6,
    title: "Reporting",
    description: "Payers routinely underpay contracted rates and most practices never catch it. We post and audit payments against your fee schedule so underpayments get flagged and recovered.",
    icon: "/streamline-plump_file-report.png",
    link: "#"
  }
];

export default function Services() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div>
        
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-[#00427F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4">
            All That Your Practice Needs.
          </h2>
          <h3 className="text-[#00427F] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-5">
            Nothing You Have to Figure Out Alone.
          </h3>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-4xl mx-auto px-4">
            Most practices lose money at every step of the revenue cycle without realizing it. 
            We plug into your existing setup and own every stage from the moment a patient 
            walks in to when you get paid.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
          
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-[#f5fcfe] rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-7 md:p-8 border border-gray-100 hover:border-transparent hover:-translate-y-1"
            >
              {/* Icon - No Background */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-[#003087] text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
                {service.description}
              </p>

              {/* Explore More Link */}
              <a 
                href={service.link}
                className="inline-flex items-center gap-2 text-[#4e4e4e] hover:text-[#19a9e5] font-semibold text-sm sm:text-base transition-colors group/link"
              >
                Explore More
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* View All Button - Responsive Center */}
        <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <button className="bg-[#19a9e5] hover:bg-[#1098d2] text-white font-semibold text-xs sm:text-sm md:text-base px-12 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}