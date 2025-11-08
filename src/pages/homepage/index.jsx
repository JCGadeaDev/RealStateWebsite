import React from 'react';
// Header y Footer se han movido a App.jsx

// Asumiendo que estos componentes están en:
// 'src/pages/homepage/components/HeroSection.jsx', etc.
import HeroSection from './components/HeroSection';
import MarketInsights from './components/MarketInsights';
import FeaturedProperties from './components/FeaturedProperties';
import ExpertServices from './components/ExpertServices';
import TestimonialsSection from './components/TestimonialSection';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  return (
    // Usamos un Fragmento de React ya que el <main> y el <div>
    // principal ya están en App.jsx
    <>
      <HeroSection />
      <MarketInsights />
      <FeaturedProperties />
      <ExpertServices />
      <TestimonialsSection />
      <CallToAction />
    </>
  );
};

export default Homepage;