"use client";

import Image from "next/image";
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
      icon: "/Vector (2).png"
    },
    {
      id: 2,
      title: "Eisenhower Fellowships",
      subtitle: "Global Eisenhower Fellow",
      description: "Part of an elite international network of healthcare innovators — with deep expertise in scalability, care delivery efficiency, and medical billing operations.",
      icon: "/Vector (3).png"
    },
    {
      id: 3,
      title: "Schwab Foundation / WEF",
      subtitle: "Social Entrepreneur of the Year",
      description: "Globally recognised for healthcare workforce development and network restructuring — the same operational rigor applied to every practice we serve.",
      icon: "/Vector (4).png"
    },
    {
      id: 4,
      title: "Goldman Sachs · Deloitte · FCA",
      subtitle: "Institutional Grade Financial Leadership",
      description: "UK Chartered Accountant with Goldman Sachs and Deloitte experience — delivering Fortune 500 financial discipline, audit-grade controls, and revenue protection for independent physicians.",
      icon: "/Vector (5).png"
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
  return (
    <>
      <div className="bg-white p-4 sm:p-8">
        <div className="block xl:hidden">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mature-doctor.png"
              alt="Doctor consulting with patient"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
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
              <button className="btn2 w-full sm:w-auto">
                See How It Works
              </button>
            </div>
          </div>
        </div>

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
                background: "rgba(180,220,245,0.15)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                boxShadow: "0 20px 35px -10px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.5)",
                border: "1px solid rgba(25, 169, 229, 0.15)"
              }}
            >

              <h1 className="text-[36px] font-semibold leading-tight text-[#003f7a] max-w-2xl">
                We Plug Into Your Practice and Own Every Stage of Your Revenue Cycle
              </h1>

              <p className="text-gray text-xs font-normal max-w-3xl">
                CareRCM takes over the billing, coding, and collections process from day one. Pre-registration to payment posting — every step executed by specialists who know your specialty's codes, your payers' quirks, and exactly where practices like yours are bleeding revenue. You practice medicine the best you can. And we collect every dollar you deserve.
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

      <div className="w-full p-12 mt-20 bg-white flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-4xl text-center">
          <h1 className="text-[44px] font-semibold leading-tight text-[#00427F] mb-6">Six Stages. No Dollars Left Behind.</h1>
          <p className="text-xs text-gray font-normal max-w-3xl">
            Most practices lose 20–30% of their revenue somewhere between the patient visit and the payment hitting their account. CareRCM locks down every one of those leakage points — so the money you've earned actually makes it to you.          </p>
        </div>
      </div>

      <div className="w-full p-4 sm:p-12 bg-white flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-4xl text-center">
          <h1 className="text-[44px] font-semibold leading-tight text-[#00427F] mb-6">Where Other Billing Services Stop, CareRCM Starts.</h1>
          <p className="text-xs text-gray font-normal max-w-3xl">
            Most practices lose money at every step of the revenue cycle without realizing it. We plug into your existing setup and own every stage from the moment a patient walks in to when you get paid.
          </p>
        </div>
      </div>


      <div className="bg-white p-4 sm:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
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
        <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <button className="btn w-full sm:w-[180px] px-12">
            View All
          </button>
        </div>
      </div>


      {/* Leadership Section - Only padding and flex direction changed */}
      <div className="bg-[url('/bg-image-1.png')] bg-no-repeat bg-right-top bg-cover">
        <div className="relative py-16 lg:py-24 bg-[#F2FBFDF0] overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
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
                <div key={item.id} className="bg-white border border-[#19A9E5] rounded-[18px] p-6 md:p-7">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 relative mt-1">
                      <Image src={item.icon} alt={item.title} fill className="object-contain" />
                    </div>
                    <div>
                      <h3 className="text-[20px] font-normal text-gray leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray mt-1">
                        {item.subtitle}
                      </p>
                      <p className="text-xs text-gray leading-relaxed mt-3">
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

      {/* Stats Section - Grid is already responsive */}
      <div className="bg-white py-20">
        <div className="bg-[url('/bg-image-2.png')] bg-no-repeat bg-right-top bg-cover">
          <div className="relative overflow-hidden">
            <div
              className="relative py-16 sm:py-20 lg:py-28"
              style={{
                backgroundImage: "url('/bg-room.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[#004A8F]/90"></div>
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 max-w-6xl mx-auto">
                  {statsData.map((item, index) => (
                    <div key={index} className="bg-white rounded-3xl px-6 py-8 sm:px-8 sm:py-10 text-center shadow-lg">
                      <h2 className="text-[#17A9E6] text-[60px] font-semibold leading-tight">
                        {item.value}
                      </h2>
                      <p className="mt-4 text-gray text-xs sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Leadership Section - Only padding and flex direction changed */}
      <div className="bg-[#F7F9FB] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a] mb-6">
              Institutional-grade financial rigor. In your corner.
            </h1>
            <p className="max-w-4xl mx-auto text-gray text-xs font-normal">
              CareRCM was built by a leader who developed healthcare workforce
              of nurses and care workers, and restructured hospital-level
              healthcare systems — and directed that experience for efficiency
              and reliability for independent practices.
            </p>
          </div>

          <div className="mt-10 bg-[#0AADE40D] rounded-2xl p-6 md:p-8">
            <div className="flex gap-4">
              <div className="text-[#004A8F] text-5xl font-bold leading-none mt-2">
                <Image src="/cotection.png" alt="cotection icon" width={50} height={50} />
              </div>
              <div>
                <p className="text-gray text-xs font-normal leading-relaxed">
                  "Private practice physicians deserve the same process
                  orientation and systems that large hospitals pay billions for.
                  That's not a product gap — it's a justice gap. CareRCM was
                  built to close it."
                </p>
                <p className="mt-4 text-gray text-xs sm:text-sm font-semibold">
                  — Malik Ahmad Jalal,
                  <span className="font-normal"> Founder & CEO, CareRCM</span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
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

            <div className="space-y-3">
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
          </div>

          <div className="mt-20 text-center">
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a]">
              Why it matters beyond your practice
            </h1>
            <p className="max-w-4xl mx-auto mt-6 text-gray text-xs font-normal leading-relaxed">
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