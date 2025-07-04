import React, { useState } from 'react';
import { galleryItems } from '../data/mockData';
import { Filter } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'elegante', label: 'Elegante' },
    { id: 'colorido', label: 'Colorido' },
    { id: 'minimalista', label: 'Minimalista' },
    { id: 'especial', label: 'Especial' }
  ];
  
  const filteredItems = activeFilter === 'todos' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Galería de Diseños
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros diseños únicos y encuentra la inspiración perfecta para tu próxima cita
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="w-5 h-5 text-pink-600 mr-2" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-50 hover:text-pink-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index % 3 === 0 ? 'animate-fade-in-up' : 
                index % 3 === 1 ? 'animate-fade-in-up delay-100' : 
                'animate-fade-in-up delay-200'
              }`}
            >
              <div className="relative aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                    <span className="text-pink-200 text-xs capitalize">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No se encontraron diseños en esta categoría.
            </p>
          </div>
        )}
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              ¿Te gustó algún diseño?
            </h2>
            <p className="text-gray-600 mb-6">
              Agenda tu cita y recrea cualquiera de estos hermosos diseños, o créanos uno único para ti.
            </p>
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20me%20encantó%20uno%20de%20los%20diseños%20de%20la%20galería%20y%20me%20gustaría%20agendarlo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <span>Agendar Diseño</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;