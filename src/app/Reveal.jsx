"use client";
import { useEffect, useRef } from "react";
export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (
      !element ||
      preference.matches ||
      !("IntersectionObserver" in window) ||
      !element.animate
    ) {
      return;
    }

    let animation;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animation = element.animate(
          [
            { opacity: 0, transform: "translateY(24px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          {
            duration: 650,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );

        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}