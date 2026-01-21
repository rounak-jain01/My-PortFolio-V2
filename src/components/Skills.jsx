import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Code2, Database, Layout, GitBranch, Cpu, Figma, Trello, LineChart, Brain, Users } from "lucide-react";
import SectionReveal from "./SectionReveal";

// 1. DATA ORGANIZATION (Categorized taaki clutter na ho)
const skillsData = {
  technical: [
    { name: "Python", icon: <Terminal size={24} />, level: "Advanced", color: "bg-yellow-500/20 text-yellow-400" },
    { name: "React JS", icon: <Code2 size={24} />, level: "Intermediate", color: "bg-cyan-500/20 text-cyan-400" },
    { name: "Machine Learning", icon: <Cpu size={24} />, level: "Intermediate", color: "bg-purple-500/20 text-purple-400" },
    { name: "SQL", icon: <Database size={24} />, level: "Advanced", color: "bg-blue-500/20 text-blue-400" },
    { name: "Tailwind CSS", icon: <Layout size={24} />, level: "Expert", color: "bg-sky-500/20 text-sky-400" },
  ],
  professional: [
    { name: "Data Analysis", icon: <LineChart size={24} />, level: "Advanced", color: "bg-green-500/20 text-green-400" },
    { name: "Problem Solving", icon: <Brain size={24} />, level: "Expert", color: "bg-pink-500/20 text-pink-400" },
    { name: "Leadership", icon: <Users size={24} />, level: "Intermediate", color: "bg-orange-500/20 text-orange-400" },
  ],
  tools: [
    { name: "Git & GitHub", icon: <GitBranch size={24} />, level: "Advanced", color: "bg-red-500/20 text-red-400" },
    { name: "Figma", icon: <Figma size={24} />, level: "Intermediate", color: "bg-purple-500/20 text-purple-400" },
    { name: "Jira / Trello", icon: <Trello size={24} />, level: "Intermediate", color: "bg-blue-500/20 text-blue-400" },
  ]
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <SectionReveal title="CAPABILITIES" id="skills">
      
      <div className="w-full">
        {/* TAB NAVIGATION (Futuristic Switcher) */}
        <div className="flex justify-center mb-12">
          <div className="p-1 bg-neutral-900 rounded-full border border-white/10 flex gap-2 overflow-hidden relative">
            {Object.keys(skillsData).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors z-10 capitalize ${
                  activeTab === tab ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {/* Active Background Pill Animation */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-neutral-800 rounded-full border border-white/20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-20">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* DYNAMIC CONTENT GRID */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillsData[activeTab].map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </SectionReveal>
  );
};

// COMPONENT: Clean Glass Card
const SkillCard = ({ skill }) => (
  <div className="group relative flex items-center gap-5 p-5 bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all hover:bg-white/5">
    
    {/* Icon Box */}
    <div className={`p-4 rounded-xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
      {skill.icon}
    </div>

    {/* Text Info */}
    <div className="flex-1">
      <h4 className="text-lg font-bold text-white mb-1">{skill.name}</h4>
      <div className="flex items-center gap-2">
         <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
            <div 
              className={`h-full ${skill.color.split(" ")[0].replace("/20", "")}`} 
              style={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '80%' : '60%' }} 
            />
         </div>
         <span className="text-xs text-neutral-500">{skill.level}</span>
      </div>
    </div>

  </div>
);

export default Skills;  