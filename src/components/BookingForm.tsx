/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar as CalendarIcon, 
  Users, 
  Clock, 
  Mail, 
  Phone, 
  User, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  ChevronRight,
  Info
} from 'lucide-react';
import { OROSIA_INFO, BUSY_HOURS } from '../data';
import { Booking } from '../types';

export default function BookingForm() {
  const [formData, setFormData] = useState<Booking>({
    name: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '21:00',
    guests: 2,
    dietaryNotes: '',
    veganOptionsInterested: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingResponse, setBookingResponse] = useState<string | null>(null);

  const handleDialSecurely = (e: React.MouseEvent) => {
    e.preventDefault();
    const plainNum = window.atob(OROSIA_INFO.b64PhonePlain);
    window.location.href = `tel:${plainNum}`;
  };

  const availableHours = [
    '13:00', '13:30', '14:00', '14:30', '15:00', 
    '20:00', '20:30', '21:00', '21:35', '22:00', '22:30'
  ];

  const handleGuestChange = (amount: number) => {
    setFormData(prev => ({
      ...prev,
      guests: Math.max(1, Math.min(12, prev.guests + amount))
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Por favor complete los campos obligatorios.');
      return;
    }

    setIsSubmitting(true);
    // Simulate API round-trip
    setTimeout(() => {
      setIsSubmitting(false);
      // Generate unique mock confirmation code
      const uniqueCode = 'OR-' + Math.floor(100000 + Math.random() * 900000);
      setBookingResponse(uniqueCode);
    }, 1500);
  };

  return (
    <section id="reservas" className="py-24 bg-zinc-900 border-t border-b border-zinc-800 relative overflow-hidden">
      {/* Absolute blurry ambient bulbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CRO Text and Busy Time Indicators */}
          <div className="lg:col-span-5 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-6 uppercase tracking-widest">
              <TrendingUp className="w-4 h-4" />
              <span>Aforo Inteligente</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-sans font-bold uppercase mb-6 leading-tight">
              RESERVA EN <span className="text-amber-500 font-extrabold">SEGUNDOS</span>
            </h3>
            
            <p className="text-zinc-300 text-sm sm:text-base mb-8 leading-relaxed font-sans">
              Asegura tu mesa en Orosia. Confirmación inmediata vía email y SMS. Atendemos necesidades especiales, intolerancias alimenticias y personalizamos tu menú si nos visitas con acompañantes veganos.
            </p>

            {/* Quick trust highlights */}
            <div className="space-y-4 mb-10">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-zinc-100 uppercase">Sin pagos por adelantado</h5>
                  <p className="text-xs text-zinc-400 font-sans">Cancela o modifica gratis tu reserva hasta 2 horas antes de tu cita.</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-zinc-850 border border-zinc-800 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h5 className="font-bold text-sm text-zinc-100 uppercase">Vegano y Alérgenos Amigables</h5>
                  <p className="text-xs text-zinc-400 font-sans">Disponemos de cocinas separadas para evitar alérgenos cruzados si lo solicitas.</p>
                </div>
              </div>
            </div>

            {/* Busy Hours Chart Widget */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-bold">Afluencia habitual por horas</h6>
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-semibold flex items-center gap-1">
                  <Info className="w-3.5 h-3.5" />
                  <span>Evita colas</span>
                </span>
              </div>
              
              <div className="flex items-end justify-between h-32 gap-1.5 pt-4">
                {BUSY_HOURS.map((b) => (
                  <div key={b.hour} className="flex-1 flex flex-col items-center group relative">
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-10">
                      <div className="bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-200 px-2 py-1 rounded-md shadow-lg whitespace-nowrap">
                        {b.status} {b.busyLevel}%
                      </div>
                      <div className="w-2 h-2 bg-zinc-900 rotate-45 -mt-1 border-r border-b border-zinc-800" />
                    </div>

                    <div className="w-full bg-zinc-900 rounded-t-sm overflow-hidden h-24 flex items-end">
                      <div 
                        style={{ height: `${b.busyLevel}%` }}
                        className={`w-full transition-all duration-300 ${
                          b.busyLevel > 80 
                            ? 'bg-amber-600 group-hover:bg-amber-500' 
                            : b.busyLevel > 50 
                            ? 'bg-amber-500/70 group-hover:bg-amber-400' 
                            : 'bg-zinc-700 group-hover:bg-zinc-600'
                        }`}
                      />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 mt-2">{b.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-500 mt-4 leading-relaxed font-sans text-center">
                * Las cenas entre las <strong className="text-zinc-300">21:00 y las 22:30</strong> suelen tener mayor concurrencia. Recomendamos reservar con antelación.
              </p>
            </div>
          </div>

          {/* Right Column: Reservation Form Content */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 shadow-2xl shadow-black/80">
              <AnimatePresence mode="wait">
                {!bookingResponse ? (
                  <motion.form 
                    key="booking-form-el"
                    id="booking-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="space-y-6"
                  >
                    {/* Guest counts */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3 font-semibold">
                        Número de Comensales
                      </label>
                      <div className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2.5">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleGuestChange(-1)}
                          className="w-12 h-12 bg-zinc-950 border border-zinc-800 text-white rounded-lg flex items-center justify-center font-bold hover:bg-zinc-900 cursor-pointer text-lg disabled:opacity-40"
                          disabled={formData.guests <= 1}
                          id="guests_minus"
                        >
                          -
                        </motion.button>
                        <div className="flex-1 text-center flex items-center justify-center gap-2">
                          <Users className="w-5 h-5 text-amber-500" />
                          <span className="text-lg sm:text-xl font-bold text-white font-mono">{formData.guests}</span>
                          <span className="text-zinc-500 text-xs font-sans">
                            {formData.guests === 1 ? 'Persona' : 'Personas'}
                          </span>
                        </div>
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleGuestChange(1)}
                          className="w-12 h-12 bg-zinc-950 border border-zinc-800 text-white rounded-lg flex items-center justify-center font-bold hover:bg-zinc-900 cursor-pointer text-lg disabled:opacity-40"
                          disabled={formData.guests >= 12}
                          id="guests_plus"
                        >
                          +
                        </motion.button>
                      </div>
                    </div>

                    {/* Date and Time selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                          Fecha de Visita
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                            <CalendarIcon className="w-4 h-4" />
                          </span>
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-3 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none"
                            id="inp_booking_date"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                          Hora deseada
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                            <Clock className="w-4 h-4" />
                          </span>
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none cursor-pointer"
                            id="inp_booking_time"
                          >
                            {availableHours.map((h) => (
                              <option key={h} value={h}>{h} {h.startsWith('1') ? '(Almuerzo)' : '(Cena)'}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Personal data */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                          Nombre Completo
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                            <User className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Ej. Virginia Almodóvar"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none placeholder-zinc-650"
                            id="inp_booking_name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                            Correo electrónico
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                              <Mail className="w-4 h-4" />
                            </span>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="correo@ejemplo.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none placeholder-zinc-650"
                              id="inp_booking_email"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                            Número de teléfono
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                              <Phone className="w-4 h-4" />
                            </span>
                            <input
                              type="tel"
                              name="phone"
                              required
                              placeholder="Ej. +34 601 31 88 35"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full pl-10 pr-4 py-3 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none placeholder-zinc-650"
                              id="inp_booking_phone"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vegano preferences indicator (CRO Trust high volume converter) */}
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          name="veganOptionsInterested"
                          checked={formData.veganOptionsInterested}
                          onChange={handleCheckboxChange}
                          className="w-5 h-5 rounded-md border-zinc-800 bg-zinc-900 text-emerald-500 focus:ring-emerald-500/35 focus:ring-offset-zinc-950 mt-1 cursor-pointer accent-emerald-500"
                          id="inp_booking_vegan"
                        />
                        <div>
                          <span className="text-zinc-200 text-sm font-bold flex items-center gap-1.5 leading-none">
                            <span>¿Interesados en menús Veganos/Vegetarianos?</span>
                          </span>
                          <span className="block text-zinc-400 text-xs mt-1 font-sans">
                            Marcando esta casilla, nuestro equipo de sumillería y cocina preparará sugerencias especiales de tapas y platillos libres de origen vegetal.
                          </span>
                        </div>
                      </label>
                    </div>

                    {/* Special requests comments */}
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2 font-semibold">
                        Anotaciones de Cocina (Opcional)
                      </label>
                      <textarea
                        name="dietaryNotes"
                        placeholder="Ej. Sabor con cebolla, intolerancia al gluten, silla de bebé, salsa brava con huevos aparte para veganos..."
                        rows={3}
                        value={formData.dietaryNotes}
                        onChange={handleInputChange}
                        className="w-full p-4 bg-zinc-905 border border-zinc-800 rounded-xl text-zinc-200 text-sm focus:border-amber-500 focus:outline-none placeholder-zinc-600 font-sans resize-none"
                        id="inp_booking_notes"
                      />
                    </div>

                    {/* Consent checkbox */}
                    <p className="text-[10px] text-zinc-500 leading-relaxed font-sans">
                      Al continuar aceptas los términos de reserva de {OROSIA_INFO.name}. Tus datos están protegidos encriptadamente con TLS 1.3 de grado bancario y no serán cedidos a terceros.
                    </p>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      disabled={isSubmitting}
                      type="submit"
                      id="btn_submit_booking"
                      className="w-full min-h-[48px] py-4.5 bg-amber-500 hover:bg-amber-400 border-none text-zinc-950 font-bold text-base sm:text-lg rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed animate-shine"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Procesando disponibilidad...</span>
                        </>
                      ) : (
                        <>
                          <span>Generar Reserva Inmediata</span>
                          <ChevronRight className="w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  // Success State Visual representation: Modern animated restaurant ticket
                  <motion.div
                    key="booking-success-el"
                    id="booking-success"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 animate-pulse" />
                    </div>

                    <h4 className="text-2xl sm:text-3xl font-sans font-extrabold text-white uppercase mb-3">
                      ¡MESA <span className="text-emerald-400">AGENDADA!</span>
                    </h4>
                    
                    <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto mb-8 font-sans">
                      Hola <strong className="text-white font-medium">{formData.name}</strong>, tu solicitud ha sido confirmada en tiempo real. Un justificante está en camino a <strong className="text-white">{formData.email}</strong>.
                    </p>

                    {/* Premium Ticket Artifact layout */}
                    <div className="max-w-md mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative shadow-xl text-left font-mono">
                      {/* Side punched holes decorator */}
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-zinc-950 rounded-r-full border-r border-zinc-800" />
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-zinc-950 rounded-l-full border-l border-zinc-800" />

                      <div className="p-6 border-b border-dashed border-zinc-800 text-center">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block mb-1">CÓDIGO DIGITAL LOCAL</span>
                        <span className="text-2xl font-bold text-amber-500">{bookingResponse}</span>
                      </div>

                      <div className="p-6 space-y-3.5 text-xs sm:text-sm">
                        <div className="flex justify-between items-center text-zinc-400">
                          <span>Invitados:</span>
                          <span className="text-white font-bold">{formData.guests} personas</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400">
                          <span>Fecha:</span>
                          <span className="text-white font-bold">{formData.date}</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400">
                          <span>Hora de ingreso:</span>
                          <span className="text-white font-bold">{formData.time} horas</span>
                        </div>
                        <div className="flex justify-between items-center text-zinc-400">
                          <span>Contacto:</span>
                          <span className="text-white font-bold truncate max-w-[180px]">{formData.phone}</span>
                        </div>
                        {formData.veganOptionsInterested && (
                          <div className="flex justify-between items-center text-emerald-400">
                            <span>Opción Menú:</span>
                            <span className="font-extrabold">Vegano Seleccionado</span>
                          </div>
                        )}
                        {formData.dietaryNotes && (
                          <div className="border-t border-zinc-850 pt-3 mt-3 text-zinc-500">
                            <span className="block text-[10px] uppercase mb-1">Notas de cocina:</span>
                            <p className="italic text-zinc-300 font-sans text-xs">"{formData.dietaryNotes}"</p>
                          </div>
                        )}
                      </div>

                      <div className="p-5 bg-zinc-950/80 text-center text-[10px] text-zinc-500 font-sans leading-none">
                        Presenta esta clave o tu nombre al llegar a C. Libertad, 12.
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-center">
                      <button
                        onClick={() => setBookingResponse(null)}
                        id="btn_another_booking"
                        className="w-full sm:w-auto px-6 py-2.5 bg-zinc-900 hover:bg-zinc-855 border border-zinc-810 text-xs text-white uppercase font-bold rounded-lg transition-all cursor-pointer font-sans"
                      >
                        Hacer otra reserva
                      </button>
                      <button
                        onClick={handleDialSecurely}
                        id="btn_call_from_booking"
                        className="w-full sm:w-auto px-6 py-2.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-xs uppercase font-bold rounded-lg transition-all border border-amber-500/30 font-sans flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                        aria-label="Llamar al restaurante Orosia (Seguro Anti-Spam)"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Llamar al restaurante</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
