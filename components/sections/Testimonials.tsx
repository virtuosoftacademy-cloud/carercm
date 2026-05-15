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
    <section>
      <div className="w-full bg-white p-12">

        <div className="text-center mb-10 sm:mb-14">

          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
            <h1 className="h1">
              Real Practices. Real Recovered Revenue.
            </h1>
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
          </div>

          <p className="text-gray text-xs max-w-4xl mx-auto">
            We don't just promise to find your missing money—we prove it. Discover how physicians
            across the country rely on our end-to-end billing execution to eliminate AR bottlenecks
            and consistently add tens of thousands to their monthly collections.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">
          {testimonials.map((doctor) => (
            <div
              key={doctor.id}
              className="group bg-white rounded-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="relative w-full h-[240px] sm:h-[260px] lg:h-[280px] overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-5 pb-5 pt-4 text-center bg-[#F2F5F8]">
                <h3 className="text-[#0F0F0F] font-semibold text-[16px] sm:text-[18px] mb-2">
                  {doctor.name}
                </h3>
                <p className="text-gray text-xs mb-4">
                  {doctor.clinic}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="btn !px-12">
            See More
          </button>
        </div>

      </div>
    </section>
  );
}