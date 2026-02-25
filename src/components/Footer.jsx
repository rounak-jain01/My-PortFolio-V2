import { motion } from "framer-motion";
import { ArrowUp, Heart, MapPin, Sparkles, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#050505] pt-20 pb-8 px-4 md:px-8 border-t border-white/5 overflow-hidden font-sans">
      
      {/* --- BACKGROUND GLOW & MASSIVE WATERMARK --- */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent blur-[120px] rounded-t-full pointer-events-none z-0"></div>
      
      {/* Massive Background Text */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="text-[25vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase">
          ROUNAK
        </h1>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* --- TOP SECTION: Links & Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand & Intro (Takes up half the space) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              {/* Pulsing Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-gray-400 text-xs font-mono uppercase tracking-widest">Available for new opportunities</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Rounak Jain
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-light max-w-md mb-8">
              A full-stack developer blending intelligent machine learning models with seamless web architectures to build the future.
            </p>

            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 text-sm">
              <MapPin size={16} className="text-purple-400" /> Bengaluru, India
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-2">Navigation</h3>
            {['Experience', 'Education', 'Projects', 'Credentials'].map((link) => (
              <a 
                key={link} 
                href={`#${link}`} 
                className="text-gray-400 hover:text-purple-400 transition-colors w-max relative group"
              >
                {link}
                {/* Minimalist Hover Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-semibold tracking-wider uppercase text-sm mb-2">Socials</h3>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors w-max">
              <Github size={18} /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors w-max">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-gray-200 transition-colors w-max">
              <Twitter size={18} /> Twitter / X
            </a>
          </div>

        </div>

        {/* --- BOTTOM SECTION: Copyright & Back to Top --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          
          {/* Copyright */}
          <div className="text-gray-500 text-xs md:text-sm font-mono tracking-wider text-center md:text-left">
            <p>© {new Date().getFullYear()} Rounak Jain. All rights reserved.</p>
            <p className="mt-1 flex items-center justify-center md:justify-start gap-1">
              Crafted with <Heart size={14} className="text-red-500 inline fill-red-500" /> & React
            </p>
          </div>

          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="font-semibold text-sm">Back to Top</span>
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <ArrowUp size={14} className="transform group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;