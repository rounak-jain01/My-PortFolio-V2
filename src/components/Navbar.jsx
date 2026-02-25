import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Hamburger icons

const navLinks = [
  "Home", 
  "Detail", 
  "Skills", 
  "Experience", 
  "Education", 
  "Projects", 
  "Credentials", 
  "Contact"
];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state

  // --- 1. SMOOTH SCROLL ON CLICK ---
  const handleScrollTo = (link) => {
    setActive(link);
    setIsOpen(false); // Click karne par mobile menu automatically close ho jaye
    
    if (link === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(link);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 80; 
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // --- 2. SCROLL SPY (Auto-update active link) ---
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActive("Home");
        return;
      }

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        if (link === "Home") continue;

        const section = document.getElementById(link);
        if (section) {
          const offsetTop = section.offsetTop;
          if (window.scrollY >= offsetTop - window.innerHeight / 2.5) {
            setActive(link);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      // Responsive width: mobile pe 90% wide, desktop pe auto
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] md:w-auto"
    >
      
      {/* =========================================
          DESKTOP NAVBAR (Hidden on Mobile)
      ========================================= */}
      <nav className="relative hidden md:flex items-center gap-2 px-3 py-2 bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => handleScrollTo(link)}
            className={`relative px-6 py-2.5 text-sm font-semibold transition-colors duration-300 rounded-full ${
              active === link ? "text-white" : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {active === link && (
              <motion.div
                layoutId="desktop-active-pill" 
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">
              {link === "Detail" ? "About" : link === "Credentials" ? "Awards" : link}
            </span>
          </button>
        ))}
      </nav>

      {/* =========================================
          MOBILE NAVBAR (Hidden on Desktop)
      ========================================= */}
      <div className="md:hidden relative w-full">
        {/* Mobile Top Pill */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
          
          {/* Currently Active Section Name */}
          <span className="text-sm font-bold text-white tracking-widest uppercase">
            {active === "Detail" ? "ABOUT" : active === "Credentials" ? "AWARDS" : active.toUpperCase()}
          </span>

          {/* Hamburger Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-300 hover:text-white transition-colors focus:outline-none flex items-center justify-center"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[110%] left-0 w-full bg-[#111111]/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-3 flex flex-col gap-1 shadow-2xl overflow-hidden"
            >
              {navLinks.map((link) => (
                <button
                  key={`mobile-${link}`}
                  onClick={() => handleScrollTo(link)}
                  className={`w-full text-left px-6 py-4 text-sm font-semibold rounded-xl transition-colors duration-300 ${
                    active === link 
                      ? "bg-white/10 text-white border border-white/5" 
                      : "text-gray-400 hover:bg-white/[0.03] hover:text-gray-200"
                  }`}
                >
                  {link === "Detail" ? "About" : link === "Credentials" ? "Awards" : link}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </motion.div>
  );
};

export default Navbar;