"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Instantly move to login page when signup button is pressed
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F9FC] font-sans p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 sm:p-10 border border-[#E7DEC2]/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#16273F] mb-2">Create an Account</h1>
          <p className="text-[#64748B]">Join us and start mastering English today.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#16273F] mb-1.5"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all text-[#16273F] placeholder-[#94A3B8]"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#16273F] mb-1.5"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all text-[#16273F] placeholder-[#94A3B8]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#16273F] mb-1.5"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all text-[#16273F] placeholder-[#94A3B8]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[16px] font-semibold text-[#16273F] bg-[#C9A227] hover:bg-[#B8911F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227] transition-all duration-200"
          >
            Sign up
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-[#64748B]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#C9A227] hover:text-[#B8911F] transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
