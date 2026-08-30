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
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ramsaran.yadav.906"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@ramsaran2326"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#FF0000] hover:border-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@ramsaran3389"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#00f2fe] hover:border-[#00f2fe] transition-colors hover:text-black"
                aria-label="TikTok"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.61-5.46-.02-.33-.03-.66-.01-.99.14-1.92 1.09-3.71 2.64-4.9 1.49-1.17 3.4-1.74 5.3-1.57.19.02.39.04.59.08v4.06c-.45-.06-.91-.1-1.38-.11-1.18-.02-2.35.37-3.23 1.15-.9.78-1.4 1.93-1.36 3.12.04 1.18.66 2.27 1.64 2.94 1.05.74 2.45.92 3.65.48 1.25-.44 2.14-1.53 2.37-2.83.08-.43.12-.87.11-1.31-.02-3.83.01-7.66-.01-11.49z"/></svg>
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
                  href="/awards"
                  className="font-body text-sm text-white-variant hover:text-primary transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-primary opacity-0 hover:opacity-100 transition-opacity"></span>{" "}
                  Awards
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
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:scale-110 transition-all duration-300 z-[9999]"
        aria-label="Chat on WhatsApp"
        style={{ right: '1.5rem', bottom: '1.5rem' }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c.003-3.625 2.952-6.575 6.577-6.575 1.758.001 3.41.687 4.653 1.932 1.242 1.245 1.928 2.898 1.927 4.655-.005 3.628-2.956 6.577-6.58 6.577zm3.606-4.92c-.198-.1-1.17-.578-1.353-.646-.182-.065-.315-.1-.448.1-.133.198-.512.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.1-.448-1.08-.614-1.479-.16-.389-.323-.335-.448-.34-.114-.005-.248-.005-.38-.005s-.346.05-.528.248c-.182.198-.691.675-.691 1.644s.708 1.905.808 2.04c.1.134 1.393 2.13 3.373 2.985.472.204.84.326 1.129.418.475.152.904.13 1.246.078.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.05-.084-.182-.133-.38-.232z" />
        </svg>
      </a>
    </footer>
  );
}
