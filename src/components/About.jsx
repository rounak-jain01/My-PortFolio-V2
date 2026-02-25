import { motion } from "framer-motion";
import { User, Code2, BrainCircuit, Coffee, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden font-sans" id="About">
      
      {/* --- AMBIENT BACKGROUND GLOWS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        {/* Minimal grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* --- 1. THE MASSIVE HEADER --- */}
        <div className="relative w-full flex items-center justify-center py-8 mb-16 md:mb-24">
          <h2 className="absolute text-[16vw] md:text-[14vw] font-black uppercase tracking-tighter text-transparent select-none opacity-20"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            ABOUT ME
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md">
              <User size={14} className="text-purple-400" /> Identity
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              Behind the <span className="text-gray-500 font-light">Code.</span>
            </h3>
          </motion.div>
        </div>


        {/* --- 2. THE IDENTITY BENTO GRID --- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
          {/* BOX 1: The Portrait / Avatar (Col span 4) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 lg:col-span-4 relative rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 overflow-hidden shadow-2xl group aspect-square md:aspect-auto"
          >
            {/* Placeholder for your actual photo */}
            <div className="absolute inset-0 bg-[#111] flex items-center justify-center">
               <img  src="images/My_Photo.jpeg" className="absolute inset-0 opacity-50 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.05)_10px,rgba(255,255,255,0.05)_20px)]"></img>
               {/* Replace this div with an <img src="your-photo.jpg" /> later */}
               
            </div>
            {/* Soft gradient overlay so it blends with the dark theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
          </motion.div>

          {/* BOX 2: The Main Narrative (Col span 8) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-7 lg:col-span-8 flex flex-col justify-center p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-xl group hover:border-purple-500/30 transition-colors duration-500"
          >
            <div className="flex items-center gap-4 mb-6">
               <div className="h-[1px] w-12 bg-purple-500"></div>
               <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] text-purple-400 font-semibold">
                 My Story
               </h3>
            </div>
            
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Hi, I'm Rounak Jain. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 font-light">
                Developer, Innovator, & Problem Solver.
              </span>
            </h4>
            
            <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
              <p>
               As a Engineering Student I deeply immersed in the world of modern web and Artificial Intelligence, my journey is driven by an obsession with building systems that are not just visually stunning, but truly intelligent.
              </p>
              <p>
                I thrive at the intersection of engineering and innovation. Whether I'm architecting scalable MERN applications or training Deep Learning models with 97% accuracy, my ultimate goal is to bridge the gap between complex technical systems and seamless user experiences.
              </p>
            </div>
          </motion.div>


          {/* BOX 3: The Philosophy (Col span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 lg:col-span-7 p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-white/5 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500"
          >
            {/* Subtle internal glow */}
            <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8">
                <BrainCircuit size={24} />
              </div>
              
              <div>
                <h4 className="text-2xl font-bold text-white mb-3">Core Philosophy</h4>
                <p className="text-gray-400 font-light leading-relaxed">
                  "Code is meant to be read by humans and executed by machines." I believe in writing clean, maintainable architecture. A great product isn't just about the features it has, but how intuitively a user can interact with them.
                </p>
              </div>
            </div>
          </motion.div>


          {/* BOX 4: Current Focus / Beyond the screen (Col span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 lg:col-span-5 flex flex-col gap-6"
          >
            
            {/* Mini Box A: Current Obsession */}
            <div className="flex-1 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 shadow-xl flex flex-col justify-center group hover:border-white/10 transition-colors duration-300 relative overflow-hidden">
               <div className="absolute right-0 top-0 w-32 h-32 bg-white/[0.02] rounded-bl-full pointer-events-none"></div>
               <div className="flex items-center gap-4 mb-4">
                 <Sparkles size={20} className="text-purple-400" />
                 <h4 className="text-lg font-bold text-white">Current Focus</h4>
               </div>
               <p className="text-gray-400 text-sm font-light leading-relaxed">
                 Deep diving into Generative AI architectures, exploring Web3 concepts, and building microservices for high-traffic applications.
               </p>
            </div>

            {/* Mini Box B: Beyond Code */}
            <div className="flex-1 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 shadow-xl flex flex-col justify-center group hover:border-white/10 transition-colors duration-300 relative">
               <div className="flex items-center gap-4 mb-4">
                 <Coffee size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                 <h4 className="text-lg font-bold text-white">Beyond the Screen</h4>
               </div>
               <p className="text-gray-400 text-sm font-light leading-relaxed">
                 When I'm not pushing code to GitHub, you'll find me brainstorming at hackathons, participating in tech communities, or hunting for the perfect cup of coffee.
               </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;