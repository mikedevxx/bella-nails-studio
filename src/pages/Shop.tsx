import React from 'react';
import { products } from '../data/mockData';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const Shop: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            Tienda
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complementa tu cuidado en casa con nuestros productos especializados para uñas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group ${
                index % 2 === 0 ? 'animate-fade-in-up' : 'animate-fade-in-up delay-100'
              }`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pink-600">
                    {product.price}
                  </span>
                  
                  <a
                    href={`https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20el%20producto%20${product.name}%20(${product.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors group-hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-sm font-medium">Comprar</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-4">
              Cuidado Premium en Casa
            </h2>
            <p className="text-gray-600 mb-6">
              Mantén tus uñas saludables y hermosas entre citas con nuestros productos especializados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20información%20sobre%20todos%20los%20productos%20disponibles"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors"
              >
                <span>Ver Catálogo Completo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://wa.me/573001234567?text=Hola%2C%20me%20gustaría%20información%20sobre%20descuentos%20en%20combos%20de%20productos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors border-2 border-pink-600"
              >
                <span>Descuentos en Combos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;