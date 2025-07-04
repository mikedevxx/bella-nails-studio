export interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}