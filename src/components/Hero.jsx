import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background: Dheere chalega (0% se 50% neeche) -> Creates depth
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Text: Tezi se UPAR jayega (0% se -150% upar) -> Exits fast
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-150%"]);

  return (
    <div
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-black grid place-items-center"
    >
      {/* Background Layer */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div
          className="w-full h-full bg-cover bg-center opacity-50"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop)", // Better dark abstract image
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </motion.div>

      {/* Text Layer */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-bold text-white tracking-tighter mb-4"
        >
          CREATIVE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
             DEVELOPER
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 text-xl md:text-2xl mt-8"
        >
          Building aesthetics with logic.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;