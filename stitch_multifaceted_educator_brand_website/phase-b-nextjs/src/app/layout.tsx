import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/layout/ScrollReveal";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ram Saran Yadav | Educator, Entrepreneur & Content Creator",
  description: "Official portfolio of Ram Saran Yadav. Discover educational resources, blogs, and inspiring content.",
  verification: {
    google: "JYAI-NeQDMz5vHGfPMnn-AV19PXFJDrwWZ1TI8WOm6c",
  }
};

import { Analytics } from "@vercel/analytics/react";
import VisitorTracker from "@/components/layout/VisitorTracker";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col" style={{ cursor: 'auto' }}>
        <VisitorTracker />
        <ScrollReveal />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
