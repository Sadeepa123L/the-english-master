"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programmes", href: "/programmes" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#FEFEFE] font-sans border-b border-[#E7DEC2] transition-shadow duration-200 ease-in-out ${scrolled ? "shadow-md" : ""
        }`}
    >
      <div className="max-w-[1300px] mx-auto pr-4 pl-2 pt-6 pb-3.5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="The English Master Logo"
            width={160}
            height={48}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden min-[860px]:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#16273F] text-[17px] font-medium relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#C9A227] after:w-0 hover:after:w-full after:transition-[width] after:duration-200 after:ease-in-out"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="hidden min-[860px]:flex items-center gap-6">
          <a href="/login" className="text-[#16273F] text-[17px] font-medium">
            Log In
          </a>
          <a
            href="/enroll"
            className="bg-[#C9A227] hover:bg-[#B8911F] text-[#16273F] font-semibold text-[17px] px-[22px] py-[10px] rounded hover:-translate-y-[1px] transition-all duration-150 ease-in-out"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="min-[860px]:hidden bg-transparent border-none cursor-pointer p-2"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="#16273F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <>
                <path
                  d="M4 7H20"
                  stroke="#16273F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#16273F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="#16273F"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[#E7DEC2] px-6 pt-4 pb-6 flex flex-col gap-[18px] min-[860px]:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#16273F] text-base font-medium"
            >
              {link.label}
            </a>
          ))}
          <a href="/login" className="text-[#16273F] text-base font-medium">
            Log In
          </a>
          <a
            href="/enroll"
            className="bg-[#C9A227] text-[#16273F] font-semibold text-[15px] px-[22px] py-3 rounded text-center"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}