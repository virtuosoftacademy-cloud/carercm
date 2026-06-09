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
        <div className="max-w-[2000px] mx-auto w-full">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
            
            <div className="hidden md:block absolute left-1/3 top-0 bottom-0 w-px bg-white/40" />
            <div className="hidden md:block absolute left-2/3 top-0 bottom-0 w-px bg-white/40" />

            <div className="flex justify-center md:px-8 lg:pr-12 xl:pr-16">
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

            <div className="flex justify-center md:px-8 lg:pl-12 xl:pl-16">
              <div className="text-center md:text-left">
                <h2 className="text-[24px] font-semibold leading-tight !text-white mb-3">
                  Follow Us:
                </h2>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                   <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.264 5.633 5.9-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                  >
                    <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/60 hover:border-white flex items-center justify-center transition-colors hover:bg-white/10"
                                    >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-instagram text-white" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
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