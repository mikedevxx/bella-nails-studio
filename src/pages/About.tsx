import React from 'react';
import { Award, Heart, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Sobre Mí
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conoce la historia detrás de Bella Nails Studio y mi pasión por el arte en las uñas
          </p>
        </div>
        
        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="w-32 h-32 bg-pink-100 rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                <span className="text-4xl font-serif font-bold text-pink-600">MN</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
                María Nails
              </h2>
              <p className="text-pink-600 font-medium mb-4">
                Nail Artist & Emprendedora
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                Hola, soy María, y mi pasión por el arte en las uñas comenzó hace más de 5 años. 
                Lo que empezó como un hobby personal se convirtió en mi carrera cuando me di cuenta 
                de que podía combinar mi amor por la belleza con mi talento artístico.
              </p>
              
              <p>
                Bella Nails Studio nació de mi deseo de crear un espacio donde cada mujer pueda 
                expresar su personalidad única a través de sus uñas. Creo firmemente que las uñas 
                son el accesorio perfecto que siempre llevas contigo.
              </p>
              
              <p>
                Me especializo en técnicas modernas y diseños personalizados, siempre manteniéndome 
                actualizada con las últimas tendencias y productos de la industria. Cada clienta 
                es única, y mi objetivo es crear diseños que reflejen su estilo personal.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="María trabajando en diseños de uñas"
              className="rounded-2xl shadow-xl w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white p-6 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm">Clientas Satisfechas</p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">5+</h3>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
            <p className="text-gray-600">Clientas Felices</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">15+</h3>
            <p className="text-gray-600">Cursos Certificados</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">100%</h3>
            <p className="text-gray-600">Pasión y Dedicación</p>
          </div>
        </div>
        
        {/* Certifications */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6 text-center">
            Formación y Certificaciones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Técnicas de Uñas Acrílicas</h3>
                <p className="text-sm text-gray-600">Academia Internacional de Belleza</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Nail Art Avanzado</h3>
                <p className="text-sm text-gray-600">Escuela de Belleza Profesional</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Semipermanente y Gel</h3>
                <p className="text-sm text-gray-600">Instituto de Estética Integral</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Bioseguridad y Esterilización</h3>
                <p className="text-sm text-gray-600">Ministerio de Salud</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold mb-4">
              ¿Lista para tu transformación?
            </h2>
            <p className="mb-6 opacity-90">
              Agenda tu cita conmigo y descubre cómo puedo ayudarte a expresar tu estilo único
            </p>
            <a
              href="https://wa.me/573001234567?text=Hola%20María%2C%20me%20gustaría%20agendar%20una%20cita%20contigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors font-medium"
            >
              <span>Agendar Cita</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;