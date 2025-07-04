import React from 'react';
import { MapPin, Clock, Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-800">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-sm text-gray-600">Zona Norte, Bogotá</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-600" />
                <span className="text-sm text-gray-600">+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-pink-600" />
                <span className="text-sm text-gray-600">Lun - Sáb: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-800">Enlaces Rápidos</h3>
            <div className="space-y-2">
              <a href="/servicios" className="block text-sm text-gray-600 hover:text-pink-600 transition-colors">
                Servicios
              </a>
              <a href="/galeria" className="block text-sm text-gray-600 hover:text-pink-600 transition-colors">
                Galería
              </a>
              <a href="/tienda" className="block text-sm text-gray-600 hover:text-pink-600 transition-colors">
                Tienda
              </a>
              <a href="/contacto" className="block text-sm text-gray-600 hover:text-pink-600 transition-colors">
                Contacto
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-bold text-gray-800">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/bellanails"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-pink-100 rounded-full hover:bg-pink-200 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-600" />
              </a>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-green-600" />
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Comparte tus diseños con #BellaNailsStudio
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Bella Nails Studio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;