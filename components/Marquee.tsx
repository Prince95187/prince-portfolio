"use client";

import { motion } from "framer-motion";

const items = [
  "React",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Anthropic",
  "Firebase",
  "Railway",
  "Android",
  "Next.js",
  "TypeScript",
  "Python",
  "Stripe",
  "Express",
  "OpenAI",
  "REST APIs",
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="relative py-6 bg-[#0A0A0B] border-y border-white/5 overflow-hidden">
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10 flex-shrink-0">
            <span className="text-sm font-medium tracking-widest text-white/30 uppercase">
              {item}
            </span>
            <span className="text-[#14B8A6] text-xs">✦</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
