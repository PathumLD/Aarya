import React from 'react';
import { Hammer, Ruler, Gem } from 'lucide-react';

const IntroductionSection = () => {
  const techniques = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Master Welding",
      description: "Precision welding techniques that blend strength with artistic finesse"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Custom Design",
      description: "Innovative approaches merging traditional craftsmanship with modern aesthetics"
    },
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Fine Finishing",
      description: "Meticulous attention to detail in every surface treatment and finish"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] leading-tight">
              Elevating Metal as an
              <span className="block text-[#4682B4]">Artistic Medium</span>
            </h2>
            <p className="text-[#555555] text-lg leading-relaxed">
              Our unique metalworking techniques transform raw materials into stunning pieces of art. Each creation is a testament to our commitment to excellence and innovation in metal sculpture.
            </p>
            <button className="mt-4 text-[#4682B4] hover:text-[#B8860B] font-medium flex items-center gap-2 group transition-colors duration-300">
              Discover Our Process
              <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1605117882341-5fa8bf27b6e7"
              alt="Metalworking Process"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
              alt="Metal Sculpture Detail"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover mt-8"
            />
            <img
              src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184"
              alt="Workshop Environment"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1582645752074-b51579befcb7"
              alt="Finished Artwork"
              className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 h-48 w-full object-cover mt-8"
            />
          </div>
        </div>

        {/* Techniques Showcase */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {techniques.map((technique, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#4682B4]/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-[#4682B4]">
                  {technique.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                {technique.title}
              </h3>
              <p className="text-[#555555]">
                {technique.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "20+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "150+", label: "Happy Clients" },
            { number: "15", label: "Awards Won" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-[#2C2C2C] rounded-lg transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-[#4682B4] mb-2">
                {stat.number}
              </div>
              <div className="text-white text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;