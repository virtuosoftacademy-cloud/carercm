"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo - Left Side */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
            <Link 
              href="/" 
              className="text-sm lg:text-base text-gray-700 transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="#" 
              className="text-sm lg:text-base text-gray-700 transition-colors font-medium"
            >
              Solution
            </Link>
            <Link 
              href="#" 
              className="text-sm lg:text-base text-gray-700 transition-colors font-medium"
            >
              Pricing
            </Link>
            <Link 
              href="#" 
              className="text-sm lg:text-base text-gray-700 transition-colors font-medium"
            >
              Company
            </Link>
            <Link 
              href="#" 
              className="text-sm lg:text-base text-gray-700 transition-colors font-medium"
            >
              Resources
            </Link>
            <button 
              className="text-sm rounded-4xl bg-[#0AADE4] p-2 px-6 lg:text-base text-white transition-colors font-medium"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Solution
              </Link>
              <Link
                href="#"
                className="text-gray-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#"
                className="text-gray-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Company
              </Link>
              <Link
                href="#"
                className="text-gray-700 transition-colors py-2 text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Resources
              </Link>
              <button 
                className="text-sm rounded-4xl bg-[#0AADE4] p-2 px-6 lg:text-base text-white transition-colors font-medium"
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