import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

import ETSIImage from '../assets/ETSIImage.jpg?url';
import CambridgeImage from '../assets/CambridgeImage.jpg?url';
import LSImage from '../assets/LSImage.jpg?url';

export default function AcademicFormation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
    const formations = [
        {
            title: "B2 First",
            date: "Junio 2024",
            institution: "Cambridge English Language Assessment",
            image: CambridgeImage
        },
        {
            title: "Alumno Interno",
            date: "Octubre 2022 - Abril 2024",
            institution: "Departamente de Lenguajes y Sistemas Informáticos, Universidad de Sevilla",
            image: LSImage,
        },
      
        {
            title: "Grado en Ingeniería Informática - Ingeniería del Software",
            date: "2021 - Actualidad",
            institution: "Escuela Técnica Superior de Ingeniería Informática",
            image: ETSIImage
        },
    ];
  

    const sortedFormations = formations.sort((a, b) => {
        const isActualA = a.date.includes("Actualidad");
        const isActualB = b.date.includes("Actualidad");
    
        if (isActualA && !isActualB) return -1;
        if (!isActualA && isActualB) return 1;
    
        const getLastDate = (dateString) => {
          const dates = dateString.match(/\d{4}/g);
          return dates ? Math.max(...dates.map(Number)) : 0;
        };
    
        const lastDateA = getLastDate(a.date);
        const lastDateB = getLastDate(b.date);
    
        return lastDateB - lastDateA;
      });

    const lastUpdated = "16/01/2025";

  return (
    <section id="Formación" className="py-20 px-4 sm:px-6 md:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <GraduationCap className="text-emerald-400 w-6 h-6 sm:w-8 sm:h-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Formación Académica</h2>
        </motion.div>

        {/* Última actualización */}
        <motion.div 
          className="relative flex justify-center items-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="absolute text-sm sm:text-base text-emerald-400 bg-slate-900 px-4 py-1 rounded-md">
            Última actualización: {lastUpdated}
          </p>
          <div className="absolute w-1 bg-emerald-400 h-full transform"></div>
        </motion.div>

        <div className="relative flex flex-col items-center gap-12">
          {/* Vertical Line */}
          <div className="absolute left-1/2 w-1 bg-emerald-400 h-full transform -translate-x-1/2"></div>

          {sortedFormations.map((formation, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center gap-4 ${index % 2 === 0 ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row-reverse'} w-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Cuadrado con Imagen */}
              <div
                className={`relative w-full sm:w-1/2 md:w-1/3 h-48 rounded-md overflow-hidden shadow-lg flex-shrink-0 border-2 border-emerald-400 transform group`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Imagen */}
                <img 
                  src={formation.image} 
                  alt={formation.title} 
                  className="w-full h-full object-cover group-hover:opacity-30 transition-opacity duration-300"
                />

                {/* Texto dentro del div */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                  className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-300"
                >
                  <h3 className="font-bold text-lg sm:text-xl text-center">{formation.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 text-center">{formation.date}</p>
                  <p className="text-sm sm:text-base text-center"><strong>{formation.institution}</strong></p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
