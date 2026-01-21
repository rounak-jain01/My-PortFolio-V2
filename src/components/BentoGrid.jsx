import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, GraduationCap, Github, Linkedin, ExternalLink } from "lucide-react";

// Animation settings: Cards neeche se upar aayenge
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable Card Component (Glass Style)
const Card = ({ children, className = "" }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.02 }} // Hover karne par thoda zoom hoga
    className={`bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-3xl hover:border-purple-500/50 transition-colors duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

const BentoGrid = () => {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-4 md:px-10">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl md:text-6xl font-bold mb-16 text-center"
      >
        My Universe
      </motion.h2>

      {/* Main Grid Layout */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }} // Ek ke baad ek card aayega
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto"
      >
        
        {/* Card 1: Internship (Bada Card) */}
        <Card className="col-span-1 md:col-span-2 lg:col-span-2 row-span-1 bg-gradient-to-br from-purple-900/20 to-black">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-purple-500/20 rounded-full">
              <Briefcase className="text-purple-400" size={24} />
            </div>
            <span className="text-sm text-gray-400">2025 - Present</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Business Analyst Intern</h3>
          <p className="text-gray-400 mb-4">@ Zarthi</p>
          <p className="text-sm text-gray-300">
            Bridging the gap between code and product. Creating PRDs, working with the Product Team, and solving real business problems.
          </p>
        </Card>

        {/* Card 2: Fasal Sarthi (Project) */}
        <Card className="col-span-1 md:col-span-1 lg:col-span-2 bg-gradient-to-br from-green-900/20 to-black">
           <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-green-500/20 rounded-full">
              <Code className="text-green-400" size={24} />
            </div>
            <a href="#" className="hover:text-green-400 transition-colors"><ExternalLink size={20}/></a>
          </div>
          <h3 className="text-2xl font-bold mb-1">Fasal Sarthi</h3>
          <p className="text-xs text-green-400 mb-2 uppercase tracking-wider">Top Project</p>
          <p className="text-sm text-gray-300">
            AI-powered crop recommendation system. Helping farmers make data-driven decisions using ML & Full Stack Tech.
          </p>
        </Card>

        {/* Card 3: Skills Cloud */}
        <Card className="col-span-1 md:col-span-1 row-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-200">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Python", "ML", "Tailwind", "Figma", "SQL"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </Card>

        {/* Card 4: Education */}
        <Card className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-4 mb-2">
             <div className="p-2 bg-blue-500/20 rounded-full">
              <GraduationCap className="text-blue-400" size={20} />
            </div>
            <h3 className="text-xl font-bold">Sagar Institute of Science & Technology</h3>
          </div>
          <p className="text-gray-400 text-sm ml-12">3rd Year Student • Entrepreneurship Cell Member</p>
        </Card>

        {/* Card 5: Connect */}
        <Card className="col-span-1 flex flex-col justify-center items-center gap-4 bg-white/5 hover:bg-white/10 cursor-pointer">
          <p className="text-gray-400 text-sm">Let's Connect</p>
          <div className="flex gap-4">
            <Github className="text-white hover:text-purple-400 transition-colors" size={28} />
            <Linkedin className="text-white hover:text-blue-400 transition-colors" size={28} />
          </div>
        </Card>

      </motion.div>
    </section>
  );
};

export default BentoGrid;