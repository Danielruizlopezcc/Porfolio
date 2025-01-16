import React from 'react';
import { motion } from 'framer-motion';
import { Moon } from 'lucide-react';

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
            className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.span>
          <div className="flex items-center gap-6">
            {['Experiencia', 'Proyectos', 'Formacion'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item}`} 
                className="hover:text-emerald-400 transition-colors capitalize"
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="p-2 hover:bg-slate-800 rounded-full transition-colors"
              whileHover={{ rotate: 180 }}
            >
              <Moon size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}