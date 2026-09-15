import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Users, ArrowRight } from 'lucide-react'

export default function AboutUs() {
  const [yearsCount, setYearsCount] = useState(0)
  const cardRef = useRef(null)

  useEffect(() => {
    let start = 0
    const end = 20
    const duration = 1200 // ms
    const stepTime = Math.floor(duration / end)

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          start += 1
          setYearsCount(start)
          if (start >= end) {
            clearInterval(timer)
          }
        }, stepTime)
        observer.disconnect()
      }
    }, { threshold: 0.15 })

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="relative py-20 lg:py-28 bg-[#fcfbfe] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Composition */}
          <div className="lg:col-span-6 relative">
            {/* Dot Matrix Pattern in background */}
            <div className="absolute -bottom-10 -left-8 w-64 h-64 pointer-events-none z-0 opacity-60">
              <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="2.2" fill="#b9a6c9" />
                </pattern>
                <rect width="200" height="200" fill="url(#dot-pattern)" />
              </svg>
            </div>

            {/* Container for Images */}
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none pb-12 sm:pb-16 lg:pb-8">
              {/* Main Top Image: Real Photo IMG_7153.jpg (Swapped & showing as full as possible) */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl w-[88%] sm:w-[84%] bg-slate-50">
                <img
                  src="/IMG_7153.jpg"
                  alt="Noemi Sanagua Soto - MUSA Consultora"
                  className="w-full h-auto aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Floating Dark Badge: "20+ Años impulsando talento" with Dynamic Counter & Float Animation */}
              <div 
                ref={cardRef}
                className="animate-float-slow absolute left-0 sm:-left-3 bottom-8 sm:bottom-12 z-30 bg-[#292036] text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-white/10 max-w-[250px] sm:max-w-[270px] hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#cca5d8] flex items-center justify-center flex-shrink-0 animate-pulse-glow shadow-md shadow-[#cca5d8]/30">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold tracking-tight text-white tabular-nums">
                    {yearsCount}+
                  </span>
                  <span className="block text-xs sm:text-[13px] text-purple-200/90 font-normal leading-tight">
                    Años impulsando talento
                  </span>
                </div>
              </div>

              {/* Overlapping Secondary Image: Real Photo IMG_7145.jpg (Swapped & showing as full as possible) */}
              <div className="absolute right-0 bottom-0 z-20 w-[54%] sm:w-[50%] rounded-2xl sm:rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-50">
                <img
                  src="/IMG_7145.jpg"
                  alt="Noemi Sanagua Soto - Fundadora MUSA"
                  className="w-full h-auto aspect-[3/4] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pl-4">
            {/* Overline */}
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#9c6bb0] uppercase">
              Quiénes Somos
            </p>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#1d2331] tracking-tight leading-[1.2]">
              Más de 20 años impulsando el talento
            </h2>

            {/* Main Paragraph */}
            <p className="text-[#596179] text-base sm:text-[17px] leading-relaxed font-light">
              Fundada en 2022 por <strong className="font-semibold text-[#161c2d]">Noemi Sanagua Soto</strong> (Psicóloga), MUSA nace con el propósito de conectar personas, liderazgo y estrategia para construir organizaciones más sólidas, eficientes y sostenibles.
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="bg-[#f9f1fa] border border-[#eed9f2] text-[#6d397d] font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-xs">
                20+ años de experiencia
              </div>
              <div className="bg-[#f8f9fc] border border-[#e5e9f3] text-[#3f4762] font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl shadow-xs">
                Red nacional multidisciplinaria
              </div>
            </div>

            {/* Second Paragraph */}
            <p className="text-[#596179] text-base sm:text-[16px] leading-relaxed font-light pt-1">
              Más de dos décadas liderando áreas de RR.HH. en empresas de alta complejidad (empresas de servicios, corporativos, acuicultura, minería, automotriz, inmobiliaria, transportes). Trabajamos bajo un <strong className="font-semibold text-[#161c2d]">Enfoque Tridimensional®</strong>: Personas, Organización y Resultados.
            </p>

            {/* Link to detail page */}
            <div>
              <Link
                to="/quienes-somos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9c6bb0] hover:text-[#89579d] transition-colors"
              >
                <span>Conoce nuestra historia y metodología completa</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Founder Profile & CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-t border-slate-100">
              {/* Founder info */}
              <div className="flex items-center gap-3.5">
                <img
                  src="/owner-avatar.jpg"
                  alt="Noemi Sanagua Soto"
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0"
                />
                <div>
                  <p className="text-xs sm:text-[13px] font-medium text-[#9c6bb0] leading-none mb-1.5">
                    Fundadora & Consultora Principal
                  </p>
                  <p className="text-base sm:text-lg font-bold text-[#1d2331] leading-tight">
                    Noemi Sanagua Soto
                  </p>
                </div>
              </div>

              {/* Hablemos Button */}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2.5 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-base font-medium px-8 py-3.5 rounded-xl shadow-md shadow-[#9c6bb0]/25 hover:shadow-lg hover:shadow-[#9c6bb0]/35 hover:translate-x-0.5 active:translate-x-0 transition-all duration-200"
              >
                <span>Hablemos</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
