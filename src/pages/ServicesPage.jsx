import React from 'react';
import { ArrowRight, Shield, Paintbrush, Wrench, Users, Clock, Sparkles } from 'lucide-react';
import img31 from '../assets/img31.webp'


const ServicesPage = () => {
  const services = [
    {
      title: "Custom Metal Sculptures",
      description: "Unique pieces tailored to your vision, perfect for homes, offices, or public spaces.",
      icon: Paintbrush,
      features: [
        "Personalized design consultation",
        "Scale and material options",
        "Installation services included",
        "Lifetime maintenance support"
      ]
    },
    {
      title: "Architectural Installations",
      description: "Large-scale metal artworks integrated seamlessly into architectural spaces.",
      icon: Wrench,
      features: [
        "Structural engineering support",
        "Site-specific design",
        "Professional installation",
        "Weather-resistant finishes"
      ]
    },
    {
      title: "Public Art Commissions",
      description: "Transformative pieces that enhance community spaces and cultural landscapes.",
      icon: Users,
      features: [
        "Community engagement",
        "Permit assistance",
        "Documentation process",
        "Long-term maintenance plans"
      ]
    },
    {
      title: "Metal Restoration",
      description: "Expert restoration services for metal sculptures and architectural elements.",
      icon: Shield,
      features: [
        "Condition assessment",
        "Historical preservation",
        "Surface treatment",
        "Preventive maintenance"
      ]
    }
  ];

  const process = [
    {
      title: "Initial Consultation",
      description: "We begin with understanding your vision, requirements, and project scope."
    },
    {
      title: "Design Development",
      description: "Our team creates detailed designs and mockups for your approval."
    },
    {
      title: "Material Selection",
      description: "We help you choose the perfect materials for your project."
    },
    {
      title: "Creation Process",
      description: "Expert craftsmen bring the design to life with precision and care."
    },
    {
      title: "Installation",
      description: "Professional installation ensuring safety and aesthetic perfection."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src= {img31}
            alt="Services Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-[#4682B4] ml-4">Services</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Expert metal artistry services tailored to your unique vision
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#333333] mb-6">What We Offer</h2>
            <p className="text-lg text-[#555555] max-w-2xl mx-auto">
              Comprehensive metal art services combining traditional craftsmanship with modern innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300">
                <service.icon className="w-12 h-12 text-[#4682B4] mb-6" />
                <h3 className="text-2xl font-bold text-[#333333] mb-4">{service.title}</h3>
                <p className="text-[#555555] mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3 text-[#555555]">
                      <Sparkles className="w-5 h-5 text-[#4682B4]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-[#2C2C2C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A streamlined journey from concept to creation
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#4682B4]" />
            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 md:text-right">
                      <div className={`bg-white p-6 rounded-xl ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <h3 className="text-xl font-bold text-[#333333] mb-2">{step.title}</h3>
                        <p className="text-[#555555]">{step.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#4682B4] border-4 border-white">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[#333333] mb-6">
            Ready to Begin Your Project?
          </h2>
          <p className="text-xl text-[#555555] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life
          </p>
          <button className="bg-[#4682B4] hover:bg-[#ffc125] text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto group">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;