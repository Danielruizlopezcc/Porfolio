import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import miFoto from '../assets/mi-foto.jpg?url';

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const socialLinks = [
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/in/daniel-ruiz-l%C3%B3pez-37b812298/",
      label: "LinkedIn"
    },
    {
      Icon: Github,
      url: "https://github.com/Danielruizlopezcc",
      label: "GitHub"
    },
    {
      Icon: Mail,
      url: "mailto:druiz7@us.es",
      label: "Correo"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="max-w-6xl mx-auto text-center relative">
        <motion.div 
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <motion.img 
              src={miFoto}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-emerald-400"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.span 
              className="absolute bottom-0 right-0 bg-emerald-400 text-xs px-2 py-1 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Trabajando
            </motion.span>
          </div>
          <div>
            <motion.h1 
              className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
              {...fadeInUp}
            >
              Hola, soy Daniel Ruiz López
            </motion.h1>
            <motion.p 
              className="text-slate-300 max-w-2xl mx-auto text-lg"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Soy una persona muy trabajadora, responsable y resolutiva. Me considero amable, educado y con una gran capacidad de adaptación. Tengo una gran capacidad social y de comunicación, lo que me permite trabajar en equipo de manera eficiente. 
            </motion.p>
          </div>
          <motion.div 
            className="flex gap-4"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map(({ Icon, url, label }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-full hover:bg-emerald-400/20 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={24} className="text-emerald-400" />
        </motion.div>
      </div>
    </section>
  );
}
