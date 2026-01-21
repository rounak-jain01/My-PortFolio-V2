import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Send, MapPin, Mail, Phone, Copy, Check, Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopy = () => {
    navigator.clipboard.writeText("rounakjain049@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <SectionReveal title="CONTACT" id="contact">
      <div className="min-h-screen py-20 px-4 md:px-12 max-w-7xl mx-auto flex items-center">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN: CONTACT INFO (The Holographic Card) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-red-600"></div>
                    <span className="text-red-500 font-mono text-sm uppercase tracking-widest">Get in touch</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                    Let's Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
                        The Future.
                    </span>
                </h2>
                <p className="text-neutral-400 mt-6 text-lg max-w-md leading-relaxed">
                    Have a project in mind? Looking for a Business Analyst who can code? 
                    Or just want to discuss the latest in AI? I'm just a ping away.
                </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-6">
                
                {/* 1. Location */}
                <InfoCard 
                    icon={<MapPin size={24} />} 
                    label="Location" 
                    value="Bhopal, Madhya Pradesh, India" 
                    color="text-red-400"
                    bgColor="bg-red-500/10"
                    borderColor="group-hover:border-red-500/50"
                />

                {/* 2. Email (Click to Copy) */}
                <div onClick={handleCopy} className="cursor-pointer">
                    <InfoCard 
                        icon={copied ? <Check size={24} /> : <Mail size={24} />} 
                        label="Email" 
                        value="rounakjain049@gmail.com" 
                        subValue="Click to copy"
                        color={copied ? "text-green-400" : "text-purple-400"}
                        bgColor={copied ? "bg-green-500/10" : "bg-purple-500/10"}
                        borderColor="group-hover:border-purple-500/50"
                    />
                </div>

                {/* 3. Phone */}
                <InfoCard 
                    icon={<Phone size={24} />} 
                    label="Phone" 
                    value="+91 9926850762" 
                    color="text-blue-400"
                    bgColor="bg-blue-500/10"
                    borderColor="group-hover:border-blue-500/50"
                />

            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
                <SocialBtn icon={<Linkedin size={20} />} href="#" color="hover:text-blue-500" />
                <SocialBtn icon={<Github size={20} />} href="#" color="hover:text-white" />
                <SocialBtn icon={<Instagram size={20} />} href="#" color="hover:text-pink-500" />
                <SocialBtn icon={<Twitter size={20} />} href="#" color="hover:text-sky-400" />
            </div>

          </motion.div>


          {/* --- RIGHT COLUMN: THE FORM (The Control Panel) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 blur-[80px] rounded-full -z-10" />

            {/* Form Container */}
            <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                
                {/* Decorative Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-purple-500 to-transparent opacity-50" />

                <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                <form className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup label="Your Name" name="name" type="text" placeholder="John Doe" value={formState.name} onChange={handleChange} />
                        <InputGroup label="Your Email" name="email" type="email" placeholder="john@example.com" value={formState.email} onChange={handleChange} />
                    </div>
                    
                    <InputGroup label="Subject" name="subject" type="text" placeholder="Project Collaboration" value={formState.subject} onChange={handleChange} />
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">Your Message</label>
                        <textarea 
                            name="message"
                            rows="4"
                            placeholder="Tell me about your project..."
                            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all resize-none"
                            value={formState.message}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="button" // Use 'submit' for real forms
                        className="w-full py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl shadow-[0_10px_30px_rgba(220,38,38,0.3)] hover:shadow-[0_10px_40px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        Send Message <Send size={18} />
                    </button>

                </form>

            </div>
          </motion.div>

        </div>
      </div>
    </SectionReveal>
  );
};

// --- SUB-COMPONENTS ---

// 1. Info Card (The Glass Row)
const InfoCard = ({ icon, label, value, subValue, color, bgColor, borderColor }) => (
    <div className={`group flex items-center gap-5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 ${borderColor} transition-all duration-300`}>
        <div className={`p-3 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform`}>
            {icon}
        </div>
        <div>
            <p className="text-xs text-neutral-500 font-bold uppercase tracking-wider mb-1">{label}</p>
            <p className="text-white font-medium text-lg leading-none">{value}</p>
            {subValue && <p className="text-xs text-neutral-500 mt-1 italic">{subValue}</p>}
        </div>
    </div>
);

// 2. Input Group (Animated Focus)
const InputGroup = ({ label, name, type, placeholder, value, onChange }) => (
    <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-neutral-500 ml-1">{label}</label>
        <div className="relative group">
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:border-red-500/50 focus:bg-black/60 transition-all"
                value={value}
                onChange={onChange}
            />
            {/* Glow Line on Focus */}
            <div className="absolute bottom-0 left-2 right-2 h-[1px] bg-red-500 scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500" />
        </div>
    </div>
);

// 3. Social Button
const SocialBtn = ({ icon, href, color }) => (
    <a 
        href={href} 
        className={`p-3 bg-white/5 rounded-full text-neutral-400 border border-white/5 hover:bg-white/10 hover:border-white/20 ${color} transition-all duration-300`}
    >
        {icon}
    </a>
);

export default Contact;