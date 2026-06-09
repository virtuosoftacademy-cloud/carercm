"use client";

import Image from "next/image";
// import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Mechanism = () => {
  const services = [
    {
      id: 1,
      title: "Capture Every Billable Dollar Before It Disappears",
      description: "We verify insurance eligibility, confirm coverage, and translate every patient encounter into an accurate billable charge — before a single claim goes out the door. The coding errors that quietly drain your revenue never make it to submission.",
      icon: "/celender.png",
      link: "#"
    },
    {
      id: 2,
      title: "Submit Clean. Appeal Hard. Collect Everything",
      description: " We submit payer-specific, error-free claims the first time — cutting your AR days from 90 to 30. When payers deny, we don't write it off. We identify the root cause, build the appeal, and chase every dollar until it's collected.",
      icon: "/Vector (1).png",
      link: "#"
    },
    {
      id: 3,
      title: "Audit Every Payment. Report Everything in Real Time",
      description: "We cross-check every payment against your contracted fee schedule and recover routine underpayments most practices never notice. Your live dashboard shows denial rates, AR aging, and collection performance — so you're always managing proactively, never reactively.",
      icon: "/clock.png",
      link: "#"
    }
  ];

  const leadershipData = [
    {
      id: 1,
      title: "Harvard Kennedy School",
      subtitle: "Emerging Global Leader",
      description: "World-class training in large-scale institutional transformation — applied directly to hospital systems, healthcare networks, and independent practice revenue cycles.",
      icon: "/Vector (2).png",
      whiteicon: '/white icon 2.png'
    },
    {
      id: 2,
      title: "Eisenhower Fellowships",
      subtitle: "Global Eisenhower Fellow",
      description: "Part of an elite international network of healthcare innovators — with deep expertise in scalability, care delivery efficiency, and medical billing operations.",
      icon: "/Vector (3).png",
      whiteicon: '/white icon 1.png'
    },
    {
      id: 3,
      title: "Schwab Foundation / WEF",
      subtitle: "Social Entrepreneur of the Year",
      description: "Globally recognised for healthcare workforce development and network restructuring — the same operational rigor applied to every practice we serve.",
      icon: "/Vector (4).png",
      whiteicon: '/white icon 4.png'
    },
    {
      id: 4,
      title: "Goldman Sachs · Deloitte · FCA",
      subtitle: "Institutional Grade Financial Leadership",
      description: "UK Chartered Accountant with Goldman Sachs and Deloitte experience — delivering Fortune 500 financial discipline, audit-grade controls, and revenue protection for independent physicians.",
      icon: "/Vector (5).png",
      whiteicon: '/white icon 3.png'
    }
  ];

  const statsData = [
    {
      value: "30%",
      description: "of revenue the average practice loses silently every year",
    },
    {
      value: "65%",
      description: "of denied claims written off — never appealed, never recovered",
    },
    {
      value: "$200K",
      description: "annual revenue we may recover per practice",
    },
  ];

  const credentials = [
    {
      icon: "/Vector (2).png",
      title: "Harvard Kennedy School",
      subtitle: "Emerging Global Leader",
    },
    {
      icon: "/Vector (3).png",
      title: "Schwab Foundation / WEF",
      subtitle: "Social Entrepreneur of the Year",
    },
    {
      icon: "/Vector (4).png",
      title: "Eisenhower Fellowships",
      subtitle: "Global Eisenhower Fellow",
    },
    {
      icon: "/Vector (5).png",
      title: "Goldman Sachs · Deloitte · FCA",
      subtitle: "Institutional Grade Financial Leadership",
    },
  ];
  // Carousel ke liye data array - RENAME KAR DIYA
  const servicesData = [
    {
      id: 1,
      title: "Pre-registration / Registration",
      description: "A wrong insurance ID at intake can unravel an entire claim downstream. We verify eligibility before the appointment so nothing gets denied for a reason that could've been caught on day one.",
      icon: "/icon1.png",
      link: "#",
      icon2: "/icon21.png"
    },
    {
      id: 2,
      title: "Charge Capture",
      description: "Undocumented or delayed charges are revenue that simply vanishes. We ensure every service rendered is captured, coded correctly and submitted, so nothing falls through the cracks.",
      icon: "/icon2.png",
      link: "#",
      icon2: "/icon22.png"
    },
    {
      id: 3,
      title: "Claims Submission",
      description: "A clean claim submitted fast is the difference between 20-day payment and 90-day AR. We submit accurate claims the first time, reducing rejections before they ever become denials.",
      icon: "/icon3.png",
      link: "#",
      icon2: "/icon23.png"
    },
    {
      id: 4,
      title: "Denial Management",
      description: "65% of denied claims are never reworked. We chase every one. Our denial management workflow identifies the root cause, appeals aggressively and recovers revenue most practices simply write off.",
      icon: "/icon4.png",
      link: "#",
      icon2: "/icon24.png"
    },
    {
      id: 5,
      title: "Payment Posting",
      description: "Payers routinely underpay contracted rates and most practices never catch it. We post and audit every payment against your fee schedule so underpayments get flagged and recovered.",
      icon: "/icon5.png",
      link: "#",
      icon2: "/icon25.png"
    },
    {
      id: 6,
      title: "Reporting",
      description: "You can't fix what you can't see. We give you a real-time dashboard of denial rates, AR aging, collection rates and clean claim percentage so you're managing proactively, not reacting to cash crunches.",
      icon: "/icon66.png",
      link: "#",
      icon2: "/icon26.png"
    }
  ];
  const serviceGroups = [];

  for (let i = 0; i < servicesData.length; i += 3) {
    serviceGroups.push(servicesData.slice(i, i + 3));
  }
  // const visibleServices = servicesData.slice(startIndex, startIndex + visibleCards);


  return (
    <>
      <div className="p-4 sm:p-12 bg-[#2166AF0D] xl:min-h-[650px] mb-10">
        <div className="block xl:hidden">
          <div className="relative w-full h-auto rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mature-doctor.png"
              alt="Doctor consulting with patient"
              width={1200}
              height={400}
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] font-semibold leading-tight text-[#00427F]">
              We Plug Into Your Practice and Own Every Stage of Your Revenue Cycle
            </h1>

            <p className="text-gray text-xs font-normal leading-relaxed">
              CareRCM takes over the billing, coding, and collections process from day one. Pre-registration to payment posting — every step executed by specialists who know your specialty's codes, your payers' quirks, and exactly where practices like yours are bleeding revenue. You practice medicine the best you can. And we collect every dollar you deserve.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <button className="btn w-full sm:w-auto">
                Get My Free RCM Audit
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[2000px] mx-auto">
          <div className="hidden xl:block">
            {/* Desktop version unchanged */}
            <div className="relative w-full h-[450px]">
              <div className="absolute top-0 right-0 w-[50%] h-[400px] md:h-[450px] lg:h-[480px] xl:h-[520px] rounded-2xl overflow-hidden">
                <Image
                  src="/mature-doctor.png"
                  alt="Doctor consulting with patient"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="50vw"
                />
              </div>

              <div
                className="absolute flex flex-col justify-center gap-3 md:gap-4 rounded-2xl px-6 md:px-7 lg:px-8 py-5 md:py-6 lg:py-7 h-[400px] md:h-[450px] lg:h-[480px] xl:h-[520px]"
                style={{
                  top: "40px",
                  left: "16px",
                  width: "60%",
                  backgroundColor: "rgba(33,102,175,0.04)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  opacity: 4
                }}
              >

                <h1 className="text-[36px] font-semibold leading-tight text-[#003f7a] max-w-2xl">
                  We Plug Into Your Practice and Own Every Stage of Your Revenue Cycle
                </h1>

                <p className="text-gray text-xs font-normal leading-relaxed max-w-[570px]">
                  CareRCM takes over the billing, coding, and collections process from day one. Pre-registration to payment posting — every step executed by specialists who know your specialty's codes, your payers' quirks, and exactly where practices like yours are bleeding revenue. You practice medicine the best you can. And we collect every dollar you deserve.
                </p>

                <div className="flex flex-row gap-3 mt-2">
                  <button className="btn">
                    Get My Free RCM Audit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-16 flex justify-center bg-[#0aade4] mb-20">
        <div className="max-w-[2000px] mx-auto my-20 w-full">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-[44px] font-semibold text-white mb-4 text-center">
              Six Stages. No Dollars Left Behind.
            </h1>

            <p className="text-xs text-center text-white font-normal max-w-5xl">
              Most practices lose 20–30% of their revenue somewhere between the
              patient visit and the payment hitting their account. CareRCM locks
              down every one of those leakage points — so the money you've earned
              actually makes it to you.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Mousewheel]}
            slidesPerView={1}
            spaceBetween={20}
            speed={800}
            grabCursor={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
              releaseOnEdges: true,
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
          >
            {serviceGroups.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.map((service) => (
                    <div
                      key={service.id}
                      className="bg-[#f5fcfe] rounded-2xl border border-transparent transition-all duration-300 p-6 sm:p-7 md:p-8 hover:bg-[#00427f] hover:border-blue-300 group items-center justify-center"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 relative">
                        {/* Normal Icon */}
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                          <Image
                            src={service.icon}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>

                        {/* Hover Icon */}
                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                          <Image
                            src={service.icon2}
                            alt={service.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>

                      <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-semibold leading-tight text-[#003f7a] mb-4 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h2>

                      <p className="text-gray text-xs font-normal line-clamp-4 group-hover:!text-white transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-pagination"></div>
        </div>
      </div>

      <div className="mb-20">
        <div className="w-full px-4 sm:px-12 bg-white flex justify-center">
          <div className="flex flex-col items-center justify-center max-w-4xl text-center mb-8">
            <h1 className="text-[44px] font-semibold leading-tight text-[#00427F] mb-4">Where Other Billing Services Stop, CareRCM Starts.</h1>
            <p className="text-xs text-gray font-normal max-w-4xl">
              Most practices lose money at every step of the revenue cycle without realizing it. We plug into your existing setup and own every stage from the moment a patient walks in to when you get paid.
            </p>
          </div>
        </div>

        <div className="max-w-[2000px] mx-auto">
          <div className="bg-white px-4 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-[#f5fcfe] rounded-2xl shadow transition-all duration-300 p-6 sm:p-7 md:p-8 hover:border border-blue-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 transition-transform duration-300 relative">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h2 className="text-[24px] font-semibold leading-tight text-[#003f7a] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray text-xs font-normal mb-12">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 - Leadership Section */}
      <div className="bg-[url('/bg-image-1.png')] bg-no-repeat bg-right-top bg-cover">
        <div className="relative py-16 lg:py-20 bg-[#F2FBFDF0] overflow-hidden">
          <div className="relative max-w-[2000px] mx-auto px-4 sm:px-12">
            <div className="text-center mb-8">
              <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a] mb-6 max-w-5xl mx-auto leading-[1.2]">
                Institutional-Grade Financial Rigor. Built by
                Globally Recognized Healthcare Leaders.
              </h1>
              <p className="text-gray text-xs font-normal max-w-3xl mx-auto">
                Your revenue cycle isn't managed by generic billers. CareRCM is
                backed by leadership with decades of experience at the highest
                levels of global finance and healthcare administration.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {leadershipData.map((item) => (
                <div
                  key={item.id}
                  className="group hover:bg-[#19A9E5] border border-[#19A9E5] rounded-[18px] bg-[#fff] p-6 transition-all duration-300"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        fill
                        className="object-contain transition-opacity duration-300 group-hover:opacity-0"
                      />

                      <Image
                        src={item.whiteicon}
                        alt={item.title}
                        fill
                        className="object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                    </div>

                    <div>
                      <h3 className="text-[20px] font-normal text-gray leading-tight group-hover:!text-white transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-gray mt-1 group-hover:!text-white transition-colors duration-300">
                        {item.subtitle}
                      </p>

                      <p className="text-xs text-gray leading-relaxed mt-3 group-hover:!text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="max-w-5xl mx-auto text-center mt-12">
              <p className="text-xs text-gray font-normal leading-relaxed">
                Former <strong>CEO of Aman Healthcare</strong> — Pakistan's largest
                telehealth provider, with 700+ trained paramedics — and founding
                team member of <strong>Evercare Health</strong>, operating hospitals
                across four countries. The same investment frameworks and process
                excellence built for large hospital systems are now working for your
                practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 6 - Stats Section */}
      <div className="bg-white">
        <div className="bg-[url('/bg-image-2.png')] bg-no-repeat bg-right-top bg-cover">
          <div className="relative overflow-hidden">
            <div
              className="relative py-20"
              style={{
                // backgroundImage: "url('/bg-room.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#004A8F]/90"></div>
              <div className="relative z-10 max-w-[2000px] mx-auto p-4 sm:p-12">
                <div className="flex flex-wrap justify-center items-center gap-5">
                  {statsData.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl px-6 py-8 sm:px-8 sm:py-10 shadow-lg flex-1">
                      {/* Heading and description in same row - NO WRAP */}
                      <div className="flex flex-col sm:flex-row text-center items-center justify-center gap-4 whitespace-nowrap">
                        <h2 className="text-[#17A9E6] text-[60px] font-semibold leading-tight">
                          {item.value}
                        </h2>
                        <span className="text-gray text-xs text-wrap font-normal text-start">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7 - Footer Leadership Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a] mb-6">
              Institutional-grade Financial Rigor. In Your Corner.
            </h1>
            <p className="max-w-4xl mx-auto text-gray text-xs font-normal">
              CareRCM was built by a leader who developed healthcare workforce
              of nurses and care workers, and restructured hospital-level
              healthcare systems — and directed that experience for efficiency
              and reliability for independent practices.
            </p>
          </div>

          <div className="mt-10 bg-[#0AADE40D] rounded-2xl p-6 md:p-6">
            <div className="flex gap-4">
              <div className="text-[#004A8F] text-5xl font-bold leading-none">
                <Image src="/cotection.png" alt="cotection icon" width={55} height={55} />
              </div>
              <div>
                <p className="text-gray text-xs font-normal leading-relaxed">
                  Private practice physicians deserve the same process
                  orientation and systems that large hospitals pay billions for.
                  That's not a product gap — it's a justice gap. CareRCM was
                  built to close it.
                </p>
                <p className="mt-4 text-gray text-xs sm:text-sm font-semibold">
                  — Malik Ahmad Jalal,
                  <span className="font-normal"> Founder & CEO, CareRCM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 my-6">
            <div className="bg-[#0AADE40D] rounded-2xl p-6 md:p-8">
              <h3 className="text-[#19A9E5] font-semibold text-[24px]">
                Malik Ahmad Jalal
              </h3>
              <p className="text-gray text-xs font-normal mt-2">
                Founder & CEO — Harvard Kennedy School · Former CEO,
                Aman Healthcare · Founder, Evercare Health · ICAEW Chartered
                Accountant
              </p>
              <p className="text-gray text-xs font-normal mt-6">
                Malik brings a combination: the financial discipline and process
                orientation of Goldman Sachs and Deloitte, the systems-thinking
                of Harvard, and the on-the-ground healthcare workforce
                development and restructuring experience of Aman Healthcare —
                one of South Asia's largest integrated health networks.
              </p>
              <p className="text-gray text-xs font-normal mt-4">
                He built CareRCM because he has seen, firsthand, what happens
                when the financial infrastructure fails physicians. He's spent
                his career fixing it. Now he's bringing that capability
                directly to your practice.
              </p>
            </div>

            <div>
              <Image
                alt="Malik Ahmad Jalal"
                src="/Malik Ahmad Jalal.png"
                width={1000}
                height={100}
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
            {credentials.map((item, index) => (
              <div key={index} className="bg-[#0AADE40D] rounded-2xl px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="relative w-9 h-9 flex-shrink-0">
                    <Image src={item.icon} alt={item.title} fill className="object-contain" />
                  </div>
                  <div>
                    <h3 className="text-[20px] font-normal text-gray leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-gray mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a]">
              Why It Matters Beyond Your Practice
            </h1>
            <p className="mx-auto mt-6 text-gray text-xs font-normal leading-relaxed">
              Independent private practices are the backbone of public health in
              America. When a practice faces financial difficulties — or cuts
              services because cash flow can't sustain it — real patients lose
              access to care.
              Every dollar we recover keeps an independent physician viable, in
              their community, serving the patients who need them. We were built
              by a leader who spent years scaling healthcare access for
              underserved populations.
              That experience and instinct — that revenue is not just business,
              it is healthcare infrastructure — is embedded in everything we do.
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Mechanism;