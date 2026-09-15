import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: 'MUSA nos ayudó a ordenar la gestión de Personas con una mirada estratégica y muy cercana al negocio.',
      name: 'Carolina Muñoz',
      role: 'Gerente de Personas',
      featured: false,
    },
    {
      id: 2,
      quote: 'La metodología de MUSA nos permitió tomar mejores decisiones de talento y fortalecer a nuestros líderes.',
      name: 'Rodrigo Pérez',
      role: 'Gerente General',
      featured: true,
    },
    {
      id: 3,
      quote: 'Valoramos su capacidad para traducir desafíos organizacionales en acciones concretas y sostenibles.',
      name: 'Daniela Rojas',
      role: 'Subgerente de Desarrollo Organizacional',
      featured: false,
    },
    {
      id: 4,
      quote: 'El acompañamiento de MUSA fue clave para potenciar las capacidades de nuestros equipos ejecutivos.',
      name: 'Gabriel Soto',
      role: 'Director de Operaciones',
      featured: false,
    },
    {
      id: 5,
      quote: 'Soluciones prácticas y aplicables desde el primer día con un entendimiento profundo del negocio.',
      name: 'Marcela Valenzuela',
      role: 'Gerente de Talento & Cultura',
      featured: false,
    },
    {
      id: 6,
      quote: 'La cercanía y el compromiso del equipo marcaron una diferencia real en nuestra transformación cultural.',
      name: 'Andrés Morales',
      role: 'VP de Recursos Humanos',
      featured: true,
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)
  const touchStartX = useRef(0)

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Infinite auto-slide every 4.5 seconds
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      handleNext()
    }, 4500)
    return () => clearInterval(timer)
  }, [currentIndex, isPaused])

  const maxIndex = testimonials.length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % maxIndex)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + maxIndex) % maxIndex)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (diff > 50) {
      handleNext()
    } else if (diff < -50) {
      handlePrev()
    }
  }

  // Duplicate items array to make the infinite slider continuous without empty spaces
  const extendedItems = [...testimonials, ...testimonials, ...testimonials]

  return (
    <section 
      className="relative py-24 lg:py-32 bg-white overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4">
              TESTIMONIOS
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#161c2d] tracking-tight leading-[1.18]">
              Acompañamiento experto
              <br />
              para cada desafío
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              aria-label="Testimonio anterior"
              className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs hover:border-slate-300 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Siguiente testimonio"
              className="w-12 h-12 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all duration-200 shadow-xs hover:border-slate-300 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* Infinite Slider Carousel Track */}
        <div 
          className="relative w-full overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${(currentIndex * (100 / itemsPerView))}%)`,
            }}
          >
            {extendedItems.map((item, idx) => {
              const isCardFeatured = item.featured
              return (
                <div
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 px-3.5"
                  style={{
                    width: `${100 / itemsPerView}%`,
                  }}
                >
                  <div
                    className={`h-full min-h-[330px] sm:min-h-[340px] rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                      isCardFeatured
                        ? 'bg-[#8478b2] text-white shadow-xl shadow-[#8478b2]/20'
                        : 'bg-white text-[#161c2d] border border-slate-100 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] hover:shadow-xl'
                    }`}
                  >
                    <div>
                      {/* 5 Stars */}
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 fill-current ${
                              isCardFeatured ? 'text-white' : 'text-[#8c7cb3]'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Thin Separator Line */}
                      <div
                        className={`w-full h-[1px] mb-6 ${
                          isCardFeatured ? 'bg-white/20' : 'bg-slate-100'
                        }`}
                      />

                      {/* Testimonial Quote */}
                      <p
                        className={`text-[14.5px] sm:text-[15.5px] leading-relaxed font-light ${
                          isCardFeatured ? 'text-white' : 'text-[#4b556b]'
                        }`}
                      >
                        {item.quote}
                      </p>
                    </div>

                    {/* Author Profile without photos */}
                    <div className="flex items-center gap-3.5 pt-6 mt-auto">
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 tracking-wider ${
                          isCardFeatured
                            ? 'bg-white/20 text-white border border-white/30'
                            : 'bg-[#f6eff9] text-[#704285] border border-[#ebd2f4]'
                        }`}
                      >
                        {item.name
                          .split(' ')
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join('')}
                      </div>
                      <div>
                        <h3
                          className={`text-[15px] sm:text-base font-bold leading-tight ${
                            isCardFeatured ? 'text-white' : 'text-[#161c2d]'
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p
                          className={`text-xs sm:text-[13px] mt-0.5 font-normal ${
                            isCardFeatured ? 'text-white/80' : 'text-[#64748b]'
                          }`}
                        >
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Ir al testimonio ${dotIdx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex % maxIndex === dotIdx
                  ? 'w-8 bg-[#8478b2]'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
