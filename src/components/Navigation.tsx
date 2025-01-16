import React from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-slate-900/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.span 
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Porfolio
          </motion.span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {['Experiencia', 'Formación', 'Proyectos'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item}`} 
                className="text-sm sm:text-base hover:text-emerald-400 transition-colors capitalize"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
