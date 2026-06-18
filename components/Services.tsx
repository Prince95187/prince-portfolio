"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    num: "01",
    title: "Full-stack web apps",
    description:
      "Your idea, fully alive — front to back, fast, and built to actually survive real users.",
  },
  {
    num: "02",
    title: "AI & LLM integration",
    description:
      "I wire intelligence into your product so it feels like magic, not a demo.",
  },
  {
    num: "03",
    title: "Android apps",
    description:
      "Ships to the Play Store. Feels native. Works offline. Doesn't embarrass you.",
  },
  {
    num: "04",
    title: "Payment systems",
    description:
      "Money moves cleanly — no broken checkouts, no reconciliation nightmares.",
  },
  {
    num: "05",
    title: "Fintech & trading",
    description:
      "Live data, sharp charts, algorithmic logic — built for people who trust numbers.",
  },
  {
    num: "06",
    title: "Landing pages",
    description:
      "One page. One job. Converts. Loads fast enough to never lose a lead.",
  },
  {
    num: "07",
    title: "SaaS dashboards",
    description:
      "The kind of admin panel your customers actually want to open every morning.",
  },
  {
    num: "08",
    title: "E-commerce stores",
    description:
      "Browse, add to cart, pay, done — a buying experience your store deserves.",
  },
  {
    num: "09",
    title: "School & EdTech platforms",
    description:
      "Real institutions already run on what I've built. Attendance, fees, results — all handled.",
  },
  {
    num: "10",
    title: "CRM & client portals",
    description:
      "Your clients log in, see what they need, and trust you more. That's the whole goal.",
  },
  {
    num: "11",
    title: "API design & integrations",
    description:
      "Your tools talk to each other. Data flows. Nothing breaks at 2am.",
  },
  {
    num: "12",
    title: "Restaurant & hospitality",
    description:
      "From menu to kitchen to table — digital, clean, and running without a hitch.",
  },
  {
    num: "13",
    title: "Real estate platforms",
    description:
      "Listings that load fast, enquiries that don't slip through cracks, owners who stay happy.",
  },
  {
    num: "14",
    title: "Healthcare & clinic tools",
    description:
      "Patients book, show up, and leave with records intact. Stress leaves the building.",
  },
  {
    num: "15",
    title: "Social & community apps",
    description:
      "People join, stick around, and bring friends. Built for engagement that compounds.",
  },
  {
    num: "16",
    title: "Automation & bots",
    description:
      "The tedious stuff runs itself. You focus on the work only you can do.",
  },
];

function ServiceRow({
  service,
  index,
  inView,
}: {
  service: (typeof services)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: 0.05 * index,
        ease: "easeOut",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border-b border-white/5 cursor-pointer"
    >
      <div
        className={`grid grid-cols-[32px_1fr_auto] md:grid-cols-[56px_1fr_320px_32px] items-center gap-4 md:gap-8 py-5 md:py-6 px-2 transition-all duration-300 ${
          hovered ? "translate-x-1.5" : ""
        }`}
      >
        <span className="text-[10px] font-mono text-white/20 tracking-widest">{service.num}</span>

        <h3
          className={`text-lg md:text-2xl font-black uppercase tracking-[-0.02em] transition-colors duration-300 ${
            hovered ? "text-[#14B8A6]" : "text-[#EFEFEE]"
          }`}
        >
          {service.title}
        </h3>

        <p className="hidden md:block text-sm text-white/35 leading-relaxed">
          {service.description}
        </p>

        <ArrowUpRight
          size={16}
          className={`flex-shrink-0 transition-all duration-300 ${
            hovered ? "text-[#14B8A6] translate-x-0.5 -translate-y-0.5" : "text-white/15"
          }`}
        />
      </div>
      {/* Mobile description */}
      <p className={`md:hidden text-xs text-white/35 leading-relaxed pb-4 px-2 pl-10 transition-all duration-300 ${hovered ? "text-white/55" : ""}`}>
        {service.description}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="bg-[#0A0A0B] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.3em] text-[#14B8A6] uppercase mb-3"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.07 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.92] tracking-[-0.03em] text-[#EFEFEE] mb-16"
        >
          What I /{" "}
          <span className="text-white/20">sell.</span>
        </motion.h2>

        {/* Service rows */}
        <div className="border-t border-white/5">
          {services.map((service, i) => (
            <ServiceRow
              key={service.num}
              service={service}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#14B8A6] text-[#0A0A0B] text-sm font-bold tracking-widest rounded-sm hover:bg-[#0d9488] transition-colors duration-300"
          >
            START A PROJECT
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
