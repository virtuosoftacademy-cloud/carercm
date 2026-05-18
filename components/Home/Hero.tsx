"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="bg-white p-8">
        <div className="block xl:hidden">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mask-group-1.png"
              alt="Doctor consulting with patient"
              fill
              priority
              className="object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>

          <div className="flex flex-col gap-4 px-2">
            <p className="text-gray text-sm font-medium leading-snug">
              Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
            </p>

            <h1 className="h1">
              Stop Leaving $100K–$250K<br />
              on the Table Every Year
            </h1>

            <p className="text-gray text-xs leading-relaxed">
              Most private practices lose thousands monthly to claim denials,
              slow AR and coding errors and never find out until it's too late.
              We handle your entire revenue cycle so you collect every dollar
              you've earned, faster, with zero billing headaches.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <button className="btn">
                Get My Free RCM Audit
              </button>
              <button className="btn2">
                See How It Works
              </button>
            </div>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="relative w-full h-[450px]">
            <div className="absolute top-0 right-0 w-[50%] h-[340px] md:h-[420px] lg:h-[480px] xl:h-[420px] rounded-r-2xl overflow-hidden">
              <Image
                src="/Mask Group (1).png"
                alt="Doctor consulting with patient"
                fill
                priority
                className="object-cover object-center"
                sizes="50vw"
              />
            </div>

            <div
              className="absolute flex flex-col gap-3 md:gap-4 rounded-2xl px-6 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7 h-[340px] md:h-[420px] lg:h-[480px] xl:h-[420px]"
              style={{
                top: "40px",
                left: "16px",
                width: "60%",
                background: "rgba(180,220,245,0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
                border: "1px solid rgba(25, 169, 229, 0.15)"
              }}
            >
              <p className="text-gray text-sm font-medium leading-snug tracking-wide">
                Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
              </p>

              <h1 className="h1">
                Stop Leaving $100K–$250K<br />
                on the Table Every Year
              </h1>

              <p className="text-gray text-xs leading-relaxed max-w-3xl">
                Most private practices lose thousands monthly to claim denials,
                slow AR and coding errors and never find out until it's too late.
                We handle your entire revenue cycle so you collect every dollar
                you've earned, faster, with zero billing headaches.
              </p>

              <div className="flex flex-row gap-3 mt-2">
                <button className="btn">
                  Get My Free RCM Audit
                </button>
                <button className="btn2">
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}