import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Lo que dicen nuestras clientas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfacción de nuestras clientas es nuestra mayor recompensa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                index === 1 ? 'md:scale-105' : ''
              }`}
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-pink-600 mr-3" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Cliente verificada</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;