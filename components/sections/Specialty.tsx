"use client";

import Image from "next/image";

export default function Specialty() {
  return (
    <section>
      <div className="relative bg-[#17A9DF] overflow-hidden mt-16">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between">
            
            {/* Left Content - Vertically Centered with same height */}
            <div className="flex-1 flex items-center py-12 sm:py-16 lg:py-20">
              <div>
                <h2 className="text-white font-semibold text-[26px] sm:text-[36px] lg:text-[40px] leading-tight mb-4">
                  We Understand Your Specialty
                </h2>
                
                <p className="text-white text-sm sm:text-base leading-relaxed max-w-2xl">
                  Billing rules, payer contracts and denial triggers are different for every specialty.
                  A mental health practice gets denied for different reasons than an orthopedic surgeon.
                  Generic RCM gets you generic results and lost revenue you'll never see.
                  We're trained in the coding, compliance and payer quirks of your specific specialty.
                  Search yours below.
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[350px] sm:w-[400px] md:w-[480px] lg:w-[500px] h-[280px] sm:h-[330px] md:h-[380px] lg:h-[420px]">
                <Image
                  src="/happy-doctor-wearing-glasses-presenting-something 1.png"
                  alt="Doctor presenting"
                  fill
                  priority
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}