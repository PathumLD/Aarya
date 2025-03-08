import React from 'react';
import { ArrowRight } from 'lucide-react';
import BG from '../assets/BG.webp'

const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/80 z-10" /> {/* Dark overlay */}
        <img
          src={BG}
          alt="Metal Sculpture Workshop"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
              Transforming Metal into
              <span className="block text-[#ffc125] mt-2">Artistic Masterpieces</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 animate-fade-in-up-delay-1">
              Custom Metal Sculptures for Residential and Commercial Spaces
            </p>

            {/* Introduction Text */}
            <p className="text-lg text-white/80 mb-12 max-w-2xl opacity-0 animate-fade-in-up-delay-1">
              Experience unique metalworking techniques and expert craftsmanship in every piece
            </p>

            {/* CTA Button */}
            <button className="bg-[#4682B4] hover:bg-[#ffc125] text-white px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in-up-delay-2 flex items-center gap-2 group">
              <span>Commission Your Unique Metal Artwork</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;