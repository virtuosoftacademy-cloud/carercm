"use client";

import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-[#00427F]">
      {/* <div className="bg-[#19a9e5] py-8 sm:py-10 px-4 sm:px-6 lg:px-16">
        <div className="max-w-[1600px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-center md:text-left flex-1">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-4 !text-white">
                Together, Let's Make a Difference!
              </h2>
              <p className="text-white text-xs max-w-2xl mx-auto md:mx-0">
                Join us in empowering healthcare heroes to continue their vital
                work. Your dedication creates a nurturing environment for these
                professionals. Donate now!
              </p>
            </div>

            <div className="flex-shrink-0 flex justify-center md:justify-end">
              <button className="btn2 !px-12">
                Make a donation
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="px-4 sm:px-6 lg:px-16 py-10 sm:py-12 pb-4">
        <div className="max-w-[1600px]">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/40" />
            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/40" />

            <div className="flex justify-center md:justify-start md:pr-8 lg:pr-12 xl:pr-16">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                  <Image
                    src="/footer-logo.png"
                    alt="CareRCM Logo"
                    width={200}
                    height={200}
                  />
                </div>

                <p className="text-white text-xs font-normal max-w-md mx-auto md:mx-0">
                  End-to-end RCM. Zero revenue left behind.
                </p>

                <p className="text-white text-[20px] font-normal mt-3">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-white inline-block mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>

                  +1 812 991 8056
                </p>
              </div>
            </div>

            <div className="flex justify-center md:px-8 lg:px-12 xl:px-16">
              <div className="text-center md:text-left">
                <h2 className="text-[24px] font-semibold leading-tight !text-white mb-3">
                  Quick Links
                </h2>

                <ul className="space-y-2">
                  {["Home", "How It Works", "About Us", "Contact Us", "Privacy Policy"].map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white text-xs font-normal transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center md:justify-end md:pl-8 lg:pl-12 xl:pl-16">
              <div className="text-center md:text-left">
                <h2 className="text-[24px] font-semibold leading-tight !text-white mb-3">
                  Follow Us:
                </h2>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" fill="white" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="white" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.264 5.633 5.9-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-center md:items-center items-center gap-3 mt-6 pt-4 border-t border-white/40 pb-0">
            {/* <p className="text-white text-xs leading-none m-0 text-center">
              EIN Number: 12 – 3456789
            </p> */}

            <p className="text-white font-normal text-xs text-center leading-none m-0">
              Copyright © 2026 CareRCM All rights reserved.
            </p>

            {/* <a
              href="#"
              className="text-white text-xs leading-none transition-colors m-0 text-center"
            >
              Privacy Policy
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}