"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/img/Logo.png"
                alt="Ram Saran Yadav Logo"
                width={40}
                height={40}
                className="h-10 w-auto object-contain"
              />
              <div
                className="font-heading font-black text-xl tracking-tighter"
                style={{ letterSpacing: "-0.05em", lineHeight: 1 }}
              >
                <span className="text-white">Ram Saran </span>
                <span className="text-primary">Yadav</span>
              </div>
            </Link>
            <p className="font-body text-white-variant text-sm leading-relaxed mb-6">
              Dedicated to transforming lives through education, empowering businesses through
              printing solutions, and inspiring minds via digital content.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/ramsaran.yadav.73"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <span className="font-heading font-bold">f</span>
              </a>
              <a
                href="https://youtube.com/@ramsaranyadav-r7v"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                aria-label="YouTube"
              >
                <span className="font-heading font-bold">yt</span>
              </a>
              <a
                href="https://www.tiktok.com/@ramsaran3389"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-colors"
                aria-label="TikTok"
              >
                <span className="font-heading font-bold">tk</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-sm">
              Sectors
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/teaching"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Teaching
                </Link>
              </li>
              <li>
                <Link
                  href="/printing"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Printing Press
                </Link>
              </li>
              <li>
                <Link
                  href="/creator"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Content Creator
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Student Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-heading font-bold text-white mb-6 uppercase tracking-widest text-sm">
              Newsletter
            </h4>
            <p className="font-body text-white-variant text-sm leading-relaxed mb-4">
              Subscribe to receive updates on educational resources and new content.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-surface border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="button"
                className="absolute right-1 top-1 bottom-1 bg-primary text-white w-10 flex items-center justify-center rounded-full hover:brightness-110 transition-all"
                onClick={() => alert('Newsletter integration coming soon!')}
              >
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Ram Saran Yadav. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-body text-white/40 hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-body text-white/40 hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/9779815493389"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform z-50 shimmer-btn"
        aria-label="Chat on WhatsApp"
      >
        <span className="font-heading font-bold text-2xl">W</span>
      </a>
    </footer>
  );
}
