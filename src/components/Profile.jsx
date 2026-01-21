import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, ArrowRight } from "lucide-react";
import Navbar from "./Navbar"; // Navbar ko yahan import kiya

const Profile = () => {
  return (
    <section id="home" className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* 1. Navbar add kar diya */}
      <Navbar />

      {/* 2. Background Effects (Neon Glows) */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-600/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 h-screen flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
        
        {/* LEFT SIDE: Text Content */}
        <div className="flex-1 text-center md:text-left pt-20 md:pt-0">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-block px-4 py-1 mb-4 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
              <span className="text-purple-400 text-sm font-medium tracking-wide">AVAILABLE FOR WORK</span>
            </div>

            {/* Killer Headline */}
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mb-6">
              I Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradient">
                Digital Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
              Hi, I'm <b className="text-white">User</b>. A 3rd Year Student combining 
              Business Logic with Modern Tech to solve real-world problems.
            </p>

            {/* Buttons Area */}
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group">
                See My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-4 justify-center">
                <SocialButton icon={<Github size={24} />} />
                <SocialButton icon={<Linkedin size={24} />} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT SIDE: Hero Image (Creative Style) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative w-full max-w-md"
        >
          {/* Decorative Ring behind image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          
          {/* Main Image Container */}
          <div className="relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
            <img 
              src="/public/Images/My photo.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 hover:scale-110"
            />
            
            {/* Overlay Info Card inside Image */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10 flex justify-between items-center">
               <div>
                 <p className="text-xs text-gray-400">Current Role</p>
                 <p className="text-sm font-bold text-white">Business Analyst Intern @ Zarthi</p>
               </div>
               <div className="h-2 w-2 bg-green-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

// Reusable Social Button
const SocialButton = ({ icon }) => (
  <button className="p-4 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
    {icon}
  </button>
);

export default Profile;