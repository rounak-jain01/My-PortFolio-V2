import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Github, Linkedin, Twitter, ArrowUpRight, Instagram } from "lucide-react";

const Contact = () => {
  // Apne actual social media profile links yahan daalna
  const socialLinks = [
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com/rounak-jain01/", hover: "hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/imrounakjain/", hover: "hover:border-blue-500 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "https://www.instagram.com/rounak_jain_01/", hover: "hover:border-red-400 hover:text-gray-300 hover:shadow-[0_0_20px_rgba(156,163,175,0.2)]" },
  ];

  return (
    <section className="relative w-full bg-[#050505] py-24 md:py-32 px-4 md:px-8 overflow-hidden font-sans" id="Contact">
      
      {/* --- BACKGROUND GLOWS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/10 rounded-full bg-white/[0.03] text-gray-300 text-xs tracking-[0.3em] font-bold uppercase mb-6 backdrop-blur-md"
          >
            <MessageSquare size={14} className="text-purple-400" /> Get In Touch
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Together.</span>
          </motion.h2>
        </div>

        {/* --- SPLIT LAYOUT: INFO (LEFT) & FORM (RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* LEFT SIDE: Contact Info & Socials */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-12 max-w-md">
              Whether you want to discuss a new opportunity, have a question about my work, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            {/* Contact Detail Cards */}
            <div className="flex flex-col gap-6 mb-12 md:mb-16">
              
              <div className="group flex items-center gap-6 p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Email Me</p>
                  <a href="mailto:hello@rounakjain.com" className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-purple-300 transition-colors">
                    rounakjain049@gmail.com
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-4 md:p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg md:text-xl font-medium text-gray-200 group-hover:text-blue-300 transition-colors">
                    Bhopal, India
                  </p>
                </div>
              </div>

            </div>

            {/* --- ADDED: SOCIAL MEDIA LINKS --- */}
            <div className="flex flex-col gap-4 mt-auto">
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest pl-2">
                Also find me on
              </p>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/10 text-gray-400 transition-all duration-300 hover:-translate-y-1 ${social.hover}`}
                  >
                    {social.icon}
                    <span className="font-medium text-sm">{social.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>

          </motion.div>


          {/* RIGHT SIDE: The Sleek Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              className="flex flex-col gap-6 p-8 md:p-10 rounded-[2rem] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Subtle top inner glow for the form card */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe"
                    className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="What is this regarding?"
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-400 uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  placeholder="Hi Rounak, I'd like to talk about..."
                  className="w-full bg-[#111111] border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative w-full flex items-center justify-center gap-3 bg-white text-black font-bold text-lg rounded-xl px-8 py-4 overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Button Hover Effect Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Send Message</span>
                <Send size={20} className="relative z-10 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;