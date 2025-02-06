import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 bg-[#2C2C2C] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4682B4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#D2691E]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4682B4]/5 rounded-3xl p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Transform Your Space with 
                <span className="text-[#ffc125] block mt-2">
                  Metal Artistry?
                </span>
              </h2>
              <p className="text-lg text-white/80">
                Let's collaborate to bring your vision to life. Our team of expert metal artisans is ready to create something extraordinary for your space.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#4682B4] hover:bg-[#ffc125] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white/20 hover:border-[#ffc125] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105">
                  View Portfolio
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "20+", label: "Years of Excellence" },
                { number: "500+", label: "Projects Completed" },
                { number: "100%", label: "Client Satisfaction" },
                { number: "15", label: "Design Awards" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center transform hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold text-[#ffc125] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10">
            {[
              {
                title: "Custom Design Process",
                description: "Collaborative approach to bring your vision to reality"
              },
              {
                title: "Expert Craftsmanship",
                description: "Skilled artisans with decades of experience"
              },
              {
                title: "Timely Delivery",
                description: "Professional project management and execution"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;