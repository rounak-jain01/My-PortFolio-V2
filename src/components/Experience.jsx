import { motion } from "framer-motion";
import { Zap, Target, Layers } from "lucide-react";

const Experience = () => {
  return (
    <section className="relative w-full bg-[#030303] py-32 md:py-48 px-4 md:px-8 overflow-hidden font-sans" id="Experience">
      
      {/* --- 1. THE NEXT-LEVEL DYNAMIC BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        
        {/* A. Floating Aurora Orbs (Fluid Motion) */}
        <motion.div 
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-purple-900/20 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ x: [0, -150, 0], y: [0, 100, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-blue-900/15 blur-[120px] rounded-full mix-blend-screen" 
        />
        <motion.div 
          animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-600/10 blur-[150px] rounded-full mix-blend-screen" 
        />

        {/* B. Architectural Tech Grid (Faded at edges) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]"></div>

        {/* C. Sweeping Scanner Beam */}
        <motion.div 
          animate={{ y: ['-100%', '300%'] }} 
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
          className="absolute left-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent shadow-[0_0_30px_rgba(168,85,247,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 2. FLOATING HEADER --- */}
        <div className="mb-24 md:mb-32 flex justify-between items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
              <span className="text-purple-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                Career Timeline
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white tracking-tighter leading-[0.9]">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
                Experience.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* --- 3. THE "UNBOXED" SPATIAL LAYOUT --- */}
        <div className="relative w-full flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Massive Role Typography (Sticky on Desktop) */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-40 flex flex-col">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]"></span>
              </span>
              <span className="text-blue-400 font-mono text-xs md:text-sm tracking-widest uppercase">
                Presently Interning
              </span>
            </motion.div>

            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Product Management Intern
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold tracking-tight mb-8"
            >
              Zarthi Pvt. Ltd.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-2 border-l-2 border-white/10 pl-4 mt-4"
            >
              <p className="text-gray-400 font-mono text-sm uppercase tracking-wider">August 2025 — Present</p>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">Bengaluru, India / Full-Time + Remote</p>
            </motion.div>
          </div>

          {/* Right Column: Flowing Details */}
          <div className="w-full lg:w-[55%] flex flex-col gap-12 lg:pt-16">
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed"
            >
              Bridging the gap between product strategy and real-world execution. Currently driving market research across <span className="text-white font-medium drop-shadow-md">fintech and foreign exchange</span> domains and contributing to <span className="text-white font-medium drop-shadow-md">PRD documentation</span> as a Product Management Intern at Zarthi Pvt Ltd, Bengaluru.
            </motion.p>

            {/* <div className="flex flex-col gap-10">
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group flex gap-6 items-start"
              >
                <div className="mt-1 p-3 rounded-full bg-white/[0.03] text-purple-400 group-hover:text-white group-hover:bg-purple-500 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
                  <Layers size={20} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">Scalable Architecture</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Designing and implementing maintainable backend systems and responsive frontend components, drastically improving overall application load times.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group flex gap-6 items-start"
              >
                <div className="mt-1 p-3 rounded-full bg-white/[0.03] text-blue-400 group-hover:text-white group-hover:bg-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">AI & Data Pipelines</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Collaborating with senior engineers to optimize complex data pipelines and deploy intelligent, data-driven features onto modern cloud infrastructures.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex gap-6 items-start"
              >
                <div className="mt-1 p-3 rounded-full bg-white/[0.03] text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-white text-lg font-semibold mb-2">Cross-functional Impact</h4>
                  <p className="text-gray-400 leading-relaxed font-light">
                    Actively participating in agile sprints, code reviews, and system design discussions to ensure high-quality, production-ready code delivery.
                  </p>
                </div>
              </motion.div>

            </div> */}

            {/* Naked Tech Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-4 pt-6 border-t border-white/10"
            >
              {["Research", "Product Requirement Documents", "Creative Thinking"].map((tech) => (
                <span key={tech} className="text-sm font-mono font-bold tracking-wider text-white/800 hover:text-purple-400 transition-colors cursor-default drop-shadow-md">
                  #{tech}
                </span>
              ))}
            </motion.div>

          </div>

        </div>

        {/* --- MASSIVE BACKGROUND WATERMARK --- */}
        <div className="absolute top-[30%] -right-[10%] text-[20vw] font-black text-white/[0.08] pointer-events-none select-none z-0 transform rotate-90 lg:rotate-0 lg:top-auto lg:bottom-[-5%] lg:right-[5%]">
          INTERN
        </div>

      </div>
    </section>
  );
};

export default Experience;