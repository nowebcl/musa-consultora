import React, { useState, useEffect, useRef } from 'react'
import { Sparkles } from 'lucide-react'

const IMAGES = [
  { id: 1, src: '/impact-1.jpg', alt: 'Diálogo y consultoría estratégica' },
  { id: 2, src: '/impact-2.jpg', alt: 'Colaboración y análisis de reportes' },
  { id: 3, src: '/impact-3.jpg', alt: 'Reporte de analítica y métricas de desempeño' },
  { id: 4, src: '/impact-4.jpg', alt: 'Liderazgo en reunión de directorio' },
  { id: 5, src: '/impact-5.jpg', alt: 'Visión ejecutiva y toma de decisiones' }
]

const SWAP_PAIRS = [
  [0, 1], // Fila 1: izquierda y derecha
  [2, 4], // Fila 2: extremos
  [0, 3], // Fila 1 izq y Fila 2 centro
  [1, 2], // Fila 1 der y Fila 2 izq
  [3, 4], // Fila 2 centro y der
  [1, 3], // Fila 1 der y Fila 2 centro
  [0, 4]  // Fila 1 izq y Fila 2 der
]

export default function ImpactAreas() {
  const [slots, setSlots] = useState([0, 1, 2, 3, 4])
  const [swappingIndices, setSwappingIndices] = useState([])
  const pairIndexRef = useRef(0)

  // Cambio 100% automático y continuo sin requerir interacción
  useEffect(() => {
    const timer = setInterval(() => {
      const [idxA, idxB] = SWAP_PAIRS[pairIndexRef.current]
      pairIndexRef.current = (pairIndexRef.current + 1) % SWAP_PAIRS.length

      // Inicia transición de desvanecimiento suave en las 2 imágenes que cambian
      setSwappingIndices([idxA, idxB])

      setTimeout(() => {
        setSlots((prev) => {
          const next = [...prev]
          const temp = next[idxA]
          next[idxA] = next[idxB]
          next[idxB] = temp
          return next
        })
      }, 350)

      setTimeout(() => {
        setSwappingIndices([])
      }, 700)
    }, 3200)

    return () => clearInterval(timer)
  }, [])

  const metrics = [
    {
      percentage: '30%',
      label: 'Rotación Temprana (< 6 meses)',
      detail: 'Piso mínimo de pérdida directa en inducción y reemplazo'
    },
    {
      percentage: '150%',
      label: 'Mandos Medios y Técnicos',
      detail: 'Pérdida en productividad, tiempos de espera y curva de aprendizaje'
    },
    {
      percentage: '213%',
      label: 'Líderes y Ejecutivos Senior',
      detail: 'Impacto estratégico, fuga de know-how y desestabilización operativa'
    }
  ]

  return (
    <section id="proyectos" className="relative py-10 sm:py-14 lg:py-16 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Compacto con información de Slide 4 */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#9c6bb0] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ÁREAS DE IMPACTO & RENTABILIDAD</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161c2d] tracking-tight leading-tight">
            Transformamos desafíos en oportunidades
          </h2>
          <p className="text-base sm:text-lg text-[#704285] font-semibold mt-2.5">
            Cuando el talento no se gestiona, el negocio absorbe el costo.
          </p>
          <p className="text-xs sm:text-sm text-[#596179] font-light mt-1.5 max-w-2xl mx-auto leading-relaxed">
            La rotación imprevista, la falta de gobernanza y las vacantes críticas impactan directamente en la última línea financiera y la continuidad de las operaciones.
          </p>
        </div>

        {/* 2 FILAS EN MÓVIL Y ESCRITORIO CON CAMBIO AUTOMÁTICO */}
        <div className="space-y-2.5 sm:space-y-4 mb-6">
          
          {/* Fila 1 (2 Imágenes): Asimétrica 57% / 43% */}
          <div className="flex flex-row gap-2.5 sm:gap-4 items-stretch">
            
            {/* Slot 0 (Fila 1, Izquierda) */}
            <div className="w-[57%] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-slate-200 relative">
              <div className="aspect-[16/11] sm:aspect-[16/10] w-full h-full overflow-hidden">
                <img
                  src={IMAGES[slots[0]].src}
                  alt={IMAGES[slots[0]].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    swappingIndices.includes(0)
                      ? 'opacity-20 scale-95 blur-[1px]'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Slot 1 (Fila 1, Derecha) */}
            <div className="w-[43%] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-slate-200 relative">
              <div className="aspect-[16/11] sm:aspect-[16/10] w-full h-full overflow-hidden">
                <img
                  src={IMAGES[slots[1]].src}
                  alt={IMAGES[slots[1]].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    swappingIndices.includes(1)
                      ? 'opacity-20 scale-95 blur-[1px]'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Fila 2 (3 Imágenes): 28% / 44% / 28% */}
          <div className="flex flex-row gap-2 sm:gap-4 items-stretch">
            
            {/* Slot 2 (Fila 2, Izquierda) */}
            <div className="w-[28%] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-slate-200 relative">
              <div className="aspect-[1/1] sm:aspect-[4/3] md:aspect-[1.18/1] w-full h-full overflow-hidden">
                <img
                  src={IMAGES[slots[2]].src}
                  alt={IMAGES[slots[2]].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    swappingIndices.includes(2)
                      ? 'opacity-20 scale-95 blur-[1px]'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Slot 3 (Fila 2, Centro) */}
            <div className="w-[44%] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-slate-200 relative">
              <div className="aspect-[16/11] sm:aspect-[16/10.5] md:aspect-[1.18/0.75] w-full h-full overflow-hidden">
                <img
                  src={IMAGES[slots[3]].src}
                  alt={IMAGES[slots[3]].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    swappingIndices.includes(3)
                      ? 'opacity-20 scale-95 blur-[1px]'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>

            {/* Slot 4 (Fila 2, Derecha) */}
            <div className="w-[28%] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm bg-slate-200 relative">
              <div className="aspect-[1/1] sm:aspect-[4/3] md:aspect-[1.18/1] w-full h-full overflow-hidden">
                <img
                  src={IMAGES[slots[4]].src}
                  alt={IMAGES[slots[4]].alt}
                  className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                    swappingIndices.includes(4)
                      ? 'opacity-20 scale-95 blur-[1px]'
                      : 'opacity-100 scale-100 blur-0'
                  }`}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Menuda Info: Barra compacta y ordenada de costo de rotación con datos del Slide 4 */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-3.5 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9c6bb0]" />
              <span className="text-xs sm:text-sm font-bold text-[#161c2d]">
                Cuando el talento no se gestiona, el negocio absorbe el costo
              </span>
            </div>
            <span className="text-[11px] text-[#64748b] font-light">
              Fuente: SHRM Benchmark · % sobre salario anual del cargo
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-left mb-4">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-[#faf7fc] rounded-lg sm:rounded-xl p-3 sm:p-4 border border-[#f0e4f5]/60 flex flex-col justify-center"
              >
                <div className="text-xl sm:text-2xl font-extrabold text-[#704285] leading-none mb-1">
                  {item.percentage}
                </div>
                <div className="text-xs sm:text-[13px] font-semibold text-[#161c2d] leading-tight">
                  {item.label}
                </div>
                <div className="text-[11px] sm:text-xs text-[#64748b] font-light mt-1 leading-snug">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Business Hidden Costs Summary from Slide 4 */}
          <div className="bg-[#fcfbfe] rounded-xl p-3 sm:p-3.5 border border-[#ecd9f2]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#555e75]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#161c2d]">Impacto directo en el negocio:</span>
              <span>Fuga de conocimiento, reprocesos de contratación, sobrecarga en los equipos clave y contingencias normativas.</span>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 font-semibold text-[#9c6bb0] hover:text-[#805096] whitespace-nowrap transition-colors"
            >
              <span>Agendar diagnóstico preventivo</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
