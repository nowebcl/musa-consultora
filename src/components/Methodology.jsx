import React from 'react'
import { Headphones, Search, CheckSquare, MapPin, ArrowRight } from 'lucide-react'

export default function Methodology() {
  const pillars = [
    {
      number: '01',
      category: 'Selección estratégica',
      title: 'CAUTIVAR',
      description: 'Atraemos y seleccionamos el talento mediante búsqueda directa y Evaluación Tridimensional®. Evaluamos el perfil de los candidatos/as: no solo decimos "califica", explicamos cómo puede aportar valor al negocio.',
      icon: (
        <svg className="w-10 h-10 text-[#9c6bb0] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10" cy="10" r="7" />
          <path d="m21 21-4.35-4.35" />
          <circle cx="10" cy="8.5" r="2.2" />
          <path d="M6.5 13.5a3.5 3.5 0 0 1 7 0" />
        </svg>
      )
    },
    {
      number: '02',
      category: 'Fortalecimiento organizacional',
      title: 'POTENCIAR',
      description: 'Optimizamos la gestión organizacional con descriptores de cargo claros, matrices RACI y modelos de gobernanza laboral alineados a la rentabilidad.',
      icon: (
        <svg className="w-10 h-10 text-[#9c6bb0] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <rect x="7" y="13" width="3" height="5" rx="0.5" />
          <rect x="12" y="10" width="3" height="8" rx="0.5" />
          <rect x="17" y="7" width="3" height="11" rx="0.5" />
          <path d="M7 11 12 6l5 3 4-4" />
          <path d="M17 5h4v4" />
        </svg>
      )
    },
    {
      number: '03',
      category: 'Liderazgo y desarrollo',
      title: 'DESARROLLAR',
      description: 'Acompañamos a directivos y mandos medios con programas de liderazgo, coaching ejecutivo y planes individuales medibles con KPIs de negocio.',
      icon: (
        <svg className="w-10 h-10 text-[#9c6bb0] stroke-[1.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <circle cx="6" cy="8" r="1.8" />
          <circle cx="18" cy="8" r="1.8" />
          <path d="M12 11c3 0 5 2 5 4v1c0 3-3.5 4.5-5 5.5-1.5-1-5-2.5-5-5.5v-1c0-2 2-4 5-4z" />
          <path d="m10 16 1.5 1.5 3-3" />
        </svg>
      )
    }
  ]

  const diagnosticStages = [
    {
      step: '1',
      title: 'Escuchar',
      description: 'Levantamiento con stakeholders, entrevistas en profundidad y revisión documental de la situación actual.',
      icon: <Headphones className="w-5 h-5 text-[#9c6bb0]" />
    },
    {
      step: '2',
      title: 'Analizar',
      description: 'Mapeo de brechas entre el estado actual y los objetivos estratégicos y de negocio de la empresa.',
      icon: <Search className="w-5 h-5 text-[#9c6bb0]" />
    },
    {
      step: '3',
      title: 'Priorizar',
      description: 'Matriz de impacto vs. esfuerzo para definir victorias tempranas (quick wins) y proyectos estructurales.',
      icon: <CheckSquare className="w-5 h-5 text-[#9c6bb0]" />
    },
    {
      step: '4',
      title: 'Hoja de ruta',
      description: 'Plan de acción calendarizado con entregables concretos, responsables e indicadores de éxito medibles.',
      icon: <MapPin className="w-5 h-5 text-[#9c6bb0]" />
    }
  ]

  return (
    <section className="relative py-24 lg:py-32 bg-[#fafbfc] overflow-hidden">
      
      {/* Background Dotted Map / Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30 flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 1000 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-6xl mx-auto">
          <pattern id="method-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.8" fill="#b9a6c9" />
          </pattern>
          <rect width="1000" height="450" fill="url(#method-dots)" mask="url(#fade-mask)" />
          <mask id="fade-mask">
            <radialGradient id="fade-rad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.8" />
              <stop offset="70%" stopColor="white" stopOpacity="0.3" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <rect width="1000" height="450" fill="url(#fade-rad)" />
          </mask>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4">
            NUESTRA METODOLOGÍA
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#161c2d] tracking-tight leading-[1.18]">
            Impulsamos resultados
            <br />
            con un enfoque claro
          </h2>
          <p className="text-[#64748b] text-base mt-4 font-light max-w-2xl mx-auto">
            Combinamos una mirada tridimensional sobre el talento con un método de diagnóstico riguroso y ordenado.
          </p>
        </div>

        {/* 3 Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-20">
          {pillars.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 sm:p-9 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] border border-slate-100/90 hover:shadow-[0_20px_45px_-12px_rgba(156,107,176,0.15)] hover:border-[#ecd4f4] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Icon & Outline Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="p-1 text-[#9c6bb0] group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  {/* Outline / Hollow styled number */}
                  <span
                    className="text-3xl sm:text-4xl font-bold font-sans tracking-tight select-none transition-colors duration-300"
                    style={{
                      WebkitTextStroke: '1.5px #cca5d8',
                      color: 'transparent'
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Category Subtitle */}
                <p className="text-xs sm:text-[13px] text-[#64748b] font-normal mb-1.5">
                  {step.category}
                </p>

                {/* Pillar Title */}
                <h3 className="text-xl sm:text-[22px] font-bold text-[#161c2d] tracking-tight mb-4 group-hover:text-[#9c6bb0] transition-colors duration-200">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#555e75] text-sm sm:text-[14.5px] leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Diagnostic Stages Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.04)]">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold tracking-[0.2em] text-[#9c6bb0] uppercase block mb-2">
              PROCESO DE INTERVENCIÓN
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#161c2d] tracking-tight">
              Las 4 etapas del diagnóstico MUSA
            </h3>
            <p className="text-sm sm:text-base text-[#64748b] font-light mt-2">
              Cada proyecto parte de un diagnóstico real y medible para asegurar intervenciones de alto impacto:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {diagnosticStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-[#fcfbfe] rounded-2xl p-6 border border-[#ecd9f2] flex flex-col justify-between hover:border-[#9c6bb0] transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#ebd2f4] flex items-center justify-center">
                      {stage.icon}
                    </div>
                    <span className="text-xl font-bold text-[#cca5d8]">
                      0{stage.step}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#161c2d] mb-2">
                    {stage.title}
                  </h4>
                  <p className="text-xs sm:text-[13.5px] text-[#555e75] font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
