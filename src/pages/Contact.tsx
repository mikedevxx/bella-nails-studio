import React, { useState } from 'react';
import { MapPin, Clock, Phone, Instagram, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hola, me gustaría agendar una cita:
    
Nombre: ${formData.name}
Teléfono: ${formData.phone}
Servicio: ${formData.service}
Fecha preferida: ${formData.date}
Mensaje: ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/573001234567?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Contacto
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estoy aquí para ayudarte. Agenda tu cita o contáctame para cualquier consulta
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                Información de Contacto
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Teléfono</h3>
                    <p className="text-gray-600">+57 300 123 4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Ubicación</h3>
                    <p className="text-gray-600">Zona Norte, Bogotá</p>
                    <p className="text-sm text-gray-500">Atención domiciliaria disponible</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Horarios</h3>
                    <p className="text-gray-600">Lunes - Sábado: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Domingo: Citas especiales</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
                Síguenos en Redes
              </h2>
              
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/bellanails"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-sm text-gray-600">@bellanails</p>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">Chat directo</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-6">
              Agenda tu Cita
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="Tu número de teléfono"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="Manicura Clásica">Manicura Clásica</option>
                  <option value="Semipermanente">Semipermanente</option>
                  <option value="Uñas Acrílicas">Uñas Acrílicas</option>
                  <option value="Pedicura Spa">Pedicura Spa</option>
                  <option value="Decoraciones Especiales">Decoraciones Especiales</option>
                  <option value="Cuidado de Cutículas">Cuidado de Cutículas</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                  Fecha Preferida
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                  placeholder="Cuéntame sobre el diseño que tienes en mente..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-4 rounded-xl hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2 font-medium"
              >
                <Send className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;