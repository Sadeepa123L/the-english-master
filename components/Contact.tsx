"use client";
import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send data to API
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="w-full bg-[#F7F9FC] font-sans pb-20 pt-16">
      {/* 1. Hero Banner */}
      <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/slide-1.jpg"
          alt="Contact Us Background"
          fill
          className="object-cover blur-[3px]"
          priority
        />
        <div className="absolute inset-0 bg-[#16273F]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#16273F] to-transparent opacity-80"></div>
        <div className="relative z-10 text-center px-4 mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-xl">
            Get in Touch
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
            Have questions about our courses? We're here to help you start your English journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* 2. Left Side: Contact Information */}
          <div className="w-full lg:w-5/12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#16273F] mb-8">Contact Details</h2>
            
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#16273F] mb-1">Our Location</h3>
                  <p className="text-[#64748B] leading-relaxed">123 Academy Road,<br/>Colombo 03, Sri Lanka</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#16273F] mb-1">Phone Number</h3>
                  <p className="text-[#64748B] leading-relaxed">+94 11 234 5678<br/>+94 77 123 4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#16273F] mb-1">Email Address</h3>
                  <p className="text-[#64748B] leading-relaxed">hello@theenglishmaster.com<br/>support@theenglishmaster.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-[#C9A227]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#16273F] mb-1">Working Hours</h3>
                  <p className="text-[#64748B] leading-relaxed">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat - Sun: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#16273F] mb-5">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#1877F2] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#E1306C] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.553 4.167 1.6 6.002L.15 23.85l6.012-1.579A11.966 11.966 0 0012.031 24c6.645 0 12.03-5.385 12.03-12.03S18.676 0 12.031 0zm0 22.016c-1.797 0-3.547-.481-5.088-1.391l-.364-.216-3.774.99.998-3.682-.238-.378A10.024 10.024 0 012.016 12.03c0-5.541 4.509-10.05 10.05-10.05 5.542 0 10.05 4.509 10.05 10.05s-4.508 10.05-10.05 10.05zm5.516-7.53c-.302-.15-1.79-.884-2.066-.985-.276-.101-.478-.15-.678.151-.202.301-.78 1.011-.956 1.218-.176.208-.352.234-.654.084-1.782-.888-2.906-1.542-4.043-3.486-.176-.302.176-.28.476-.879.1-.201.05-.378-.025-.528-.076-.151-.678-1.636-.928-2.241-.243-.591-.49-.51-.677-.52l-.578-.01c-.201 0-.528.076-.804.378-.276.302-1.055 1.031-1.055 2.515s1.08 2.917 1.231 3.118c.151.2 2.124 3.242 5.143 4.544 1.831.792 2.511.854 3.42.716 1.045-.16 2.066-.884 2.355-1.741.289-.857.289-1.594.202-1.741-.087-.147-.313-.233-.615-.384z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* 3. Right Side: Contact Form */}
          <div className="w-full lg:w-7/12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-[#16273F] mb-3">Send us a Message</h2>
            <p className="text-[#64748B] mb-8 text-lg">Fill out the form below and our team will contact you shortly.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#16273F] mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 outline-none transition-all text-[#16273F] placeholder-[#94A3B8] bg-[#F8FAFC]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#16273F] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 outline-none transition-all text-[#16273F] placeholder-[#94A3B8] bg-[#F8FAFC]"
                    placeholder="+94 77 000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#16273F] mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 outline-none transition-all text-[#16273F] placeholder-[#94A3B8] bg-[#F8FAFC]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-[#16273F] mb-2">Subject</label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 outline-none transition-all text-[#16273F] bg-[#F8FAFC] appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Spoken English Course</option>
                      <option>IELTS Preparation</option>
                      <option>Corporate Training</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#16273F] mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-4 focus:ring-[#C9A227]/10 outline-none transition-all text-[#16273F] placeholder-[#94A3B8] bg-[#F8FAFC] resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#C9A227] hover:bg-[#B8911F] text-[#16273F] font-bold text-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_8px_20px_0_rgba(201,162,39,0.3)] flex justify-center items-center gap-2"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 4. Google Map Embed */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 mb-8">
        <div className="w-full h-[450px] bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-2 relative group">
          {/* Overlay to tell users it's interactive, disappears on hover */}
          <div className="absolute inset-0 bg-black/5 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-3xl">
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162586221!2d79.77380302324687!3d6.921833527218693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '1.25rem' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
