import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const handleLoadMore = () => {
      navigate('/gallery')
      window.scrollTo(0, 0);
  }

  const filters = [
    'All',
    'Residential',
    'Public',
    'Corporate',
    'Architectural'
  ];

  const projects = [
    {
      title: "Phoenix Rising",
      category: "Public",
      description: "A 20-foot metal sculpture symbolizing renewal and growth",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
      tags: ["Public Art", "Large Scale", "Bronze"]
    },
    {
      title: "Corporate Harmony",
      category: "Corporate",
      description: "Abstract wall installation for tech headquarters",
      image: "https://images.unsplash.com/photo-1549490349-8643362247b5",
      tags: ["Corporate", "Modern", "Stainless Steel"]
    },
    {
      title: "Garden Whispers",
      category: "Residential",
      description: "Custom garden sculpture series",
      image: "https://images.unsplash.com/photo-1581092446327-9b52bd1570c2",
      tags: ["Residential", "Outdoor", "Copper"]
    },
    {
      title: "Urban Flow",
      category: "Architectural",
      description: "Integrated facade elements for modern building",
      image: "https://images.unsplash.com/photo-1576786672534-4c5677ee3a10",
      tags: ["Architectural", "Steel", "Large Scale"]
    },
    {
      title: "Momentum",
      category: "Public",
      description: "Dynamic sculpture for city plaza",
      image: "https://images.unsplash.com/photo-1563396983906-b3795482a59a",
      tags: ["Public Art", "Steel", "Kinetic"]
    },
    {
      title: "Geometric Harmony",
      category: "Corporate",
      description: "Lobby centerpiece installation",
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40",
      tags: ["Corporate", "Abstract", "Mixed Metal"]
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#333333] mb-6">
            Our
            <span className="text-[#4682B4] relative mx-3">
              Portfolio
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7c30-7 70-7 100 0" stroke="#4682B4" strokeWidth="2" fill="none" />
              </svg>
            </span>
            Gallery
          </h2>
          <p className="text-xl text-[#555555] max-w-2xl mx-auto">
            Explore our diverse collection of metal art installations and sculptures
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4] transition-colors"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? 'bg-[#4682B4] text-white'
                    : 'bg-gray-100 text-[#555555] hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* Project Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm px-3 py-1 rounded-full bg-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <button onClick={handleLoadMore} className="px-8 py-4 bg-[#4682B4] text-white rounded-xl hover:bg-[#ffc125] transition-colors duration-300 flex items-center gap-2 mx-auto">
            <span>Load More Projects</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;