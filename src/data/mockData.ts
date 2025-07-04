import { Service, GalleryItem, Testimonial, Product } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Manicura Clásica',
    description: 'Cuidado completo de uñas naturales con esmaltado tradicional',
    duration: '45 min',
    price: '$25.000',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '2',
    name: 'Semipermanente',
    description: 'Esmalte de larga duración con acabado profesional',
    duration: '60 min',
    price: '$35.000',
    image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '3',
    name: 'Uñas Acrílicas',
    description: 'Extensión y decoración con técnica acrílica',
    duration: '90 min',
    price: '$45.000',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '4',
    name: 'Pedicura Spa',
    description: 'Tratamiento completo de pies con relajación',
    duration: '60 min',
    price: '$30.000',
    image: 'https://images.pexels.com/photos/3997753/pexels-photo-3997753.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '5',
    name: 'Decoraciones Especiales',
    description: 'Diseños únicos para ocasiones especiales',
    duration: '120 min',
    price: '$55.000',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=500'
  },
  {
    id: '6',
    name: 'Cuidado de Cutículas',
    description: 'Tratamiento especializado para cutículas saludables',
    duration: '30 min',
    price: '$20.000',
    image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=500'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'elegante',
    title: 'Diseño Elegante'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'colorido',
    title: 'Estilo Colorido'
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'minimalista',
    title: 'Minimalista'
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/3997753/pexels-photo-3997753.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'especial',
    title: 'Ocasión Especial'
  },
  {
    id: '5',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'elegante',
    title: 'Estilo Clásico'
  },
  {
    id: '6',
    image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'colorido',
    title: 'Vibrante'
  },
  {
    id: '7',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'minimalista',
    title: 'Sutil'
  },
  {
    id: '8',
    image: 'https://images.pexels.com/photos/3997753/pexels-photo-3997753.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'especial',
    title: 'Evento'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    text: 'Increíble trabajo, mis uñas quedaron perfectas. Muy profesional y el ambiente es súper relajante.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ana Rodríguez',
    text: 'El mejor servicio de uñas que he probado. Siempre quedo encantada con los diseños.',
    rating: 5
  },
  {
    id: '3',
    name: 'Laura Martínez',
    text: 'Atención personalizada y resultados espectaculares. Totalmente recomendado.',
    rating: 5
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Kit de Cuidado Básico',
    price: '$15.000',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Kit completo para el cuidado diario de tus uñas'
  },
  {
    id: '2',
    name: 'Aceite Nutritivo',
    price: '$12.000',
    image: 'https://images.pexels.com/photos/3997392/pexels-photo-3997392.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Aceite especial para fortalecer y nutrir las uñas'
  },
  {
    id: '3',
    name: 'Press-on Nails',
    price: '$20.000',
    image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=300',
    description: 'Uñas postizas reutilizables con diseños únicos'
  }
];