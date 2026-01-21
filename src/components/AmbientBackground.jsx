import React from "react";
import { motion } from "framer-motion";

const AmbientBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden bg-black pointer-events-none">
      
      {/* 1. Base Gradient (Deep Space Blue/Purple - Not Pitch Black) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-purple-950/20" />

      {/* 2. BRIGHTER MOVING LIGHTS */}
      
      {/* Top Left - Intense Purple */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3], // Opacity badhayi
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/30 blur-[100px]"
      />

      {/* Bottom Right - Intense Cyan */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -50, 0],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute -bottom-[10%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/20 blur-[100px]"
      />

      {/* Center Floating Orb - Pink/Red Accent */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [-20, 20, -20],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-rose-600/10 blur-[120px]"
      />

      {/* 3. NOISE TEXTURE (Thoda strong kiya taaki grainy film look aaye) */}
      <div className="absolute inset-0 opacity-[0.07] z-50 mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

    </div>
  );
};

export default AmbientBackground;