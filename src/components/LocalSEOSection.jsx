import React, { useState } from 'react'
import { MapPin, Users, Award, ShieldCheck, ChevronDown, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react'

export default function LocalSEOSection() {
  const [openFaq, setOpenFaq] = useState(0)

  const localFeatures = [
    {
      title: 'Reclutamiento y Selección en Puerto Montt',
      category: 'Selección Estratégica',
      description: 'Atracción y selección de personal calificado (gerencias, jefaturas de planta, supervisores y especialistas) con foco en fit cultural y retención en Puerto Montt, Puerto Varas y Chiloé.',
      highlight: 'Garantía de reposición de 60 a 90 días'
    },
    {
      title: 'Consultora RRHH & Gestión de Personas',
      category: 'Estructura y Clima',
      description: 'Alineamos a los equipos con los resultados del negocio. Descriptores de cargo, matrices RACI, evaluación de clima laboral y desarrollo de líderes ejecutivos para empresas de la Región de Los Lagos.',
      highlight: 'Metodología Enfoque Tridimensional®'
    },
    {
      title: 'Cumplimiento Legal & Ley Karin Los Lagos',
      category: 'Gobernanza y Ley 21.643',
      description: 'Blindaje preventivo y adecuación normativa obligatoria: protocolos de prevención de acoso (Ley Karin), Ley 40 Horas, auditorías contractuales y certificaciones laborales ante la Dirección del Trabajo de Puerto Montt.',
      highlight: 'Expedientes 100% auditables ante DT'
    }
  ]

  const faqs = [
    {
      q: '¿Por qué elegir a MUSA como su consultora de recursos humanos en Puerto Montt?',
      a: 'MUSA combina más de 20 años de liderazgo ejecutivo senior con un conocimiento profundo del ecosistema productivo de Puerto Montt y la Región de Los Lagos (especialmente en acuicultura, salmonicultura, transporte, inmobiliaria y servicios). No aplicamos recetas teóricas: trabajamos en terreno conectando la gestión de personas con el P&L de su empresa.'
    },
    {
      q: '¿Cómo funciona el proceso de reclutamiento y selección de personal en Puerto Montt?',
      a: 'Aplicamos nuestra metodología patentada Selección Tridimensional®, evaluando competencias técnicas, compatibilidad con la jefatura directa y alineamiento cultural. Realizamos búsqueda activa de mercado en el sur de Chile y a nivel nacional, batería de pruebas psicolaborales y ofrecemos garantía de reposición de 60 a 90 días según el nivel del cargo.'
    },
    {
      q: '¿Qué experiencia tiene la consultora en la industria acuícola y salmonera de Puerto Montt?',
      a: 'Nuestra fundadora, Noemi Sanagua Soto, cuenta con amplia trayectoria dirigiendo áreas de personas y relaciones laborales en corporaciones acuícolas y de servicios en la zona sur austral. Comprendemos los desafíos operativos de turnos, plantas de proceso, pisciculturas, bioseguridad y logística marítima.'
    },
    {
      q: '¿Qué asesoría entrega una consultora RRHH en Puerto Montt para la Ley Karin y fiscalizaciones DT?',
      a: 'Diseñamos e implementamos los protocolos obligatorios de prevención, investigación y sanción de acoso laboral, sexual y violencia en el trabajo (Ley 21.643 - Ley Karin), adaptamos los Reglamentos Internos (RIOHS), capacitamos a comités paritarios y emitimos matrices de riesgo laboral previo a inspecciones de la Dirección del Trabajo.'
    }
  ]

  return (
    <section className="relative py-20 lg:py-28 bg-[#fdfcff] border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header SEO */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4 bg-[#fbf5fc] border border-[#ecd4f4] px-4 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span>PRESENCIA ESTRATÉGICA EN PUERTO MONTT & LOS LAGOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#161c2d] tracking-tight leading-[1.18]">
            Consultora de Recursos Humanos en Puerto Montt
          </h2>
          
          <p className="text-[#596179] text-base sm:text-lg mt-4 font-light leading-relaxed">
            Líderes en <strong className="font-semibold text-[#161c2d]">reclutamiento y selección de personal</strong>, headhunting y <strong className="font-semibold text-[#161c2d]">consultoría de RRHH estratégica</strong> para empresas, industrias y servicios en Puerto Montt, Puerto Varas y la Región de Los Lagos.
          </p>
        </div>

        {/* 3 Core Services in Puerto Montt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {localFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:border-[#ecd4f4] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#9c6bb0] uppercase block mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-[#161c2d] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-[#555e75] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#704285] bg-[#fbf5fc] border border-[#ecd4f4] px-3.5 py-2 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-[#9c6bb0] flex-shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Specialization Banner */}
        <div className="bg-[#161a2d] rounded-3xl p-8 sm:p-12 text-white mb-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#cca5d8] uppercase">
                FOCO SECTORIAL EN EL SUR DE CHILE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                Especialistas en la Industria Acuícola, Salmonera y Logística de Los Lagos
              </h3>
              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
                Sabemos que la operación en Puerto Montt requiere velocidad, rigor y profesionales adaptados a la cultura local. Seleccionamos el talento adecuado para faenas, centros de cultivo, plantas de proceso y oficinas corporativas.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-2">
                {['Acuicultura y Salmones', 'Logística y Marítimo', 'Automotriz y Transporte', 'Servicios Industriales', 'Construcción e Inmobiliaria'].map((tag, i) => (
                  <span key={i} className="text-xs font-medium px-3.5 py-1.5 rounded-lg bg-white/10 text-slate-200 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center sm:items-end justify-center">
              <a
                href="#contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-base font-medium px-8 py-4 rounded-xl shadow-lg shadow-[#9c6bb0]/30 transition-all duration-200"
              >
                <span>Cotizar Selección en Puerto Montt</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>
          </div>
        </div>

        {/* Local FAQ Accordion (Critical for Google Rich Snippets & People Also Ask) */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#9c6bb0] uppercase mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>PREGUNTAS FRECUENTES</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#161c2d]">
              Preguntas Frecuentes sobre Recursos Humanos en Puerto Montt
            </h3>
            <p className="text-sm text-[#64748b] mt-2 font-light">
              Respuestas a las principales consultas de directores y gerentes de la Región de Los Lagos.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-[#161c2d] hover:text-[#9c6bb0] transition-colors"
                  >
                    <span className="text-base sm:text-[17px] leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9c6bb0] flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-[15px] text-[#555e75] font-light leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
