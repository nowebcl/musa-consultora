import React, { useState } from 'react'
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, Lock, ArrowRight, User, Building, MessageSquare, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [whatsappUrl, setWhatsappUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const messageLines = [
      '👋 *Solicitud de Reunión de Diagnóstico - MUSA Consultora*',
      '',
      `👤 *Nombre:* ${formData.nombre.trim()}`,
      `📧 *Email:* ${formData.email.trim()}`,
      formData.empresa.trim() ? `🏢 *Empresa:* ${formData.empresa.trim()}` : null,
      formData.telefono.trim() ? `📞 *Teléfono:* ${formData.telefono.trim()}` : null,
      `💬 *Desafío / Mensaje:* ${formData.mensaje.trim()}`
    ].filter(Boolean)

    const fullMessage = messageLines.join('\n')
    const url = `https://wa.me/56976086896?text=${encodeURIComponent(fullMessage)}`
    setWhatsappUrl(url)
    setSubmitted(true)
    
    // Abrir WhatsApp en pestaña nueva
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="relative py-20 lg:py-28 bg-[#f5f6fa] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-3xl sm:rounded-[36px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100 p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
              <div>
                {/* Overline with accent bar */}
                <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-2">
                  CONTACTO
                </p>
                <div className="w-10 h-[2.5px] bg-[#9c6bb0] rounded-full mb-6" />

                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#161c2d] tracking-tight leading-[1.12] mb-5">
                  Conversemos
                </h2>

                {/* Subtitle */}
                <p className="text-[#596179] text-base sm:text-[17px] leading-relaxed font-light mb-10">
                  Cuéntanos sobre tu organización y descubre cómo podemos ayudarte a alcanzar tus objetivos estratégicos.
                </p>

                {/* Contact Items */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4eef7] text-[#9c6bb0] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-[#8b91a5] uppercase">
                        CORREO ELECTRÓNICO
                      </p>
                      <a
                        href="mailto:contacto@musaconsultora.cl"
                        className="text-base font-bold text-[#161c2d] hover:text-[#9c6bb0] transition-colors"
                      >
                        contacto@musaconsultora.cl
                      </a>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4eef7] text-[#9c6bb0] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-[#8b91a5] uppercase">
                        TELÉFONO / WHATSAPP
                      </p>
                      <a
                        href="https://wa.me/56976086896"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-[#161c2d] hover:text-[#9c6bb0] transition-colors"
                      >
                        +56 9 7608 6896
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4eef7] text-[#9c6bb0] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-[#8b91a5] uppercase">
                        UBICACIÓN & COBERTURA
                      </p>
                      <p className="text-base font-bold text-[#161c2d]">
                        Puerto Montt, Región de Los Lagos
                      </p>
                      <p className="text-xs text-[#64748b] mt-0.5 font-light">
                        Atención presencial en Puerto Montt y cobertura estratégica en todo Chile.
                      </p>
                    </div>
                  </div>

                  {/* Web */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f4eef7] text-[#9c6bb0] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5 stroke-[1.8]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold tracking-wider text-[#8b91a5] uppercase">
                        SITIO WEB
                      </p>
                      <a
                        href="https://www.musaconsultora.cl"
                        className="text-base font-bold text-[#161c2d] hover:text-[#9c6bb0] transition-colors"
                      >
                        www.musaconsultora.cl
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social and Slogan Signature */}
              <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div>
                  <p className="text-[11px] font-semibold tracking-wider text-[#9c6bb0] uppercase mb-1">
                    SÍGUENOS
                  </p>
                  <p className="text-xs text-[#64748b] font-light mb-3 max-w-[220px]">
                    Ideas, herramientas y contenidos para organizaciones con propósito.
                  </p>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#f4eef7] hover:bg-[#9c6bb0] text-[#9c6bb0] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-lg bg-[#f4eef7] hover:bg-[#9c6bb0] text-[#9c6bb0] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:contacto@musaconsultora.cl"
                      className="w-8 h-8 rounded-lg bg-[#f4eef7] hover:bg-[#9c6bb0] text-[#9c6bb0] hover:text-white flex items-center justify-center transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Slogan Signature */}
                <div className="text-right sm:text-right pl-4">
                  <p className="font-serif italic text-lg sm:text-xl text-[#9c6bb0] leading-snug select-none">
                    Personas
                    <br />
                    Liderazgo
                    <br />
                    Estrategia
                  </p>
                  <div className="w-8 h-[1.5px] bg-[#cca5d8] ml-auto mt-1" />
                </div>
              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-[#fafbfc] rounded-3xl p-7 sm:p-10 border border-slate-100 shadow-xs">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-2">
                DIAGNÓSTICO
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#161c2d] tracking-tight mb-8">
                Agendar reunión de diagnóstico
              </h3>

              {submitted ? (
                <div className="bg-white rounded-2xl p-8 sm:p-10 text-center border border-[#ebd2f4] shadow-sm space-y-5">
                  <div className="w-14 h-14 rounded-full bg-[#fbf5fc] border border-[#ecd4f4] text-[#9c6bb0] flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#161c2d]">¡Solicitud lista para enviar!</h4>
                    <p className="text-sm text-[#596179] mt-2 leading-relaxed max-w-md mx-auto">
                      Se ha generado tu solicitud de reunión de diagnóstico. Si WhatsApp no se abrió automáticamente en tu navegador o celular, haz clic en el botón a continuación:
                    </p>
                  </div>
                  <div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 bg-[#8067b0] hover:bg-[#70569e] text-white text-base font-medium px-8 py-4 rounded-xl shadow-md shadow-[#8067b0]/25 transition-all duration-200"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Abrir WhatsApp con tu mensaje</span>
                    </a>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-[#8b91a5] hover:text-[#161c2d] underline transition-colors"
                    >
                      Modificar datos o enviar otro mensaje
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Nombre completo"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-xl text-sm text-[#161c2d] placeholder-slate-400 focus:outline-none focus:border-[#9c6bb0] focus:ring-1 focus:ring-[#9c6bb0] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Correo corporativo"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-xl text-sm text-[#161c2d] placeholder-slate-400 focus:outline-none focus:border-[#9c6bb0] focus:ring-1 focus:ring-[#9c6bb0] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Empresa */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="Empresa o Institución"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-xl text-sm text-[#161c2d] placeholder-slate-400 focus:outline-none focus:border-[#9c6bb0] focus:ring-1 focus:ring-[#9c6bb0] transition-colors"
                      />
                    </div>

                    {/* Telefono */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        placeholder="Teléfono o WhatsApp"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-xl text-sm text-[#161c2d] placeholder-slate-400 focus:outline-none focus:border-[#9c6bb0] focus:ring-1 focus:ring-[#9c6bb0] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Mensaje Textarea */}
                  <div className="relative">
                    <div className="absolute top-4 left-4 pointer-events-none text-slate-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={4}
                      required
                      placeholder="¿Cuál es el desafío u objetivo principal de tu organización hoy?"
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200/90 rounded-xl text-sm text-[#161c2d] placeholder-slate-400 focus:outline-none focus:border-[#9c6bb0] focus:ring-1 focus:ring-[#9c6bb0] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#8067b0] hover:bg-[#70569e] text-white text-base font-medium py-4 rounded-xl shadow-md shadow-[#8067b0]/20 hover:shadow-lg hover:shadow-[#8067b0]/30 transition-all duration-200"
                  >
                    <span>Agendar reunión de diagnóstico</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </button>

                  {/* Privacy note */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-[#8b91a5] text-xs">
                    <Lock className="w-3.5 h-3.5 text-[#9c6bb0]" />
                    <span>Tus datos están protegidos y serán tratados con estricta confidencialidad.</span>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
