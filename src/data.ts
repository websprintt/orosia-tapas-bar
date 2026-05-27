/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Dish, Review } from './types';

// Let's import the actual local images generated for Orosia
// @ts-ignore
import heroImage from './assets/images/orosia_hero_1779834677563.png';
// @ts-ignore
import tapasImage from './assets/images/orosia_tapas_1779834694520.png';
// @ts-ignore
import pulpoImage from './assets/images/orosia_pulpo_1779834712157.png';

export const OROSIA_INFO = {
  name: 'Orosia',
  tagline: 'Tapas de autor, vinos extraordinarios y alma libre',
  description: 'Un rincón pintoresco en el corazón de Ciudad Real. Proponemos una experiencia gastronómica honesta que fusiona el recetario tradicional manchego con toques creativos modernos, cuidando de forma excelente nuestras aclamadas opciones veganas, vegetarianas y sin gluten.',
  rating: 4.6,
  reviewCount: 1685,
  priceRange: '€20-30',
  address: 'C. Libertad, 12, 13003 Ciudad Real',
  // Base64 obfuscated to block automatic scraping bots
  b64Phone: 'KzM0IDYwMSAzMSA4OCAzNQ==', // '+34 601 31 88 35'
  b64PhonePlain: 'KzM0NjAxMzE4ODM1', // '+34601318835'
  b64Email: 'cmVzZXJ2YXNAb3Jvc2lhY3IuZXM=', // 'reservas@orosiacr.es'
  b64Whatsapp: 'aHR0cHM6Ly93YS5tZS8zNDYwMTMxODgzNQ==', // 'https://wa.me/34601318835'
  phone: '+34 601 31 88 35',
  phonePlain: '+34601318835',
  plusCode: 'X3PF+FX Ciudad Real',
  schedule: 'Abierto todos los días de 13:00 a 16:30 y de 20:00 a 23:30',
  closingTimeToday: '23:30',
  mapsUrl: 'https://maps.google.com/?q=Orosia+C.+Libertad,+12,+13003+Ciudad+Real',
  instagramUrl: 'https://instagram.com',
  facebookUrl: 'https://m.facebook.com/p/Orosia-Gastronom%C3%ADa-100063546741773/',
  logoText: 'OROSIA',
};

// Export actual generated image assets so components can render them
export const OROSIA_ASSETS = {
  hero: heroImage,
  tapas: tapasImage,
  pulpo: pulpoImage,
};

export const MENU_DISHES: Dish[] = [
  // --- DESAYUNOS: BEBIDAS ---
  {
    id: 'd-cafe',
    name: 'Café (Solo / Cortado / Con Leche)',
    description: 'Café de tueste natural premium, molido y servido al instante con crema densa.',
    price: 1.50,
    isVegan: true, // can default to oat milk or soy milk upon request
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'bebidas_cafes',
    tags: ['Especial Crecimiento', 'Tueste Natural']
  },
  {
    id: 'd-cafe-bombon',
    name: 'Café Bombón',
    description: 'Espresso intenso condensado sobre base de leche condensada dulce y cremosa.',
    price: 1.80,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'bebidas_cafes',
    tags: ['Dulce tentación']
  },
  {
    id: 'd-infusiones',
    name: 'Infusiones Variadas',
    description: 'Manzanilla, poleo menta, té negro o té verde premium.',
    price: 1.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'bebidas_cafes',
    tags: ['Digestivo']
  },
  {
    id: 'd-rooibos',
    name: 'Té Rooibos Gourmet',
    description: 'Infusión selecta libre de teína con notas aromáticas dulces.',
    price: 2.20,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'bebidas_cafes',
    tags: ['Sin Teína', 'Relax']
  },
  {
    id: 'd-colacao',
    name: 'Cola Cao Tradicional',
    description: 'Bebida de chocolate soluble clásico español batido con leche caliente a elegir.',
    price: 1.80,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'bebidas_cafes',
    tags: ['Clásico de mañana']
  },

  // --- DESAYUNOS: TOSTADAS & SANDWICHES ---
  {
    id: 't-tomate',
    name: 'Tostada de Tomate, Mantequilla o Mermelada',
    description: 'Media rebanada o tostada entera de pan de barra tradicional con tomate rallado natural o aderezos dulces.',
    halfPrice: 1.80,
    fullPrice: 3.00,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: false,
    isPopular: true,
    category: 'desayunos',
    subcategory: 'tostadas',
    tags: ['Económica', 'Sana']
  },
  {
    id: 't-jamon',
    name: 'Tostada de Jamón Curado',
    description: 'Tostada untada con tomate rallado, aceite de oliva virgen extra y generosas lascas de jamón curado rústico.',
    halfPrice: 2.50,
    fullPrice: 4.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'desayunos',
    subcategory: 'tostadas',
    tags: ['Recomendado', 'Tradicional']
  },
  {
    id: 't-embutido',
    name: 'Tostada de Bacon, Lomo, Magreta o Jamón York',
    description: 'Tostada caliente salteada a la plancha con la pieza de tu carne de cerdo favorita.',
    halfPrice: 2.05,
    fullPrice: 3.50,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'tostadas'
  },
  {
    id: 't-sandwich',
    name: 'Sándwich Mixto o Vegetal',
    description: 'Sándwich doble tostado en plancha de mantequilla. Mixto de jamón york y queso fundido, o vegetal con lechuga, tomate y espárragos.',
    price: 3.50,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'tostadas',
    tags: ['Hecho al momento']
  },

  // --- DESAYUNOS: COMBOS DE OFERTA ---
  {
    id: 'c-cafe-tostada',
    name: 'Combo: Café + 1/2 Tostada',
    description: 'Desayuno diario con café caliente a elegir y media tostada dulce o con tomate rallado.',
    price: 3.00,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: false,
    isPopular: true,
    category: 'desayunos',
    subcategory: 'combos',
    tags: ['Oferta Oro', 'Desayuno Diario']
  },
  {
    id: 'c-cafe-jamon',
    name: 'Combo: Café + 1/2 Tostada de Jamón',
    description: 'Café aromático maridado con media tostada tradicional de jamón curado con aceite de oliva.',
    price: 3.50,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'desayunos',
    subcategory: 'combos',
    tags: ['Desayuno Manchego']
  },
  {
    id: 'c-cafe-pulga',
    name: 'Combo: Café + Pulga Variada',
    description: 'Café a elegir junto con nuestra pulga crujiente con fiambre, bacon, lomo u options calientes.',
    price: 3.50,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'combos'
  },
  {
    id: 'c-cafe-pulga-jamon',
    name: 'Combo: Café + Pulga de Jamón',
    description: 'Un rápido café maridado con media pulga crujiente rellena de sabroso jamón curado.',
    price: 3.70,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'desayunos',
    subcategory: 'combos'
  },
  {
    id: 'c-cafe-pincho',
    name: 'Combo: Café + Pincho de Tortilla',
    description: 'Nuestra oferta más vendida por las mañanas. Café cremoso acompañado de una porción de tortilla de patata.',
    price: 4.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'desayunos',
    subcategory: 'combos',
    tags: ['Top Ventas Mañana']
  },

  // --- RACIONES ---
  {
    id: 'r-bravas',
    name: 'Patatas Bravas o Ali Oli',
    description: 'Patatas doradas y crujientes por fuera con interior tierno, bañadas en salsa brava tradicional o alioli.',
    halfPrice: 6.00,
    fullPrice: 10.00,
    isVegan: true, // upon request without egg egg-less garlic
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['Receta Secreta', 'Clásicas']
  },
  {
    id: 'r-ensalada',
    name: 'Ensalada Mixta de la Huerta',
    description: 'Lechuga tierna, rodajas de tomate campestre, cebolleta fresca, huevo cocido de granja y selecto atún.',
    halfPrice: 7.00,
    fullPrice: 12.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-nuggets',
    name: 'Nuggets, Fingers o Salchichas con Patatas',
    description: 'Combinación perfecta de fritos crujientes servidos con un colchón de patatas fritas calientes de corte rústico.',
    halfPrice: 7.00,
    fullPrice: 12.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-alitas',
    name: 'Alitas de Pollo Fritas Crujientes',
    description: 'Alitas marinadas con especias, ajo y perejil, doradas a alta temperatura con textura jugosa y crujiente.',
    halfPrice: 7.00,
    fullPrice: 12.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: false,
    category: 'raciones',
    tags: ['Piel Tozada']
  },
  {
    id: 'r-croquetas',
    name: 'Croquetas Crocantes de la Casa',
    description: 'Inigualable bechamel cremosa empanada en fino polvo crocante, fritas al punto de oro.',
    halfPrice: 7.00,
    fullPrice: 12.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    isPopular: true,
    category: 'raciones',
    tags: ['Favorito Infantil', 'Caseras']
  },
  {
    id: 'r-jamon',
    name: 'Ración de Jamón Curado',
    description: 'Exquisito jamón curado seleccionado de bodega en Ciudad Real, cortado fino y servido a temperatura ambiental.',
    halfPrice: 10.00,
    fullPrice: 18.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['De la Bodega']
  },
  {
    id: 'r-queso',
    name: 'Queso Curado Manchego',
    description: 'Selecto queso puro manchego curado con sabor intenso y madera aromática.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'raciones',
    tags: ['D.O. La Mancha']
  },
  {
    id: 'r-jamon-queso',
    name: 'Surtido de Jamón Ibérico y Queso',
    description: 'La combinación manchega definitiva para el deleite absoluto de tu grupo de amigos.',
    halfPrice: 9.00,
    fullPrice: 16.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['El Maridaje Perfecto']
  },
  {
    id: 'r-huevos-rotos',
    name: 'Huevos Rotos con Jamón o Chorizo de Venao',
    description: 'Nido crujiente de patatas sazonadas con dos huevos fritos rotos y el sabor indómito del chorizo de venado local o jamón.',
    halfPrice: 9.00,
    fullPrice: 16.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['Especialidad de la Sierra', 'Furia Manchega']
  },
  {
    id: 'r-torreznos',
    name: 'Torreznos Crujientes de Soria',
    description: 'Tiras de panceta frita con la corteza increíblemente crujiente e interior carnoso jugoso.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['Extra Crujiente']
  },
  {
    id: 'r-oreja',
    name: 'Oreja de Cerdo Adobada a la Plancha',
    description: 'Oreja crujiente troceada y marcada sobre la plancha con su adobo picantón alegre.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: true,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-rejos',
    name: 'Rejos fritos al Limón',
    description: 'Patas de calamar frito tiernas y sazonadas, con un ligero empanado aireado.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-calamares',
    name: 'Calamares a la Romana',
    description: 'Anillas de calamar tiernísimas pasadas por fritura crujiente en tempura manchega dorada.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'raciones',
    tags: ['Clásico de Taberna']
  },
  {
    id: 'r-boquerones',
    name: 'Boquerones Fritos crujientes',
    description: 'Boquerones costeros frescos limpios de espinas, enharinados y fritos al estilo andaluz.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-gambas',
    name: 'Gambas Rebozadas de la Casa',
    description: 'Gambas carnosas peladas con bechamel sutil, pasadas por crujiente tempura de oro.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'raciones'
  },
  {
    id: 'r-cazon',
    name: 'Cazón en Adobo (Bienmesabe)',
    description: 'Dados jugosos de cazón marinados en cominos, vinagre y especias secretas antes de ser enharinados y fritos.',
    halfPrice: 8.00,
    fullPrice: 15.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'raciones',
    tags: ['Sabor Andaluz']
  },
  {
    id: 'r-tortilla-entera',
    name: 'Tortilla de Patata Entera (Al Gusto)',
    description: 'Tortilla de patatas casera de gran dimensión hecha bajo pedido: con o sin cebolla, cuajada o jugosa.',
    fullPrice: 16.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'raciones',
    tags: ['Hecho al instante', 'Artesano de oro']
  },

  // --- PULGAS, MONTADOS Y BOCADILLOS ---
  {
    id: 'b-jamon',
    name: 'Jamón Curado Rústico',
    description: 'Excelente jamón cortado fino con tomate restregado o aceite de oliva virgen.',
    pulgaPrice: 2.70,
    montadoPrice: 4.00,
    bocadilloPrice: 7.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'bocadillos',
    tags: ['Clásico fundamental']
  },
  {
    id: 'b-combinado',
    name: 'Lomo, Panceta, Magreta, Bacon o Pechuga de Pollo',
    description: 'Tu pieza caliente hecha a la plancha de hierro al instante. Servido jugoso y tierno.',
    pulgaPrice: 2.50,
    montadoPrice: 3.50,
    bocadilloPrice: 6.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'bocadillos'
  },
  {
    id: 'b-combinado-queso',
    name: 'Combinado con Queso Fundido',
    description: 'Cualquiera de nuestras carnes (bacon, lomo, magreta o pollo) coronada con sabroso queso derretido caliente.',
    pulgaPrice: 2.70,
    montadoPrice: 4.00,
    bocadilloPrice: 7.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'bocadillos',
    tags: ['Fundido Sabroso']
  },
  {
    id: 'b-embutido-trad',
    name: 'Salchichón, Chorizo o Morcilla Española',
    description: 'Tradicional embutido español procedente de la despensa de Ciudad Real en pan calentito.',
    pulgaPrice: 2.50,
    montadoPrice: 3.50,
    bocadilloPrice: 6.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'bocadillos'
  },
  {
    id: 'b-chorizo-venao',
    name: 'Chorizo de Venao de Monte salvaje',
    description: 'Exclusividad cinegética de alta gama. Carne de venado adobada en tripa natural.',
    pulgaPrice: 2.70,
    montadoPrice: 4.00,
    bocadilloPrice: 7.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'bocadillos',
    tags: ['Joyita Salvaje', '100% Autóctono']
  },
  {
    id: 'b-atun',
    name: 'Atún Claro del Norte',
    description: 'Atún desmigado en aceite fino con su toque opcional de tomate fresco montado.',
    pulgaPrice: 2.50,
    montadoPrice: 3.50,
    bocadilloPrice: 6.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: false,
    category: 'bocadillos'
  },
  {
    id: 'b-calamares',
    name: 'Bocata de Calamares Tradicional',
    description: 'Genuina e insustituible bocata de calamares dorados a la andaluza crujientes con mayonesa.',
    pulgaPrice: 2.70,
    montadoPrice: 4.00,
    bocadilloPrice: 7.00,
    isVegan: false,
    isVegetarian: false,
    isGlutenFree: false,
    isPopular: true,
    category: 'bocadillos',
    tags: ['Un Icono']
  },
  {
    id: 'b-tortilla',
    name: 'Montado o Bocadillo de Tortilla de Patatas',
    description: 'Nuestra jugosa porción de tortilla acunada en tierno pan de panadería artesana.',
    pulgaPrice: 2.50,
    montadoPrice: 3.50,
    bocadilloPrice: 6.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: false,
    isPopular: false,
    category: 'bocadillos'
  },
  {
    id: 'b-pincho-tortilla',
    name: 'Pincho de Tortilla Española Individual',
    description: 'Un trozo grueso cargado de historia, cocinado con cariño al punto jugoso manchego.',
    price: 3.50,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bocadillos'
  },
  {
    id: 'b-mini-tortilla-individual',
    name: 'Mini Tortilla de Patatas al Gusto',
    description: 'Una sutil y pequeña tortilla individual cocinada al instante de recibir tu comanda.',
    price: 4.00,
    isVegan: false,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bocadillos',
    tags: ['Recién Cuajada']
  },

  // --- BEBIDAS (CERVEZAS Y VINOS) ---
  {
    id: 'bev-maestra',
    name: 'Mahou Maestra',
    description: 'Cerveza de doble lúpulo, con intenso color tostado, notas de malta y gran cuerpo al paladar.',
    price: 3.20,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'cervezas',
    tags: ['Selección Malta']
  },
  {
    id: 'bev-reserva',
    name: 'Mahou Cinco Estrellas Reserva / Barrica',
    description: 'Cerveza lager madurada lentamente con matices ambarinos y regusto prolongado.',
    price: 3.20,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'cervezas'
  },
  {
    id: 'bev-alhambra',
    name: 'Alhambra Especial / 1925',
    description: 'La mítica e icónica botella verde andaluza con lúpulo floral de amargor fino de Rueda.',
    price: 3.20,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'cervezas',
    tags: ['De Culto']
  },
  {
    id: 'bev-coronita',
    name: 'Coronita Mexicana Extra',
    description: 'La mundialmente conocida cerveza suave y refrescante, de trago largo con lima natural.',
    price: 3.20,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'cervezas'
  },
  {
    id: 'w-jfernando',
    name: 'J. Fernando (Verdejo)',
    description: 'D.O. Rueda. Vino blanco frutal de entrada elegante, ideal con pescado y pescaito frito.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_blancos',
    tags: ['D.O. Rueda']
  },
  {
    id: 'w-muchomas-b',
    name: 'Mucho Más Blanco',
    description: 'Varietal moderno, goloso y muy refrescante con intensas notas de cítricos maduros.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'vinos_blancos',
    tags: ['Más vendido']
  },
  {
    id: 'w-vinacuerva',
    name: 'Viña Cuerva',
    description: 'Excelente blanco de crianza manchega con sabores armónicos frutales.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_blancos'
  },
  {
    id: 'w-vinaxetar-b',
    name: 'Viña Xetar Dulce',
    description: 'Vino dulce espumoso burbujeante de aguja apetecible y muy refrescante.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'vinos_blancos',
    tags: ['Vino Dulce de Aguja']
  },
  {
    id: 'w-yugo-b',
    name: 'Yugo Blanco Joven',
    description: 'D.O. La Mancha. Sabor fresco, afrutado de gran pureza con matices herbáceos.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_blancos'
  },
  {
    id: 'w-dehesa',
    name: 'Dehesa del Carrizal',
    description: 'Vino de Pago exclusivo de Ciudad Real. Complejidad monumental envejecida en roble fino.',
    price: 3.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'vinos_tintos',
    tags: ['Vino de Pago Exclusivo']
  },
  {
    id: 'w-capellanes',
    name: 'Pago de los Capellanes Crianza',
    description: 'D.O. Ribera del Duero. Majestuoso tinto con aromas primarios de frutas negras maduras y cacao.',
    price: 3.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'vinos_tintos',
    tags: ['Ribera del Duero']
  },
  {
    id: 'w-laya',
    name: 'Laya Tinto Selección',
    description: 'D.O. Almansa. Garnacha Tintorera, un vino seductor con una densidad y color asombrosos.',
    price: 3.00,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  },
  {
    id: 'w-ramonbilbao',
    name: 'Ramón Bilbao Crianza',
    description: 'D.O.Ca. Rioja. El Rioja por excelencia, equilibrado, clásico con aroma a roble y vainilla.',
    price: 3.00,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos',
    tags: ['Clásico Rioja']
  },
  {
    id: 'w-rupestre-e',
    name: 'Rupestre Esencia Cabernet',
    description: 'Vinto tinto potente y sedoso con un final tostado redondo y retrogusto maduro.',
    price: 3.00,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  },
  {
    id: 'w-corcovo',
    name: 'Corcovo Tinto Tempranillo',
    description: 'D.O. Valdepeñas. Joven, chispeante y lleno de fruta roja, ideal para el tapeo cotidiano del bar.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  },
  {
    id: 'w-muchomas-t',
    name: 'Mucho Más Tinto de Autor',
    description: 'Sabor goloso a cerezas negras y ciruelas con sutiles toques a pastelería dulce por barrica.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: true,
    category: 'bebidas',
    subcategory: 'vinos_tintos',
    tags: ['Tinto de Autor']
  },
  {
    id: 'w-pasoapaso',
    name: 'Paso a Paso Tempranillo Ecológico',
    description: 'D.O. La Mancha. Tinto orgánico expresivo, sutil e idealmente equilibrado en acidez.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos',
    tags: ['Ecológico']
  },
  {
    id: 'w-rupestre-c',
    name: 'Rupestre Clásico Tinto',
    description: 'Cuerpo redondo con notas a frutos maduros del bosque manchego.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  },
  {
    id: 'w-vinaxetar-t',
    name: 'Viña Xetar Tinto Dulce',
    description: 'Tempranillo tinto dulce espumoso de burbuja suave y frescor idílico.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  },
  {
    id: 'w-yugo-t',
    name: 'Yugo Tinto Crianza',
    description: 'D.O. La Mancha. Sabroso bouquet con recuerdos a regaliz, madurez frutal y maderas finas.',
    price: 2.50,
    isVegan: true,
    isVegetarian: true,
    isGlutenFree: true,
    isPopular: false,
    category: 'bebidas',
    subcategory: 'vinos_tintos'
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Agustín Fernández Lucas',
    role: 'Local Guide',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'Lo visité y me llevé una gratísima sorpresa tanto por su carta, atención en el servicio profesional, rápido y atento y una cocina actualizada y sorprendente, con sabores muy bien combinados. Sus postres son deliciosos !! Una maravilla en pleno centro de la ciudad.',
    avatarText: 'AF',
    tags: ['Carta original', 'Postres', 'Servicio excelente']
  },
  {
    id: 'rev-2',
    author: 'Carol Infante',
    role: 'Opinión Verified',
    rating: 5,
    date: 'Hace 5 meses',
    text: 'La atención de 10, el camarero estuvo atento todo el rato sin agobiar, que eso es importante. La comida muy buena, se nota que es calidad y de primera. El precio acorde con lo que ofrecen, pedimos 3 platos y nos quedamos muy bien 2 personas.',
    avatarText: 'CI',
    tags: ['Calidad', 'Precio justo', 'Atentos']
  },
  {
    id: 'rev-3',
    author: 'Irene',
    role: 'Viajera Frecuente',
    rating: 5,
    date: 'Hace 7 meses',
    text: 'Paramos en Ciudad Real en un viaje de carretera y al ver que Orosia ofrecía opciones veganas de alta calidad decidimos parar, ¡y fue un acierto absoluto! Pedimos platos veganos y vegetarianos exquisitos, y fueron tan atentos que nos preguntaron si éramos veganos estrictos para servirnos la salsa brava con huevo completamente aparte. ¡Excelente educación y consideración!',
    avatarText: 'I',
    tags: ['Opciones Veganas', 'Detallistas', 'En viaje']
  }
];

export const BUSY_HOURS = [
  { hour: '13:00', label: '1 PM', busyLevel: 45, status: 'Tranquilo' },
  { hour: '14:00', label: '2 PM', busyLevel: 85, status: 'Muy concurrido' },
  { hour: '15:00', label: '3 PM', busyLevel: 95, status: 'Punto álgido' },
  { hour: '16:00', label: '4 PM', busyLevel: 30, status: 'Tranquilo' },
  { hour: '20:00', label: '8 PM', busyLevel: 50, status: 'Agradable' },
  { hour: '21:00', label: '9 PM', busyLevel: 80, status: 'Concurrido' },
  { hour: '22:00', label: '10 PM', busyLevel: 100, status: 'Lleno total' },
  { hour: '23:00', label: '11 PM', busyLevel: 65, status: 'Tranquilo' },
];
