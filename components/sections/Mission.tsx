"use client";

import Image from "next/image";
import { useState } from "react";

export default function MissionVision() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

  return (
    <section>
      <div className="bg-white p-12">
        <div className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-[28px] overflow-hidden">

          <div className="flex flex-col lg:flex-row w-full">

            <div className="w-full lg:w-1/2 h-[250px] xs:h-[280px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[480px] overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 relative">
              {!img1Error ? (
                <Image
                  src="/Rectangle 5.png"
                  alt="Medical team discussing patient care"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  priority
                  onError={() => setImg1Error(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-6">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-white text-base sm:text-lg font-semibold">Medical Team</span>
                  </div>
                </div>
              )}
            </div>

            <div className="w-full lg:w-1/2 bg-[#19a9e5] flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
              <div className="max-w-xl">
                <h1 className="h1 text-white mb-4">
                  Our Mission
                </h1>
                <p className="text-white text-sm sm:text-base">
                  To take the weight of medical records, coding, and insurance claims
                  off the shoulders of doctors and hospital leaders, handled with
                  precision, integrity, and accountability, so clinicians can give
                  their full attention to what only they can do: care for patients.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full">
            <div className="w-full lg:w-1/2 bg-[#0a3d8f] flex items-center justify-center px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 order-2 lg:order-1">
              <div className="max-w-xl">
                <h1 className="text-white h1 mb-4">
                  Our Vision
                </h1>
                <p className="text-white text-sm sm:text-base">
                  A healthcare system where every hour of a clinician's day is spent
                  healing, not chasing paperwork. CareRCM exists to be the trusted
                  back-office partner that makes that possible, through quality
                  systems, clean data, and reliable processes that protect revenue,
                  support staff, and let medicine return to its highest purpose.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 h-auto min-h-[250px] xs:min-h-[280px] sm:min-h-[320px] md:min-h-[380px] overflow-hidden bg-gradient-to-br from-green-100 to-teal-100 relative order-1 lg:order-2">
              {!img2Error ? (
                <Image
                  src="/Rectangle 5 (1).png"
                  alt="Healthcare team analyzing data"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  onError={() => setImg2Error(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                  <div className="text-center text-white p-4 sm:p-6">
                    <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-white text-base sm:text-lg font-semibold">Team Meeting</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}