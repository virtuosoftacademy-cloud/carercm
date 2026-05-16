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
    <section>
      <div className="bg-white p-12">

        <div>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="h1">
              All That Your Practice Needs.
            </h1>
            <h1 className="h1 mb-4">
              Nothing You Have to Figure Out Alone.
            </h1>
            <p className="text-gray text-xs max-w-3xl mx-auto">
              Most practices lose money at every step of the revenue cycle without realizing it.
              We plug into your existing setup and own every stage from the moment a patient
              walks in to when you get paid.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">

            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#f5fcfe] rounded-2xl shadow transition-all duration-300 p-6 sm:p-7 md:p-8 hover:border border-blue-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 relative">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h2 className="h2 leading-tight mb-4">
                  {service.title}
                </h2>

                <p className="text-gray text-xs mb-12">
                  {service.description}
                </p>

                <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#4e4e4e] font-normal text-xs transition-colors group/link"
                >
                  Explore More
                  <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <button className="btn !px-12">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}