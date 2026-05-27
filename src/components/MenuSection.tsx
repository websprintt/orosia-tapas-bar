/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Leaf, Eye, CornerRightDown, BadgeCheck, Coffee, Utensils, Wine } from 'lucide-react';
import { MENU_DISHES, OROSIA_ASSETS } from '../data';
import { Dish } from '../types';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('desayunos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Filtering states
  const [filterVegan, setFilterVegan] = useState(false);
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);
  const [filterPopular, setFilterPopular] = useState(false);

  const categories = [
    { id: 'desayunos', label: '🍳 Desayunos y Ofertas', icon: Coffee },
    { id: 'raciones', label: '🍽️ Raciones para Compartir', icon: Utensils },
    { id: 'bocadillos', label: '🥖 Pulgas, Montados y Bocatas', icon: Sparkles },
    { id: 'bebidas', label: '🍷 Cervezas y Vinos', icon: Wine }
  ];

  const filteredDishes = useMemo(() => {
    return MENU_DISHES.filter((dish) => {
      // Category filter
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      
      // Keyword search
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = dish.name.toLowerCase().includes(query);
        const matchesDesc = dish.description.toLowerCase().includes(query);
        const matchesTag = dish.tags?.some(t => t.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesTag) {
          return false;
        }
      }

      // Feature filters
      if (filterVegan && !dish.isVegan) return false;
      if (filterGlutenFree && !dish.isGlutenFree) return false;
      if (filterPopular && !dish.isPopular) return false;

      return true;
    });
  }, [activeCategory, searchQuery, filterVegan, filterGlutenFree, filterPopular]);

  return (
    <section id="carta" className="py-24 bg-zinc-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,158,11,0.03),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sabor honesto, alma libre</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-sans font-bold tracking-tight uppercase mb-4"
          >
            NUESTRA EXPERIENCIA <span className="text-amber-500 font-extrabold">GASTRONÓMICA</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-lg leading-relaxed font-sans"
          >
            Descubre nuestra auténtica carta manchega recién renovada: desde sabrosos desayunos y combos matutinos, hasta raciones abundantes para compartir, bocadillos rústicos de autor y copas de los mejores vinos y cervezas de la comarca.
          </motion.p>
        </div>

        {/* Search and Filters Segment */}
        <div className="mb-12 p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Search className="w-5 h-5" />
              </span>
              <input
                id="search-input"
                type="text"
                placeholder="Buscar café, torrezno, tortilla, jamón, vino..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Buscar platos, vinos o postres de la carta"
                className="w-full pl-11 pr-4 py-3 bg-zinc-950 border border-zinc-800 focus:border-amber-500 rounded-xl text-zinc-200 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm transition-all shadow-inner"
              />
            </div>

            {/* Quick Filter Badges */}
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-start md:justify-end">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterVegan(!filterVegan)}
                aria-pressed={filterVegan}
                aria-label="Filtrar por opciones vegetarianas o veganas"
                className={`min-h-[48px] px-4 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  filterVegan
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800/80 hover:border-zinc-700/80'
                }`}
                id="filter_vegan"
              >
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>Opciones Veggi/Vegan</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterGlutenFree(!filterGlutenFree)}
                aria-pressed={filterGlutenFree}
                aria-label="Filtrar por platos aptos para celíacos o sin gluten"
                className={`min-h-[48px] px-4 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  filterGlutenFree
                    ? 'bg-sky-500/20 text-sky-400 border-sky-500/50 shadow-md shadow-sky-500/10'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800/80 hover:border-zinc-700/80'
                }`}
                id="filter_gluten"
              >
                <BadgeCheck className="w-4 h-4 text-sky-400" />
                <span>Apto Sin Gluten</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterPopular(!filterPopular)}
                aria-pressed={filterPopular}
                aria-label="Filtrar por platos destacados más populares"
                className={`min-h-[48px] px-4 py-3 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  filterPopular
                    ? 'bg-amber-500/20 text-amber-400 border-amber-500/50 shadow-md shadow-amber-500/10'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800/80 hover:border-zinc-700/80'
                }`}
                id="filter_popular"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Destacados</span>
              </motion.button>
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 gap-2 pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(cat.id)}
                  id={`cat-tab-${cat.id}`}
                  aria-pressed={activeCategory === cat.id}
                  aria-label={`Ver platos de la categoría ${cat.label}`}
                  className={`min-h-[48px] px-5 py-3.5 rounded-xl text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                    activeCategory === cat.id
                      ? 'bg-amber-500 text-zinc-950 shadow-lg shadow-amber-500/20 font-bold'
                      : 'bg-zinc-950/70 text-zinc-400 hover:text-zinc-200 border border-zinc-800/60'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 shrink-0" />}
                  <span>{cat.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Top plates featured teaser */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main big block - Huevos Rotos */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="relative aspect-video lg:aspect-auto lg:h-72 overflow-hidden">
              <img
                src={OROSIA_ASSETS.pulpo}
                alt="Plato Orosia"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-500 text-zinc-950 shadow-md">
                  Sabor Montero Autóctono
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-950/80 text-white backdrop-blur-md">
                  Sin Gluten
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white group-hover:text-amber-400 transition-colors">
                  Huevos Rotos con Chorizo de Venao o Jamón
                </h3>
                <span className="text-xl sm:text-2xl font-mono font-bold text-amber-400 shrink-0">Desde 9,00€</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                Nuestra joya cinegética. Nido crujiente de patatas sazonadas de Ciudad Real, coronado con huevos fritos de gallina de corral, rotos al instante y el carácter especiado exclusivo del chorizo de venado de monte. Una delicia imprescindible para compartir.
              </p>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">#Especialidad</span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">#ChorizoDeVenao</span>
                <span className="text-xs font-mono px-3 py-1 rounded-md bg-zinc-800 text-zinc-400">#NuestrosHuevos</span>
              </div>
            </div>
          </motion.div>

          {/* Right Teaser block - Tortilla de patatas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-between group"
          >
            <div className="relative aspect-video lg:aspect-auto lg:h-72 overflow-hidden">
              <img
                src={OROSIA_ASSETS.tapas}
                alt="Tortilla de Patata"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-900 via-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500 text-zinc-950 shadow-md">
                  Hecho Al Momento
                </span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-zinc-950/80 text-white backdrop-blur-md">
                  Artesana
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white group-hover:text-amber-400 transition-colors">
                  Tortilla de Patata al Gusto
                </h3>
                <span className="text-zinc-400 text-xs sm:text-sm pt-1.5 font-sans">Desde 2,50€</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                ¿La prefieres con cebolla, muy jugosa o tradicional bien cuajada? Prepárala a tu gusto desde un tierno pinchito de barra, una mini tortilla individual efervescente o la pieza familiar completa por encargo comiendo en mesa.
              </p>
              <div className="flex items-center gap-3 text-amber-400 font-mono text-xs uppercase tracking-widest">
                <span>Tradición Con Huevos Camperos</span>
                <CornerRightDown className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Grid list of filtered dishes */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={dish.id}
                id={`dish-card-${dish.id}`}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Popular glow badge/corner */}
                {dish.isPopular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 text-[9px] sm:text-[10px] font-extrabold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg uppercase tracking-wider shadow-md shadow-amber-500/10 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-zinc-950 text-zinc-950" />
                    <span>Popular</span>
                  </div>
                )}

                <div>
                  {/* Category, tags & badges */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 items-center mb-2.5 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-amber-500 border border-zinc-800/80 uppercase">
                      {dish.category === 'desayunos' ? '🍳 Desayuno' : 
                       dish.category === 'raciones' ? '🍽️ Ración' :
                       dish.category === 'bocadillos' ? '🥖 Bocadillo' : '🍷 Bebida'}
                    </span>
                    {dish.isVegan && (
                      <span className="text-[9px] sm:text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <Leaf className="w-2.5 h-2.5" />
                        <span>Veggi/Vegan</span>
                      </span>
                    )}
                    {dish.isGlutenFree && (
                      <span className="text-[9px] sm:text-[10px] bg-sky-500/10 text-sky-400 border border-sky-500/20 px-1.5 py-0.5 rounded">
                        Sin Gluten
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold font-sans text-white group-hover:text-amber-400 transition-colors duration-200 mb-1 sm:mb-2">
                    {dish.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-sans line-clamp-3 group-hover:text-zinc-300 transition-colors mb-2.5 sm:mb-4 leading-snug sm:leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                {/* Pricing Block with multi-tier display */}
                <div className="border-t border-zinc-800/60 pt-3 sm:pt-4 mt-2 sm:mt-4">
                  {dish.pulgaPrice ? (
                    /* Bocadillos table columns: Pulga, Montado, Bocadillo */
                    <div className="grid grid-cols-3 gap-1 shadow-inner text-center bg-zinc-950/50 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-zinc-800/60">
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Pulga</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-zinc-300">{typeof dish.pulgaPrice === 'number' ? `${dish.pulgaPrice.toFixed(2)}€` : dish.pulgaPrice}</span>
                      </div>
                      <div className="flex flex-col border-x border-zinc-800">
                        <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Montado</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-zinc-300">{typeof dish.montadoPrice === 'number' ? `${dish.montadoPrice.toFixed(2)}€` : dish.montadoPrice}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Bocata</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-amber-400">{typeof dish.bocadilloPrice === 'number' ? `${dish.bocadilloPrice.toFixed(2)}€` : dish.bocadilloPrice}</span>
                      </div>
                    </div>
                  ) : dish.halfPrice ? (
                    /* Raciones and Tostadas column display: Media, Entera */
                    <div className="grid grid-cols-2 gap-1.5 shadow-inner text-center bg-zinc-950/50 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border border-zinc-800/60">
                      <div className="flex flex-col border-r border-zinc-800">
                        <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Media 1/2</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-zinc-300">{typeof dish.halfPrice === 'number' ? `${dish.halfPrice.toFixed(2)}€` : dish.halfPrice}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[8px] sm:text-[9px] text-zinc-500 uppercase font-bold tracking-wider">Entera</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-amber-400">{typeof dish.fullPrice === 'number' ? `${dish.fullPrice.toFixed(2)}€` : dish.fullPrice}</span>
                      </div>
                    </div>
                  ) : (
                    /* Standard pricing display */
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] sm:text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Precio</span>
                      <span className="text-xs sm:text-sm font-bold font-mono text-amber-500 bg-zinc-950 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-zinc-800/50">
                        {dish.fullPrice 
                          ? (typeof dish.fullPrice === 'number' ? `${dish.fullPrice.toFixed(2)}€` : dish.fullPrice)
                          : (typeof dish.price === 'number' ? `${dish.price.toFixed(2)}€` : dish.price)}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state query results */}
        {filteredDishes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-zinc-900/20 border border-zinc-800/50 rounded-2xl"
          >
            <Search className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold font-sans text-zinc-300 mb-1">Sin coincidencias</h4>
            <p className="text-zinc-500 text-sm max-w-md mx-auto">
              Prueba a buscar palabras como "croquetas", "pulpo", "tarta" o haz clic en "Toda la Carta" para reestablecer.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setFilterVegan(false);
                setFilterGlutenFree(false);
                setFilterPopular(false);
              }}
              id="btn_reset_filters"
              className="mt-6 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-855 border border-zinc-800 text-xs font-mono rounded-lg transition-all text-amber-500 uppercase font-bold"
            >
              Reestablecer filtros
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
