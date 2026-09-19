"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Programmes from "../components/Programmes";
import Contact from "../components/Contact";

const slides = [
  "/slide-1.jpg",
  "/slide-2.jpg",
  "/slide-3.jpg",
  "/slide-4.jpg",
  "/slide-5.jpg",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[calc(100vh-80px)] overflow-hidden bg-black">
        {/* Background Slider */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover blur-[1px]" 
              priority={index === 0}
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-black/80"></div>
          </div>
        ))}

        {/* Main Content Area */}
        <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Left Side: Text & Buttons */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left mt-16">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-10 drop-shadow-xl leading-none">
              The English <br/>
              <span className="text-[#C9A227]">Master</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/signup"
                className="px-8 py-3.5 bg-[#C9A227] hover:bg-[#B8911F] text-[#16273F] font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(201,162,39,0.4)] text-center"
              >
                Join Now
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30 text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Side: Logo */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-end items-center pr-4 lg:pr-12">
            <div className="relative w-[380px] h-[380px] flex items-center justify-center bg-white/10 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/20 p-8 transform hover:scale-105 transition-transform duration-500">
              <div className="relative w-full h-full bg-white rounded-[1.5rem] shadow-inner overflow-hidden flex items-center justify-center">
                <Image
                  src="/logomain.jpg"
                  alt="The English Master Logo"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md group"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-4 bg-black/30 hover:bg-black/60 text-white rounded-full transition-all backdrop-blur-md group"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 group-hover:translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#C9A227] w-10 shadow-[0_0_10px_rgba(201,162,39,0.8)]" : "bg-white/50 w-3 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Other Homepage Sections */}
      <Programmes />
      <Contact />
    </div>
  );
}
