"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { EncryptedText } from "@/components/ui/encrypted-text";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
});

const stats = [
  { value: "+200", label: "Daily Users" },
  { value: "+3", label: "Apps Shipped" },
  { value: "+4", label: "Production Projects" },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0A0A0B]"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/60 via-transparent to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B]/80 via-transparent to-[#0A0A0B]/40" />
      </div>

      {/* Live badge */}
      <motion.div
        {...fadeUp(0.2)}
        className="absolute top-24 right-6 md:right-10 z-20"
      >
        <a
          href="https://edufee.up.railway.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/70 hover:border-[#14B8A6]/40 hover:text-[#14B8A6] transition-all duration-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]" />
          </span>
          Live — edufee.up.railway.app
        </a>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-xs tracking-[0.3em] text-[#14B8A6] font-medium uppercase mb-8"
        >
          CS Student · Bengaluru / Building Real Products / Between Lectures
        </motion.p>

        {/* Main heading */}
        <div className="mb-6">
          <motion.h1
            {...fadeUp(0.45)}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-[#EFEFEE] uppercase"
          >
            PRINCE
          </motion.h1>
          <motion.h1
            {...fadeUp(0.5)}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight text-[#EFEFEE] uppercase"
          >
            KOMMINA
          </motion.h1>
          <motion.div {...fadeUp(0.6)} className="mt-2">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-white/30 uppercase">
              Ships Real{" "}
            </span>
            <span
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase"
              style={{
                background:
                  "linear-gradient(90deg, #14B8A6 0%, #0d9488 40%, #14B8A6 80%)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "shimmer 3s linear infinite",
              }}
            >
              SOFTWARE.
            </span>
          </motion.div>
        </div>

        {/* Encrypted text tagline */}
        <motion.div {...fadeUp(0.7)} className="mb-10">
          <EncryptedText
            text="Full-stack developer · AI integrations · Android apps"
            className="text-sm text-white/40 tracking-widest font-mono"
            revealDelayMs={40}
            flipDelayMs={30}
          />
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.8)} className="flex items-center gap-4 mb-16">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#14B8A6] text-[#0A0A0B] text-sm font-bold tracking-widest rounded-sm hover:bg-[#0d9488] transition-all duration-300 hover:gap-3"
          >
            HIRE ME
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/15 text-[#EFEFEE]/70 text-sm font-medium tracking-widest rounded-sm hover:border-[#14B8A6]/40 hover:text-[#EFEFEE] transition-all duration-300"
          >
            SEE WORK
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="flex items-center gap-8 md:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-black text-[#14B8A6] leading-none">
                {stat.value}
              </span>
              <span className="text-xs text-white/40 tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}
