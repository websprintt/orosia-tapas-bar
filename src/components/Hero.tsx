/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, Clock, MapPin, ArrowDown, ChevronRight } from 'lucide-react';
import { OROSIA_INFO, OROSIA_ASSETS } from '../data';

interface HeroProps {
  onReserveClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onReserveClick, onExploreClick }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 pt-16">
      {/* Background Image with beautiful overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.45 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          src={OROSIA_ASSETS.hero}
          alt="Interior de Orosia"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        {/* Rating pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-amber-500/30 backdrop-blur-md text-amber-400 text-xs sm:text-sm font-medium mb-6 uppercase tracking-wider"
        >
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>{OROSIA_INFO.rating} de Calidad</span>
          <span className="text-zinc-500">•</span>
          <span className="text-zinc-300">{OROSIA_INFO.reviewCount.toLocaleString('es-ES')} Opiniones reales</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="text-4xl sm:text-6xl md:text-8xl font-sans font-extrabold text-white tracking-tight uppercase leading-none mb-6"
        >
          <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-100">
            {OROSIA_INFO.name}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg sm:text-2xl font-light text-zinc-300 max-w-3xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {OROSIA_INFO.tagline}
        </motion.p>

        {/* Quick detail items */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-xs">
            <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-zinc-300 truncate">C. Libertad, 12</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-xs">
            <Clock className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-zinc-300">Cierra 23:30h · Abierto</span>
          </div>
          <div className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-900/60 border border-zinc-800/60 backdrop-blur-xs">
            <span className="text-amber-500 font-bold shrink-0 text-sm">&#8364;</span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">{OROSIA_INFO.priceRange} por comensal</span>
          </div>
        </motion.div>

        {/* Responsive CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReserveClick}
            id="btn_hero_reserve"
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-amber-500/25 transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 animate-shine"
          >
            <span>Reservar Mesa</span>
            <ChevronRight className="w-5 h-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExploreClick}
            id="btn_hero_explore"
            className="w-full sm:w-auto min-h-[48px] px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 border-2 border-zinc-800 text-white font-medium text-base sm:text-lg rounded-xl backdrop-blur-md transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Ver Carta Original</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bounce scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 cursor-pointer text-zinc-500 hover:text-zinc-300"
          onClick={onExploreClick}
        >
          <span className="text-xs font-mono uppercase tracking-widest">Explorar</span>
          <ArrowDown className="w-5 h-5 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
}
