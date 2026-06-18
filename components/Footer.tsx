"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded-sm bg-[#14B8A6] flex items-center justify-center">
                <span className="text-[#0A0A0B] font-black text-xs">P</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-[#EFEFEE]">
                Prince Kommina.
              </span>
            </div>
            <p className="text-xs text-white/25 tracking-widest">
              © 2026 · Built in Bengaluru
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="mailto:princekommina42@gmail.com"
              className="text-xs tracking-widest text-white/40 hover:text-[#14B8A6] transition-colors duration-200 uppercase"
            >
              Email
            </a>
            <a
              href="https://github.com/Prince95187"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-white/40 hover:text-[#14B8A6] transition-colors duration-200 uppercase"
            >
              GitHub
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01c6341fd6637e46dc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest text-white/40 hover:text-[#14B8A6] transition-colors duration-200 uppercase"
            >
              Upwork
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs tracking-widest text-white/40 hover:text-[#14B8A6] transition-colors duration-200 uppercase"
            >
              Back to top
              <ArrowUp size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
