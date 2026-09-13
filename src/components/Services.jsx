import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, UserCheck, Network, Briefcase, Scale, Award, Compass } from 'lucide-react'
import { servicesData } from '../data/servicesData'

export default function Services() {
  const iconsMap = {
    'headhunting-evaluaciones': <UserCheck className="w-6 h-6 stroke-[1.75]" />,
    'gestion-organizacional-liderazgo': <Network className="w-6 h-6 stroke-[1.75]" />,
    'gerencia-fraccional': <Briefcase className="w-6 h-6 stroke-[1.75]" />,
    'relaciones-laborales-asesoria': <Scale className="w-6 h-6 stroke-[1.75]" />,
    'certificaciones-laborales': <Award className="w-6 h-6 stroke-[1.75]" />,
    'posicionamiento-profesional': <Compass className="w-6 h-6 stroke-[1.75]" />
  }

  return (
    <section id="servicios" className="relative py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4">
            SERVICIOS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#161c2d] tracking-tight leading-[1.18]">
            Soluciones que impulsan
            <br />
            el crecimiento
          </h2>
          <p className="text-[#64748b] text-base mt-4 font-light max-w-2xl mx-auto">
            Acompañamos a las organizaciones en cada etapa con consultoría especializada, rigor metodológico y visión estratégica de negocio.
          </p>
        </div>

        {/* 6 Services Cards Grid (2 rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {servicesData.map((item) => (
            <div
              key={item.slug}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.13)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Card Header with Icon & Titles */}
                <div className="p-6 sm:px-7 sm:py-6 flex items-center gap-4 bg-white z-10">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-[#ecd4f4] bg-[#fbf5fc] flex items-center justify-center flex-shrink-0 text-[#9c6bb0] transition-colors duration-300 group-hover:bg-[#f6e9f9] group-hover:border-[#deb7e9]">
                    {iconsMap[item.slug] || <Briefcase className="w-6 h-6 stroke-[1.75]" />}
                  </div>
                  <div>
                    <h3 className="text-[17px] sm:text-lg font-bold text-[#161c2d] leading-snug group-hover:text-[#9c6bb0] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#64748b] font-normal mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Description */}
                <div className="p-6 sm:px-7 pb-4">
                  <p className="text-xs sm:text-sm text-[#596179] font-light leading-relaxed line-clamp-2">
                    {item.bajada}
                  </p>
                </div>
              </div>

              {/* Card Footer: Conocer más Link */}
              <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-50 flex items-center justify-between">
                <Link
                  to={`/servicios/${item.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#9c6bb0] group-hover:text-[#89579d] transition-colors"
                >
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <span className="text-[11px] font-medium text-slate-400">MUSA</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
