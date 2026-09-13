import React, { useState } from 'react'

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const phoneNumber = '56976086896'
  const message = encodeURIComponent(
    'Hola, me gustaría agendar una reunión de diagnóstico con MUSA Consultora.'
  )
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 flex items-center gap-3">
      {/* WhatsApp Floating Button with MUSA Brand Colors */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#7c4d91] via-[#9c6bb0] to-[#b98fd5] text-white shadow-[0_4px_16px_rgba(156,107,176,0.4)] hover:shadow-[0_6px_24px_rgba(156,107,176,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30 focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        {/* WhatsApp Official SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white transition-transform duration-200"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.276-.1-.476-.15-.676.15-.2.3-.776.979-.951 1.179-.175.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.783-1.673-2.083-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.526.151-.176.201-.301.302-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.633-.927-2.235-.243-.587-.49-.508-.676-.517-.175-.01-.376-.01-.577-.01-.2 0-.527.075-.802.375-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.909 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.715.635.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.03-1.428.251-.702.251-1.303.176-1.428-.076-.125-.276-.2-.577-.35z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.05 22l4.98-1.352A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.167c-1.61 0-3.11-.476-4.38-1.297l-.314-.197-3.255.884.87-3.173-.207-.33A8.136 8.136 0 0 1 3.833 12c0-4.502 3.665-8.167 8.167-8.167 4.502 0 8.167 3.665 8.167 8.167 0 4.502-3.665 8.167-8.167 8.167z" />
        </svg>
      </a>

      {/* Desktop Tooltip */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md text-[#161c2d] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-md border border-[#ebd2f4] transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#9c6bb0]" />
        <span>¿Conversamos por WhatsApp?</span>
      </div>
    </div>
  )
}
