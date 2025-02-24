import React, { useState } from 'react';
import { Search, Filter, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import portfolioData from '../data/portfolio.js'; // Import the local JavaScript data file
import img32 from '../assets/img32.jpg'


const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use the imported portfolioData.projects array
  const projects = portfolioData.projects;

  const categories = [
    'All',
    'Residential',
    'Public',
    'Statue',
    'Architectural',
    'Custom'
  ];

  // Filter projects based on active filter and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle next image in the carousel
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  // Handle previous image in the carousel
  const previousImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  // Handle project click to open modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  return (
    <main >
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden mb-8">
          <div className="absolute inset-0">
            <img
              src= {img32}
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our 
                <span className="text-[#4682B4] ml-4">Portfolio</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
              Explore our diverse collection of metal art installations and sculptures.
              </p>
            </div>
          </div>
        </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4]"
          />
          <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeFilter === category
                    ? 'bg-[#4682B4] text-white'
                    : 'bg-gray-100 text-[#555555] hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length === 0 ? (
            <p>No projects found matching your criteria.</p>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => handleProjectClick(project)}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                  <div className="mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 z-10 p-2 bg-white/75 rounded-full hover:bg-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Carousel */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  previousImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/75 rounded-full hover:bg-white transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/75 rounded-full hover:bg-white transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="text-center my-4">
              {currentImageIndex + 1} / {selectedProject.images.length}
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex overflow-x-auto px-4 pb-4">
              {selectedProject.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden mr-2 ${
                    currentImageIndex === index ? 'ring-2 ring-[#4682B4]' : ''
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <p className="text-gray-600 mt-2">{selectedProject.description}</p>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Technical Details</h3>
                <p>Materials: {selectedProject.materials.join(', ')}</p>
                <p>Scale: {selectedProject.scale}</p>
                <p>Location: {selectedProject.location}</p>
                <p>Process: {selectedProject.process}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold">Project Story</h3>
                <p>Inspiration: {selectedProject.inspiration}</p>
                <blockquote className="italic text-gray-700">
                  "{selectedProject.testimonial.quote}"
                  <br />
                  - {selectedProject.testimonial.author}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PortfolioPage;