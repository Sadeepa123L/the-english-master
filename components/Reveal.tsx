"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  animation?: "fade-up" | "fade-in" | "scale-up";
  delay?: number;
  className?: string;
}

export default function Reveal({ children, animation = "fade-up", delay = 0, className = "" }: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  let baseClass = "transition-all duration-1000 ease-out";
  let hiddenClass = "";
  let visibleClass = "opacity-100 translate-y-0 scale-100";

  switch (animation) {
    case "fade-up":
      hiddenClass = "opacity-0 translate-y-12";
      break;
    case "fade-in":
      hiddenClass = "opacity-0";
      break;
    case "scale-up":
      hiddenClass = "opacity-0 scale-95 translate-y-4";
      break;
  }

  return (
    <div
      ref={ref}
      className={`${baseClass} ${isVisible ? visibleClass : hiddenClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
