import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const purpleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 1, 0]);
  const blueOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);
  const roseOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 1, 1]);

  // --- 1. DATA ARRAY UPDATED ---
  // Yahan 'source' add kar diya hai aur 'photo' ka path set kar diya hai
  const projectsData = [
    {
      id: "01",
      title: "Fasal Sarthi",
      subtitle: "AI/ML Agricultural Intelligence",
      desc: "An intelligent platform leveraging Machine Learning algorithms to analyze crop data and provide predictive insights. Built with a robust MERN backend to ensure real-time data processing.",
      tech: ["React.js", "Python", "EfficientNet-B3", "Supabase", "APIs"],
      imageGlow: "group-hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] border-purple-500/20",
      overlay: "from-purple-900/40 to-transparent",
      accent: "text-purple-400",
      preview: "https://fasal-sarthi-app.vercel.app/",
      source: "https://github.com/rounak-jain01/fasal-sarthi-app", // Apna source code link daalo
      photo: "/images/fasal_sarthi.png" // Make sure to use absolute path starting with /
    },
    {
      id: "02",
      title: "AI Prompt Combat",
      subtitle: "High-Scale GenAI Event Architecture",
      desc: "Engineered the complete technical infrastructure for a high-scale GenAI event hosting complex Text-to-Text challenges, handling concurrent users with optimized backend.",
      tech: ["React.js", "Python", "Flask", "REST APIs", "Tailwind"],
      imageGlow: "group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)] border-blue-500/20",
      overlay: "from-blue-900/40 to-transparent",
      accent: "text-blue-400",
      preview: "https://ai-prompt-sistec-hbir.vercel.app/",
      source: "https://github.com/rounak-jain01/AI-Prompt-Combat", // Replace with actual link
      photo: "/images/ai_prompt.png" // Make sure this image exists in public/images/
    },
  ];

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 font-sans" id="Projects">
      
      {/* --- SCROLL-LINKED DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] z-10"></div>

        <motion.div style={{ opacity: purpleOpacity }} className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_20%,rgba(168,85,247,0.15),transparent_50%)] transition-opacity duration-300"></motion.div>
        <motion.div style={{ opacity: blueOpacity }} className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_50%,rgba(59,130,246,0.15),transparent_50%)] transition-opacity duration-300"></motion.div>
        <motion.div style={{ opacity: roseOpacity }} className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_80%,rgba(225,29,72,0.15),transparent_50%)] transition-opacity duration-300"></motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* --- HEADER --- */}
        <div className="relative w-full flex items-center justify-center py-8 mb-16 md:mb-24">
          <h2 className="absolute text-[16vw] md:text-[14vw] font-black uppercase tracking-tighter text-transparent select-none opacity-20"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            PROJECTS
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md">
              <Sparkles size={12} className="text-white" /> Selected Works
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              Featured <span className="text-gray-500 font-light">Builds.</span>
            </h3>
          </motion.div>
        </div>

        {/* --- THE COMPACT EDITORIAL GRID --- */}
        <div className="w-full flex flex-col gap-24 md:gap-32 pb-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center group`}
              >
                
                {/* --- Text Content --- */}
                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  
                  <div className="flex items-end gap-4 mb-4">
                    <span className={`text-5xl md:text-7xl font-black ${project.accent} opacity-40 leading-none tracking-tighter`}>
                      {project.id}
                    </span>
                    <div className="h-[2px] w-16 bg-white/10 mb-3"></div>
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight leading-[1.1]">
                    {project.title}
                  </h4>
                  
                  <h5 className="text-lg md:text-xl text-gray-400 font-medium mb-6">
                    {project.subtitle}
                  </h5>
                  
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase">
                        // {tech}
                      </span>
                    ))}
                  </div>

                  {/* --- 2. DYNAMIC LINKS --- */}
                  <div className="flex items-center gap-8">
                    <a href={project.preview} target="_blank" rel="noreferrer" className={`group/link flex items-center gap-2 ${project.accent} hover:text-white transition-colors font-medium text-base md:text-lg`}>
                      <ExternalLink size={20} /> 
                      <span className="border-b border-transparent group-hover/link:border-white transition-colors pb-0.5">Live Site</span>
                    </a>
                    {/* Source code link ab dynamically map ho raha hai */}
                    <a href={project.source} target="_blank" rel="noreferrer" className="group/link flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium text-base md:text-lg">
                      <Github size={20} /> 
                      <span className="border-b border-transparent group-hover/link:border-white transition-colors pb-0.5">Source</span>
                    </a>
                  </div>
                </div>

                {/* --- 3. DYNAMIC IMAGE RENDERING --- */}
                <div className="w-full lg:w-[55%] flex justify-center">
                  <div className={`relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-700 ${project.imageGlow}`}>
                    
                    {/* Actual Project Image */}
                    <img 
                      src={project.photo} 
                      alt={project.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    
                    {/* Dark gradient overlay for smooth blend */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${project.overlay} opacity-100 group-hover:opacity-0 transition-opacity duration-700 mix-blend-overlay`}></div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>


        {/* --- THE VAULT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl flex flex-col mt-10 border-t border-white/10 pt-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Project Archive</h3>
            <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Other Notable Works</p>
          </div>
          
          <div className="flex flex-col w-full">
            
            {/* 1. TABLE HEADER (Fixed) */}
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-mono tracking-widest text-gray-500 uppercase">
              <div className="col-span-5">Project</div>
              <div className="col-span-5">Built With</div>
              <div className="col-span-2 text-right">Year</div>
            </div>
            
            {/* 2. SCROLLABLE LIST CONTAINER (With Mask-Image Fade & New Scrollbar) */}
            <div className="relative w-full">
              <div 
                onWheel={(e) => e.stopPropagation()}
                // 1. NEW SCROLLBAR: Sleek, thin 4px width, distinct dark track, bright thumb on hover
                // 2. NATIVE FADE MASK: Text naturally fades into transparency at the bottom, syncing with ANY dynamic background!
                className="flex flex-col h-[400px] overflow-y-auto overscroll-contain pr-4 pt-2 pb-12 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/[0.02] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/10 hover:[&::-webkit-scrollbar-thumb]:bg-white/30 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors [mask-image:linear-gradient(to_bottom,white_80%,transparent_100%)]"
              >
                {[
                  { name: "Bank Management System", tech: "Python", year: "2026" },
                  { name: "Portfolio v1", tech: "HTML, CSS, JS", year: "2025" },
                  { name: "Swiggy Clone", tech: "React", year: "2025" },
                  { name: "IPL Web App", tech: "MERN Stack, Redux", year: "2025" },
                  { name: "Weather App", tech: "React, OpenWeatherAPI", year: "2025" },
                  { name: "Emoji Generator", tech: "React", year: "2025" },
                  { name: "Bus Ticket Booking App", tech: "C++", year: "2024" },
                ].map((item, index) => (
                  <a href="https://github.com/rounak-jain01?tab=repositories" target="_blank" rel="noreferrer" key={index} className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-4 px-4 rounded-xl items-center shrink-0">
                    <div className="md:col-span-5 flex items-center gap-4">
                      <h4 className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors">{item.name}</h4>
                    </div>
                    <div className="md:col-span-5">
                      <span className="text-sm text-gray-500 font-light group-hover:text-gray-400 transition-colors">{item.tech}</span>
                    </div>
                    <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-6 mt-2 md:mt-0">
                      <span className="text-sm font-mono text-gray-600 group-hover:text-gray-400 transition-colors">{item.year}</span>
                      <ArrowRight size={18} className="text-gray-600 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Note: Purana solid black bottom-fade div yahan se hata diya gaya है */}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;