import React from 'react';
import Hero from '../components/Hero';
import TestimonialsSection from '../components/TestimonialsSection';
import { services } from '../data/mockData';
import { Clock, DollarSign, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <div className="pt-20">
      <Hero />
      
      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
              Servicios Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestros servicios más populares diseñados para realzar tu belleza natural
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={service.id}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                  index === 1 ? 'md:scale-105' : ''
                }`}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
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
                    href={`https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20agendar%20${service.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <span className="text-sm font-medium">Agendar</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/servicios"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
            >
              <span>Ver Todos los Servicios</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
      
      <TestimonialsSection />
    </div>
  );
};

export default Home;