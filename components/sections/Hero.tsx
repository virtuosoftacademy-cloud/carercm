"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Mobile Layout (Column) - Up to 985px */}
      <div className="block xl:hidden">
        {/* Mobile Image - Full Width Top */}
        <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
          <Image
            src="/Mask Group (1).png"
            alt="Doctor consulting with patient"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        </div>

        {/* Mobile Content - Below Image */}
        <div className="flex flex-col gap-4 px-2">
          {/* Eyebrow */}
          <p className="text-[#5a6475] text-sm font-medium leading-snug">
            Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
          </p>

          {/* Headline */}
          <h1 className="text-[#003f7a] font-bold leading-[1.2] tracking-[-0.02em] text-3xl"
            style={{ fontFamily: "'Sora', sans-serif" }}>
            Stop Leaving $100K–$250K<br />
            on the Table Every Year
          </h1>

          {/* Body */}
          <p className="text-[#5a6475] text-base leading-relaxed">
            Most private practices lose thousands monthly to claim denials,
            slow AR and coding errors and never find out until it's too late.
            We handle your entire revenue cycle so you collect every dollar
            you've earned, faster, with zero billing headaches.
          </p>

          {/* CTAs - Column on Mobile */}
          <div className="flex flex-col gap-3 mt-2">
            <button className="bg-[#19a9e5] hover:bg-[#128cc7] text-white font-semibold text-sm px-6 py-3 rounded-full transition-all w-full sm:w-auto">
              Get My Free RCM Audit
            </button>
            <button className="border-2 border-[#19a9e5] text-[#19a9e5] hover:bg-[#e0f5fc] font-semibold text-sm px-6 py-3 rounded-full transition-all w-full sm:w-auto">
              See How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Original Design - Side by Side) - 985px and above */}
      <div className="hidden xl:block">
        <div className="relative w-full h-[340px] md:h-[420px] lg:h-[480px] xl:h-[520px] overflow-hidden">

          {/* FULL BLEED IMAGE (right side, goes to edge) */}
          <div className="absolute top-0 right-0 bottom-0 w-[60%] md:w-[58%] lg:w-[55%] rounded-r-2xl overflow-hidden">
            <Image
              src="/Mask Group (1).png"
              alt="Doctor consulting with patient"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 60vw, 55vw"
            />
          </div>

          {/* BLUR STRIP BACKGROUND - Full container background */}
          <div
            className="absolute"
            style={{
              background: "rgba(180,220,245,0.15)",
            }}
          />

          {/* FLOATING CARD - Exactly matching right image height with same top/bottom spacing */}
          <div 
            className="absolute flex flex-col gap-3 md:gap-4 rounded-2xl px-6 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7"
            style={{ 
              top: "0px",
              bottom: "0px",
              left: "16px",
              width: "50%",
              background: "rgba(180,220,245,0.15)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
              border: "1px solid rgba(25, 169, 229, 0.15)"
            }}
          >

            {/* Eyebrow */}
            <p className="text-[#5a6475] text-xs md:text-sm font-medium leading-snug uppercase tracking-wide">
              Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
            </p>

            {/* Headline */}
            <h1 className="text-[#003f7a] font-bold leading-[1.2] tracking-[-0.02em] text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
              style={{ fontFamily: "'Sora', sans-serif" }}>
              Stop Leaving $100K–$250K<br />
              on the Table Every Year
            </h1>

            {/* Body */}
            <p className="text-[#5a6475] text-sm md:text-base leading-relaxed">
              Most private practices lose thousands monthly to claim denials,
              slow AR and coding errors and never find out until it's too late.
              We handle your entire revenue cycle so you collect every dollar
              you've earned, faster, with zero billing headaches.
            </p>

            {/* CTAs - Row on Tablet/Desktop */}
            <div className="flex flex-row gap-3 mt-2">
              <button className="bg-[#19a9e5] hover:bg-[#128cc7] text-white font-semibold text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all transform hover:scale-105 whitespace-nowrap">
                Get My Free RCM Audit
              </button>
              <button className="border-2 border-[#19a9e5] text-[#19a9e5] hover:bg-[#e0f5fc] font-semibold text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all transform hover:scale-105 whitespace-nowrap">
                See How It Works
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}