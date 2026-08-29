"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === "/" && pathname !== "/") return false;
    return pathname.startsWith(path);
  };

  const navLinkClass = (path: string) => {
    const active = isActive(path);
    return `nav-link transition-colors font-body text-sm font-medium ${
      active
        ? "text-[#FF7A00] border-b-2 border-[#FF7A00] pb-1"
        : "text-[#9ca3af] hover:text-[#FF7A00]"
    }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-md transition-all duration-300 py-4">
      <div className="flex justify-between items-center px-6 md:px-16 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-4 group">
          <Image
            src="/assets/img/Logo.png"
            alt="Ram Saran Yadav Logo"
            width={48}
            height={48}
            className="h-12 w-auto object-contain drop-shadow-md"
            priority
          />
          <div className="flex flex-col">
            <div
              className="font-heading font-black text-2xl md:text-3xl tracking-tighter relative"
              style={{ letterSpacing: "-0.05em", lineHeight: 1 }}
            >
              <span className="text-white">Ram Saran </span>
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#FF7A00] blur-md opacity-40"></span>
                <span className="relative bg-gradient-to-r from-[#FF7A00] to-[#ff3b00] text-transparent bg-clip-text">
                  Yadav
                </span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>
          <Link href="/about" className={navLinkClass("/about")}>
            About
          </Link>

          {/* Dropdown: Professional Sectors */}
          <div className="relative group cursor-pointer">
            <span className="text-[#9ca3af] group-hover:text-[#FF7A00] transition-colors font-body text-sm font-medium flex items-center gap-1">
              Sectors <span className="material-symbols-outlined text-sm">expand_more</span>
            </span>
            <div className="absolute top-full right-0 mt-4 w-48 bg-surface border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2 flex flex-col gap-1">
              <Link
                href="/teaching"
                className="px-4 py-2 hover:bg-white/5 rounded-lg text-white font-body text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF7A00]">school</span>{" "}
                Teaching
              </Link>
              <Link
                href="/printing"
                className="px-4 py-2 hover:bg-white/5 rounded-lg text-white font-body text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#FF7A00]">print</span>{" "}
                Printing Press
              </Link>
              <Link
                href="/creator"
                className="px-4 py-2 hover:bg-white/5 rounded-lg text-white font-body text-sm flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#b8c4ff]">videocam</span>{" "}
                Content Creator
              </Link>
            </div>
          </div>

          <Link href="/gallery" className={navLinkClass("/gallery")}>
            Gallery
          </Link>
          <Link href="/blog" className={navLinkClass("/blog")}>
            Blog
          </Link>
          <Link href="/resources" className={navLinkClass("/resources")}>
            Resources
          </Link>

          <Link
            href="/contact"
            className="bg-[#FF7A00] text-white px-6 py-2.5 rounded-lg font-body text-sm font-bold active:scale-95 transition-transform hover:brightness-110 flex items-center gap-2 shadow-lg shadow-[#FF7A00]/30"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#ffffff] focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          isMobileMenuOpen ? "flex" : "hidden"
        } flex-col bg-black border-t border-white/10 absolute top-full w-full left-0 p-6 space-y-4 shadow-2xl`}
      >
        <Link href="/" className="text-white font-body font-medium block">
          Home
        </Link>
        <Link href="/about" className="text-white font-body font-medium block">
          About
        </Link>
        <Link href="/teaching" className="text-white font-body font-medium block pl-4 border-l border-white/10">
          - Teaching
        </Link>
        <Link href="/printing" className="text-white font-body font-medium block pl-4 border-l border-white/10">
          - Printing Press
        </Link>
        <Link href="/creator" className="text-white font-body font-medium block pl-4 border-l border-white/10">
          - Content Creator
        </Link>
        <Link href="/gallery" className="text-white font-body font-medium block">
          Gallery
        </Link>
        <Link href="/blog" className="text-white font-body font-medium block">
          Blog
        </Link>
        <Link href="/resources" className="text-white font-body font-medium block">
          Resources
        </Link>
        <Link
          href="/contact"
          className="bg-[#FF7A00] text-white text-center py-3 rounded-lg font-body font-bold block mt-4"
        >
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
