"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "@/components/ui/3d-card";

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
    color: "#14B8A6",
    metrics: [
      { value: "200+", label: "Users daily" },
      { value: "06", label: "Modules" },
      { value: "02", label: "Android apps" },
      { value: "AI", label: "Powered" },
    ],
    quote: {
      text: "Prince built and deployed EduFee at our school — it's transformed how we manage fees and attendance.",
      author: "Emmanuel Suguna Jyothi High School",
    },
  },
  {
    num: "02",
    title: "Trading Agent",
    subtitle: "Algorithmic AI trader",
    description:
      "Autonomous AI trading agent built with Claude's tool-use API. Runs an agentic decision loop on live market data.",
    status: "Built & In Testing",
    live: false,
    tags: ["Python", "Anthropic", "yfinance", "RSI/MACD"],
    color: "#8B5CF6",
    metrics: null,
    quote: null,
  },
  {
    num: "03",
    title: "Market Mirror",
    subtitle: "Cognitive aptitude analyser",
    description:
      "Analyses trader decision-making across four market environments — bull, bear, volatile, ranging — with an AI tutor.",
    status: "Built",
    live: false,
    tags: ["Python", "Anthropic", "Behavioural Finance"],
    color: "#F59E0B",
    metrics: null,
    quote: null,
  },
  {
    num: "04",
    title: "NEET Study",
    subtitle: "Exam prep platform",
    description:
      "Interactive web platform for NEET UG prep — Biology, Physics, Chemistry. 100+ MCQs, animated diagrams, formula guides.",
    status: "Built",
    live: false,
    tags: ["React", "HTML/CSS/JS", "Python"],
    color: "#EC4899",
    metrics: null,
    quote: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="bg-[#0A0A0B] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#14B8A6] uppercase mb-4"
        >
          Selected Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight text-[#EFEFEE] mb-16"
        >
          Things I&apos;ve /
          <br />
          <span className="text-white/25">built + shipped.</span>
        </motion.h2>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: "easeOut",
              }}
            >
              <CardContainer containerClassName="py-0 w-full">
                <CardBody className="w-full bg-[#111113] border border-white/8 rounded-xl p-7 hover:border-white/15 transition-colors duration-300">
                  <CardItem translateZ={20} className="w-full">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-xs font-mono text-white/20">
                        {project.num}
                      </span>
                      <div className="flex items-center gap-2">
                        {project.live && (
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#14B8A6]" />
                          </span>
                        )}
                        <span
                          className={`text-[10px] tracking-widest uppercase font-medium ${
                            project.live ? "text-[#14B8A6]" : "text-white/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </CardItem>

                  <CardItem translateZ={40} className="w-full">
                    <h3
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-1"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm mb-4">
                      {project.subtitle}
                    </p>
                  </CardItem>

                  <CardItem translateZ={30} className="w-full">
                    <p className="text-[#EFEFEE]/60 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </CardItem>

                  {project.metrics && (
                    <CardItem translateZ={50} className="w-full">
                      <div className="grid grid-cols-4 gap-3 mb-6 p-4 bg-white/3 rounded-lg border border-white/5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center">
                            <div className="text-lg font-black text-[#14B8A6]">
                              {m.value}
                            </div>
                            <div className="text-[9px] text-white/30 tracking-widest uppercase">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardItem>
                  )}

                  {project.quote && (
                    <CardItem translateZ={35} className="w-full">
                      <div className="mb-6 p-4 border-l-2 border-[#14B8A6]/40 bg-[#14B8A6]/5 rounded-r-lg">
                        <p className="text-xs text-white/50 italic leading-relaxed mb-2">
                          &ldquo;{project.quote.text}&rdquo;
                        </p>
                        <p className="text-[10px] text-[#14B8A6] tracking-widest uppercase">
                          — {project.quote.author}
                        </p>
                      </div>
                    </CardItem>
                  )}

                  <CardItem translateZ={20} className="w-full">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-medium tracking-wider bg-white/5 border border-white/8 rounded-sm text-white/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
