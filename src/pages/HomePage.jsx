import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import ImpactAreas from '../components/ImpactAreas'
import ValueProposition from '../components/ValueProposition'
import Methodology from '../components/Methodology'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ImpactAreas />
      <ValueProposition />
      <Methodology />
      <Testimonials />
      <Contact />
    </>
  )
}
