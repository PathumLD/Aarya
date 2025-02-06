import React from 'react';
import { Square, Building2, Landmark, Hammer, Factory } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Square className="w-8 h-8" />,
      title: "Custom Metal Sculptures",
      description: "Bespoke artworks tailored to your vision",
      image: "https://images.unsplash.com/photo-1535557597501-0fee0a500c57",
      categories: ["Residential", "Commercial", "Abstract"]
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Architectural Installations",
      description: "Transformative pieces for architectural spaces",
      image: "https://images.unsplash.com/photo-1576786672534-4c5677ee3a10",
      categories: ["Facades", "Interiors", "Public Spaces"]
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Public Art Commissions",
      description: "Iconic installations for community spaces",
      image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a",
      categories: ["Parks", "Plazas", "Museums"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Metal Restoration",
      description: "Revitalizing metal artworks to their former glory",
      image: "https://images.unsplash.com/photo-1472137553889-18c5a732b6ae",
      categories: ["Historical", "Contemporary", "Conservation"]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Design Sculptures",
      description: "Merging functionality with artistic expression",
      image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2",
      categories: ["Corporate", "Industrial", "Modern"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Rest of the component remains the same... */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#4682B4]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#D2691E]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-[#333333] mb-6">
            Our
            <span className="text-[#ffc125] relative mx-3">
              Services
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7c30-7 70-7 100 0" stroke="#ffc125" strokeWidth="2" fill="none" />
              </svg>
            </span>
            Portfolio
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Discover our comprehensive range of metal art and design services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <div className="text-[#4682B4]">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#333333] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#555555] mb-6">
                  {service.description}
                </p>
                
                {/* Categories */}
                <div className="flex flex-wrap gap-2">
                  {service.categories.map((category, catIndex) => (
                    <span
                      key={catIndex}
                      className="text-sm px-3 py-1 rounded-full bg-[#4682B4]/10 text-[#4682B4]"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#4682B4]/20 to-[#D2691E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block group">
            <button className="relative px-8 py-4 bg-[#ffc125] text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#4682B4]/20">
              <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
                Explore Full Service Details
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-[#4682B4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;