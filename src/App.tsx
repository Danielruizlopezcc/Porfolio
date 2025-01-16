import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Formacion from './components/Formacion';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Barra de navegación */}
      <Navigation />

      {/* Sección de héroe */}
      <Hero />

      {/* Experiencia laboral */}
      <Experience />

      {/* Formación académica */}
      <Formacion />

      {/* Proyectos */}
      <Projects />

      {/* Pie de página */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p className="text-sm sm:text-base">© 2025 Daniel Ruiz López. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
