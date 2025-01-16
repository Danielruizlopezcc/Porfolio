import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

import OPOSCHEDULEImage from '../assets/OPOSCHEDULEImage.jpg?url';
import UVLHUBIOImage from '../assets/UVLHUBIOImage.jpg?url';
import AprendizajeRefuerzUSImage from '../assets/AprendizajeRefuerzUSImage.jpg?url';
import GoGgamesImage from '../assets/GoGgamesImage.jpg?url';
import PetClinicImage from '../assets/PetClinicImage.jpg?url';
import MapasReinoImage from '../assets/MapasReinoImage.jpg?url';

export default function Projects() {
  const projects = [
    {
      title: "AprendizajeRefuerzUS",
      description: "Una librería de algoritmos de aprendizaje por refuerzo, desarrollados en Python, incluyendo algoritmos como Q-Learning, SARSA o Monte Carlo. La mayoría de ellos implementados de forma nativa y algunos de ellos utilizando mdptoolbox. La biblioteca es una herramienta escalable y fácil de usar que se puede utilizar para resolver un problema específico de robótica móvil, dado un mapa y un destino. El usuario puede elegir el modelo deseado, entrenarlo y ver la política de salida.",
      tech: ["Python", "Aprendizaje por Refuerzo", "Jupyter", "Numpy", "Matplotlib"],
      github: "https://github.com/rgavira123/AprendizajeRefuerzUS",
      image : AprendizajeRefuerzUSImage
    },
    {
      title: "OPOSCHEDULE",
      description: "Proyecto para la asignatura de Planificación y Gestión de Proyectos Informáticos. Se realizó una aplicación web para compra y gestión de cursos de oposiciones.",
      tech: ["Django", "Python", "CSS", "HTML", "JavaScript", "Bootstrap"],
      github: "https://github.com/JuanAntonioMorenoMoguel/PGPI-G1.12",
      preview: "https://daniruiz23.pythonanywhere.com/",
      image: OPOSCHEDULEImage
    },

    {
      title: "Tortilla-Hub",
      description: "Aportación a la plataforma 'Uvlhub' para la asignatura de Evolución y Gestión de la Configuración.",
      tech: ["Python", "HTML", "CSS", "JavaScript", "Flask", "CI/CD", "Testing"],
      github: "https://github.com/EGC-G2-tortilla/tortilla-hub",
      preview: "https://github.com/EGC-G2-tortilla/tortilla-hub/wiki",
      image: UVLHUBIOImage
    },
    {
      title: "GoGgames",
      description: "Proyecto para la asignatura de Acceso inteligente a la información. Desarrollé una página web de videojuegos con integración de sistemas de recomendación basado en contenido.",
      tech: ["Python", "HTML", "CSS", "Django", "SR", "BeautifulSoup", "Whoosh"],
      github: "https://github.com/Danielruizlopezcc/AIIWeb",
      image: GoGgamesImage
    },
    {
      title: "PetClinic",
      description: "Proyecto para la asignatura de Proceso Software y Gestion II, es un pequeño proyecto basado en la aplicación de Spring PetClinic para enseñar arquitecturas SPA",
      tech: ["Java", "JavaScript", "CSS", "API Rest", "React", "Spring Boot", "JWT"],
      preview: "https://psg2-2324-g1-12.wn.r.appspot.com/",
      image: PetClinicImage
    },
    {
      title: "Los Mapas del Reino",
      description: "Proyecto para la asignatura de Diseño y Pruebas I. Formé parte de un equipo de desarrollo para la creación de un juego de mesa digital.",
      tech: ["Java", "JavaScript", "CSS", "React", "Spring Boot", "WebSockets"],
      github: "https://github.com/rgavira123/Mapas_del_Reino",
      image: MapasReinoImage
    },
    
  ];

  return (
    <section id="Proyectos" className="py-20 px-4 sm:px-6 md:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <FolderGit2 className="text-emerald-400 w-6 h-6 sm:w-8 sm:h-8" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Proyectos</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700/50 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.image && (
                <div className="w-full h-40 mb-4 overflow-hidden rounded-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <h3 className="font-bold text-lg sm:text-xl group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4 flex-wrap">
                {project.tech.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="bg-emerald-400/10 text-emerald-400 text-xs sm:text-sm px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + techIndex * 0.1 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs sm:text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.263.793-.583 0-.287-.01-1.05-.016-2.06-3.338.724-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.204.084 1.837 1.263 1.837 1.263 1.07 1.833 2.807 1.303 3.492.997.108-.775.417-1.303.758-1.603-2.665-.303-5.467-1.333-5.467-5.933 0-1.313.468-2.387 1.237-3.227-.123-.304-.535-1.526.117-3.177 0 0 1.01-.324 3.3 1.23.957-.267 1.983-.4 3.003-.405 1.02.005 2.047.138 3.005.405 2.29-1.554 3.3-1.23 3.3-1.23.653 1.651.241 2.873.118 3.177.77.84 1.237 1.914 1.237 3.227 0 4.61-2.807 5.625-5.479 5.922.43.37.814 1.102.814 2.22 0 1.606-.015 2.897-.015 3.293 0 .323.192.7.798.582C20.565 22.297 24 17.798 24 12.5 24 5.87 18.63.5 12 .5z" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                )}
                {project.preview && (
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-xs sm:text-sm"
                  >
                    <span>🌐 Preview</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
