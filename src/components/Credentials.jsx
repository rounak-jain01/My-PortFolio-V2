import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { Sparkles, ExternalLink, Trophy, Award, Star } from "lucide-react";

// Dummy Data
const credentialsData = {
  Certificates: [
    { title: "C Programming Certification", issuer: "NPTEL", image: "certificates/nptel.png", link: "certificates/nptel.png" },
    { title: "HTML5 Certification", issuer: "Infosys Springboard", image: "certificates/Infosys HTML.jpg", link: "#" },
    { title: "CSS3 Advanced Styling", issuer: "Infosys Springboard", image: "certificates/Infosys CSS.jpg", link: "#" },
    { title: "JavaScript Fundamentals", issuer: "Infosys Springboard", image: "certificates/Infosys JS.jpg", link: "#" },
    { title: "Frontend Development", issuer: "Infosys Springboard", image: "certificates/Infosys Frontend.jpg", link: "#" },
    { title: "Frontend Development", issuer: "Infosys Springboard", image: "certificates/Great Learning Frontend.jpg", link: "#" },
    { title: "Artificial Intelligence", issuer: "AI Builder Lab", image: "certificates/AI Builder Lab.jpg", link: "#" },
  ],
  Achievements: [
    { 
      title: "Winner - Smart India Hackathon", 
      issuer: "Govt. of India", 
      desc: "Secured 1st position among 500+ teams by building a scalable AI-driven crop prediction model.", 
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop", 
      link: "#", 
      icon: <Trophy size={28} className="text-yellow-400" />,
      colSpan: "md:col-span-2 md:row-span-2" // Makes it large in the bento grid
    },
    { 
      title: "Global Top 50", 
      issuer: "AI Prompt Combat", 
      desc: "Ranked globally in complex prompt engineering challenges.", 
      image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop", 
      link: "#", 
      icon: <Award size={24} className="text-blue-400" />,
      colSpan: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Open Source Contributor", 
      issuer: "GSSoC '24", 
      desc: "Merged 15+ critical PRs in modern web framework repositories.", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", 
      link: "#", 
      icon: <Star size={24} className="text-purple-400" />,
      colSpan: "md:col-span-1 md:row-span-1"
    },
  ]
};

const Credentials = () => {
  const [activeTab, setActiveTab] = useState("Certificates");
  const controls = useAnimation();

  // Marquee logic
  const marqueeItems = [...credentialsData.Certificates, ...credentialsData.Certificates];

  useEffect(() => {
    if (activeTab === "Certificates") {
      startMarquee();
    }
  }, [activeTab]);

  const startMarquee = () => {
    controls.start({
      x: "-50%",
      transition: { duration: 35, ease: "linear", repeat: Infinity },
    });
  };

  const stopMarquee = () => {
    controls.stop();
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 md:py-48 overflow-hidden font-sans" id="Credentials">
      
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/15 blur-[150px] rounded-full mix-blend-screen"></div>
        {/* Subtle grid to add texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* --- 1. MASSIVE CENTERED HEADER --- */}
        <div className="w-full flex flex-col items-center justify-center text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border border-purple-500/20 rounded-full bg-purple-500/10 text-purple-400 text-xs md:text-sm tracking-[0.3em] font-bold uppercase mb-6 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <Sparkles size={16} className="text-purple-400" /> Proof of Work
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black text-white tracking-tighter leading-[1.1] mb-12">
              Credentials <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                & Awards.
              </span>
            </h2>
          </motion.div>

          {/* Centered Line Tabs */}
          <div className="flex justify-center gap-8 md:gap-16 border-b border-white/10 w-full max-w-md pb-1">
            {Object.keys(credentialsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative pb-4 text-xl md:text-2xl font-semibold transition-colors duration-300 ${
                  activeTab === tab ? "text-white" : "text-gray-600 hover:text-gray-300"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="credential-tab-center"
                    className="absolute left-0 bottom-[-1.5px] w-full h-[3px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-full shadow-[0_0_15px_rgba(168,85,247,0.6)]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>


        {/* --- 2. MAIN CONTENT AREA --- */}
        <div className="relative w-full min-h-[500px] mt-10">
          <AnimatePresence mode="wait">

            {/* === VIEW 1: CERTIFICATES (Upgraded Marquee Vibe) === */}
            {activeTab === "Certificates" && (
              <motion.div
                key="certificates"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full overflow-hidden"
                onMouseEnter={stopMarquee}
                onMouseLeave={startMarquee}
              >
                {/* Deeper edge fades */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

                <motion.div animate={controls} className="flex gap-8 w-max">
                  {marqueeItems.map((item, index) => (
                    <a href={item.link} target="_blank" rel="noreferrer" key={`cert-${index}`} className="relative group block shrink-0">
                      
                      {/* Premium Glass Card Design */}
                      <div className="w-[320px] md:w-[420px] h-[300px] md:h-[350px] rounded-[2rem] bg-white/[0.02] backdrop-blur-xl border border-white/5 relative shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30 overflow-hidden flex flex-col">
                        
                        {/* Top: Image Section */}
                        <div className="h-[65%] w-full relative overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent opacity-100"></div>
                          
                          {/* Hover Link Button */}
                          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                             <ExternalLink size={18} />
                          </div>
                        </div>

                        {/* Bottom: Text Section with Glass Reflection */}
                        <div className="h-[35%] w-full p-6 flex flex-col justify-center bg-gradient-to-b from-[#111]/80 to-[#0a0a0a] relative z-10">
                          {/* Fake Glass Sheen */}
                          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                          
                          <span className="text-xs font-mono text-purple-400 tracking-widest uppercase mb-2 block">
                            {item.issuer}
                          </span>
                          <h4 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-2">
                            {item.title}
                          </h4>
                        </div>

                      </div>
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            )}


            {/* === VIEW 2: ACHIEVEMENTS (The Apple Bento Grid) === */}
            {activeTab === "Achievements" && (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full px-4"
              >
                {/* BENTO GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] max-w-5xl mx-auto">
                  
                  {credentialsData.Achievements.map((item, index) => (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      key={index}
                      className={`group relative rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] ${item.colSpan} flex flex-col`}
                    >
                      {/* Background Image with heavy overlay */}
                      <div className="absolute inset-0 z-0">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700" />
                        {/* Gradient depends on card size */}
                        <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent' : 'bg-gradient-to-t from-[#050505] to-[#050505]/40'} mix-blend-multiply`}></div>
                      </div>

                      {/* Content Area */}
                      <div className="relative z-10 flex flex-col h-full p-8 md:p-10 justify-end">
                        
                        {/* Top Icon (Floating) */}
                        <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
                          {item.icon}
                        </div>

                        {/* Top Right Link */}
                        <div className="absolute top-8 right-8 text-white/30 group-hover:text-white transition-colors">
                          <ExternalLink size={24} />
                        </div>

                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gray-300 text-xs font-mono uppercase tracking-widest mb-4">
                            {item.issuer}
                          </span>
                          <h4 className={`font-bold text-white mb-2 leading-tight group-hover:text-blue-300 transition-colors ${index === 0 ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>
                            {item.title}
                          </h4>
                          {item.desc && (
                            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>

                    </a>
                  ))}
                  
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Credentials;