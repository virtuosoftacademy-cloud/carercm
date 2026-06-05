"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useState } from "react";

const HomePage = () => {
// const [isOpen, setIsOpen] = useState(false);
  const routter = useRouter();
    const navigate = (path: string) => {
      routter.push(path);
      // setIsOpen(false);
    }
  const services = [
    {
      id: 1,
      title: "Pre-registration / Registration",
      description: "Undocumented or delayed charges are revenues that do not materialize. We ensure your every service is captured, coded correctly and submitted, nothing falls through the cracks.",
      icon: "/Group.png",
      link: "#"
    },
    {
      id: 2,
      title: "Charge Capture",
      description: "A clean claim submitted fast is the difference between 30-day payment and 90-day AR. We submit accurate claims the first time reducing rejections before they become denials.",
      icon: "/change-capture.png",
      link: "#"
    },
    {
      id: 3,
      title: "Claims Submission",
      description: "A clean claim submitted fast is the difference between 20-day payment and 90-day AR. We submit accurate claims the first time reducing rejections before they ever become denials.",
      icon: "/fluent_document-24-light.png",
      link: "#"
    },
    {
      id: 4,
      title: "Denial Management",
      description: "65% of denied claims are never reworked. We chase every one. Our denial management workflow identifies the root cause, appeals aggressively and recovers revenue most practices simply write off.",
      icon: "/material-symbols-light_shield-outline-rounded.png",
      link: "#"
    },
    {
      id: 5,
      title: "Payment Posting",
      description: "Payers routinely underpay contracted rates and most practices never catch it. We post and audit payments against your fee schedule so underpayments get flagged and recovered.",
      icon: "/teenyicons_tick-circle-outline.png",
      link: "#"
    },
    {
      id: 6,
      title: "Reporting",
      description: "Payers routinely underpay contracted rates and most practices never catch it. We post and audit payments against your fee schedule so underpayments get flagged and recovered.",
      icon: "/Vector (1).png",
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
      {/* Home Section - Only padding and button width changed */}
      <div className="bg-white p-4 sm:p-8">
        <div className="block xl:hidden">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mask-group-1.png"
              alt="Doctor consulting with patient"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[#4E4E4E] text-sm font-normal leading-snug">
              Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
            </p>

            <h1 className="text-[54px] font-semibold leading-tight text-[#00427F]">
              Stop Leaving $100K–$250K on the Table Every Year
            </h1>

            <p className="text-gray text-xs font-normal leading-relaxed">
              Most private practices lose thousands monthly to claim denials,
              slow AR and coding errors and never find out until it's too late.
              We handle your entire revenue cycle so you collect every dollar
              you've earned, faster, with zero billing headaches.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              <button className="btn w-full sm:w-auto">
                Get My Free RCM Audit
              </button>
              <button className="btn2 w-full sm:w-auto"
                onClick={() => navigate("/mechanism")}>
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
                src="/mask-group-1.png"
                alt="Doctor consulting with patient"
                fill
                priority
                className="object-cover object-center"
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
              <p className="text-[#4E4E4E] text-sm font-normal leading-snug tracking-wide">
                Your Practice Is Losing Up to 30% of Revenue. We Get It Back.
              </p>

              <h1 className="text-[54px] leading-[1.2] font-semibold tracking-wide text-[#00427F] max-w-3xl">
                Stop Leaving $100K–$250K on the Table Every Year
              </h1>

              <p className="text-gray text-xs font-normal leading-relaxed max-w-[480px]">
                Most private practices lose thousands monthly to claim denials,
                slow AR and coding errors and never find out until it's too late.
                We handle your entire revenue cycle so you collect every dollar
                you've earned, faster, with zero billing headaches.
              </p>

              <div className="flex flex-row gap-3 mt-2">
                <button className="btn">
                  Get My Free RCM Audit
                </button>
                <button className="btn2"
                  onClick={() => navigate("/mechanism")}>
                  See How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission/Vision Section - Only padding changed */}
      <div className="bg-white px-4 sm:px-4 lg:p-12">
        <div className="w-full">
          <div className="text-center mx-auto max-w-4xl mt-20 mb-12">
            <h1 className="text-[44px] leading-[1.2] font-semibold tracking-wide text-[#004275] mb-4 sm:mb-4">
              We built a financial infrastructure for independent physicians
            </h1>
            <p className="text-gray text-xs font-normal">
              Most RCM vendors run claims. We recover money. There's a critical difference — and it starts with who <br /> is sitting at the helm. Experience at the highest levels of global finance and healthcare administration.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full rounded-t-2xl overflow-hidden">
            <div className="w-full lg:w-1/2 relative h-[250px] xs:h-[270px] sm:h-[320px] md:h-[350px] lg:h-[370px] xl:h-[400px] bg-gradient-to-br from-blue-100 to-cyan-100">
              <Image
                src="/Rectangle5.png"
                alt="Medical team discussing patient care"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="w-full lg:w-1/2 bg-[#19a9e5] flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10">
              <div className="max-w-xl">
                <h2 className="text-[44px] font-semibold leading-tight !text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-white text-[18px] font-normal leading-relaxed">
                  Handle every dollar of the revenue cycle so you focus<br /> entirely on patient care.
                </p>
                <p className="text-white text-[18px] font-normal leading-relaxed">
                  No billing stress. No dollar lost. No guesswork.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row w-full rounded-b-2xl overflow-hidden">
            <div className="w-full lg:w-1/2 bg-[#0a3d8f] flex items-center justify-start px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6 sm:py-8 md:py-10 order-2 lg:order-1">
              <div className="max-w-xl">
                <h2 className="text-[44px] font-semibold leading-tight !text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-white text-[18px] font-normal leading-relaxed">
                  Every independent practice runs at its full potential of quality care and achieves its financial objectives — where no physician loses sleep over cash flow, and no earned dollar goes uncollected.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative h-[250px] xs:h-[270px] sm:h-[320px] md:h-[350px] lg:h-[370px] xl:h-[400px] bg-gradient-to-br from-green-100 to-teal-100 order-1 lg:order-2">
              <Image
                src="/Rectangle5-1.png"
                alt="Healthcare team analyzing data"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* We Understand Your Specialty Section - Only image size adjusted */}
      <div className="relative bg-[#17A9DF] overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex-2 flex items-center py-12 sm:py-16 lg:py-20">
              <div>
                <h1 className="text-[44px] font-semibold !text-white mb-4">
                  We Understand Your Specialty
                </h1>
                <p className="text-white text-xs leading-relaxed font-normal">
                  Billing rules, payer contracts and denial triggers are different for every specialty.
                  A mental health practice gets denied for different reasons than an orthopedic surgeon.
                  Generic RCM gets you generic results and lost revenue you'll never see.
                  We're trained in the coding, compliance and payer quirks of your specific specialty.
                  Search yours below.
                </p>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[420px]">
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

      {/* Services Section - Only padding changed */}
      <div className="bg-white p-4 sm:p-12">
        <div>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a]">
              All That Your Practice Needs.
            </h1>
            <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a] mb-4">
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
                {/* <a
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#4e4e4e] font-normal text-xs transition-colors group/link"
                >
                  Explore More
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a> */}
              </div>
            ))}
          </div>

          {/* <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
            <button className="btn w-full sm:w-[180px] px-12">
              View All
            </button>
          </div> */}
        </div>
      </div>

      {/* Testimonials Section - Only padding changed */}
      <div className="w-full bg-white p-4 sm:p-12">
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-[44px] font-semibold leading-tight text-[#003f7a]">
            Real Practices. Real Recovered Revenue.
          </h1>
          <p className="text-gray text-xs font-normal max-w-4xl mx-auto mt-4">
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
              <div className="relative w-full aspect-[4/3] overflow-hidden flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-5 pb-5 pt-4 text-center bg-[#F2F5F8] transition-colors duration-300 group-hover:bg-[#00427F] flex-grow flex flex-col justify-center">
                <h3 className="text-[#0F0F0F] font-semibold text-[24px] mb-2 transition-colors duration-300 group-hover:text-white">
                  {doctor.name}
                </h3>
                <p className="text-gray text-xs font-normal transition-colors duration-300 group-hover:!text-white">
                  {doctor.clinic}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-12 lg:mt-14">
          <button className="btn w-full sm:w-[180px] px-12">
            See More
          </button>
        </div> */}
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
              <div className="text-[#004A8F] text-5xl font-bold leading-none">
                <Image src="/cotection.png" alt="cotection icon" width={55} height={55}/>
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
}

export default HomePage