"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, GitBranch, ExternalLink, Send, ArrowUpRight } from "lucide-react";
import { Globe3D, type GlobeMarker } from "@/components/ui/3d-globe";

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
      className="bg-[#0A0A0B] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#14B8A6] uppercase mb-4"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight text-[#EFEFEE] mb-16"
        >
          Let&apos;s /
          <br />
          <span className="text-white/25">talk.</span>
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

            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 bg-white/3 border border-white/8 rounded-xl hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[#14B8A6]/10 transition-colors duration-300">
                    <ch.icon size={16} className="text-white/40 group-hover:text-[#14B8A6] transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/30 tracking-widest uppercase mb-0.5">
                      {ch.label}
                    </p>
                    <p className="text-sm font-medium text-[#EFEFEE]">
                      {ch.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-white/20 group-hover:text-[#14B8A6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </a>
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
