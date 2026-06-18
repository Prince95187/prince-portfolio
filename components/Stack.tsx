"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const groups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "HTML/CSS/JS",
    ],
    gradient: "from-orange-500/20 to-pink-500/20",
    border: "border-orange-500/20",
    accent: "#F97316",
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "MongoDB"],
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "border-blue-500/20",
    accent: "#3B82F6",
  },
  {
    label: "AI & Cloud",
    items: ["Anthropic API", "OpenAI API", "Firebase", "Railway", "OAuth 2.0"],
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/20",
    accent: "#A855F7",
  },
  {
    label: "Mobile & Other",
    items: ["Android", "Stripe", "Git / GitHub", "JWT", "Python"],
    gradient: "from-teal-500/20 to-emerald-500/20",
    border: "border-teal-500/20",
    accent: "#14B8A6",
  },
];

export default function Stack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#0A0A0B] py-28 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] text-[#14B8A6] uppercase mb-4"
        >
          Tools
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase leading-none tracking-tight text-[#EFEFEE] mb-16"
        >
          What I <span className="text-white/25">work with.</span>
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {groups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.15 * i,
                ease: "easeOut",
              }}
            >
              <CardContainer containerClassName="py-0 w-full">
                <CardBody
                  className={`w-full bg-gradient-to-br ${group.gradient} border ${group.border} rounded-xl p-6 min-h-[220px]`}
                >
                  <CardItem translateZ={30} className="w-full">
                    <p
                      className="text-xs tracking-[0.2em] font-bold uppercase mb-5"
                      style={{ color: group.accent }}
                    >
                      {group.label}
                    </p>
                  </CardItem>
                  <CardItem translateZ={50} className="w-full">
                    <ul className="space-y-2.5">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 text-sm text-[#EFEFEE]/70"
                        >
                          <span
                            className="w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: group.accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
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
