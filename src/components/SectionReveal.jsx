import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SectionReveal = ({ title, children, id }) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animation: Title thoda Zoom out hoga aur Fade hoga jaise content upar aayega
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]); // Thoda upar bhi jayega parallax feel ke liye

  return (
    <div ref={containerRef} id={id} className="relative w-full">
      {/* Note: Upar se bg-black hata diya */}

      {/* 1. STICKY TITLE */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden z-0">
        <motion.h2
          style={{ scale, opacity, y }}
          // Gradient Text ko thoda bright karo taaki dark bg par chamke
          className="text-[12vw] md:text-[15vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 uppercase drop-shadow-2xl"
        >
          {title}
        </motion.h2>
      </div>

      {/* 2. THE CONTENT */}
      {/* Yahan bg-black/80 use kiya taaki background thoda dikhe par content readable rahe */}
      <div className="relative z-10 bg-black/80 backdrop-blur-3xl min-h-screen rounded-t-[3rem] border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="py-20 px-6 md:px-12 max-w-7xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default SectionReveal;
