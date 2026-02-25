import { useRef, useState } from "react"; // useState add kiya
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"; // AnimatePresence add kiya
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, ArrowUpRight, Instagram } from 'lucide-react';

const Detail = () => {
  const containerRef = useRef(null);
  // --- NEW: Image container ke liye ref taki coordinates nikal sakein ---
  const imageContainerRef = useRef(null);
  
  // --- NEW: State to store mouse entry coordinates ---
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // --- NEW: State to track hover status ---
  const [isHovering, setIsHovering] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax Values
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  // --- NEW: Mouse Enter Handler to capture coordinates ---
  const handleMouseEnter = (e) => {
    if (!imageContainerRef.current) return;
    
    // Get the bounding rectangle of the image container
    const rect = imageContainerRef.current.getBoundingClientRect();
    
    // Calculate X and Y relative to the container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsHovering(true);
  };

  // --- NEW: Mouse Leave Handler ---
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Optional: Reset position if you want the effect to always start from center next time
    // setMousePosition({ x: rect.width / 2, y: rect.height / 2 }); 
  };


  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen w-full bg-[#050505] flex items-center justify-center py-24 overflow-hidden" 
      id="Detail"
    >
      {/* --- ARCHITECTURAL BACKGROUND LINES (Same as before) --- */}
      <div className="absolute inset-0 flex justify-evenly pointer-events-none opacity-20 z-0">
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Massive Background Scrolling Text (Same as before) */}
      <motion.div 
        style={{ x: bgTextX }}
        className="absolute top-[20%] left-0 text-[15vw] font-black text-white/[0.1] whitespace-nowrap pointer-events-none select-none z-0"
      >
        ROUNAK JAIN • ROUNAK JAIN • ROUNAK JAIN
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
        
        {/* --- LEFT: IMMERSIVE PHOTO WITH RADIAL REVEAL EFFECT --- */}
        <motion.div 
          ref={imageContainerRef} // Attach Ref here
          style={{ y: imageY }}
          className="w-full lg:w-[45%] h-[500px] lg:h-[700px] rounded-[2rem] overflow-hidden relative z-10 group"
          // Attach Event Handlers
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Subtle glow behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 blur-[120px] -z-10 rounded-full"></div>
          
          {/* --- IMAGE LAYER 1: The Grayscale Base Image (Always visible) --- */}
          <img 
            src="images/My_Photo.jpeg" 
            alt="Rounak Jain Grayscale" 
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale z-0"
          />

          {/* --- IMAGE LAYER 2: The Color Image with Radial Mask --- */}
          {/* Framer Motion ka use karke mask ko animate karenge */}
          <motion.img 
            src="images/My_Photo.jpeg" 
            alt="Rounak Jain Color" 
            className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out z-10"
            initial={false}
            animate={{
              // WebkitMaskImage is essential for Chrome/Safari support
              WebkitMaskImage: isHovering 
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 150%, transparent 150%)` // Hover state: Mask expand ho jata hai
                : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 0%)`,   // Initial state: Mask 0% hai (hidden)
              maskImage: isHovering 
                ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 150%, transparent 150%)`
                : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 0%)`
            }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} // Smooth Apple-like easing
          />

          {/* Extremely thin inner border for sharpness */}
          <div className="absolute inset-0 border border-white/5 rounded-[2rem] pointer-events-none z-20"></div>
        </motion.div>

        {/* --- RIGHT: UNBOXED, FLOATING TYPOGRAPHY (No Changes Here) --- */}
        <motion.div 
          style={{ y: textY }}
          className="w-full lg:w-[50%] flex flex-col justify-center z-20"
        >
          {/* ... (Baaki ka pura text content same hai) ... */}
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-purple-500"></div>
             <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-purple-400 font-semibold">
               The Architect
             </h2>
             
          </div>
          <h2 className="text-sm md:text-2xl uppercase tracking-[0.4em] text-purple-400 font-semibold">
               Hi...
             </h2>
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Rounak Jain.</span>
          </h3>

          {/* Color-popping Typewriter */}
          <div className="text-xl md:text-3xl font-light text-gray-300 mb-8 h-8 md:h-10 flex items-center">
            <span>I build&nbsp;</span>
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              <Typewriter
                words={['Intelligent Apps.', 'ML Models.', 'Websites.', 'PRDs.']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </span>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light mb-12 max-w-xl">
            By fusing the raw speed of the <b className="text-white">MERN stack</b> with the intelligence of <b className="text-white">Machine Learning</b> and <b className="text-white">Deep Learning,</b> I don't just build web apps. &nbsp; I build systems that think. From training models with <b className="text-white">97%</b> accuracy to architecting full-stack platforms that scale to hundreds of users, I turn complex problems into clean, smart digital solutions.
          </p>

          {/* --- ACTION AREA --- */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            
            {/* Minimalist Fill Button */}
            <a 
              href="files/My Resume Online.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">View Resume</span>
              <ArrowUpRight size={18} strokeWidth={3} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
            </a>

            {/* Float-up Social Icons */}
            <div className="flex items-center gap-6">
              <a href="https://github.com/rounak-jain01/" className="text-gray-500 hover:text-white transition-all duration-300 hover:-translate-y-1 transform">
                <Github size={26} />
              </a>
              <a href="https://www.linkedin.com/in/imrounakjain/" target="_blank" className="text-gray-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1 transform">
                <Linkedin size={26} />
              </a>
              <a href="https://www.instagram.com/rounak_jain_01/"   className="text-gray-500 hover:text-red-400 transition-all duration-300 hover:-translate-y-1 transform">
                <Instagram size={26} />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Detail;