"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#16273F] text-white pt-16 pb-8 font-sans border-t-[4px] border-[#C9A227] mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col items-start">
            <div className="bg-white p-2 rounded-xl mb-6 shadow-lg relative w-[180px] h-[60px] flex items-center justify-center overflow-hidden">
              <Image 
                src="/logomain.jpg" 
                alt="The English Master Logo" 
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Empowering students to speak with confidence. The English Master is Sri Lanka's premier academy for comprehensive English education.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#25D366] transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.553 4.167 1.6 6.002L.15 23.85l6.012-1.579A11.966 11.966 0 0012.031 24c6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm0 22.016c-1.797 0-3.547-.481-5.088-1.391l-.364-.216-3.774.99.998-3.682-.238-.378A10.024 10.024 0 012.016 12.03c0-5.541 4.509-10.05 10.05-10.05 5.542 0 10.05 4.509 10.05 10.05s-4.508 10.05-10.05 10.05zm5.516-7.53c-.302-.15-1.79-.884-2.066-.985-.276-.101-.478-.15-.678.151-.202.301-.78 1.011-.956 1.218-.176.208-.352.234-.654.084-1.782-.888-2.906-1.542-4.043-3.486-.176-.302.176-.28.476-.879.1-.201.05-.378-.025-.528-.076-.151-.678-1.636-.928-2.241-.243-.591-.49-.51-.677-.52l-.578-.01c-.201 0-.528.076-.804.378-.276.302-1.055 1.031-1.055 2.515s1.08 2.917 1.231 3.118c.151.2 2.124 3.242 5.143 4.544 1.831.792 2.511.854 3.42.716 1.045-.16 2.066-.884 2.355-1.741.289-.857.289-1.594.202-1.741-.087-.147-.313-.233-.615-.384z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/#home" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/#programmes" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Programmes
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Contact Us
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Student Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Popular Courses</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Spoken English
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> IELTS Preparation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Corporate English
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-[#C9A227] transition-colors flex items-center gap-2">
                  <span className="text-[#C9A227]">›</span> Kids English Club
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Subscribe to our newsletter to get the latest English learning tips and course offers.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227] transition-all"
                required
              />
              <button 
                type="button" 
                onClick={(e) => { e.preventDefault(); alert('Subscribed!'); }}
                className="w-full px-4 py-3 rounded-lg bg-[#C9A227] text-[#16273F] font-bold hover:bg-[#B8911F] transition-all transform hover:-translate-y-1 shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} The English Master. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
