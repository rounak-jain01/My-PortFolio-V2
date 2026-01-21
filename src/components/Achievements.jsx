import React from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Trophy, Star, Crown, Target, Zap, Medal, Sparkles } from "lucide-react";

// --- DATA: ACHIEVEMENTS ---
// 'span' determines size: "md:col-span-2" (Wide), "md:row-span-2" (Tall), or "" (Square)
const achievements = [
  {
    id: 1,
    title: "HackMake 2026 Winner",
    org: "National Hackathon",
    desc: "Secured 1st rank among 500+ teams for building 'Fasal Sarthi'.",
    icon: <Trophy size={32} className="text-yellow-400" />,
    span: "md:col-span-2", // WIDE CARD
    bgGradient: "from-yellow-500/10 to-transparent",
    border: "group-hover:border-yellow-500/50",
  },
  {
    id: 2,
    title: "5 Star Coder",
    org: "HackerRank",
    desc: "Top 1% in Problem Solving & Python.",
    icon: <Star size={32} className="text-blue-400" />,
    span: "", // SQUARE CARD
    bgGradient: "from-blue-500/10 to-transparent",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: 3,
    title: "Head Boy",
    org: "Douglas School",
    desc: "Led the student council and organized annual events.",
    icon: <Crown size={32} className="text-purple-400" />,
    span: "md:row-span-2", // TALL CARD
    bgGradient: "from-purple-500/10 to-transparent",
    border: "group-hover:border-purple-500/50",
  },
  {
    id: 4,
    title: "Eureka! Organizer",
    org: "SISTec E-Cell",
    desc: "Managed a tech fest with 1000+ attendees.",
    icon: <Target size={32} className="text-red-400" />,
    span: "", // SQUARE CARD
    bgGradient: "from-red-500/10 to-transparent",
    border: "group-hover:border-red-500/50",
  },
  {
    id: 5,
    title: "Smart India Hackathon",
    org: "Finalist",
    desc: "Selected for the grand finale for AI innovation.",
    icon: <Zap size={32} className="text-cyan-400" />,
    span: "md:col-span-2", // WIDE CARD
    bgGradient: "from-cyan-500/10 to-transparent",
    border: "group-hover:border-cyan-500/50",
  },
  {
    id: 6,
    title: "CodeQuest Runner Up",
    org: "Coding Competition",
    desc: "Solved complex DSA problems under 2 hours.",
    icon: <Medal size={32} className="text-emerald-400" />,
    span: "", // SQUARE CARD
    bgGradient: "from-emerald-500/10 to-transparent",
    border: "group-hover:border-emerald-500/50",
  },
];

const Achievements = () => {
  return (
    <SectionReveal title="HONORS" id="achievements">
      <div className="min-h-screen py-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
        
        {/* HEADER */}
        <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-yellow-400" size={24} />
                <span className="text-yellow-400 font-mono text-sm uppercase tracking-widest">Hall of Fame</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
               Achievements & <br />
               <span className="text-neutral-500">Recognitions.</span>
            </h2>
        </div>

        {/* --- THE BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
           {achievements.map((item, index) => (
             <BentoCard key={item.id} item={item} index={index} />
           ))}
        </div>

      </div>
    </SectionReveal>
  );
};

// --- COMPONENT: BENTO CARD ---
const BentoCard = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-white/5 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${item.span} ${item.border}`}
    >
      
      {/* 1. Dynamic Background Gradient (Appears on Hover) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* 2. Floating Icon Background (Giant Faded Icon) */}
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-500 rotate-12">
        {React.cloneElement(item.icon, { size: 120 })}
      </div>

      {/* 3. Content */}
      <div className="relative z-10 h-full flex flex-col justify-between">
         
         {/* Top: Icon & Org */}
         <div className="flex justify-between items-start">
             <div className="p-3 bg-white/5 rounded-2xl border border-white/5 group-hover:bg-white/10 transition-colors shadow-lg">
                {item.icon}
             </div>
             <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-neutral-400">
                {item.org}
             </span>
         </div>

         {/* Bottom: Text Info */}
         <div>
            <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform">
                {item.title}
            </h3>
            <p className="text-sm text-neutral-400 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                {item.desc}
            </p>
         </div>

      </div>

      {/* 4. Shine Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700" />

    </motion.div>
  );
};

export default Achievements;