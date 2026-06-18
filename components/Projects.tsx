"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const MacbookScroll = dynamic(
  () => import("@/components/ui/macbook-scroll").then((m) => ({ default: m.MacbookScroll })),
  { ssr: false }
);

const projects = [
  {
    num: "01",
    title: "EduFee",
    subtitle: "School management platform",
    description:
      "Full-stack platform deployed at Emmanuel Suguna Jyothi High School, Bengaluru. Serves 200+ users daily across six modules.",
    status: "Live & Deployed",
    live: true,
    tags: ["React", "Node.js", "PostgreSQL", "Anthropic", "Firebase", "Railway", "Android"],
    metrics: [
      { value: "200+", label: "Users / day" },
      { value: "06", label: "Modules" },
      { value: "02", label: "Android apps" },
      { value: "AI", label: "Powered" },
    ],
    quote: {
      text: "Prince built and deployed EduFee at our school — it's transformed how we manage fees and attendance.",
      author: "Emmanuel Suguna Jyothi High School",
    },
    featured: true,
  },
  {
    num: "02",
    title: "Trading Agent",
    subtitle: "Algorithmic AI trader",
    description:
      "Autonomous trading agent built with Claude's tool-use API. Runs an agentic decision loop on live market data — buys, sells, journals.",
    status: "Built & In Testing",
    live: false,
    tags: ["Python", "Anthropic", "yfinance", "RSI / MACD"],
    metrics: null,
    quote: null,
    featured: false,
  },
  {
    num: "03",
    title: "Market Mirror",
    subtitle: "Cognitive aptitude analyser",
    description:
      "Analyses trader decision-making across four market environments — bull, bear, volatile, ranging — with an AI tutor that adapts to your blindspots.",
    status: "Built",
    live: false,
    tags: ["Python", "Anthropic", "Behavioural Finance"],
    metrics: null,
    quote: null,
    featured: false,
  },
  {
    num: "04",
    title: "NEET Study",
    subtitle: "Exam prep platform",
    description:
      "Interactive platform for NEET UG prep — Biology, Physics, Chemistry. 100+ MCQs, animated diagrams, formula guides, timed mock tests.",
    status: "Built",
    live: false,
    tags: ["React", "HTML / CSS / JS", "Python"],
    metrics: null,
    quote: null,
    featured: false,
  },
];

function ProjectCard({ project, index, inView }: { project: typeof projects[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.12 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col bg-[#111214] border border-white/[0.07] rounded-xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:border-[#14B8A6]/20 hover:bg-[#111214]/80"
      style={{
        boxShadow: hovered ? "0 0 40px rgba(20,184,166,0.04), 0 4px 24px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.3)",
      }}
    >
      {/* Teal corner glow on hover */}
      {hovered && (
        <div
          className="absolute top-0 left-0 w-48 h-48 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 0% 0%, rgba(20,184,166,0.08) 0%, transparent 70%)",
            borderRadius: "inherit",
          }}
        />
      )}

      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-[10px] font-mono text-white/20 tracking-widest">/ {project.num}</span>
        <div className="flex items-center gap-2">
          {project.live && (
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#14B8A6]" />
            </span>
          )}
          <span className={`text-[9px] tracking-[0.22em] uppercase font-semibold ${project.live ? "text-[#14B8A6]" : "text-white/25"}`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tight leading-none mb-1.5 transition-colors duration-300 ${hovered ? "text-[#14B8A6]" : "text-[#EFEFEE]"}`}>
        {project.title}
      </h3>
      <p className="text-xs text-white/35 tracking-wide mb-5">{project.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">{project.description}</p>

      {/* Metrics strip */}
      {project.metrics && (
        <div className="grid grid-cols-4 gap-2 mb-6 p-4 bg-white/[0.025] rounded-lg border border-white/[0.06]">
          {project.metrics.map((m) => (
            <div key={m.label} className="text-center">
              <div className="text-base font-black text-[#14B8A6] tabular-nums">{m.value}</div>
              <div className="text-[8px] text-white/25 tracking-widest uppercase mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Quote */}
      {project.quote && (
        <div className="mb-6 pl-4 border-l-2 border-[#14B8A6]/25">
          <p className="text-xs text-white/40 italic leading-relaxed mb-1.5">
            &ldquo;{project.quote.text}&rdquo;
          </p>
          <p className="text-[9px] text-[#14B8A6] tracking-[0.18em] uppercase">— {project.quote.author}</p>
        </div>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span key={tag} className="px-2 py-1 text-[9px] font-medium tracking-wider bg-white/[0.04] border border-white/[0.07] rounded-sm text-white/35">
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8">
        <ArrowUpRight
          size={16}
          className={`transition-all duration-300 ${hovered ? "text-[#14B8A6] translate-x-0.5 -translate-y-0.5" : "text-white/15"}`}
        />
      </div>
    </motion.article>
  );
}

const LiveBadge = () => (
  <a
    href="https://edufee.up.railway.app"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#14B8A6]/10 border border-[#14B8A6]/25 rounded-sm text-[10px] text-[#14B8A6] font-semibold tracking-[0.2em] uppercase hover:bg-[#14B8A6]/20 transition-all"
  >
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#14B8A6]" />
    </span>
    Live Product
  </a>
);

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="bg-[#0C0C0D] overflow-hidden">
      {/* MacbookScroll — EduFee cinematic showcase */}
      <div className="bg-[#0C0C0D]">
        <MacbookScroll
          title={
            <span className="font-black text-2xl md:text-4xl uppercase tracking-tight" style={{ color: "#EFEFEE" }}>
              EduFee — live at a real school.{" "}
              <span style={{ color: "#14B8A6" }}>200+ users. Every day.</span>
            </span>
          }
          badge={<LiveBadge />}
          src="https://placehold.co/1200x750/0c0c0d/14b8a6?text=EduFee+Dashboard"
          showGradient={false}
        />
      </div>

      {/* Projects grid */}
      <div className="py-24 md:py-32" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] text-[#14B8A6] uppercase mb-3"
          >
            Selected Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.07 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EFEFEE] mb-14"
          >
            Things I&apos;ve /{" "}
            <span className="text-white/20">built + shipped.</span>
          </motion.h2>

          {/* items-start prevents empty-space stretch on shorter cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {projects.map((project, i) => (
              <ProjectCard key={project.num} project={project} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
