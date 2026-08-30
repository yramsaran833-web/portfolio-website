"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // We delay slightly to allow DOM to render fully
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              // Optional: Stop observing once visible if you only want it to animate once
              // observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timeout);
  }, [pathname]); // Re-run whenever route changes

  return null;
}
