
import Image from "next/image";

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
  return (
    <>
      <div className="card w-full p-12 bg-gray-50">
        <div className="block xl:hidden">
          <div className="relative w-full h-[280px] rounded-2xl overflow-hidden mb-6">
            <Image
              src="/mature-doctor-working-at-office-2026-03-18-15-46-20-utc 1.png"
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


      <div className="w-full p-12 bg-white flex justify-center">
        <div className="flex flex-col items-center justify-center max-w-5xl text-center">
          <h1 className="h1 mb-6">Every Dollar You Earn Should Make It Into Your Account. That's the Only Standard We Work To.</h1>
          <p className="text-xs text-gray leading-relaxed">Most private practices unknowingly surrender 20–30% of their revenue to a system that's rigged against them — payers who delay, deny, and underpay on purpose. We built CareRCM to fight back. Our mission is simple: handle every dollar of your revenue cycle with obsessive precision so you can focus entirely on your patients, not your payer contracts. No billing stress. No lost revenue. No guesswork. Just clean claims, recovered denials, and a practice that runs at its full financial potential.</p>
        </div>
      </div>


      <div className="max-w-5xl mx-auto bg-blue-50 rounded-xl py-8 px-4">
        <div className="flex flex-col items-center text-center justify-center max-w-4xl mx-auto">
          <div className="mb-8">
            <Image
              src="/image 15.png"
              alt="Quote Icon"
              width={220}
              height={220}
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


      <div className="w-full bg-white p-12">

        <div className="text-center mb-10 sm:mb-14">

          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            <span className="block w-10 sm:w-16 h-[2px] bg-[#0a3d8f]" />
            <h1 className="h1">
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
    </>
  );
}

export default About;