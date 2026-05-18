"use client";
import Image from "next/image";

const awards = [
  { id: 1, image: "/image 10.png" },
  { id: 2, image: "/image 11.png" },
  { id: 3, image: "/image 12.png"},
  { id: 4, image: "/image 13.png"},
];

export default function Recognition() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-6">
          <h1 className="h1">
            Recognized by the Industry. Trusted by Physicians <br />
            Who Can't Afford to Get Billing Wrong.
          </h1>
        </div>

        <p className="text-gray text-xs text-center mb-16">
          Independently evaluated. Consistently ranked. So you don't have to take our word for it.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-items-center">
          {awards.map((award) => (
            <div key={award.id} className="text-center w-full">
              <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] lg:w-[180px] lg:h-[180px] xl:w-[200px] xl:h-[200px] mx-auto">
                <Image
                  src={award.image}
                  alt={`Award ${award.id}`}
                  fill
                  className="object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}