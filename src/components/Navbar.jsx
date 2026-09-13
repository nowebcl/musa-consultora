import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowRight, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Inicio', path: '/', isRoute: true },
    { name: 'Nosotros', path: '/quienes-somos', isRoute: true },
    { name: 'Servicios', path: '/#servicios', isRoute: false },
    { name: 'Áreas de Impacto', path: '/#proyectos', isRoute: false },
    { name: 'Contacto', path: '/#contacto', isRoute: false }
  ]

  return (
    <header className="relative z-30 w-full bg-white/85 backdrop-blur-md border-b border-slate-100/80 sticky top-0 transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3.5 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="MUSA Consultora Organizacional"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:opacity-90"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[15px]">
          {navLinks.map((link) => {
            const isActive = link.isRoute && location.pathname === link.path
            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? 'text-[#6b719b] font-semibold'
                    : 'text-[#4b536b] hover:text-[#1d2331] font-normal'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-1 mx-auto w-full h-[2px] bg-[#6b719b] rounded-full" />
                )}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.path}
                className="relative py-1 text-[#4b536b] hover:text-[#1d2331] font-normal transition-colors duration-200"
              >
                {link.name}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2.5 bg-[#6b719b] hover:bg-[#5b618a] text-white text-[15px] font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:translate-x-0.5 active:translate-x-0"
          >
            <span>Hablemos</span>
            <ArrowRight className="w-4 h-4 stroke-[2]" />
          </a>
        </div>

        {/* Mobile Hamburger Button: 3 Líneas Diferentes */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#161c2d] hover:bg-slate-100 transition-colors focus:outline-none flex items-center justify-center w-10 h-10"
          aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-[#161c2d]" />
          ) : (
            <div className="flex flex-col items-end justify-center gap-1.5 w-6">
              {/* Línea 1: Larga (24px) */}
              <span className="h-[2px] w-6 bg-[#161c2d] rounded-full transition-all duration-300" />
              {/* Línea 2: Corta (14px) en color púrpura MUSA */}
              <span className="h-[2px] w-3.5 bg-[#9c6bb0] rounded-full transition-all duration-300" />
              {/* Línea 3: Mediana (20px) */}
              <span className="h-[2px] w-5 bg-[#161c2d] rounded-full transition-all duration-300" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-slate-100 px-6 py-5 shadow-lg">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = link.isRoute && location.pathname === link.path
              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1.5 transition-colors ${
                    isActive
                      ? 'text-[#9c6bb0] border-l-2 border-[#9c6bb0] pl-3 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 pl-3'
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-1.5 transition-colors text-slate-600 hover:text-slate-900 pl-3"
                >
                  {link.name}
                </a>
              )
            })}
            <div className="pt-2">
              <a
                href="/#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-sm font-medium px-5 py-3 rounded-full shadow transition-colors"
              >
                <span>Hablemos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
