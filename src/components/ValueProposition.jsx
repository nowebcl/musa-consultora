import React from 'react'
import { Check, ArrowRight } from 'lucide-react'

export default function ValueProposition() {
  const features = [
    {
      title: 'Diagnóstico real, sin plantillas',
      description: 'Cada intervención parte de un diagnóstico profundo y a medida del momento de tu empresa.'
    },
    {
      title: 'Conexión directa con el P&L',
      description: 'Vinculamos personas con rentabilidad, reduciendo costos por rotación y aumentando productividad.'
    },
    {
      title: 'Criterio ejecutivo senior',
      description: 'Más de 20 años de experiencia directiva en sectores de alta complejidad.'
    }
  ]

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Rounded Card Container (Bordes Redondeados & Tamaño Ajustado) */}
        <div className="relative w-full bg-[#161a2d] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden shadow-xl border border-slate-800/60">
          
          {/* Subtle Dot Matrix Pattern */}
          <div className="absolute bottom-4 left-4 w-36 h-36 pointer-events-none opacity-15 hidden sm:block">
            <svg width="100%" height="100%" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dark-dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2" fill="#a878bd" />
              </pattern>
              <rect width="160" height="160" fill="url(#dark-dot-pattern)" />
            </svg>
          </div>

          {/* 2 COLUMNAS TANTO EN MÓVIL COMO EN ESCRITORIO */}
          <div className="grid grid-cols-2 items-stretch min-h-[300px] sm:min-h-[420px] lg:min-h-[460px]">
            
            {/* Columna 1 (Izquierda): Contenido Textual Ordenado */}
            <div className="relative z-10 flex flex-col justify-between p-4 sm:p-8 lg:p-10">
              <div>
                {/* Overline */}
                <p className="text-[9px] sm:text-xs font-semibold tracking-[0.2em] text-[#a878bd] uppercase mb-1.5 sm:mb-2.5">
                  PROPUESTA DE VALOR
                </p>

                {/* Heading */}
                <h2 className="text-sm sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight mb-2 sm:mb-3">
                  Impulsamos organizaciones{' '}
                  <span className="text-[#b98fd5] block sm:inline">listas para crecer</span>
                </h2>

                {/* Description */}
                <p className="text-[11px] sm:text-sm text-[#9ca6c0] font-light leading-relaxed mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  MUSA no vende plantillas ni soluciones estándar. Conectamos la gestión de personas con el P&L del negocio para construir organizaciones sólidas, eficientes y sostenibles.
                </p>

                {/* Feature Check List */}
                <div className="space-y-2 sm:space-y-3.5 mb-4 sm:mb-6">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-start gap-1.5 sm:gap-2.5">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#8e63a3] text-[#cca5d8] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <h3 className="text-white text-[10.5px] sm:text-sm font-semibold leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-[#9ca6c0] text-[11px] sm:text-xs leading-relaxed mt-0.5 font-light hidden sm:block">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-[11px] sm:text-sm font-medium px-4 py-2 sm:px-6 sm:py-2.5 rounded-lg sm:rounded-xl shadow-md shadow-[#9c6bb0]/20 hover:shadow-lg transition-all duration-200"
                >
                  <span>Hablemos</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Columna 2 (Derecha): Foto de Noemi Sanagua Soto */}
            <div className="relative w-full h-full min-h-[260px] sm:min-h-full overflow-hidden bg-[#161a2d]">
              <img
                src="/IMG_7176.jpg"
                alt="Noemi Sanagua Soto - Propuesta de Valor MUSA"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161a2d]/30 via-transparent to-transparent sm:hidden" />
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
