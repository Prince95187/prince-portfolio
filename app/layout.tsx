import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Prince Kommina — CS Student & Freelance Developer",
  description:
    "CS Student at Vidyashilp University, Bengaluru. Building real products between lectures — full-stack web apps, AI integrations, and more.",
  keywords: [
    "freelance developer",
    "CS student",
    "Bengaluru",
    "web development",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Prince Kommina",
    description: "CS Student building real products between lectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
