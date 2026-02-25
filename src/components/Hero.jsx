import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden isolate px-4" id="Home">
      
      {/* --- 1. NEW MINIMAL BACKGROUND --- */}
      {/* Grid hata diya. Ab sirf ek bohot deep, subtle radial gradient hai depth ke liye */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#131313_0%,_#050505_100%)] pointer-events-none z-0"></div>


      {/* --- 2. THE MAIN CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Main Name Text - With Flowing Colorful Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            // Background position animation for the color flow
            backgroundPosition: ["0% center", "200% center"] 
          }}
          transition={{ 
            // Reveal transition
            opacity: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            // Continuous colorful flow transition
            backgroundPosition: { duration: 10, repeat: Infinity, ease: "linear" }
          }}
          // New colorful gradient mixture
          className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 via-fuchsia-500 to-teal-400 text-center leading-none pb-2"
          // Background size badha diya taaki colors smoothly flow karein
          style={{ backgroundSize: "300% auto" }}
        >
          ROUNAK JAIN
        </motion.h1>

        {/* Tagline (kept clean and gray to balance the colorful name) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-gray-400 font-light tracking-[0.3em] md:tracking-[0.5em] uppercase text-center"
        >
          Building Intelligent Web Experiences
        </motion.p>

      </div>


      {/* --- 3. CLASSY SCROLL ANIMATION (Same as before) --- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[9px] md:text-[10px] text-gray-600 font-mono uppercase tracking-[0.3em]">
          Scroll
        </span>
        
        <div className="w-[1px] h-16 md:h-20 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;