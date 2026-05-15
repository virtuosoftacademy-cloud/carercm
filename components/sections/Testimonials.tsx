"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Dr. John Martin",
    clinic: "Manhattan Endocrinologist, PLLC",
    image: "/Mask group.png",
  },
  {
    id: 2,
    name: "Dr. Alex Parker",
    clinic: "Rose Dermatology P.C",
    image: "/image 2.png",
  },
  {
    id: 3,
    name: "Dr. Steven Sherwin",
    clinic: "Manhattan Endocrinologist, PLLC",
    image: "/image 2 (1).png",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-8 lg:px-16">
      {/* Full width container - NO max-w constraint */}
      <div className="w-full">

        {/* ── HEADER ── */}
        <div className="text-center mb-10 sm:mb-14">

          {/* Title with dashes */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
            <h2 className="text-[#0a3d8f] font-semibold text-[22px] sm:text-[30px] lg:text-[36px] leading-tight">
              Real Practices. Real Recovered Revenue.
            </h2>
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
          </div>

          {/* Subtitle */}
          <p className="text-gray-500 text-[13px] sm:text-[15px] max-w-4xl mx-auto">
            We don't just promise to find your missing money—we prove it. Discover how physicians
            across the country rely on our end-to-end billing execution to eliminate AR bottlenecks
            and consistently add tens of thousands to their monthly collections.
          </p>
        </div>

        {/* ── DOCTOR CARDS - Full Width Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">
          {testimonials.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Doctor Photo — full width, rectangular */}
              <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Info */}
              <div className="px-5 pb-5 pt-4 text-center">
                <h3 className="text-[#1a1a2e] font-bold text-[16px] sm:text-[18px] mb-1 group-hover:text-[#19a9e5] transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-gray-400 text-[12.5px] sm:text-[13.5px]">
                  {doctor.clinic}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── SEE MORE BUTTON ── */}
        <div className="flex justify-center">
          <button className="bg-[#19a9e5] hover:bg-[#1098d2] text-white font-semibold text-[14px] sm:text-[15px] px-8 sm:px-12 md:px-14 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 inline-flex items-center gap-2">
            See More
          </button>
        </div>

      </div>
    </section>
  );
}