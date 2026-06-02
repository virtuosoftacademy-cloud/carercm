"use client";
import Image from "next/image";
import { useState } from "react";

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


const About = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const workflows = [
    {
      title: "Pre-Registration & Charge Capture",
      content: "Every encounter gets captured and coded correctly — before it ever touches a payer. We eliminate the upstream errors that cause 40% of downstream denials before they happen."
    },
    {
      title: "Clean Claims Submission",
      content: "We submit accurate, payer-specific claims the first time. That means 20-day payments — not 90-day AR nightmares. Your cash flow stops being a guessing game."
    },
    {
      title: "Denial Management",
      content: "Most practices quietly write off 65% of denied claims. We don't. We chase every denial, identify root causes, and appeal aggressively — turning written-off revenue back into collected cash."
    },
    {
      title: "Payment Posting & Underpayment Recovery",
      content: "We audit every payment against your contracted fee schedule. Routine payer underpayments go unchallenged at most practices — we catch them and recover them."
    },
    {
      title: "Real-Time Reporting Dashboard",
      content: "You'll always know your denial rate, AR aging, and collection rate. No surprises. No reactive fire-fighting. Just the clarity to make proactive decisions about your practice."
    }
  ];


  const workflowstitle = [
    {
      title: "Specialty-Specific Expertise",
      content: "Every encounter gets captured and coded correctly — before it ever touches a payer. We eliminate the upstream errors that cause 40% of downstream denials before they happen."
    },
    {
      title: "No Dollar Left Behind",
      content: "We submit accurate, payer-specific claims the first time. That means 20-day payments — not 90-day AR nightmares. Your cash flow stops being a guessing game."
    },
    {
      title: "No In-House Billing Overhead",
      content: "Most practices quietly write off 65% of denied claims. We don't. We chase every denial, identify root causes, and appeal aggressively — turning written-off revenue back into collected cash."
    },
    {
      title: "Transparent, Real-Time Accountability",
      content: "We audit every payment against your contracted fee schedule. Routine payer underpayments go unchallenged at most practices — we catch them and recover them."
    },
    {
      title: "A Free Audit Before You Commit to Anything",
      content: "You'll always know your denial rate, AR aging, and collection rate. No surprises. No reactive fire-fighting. Just the clarity to make proactive decisions about your practice."
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Ahmad Jalal Falaksar",
      role: "Founder, CareRCM",
      image: "/image 21.png",
      icon: "/linkedin.png"
    },
    {
      id: 2,
      name: "Maleeha",
      role: "Head of RCM - Customer Fulfillment",
      image: "/card-header (1).png",
      icon: "/linkedin.png"
    },
    {
      id: 3,
      name: "Muhammad Wasif",
      role: "Director of Technical Success",
      image: "/card-header.png",
      icon: "/linkedin.png"
    },
  ];


  return (
    <>
      {/* Hero Section - Only mobile padding fixed */}
      <div className="card w-full p-4 sm:p-12 bg-gray-50">
        <div className="block xl:hidden">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mature-doctor-working-at-office-2026-03-18-15-46-20-utc 1.png"
              alt="Doctor consulting with patient"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            />
          </div>

          <div className="flex flex-col gap-4 px-2 sm:px-0">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
              We Built CareRCM Because Independent Practices Deserve NO Dollar Left Behind.
            </h1>

            <p className="text-gray text-xs leading-relaxed">
              CareRCM is a specialized end-to-end Revenue Cycle Management firm built on certified trained RCM specialists so your revenue stops leaking through denied claims, slow AR, and coding errors. We handle the entire billing, coding, and collections process — No in-house billing team needed, no dollar left behind.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
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
                src="/mature-doctor-working-at-office-2026-03-18-15-46-20-utc 1.png"
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
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a] max-w-3xl">
                We Built CareRCM Because Independent Practices Deserve NO Dollar Left Behind.
              </h1>

              <p className="text-gray text-xs leading-relaxed max-w-3xl">
                CareRCM is a specialized end-to-end Revenue Cycle Management firm built on certified trained RCM specialists so your revenue stops leaking through denied claims, slow AR, and coding errors. We handle the entire billing, coding, and collections process — No in-house billing team needed, no dollar left behind.
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

      {/* Mission Section - Only mobile padding fixed */}
      <div className="w-full p-4 sm:p-12 bg-white flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-4xl text-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a] mb-6">Every Dollar You Earn Should Make It Into Your Account. That's the Only Standard We Work To.</h1>
          <p className="text-xs text-gray font-medium max-w-3xl">
            Private practices unknowingly surrender 20–30% of revenues to a system that's rigged against them — payers delaying, denying, and underpaying. We built CareRCM to fight back. Our mission is simple: handle every dollar of your revenue cycle with obsessive precision so you can focus entirely on what you do best – care for your patients. No billing stress. No lost revenue. No uncertainty. Just clean claims, recovered denials, and a practice that runs at its full financial potential.
          </p>
        </div>
      </div>

      {/* We Don't Advise Section - Mobile: full width, image below */}
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">

          <div className="text-center mb-10">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[#003f7a] mb-2">
              We Don't Advise. We Execute.
            </h1>
            <p className="text-gray text-xs font-medium">
              From the moment a patient walks in to the day your payment posts,<br className="hidden sm:block" />
              CareRCM owns every stage of your revenue cycle.
            </p>
          </div>

          <div className="bg-blue-50 rounded-[28px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12">
                {workflows.map((item, index) => (
                  <div
                    key={index}
                    className={`border-b border-[#D8E0EA] ${openIndex === index ? "border-l-4 border-l-[#00AEEF] bg-white pl-4" : ""
                      } transition-all duration-300`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="w-full flex items-start justify-between py-5 text-left"
                    >
                      <h3 className="text-[#00427F] text-[18px] md:text-[20px] font-semibold max-w-[85%]">
                        {item.title}
                      </h3>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-5 h-5 text-[#00427F] mt-1 transition-transform duration-300 me-4 ${openIndex === index ? "rotate-180" : ""
                          }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                        ? "max-h-[300px] opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-gray text-xs leading-relaxed pr-5">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/Frame 115.png"
                  alt="frame 115"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section - Only mobile padding fixed */}
      <div className="max-w-[94%] mx-auto bg-blue-50 rounded-xl my-12 p-6 sm:p-12">
        <div className="flex flex-col items-center text-center justify-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/image 15.png"
              alt="Quote Icon"
              width={220}
              height={220}
              className="w-[150px] h-[150px] sm:w-[220px] sm:h-[220px]"
            />
          </div>

          <p className="text-xs text-gray leading-relaxed mb-2">
            "We started CareRCM because we watched excellent physicians leave money on the table every single month — not because they were bad at medicine, but because the billing system is designed to be confusing. Our job is to be the unfair advantage independent practices deserve."
          </p>

          <div className="flex flex-col">
            <p className="text-sm font-semibold text-black">Malik Ahmed Jalal</p>
            <p className="text-xs text-gray font-light">Founder & CEO, CareRCM</p>
          </div>
        </div>
      </div>

      {/* Real Practices Section - Only mobile padding fixed */}
      <div className="w-full bg-white p-4 sm:p-12">

        <div className="text-center mb-10 sm:mb-14">

          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
              Real Practices. Real Recovered Revenue.
            </h1>
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

      {/* Our Team Section - Only mobile padding and image size fixed */}
      <div className="w-full bg-[#00aeef] p-4 sm:p-12">
        <div className="">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fff] mb-2">
              Our Team
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xs md:text-base text-gray font-medium text-white">
                Our team is built around one mission — helping healthcare practices collect every dollar they earn.
                With experts in billing, credentialing, compliance, and technical operations, CareRCM delivers
                responsive support, faster resolutions, and data-driven RCM strategies that strengthen your financial performance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 mb-10 sm:mb-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white rounded-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col h-full p-4 sm:p-6"
              >
                <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3] overflow-hidden flex-shrink-0 rounded-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pb-6 pt-4 bg-white">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-[#00427F] font-semibold text-[16px] sm:text-[18px] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <div className="relative w-5 h-5 flex-shrink-0">
                      <Image
                        src={member.icon}
                        alt="LinkedIn"
                        fill
                        className="object-contain transition-all duration-300"
                      />
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs sm:text-sm transition-colors duration-300">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Why Private Practices Section - Mobile: full width, image below */}
      <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-[95%] sm:max-w-[90%] md:max-w-[80%] lg:max-w-[70%]">

          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-[#003f7a]">
                Why Private Practices Choose <br className="hidden sm:block" /> CareRCM Over Every Other Option
              </h1>
            </div>

            <p className="text-gray text-xs font-medium">
              Generic RCM gets you generic results. Here's what makes us different.
            </p>
          </div>

          <div className="bg-blue-50 rounded-[28px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-12">
                {workflowstitle.map((item, index) => (
                  <div
                    key={index}
                    className={`border-b border-[#D8E0EA] ${openIndex === index ? "border-l-4 border-l-[#00AEEF] bg-white pl-4" : ""
                      } transition-all duration-300`}
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                      className="w-full flex items-start justify-between py-5 text-left"
                    >
                      <h3 className="text-[#00427F] text-[18px] md:text-[20px] font-semibold max-w-[85%]">
                        {item.title}
                      </h3>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className={`w-5 h-5 text-[#00427F] mt-1 transition-transform duration-300 me-4 ${openIndex === index ? "rotate-180" : ""
                          }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                        ? "max-h-[300px] opacity-100 pb-6"
                        : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="text-gray text-xs leading-relaxed pr-5">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
                <Image
                  src="/Frame 115 (1).png"
                  alt="frame 115"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;