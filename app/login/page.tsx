"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login logic
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-sans p-4 relative overflow-hidden">
      {/* Blurred Background Image */}
      <div 
        className="absolute inset-[-20px] z-0 bg-cover bg-center blur-md"
        style={{ backgroundImage: 'url("/LoginPage.png.jpg")' }}
      />
      {/* Overlay to improve readability */}
      <div className="absolute inset-0 z-0 bg-[#16273F]/40" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Side: Image */}
        <div className="hidden md:block w-1/2 relative bg-[#F7F9FC]">
          <Image
            src="/LoginPage.png.jpg"
            alt="Login background"
            fill
            sizes="50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-1/2 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#16273F] mb-2">Welcome Back</h1>
            <p className="text-[#64748B]">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all text-[#16273F] placeholder-[#94A3B8]"
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
                className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/20 outline-none transition-all text-[#16273F] placeholder-[#94A3B8]"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#C9A227] focus:ring-[#C9A227]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-[#64748B]">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-[#C9A227] hover:text-[#B8911F] transition-colors"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-[16px] font-semibold text-[#16273F] bg-[#C9A227] hover:bg-[#B8911F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A227] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[#64748B]">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-[#C9A227] hover:text-[#B8911F] transition-colors"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
