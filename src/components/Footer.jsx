import React from "react";
import { ArrowUp, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black pt-20 pb-10 overflow-hidden">
        
        {/* 1. MASSIVE BACKGROUND WATERMARK */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
            <h1 className="text-[15vw] md:text-[20vw] font-black text-white/[0.02] tracking-tighter leading-none whitespace-nowrap">
                ROUNAK JAIN
            </h1>
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto">
            
            {/* Top Row: Call to Action */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-10">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">
                        Have an idea?
                    </h2>
                    <a href="mailto:rounakjain049@gmail.com" className="text-2xl md:text-3xl text-neutral-400 hover:text-white border-b border-neutral-700 hover:border-white transition-colors pb-1">
                        Let's build it together.
                    </a>
                </div>

                <button 
                    onClick={scrollToTop}
                    className="group p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black transition-all duration-300"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            <div className="w-full h-[1px] bg-white/10 mb-10" />

            {/* Bottom Row: Links & Copyright */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4">
                
                {/* Brand */}
                <div className="md:col-span-2">
                    <span className="text-2xl font-bold text-white tracking-tight">RJ.</span>
                    <p className="text-neutral-500 mt-4 max-w-xs text-sm">
                        Building digital experiences that blend logic with creativity. 
                        Focused on impact, performance, and aesthetics.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Sitemap</h4>
                    <ul className="space-y-2 text-sm text-neutral-400">
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-white transition-colors">Work</a></li>
                        <li><a href="#certificates" className="hover:text-white transition-colors">Certifications</a></li>
                        <li><a href="#achievements" className="hover:text-white transition-colors">Honors</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Socials</h4>
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={<Github size={18} />} />
                        <SocialLink href="#" icon={<Linkedin size={18} />} />
                        <SocialLink href="#" icon={<Twitter size={18} />} />
                        <SocialLink href="#" icon={<Instagram size={18} />} />
                    </div>
                </div>

            </div>

            {/* Footer Bottom Line */}
            <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 gap-4">
                <p>&copy; {new Date().getFullYear()} Rounak Jain. All rights reserved.</p>
                <p>Designed & Built with ❤️ in India.</p>
            </div>

        </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }) => (
    <a 
        href={href} 
        className="p-2 bg-white/5 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-all border border-white/5"
    >
        {icon}
    </a>
);

export default Footer;