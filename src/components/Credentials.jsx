import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, ExternalLink, Award, Trophy, Star } from "lucide-react";

const credentialsData = {
  Certificates: [
    { title: "AWS Cloud Fundamental Essentials", issuer: "AWS", image: "certificates/AWS Cloud Certificates.jpg", link: "certificates/AWS Cloud Certificates.jpg", year: "2026" },
    { title: "Introduction to AI", issuer: "CISCO", image: "certificates/Introduction to AI.jpg", link: "certificates/Introduction to AI.jpg", year: "2025" },
    { title: "Python Essential 1", issuer: "CISCO", image: "certificates/python cisco.jpg", link: "certificates/python cisco.jpg", year: "2025" },
    { title: "Google Solution Challenge", issuer: "Google", image: "certificates/Solution Challenge.jpg", link: "certificates/Solution Challenge.jpg", year: "2025" },
    { title: "Deloite Data Analytics Job Simulation", issuer: "Deloite", image: "certificates/Deloite Data Analytics.jpg", link: "certificates/Deloite Data Analytics.jpg", year: "2025" },
    { title: "C Programming Certification", issuer: "IIT Kharagpur & NPTEL", image: "certificates/nptel.png", link: "certificates/nptel.png", year: "2023" },
    { title: "HTML5 Certification", issuer: "Infosys Springboard", image: "certificates/Infosys HTML.jpg", link: "certificates/Infosys HTML.jpg", year: "2023" },
    { title: "Samadhan 1.0 Hackathon", issuer: "SISTec Bhopal", image: "certificates/Samadhan 1.0.jpg", link: "certificates/Samadhan 1.0.jpg", year: "2024" },
    { title: "CSS3 Advanced Styling", issuer: "Infosys Springboard", image: "certificates/Infosys CSS.jpg", link: "certificates/Infosys CSS.jpg", year: "2024" },
    { title: "Hands-on IoT: From Sensors to Cloud", issuer: "SISTec IoT Club", image: "certificates/iot.jpg", link: "certificates/Infosys CSS.jpg", year: "2024" },
    { title: "JavaScript Fundamentals", issuer: "Infosys Springboard", image: "certificates/Infosys JS.jpg", link: "certificates/Infosys JS.jpg", year: "2024" },
    { title: "Frontend Development", issuer: "Infosys Springboard", image: "certificates/Infosys Frontend.jpg", link: "certificates/Infosys Frontend.jpg", year: "2024" },
    { title: "Frontend Development", issuer: "Great Learning", image: "certificates/Great Learning.jpg", link: "ertificates/Great Learning.jpg", year: "2024" },
    { title: "Artificial Intelligence", issuer: "AI Builder Lab", image: "certificates/AI Builder Lab.jpg", link: "certificates/AI Builder Lab.jpg", year: "2025" },
    { title: "Git and GitHub", issuer: "Microsoft Learn Student Ambassador", image: "certificates/Git and Github.jpg", link: "certificates/Git and Github.jpg", year: "2024" },
  ],
  Achievements: [
    
    { 
      title: "Ted Talks", 
      issuer: "TedX Sistec", 
      desc: "I feel truly honored to have been a member of the organizing team for this incredible event at Sagar Group of Institutions - SISTec,  ", 
      image: "Achievement/TedX.jpg", 
      link: "Achievement/TedX.jpg", 
      year: "2025"
    },
    { 
      title: "Super 50 Student", 
      issuer: "Sagar Group of Institutions", 
      desc: "𝘐’𝘮 𝘪𝘯𝘤𝘳𝘦𝘥𝘪𝘣𝘭𝘺 𝘱𝘳𝘰𝘶𝘥 𝘵𝘰 𝘣𝘦 𝘴𝘦𝘭𝘦𝘤𝘵𝘦𝘥 𝘢𝘴 𝘰𝘯𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘵𝘰𝘱 50 s𝘵𝘶𝘥𝘦𝘯𝘵𝘴 from CSE, AI & DS, Cyber Security, and ECE! 𝘶𝘯𝘥𝘦𝘳 𝘵𝘩𝘦 𝘚𝘶𝘱𝘦𝘳 50 𝘗𝘳𝘰𝘨𝘳𝘢𝘮 𝘢𝘵 Sagar Group of Institutions - SISTec ", 
      image: "Achievement/soper 50.jpg", 
      link: "Achievement/soper 50.jpg", 
      year: "2025"
    },
    { 
      title: "50 Days Badge", 
      issuer: "Leetcode", 
      desc: "Solving problems for 50+ days this year has been a rewarding grind — every challenge sharpened my logic, improved my consistency, and brought me closer to becoming a better developer ", 
      image: "Achievement/50 Days Leetcode.jpg", 
      link: "Achievement/50 Days Leetcode.jpg", 
      year: "2025"
    },
    { 
      title: "Industrial Visit", 
      issuer: "Netlink Pvt Ltd Bhopal", 
      desc: "Our visit to 𝗡𝗲𝘁𝗹𝗶𝗻𝗸 𝗦𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗣𝘃𝘁. 𝗟𝘁𝗱. offered a firsthand look into how the latest technologies are shaping industries and driving innovation on a global scale. ", 
      image: "Achievement/netlink.jpg", 
      link: "Achievement/netlink.jpg", 
      year: "2025"
    },
    { 
      title: "AI Prompt Combat", 
      issuer: "Organizing Committee", 
      desc: "I had the privilege of organizing  “AI Prompt Combat”, an inter-college event conducted by the Kaggle Koders Committee of the Artificial Intelligence & Data Science Department, Sagar Group of Institutions - SISTec .", 
      image: "Achievement/Kaggle 2025.jpg", 
      link: "Achievement/Kaggle 2025.jpg", 
      year: "2025"
    },
    { 
      title: "Felicitation", 
      issuer: "Sagar Group of Institutes", 
      desc: "I am honored to be felicitated as one of the NPTEL Achievers at Sagar Group of Institutions - SISTec for successfully completing the NPTEL Online Certification in Problem Solving Through Programming in C++", 
      image: "Achievement/NPTEL Felicitation.jpg", 
      link: "Achievement/NPTEL Felicitation.jpg", 
      year: "2024"
    },
    
    { 
      title: "Google GenAI Event", 
      issuer: "Google Developers Group SISTec", 
      desc: "One of the 80 students who completed the Google GenAI event were recognized and celebrated.", 
      image: "Achievement/Google GenAI.jpg", 
      link: "Achievement/Google GenAI.jpg", 
      year: "2024"
    },
    { 
      title: "Google DevFest Bhopal 2K24", 
      issuer: "Google Developers Group", 
      desc: "I had the privilege of attending this vibrant and inspiring event hosted at LNCT Group of Colleges, Bhopal. The energy, innovation, and passion of the developer community were truly contagious!", 
      image: "Achievement/Dev Fest.jpg", 
      link: "Achievement/Dev Fest.jpg", 
      year: "2024"
    },
    { 
      title: "Attended - National Yuva Summit", 
      issuer: "Confederation of Indian Industry Young Indians (CIIYI)", 
      desc: "The event was an incredible opportunity to gain industry insights and life lessons directly from seasoned professionals and leaders.", 
      image: "Achievement/Future 2.0.jpg", 
      link: "Achievement/Future 2.0.jpg", 
      year: "2024"
    },
    { 
      title: "Participated - Smart India Hackathon", 
      issuer: "Govt. of India", 
      desc: "Build a Traffic Management system to solve traffic in metro cities", 
      image: "Achievement/SIH.jpg", 
      link: "Achievement/SIH.jpg", 
      year: "2024"
    },
    { 
      title: " Google Cloud Study Jam", 
      issuer: "Google Developer Group", 
      desc: "I gained valuable skills in cloud computing.", 
      image: "Achievement/GDSC 2023.jpg", 
      link: "Achievement/GDSC 2023.jpg", 
      year: "2023"
    },
  ]
};

const Credentials = () => {
  const [activeTab, setActiveTab] = useState("Certificates");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const currentData = credentialsData[activeTab];
  const activeItem = currentData[activeIndex];

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 overflow-hidden font-sans" id="Credentials">
      
      {/* STATIC BACKGROUND (Zero Lag) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1a103d_0%,#050505_80%)] opacity-50"></div>
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-[1300px] mx-auto relative z-10 px-4 md:px-8">
        
        {/* HEADER */}
        <div className="relative w-full flex items-center justify-center py-10 mb-12 md:mb-20">
          <h2 className="absolute text-[13vw] md:text-[11vw] font-black uppercase tracking-tighter text-transparent select-none opacity-20"
              style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}>
            AWARDS
          </h2>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <Sparkles size={14} className="text-purple-400" /> Proof of Work
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              Credentials <span className="text-gray-500 font-light">&</span> <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-blue-500">Achievements.</span>
            </h3>
          </motion.div>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1.5 bg-[#111111] border border-white/10 rounded-full shadow-2xl">
            {Object.keys(credentialsData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`relative px-8 py-3 text-sm md:text-base font-semibold transition-colors duration-300 rounded-full ${
                  activeTab === tab ? "text-white" : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="cred-tab"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* SPLIT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Mouse-Scrollable List (Now with Scroll Isolation) */}
          <div className="lg:col-span-5 relative z-20">
            <div 
              // Yeh onWheel event website ko scroll hone se rokega jab tum list par scroll karoge
              onWheel={(e) => e.stopPropagation()} 
              className="flex flex-col gap-3 h-[500px] lg:h-[600px] overflow-y-auto overscroll-contain pr-2 md:pr-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-white/[0.02] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/20 hover:[&::-webkit-scrollbar-thumb]:bg-white/40 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors transform-gpu scroll-smooth"
            >
              
              {currentData.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`group cursor-pointer p-5 md:p-6 rounded-[1.5rem] transition-all duration-300 border shrink-0 transform-gpu ${
                      isActive 
                        ? "bg-white/[0.05] border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
                        : "bg-transparent border-transparent hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-mono tracking-widest uppercase transition-colors duration-300 ${isActive ? "text-purple-400" : "text-gray-600 group-hover:text-gray-400"}`}>
                        {item.issuer}
                      </span>
                      <span className={`text-xs font-mono transition-colors duration-300 ${isActive ? "text-gray-400" : "text-gray-600"}`}>
                        {item.year}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center gap-4">
                      <h4 className={`text-lg md:text-xl font-bold transition-colors duration-300 line-clamp-2 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                        {item.title}
                      </h4>
                      
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform-gpu ${isActive ? "bg-white text-black rotate-0" : "bg-white/5 text-gray-500 group-hover:bg-white/10 group-hover:text-white -rotate-45"}`}>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Subtle bottom fade to indicate more items to scroll */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none rounded-b-3xl"></div>
          </div>

          {/* RIGHT: Sticky Spotlight (Lag-Free) */}
          <div className="lg:col-span-7 sticky top-32 hidden lg:block h-[600px] transform-gpu">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="w-full h-full rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 shadow-2xl overflow-hidden flex flex-col group will-change-transform"
              >
                
                {/* Image Section */}
                <div className="relative flex-1 w-full bg-[#111] overflow-hidden">
                  <img 
                    src={activeItem.image} 
                    alt={activeItem.title} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 transform-gpu" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
                  
                  {/* Floating Link Button */}
                  <a 
                    href={activeItem.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40"
                  >
                    <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                      View Document <ExternalLink size={16} />
                    </div>
                  </a>
                </div>

                {/* Info Panel */}
                <div className="h-auto p-8 bg-[#0a0a0a] relative z-10 border-t border-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {activeItem.title}
                    </h3>
                    <Award className="text-purple-400 shrink-0" size={24} />
                  </div>
                  <p className="text-gray-400 font-mono text-sm uppercase tracking-widest mb-4">
                    Issued by: <span className="text-gray-200">{activeItem.issuer}</span>
                  </p>
                  {activeItem.desc && (
                    <p className="text-gray-400 leading-relaxed font-light">
                      {activeItem.desc}
                    </p>
                  )}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;