import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
            Resalta tu estilo con
            <span className="text-pink-600 block">uñas únicas</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Diseños personalizados que reflejan tu personalidad. 
            Cada uña es una obra de arte hecha especialmente para ti.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="text-lg font-medium">Agendar Cita</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <a
              href="/galeria"
              className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-4 rounded-full hover:bg-pink-50 transition-all duration-300 border-2 border-pink-600"
            >
              <span className="text-lg font-medium">Ver Galería</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;