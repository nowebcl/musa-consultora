import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ImpactAreas from '../components/ImpactAreas'
import ValueProposition from '../components/ValueProposition'
import Methodology from '../components/Methodology'
import LocalSEOSection from '../components/LocalSEOSection'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  useEffect(() => {
    document.title = 'MUSA | Consultora de Recursos Humanos en Puerto Montt · Reclutamiento y Selección de Personal RRHH'
  }, [])

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ImpactAreas />
      <ValueProposition />
      <Methodology />
      <LocalSEOSection />
      <Testimonials />
      <Contact />
    </>
  )
}

