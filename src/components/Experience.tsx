import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import pkg from 'react-vertical-timeline-component';
const { VerticalTimeline, VerticalTimelineElement } = pkg;
import 'react-vertical-timeline-component/style.min.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const experiences = [
    {
      title: "Técnico de Investigación",
      company: "Universidad de Sevilla (Proyecto ORCHID)",
      date: "Mayo 2024 - Actualidad",
      description: "Desarrollo de una biblioteca Python con algoritmos avanzados diseñados para crear bots capaces de diagnosticar enfermedades a partir de historias clínicas, integrando técnicas de procesamiento de lenguaje natural (NLP) y aprendizaje automático."
    },
    {
      title: "Becario",
      company: "FIDETIA (Proyecto POMPE_IA)",
      date: "Julio 2023 - Diciembre 2023",
      description: "Desarrollo de Pricing4API, un módulo Python diseñado para interpretar planes de precios de APIs remotas."
    }
  ];

  return (
    <section id="Experiencia" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Briefcase className="text-emerald-400" />
          <h2 className="text-2xl font-bold">Experiencia Laboral</h2>
        </motion.div>
        
        <VerticalTimeline lineColor="#10b981">
          {experiences.map((job, index) => (
            <VerticalTimelineElement
              key={index}
              position={index % 2 === 0 ? "left" : "right"}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(30 41 59)', color: '#fff', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid rgb(30 41 59)' }}
              date={job.date}
              iconStyle={{ background: 'rgb(16 185 129)', color: '#fff' }}
              icon={<Briefcase />}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-lg">{job.title}</h3>
                  <h4 className="text-emerald-400">{job.company}</h4>
                </div>
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="text-emerald-400 hover:text-emerald-300 focus:outline-none"
                >
                  {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="p-3 bg-slate-700 rounded-md mt-2"
                  >
                    <p className="text-slate-300 leading-tight">{job.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
