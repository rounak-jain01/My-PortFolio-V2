import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Profile", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
];

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Ref to track if we are scrolling via click
  const isClickScrolling = useRef(false);

  // SMART SCROLL LOGIC
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Agar hum click karke scroll kar rahe hain, toh navbar ko mat chupao
    if (isClickScrolling.current) return;

    // Normal behavior: Down -> Hide, Up -> Show
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // SMOOTH SCROLL HANDLER
  const handleScroll = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Mobile menu band karo
    
    // 1. Navbar hiding logic ko pause karo
    isClickScrolling.current = true;
    
    // 2. Target element dhundo
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    // 3. Smooth Scroll Karo
    if (elem) {
        elem.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    // 4. Thodi der baad logic wapas enable karo (taaki animation khatam ho jaye)
    setTimeout(() => {
        isClickScrolling.current = false;
    }, 1000);
  };

  return (
    <>
      {/* --- DESKTOP FLOATING NAVBAR --- */}
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 shadow-2xl">
          
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => handleScroll(e, "#intro")} // Home par click karne se top par jaye
            className="px-4 py-2 rounded-full bg-white/5 hover:gold border border-white/5 text-white font-bold tracking-tight transition-colors"
          >
            RJ.
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)} // Custom Click Handler
                  className="px-5 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-[#ffd700] hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, "#contact")}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-neutral-200 transition-colors"
          >
            Let's Talk <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-3 rounded-full bg-white/5 text-white hover:bg-white/10"
          >
            <Menu size={20} />
          </button>

        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center"
          >
             <button 
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-8 right-8 p-4 rounded-full bg-neutral-900 text-white border border-white/10 hover:rotate-90 transition-transform"
             >
                <X size={24} />
             </button>

             <ul className="flex flex-col items-center gap-8">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => handleScroll(e, link.href)} // Mobile mein bhi smooth scroll
                      className="text-5xl font-black text-white/50 hover:text-white transition-colors tracking-tight"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
                
                <motion.li 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <a 
                      href="#contact" 
                      onClick={(e) => handleScroll(e, "#contact")}
                      className="mt-8 px-8 py-4 rounded-full bg-purple-600 text-white font-bold text-xl flex items-center gap-2"
                    >
                      Contact Me <ArrowUpRight />
                    </a>
                </motion.li>
             </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;