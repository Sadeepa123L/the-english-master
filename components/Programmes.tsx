"use client";
import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";

// Mock Data
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    text: "The IELTS prep programme helped me score an 8.0! The teachers are incredibly supportive and the mock tests were exactly like the real exam.",
    course: "IELTS Preparation",
  },
  {
    id: 2,
    name: "James L.",
    text: "I used to be terrified of giving presentations in English. The Business English course changed everything. Highly recommend!",
    course: "Business English",
  },
  {
    id: 3,
    name: "Elena R.",
    text: "A fantastic academy! My general fluency has improved so much in just a few months. The classes are fun and interactive.",
    course: "General English Mastery",
  },
];

const programmes = [
  {
    id: 1,
    title: "General English Mastery",
    level: "All Levels",
    duration: "12 Weeks",
    format: "Online & In-person",
    description:
      "Improve your everyday speaking, listening, reading, and writing skills with our comprehensive general English course.",
    category: "General",
  },
  {
    id: 2,
    title: "IELTS Preparation Intensive",
    level: "Intermediate - Advanced",
    duration: "8 Weeks",
    format: "Online",
    description:
      "Target a band score of 7.0+ with intensive practice, mock tests, and expert feedback on writing and speaking.",
    category: "Exam Prep",
  },
  {
    id: 3,
    title: "Business English for Professionals",
    level: "Intermediate+",
    duration: "10 Weeks",
    format: "Online",
    description:
      "Master corporate communication, from writing professional emails to delivering impactful presentations.",
    category: "Business",
  },
  {
    id: 4,
    title: "Spoken English Fluency",
    level: "Beginner - Intermediate",
    duration: "6 Weeks",
    format: "In-person",
    description:
      "Focus entirely on conversational skills, pronunciation, and building confidence in real-life scenarios.",
    category: "Spoken",
  },
];

const CATEGORIES = ["All", "General", "Exam Prep", "Business", "Spoken"];

export default function ProgrammesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProgrammes = programmes.filter(
    (prog) => activeCategory === "All" || prog.category === activeCategory
  );

  return (
    <div id="programmes" className="bg-[#FEFEFE] font-sans pt-12">


      {/* Social Proof / Testimonials Section */}
      <section className="bg-slate-50 py-16 px-6 border-b border-[#E7DEC2]">
        <div className="max-w-[1300px] mx-auto">
          <Reveal animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#16273F] mb-4">
              Join Hundreds of Successful Students
            </h2>
            <p className="text-gray-600">
              Don&apos;t just take our word for it. Hear from our alumni.
            </p>
          </Reveal>
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4">
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div
                  key={`${testimonial.id}-${idx}`}
                  className="bg-white p-8 shadow-sm border-t-[3px] border-[#C9A227] relative w-[350px] shrink-0"
                >
                <div className="flex items-center gap-1 mb-4 text-[#C9A227]">
                  {/* Star rating mockup */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
                <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#16273F] text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="relative py-20 px-6 w-full overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A227] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative max-w-[1300px] mx-auto z-10">
          <Reveal animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#16273F] mb-4">
              Explore Our Programmes
            </h2>
            <p className="text-gray-600 mb-8">
              Filter by your goal to find the perfect fit.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${activeCategory === category
                      ? "bg-[#16273F] text-white"
                      : "bg-white text-[#16273F] border border-[#E7DEC2] hover:border-[#C9A227]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Programmes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProgrammes.map((prog, index) => (
              <Reveal key={prog.id} animation="fade-up" delay={index * 150} className="h-full">
                <div
                  className="bg-[#16273F] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#16273F]/30 hover:-translate-y-1 group flex flex-col h-full border border-[#16273F]"
                >
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <span className="bg-[#C9A227] text-[#16273F] text-xs font-bold px-3 py-1 rounded-full tracking-wide">
                        {prog.level}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {prog.title}
                    </h3>

                    {/* Meta details */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm font-medium text-gray-300">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        {prog.duration}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg className="w-4 h-4 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        {prog.format}
                      </div>
                    </div>

                    <p className="text-gray-400 mb-8 flex-1">
                      {prog.description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-700/60">
                      <a
                        href="#"
                        className="inline-flex items-center text-[#C9A227] font-semibold group-hover:text-white transition-colors"
                      >
                        View Details
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
