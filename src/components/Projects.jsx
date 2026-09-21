import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

const Projects = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const purpleOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.36],
    [1, 1, 0]
  );

  const blueOpacity = useTransform(
    scrollYProgress,
    [0.18, 0.45, 0.72],
    [0, 1, 0]
  );

  const roseOpacity = useTransform(
    scrollYProgress,
    [0.58, 0.8, 1],
    [0, 1, 1]
  );

  /*
   * Featured projects.
   *
   * IMPORTANT:
   * The archive below is intentionally NOT a nested scroll container.
   * Do not add overflow-y-auto / overscroll-contain / onWheel stopPropagation
   * here, otherwise Lenis will trap the mouse wheel inside the archive.
   */
  const projectsData = [
    {
      id: "01",
      title: "HireMap AI",
      subtitle: "AI Hiring Intelligence Platform",
      desc:
        "An AI-powered hiring platform connecting resume parsing, candidate profiling, semantic search, vector retrieval, and LLM-based career guidance.",
      tech: [
        "FastAPI",
        "React.js",
        "PostgreSQL",
        "Supabase",
        "Llama API",
        "RAG",
      ],
      accent: "text-cyan-400",
      overlay: "from-cyan-900/40 to-transparent",
      imageGlow:
        "group-hover:shadow-[0_0_80px_rgba(34,211,238,0.25)] border-cyan-500/20",
      preview: "",
      source: "https://github.com/rounak-jain01/HireMap-AI",
      photo:
        "/images/hiremap.png",
      fallbackIcon: "HM",
      fallbackGradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },

    {
      id: "02",
      title: "Sahaay (Vibecoded)",
      subtitle: "Household Service Marketplace",
      desc:
        "An Android-first household-service marketplace with Customer and Help workflows, backend-driven assignment, availability management, OTP job verification, timers, and location support.",
      tech: [
        "React Native",
        "Expo",
        "Firebase",
        "Cloud Functions",
        "Google Maps",
      ],
      accent: "text-emerald-400",
      overlay: "from-emerald-900/40 to-transparent",
      imageGlow:
        "group-hover:shadow-[0_0_80px_rgba(52,211,153,0.25)] border-emerald-500/20",
      preview: "",
      source: "https://github.com/rounak-jain01/Househelp-v3",
      photo:
        "images/sahaay.png",
      fallbackIcon: "SY",
      fallbackGradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },

    {
      id: "03",
      title: "Fasal Sarthi",
      subtitle: "AI/ML Agricultural Intelligence",
      desc:
        "An intelligent agricultural advisory platform integrating crop recommendation, disease detection, fertilizer guidance, and weather insights into one system.",
      tech: [
        "Python",
        "TensorFlow",
        "Flask",
        "React.js",
        "Firebase",
      ],
      accent: "text-purple-400",
      overlay: "from-purple-900/40 to-transparent",
      imageGlow:
        "group-hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] border-purple-500/20",
      preview: "https://fasal-sarthi-app.vercel.app/",
      source: "https://github.com/rounak-jain01/fasal-sarthi-app",
      photo: "/images/fasal_sarthi.png",
      fallbackIcon: "FS",
      fallbackGradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    },

    {
      id: "04",
      title: "Resume Analyzer",
      subtitle: "AI Placement Intelligence",
      desc:
        "An AI-powered resume and Job Description analysis platform supporting structured parsing, skill matching, eligibility analysis, skill-gap detection, and faculty batch insights.",
      tech: [
        "React",
        "Vite",
        "FastAPI",
        "PostgreSQL",
        "Gemini API",
        "JWT",
      ],
      accent: "text-blue-400",
      overlay: "from-blue-900/40 to-transparent",
      imageGlow:
        "group-hover:shadow-[0_0_80px_rgba(59,130,246,0.3)] border-blue-500/20",
      preview: "https://tnp-resume-analyzer.vercel.app/",
      source: "https://github.com/rounak-jain01/TNP-Resume-Analyzer",
      photo: "/images/resume.png",
      fallbackIcon: "TNP",
      fallbackGradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },

    {
      id: "05",
      title: "AI Prompt Combat",
      subtitle: "Competitive GenAI Platform",
      desc:
        "A competitive AI prompting platform with authentication, challenge workflows, real-time leaderboards, and Gemini integration designed for practical GenAI learning.",
      tech: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Gemini API",
      ],
      accent: "text-rose-400",
      overlay: "from-rose-900/40 to-transparent",
      imageGlow:
        "group-hover:shadow-[0_0_80px_rgba(244,63,94,0.3)] border-rose-500/20",
      preview: "https://www.aipromptcombat.in/",
      source: "https://github.com/rounak-jain01/AI-Prompt-Combat",
      photo: "/images/ai_prompt.png",
      fallbackIcon: "PC",
      fallbackGradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    },
  ];

  /*
   * Public GitHub repositories that are useful as the long-form project
   * archive. Featured projects are excluded here to avoid repetition.
   */
  const archiveProjects = [
  {
    name: "Data-Structures-and-Algorithms",
    label: "Data Structures & Algorithms",
    type: "DSA",
    url: "https://github.com/rounak-jain01/Data-Structures-and-Algorithms",
  },
  {
    name: "jiosaavn-api",
    label: "JioSaavn API",
    type: "API",
    url: "https://github.com/rounak-jain01/jiosaavn-api",
  },
  {
    name: "IPL-Web-App-React",
    label: "IPL Web App",
    type: "React",
    url: "https://github.com/rounak-jain01/IPL-Web-App-React",
  },
  {
    name: "Swiggy-Clone-using-React",
    label: "Swiggy Clone",
    type: "React",
    url: "https://github.com/rounak-jain01/Swiggy-Clone-using-React",
  },
  {
    name: "Github-Profile-Viewer",
    label: "GitHub Profile Viewer",
    type: "Web App",
    url: "https://github.com/rounak-jain01/Github-Profile-Viewer",
  },
  {
    name: "Weather-App-Web",
    label: "Weather App",
    type: "Web App",
    url: "https://github.com/rounak-jain01/Weather-App-Web",
  },
  {
    name: "bus-reservation-system",
    label: "Bus Ticket Reservation System",
    type: "Web App",
    url: "https://github.com/rounak-jain01/bus-reservation-system",
  },
];

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 font-sans overflow-hidden"
      id="Projects"
    >
      {/* =========================
          SCROLL-LINKED BACKGROUND
         ========================= */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] z-10" />

        <motion.div
          style={{ opacity: purpleOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_0%_20%,rgba(168,85,247,0.15),transparent_50%)]"
        />

        <motion.div
          style={{ opacity: blueOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_100%_50%,rgba(59,130,246,0.15),transparent_50%)]"
        />

        <motion.div
          style={{ opacity: roseOpacity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_0%_80%,rgba(225,29,72,0.15),transparent_50%)]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* =========================
            HEADER
           ========================= */}

        <div className="relative w-full flex items-center justify-center py-8 mb-16 md:mb-24">
          <h2
            className="absolute text-[16vw] md:text-[14vw] font-black uppercase tracking-tighter text-transparent select-none opacity-20"
            style={{
              WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)",
            }}
          >
            PROJECTS
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md">
              <Sparkles size={12} className="text-white" />
              Selected Works
            </div>

            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              Featured <span className="text-gray-500 font-light">Builds.</span>
            </h3>
          </motion.div>
        </div>

        {/* =========================
            FEATURED PROJECTS
           ========================= */}

        <div className="w-full flex flex-col gap-24 md:gap-32 pb-24">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`w-full flex flex-col-reverse ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-10 lg:gap-16 items-center group`}
              >
                {/* --- TEXT CONTENT --- */}

                <div className="w-full lg:w-[45%] flex flex-col justify-center">
                  <div className="flex items-end gap-4 mb-4">
                    <span
                      className={`text-5xl md:text-7xl font-black ${project.accent} opacity-40 leading-none tracking-tighter`}
                    >
                      {project.id}
                    </span>

                    <div className="h-[2px] w-16 bg-white/10 mb-3" />
                  </div>

                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 tracking-tight leading-[1.1]">
                    {project.title}
                  </h4>

                  <h5 className="text-lg md:text-xl text-gray-400 font-medium mb-6">
                    {project.subtitle}
                  </h5>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs md:text-sm font-mono tracking-widest text-gray-500 uppercase"
                      >
                        // {tech}
                      </span>
                    ))}
                  </div>

                  {/* --- LINKS --- */}

                  <div className="flex items-center gap-8">
                    {project.preview && (
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className={`group/link flex items-center gap-2 ${project.accent} hover:text-white transition-colors font-medium text-base md:text-lg`}
                      >
                        <ExternalLink size={20} />

                        <span className="border-b border-transparent group-hover/link:border-white transition-colors pb-0.5">
                          Live Site
                        </span>
                      </a>
                    )}

                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium text-base md:text-lg"
                    >
                      <Github size={20} />

                      <span className="border-b border-transparent group-hover/link:border-white transition-colors pb-0.5">
                        Source
                      </span>
                    </a>
                  </div>
                </div>

                {/* --- PROJECT VISUAL --- */}

                <div className="w-full lg:w-[55%] flex justify-center">
                  <div
                    className={`relative w-full aspect-video rounded-[1.5rem] md:rounded-[2rem] bg-[#0a0a0a] border border-white/5 overflow-hidden transition-all duration-700 ${project.imageGlow}`}
                  >
                    {project.photo ? (
                      <img
                        src={project.photo}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.fallbackGradient} flex items-center justify-center`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]" />

                        <div className="relative text-center px-8">
                          <div className="text-6xl md:text-8xl font-black tracking-tighter text-white/10 mb-2">
                            {project.fallbackIcon}
                          </div>

                          <div className="text-white/70 text-xs md:text-sm font-mono tracking-[0.35em] uppercase">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${project.overlay} opacity-100 group-hover:opacity-0 transition-opacity duration-700 mix-blend-overlay pointer-events-none`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            PROJECT ARCHIVE
            No nested scrolling here.
           ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full flex flex-col mt-8 border-t border-white/10 pt-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono tracking-[0.35em] text-gray-600 uppercase mb-3">
                The Archive
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Other <span className="text-gray-500 font-light">Works.</span>
              </h3>
            </div>

            <a
              href="https://github.com/rounak-jain01?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.2em]"
            >
              View all repositories
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Desktop header */}

          <div className="hidden md:grid grid-cols-12 gap-4 px-5 py-4 rounded-xl border border-white/5 bg-white/[0.02] text-[11px] font-mono tracking-[0.25em] text-gray-600 uppercase">
            <div className="col-span-6">Project</div>
            <div className="col-span-4">Category</div>
            <div className="col-span-2 text-right">Open</div>
          </div>

          {/* Full-height page-flow archive.
              Wheel events are NOT intercepted. */}

          <div className="flex flex-col w-full mt-2">
            {archiveProjects.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.name}
                className="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 py-5 md:py-6 px-5 border-b border-white/5 hover:bg-white/[0.025] transition-all duration-300 rounded-xl items-center"
              >
                <div className="md:col-span-6 flex items-center gap-4 min-w-0">
                  <span className="text-[10px] font-mono text-gray-700 group-hover:text-gray-500 transition-colors">
                    /
                  </span>

                  <h4 className="text-base md:text-lg font-semibold text-gray-300 group-hover:text-white transition-colors truncate">
                    {item.label}
                  </h4>
                </div>

                <div className="md:col-span-4">
                  <span className="inline-flex text-[11px] md:text-xs font-mono tracking-widest uppercase text-gray-600 group-hover:text-gray-400 transition-colors">
                    {item.type}
                  </span>
                </div>

                <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-4">
                  <span className="text-[11px] font-mono text-gray-700 group-hover:text-gray-500 transition-colors md:hidden">
                    Repository
                  </span>

                  <ArrowRight
                    size={18}
                    className="text-gray-600 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300 shrink-0"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="flex items-center justify-center pt-10">
            <a
              href="https://github.com/rounak-jain01?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-3 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
            >
              <Github size={17} />

              <span className="text-sm font-medium">
                Explore the full archive
              </span>

              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;