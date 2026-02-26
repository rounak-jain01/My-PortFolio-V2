import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Cloud,
  Box,
  Terminal,
  Activity,
  Layers,
  Target,
  Lightbulb,
  Users,
  Clock,
  Zap,
  Monitor,
  Server,
  Brain,
  Database,
  Code,
  Globe,
  Cpu,
  Feather,
} from "lucide-react";

// Tumhari core skills
const skillsData = {
  Technical: [
    {
      name: "Frontend",
      icon: <Monitor size={26} />,
      desc: "React.js, JavaScript, HTML5, CSS3",
    },
    {
      name: "Backend",
      icon: <Server size={26} />,
      desc: "Flask, Node.js, Express.js",
    },
    {
      name: "AI / ML",
      icon: <Brain size={26} />,
      desc: "Deep Learning, Scikit-learn, Transformers",
    },
    {
      name: "Data Science",
      icon: <Terminal size={26} />,
      desc: "Python, NumPy, Pandas",
    },
    {
      name: "Databases",
      icon: <Database size={26} />,
      desc: "MongoDB, Firebase, NoSQL",
    },
    { name: "Languages", icon: <Code size={26} />, desc: "Python, C, C++" },
    {
      name: "Deployment",
      icon: <Globe size={26} />,
      desc: "Vercel, Render, Git, GitHub",
    },
    {
      name: "Core CS",
      icon: <Cpu size={26} />,
      desc: "DSA, REST APIs, Auth Systems",
    },
    {
      name: "Cloud Architecture",
      icon: <Cloud size={26} />,
      desc: "AWS, Google Cloud (GCP), Azure",
    },
  ],
  Professional: [
    {
      name: "Product Management",
      icon: <Feather size={26} />,
      desc: "Product Requirement Documents",
    },
    {
      name: "Problem Solving",
      icon: <Target size={26} />,
      desc: "Algorithmic thinking",
    },
    {
      name: "Project Architecture",
      icon: <Layers size={26} />,
      desc: "Structuring complex web apps",
    },
    {
      name: "Critical Thinking",
      icon: <Lightbulb size={26} />,
      desc: "Data-driven decision making",
    },
    {
      name: "Prompt Engineering",
      icon: <Zap size={26} />,
      desc: "AI optimization & interactions",
    },
  ],
  "Soft Skills": [
    {
      name: "Team Collaboration",
      icon: <Users size={26} />,
      desc: "Cross-functional syncing",
    },
    {
      name: "Communication",
      icon: <Lightbulb size={26} />,
      desc: "Translating tech to solutions",
    },
    {
      name: "Time Management",
      icon: <Clock size={26} />,
      desc: "Agile delivery & Hackathons",
    },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Technical");

  return (
    // Pura sticky aur 150vh logic hata diya, ab normal flow hai
    <section
      className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden font-sans"
      id="Skills"
    >
      {/* --- DYNAMIC BACKGROUND EFFECTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Radial Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

        {/* Slow Moving Purple Orb */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-[15%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-700/10 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>

        {/* Slow Moving Blue Orb */}
        <motion.div
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[10%] left-[10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] bg-blue-700/10 rounded-full blur-[120px] mix-blend-screen"
        ></motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">
        {/* --- 1. THE MASSIVE HOLLOW HEADER (Consistent with other sections) --- */}
        <div className="relative w-full flex items-center justify-center py-8 mb-16 md:mb-20">
          <h2
            className="absolute text-[16vw] md:text-[14vw] font-black uppercase tracking-tighter text-transparent select-none opacity-20"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.1)" }}
          >
            SKILLS
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-4 backdrop-blur-md">
              <Zap size={14} className="text-purple-400" /> My Skillset
            </div>
            <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight text-center">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Powers.
              </span>
            </h3>
          </motion.div>
        </div>

        {/* --- 2. PREMIUM TABS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center p-1.5 md:p-2 bg-[#111111]/80 backdrop-blur-2xl border border-white/10 rounded-full mb-12 md:mb-16 relative z-20 shadow-[0_0_40px_rgba(0,0,0,0.6)]"
        >
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-6 md:px-10 py-3 md:py-3.5 text-sm md:text-base font-semibold transition-colors duration-300 rounded-full z-10 ${
                activeTab === tab
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-skill-tab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 border border-white/10 rounded-full -z-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </motion.div>

        {/* --- 3. BORDERLESS SKILLS GRID --- */}
        <div className="w-full min-h-[350px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 w-full"
            >
              {skillsData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="group relative flex flex-col p-6 md:p-8 rounded-[2.5rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500 overflow-hidden shadow-2xl hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
                >
                  {/* Subtle hover glow inside card */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none"></div>

                  <div className="flex items-center gap-5 mb-5 relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-gray-400 group-hover:text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/10 group-hover:border-purple-500/20 transition-all duration-500">
                      {skill.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>

                  <p className="text-base text-gray-500 group-hover:text-gray-300 transition-colors font-light relative z-10 leading-relaxed">
                    {skill.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
