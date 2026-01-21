import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="h-screen w-full bg-black flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Background Glow Effect (Subtle) */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-4"
      >
        {/* Tumhara Naam */}
        <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-6">
          ROUNAK JAIN
        </h1>
        
        {/* One Liner */}
        <p className="text-xl md:text-2xl text-gray-400 font-light tracking-widest uppercase">
          Turning Logic into Magic
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Intro;