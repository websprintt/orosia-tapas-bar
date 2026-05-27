/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Map, 
  ExternalLink, 
  Facebook, 
  Instagram, 
  ChevronUp, 
  Compass,
  Heart,
  Mail,
  MessageCircle
} from 'lucide-react';
import { OROSIA_INFO } from '../data';

export default function ContactFooter() {
  const [revealedPhone, setRevealedPhone] = useState(false);
  const [revealedEmail, setRevealedEmail] = useState(false);
  const [revealedWhatsapp, setRevealedWhatsapp] = useState(false);

  const [decryptedPhone, setDecryptedPhone] = useState('');
  const [decryptedEmail, setDecryptedEmail] = useState('');
  const [decryptedWhatsapp, setDecryptedWhatsapp] = useState('');

  const handlePhoneClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phoneNum = window.atob(OROSIA_INFO.b64Phone);
    const phonePlain = window.atob(OROSIA_INFO.b64PhonePlain);
    setDecryptedPhone(phoneNum);
    setRevealedPhone(true);
    // Open standard tel handler after dynamic restoration
    window.location.href = `tel:${phonePlain}`;
  };

  const handleWhatsappClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const phonePlain = window.atob(OROSIA_INFO.b64PhonePlain);
    const whatsappUrl = window.atob(OROSIA_INFO.b64Whatsapp);
    setDecryptedWhatsapp(`+34 ${phonePlain}`);
    setRevealedWhatsapp(true);
    // Redirect securely
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const emailStr = window.atob(OROSIA_INFO.b64Email);
    setDecryptedEmail(emailStr);
    setRevealedEmail(true);
    // Trigger standard mail client
    window.location.href = `mailto:${emailStr}?subject=Consulta%20Orosia%20Gastronomia`;
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scheduleDays = [
    { name: 'Lunes', hours: '13:00 - 16:30 | 20:00 - 23:30', status: 'Abierto' },
    { name: 'Martes', hours: '13:00 - 16:30 | 20:00 - 23:30', status: 'Abierto' },
    { name: 'Miércoles', hours: '13:00 - 16:30 | 20:00 - 23:30', status: 'Abierto' },
    { name: 'Jueves', hours: '13:00 - 16:30 | 20:00 - 23:30', status: 'Abierto' },
    { name: 'Viernes', hours: '13:00 - 17:00 | 20:00 - 00:00', status: 'Fin de semana' },
    { name: 'Sábado', hours: '13:00 - 17:00 | 20:00 - 00:00', status: 'Fin de semana' },
    { name: 'Domingo', hours: '13:00 - 16:30 | 20:00 - 23:30', status: 'Abierto' },
  ];

  return (
    <footer id="contacto" className="bg-zinc-950 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_90%,rgba(245,158,11,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact and schedule layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-zinc-850 pb-16 mb-12">
          
          {/* Brand/About column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-mono font-extrabold text-white tracking-widest block mb-4">
                {OROSIA_INFO.logoText}
              </span>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-sans">
                {OrosiaDescription}
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone contact (Securely ofuscated) */}
              <button
                onClick={handlePhoneClick}
                id="link_footer_phone"
                className="w-full text-left flex items-center gap-3 text-zinc-300 hover:text-amber-400 text-sm transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-1.5 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/40"
                aria-label="Llamar al restaurante Orosia"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/40">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">Teléfono de Reservas y Consultas</span>
                  <span className="font-bold text-white group-hover:text-amber-400">
                    {revealedPhone ? decryptedPhone : 'Llamar / Ver Teléfono (Anti-Spam)'}
                  </span>
                </div>
              </button>

              {/* WhatsApp Business contact (Securely ofuscated) */}
              <button
                onClick={handleWhatsappClick}
                id="link_footer_whatsapp"
                className="w-full text-left flex items-center gap-3 text-zinc-300 hover:text-emerald-400 text-sm transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1.5 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/40"
                aria-label="Enviar WhatsApp a Orosia"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-emerald-500/40">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">WhatsApp Directo</span>
                  <span className="font-bold text-white group-hover:text-emerald-400">
                    {revealedWhatsapp ? decryptedWhatsapp : 'Enviar Chat / Ver WhatsApp (Anti-Spam)'}
                  </span>
                </div>
              </button>

              {/* Email direct contact (Securely ofuscated) */}
              <button
                onClick={handleEmailClick}
                id="link_footer_email"
                className="w-full text-left flex items-center gap-3 text-zinc-300 hover:text-amber-400 text-sm transition-all group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl p-1.5 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/40"
                aria-label="Enviar correo electrónico al restaurante Orosia"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-amber-500/40">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <span className="block text-[10px] text-zinc-500 font-mono uppercase tracking-wider">email oficial</span>
                  <span className="font-bold text-white group-hover:text-amber-400">
                    {revealedEmail ? decryptedEmail : 'Enviar Mail / Ver Correo (Anti-Spam)'}
                  </span>
                </div>
              </button>

              {/* Static address with maps directions fallback */}
              <div 
                className="flex items-center gap-3 text-zinc-300 text-sm p-1.5"
              >
                <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <span className="block text-zinc-400 text-xs sm:text-sm font-medium">{OROSIA_INFO.address}</span>
                  <span className="text-[10px] text-zinc-650 font-mono block mt-0.5">Plus Code: {OROSIA_INFO.plusCode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule card Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 font-extrabold">
              HORARIO DE APERTURA
            </h4>
            
            <div className="space-y-2.5 rounded-2xl bg-zinc-900/40 border border-zinc-805/80 p-5">
              {scheduleDays.map((day) => (
                <div key={day.name} className="flex justify-between items-center text-xs border-b border-zinc-950 pb-2 last:border-0 last:pb-0">
                  <span className="font-bold text-zinc-350">{day.name}</span>
                  <div className="text-right">
                    <span className="font-mono text-zinc-400 block">{day.hours}</span>
                    <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded-sm ${
                      day.status === 'Fin de semana' ? 'bg-amber-500/10 text-amber-400' : 'bg-zinc-850 text-zinc-500'
                    }`}>
                      {day.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map action Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-6 font-extrabold">
                CUALQUIER RUTA LLEVA A CASI EL REINO
              </h4>
              <p className="text-zinc-400 text-sm font-sans mb-6">
                Nos encontramos a escasos metros de la Plaza de la Libertad de Ciudad Real. Un local idílico y bohemio diseñado con un ambiente envolvente y música chill.
              </p>
            </div>

            {/* Simulated mini active map preview for premium design */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden relative">
              <div className="h-28 bg-zinc-950 flex items-center justify-center relative overflow-hidden">
                <Compass className="w-10 h-10 text-amber-500/20 absolute animate-spin-slow" />
                <div className="text-center p-4 relative z-10">
                  <Map className="w-6 h-6 text-amber-500 mx-auto mb-2" />
                  <span className="text-xs font-bold text-zinc-300 block">Abrir mapa en nueva pestaña</span>
                  <span className="text-[10px] text-zinc-600 block">X3PF+FX Ciudad Real, España</span>
                </div>
              </div>

              {/* Action Button */}
              <a 
                href={OROSIA_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="link_external_maps"
                className="block py-3 text-center bg-zinc-850 hover:bg-zinc-800 text-xs text-amber-500 hover:text-amber-400 font-bold tracking-wider uppercase border-t border-zinc-800 transition-colors"
                referrerPolicy="no-referrer"
              >
                <span className="inline-flex items-center gap-1.5">
                  <span>Indicaciones de Navegación GPS</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer credit bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-500 text-xs">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {OROSIA_INFO.name}. Reservados todos los derechos.</span>
          </div>

          {/* Social connect pill */}
          <div className="flex items-center gap-4">
            <a 
              href={OROSIA_INFO.facebookUrl}
              target="_blank" 
              rel="noopener noreferrer"
              id="link_social_facebook"
              className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md p-1"
              title="Síguenos en Facebook"
              aria-label="Síguenos en nuestra página de Facebook"
              referrerPolicy="no-referrer"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href={OROSIA_INFO.instagramUrl}
              target="_blank" 
              rel="noopener noreferrer"
              id="link_social_instagram"
              className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md p-1"
              title="Síguenos en Instagram"
              aria-label="Síguenos en nuestra cuenta de Instagram"
              referrerPolicy="no-referrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            
            <span className="text-zinc-800">|</span>

            <button 
              onClick={handleScrollToTop}
              id="btn_footer_scroll_top"
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              title="Volver Arriba"
              aria-label="Volver arriba de la página"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

const OrosiaDescription = "En Orosia proponemos tapas y platos deliciosos diseñados para compartir en un espacio de aire artístico y distendido. Nos enorgullece especialmente nuestra hospitalidad y un gran respeto por las dietas veganas y con alérgenos.";
