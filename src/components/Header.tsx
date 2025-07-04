import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/galeria', label: 'Galería' },
    { path: '/sobre-mi', label: 'Sobre Mí' },
    { path: '/tienda', label: 'Tienda' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors">
              <Sparkles className="w-6 h-6 text-pink-600" />
            </div>
            <div>
              <h1 className="text-xl font-serif font-bold text-gray-800">Bella Nails</h1>
              <p className="text-xs text-pink-600 -mt-1">Studio</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative ${
                  isActiveRoute(item.path)
                    ? 'text-pink-600'
                    : 'text-gray-700 hover:text-pink-600'
                }`}
              >
                {item.label}
                {isActiveRoute(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-600 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center space-x-2 bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
          >
            <span className="text-sm font-medium">Agendar Cita</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    isActiveRoute(item.path)
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20agendar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;