import React from "react";
import SectionReveal from "./SectionReveal";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <SectionReveal title="ABOUT ME" id="about">
      
      {/* Container: Same width logic as Skills & Projects */}
      <div className="w-full relative py-10 md:py-20">
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* 1. HERO TEXT SECTION */}
          <div className="mb-20 border-b border-white/10 pb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-purple-500 font-mono text-sm tracking-[0.2em] mb-6 uppercase"
            >
              (01) — The Profile
            </motion.h2>

            <motion.h1 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.1 }}
               className="text-4xl md:text-7xl font-medium leading-[1.1] tracking-tight text-white"
            >
              I BRIDGE THE GAP <br />
              BETWEEN <span className="text-neutral-500">LOGIC</span> <br />
              AND <span className="text-purple-400 font-serif italic">CREATIVITY.</span>
            </motion.h1>
          </div>

          {/* 2. GRID CONTENT (Full Width Layout) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
              
              {/* LEFT COL: Bio & Context */}
              <div className="md:col-span-7 space-y-8">
                <p className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed">
                  I am a <strong className="text-white font-semibold">Business Analyst Intern</strong> at <span className="border-b border-white/20 pb-0.5">Zarthi</span> and a final-year Computer Science student at <span className="border-b border-white/20 pb-0.5">Sagar Institute</span>.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  My strength lies in translating chaotic business requirements into structured, high-performance code. 
                  Whether it's building AI models for farmers or organizing tech events, I focus on <span className="text-white">Impact</span> over hype.
                </p>

                {/* Signature / Status */}
                <div className="flex items-center gap-4 pt-6">
                   <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Open to Work</span>
                   </div>
                </div>
              </div>
              
              {/* RIGHT COL: Quick Stats & Contact */}
              <div className="md:col-span-5 flex flex-col justify-between space-y-12">
                 
                 {/* Stats Grid */}
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <h3 className="text-4xl font-bold text-white mb-1">05+</h3>
                       <p className="text-sm text-neutral-500 uppercase tracking-wider">Projects Shipped</p>
                    </div>
                    <div>
                       <h3 className="text-4xl font-bold text-white mb-1">8.29</h3>
                       <p className="text-sm text-neutral-500 uppercase tracking-wider">CGPA</p>
                    </div>
                    <div>
                       <h3 className="text-4xl font-bold text-white mb-1">03+</h3>
                       <p className="text-sm text-neutral-500 uppercase tracking-wider">Hackathons</p>
                    </div>
                    <div>
                       <h3 className="text-4xl font-bold text-white mb-1">100%</h3>
                       <p className="text-sm text-neutral-500 uppercase tracking-wider">Commitment</p>
                    </div>
                 </div>

                 {/* Action Buttons */}
                 <div className="flex flex-col gap-4">
                    <a href="mailto:rounakjain049@gmail.com" className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                       <div className="flex items-center gap-3">
                          <Mail size={20} className="text-purple-400" />
                          <span className="text-neutral-300 text-sm">rounakjain049@gmail.com</span>
                       </div>
                       <ArrowUpRight size={18} className="text-neutral-500 group-hover:text-white transition-colors" />
                    </a>

                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
                           <Download size={18} /> Resume
                        </button>
                        <div className="flex items-center justify-center px-6 rounded-xl border border-white/10 text-neutral-400">
                           <MapPin size={20} />
                        </div>
                    </div>
                 </div>

              </div>

          </div>

        </div>
      </div>
    </SectionReveal>
  );
};

export default About;