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
      label: 'Temprana (< 6 meses)',
      detail: 'Costo mínimo en rotación inicial'
    },
    {
      percentage: '150%',
      label: 'Mandos medios y técnicos',
      detail: 'Pérdida en productividad'
    },
    {
      percentage: '213%',
      label: 'Líderes y ejecutivos',
      detail: 'Impacto estratégico y know-how'
    }
  ]

  return (
    <section id="proyectos" className="relative py-10 sm:py-14 lg:py-16 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header Compacto */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.2em] text-[#9c6bb0] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ÁREAS DE IMPACTO</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#161c2d] tracking-tight leading-tight">
            Transformamos desafíos en oportunidades
          </h2>
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

        {/* Menuda Info: Barra compacta y ordenada de costo de rotación */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-100 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 mb-3 pb-2.5 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#9c6bb0]" />
              <span className="text-xs font-semibold text-[#161c2d]">
                Impacto de la rotación en el negocio
              </span>
            </div>
            <span className="text-[11px] text-[#64748b] font-light">
              Fuente: SHRM Benchmark · % sobre salario anual
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="bg-[#faf7fc] rounded-lg sm:rounded-xl p-2 sm:p-3 border border-[#f0e4f5]/60 flex flex-col justify-center"
              >
                <div className="text-lg sm:text-2xl font-extrabold text-[#704285] leading-none mb-1">
                  {item.percentage}
                </div>
                <div className="text-[10px] sm:text-xs font-semibold text-[#161c2d] leading-tight truncate">
                  {item.label}
                </div>
                <div className="text-[9px] sm:text-[11px] text-[#64748b] font-light hidden sm:block mt-0.5">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
