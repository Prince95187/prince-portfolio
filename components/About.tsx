"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

const profileMeta = [
  { label: "Based", value: "Bengaluru, IN" },
  { label: "University", value: "Vidyashilp" },
  { label: "Years", value: "2024–2028" },
  { label: "Stack", value: "Full-stack + AI" },
  { label: "Status", value: "Available 2026" },
  { label: "Reply", value: "~24 hours" },
];

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-[#EFEFEE]/70 text-sm mb-2">
          Started CS at Vidyashilp University, Bengaluru.
        </p>
        <p className="text-[#14B8A6] text-xs tracking-widest">
          FOUNDATION YEAR
        </p>
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-[#EFEFEE]/70 text-sm mb-2">
          Built & deployed EduFee at Emmanuel Suguna Jyothi High School — real
          parents, real teachers, live data.
        </p>
        <p className="text-[#14B8A6] text-xs tracking-widest">
          FIRST PRODUCTION DEPLOY
        </p>
      </div>
    ),
  },
  {
    title: "2025",
    content: (
      <div>
        <p className="text-[#EFEFEE]/70 text-sm mb-2">
          Built Trading Agent and Market Mirror using Claude&apos;s tool-use
          API. Started freelancing between semesters.
        </p>
        <p className="text-[#14B8A6] text-xs tracking-widest">
          AI & FREELANCE
        </p>
      </div>
    ),
  },
  {
    title: "2026",
    content: (
      <div>
        <p className="text-[#EFEFEE]/70 text-sm mb-2">
          Actively taking freelance projects. Building real things for real
          clients. Open to new opportunities.
        </p>
        <p className="text-[#14B8A6] text-xs tracking-widest">
          AVAILABLE NOW
        </p>
      </div>
    ),
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-[#0A0A0B] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#14B8A6] uppercase mb-4"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight text-[#EFEFEE] mb-16"
        >
          Real software /
          <br />
          <span className="text-white/25">not demos.</span>
        </motion.h2>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white/3 border border-white/8 rounded-xl p-8"
          >
            <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-6">
              Profile
            </p>
            <div className="space-y-4">
              {profileMeta.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-white/5 pb-4"
                >
                  <span className="text-xs tracking-widest text-white/30 uppercase">
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-[#EFEFEE]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                <span className="text-xs tracking-widest text-[#14B8A6] uppercase">
                  Open to freelance
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-[#EFEFEE]/75 text-base md:text-lg leading-relaxed">
              I&apos;m 19, studying CS at Vidyashilp University in Bengaluru —
              but I didn&apos;t wait until graduation to start building. EduFee
              is already live at a real school, with real parents and teachers
              depending on it every single day.
            </p>
            <p className="text-[#EFEFEE]/75 text-base md:text-lg leading-relaxed">
              I gravitate toward the kind of work that actually affects people —
              platforms that handle money, learning, health, or time. I pick up
              whatever it takes to ship the thing properly, and I&apos;ve
              figured out that AI makes everything move faster when you know how
              to wield it.
            </p>
            <p className="text-[#EFEFEE]/75 text-base md:text-lg leading-relaxed">
              I freelance between semesters and during breaks. If you have a
              product idea and need someone who&apos;ll treat it like their own
              — I&apos;m genuinely that person. I reply fast, I ask good
              questions, and I don&apos;t disappear halfway through.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-xs tracking-[0.3em] text-white/30 uppercase mb-2">
            My Journey
          </p>
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </section>
  );
}
