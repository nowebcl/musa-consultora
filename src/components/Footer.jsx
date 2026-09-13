import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import { servicesData } from '../data/servicesData'

export default function Footer() {
  return (
    <footer className="w-full bg-[#141724] text-white pt-16 sm:pt-20 pb-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 pr-0 lg:pr-8">
            <Link to="/" className="inline-block mb-5">
              <img
                src="/logoblanco.png"
                alt="MUSA Consultora Organizacional"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-light">
              Consultora de Recursos Humanos en Puerto Montt y Región de Los Lagos. Especialistas en reclutamiento y selección de personal, headhunting y gestión estratégica de RRHH.
            </p>
            
            <div className="mt-6 flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#cca5d8]" />
              <span>Puerto Montt, Región de Los Lagos · Cobertura Nacional</span>
            </div>
          </div>

          {/* Column 2: Navegación */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#cca5d8] uppercase mb-5">
              NAVEGACIÓN
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/quienes-somos" className="hover:text-white transition-colors font-medium text-white">
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <a href="/#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="/#proyectos" className="hover:text-white transition-colors">
                  Áreas de Impacto
                </a>
              </li>
              <li>
                <a href="/#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Servicios Subpáginas */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#cca5d8] uppercase mb-5">
              SERVICIOS
            </p>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-300">
              {servicesData.map((svc) => (
                <li key={svc.slug}>
                  <Link
                    to={`/servicios/${svc.slug}`}
                    className="hover:text-[#cca5d8] transition-colors line-clamp-1"
                  >
                    {svc.shortTitle || svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contacto & CTA */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#cca5d8] uppercase mb-5">
              CONTÁCTANOS
            </p>
            
            <div className="space-y-3.5 mb-6">
              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 text-[#cca5d8] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:contacto@musaconsultora.cl"
                  className="text-xs sm:text-[13px] font-medium text-slate-200 hover:text-white transition-colors truncate"
                >
                  contacto@musaconsultora.cl
                </a>
              </div>

              {/* Phone / WhatsApp */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 text-[#cca5d8] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="https://wa.me/56976086896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-[13px] font-medium text-slate-200 hover:text-white transition-colors"
                >
                  +56 9 7608 6896
                </a>
              </div>

              {/* Web */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 text-[#cca5d8] flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <a
                  href="https://www.musaconsultora.cl"
                  className="text-xs sm:text-[13px] font-medium text-slate-200 hover:text-white transition-colors"
                >
                  www.musaconsultora.cl
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 mb-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#9c6bb0] text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#9c6bb0] text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contacto@musaconsultora.cl"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#9c6bb0] text-slate-200 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="/#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-xs font-medium px-5 py-3 rounded-xl shadow-lg shadow-[#9c6bb0]/25 transition-all duration-200"
              >
                <span>Agendar diagnóstico</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Developer Credits */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MUSA Consultora Organizacional. Todos los derechos reservados.</p>
          
          {/* Developer Credit: noweb labs with link www.noweb.cl */}
          <div className="flex items-center gap-1.5 text-slate-300">
            <span>Desarrollado por</span>
            <a
              href="https://www.noweb.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cca5d8] hover:text-white font-semibold underline underline-offset-4 decoration-[#cca5d8]/40 hover:decoration-white transition-colors"
            >
              noweb labs
            </a>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span className="hover:text-white cursor-pointer transition-colors">
              Aviso Legal
            </span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Política de Privacidad
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
