import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      author: "Sarah Anderson",
      role: "Principal Architect, Anderson Design Co.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "The metal sculptures created for our corporate headquarters have become a talking point for every visitor. The attention to detail and the way they captured our vision is simply extraordinary.",
      rating: 5,
      project: "Corporate Installation"
    },
    {
      author: "Michael Chen",
      role: "Public Art Commissioner",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: "Working with the team on our city's central plaza installation was a seamless experience. They transformed our community space into an artistic landmark.",
      rating: 5,
      project: "Public Plaza Art"
    },
    {
      author: "Emily Roberts",
      role: "Interior Design Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: "Their ability to blend functionality with artistic excellence sets them apart. The custom pieces they created have elevated our client projects to new heights.",
      rating: 5,
      project: "Residential Collection"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#2C2C2C]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#4682B4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#D2691E]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6">
            Client
            <span className="text-[#4682B4] relative mx-3">
              Stories
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7c30-7 70-7 100 0" stroke="#4682B4" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from architects, art committees, and collectors about their experience
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-4 sm:px-8">
          {/* Large Quote Icon */}
          <div className="absolute top-0 left-0 text-[#4682B4]/10">
            <Quote className="w-24 h-24" />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Author Image */}
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].author}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Project Tag */}
                <div className="absolute -bottom-4 -right-4 bg-[#4682B4] text-white px-4 py-2 rounded-lg text-sm">
                  {testimonials[currentIndex].project}
                </div>
              </div>

              {/* Content */}
              <div className="md:col-span-2">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#B8860B] text-[#B8860B]" />
                  ))}
                </div>
                <p className="text-gray-100 text-lg mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <h4 className="text-[#4682B4] font-semibold text-xl">
                    {testimonials[currentIndex].author}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-[#4682B4]' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Video Testimonial CTA */}
        <div className="mt-20 text-center">
          <button className="group relative px-8 py-4 bg-white text-[#2C2C2C] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/20">
            <span className="relative z-10 flex items-center gap-2 text-lg font-medium">
              Watch Video Testimonials
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-[#4682B4]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;