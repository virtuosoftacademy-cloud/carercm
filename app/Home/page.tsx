"use client";

import Image from "next/image";
import { use, useState } from "react";

export default function HeroSection() {
  const [img1Error, setImg1Error] = useState(false);
  const [img2Error, setImg2Error] = useState(false);

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

  const awards = [
    { id: 1, image: "/image 10.png" },
    { id: 2, image: "/image 11.png" },
    { id: 3, image: "/image 12.png" },
    { id: 4, image: "/image 13.png" },
  ];

  return (
    <>
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

            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
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
                src="/mask-group-1.png"
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

              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
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
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight !text-white mb-4">
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
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight !text-white mb-4">
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


      <div className="relative bg-[#17A9DF] overflow-hidden mt-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between">

            <div className="flex-1 flex items-center py-12 sm:py-16 lg:py-20">
              <div>
                <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight !text-white mb-4">
                  We Understand Your Specialty
                </h1>

                <p className="text-white text-xs leading-relaxed">
                  Billing rules, payer contracts and denial triggers are different for every specialty.
                  A mental health practice gets denied for different reasons than an orthopedic surgeon.
                  Generic RCM gets you generic results and lost revenue you'll never see.
                  We're trained in the coding, compliance and payer quirks of your specific specialty.
                  Search yours below.
                </p>
              </div>
            </div>

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


      <div className="bg-white p-12">

        <div>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
              All That Your Practice Needs.
            </h1>
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a] mb-4">
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

                <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-semibold leading-tight text-[#003f7a] mb-4">
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


      <div className="w-full bg-white p-12">

        <div className="text-center mb-10 sm:mb-14">

          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
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
              className="group bg-white rounded-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-5 pb-5 pt-4 text-center bg-[#F2F5F8] transition-colors duration-300 group-hover:bg-[#00427F] flex-grow flex flex-col justify-center">
                <h3 className="text-[#0F0F0F] font-semibold text-[16px] sm:text-[18px] mb-2 transition-colors duration-300 group-hover:text-white">
                  {doctor.name}
                </h3>
                <p className="text-gray text-xs sm:text-sm transition-colors duration-300 group-hover:!text-white">
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


      <div className="w-full bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-6">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
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
      </div>
    </>
  );
}