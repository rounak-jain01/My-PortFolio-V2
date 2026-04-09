import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  // --- 3D Tilt on mouse move ---
  useEffect(() => {
    const hero = heroRef.current;
    const card = cardRef.current;
    if (!hero || !card) return;

    const handleMove = (e) => {
      const rect = hero.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      card.style.transform = `rotateY(${dx * 8}deg) rotateX(${-dy * 6}deg)`;
    };
    const handleLeave = () => {
      card.style.transition = "transform 0.6s ease-out";
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      setTimeout(() => (card.style.transition = "transform 0.12s ease-out"), 600);
    };

    hero.addEventListener("mousemove", handleMove);
    hero.addEventListener("mouseleave", handleLeave);
    return () => {
      hero.removeEventListener("mousemove", handleMove);
      hero.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // --- Floating Particles ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;
    const ctx = canvas.getContext("2d");

    const COLORS = [
      "rgba(139,92,246,", "rgba(99,102,241,",
      "rgba(45,212,191,", "rgba(96,165,250,", "rgba(232,121,249,",
    ];

    let W, H, particles, animId;

    const initParticles = () => {
      particles = Array.from({ length: 55 }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        z: Math.random() * 1.8 + 0.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 0.4,
        col: COLORS[Math.floor(Math.random() * COLORS.length)],
        twinkleSpeed: Math.random() * 0.02 + 0.008,
        twinklePhase: Math.random() * Math.PI * 2,
      }));
    };

    const resize = () => {
      const rect = hero.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
      initParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x = (p.x + p.vx * p.z + W) % W;
        p.y = (p.y + p.vy * p.z + H) % H;
        p.twinklePhase += p.twinkleSpeed;
        const alpha = 0.25 + Math.sin(p.twinklePhase) * 0.22;
        const size = p.r * p.z;

        if (p.z > 1.2) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 4);
          grd.addColorStop(0, p.col + alpha * 0.6 + ")");
          grd.addColorStop(1, p.col + "0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, size * 4, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.col + alpha + ")";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full bg-[#050505] flex flex-col items-center justify-center overflow-hidden isolate px-4"
      id="Home"
    >
      {/* Aurora Orb */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full animate-[auroraPulse_6s_ease-in-out_infinite_alternate]"
          style={{
            background: "radial-gradient(circle at 40% 40%, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.12) 25%, rgba(20,184,166,0.08) 55%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />
      </div>

      {/* Subtle Grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
        }}
      />

      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[5]" />

      {/* "Available for work" badge */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute top-8 right-8 flex items-center gap-2 border border-white/10 bg-white/[0.04] rounded-full px-4 py-1.5 z-20"
      >
        <span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_6px_#4ade80] animate-pulse" />
        <span className="text-[11px] text-white/50 tracking-wide">Available for work</span>
      </motion.div>

      {/* 3D Tilt Name Block */}
      <div className="relative z-10" style={{ perspective: "800px" }}>
        <div
          ref={cardRef}
          className="flex flex-col items-center"
          style={{ transformStyle: "preserve-3d", transition: "transform 0.12s ease-out" }}
        >
          {/* Shadow/depth layer */}
          <div
            aria-hidden
            className="absolute text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter leading-none pb-2 select-none pointer-events-none"
            style={{
              color: "rgba(99,102,241,0.15)",
              filter: "blur(4px)",
              transform: "translate(3px, 4px) translateZ(-10px)",
            }}
          >
            ROUNAK JAIN
          </div>

          {/* Main gradient name */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-7xl lg:text-9xl font-extrabold tracking-tighter text-transparent bg-clip-text text-center leading-none pb-2"
            style={{
              backgroundImage: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 25%, #e879f9 50%, #2dd4bf 75%, #60a5fa 100%)",
              backgroundSize: "300% auto",
              animation: "colorFlow 10s linear infinite",
            }}
          >
            ROUNAK JAIN
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="mt-6 md:mt-8 text-xs sm:text-sm text-gray-400 font-bold tracking-[0.4em] uppercase text-center"
        >
          Make What Matters
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 z-20 pointer-events-none"
      >
        <span className="text-[9px] text-gray-600 font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          />
        </div>
      </motion.div>

      {/* Keyframes in global CSS / tailwind config */}
      <style>{`
        @keyframes colorFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes auroraPulse {
          0%   { transform: translate(-50%, -50%) scale(1);    opacity: 0.7; }
          100% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;