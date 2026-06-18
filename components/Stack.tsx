"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const groups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS", "HTML / CSS / JS"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
  },
  {
    label: "AI & Cloud",
    items: ["Anthropic API", "OpenAI API", "Firebase", "Railway", "OAuth 2.0"],
  },
  {
    label: "Mobile & More",
    items: ["Android (Kotlin)", "Stripe", "Git / GitHub", "JWT", "Python"],
  },
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="bg-[#0C0C0D] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.3em] text-[#14B8A6] uppercase mb-3"
        >
          Tools
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.07 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EFEFEE] mb-20"
          style={{ textWrap: "balance" } as React.CSSProperties}
        >
          What I{" "}
          <span className="text-white/20">work with.</span>
        </motion.h2>

        {/* Category rows */}
        <div className="border-t border-white/[0.06]">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + gi * 0.08 }}
              className="group border-b border-white/[0.06] py-6 md:py-7 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-8 items-start"
            >
              {/* Category label */}
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30 pt-1 group-hover:text-[#14B8A6] transition-colors duration-300">
                {group.label}
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.35, delay: 0.15 + gi * 0.08 + ii * 0.03 }}
                    className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-white/55 bg-white/[0.04] border border-white/[0.08] rounded-sm hover:text-[#14B8A6] hover:border-[#14B8A6]/25 hover:bg-[#14B8A6]/[0.06] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-xs text-white/20 tracking-wide"
        >
          I pick up whatever the project needs. This isn&apos;t a ceiling.
        </motion.p>
      </div>
    </section>
  );
}
