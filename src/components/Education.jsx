import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2, Milestone, Calendar, ArrowUpRight } from "lucide-react";

// Data ko array mein rakhna clean approach hai
const educationData = [
  {
    id: 1,
    period: "2023 — Present",
    status: "PURSUING",
    degree: "Bachelors of Technology",
    institute: "Sagar Group of Science and Technology",
    university: "Rajiv Gandhi Prodyogiki Vishwavidyalaya",
    stream: "Artificial Intelligence and Data Science",
    highlights: [
      "Current CGPA: 8.35",
      "AI & Web Tech Specialization"
    ],
    tags: ["Hackathons", "Open Source", "Research Papers", "Copyrights"],
    color: "blue",
    glow: "bg-blue-500/20",
    borderHover: "hover:border-blue-500/30",
    textHover: "group-hover:text-blue-300",
    iconColor: "text-blue-500",
  },
  {
    id: 2,
    period: "2022 — 2023",
    status: "COMPLETED",
    degree: "Higher Secondary",
    institute: "Douglas Higher Secondary School",
    university: "Science & Mathematics Stream",
    stream: "",
    highlights: [
      "Achieved 91% in Board Exams"
    ],
    tags: ["Head Boy", "PCM Focus"],
    color: "purple",
    glow: "bg-purple-500/20",
    borderHover: "hover:border-purple-500/30",
    textHover: "group-hover:text-purple-300",
    iconColor: "text-purple-500",
  }
];

const Education = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden font-sans" id="Education">
      
      {/* --- 1. PURE GRADIENT BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a103d_0%,#050505_80%)] opacity-60"></div>

        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [-30, 30, -30], y: [-20, 20, -20] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,rgba(168,85,247,0.25)_0%,rgba(236,72,153,0.15)_40%,transparent_70%)] blur-[120px] mix-blend-screen"
        ></motion.div>

        <motion.div
          animate={{ scale: [1.2, 1, 1.2], x: [30, -30, 30], y: [20, -20, 20] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle,rgba(59,130,246,0.25)_0%,rgba(6,182,212,0.15)_40%,transparent_70%)] blur-[120px] mix-blend-screen"
        ></motion.div>
      </div>


      <div className="max-w-[1000px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* --- 2. HEADER --- */}
        <div className="relative w-full flex items-center justify-center py-10 mb-16 md:mb-24">
          <h2 className="absolute text-[15vw] md:text-[13vw] font-black uppercase tracking-tighter text-transparent select-none opacity-30"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            EDUCATION
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Milestone size={14} className="text-purple-400" /> Academic Path
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500">Journey.</span>
            </h3>
          </motion.div>
        </div>


        {/* --- 3. ELEGANT VERTICAL TIMELINE --- */}
        <div className="relative w-full">
          
          {/* The Vertical Line (Desktop only, hidden on mobile for cleaner look) */}
          <div className="hidden md:block absolute left-[40px] top-[10px] bottom-[10px] w-[2px] bg-gradient-to-b from-blue-500/50 via-purple-500/30 to-transparent"></div>

          <div className="flex flex-col gap-16 md:gap-24">
            {educationData.map((edu, index) => (
              <motion.div 
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16 w-full group"
              >
                
                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex absolute left-[31px] top-[40px] w-5 h-5 rounded-full bg-[#050505] border-[3px] border-white z-20 items-center justify-center group-hover:scale-125 group-hover:border-blue-400 transition-all duration-300">
                  <div className={`w-1.5 h-1.5 rounded-full ${edu.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                </div>

                {/* Left Side: Period & Status (Takes up less space on desktop) */}
                <div className="md:w-[25%] flex flex-col items-start md:items-end text-left md:text-right pt-2 md:pt-8 md:pl-16">
                  <div className="flex items-center gap-2 text-gray-400 font-mono text-lg md:text-xl tracking-wider mb-3">
                    <Calendar size={18} className="md:hidden" />
                    {edu.period}
                  </div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-widest uppercase ${edu.iconColor}`}>
                    {edu.status === 'PURSUING' && <span className={`w-1.5 h-1.5 rounded-full ${edu.status === 'PURSUING' ? 'bg-blue-400 animate-pulse' : ''}`}></span>}
                    {edu.status}
                  </div>
                </div>

                {/* Right Side: Content Card */}
                <div className={`md:w-[75%] relative w-full rounded-[2.5rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 ${edu.borderHover}`}>
                  
                  {/* Subtle Background Glow inside the card */}
                  <div className={`absolute -right-20 -top-20 w-64 h-64 ${edu.glow} blur-[80px] rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="relative z-10 p-8 md:p-10">
                    
                    {/* Header */}
                    <div className="mb-6">
                      <h4 className={`text-2xl md:text-3xl font-bold text-white leading-tight mb-2 transition-colors ${edu.textHover}`}>
                        {edu.degree}
                      </h4>
                      <div className="flex items-start gap-3 text-lg md:text-xl text-gray-300 font-medium">
                        <GraduationCap size={24} className={`shrink-0 mt-0.5 ${edu.iconColor}`} />
                        <span>{edu.institute}</span>
                      </div>
                    </div>
                    
                    {/* Details */}
                    <div className="pl-0 md:pl-9 mb-8">
                      <p className="text-gray-500 text-sm md:text-base font-light mb-1">
                        {edu.university}
                      </p>
                      {edu.stream && (
                        <p className="text-gray-300 text-sm md:text-base italic">
                          {edu.stream}
                        </p>
                      )}
                    </div>

                    {/* Highlights (Checkmarks) */}
                    <div className="space-y-3 mb-8 pl-0 md:pl-9">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className={`flex items-center gap-3 text-sm text-gray-400 bg-white/[0.02] border border-white/5 p-4 rounded-2xl transition-colors ${edu.borderHover}`}>
                          <CheckCircle2 size={18} className={`shrink-0 ${edu.iconColor}`} />
                          <span className="font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pl-0 md:pl-9">
                      {edu.tags.map((tag, idx) => (
                        <span key={idx} className="px-4 py-2 rounded-xl bg-[#111] border border-white/5 text-gray-400 text-xs font-medium group-hover:bg-white/[0.04] transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;