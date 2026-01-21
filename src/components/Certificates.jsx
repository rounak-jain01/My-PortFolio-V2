import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Award, Eye, X, Download, ShieldCheck } from "lucide-react";

// --- DATA ---
const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4120b?q=80&w=1000&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "Google UX Design Professional",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Meta Frontend Developer",
    issuer: "Meta",
    image: "https://images.unsplash.com/photo-1516259762381-229ce6209364?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Advanced React Patterns",
    issuer: "EpicWeb",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Data Science Specialization",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Cybersecurity Analyst",
    issuer: "Microsoft",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <SectionReveal title="CERTIFICATES" id="certificates">
      <div className="min-h-[80vh] flex flex-col justify-center py-20 w-full overflow-hidden">
        
        {/* HEADER */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 flex items-center gap-4">
               <ShieldCheck className="text-purple-500" size={48} /> 
               Credentials
            </h2>
            <p className="text-neutral-400 max-w-xl text-xl leading-relaxed">
                Global validations of my technical expertise. 
                Hover to inspect, click to verify.
            </p>
        </div>

        {/* --- INFINITE SCROLL TRACK (CSS Animation) --- */}
        <div className="relative w-full py-10">
            
            {/* Fade Gradients (Focus effect) */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 hidden md:block" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 hidden md:block" />

            {/* Marquee Wrapper */}
            <div className="flex overflow-hidden select-none group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                {/* Hum 2 sets render kar rahe hain taaki loop seamless ho.
                   CSS Animation 'marquee' neeche style tag mein defined hai.
                */}
                <div className="flex gap-10 pr-10 animate-marquee min-w-full">
                    {[...certificates, ...certificates].map((cert, index) => (
                        <div 
                            key={`${cert.id}-${index}`}
                            onClick={() => setSelectedCert(cert)}
                            className="relative flex-shrink-0 w-[85vw] md:w-[500px] h-[260px] md:h-[340px] bg-neutral-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer group/card hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-500"
                        >
                            {/* 1. Image Layer */}
                            <img 
                                src={cert.image} 
                                alt={cert.title} 
                                className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 group-hover/card:scale-105 transition-all duration-700 ease-out"
                            />
                            
                            {/* 2. Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover/card:opacity-40 transition-opacity duration-500" />

                            {/* 3. Text Content (Slides Up on Hover) */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                
                                {/* Issuer Badge */}
                                <div className="absolute top-6 right-6 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 text-xs font-bold uppercase tracking-wider text-neutral-300 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                                    {cert.issuer}
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
                                    {cert.title}
                                </h3>
                                
                                <div className="h-0 overflow-hidden group-hover/card:h-auto transition-all duration-300">
                                    <p className="text-purple-300 font-medium pt-2 flex items-center gap-2 text-sm uppercase tracking-widest">
                                        <Eye size={16} /> View Certificate
                                    </p>
                                </div>
                            </div>
                            
                            {/* 4. Shine Effect (Metallic Glint) */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover/card:opacity-100 pointer-events-none transition-opacity duration-700" />

                        </div>
                    ))}
                </div>
            </div>

        </div>

        {/* CSS for Marquee Animation */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 10s linear infinite; /* Speed increased (was 40s) */
            width: max-content;
          }
          
          /* Stronger Pause Logic: Stops when hovering anywhere on the group */
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        {/* MODAL: LIGHTBOX */}
        <AnimatePresence>
            {selectedCert && (
                <Lightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
            )}
        </AnimatePresence>

      </div>
    </SectionReveal>
  );
};

// --- LIGHTBOX COMPONENT ---
const Lightbox = ({ cert, onClose }) => {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />

            <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }} 
                animate={{ scale: 1, opacity: 1, y: 0 }} 
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                className="relative max-w-6xl w-full flex flex-col items-center"
            >
                {/* Toolbar */}
                <div className="w-full flex justify-between items-center mb-6 px-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">{cert.title}</h3>
                        <p className="text-neutral-500 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-3 bg-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all">
                            <Download size={24} />
                        </button>
                        <button onClick={onClose} className="p-3 bg-white/10 rounded-full text-white hover:bg-red-500 hover:text-white transition-all">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Full Image */}
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                    <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="max-w-full max-h-[80vh] object-contain"
                    />
                </div>

            </motion.div>
        </div>
    );
};

export default Certificates;