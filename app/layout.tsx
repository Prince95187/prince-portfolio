import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "Prince Kommina — CS Student & Freelance Developer",
  description:
    "CS Student at Vidyashilp University, Bengaluru. Building real products between lectures — full-stack web apps, AI integrations, and more.",
  keywords: ["freelance developer", "CS student", "Bengaluru", "web development", "React", "Next.js"],
  openGraph: {
    title: "Prince Kommina — Builds real software between lectures",
    description: "CS student in Bengaluru shipping production apps since year one.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Global grain overlay */}
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
