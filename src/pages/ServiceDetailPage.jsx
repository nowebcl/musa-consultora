import React, { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { servicesData } from '../data/servicesData'
import { ArrowLeft, ArrowRight, CheckCircle2, PackageCheck, HelpCircle, Layers, Award } from 'lucide-react'

export default function ServiceDetailPage() {
  const { slug } = useParams()
  const service = servicesData.find((s) => s.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Consultora RRHH Puerto Montt · MUSA`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  const otherServices = servicesData.filter((s) => s.slug !== slug)

  return (
    <div className="bg-white min-h-screen text-[#161c2d] pt-6 pb-20">
      
      {/* Top Navigation Bar / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8 flex items-center justify-between">
        <Link
          to="/#servicios"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#9c6bb0] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>← Volver a servicios</span>
        </Link>

        <span className="hidden sm:inline-block text-xs font-semibold uppercase tracking-widest text-[#9c6bb0] bg-[#fbf5fc] border border-[#ebd2f4] px-3.5 py-1.5 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Main Service Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-2">
                SERVICIO ESPECIALIZADO
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#161c2d] tracking-tight leading-[1.18]">
                {service.title}
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#555e75] font-light leading-relaxed">
              {service.bajada}
            </p>

            {service.metric && (
              <div className="inline-flex items-center gap-2.5 bg-[#fbf5fc] border border-[#ecd4f4] text-[#704285] px-4 py-2 rounded-xl text-sm font-semibold">
                <Award className="w-4 h-4 text-[#9c6bb0]" />
                <span>{service.metric}</span>
              </div>
            )}

            <div className="pt-2">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2.5 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-base font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-[#9c6bb0]/25 hover:shadow-xl hover:shadow-[#9c6bb0]/35 hover:translate-x-0.5 transition-all duration-200"
              >
                <span>Agendar reunión de diagnóstico</span>
                <ArrowRight className="w-4 h-4 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Service Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50 aspect-[4/3] lg:aspect-[1/1]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Scope (Alcance) & Deliverables (Entregable) */}
      <section className="bg-[#fafbfc] py-16 sm:py-20 border-y border-slate-100 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left: Alcance del Servicio */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#fbf5fc] border border-[#ebd2f4] flex items-center justify-center text-[#9c6bb0]">
                  <Layers className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-[#161c2d]">Alcance del Servicio</h2>
              </div>

              <div className="space-y-4">
                {service.alcance.map((item, index) => (
                  <div key={index} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#9c6bb0] flex-shrink-0 mt-0.5" />
                    <p className="text-sm sm:text-base text-[#555e75] font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Entregable & Contexto */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              
              {/* Entregable Card */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf5fc] border border-[#ebd2f4] flex items-center justify-center text-[#9c6bb0]">
                    <PackageCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#161c2d]">Entregable Concreto</h3>
                </div>
                <p className="text-sm sm:text-[15px] text-[#555e75] font-light leading-relaxed">
                  {service.entregable}
                </p>
              </div>

              {/* Cuándo Aplica (if applicable) */}
              {service.cuandoAplica && (
                <div className="bg-[#fcfbfe] rounded-3xl p-8 border border-[#ecd9f2] shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <HelpCircle className="w-5 h-5 text-[#9c6bb0]" />
                    <h3 className="text-lg font-bold text-[#161c2d]">¿Cuándo aplica este servicio?</h3>
                  </div>
                  <p className="text-sm text-[#555e75] font-light leading-relaxed">
                    {service.cuandoAplica}
                  </p>
                </div>
              )}

              {/* Metodología / Enfoque */}
              {service.metodologia && (
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9c6bb0] block mb-2">
                    ENFOQUE METODOLÓGICO
                  </span>
                  <p className="text-sm text-[#555e75] font-light leading-relaxed">
                    {service.metodologia}
                  </p>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 sm:mb-24">
        <div className="bg-[#161a2d] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold">
              Inicia con un diagnóstico claro y personalizado
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Conversemos sobre los requerimientos de tu equipo y definamos el alcance adecuado para tu etapa.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2.5 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-base font-medium px-8 py-4 rounded-xl shadow-lg shadow-[#9c6bb0]/25 transition-all duration-200"
            >
              <span>Agendar reunión de diagnóstico</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </a>
          </div>
        </div>
      </section>

      {/* Other Services Exploration */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border-t border-slate-100 pt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#9c6bb0] uppercase">
                PORTAFOLIO COMPLETO
              </p>
              <h3 className="text-2xl font-bold text-[#161c2d]">Otros servicios que te pueden interesar</h3>
            </div>
            <Link
              to="/#servicios"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#9c6bb0] hover:underline"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                to={`/servicios/${item.slug}`}
                className="group bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#ecd4f4] hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-[#9c6bb0] uppercase block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#161c2d] group-hover:text-[#9c6bb0] transition-colors leading-snug mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] line-clamp-2 font-light">
                    {item.bajada}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 flex items-center justify-between text-xs font-semibold text-[#9c6bb0]">
                  <span>Conocer más</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
