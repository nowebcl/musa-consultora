import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden bg-[#fafbfc]">
      {/* Mobile Background: hero2.mp4 video with fallback poster */}
      <div className="md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero2.png"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        >
          <source src="/hero2.mp4" type="video/mp4" />
        </video>
        {/* Soft gradient overlay on mobile to ensure heading and description are 100% readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 via-50% to-transparent" />
      </div>

      {/* Desktop / Tablet Background: hero.mp4 video with fallback poster */}
      <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero.png"
          className="absolute inset-0 w-full h-full object-cover object-[center_right] lg:object-right"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Soft horizontal gradient overlay to ensure absolute text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/50 lg:via-white/15" />
      </div>

      {/* Bottom Fade Out Gradient into the next section */}
      <div className="absolute bottom-0 inset-x-0 h-36 sm:h-48 lg:h-64 bg-gradient-to-t from-[#fcfbfe] via-[#fcfbfe]/70 to-transparent pointer-events-none z-[5]" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full py-8 sm:py-12 md:py-14 lg:py-16 flex flex-col justify-between min-h-[calc(100vh-100px)]">
        
        {/* Text Content Column */}
        <div className="max-w-xl lg:max-w-2xl my-auto text-left">
          {/* Overline / Subtitle - Restored exact original typography, single line on mobile */}
          <p className="text-[10px] xs:text-[11px] sm:text-[13px] md:text-sm font-normal tracking-[0.28em] text-[#7b819a] uppercase mb-4 sm:mb-5 whitespace-nowrap">
            C O N S U L T O R Í A &nbsp; O R G A N I Z A C I O N A L
          </p>

          {/* Main Heading */}
          <h1 className="text-[34px] sm:text-[46px] lg:text-[66px] font-normal tracking-[-0.025em] leading-[1.14] mb-5 sm:mb-6">
            <span className="block text-[#1d2331] font-medium">
              Personas que
            </span>
            <span className="block text-[#7075a1] font-medium">
              impulsan cambio
            </span>
          </h1>

          {/* Description Paragraph - Italic / Cursive and contained to the left on mobile */}
          <p className="italic font-light text-[#333b4e] md:text-[#596179] text-[15px] sm:text-base lg:text-[18px] leading-relaxed mb-8 max-w-[260px] xs:max-w-[295px] sm:max-w-md text-left mr-auto">
            Acompañamos organizaciones en su desarrollo, con soluciones simples y sostenibles.
          </p>

          {/* CTA Button */}
          <div>
            <a
              href="#servicios"
              className="inline-flex items-center gap-3 bg-[#6b719b] hover:bg-[#5b618a] text-white text-[15px] sm:text-base font-normal px-7 py-3.5 rounded-full shadow-md shadow-[#6b719b]/25 hover:shadow-lg hover:shadow-[#6b719b]/35 hover:translate-x-0.5 transition-all duration-200"
            >
              <span>Conoce nuestros servicios</span>
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            </a>
          </div>
        </div>

        {/* Bottom Tagline / Accent */}
        <div className="pt-10 sm:pt-14">
          <div className="w-8 h-[2px] bg-[#9ba1b7] mb-3" />
          <p className="text-[11px] sm:text-[12px] font-normal tracking-[0.2em] text-[#848aa2] uppercase leading-relaxed">
            Organizaciones más humanas
            <br />
            Para un futuro mejor
          </p>
        </div>

      </div>
    </section>
  )
}
