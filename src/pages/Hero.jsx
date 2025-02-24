import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import IntroductionSection from '../components/Intro'
import ServicesSection from '../components/Services'
import TestimonialsSection from '../components/Testimonials'
import PortfolioSection from '../components/Portfolio'
import CTASection from '../components/CTA'

const Hero = () => {
  return (
    <>
        {/* <Header /> */}
        <HeroSection />
        <IntroductionSection />
        {/* <ServicesSection /> */}
        <TestimonialsSection />
        <PortfolioSection />
        <CTASection />
    </>
  )
}

export default Hero