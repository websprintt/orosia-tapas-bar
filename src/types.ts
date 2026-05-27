/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Dish {
  id: string;
  name: string;
  description: string;
  price?: string | number; 
  halfPrice?: string | number;      // For Raciones and Tostadas (Media Ración/Media Tostada)
  fullPrice?: string | number;      // For Raciones and Tostadas (Ración Entera/Tostada Entera)
  pulgaPrice?: string | number;     // For Bocadillos/Pulgas/Montados
  montadoPrice?: string | number;   // For Bocadillos/Pulgas/Montados
  bocadilloPrice?: string | number; // For Bocadillos/Pulgas/Montados
  isVegan: boolean;
  isVegetarian: boolean;
  isGlutenFree: boolean;
  isPopular: boolean;
  category: 'desayunos' | 'raciones' | 'bocadillos' | 'bebidas';
  subcategory?: 'bebidas_cafes' | 'tostadas' | 'combos' | 'raciones' | 'pulgas_bocadillos' | 'cervezas' | 'vinos_blancos' | 'vinos_tintos';
  tags?: string[];
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  text: string;
  avatarText?: string;
  imageUrl?: string;
  tags?: string[];
}

export interface Booking {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  dietaryNotes: string;
  veganOptionsInterested: boolean;
}
