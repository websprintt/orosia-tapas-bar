/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Phone, 
  Calendar, 
  MapPin, 
  Clock, 
  Heart,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

import { OROSIA_INFO } from './data';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import BookingForm from './components/BookingForm';
import ReviewsSection from './components/ReviewsSection';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('inicio');
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll helper
  const handleScrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(id);
    }
  };

  // Securely decode and dial to protect against spambots
  const handleDialSecurely = (e: React.MouseEvent) => {
    e.preventDefault();
    const plainNum = window.atob(OROSIA_INFO.b64PhonePlain);
    window.location.href = `tel:${plainNum}`;
  };

  // Scroll handler for updating menu indicators & sticky headers
  useEffect(() => {
    const handleScroll = () => {
      // Is scrolled state
      setIsScrolled(window.scrollY > 50);

      // Section tracking
      const sections = ['inicio', 'carta', 'reservas', 'opiniones', 'contacto'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'carta', label: 'La Carta' },
    { id: 'reservas', label: 'Reservar' },
    { id: 'opiniones', label: 'Opiniones' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans overflow-x-hidden selection:bg-amber-500 selection:text-zinc-950">
      
      {/* Top sticky Navigation Header */}
      <header 
        id="app_header"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-zinc-950/90 backdrop-blur-md py-4 border-zinc-900 shadow-xl' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo text matching our literal layout */}
          <button 
            onClick={() => handleScrollTo('inicio')}
            id="logo_main_header"
            className="text-xl sm:text-2xl font-mono font-extrabold tracking-widest text-white hover:text-amber-400 transition-colors uppercase cursor-pointer"
          >
            {OROSIA_INFO.name}
          </button>

          {/* Desktop Links navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                id={`nav_link_${link.id}`}
                className={`text-sm tracking-wider uppercase font-medium font-sans cursor-pointer transition-colors relative py-1.5 ${
                  activeTab === link.id ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                {activeTab === link.id && (
                  <motion.div 
                    layoutId="active_bullet_decor" 
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-500 rounded-full" 
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Right Header reservation speed CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleDialSecurely} 
              id="header_call_cta"
              className="text-zinc-400 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 cursor-pointer"
              title="Llama al restaurante"
              aria-label="Llamar por teléfono al restaurante (Seguro Anti-Spam)"
            >
              <Phone className="w-5 h-5 text-amber-500" />
            </button>
            <button
              onClick={() => handleScrollTo('reservas')}
              id="header_reserve_cta"
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-450 text-zinc-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md shadow-amber-500/10 cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Reservar Mesa
            </button>
          </div>

          {/* Mobile Hamburguer trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile_menu_trigger"
            className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-over Drawer containing nav options */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[68px] inset-x-0 bg-zinc-950 border-b border-zinc-900 z-40 md:hidden overflow-hidden shadow-2xl"
            id="mobile_drawer"
          >
            <div className="px-5 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  id={`mobile_nav_link_${link.id}`}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-base font-semibold block transition-all ${
                    activeTab === link.id ? 'bg-amber-500 text-zinc-950 font-bold' : 'text-zinc-300 hover:bg-zinc-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-zinc-900 grid grid-cols-2 gap-3">
                <button
                  onClick={handleDialSecurely}
                  id="mobile_drawer_call"
                  className="min-h-[48px] py-3 px-4 bg-zinc-900 hover:bg-zinc-850 rounded-xl text-center text-sm font-bold border border-zinc-800 flex items-center justify-center gap-2 cursor-pointer"
                  aria-label="Llamar al restaurante (Seguro Anti-Spam)"
                >
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>Llamar</span>
                </button>
                <button
                  onClick={() => handleScrollTo('reservas')}
                  id="mobile_drawer_reserve"
                  className="min-h-[48px] py-3 px-4 bg-amber-500 text-zinc-950 hover:bg-amber-400 rounded-xl text-center text-sm font-extrabold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reservar</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Single-View Segment modules */}
      <main>
        <Hero 
          onReserveClick={() => handleScrollTo('reservas')} 
          onExploreClick={() => handleScrollTo('carta')} 
        />
        
        {/* About Section featuring Ciudad Real custom highlights */}
        <section id="sobre-nosotros" className="py-24 bg-zinc-900 relative border-b border-zinc-850">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-widest">
                  <Heart className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>Cocina con corazón manchego</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-sans font-bold uppercase tracking-tight text-white m-0">
                  TAPAS ORIGINALES <br />
                  <span className="text-amber-500 font-extrabold">& ALMA ACOGEDORA</span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-sans mt-2">
                  Nos encanta experimentar. Creemos en una mesa diversa y respetuosa donde todos tengan cabida. Por ello, hemos desarrollado una amplia gama de opciones 
                  <strong> 100% veganas y vegetarianas</strong>, con bechameles vegetales sedosas o carnes de base vegetal premium de Beyond Meat, asegurando el mismo placer culinario que nuestras recetas de siempre.
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans">
                  "Orosia es tu punto de parada predilecto para disfrutar de lomos en salsa aromáticos, carrilladas melosas de 12 horas de costura culinaria, nuestro aclamado pulpo sobre ascuas y por supuesto, esa copa de Rioja, Tempranillo o Vega Sicilia que eleva cada instante."
                </p>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-amber-500" />
                    <span className="text-zinc-200 text-xs sm:text-sm font-semibold">Trazabilidad Segura</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                    <span className="text-zinc-200 text-xs sm:text-sm font-semibold">100% Inclusivo y Adaptado</span>
                  </div>
                </div>
              </motion.div>

              {/* Graphical mosaic */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[350px] sm:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-zinc-800"
              >
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent z-10" />
                <img
                  src="https://picsum.photos/seed/orosia-ambience/900/1200"
                  alt="Atmósfera bohemia en Orosia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute bottom-6 left-6 z-20 max-w-[80%]">
                  <span className="bg-amber-500 text-zinc-950 text-[10px] font-extrabold px-2.5 py-1 rounded-sm uppercase tracking-wider mb-2.5 inline-block">
                    Atmósfera Local
                  </span>
                  <h4 className="text-lg sm:text-xl font-bold text-white uppercase drop-shadow-md">
                    Tu oasis acristalado en el centro de Ciudad Real.
                  </h4>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Interactive Menu List */}
        <MenuSection />

        {/* Live Reservation with availability calculator */}
        <BookingForm />

        {/* Maps social Reviews */}
        <ReviewsSection />

      </main>

      {/* Footer and Navigation guide */}
      <ContactFooter />

      {/* Floating Bottom Quick Deck for Mobile / Thumb Navigation */}
      <div className="fixed bottom-6 inset-x-4 z-40 md:hidden max-w-sm mx-auto">
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/80 rounded-2xl py-2 px-3 flex items-center justify-between shadow-2xl shadow-black/80">
          
          {/* Item 1: Carta */}
          <motion.button
            whileTap={{ scale: 0.90 }}
            onClick={() => handleScrollTo('carta')}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'carta' ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
            style={{ minHeight: '48px' }}
          >
            <span className="p-1 rounded-lg bg-transparent">
              <span className="text-xl">🍳</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Carta</span>
          </motion.button>

          {/* Item 2: Reservar */}
          <motion.button
            whileTap={{ scale: 0.90 }}
            onClick={() => handleScrollTo('reservas')}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'reservas' ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
            style={{ minHeight: '48px' }}
          >
            <span className="p-1 rounded-lg bg-transparent">
              <Calendar className="w-4 h-4 text-center text-amber-500" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Reservas</span>
          </motion.button>

          {/* Item 3: Llamar */}
          <motion.button
            whileTap={{ scale: 0.90 }}
            onClick={handleDialSecurely}
            className="flex flex-col items-center justify-center flex-1 py-1 px-2 text-zinc-400 hover:text-zinc-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
            style={{ minHeight: '48px' }}
            aria-label="Llamar al restaurante (Seguro Anti-Spam)"
          >
            <span className="p-1 rounded-lg bg-zinc-900 border border-zinc-800/80 shadow-md animate-pulse">
              <Phone className="w-4 h-4 text-emerald-400" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono text-emerald-400">Llamar</span>
          </motion.button>

          {/* Item 4: Cómo llegar */}
          <motion.button
            whileTap={{ scale: 0.90 }}
            onClick={() => handleScrollTo('contacto')}
            className={`flex flex-col items-center justify-center flex-1 py-1 px-2 transition-all cursor-pointer ${
              activeTab === 'contacto' ? 'text-amber-400 font-bold' : 'text-zinc-400 hover:text-zinc-200'
            }`}
            style={{ minHeight: '48px' }}
          >
            <span className="p-1 rounded-lg bg-transparent">
              <MapPin className="w-4 h-4 text-amber-500" />
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider font-mono">Cómo llegar</span>
          </motion.button>

        </div>
      </div>
    </div>
  );
}
