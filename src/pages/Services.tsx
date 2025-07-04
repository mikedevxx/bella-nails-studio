import React from 'react';
import { services } from '../data/mockData';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios profesionales para el cuidado y embellecimiento de tus uñas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up delay-100'
              }`}
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {service.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-pink-600" />
                    <span className="text-sm font-semibold text-gray-800">{service.price}</span>
                  </div>
                </div>
                
                <a
                  href={`https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20agendar%20${service.name}%20(${service.price})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-pink-600 text-white py-3 rounded-full hover:bg-pink-700 transition-colors group-hover:scale-105"
                >
                  <span className="font-medium">Agendar Cita</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-gray-600 mb-6">
              Ofrecemos servicios personalizados. Contáctanos para crear el diseño perfecto para ti.
            </p>
            <a
              href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20información%20sobre%20servicios%20personalizados"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <span>Consultar Servicio Personalizado</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;