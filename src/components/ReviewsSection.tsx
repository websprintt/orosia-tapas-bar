/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, BadgeCheck, Quote, ThumbsUp } from 'lucide-react';
import { GOOGLE_REVIEWS, OROSIA_INFO } from '../data';

export default function ReviewsSection() {
  const [activeTagFilter, setActiveTagFilter] = useState<string>('all');
  
  const popularTags = [
    { id: 'all', label: 'Todas las opiniones', count: 1685 },
    { id: 'tapas', label: 'Tapas originales', count: 98 },
    { id: 'veganas', label: 'Opciones veganas', count: 96 },
    { id: 'carta', label: 'Carta creativa', count: 91 },
    { id: 'vegetarianas', label: 'Platos vegetarianos', count: 58 }
  ];

  const [likesCount, setLikesCount] = useState<Record<string, number>>({
    'rev-1': 14,
    'rev-2': 8,
    'rev-3': 22
  });

  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (likedReviews[id]) {
      setLikesCount(prev => ({ ...prev, [id]: prev[id] - 1 }));
      setLikedReviews(prev => ({ ...prev, [id]: false }));
    } else {
      setLikesCount(prev => ({ ...prev, [id]: prev[id] + 1 }));
      setLikedReviews(prev => ({ ...prev, [id]: true }));
    }
  };

  const filteredReviews = GOOGLE_REVIEWS.filter((rev) => {
    if (activeTagFilter === 'all') return true;
    
    const labelLower = activeTagFilter.toLowerCase();
    
    // Check if review mentions word or has matching tag of activeTagFilter
    const hasTagMatch = rev.tags?.some(t => t.toLowerCase().includes(labelLower)) ||
                        rev.text.toLowerCase().includes(labelLower);
    
    // Specific custom maps tags adjustments
    if (activeTagFilter === 'tapas') {
      return rev.text.toLowerCase().includes('platos') || rev.text.toLowerCase().includes('carta') || rev.text.toLowerCase().includes('tapas');
    }
    if (activeTagFilter === 'veganas') {
      return rev.text.toLowerCase().includes('vegana') || rev.text.toLowerCase().includes('vegetariana');
    }
    if (activeTagFilter === 'vegetarianas') {
      return rev.text.toLowerCase().includes('vegetariano') || rev.text.toLowerCase().includes('vegan');
    }
    if (activeTagFilter === 'carta') {
      return rev.text.toLowerCase().includes('carta');
    }
    
    return hasTagMatch;
  });

  return (
    <section id="opiniones" className="py-24 bg-zinc-950 text-white relative">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header containing the maps ratings breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4 uppercase tracking-widest">
              <MessageSquareCode className="w-3.5 h-3.5" />
              <span>Resumen verídico de Google Maps</span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-sans font-bold uppercase mb-4 tracking-tight">
              LO QUE DICEN <span className="text-amber-500 font-extrabold">NUESTROS CLIENTES</span>
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl font-sans leading-relaxed">
              La transparencia es nuestro pilar fundamental. Recopilamos opiniones extraídas directamente de nuestro perfil público en Google Maps, valoradas por comensales reales amantes de la buena mesa en Ciudad Real.
            </p>
          </div>

          <div className="lg:col-span-5 bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl flex items-center justify-around gap-4 text-center">
            <div>
              <span className="text-5xl sm:text-6xl font-mono font-extrabold text-white block mb-2 leading-none">
                {OROSIA_INFO.rating}
              </span>
              <div className="flex gap-1 justify-center text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-400 font-sans block uppercase font-medium">Calificación Media</span>
            </div>

            <div className="w-px h-16 bg-zinc-850" />

            <div>
              <span className="text-4xl sm:text-5xl font-mono font-bold text-amber-500 block mb-2 leading-none">
                1.685
              </span>
              <span className="text-xs text-zinc-400 font-sans block uppercase font-medium mt-1">Opiniones Totales</span>
            </div>
          </div>
        </div>

        {/* Dynamic Tag Filters extracted from Maps request */}
        <div className="mb-12">
          <span className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 font-bold text-center sm:text-left">
            Palabras clave populares en opiniones
          </span>
          <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
            {popularTags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTagFilter(tag.id)}
                id={`pill-tag-${tag.id}`}
                className={`px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  activeTagFilter === tag.id
                    ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-md font-bold'
                    : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 border-zinc-800'
                }`}
              >
                <span>{tag.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  activeTagFilter === tag.id ? 'bg-zinc-950/20 text-zinc-950 font-bold' : 'bg-zinc-950 text-zinc-500'
                }`}>
                  {tag.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Animate List box */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={rev.id}
                id={`review-card-${rev.id}`}
                className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col justify-between group relative hover:border-zinc-700 transition-colors"
              >
                {/* Quote visual element */}
                <div className="absolute top-6 right-8 text-zinc-800 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-500 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Body text block */}
                  <p className="text-zinc-350 text-sm sm:text-base leading-relaxed italic font-sans mb-6">
                    "{rev.text}"
                  </p>
                </div>

                {/* Writer InfoFooter */}
                <div className="border-t border-zinc-850 pt-6 mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-amber-500 to-amber-600 flex items-center justify-center text-zinc-950 font-mono font-bold text-sm tracking-tighter">
                      {rev.avatarText}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1">
                        <span>{rev.author}</span>
                        {rev.role === 'Local Guide' && (
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" title="Local Guide" />
                        )}
                      </h4>
                      <div className="flex items-center gap-1.5 text-zinc-500 text-xs">
                        <span>{rev.role}</span>
                        <span>•</span>
                        <span>{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Like rating CTA counter */}
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={(e) => handleLike(rev.id, e)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono flex items-center gap-1.5 cursor-pointer transition-all ${
                      likedReviews[rev.id] 
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/35'
                        : 'bg-zinc-950 text-zinc-500 border border-zinc-850 hover:text-zinc-300'
                    }`}
                    id={`btn_like_${rev.id}`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${likedReviews[rev.id] ? 'fill-amber-400' : ''}`} />
                    <span>{likesCount[rev.id]}</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty matches */}
        {filteredReviews.length === 0 && (
          <div className="text-center py-12 border border-zinc-800 rounded-3xl bg-zinc-900/40">
            <span className="text-zinc-500 text-sm font-sans block mb-2">Sin opiniones cargadas para este criterio.</span>
            <button
              onClick={() => setActiveTagFilter('all')}
              className="text-xs font-mono text-amber-500 uppercase font-bold"
              id="btn_reset_tags"
            >
              Reestablecer opiniones
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
