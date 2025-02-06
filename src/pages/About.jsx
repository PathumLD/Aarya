import React from 'react';
import { Award, Users, Hammer, Heart } from 'lucide-react';
// import Header from '../components/Header';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Rahul Sharma",
      role: "Lead Sculptor/Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "With over 20 years of experience in metal sculpting, Rahul leads our creative vision."
    },
    {
      name: "Maya Patel",
      role: "Master Metalworker",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
      description: "Specializing in intricate welding techniques and innovative metal forming."
    },
    {
      name: "David Chen",
      role: "Design Consultant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "Bridges artistic vision with practical engineering solutions."
    }
  ];

  const techniques = [
    {
      title: "TIG Welding",
      description: "Precision welding for delicate and intricate metal connections",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
    },
    {
      title: "Metal Forming",
      description: "Traditional and modern techniques for shaping metal",
      image: "https://images.unsplash.com/photo-1605117882341-5fa8bf27b6e7"
    },
    {
      title: "Surface Treatment",
      description: "Specialized finishing methods for durability and aesthetics",
      image: "https://images.unsplash.com/photo-1582645752074-b51579befcb7"
    }
  ];

  const awards = [
    "2023 Excellence in Metal Arts - International Sculpture Center",
    "2022 Public Art Achievement Award",
    "2021 Best in Contemporary Metal Design",
    "2020 Architectural Integration Award"
  ];

  return (
    <>
      {/* <Header /> */}
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184"
              alt="Workshop"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our Story in
                <span className="text-[#4682B4] ml-4">Metal</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Two decades of transforming metal into masterpieces, driven by passion and precision.
              </p>
            </div>
          </div>
        </section>

        {/* Company History & Mission */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#333333] mb-8">
                  Our Journey
                </h2>
                <div className="space-y-6 text-[#555555]">
                  <p>
                    Founded in 2003, Aarya Creations began as a small workshop with a big dream: to revolutionize metal artistry. What started as one artist's vision has grown into a collective of passionate metalworkers and designers.
                  </p>
                  <p>
                    Our mission is to elevate metal as an artistic medium, pushing the boundaries of what's possible while preserving traditional craftsmanship. We believe in creating pieces that not only capture attention but tell stories and inspire emotions.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184"
                  alt="Early Days"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
                  alt="Present Day"
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#333333] mb-4">
                Meet Our Team
              </h2>
              <p className="text-[#555555] text-lg">
                The talented individuals behind our masterpieces
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#333333] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#4682B4] mb-4">{member.role}</p>
                    <p className="text-[#555555]">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques Showcase */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-[#333333] mb-16 text-center">
              Our Techniques
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {techniques.map((technique, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <img
                    src={technique.image}
                    alt={technique.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {technique.title}
                      </h3>
                      <p className="text-white/80">
                        {technique.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards and Community */}
        <section className="py-24 bg-[#2C2C2C] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Awards */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Award className="w-8 h-8 text-[#4682B4]" />
                  <h2 className="text-3xl font-bold">Awards & Recognition</h2>
                </div>
                <ul className="space-y-4">
                  {awards.map((award, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-4 bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors duration-300"
                    >
                      {award}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Involvement */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Heart className="w-8 h-8 text-[#4682B4]" />
                  <h2 className="text-3xl font-bold">Community Impact</h2>
                </div>
                <div className="bg-white/10 p-6 rounded-xl">
                  <p className="text-white/80 mb-6">
                    We believe in giving back to the community through art education programs, public installations, and workshops for aspiring artists.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Art Education</h3>
                      <p className="text-sm text-white/70">
                        Regular workshops for local schools and community centers
                      </p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Public Art</h3>
                      <p className="text-sm text-white/70">
                        Contributing to community spaces and cultural development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;