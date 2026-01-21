import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import {Github, ArrowUpRight, Layers, Code, Globe } from "lucide-react";

// --- DATA ---
const heroProject = {
  id: "fasal",
  title: "Fasal Sarthi",
  category: "Flagship AI Project",
  desc: "Revolutionizing Agriculture with AI. Crop disease detection, yield prediction, and a direct marketplace for farmers. Bridging the gap between technology and the soil.",
  tags: ["Python", "TensorFlow", "React", "Cloud"],
  image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
  live: "#",
  github: "#"
};

const otherProjects = [
  {
    id: 1,
    title: "Eureka! Platform",
    desc: "Event management portal with live ticketing.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Firebase"],
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Crypto Tracker",
    desc: "Real-time dashboard for crypto analytics.",
    image: "https://images.unsplash.com/photo-1621504450162-115f20610475?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "API"],
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Art Gen",
    desc: "Text-to-image generator using Stable Diffusion.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop",
    tags: ["OpenAI", "React"],
    live: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Task Master",
    desc: "Kanban task manager for teams.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    tags: ["Redux", "Node"],
    live: "#",
    github: "#"
  }
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, 3);

  return (
    <SectionReveal title="PROJECTS" id="projects">
      <div className="bg-black min-h-screen pb-20 md:pb-32">
        
        {/* 1. THE KING (Bada aur Unqiue) */}
        <div className="px-4 md:px-12 max-w-7xl mx-auto pt-10 md:pt-20 mb-16 md:mb-40">
           <div className="flex items-center gap-3 mb-8">
             <div className="w-10 h-[2px] bg-purple-500"></div>
             <span className="text-purple-400 font-mono uppercase tracking-widest text-sm">Spotlight</span>
           </div>
           <Hero3DCard project={heroProject} />
        </div>

        {/* 2. THE GALLERY (Grid) */}
        <div className="px-4 md:px-12 max-w-7xl mx-auto">
           
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-white">Selected Works</h2>
           </div>

           {/* The Visual Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <AnimatePresence>
                {visibleProjects.map((project, index) => (
                    <CinematicCard key={project.id} project={project} index={index} />
                ))}
              </AnimatePresence>
           </div>

           {/* 3. SHOW MORE BUTTON */}
           {otherProjects.length > 3 && (
             <div className="flex justify-center mt-20">
                <button 
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all flex items-center gap-2"
                >
                    {showAll ? "Show Less" : "View All Works"}
                    <Layers size={16} />
                </button>
             </div>
           )}

        </div>

      </div>
    </SectionReveal>
  );
};


// --- COMPONENT 1: HERO 3D CARD (Revised for Mobile & Size) ---
const Hero3DCard = ({ project }) => {
  const ref = useRef(null);
  
  // 3D Tilt Logic (Only affects Desktop)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-full group">
        
        {/* DESKTOP STRUCTURE (3D Tilt) */}
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="hidden md:flex relative w-full min-h-[600px] rounded-[2.5rem] bg-neutral-900 border border-white/10 items-center justify-center overflow-hidden perspective-1000"
        >
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})`, transform: "translateZ(-50px)" }} 
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500" />

            {/* Floating Content */}
            <div className="relative z-20 text-center px-10 max-w-4xl" style={{ transform: "translateZ(60px)" }}>
                <div className="inline-block px-4 py-1.5 rounded-full bg-purple-600/90 text-white text-xs font-bold uppercase tracking-wider mb-6 shadow-lg">
                    {project.category}
                </div>
                <h1 className="text-6xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl">
                    {project.title}
                </h1>
                <p className="text-lg lg:text-xl text-neutral-100 mb-10 leading-relaxed font-medium drop-shadow-md">
                    {project.desc}
                </p>
                <div className="flex justify-center gap-4">
                    <a href={project.live} className="px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                        <Globe size={18} /> Live Demo
                    </a>
                    <a href={project.github} className="px-8 py-3 bg-black/60 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-black/80 transition-colors flex items-center gap-2">
                        <Github size={18} /> GitHub
                    </a>
                </div>
            </div>
        </motion.div>

        {/* MOBILE STRUCTURE (Stacked - No 3D to prevent bugs) */}
        <div className="md:hidden flex flex-col rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
             {/* Image on Top */}
             <div className="h-[200px] w-full relative">
                 <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                 <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase rounded-full">
                    {project.category}
                 </div>
             </div>
             {/* Text Below */}
             <div className="p-6">
                 <h2 className="text-4xl font-black text-white mb-3">{project.title}</h2>
                 <p className="text-neutral-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                 <div className="flex gap-3">
                    <a href={project.live} className="flex-1 py-3 bg-white text-black text-center font-bold rounded-xl text-sm">
                        Live Demo
                    </a>
                    <a href={project.github} className="flex-1 py-3 bg-neutral-800 text-white text-center font-bold rounded-xl text-sm border border-white/10">
                        Code
                    </a>
                 </div>
             </div>
        </div>

    </div>
  );
};


// --- COMPONENT 2: CINEMATIC CARD (Fixed Buttons & Mobile View) ---
const CinematicCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[400px] md:h-[450px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10"
    >
        {/* 1. Background Image */}
        <div className="absolute inset-0">
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 grayscale md:grayscale-0 md:group-hover:scale-110"
            />
            {/* Dark Overlay (Darker on Mobile for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-60 transition-all duration-500" />
        </div>

        {/* 2. Top Right Actions (Safe Position) */}
        {/* Mobile: Always visible. Desktop: Visible on Hover */}
        <div className="absolute top-4 right-4 flex gap-2 z-20 md:opacity-0 md:group-hover:opacity-100 md:translate-y-[-10px] md:group-hover:translate-y-0 transition-all duration-300">
             <a href={project.github} className="p-3 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors border border-white/20">
                <Code size={18} />
             </a>
             <a href={project.live} className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors shadow-lg">
                <ArrowUpRight size={18} />
             </a>
        </div>

        {/* 3. Content (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 transform md:translate-y-2 md:group-hover:translate-y-0 transition-transform duration-500">
            
            {/* Tags */}
            <div className="flex gap-2 mb-3">
                {project.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-black bg-white px-2 py-1 rounded">
                        {tag}
                    </span>
                ))}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                {project.title}
            </h3>
            
            {/* Description (Visible on Mobile, slides up on Desktop) */}
            <p className="text-sm text-neutral-300 md:text-neutral-400 line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.desc}
            </p>
        </div>

    </motion.div>
  );
};

export default Projects;