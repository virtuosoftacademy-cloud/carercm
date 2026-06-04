"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const routter = useRouter();
  const navigate = (path: string) => {
    routter.push(path);
    setIsOpen(false);
  }

  const navItems = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/mechanism" },
    { name: "About Us", path: "/about" },
  ];

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          <div className="flex-shrink-0">
            <Link href="/">
              <Image  
                src="/CareRCM, Logo.png" 
                alt="CareRCM Logo" 
                width={200} 
                height={60}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                href={item.path} 
                className={`text-xs font-normal transition-all duration-300 hover:!text-[#00427F] ${
                  isActiveLink(item.path) 
                    ? "text-[#00427F] font-normal underline underline-offset-12" 
                    : "text-gray hover:text-[#00427F]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button 
              className="btn"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`text-sm font-light transition-all duration-300 hover:text-![#00427F] ${
                    isActiveLink(item.path)
                      ? "text-[#00427F] font-normal underline underline-offset-12" 
                      : "text-black hover:text-[#00427F]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button 
                className="btn"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}