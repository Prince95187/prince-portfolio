"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, ExternalLink, Send, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import type { GlobeMarker } from "@/components/ui/3d-globe";

const Globe3D = dynamic(
  () => import("@/components/ui/3d-globe").then((m) => ({ default: m.Globe3D })),
  { ssr: false, loading: () => <div className="w-full h-full bg-white/3 rounded-full animate-pulse" /> }
);

const globeMarkers: GlobeMarker[] = [
  { lat: 12.9716, lng: 77.5946, src: "https://assets.aceternity.com/avatars/1.webp", label: "Bengaluru, IN" },
  { lat: 40.7128, lng: -74.006, src: "https://assets.aceternity.com/avatars/2.webp", label: "New York" },
  { lat: 51.5074, lng: -0.1278, src: "https://assets.aceternity.com/avatars/3.webp", label: "London" },
  { lat: 35.6762, lng: 139.6503, src: "https://assets.aceternity.com/avatars/4.webp", label: "Tokyo" },
  { lat: -33.8688, lng: 151.2093, src: "https://assets.aceternity.com/avatars/5.webp", label: "Sydney" },
];

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "princekommina42@gmail.com",
    href: "mailto:princekommina42@gmail.com",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    value: "Prince95187",
    href: "https://github.com/Prince95187",
  },
  {
    icon: ExternalLink,
    label: "Upwork",
    value: "Hire on Upwork",
    href: "https://www.upwork.com/freelancers/~01c6341fd6637e46dc",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({ name: "", email: "", project: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xnjrlrnl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.project,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", project: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0D] py-28 md:py-36 overflow-hidden"
    >
      {/* Ambient radial teal glow from top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,184,166,0.05) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.3em] text-[#14B8A6] uppercase mb-3"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.07 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EFEFEE] mb-16"
        >
          Let&apos;s /{" "}
          <span className="text-white/20">talk.</span>
        </motion.h2>

        {/* Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center mb-12"
        >
          <div className="w-full max-w-sm h-72 md:h-96">
            <Globe3D
              markers={globeMarkers}
              config={{
                globeColor: "#0d1117",
                atmosphereColor: "#14B8A6",
                atmosphereIntensity: 0.3,
                autoRotateSpeed: 0.5,
                showAtmosphere: true,
                ambientIntensity: 0.6,
              }}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <p className="text-[#EFEFEE]/50 text-base leading-relaxed mb-4">
              Have a project in mind? I reply within 24 hours. Let&apos;s figure
              out if we&apos;re a good fit.
            </p>

            {channels.map((ch, i) => (
              <motion.a
                key={ch.label}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-xl border transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  borderColor: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(20,184,166,0.3)";
                  e.currentTarget.style.background = "rgba(20,184,166,0.04)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(20,184,166,0.1), 0 0 24px rgba(20,184,166,0.06), 0 2px 8px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                  e.currentTarget.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 8px rgba(0,0,0,0.3)";
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:bg-[#14B8A6]/10 group-hover:border-[#14B8A6]/20 transition-all duration-300">
                    <ch.icon size={15} className="text-white/35 group-hover:text-[#14B8A6] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[9px] text-white/25 tracking-[0.22em] uppercase font-semibold mb-0.5">{ch.label}</p>
                    <p className="text-sm font-semibold text-[#EFEFEE]/80 group-hover:text-[#EFEFEE] transition-colors duration-300">{ch.value}</p>
                  </div>
                </div>
                <ArrowUpRight size={15} className="text-white/15 group-hover:text-[#14B8A6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] tracking-widest text-white/30 uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-lg text-sm text-[#EFEFEE] placeholder-white/20 outline-none focus:border-[#14B8A6]/40 focus:bg-[#14B8A6]/5 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-white/30 uppercase mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-lg text-sm text-[#EFEFEE] placeholder-white/20 outline-none focus:border-[#14B8A6]/40 focus:bg-[#14B8A6]/5 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-[10px] tracking-widest text-white/30 uppercase mb-2 block">
                  Project
                </label>
                <textarea
                  required
                  value={form.project}
                  onChange={(e) =>
                    setForm({ ...form, project: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-white/3 border border-white/8 rounded-lg text-sm text-[#EFEFEE] placeholder-white/20 outline-none focus:border-[#14B8A6]/40 focus:bg-[#14B8A6]/5 transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#14B8A6] text-[#0A0A0B] text-sm font-bold tracking-widest rounded-sm hover:bg-[#0d9488] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {status === "sending" ? (
                  "SENDING..."
                ) : status === "sent" ? (
                  "MESSAGE SENT ✓"
                ) : (
                  <>
                    SEND MESSAGE
                    <Send
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
