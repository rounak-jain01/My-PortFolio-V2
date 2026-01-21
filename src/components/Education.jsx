import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { GraduationCap, School, BookOpen, Award, Calendar, Cpu } from "lucide-react";

// DATA
const educationData = [
  {
    id: 1,
    title: "Bachelor of Technology",
    institution: "Sagar Institute of Science and Technology",
    date: "2023 - Present",
    icon: <GraduationCap size={32} />,
    details: [
      { icon: <BookOpen size={16} />, text: "Computer Science & Engineering" },
      { icon: <Cpu size={16} />, text: "Specialization in AI & ML" },
      { icon: <Award size={16} />, text: "CGPA: 8.29/10" },
    ],
    tags: ["Data Structures", "Algorithms", "Database Systems", "AI/ML"],
    side: "right",
  },
  {
    id: 2,
    title: "Higher Secondary (12th)",
    institution: "Douglas Higher Secondary School",
    date: "2022 - 2023",
    icon: <School size={32} />,
    details: [
      { icon: <BookOpen size={16} />, text: "Science and Mathematics" },
      { icon: <Award size={16} />, text: "Percentage: 91%" },
    ],
    tags: ["Head Boy", "Perfect Attendance", "Physics", "Maths"],
    side: "left",
  },
];

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Path Animation
  const pathLength = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <SectionReveal title="EDUCATION" id="education">
      <div ref={containerRef} className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto min-h-[1000px]">
        
        {/* 1. THE GLOWING PATH (Background SVG) */}
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 1200" fill="none" className="absolute top-0 w-full h-full">
            <motion.path
              d="M400 0 V 200 C 400 300, 200 300, 200 450 V 600 C 200 750, 600 750, 600 900 V 1200"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              strokeLinecap="round"
              style={{ pathLength }}
              className="opacity-50"
            />
            <defs>
              <linearGradient id="paint0_linear" x1="400" y1="0" x2="400" y2="1200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ef4444" stopOpacity="0" />
                <stop offset="0.5" stopColor="#a855f7" />
                <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* 2. CENTRAL CORE (The Journey Start) */}
        <div className="relative z-10 flex justify-center mb-32">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
            >
                <div className="absolute inset-0 rounded-full bg-red-500/20 blur-[60px] animate-pulse" />
                <div className="absolute -inset-4 rounded-full border border-red-500/30 opacity-50 animate-[spin_10s_linear_infinite]" />
                
                <div className="w-32 h-32 bg-neutral-900/80 backdrop-blur-md border border-red-500/50 rounded-full flex flex-col items-center justify-center relative z-10 shadow-[0_0_30px_rgba(239,68,68,0.3)]">
                    <Calendar size={32} className="text-red-400 mb-1" />
                    <span className="text-white font-bold tracking-wider text-sm">MY JOURNEY</span>
                </div>
            </motion.div>
        </div>

        {/* 3. TIMELINE ITEMS */}
        <div className="relative z-10 flex flex-col gap-32">
          {educationData.map((item, index) => (
            <TimelineItem key={item.id} data={item} index={index} />
          ))}
        </div>

      </div>
    </SectionReveal>
  );
};

// CARD COMPONENT
const TimelineItem = ({ data, index }) => {
  const isRight = data.side === "right";

  return (
    <div className={`flex flex-col md:flex-row items-center justify-center w-full mb-12 md:mb-0 ${isRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* CARD */}
      <motion.div
        // Animations reset for mobile comfort
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        // CHANGE 2: Width full on mobile, 45% on desktop
        className={`w-full md:w-[45%] p-6 md:p-8 rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 relative ${isRight ? 'md:mr-auto' : 'md:ml-auto'}`}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        <div className="relative z-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
               {/* ... Icon and Title ... */}
               <div className="flex items-center gap-4">
                   <div className="p-3 md:p-4 rounded-2xl bg-red-500/10 text-red-400">
                       {data.icon}
                   </div>
                   <div>
                       <h3 className="text-xl md:text-2xl font-bold text-white">{data.title}</h3>
                       <p className="text-red-200/60 text-sm">{data.institution}</p>
                   </div>
               </div>
               {/* Date Badge */}
               <span className="self-start md:self-auto px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-400 border border-white/5">
                   {data.date}
               </span>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
                {data.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-neutral-300">
                        <span className="text-red-400/70">{detail.icon}</span>
                        <span className="text-sm font-light">{detail.text}</span>
                    </div>
                ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
                {data.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-neutral-800 text-[10px] uppercase tracking-wider text-neutral-400 border border-white/5 group-hover:border-red-500/20 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

      </motion.div>
      
      {/* CONNECTOR DOT */}
      <div className={`hidden md:flex w-[10%] justify-center items-center relative ${isRight ? 'order-first' : ''}`}>
         <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-10"
         >
            <div className="w-4 h-4 rounded-full bg-neutral-900 border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
         </motion.div>
         {/* Line */}
         <div className={`absolute h-[1px] bg-red-500/50 w-full top-1/2 -translate-y-1/2 ${isRight ? 'right-1/2' : 'left-1/2'}`} />
      </div>

    </div>
  );
};

export default Education;