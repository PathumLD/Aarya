import React from 'react';
import { MapPin, Phone, Mail, Download, Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import img32 from '../assets/img32.jpg'


const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src= {img32}
            alt="Contact Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get in
              <span className="text-[#4682B4] ml-4">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Let's discuss your next metal art project
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#555555] mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#555555] mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">Service Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4]">
                    <option >Choose option</option>
                    <option>Public Art Commissions</option>
                    <option>Private Sculptures</option>
                    <option>Architectural Installations</option>
                    <option>Metal Restoration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#555555] mb-2">Message</label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-[#4682B4]"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-[#4682B4] hover:bg-[#ffc125] text-white px-8 py-4 rounded-xl transition-all duration-300 flex items-center gap-2 group"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12 bg-stone-50 p-10 rounded-xl ">
              <div>
                <h2 className="text-3xl font-bold text-[#333333] mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#4682B4] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#333333] mb-1">Workshop Location</h3>
                      <p className="text-[#555555]">123 Artisan Street, Creative District<br />Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#4682B4] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#333333] mb-1">Phone</h3>
                      <p className="text-[#555555]">+91 (22) 1234-5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#4682B4] mt-1" />
                    <div>
                      <h3 className="font-semibold text-[#333333] mb-1">Email</h3>
                      <p className="text-[#555555]">info@aaryacreations.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Download Portfolio</h3>
                <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                  <Download className="w-5 h-5 text-[#4682B4]" />
                  <span>Download Complete Portfolio (PDF)</span>
                </button>
              </div> */}

              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#4682B4] hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#4682B4] hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-[#4682B4] hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;