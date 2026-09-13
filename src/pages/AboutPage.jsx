import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, CheckCircle2, Award, Users, Target, ShieldCheck, Briefcase } from 'lucide-react'

export default function AboutPage() {
  const sectors = [
    'Acuicultura',
    'Minería',
    'Automotriz',
    'Inmobiliaria',
    'Transportes',
    'Empresas Productivas',
    'Servicios'
  ]

  const pillars = [
    {
      title: 'Personas',
      subtitle: 'Diagnóstico, alineamiento y cultura interna',
      description: 'Entendemos a las personas como el motor insustituible del negocio. Evaluamos clima, potencial y dinámicas de equipo para asegurar coherencia cultural y compromiso.',
      icon: <Users className="w-6 h-6 text-[#9c6bb0]" />
    },
    {
      title: 'Organización',
      subtitle: 'Estructura, procesos y gobernanza de talento',
      description: 'Diseñamos estructuras ágiles, matrices RACI y descriptores de cargo que eliminan duplicidades y clarifican la toma de decisiones para un crecimiento ordenado.',
      icon: <Target className="w-6 h-6 text-[#9c6bb0]" />
    },
    {
      title: 'Resultados',
      subtitle: 'Productividad, rentabilidad y continuidad operativa',
      description: 'Conectamos la gestión del talento directamente con el P&L del negocio, reduciendo costos por rotación no deseada y blindando la operación frente a riesgos.',
      icon: <Briefcase className="w-6 h-6 text-[#9c6bb0]" />
    }
  ]

  const networkSpecialists = [
    'Psicólogos Organizacionales',
    'Abogados Laborales',
    'Consultores en Compensaciones',
    'Coaches Ejecutivos'
  ]

  return (
    <div className="bg-white min-h-screen text-[#161c2d] pt-6 pb-20">
      
      {/* Top Navigation Bar / Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#9c6bb0] transition-colors py-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      {/* Main Header / Hero */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-24">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4">
            QUIÉNES SOMOS · MUSA CONSULTORA
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#161c2d] tracking-tight leading-[1.15] mb-6">
            Más de 20 años impulsando el talento
          </h1>
          <p className="text-lg sm:text-xl text-[#596179] font-light leading-relaxed">
            Conectar personas, liderazgo y estrategia, para construir organizaciones más sólidas, eficientes y sostenibles.
          </p>
        </div>

        {/* Mission Highlight Box */}
        <div className="mt-10 p-8 sm:p-10 rounded-3xl bg-[#fbf5fc] border border-[#ebd2f4] relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#9c6bb0] block mb-2">
              NUESTRO PROPÓSITO
            </span>
            <blockquote className="text-xl sm:text-2xl font-medium text-[#161c2d] italic leading-relaxed">
              “Conectar personas, liderazgo y estrategia, para construir organizaciones más sólidas, eficientes y sostenibles.”
            </blockquote>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
            <Award className="w-64 h-64 text-[#9c6bb0]" />
          </div>
        </div>
      </section>

      {/* History & Founder Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photos Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-100 max-w-md mx-auto lg:max-w-none">
              <img
                src="/IMG_7153.jpg"
                alt="Noemi Sanagua Soto - Fundadora de MUSA"
                className="w-full h-auto aspect-[3/4] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-purple-200">
                  Fundadora & Consultora Principal
                </span>
                <h3 className="text-2xl font-bold">Noemi Sanagua Soto</h3>
                <p className="text-sm text-slate-200 mt-1">Psicóloga Organizacional</p>
              </div>
            </div>

            {/* Overlapping floating card */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-full bg-[#f4eef7] text-[#9c6bb0] flex items-center justify-center flex-shrink-0 font-bold text-lg">
                20+
              </div>
              <div>
                <p className="text-xs font-semibold text-[#64748b] uppercase tracking-wider">Trayectoria</p>
                <p className="text-sm font-bold text-[#161c2d]">Liderando áreas de RR.HH. de alta complejidad</p>
              </div>
            </div>
          </div>

          {/* History Details */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase">
              HISTORIA Y TRAYECTORIA
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161c2d] tracking-tight leading-tight">
              Experiencia real en empresas nacionales y multinacionales
            </h2>
            <p className="text-base sm:text-[17px] text-[#555e75] font-light leading-relaxed">
              MUSA fue fundada en 2022 por <strong className="font-semibold text-[#161c2d]">Noemi Sanagua Soto</strong>, Psicóloga con más de 20 años de experiencia liderando áreas de Recursos Humanos en empresas nacionales y multinacionales de alta complejidad operacional.
            </p>
            <p className="text-base sm:text-[17px] text-[#555e75] font-light leading-relaxed">
              A lo largo de su carrera ha diseñado e implementado estrategias de gestión de personas, desarrollo de líderes, relaciones laborales y reestructuraciones operativas en sectores clave de la economía:
            </p>

            {/* Sectors Pills */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {sectors.map((sector, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-[#faf6fc] text-[#704285] border border-[#ecd9f2]"
                >
                  {sector}
                </span>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-sm text-[#64748b] italic border-l-2 border-[#9c6bb0] pl-4">
                "No creemos en fórmulas mágicas de pizarrón. La verdadera consultoría de personas ocurre en el terreno, entendiendo los dolores del negocio y construyendo confianza con las personas."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Enfoque Tridimensional */}
      <section className="bg-[#fafbfc] py-20 lg:py-24 border-y border-slate-100 mb-20 sm:mb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-4">
              NUESTRA FILOSOFÍA
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#161c2d] tracking-tight">
              El Enfoque Tridimensional®
            </h2>
            <p className="text-[#64748b] text-base mt-4 font-light">
              Toda intervención en MUSA actúa de manera coordinada sobre los tres ejes fundamentales que definen el éxito sostenible de una organización.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#ebd2f4] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fbf5fc] border border-[#ecd4f4] flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#161c2d] mb-2">{item.title}</h3>
                  <p className="text-sm font-semibold text-[#9c6bb0] mb-4">{item.subtitle}</p>
                  <p className="text-sm text-[#555e75] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#64748b] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#9c6bb0]" />
                  <span>Eje Estratégico {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red de Especialistas */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-20 sm:mb-28">
        <div className="bg-[#161a2d] rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#cca5d8]">
                COBERTURA NACIONAL Y CAPACIDAD TÉCNICA
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                Red de Especialistas en todo Chile
              </h2>
              <p className="text-slate-300 text-base sm:text-[17px] font-light leading-relaxed">
                MUSA opera como un <strong className="font-semibold text-white">núcleo estratégico liderado por Noemi Sanagua</strong>, articulando una red multidisciplinaria de especialistas de primer nivel para abordar cada desafío con la máxima profundidad técnica y cobertura en todo el territorio nacional.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
                {networkSpecialists.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <ShieldCheck className="w-5 h-5 text-[#cca5d8] flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-200">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-2xl text-center">
              <div className="w-16 h-16 rounded-full bg-[#9c6bb0]/30 border border-[#9c6bb0] flex items-center justify-center text-white mb-4">
                <Award className="w-8 h-8 text-[#cca5d8]" />
              </div>
              <p className="text-2xl font-bold text-white">Modelo Ágil & Escalable</p>
              <p className="text-xs text-slate-300 font-light mt-2 max-w-xs">
                Acceso a consultoría senior especializada sin sobrecostos fijos de grandes firmas tradicionales.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="border border-slate-200 rounded-3xl p-8 sm:p-12 text-center bg-white shadow-sm flex flex-col items-center">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#9c6bb0] uppercase mb-3">
            CONVERSEMOS
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#161c2d] mb-4">
            ¿Listo para llevar tu gestión de personas al siguiente nivel?
          </h2>
          <p className="text-slate-600 font-light max-w-xl mb-8">
            Conversemos sobre los desafíos y oportunidades de tu organización y evaluemos juntos el mejor camino.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2.5 bg-[#9c6bb0] hover:bg-[#89579d] text-white text-base font-medium px-8 py-4 rounded-xl shadow-lg shadow-[#9c6bb0]/25 transition-all duration-200"
            >
              <span>Agendar reunión de diagnóstico</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#64748b] hover:text-[#161c2d] px-6 py-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
