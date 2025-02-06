import React, { useState } from 'react';
import { Upload, Plus, X, Loader2 } from 'lucide-react';
import { collection, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase/Firebase';

const AddProjectPage = () => {
  const [loading, setLoading] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Residential',
    materials: '',
    scale: '',
    location: '',
    process: '',
    inspiration: '',
    tags: '',
    testimonial: {
      quote: '',
      author: ''
    }
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(prev => [...prev, ...files]);
    
    // Create preview URLs
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrls(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload images to Firebase Storage
      const storage = getStorage();
      const imageUrls = [];

      for (const file of imageFiles) {
        const storageRef = ref(storage, `projects/${Date.now()}-${file.name}`);
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);
        imageUrls.push(url);
      }

      // Prepare project data
      const projectData = {
        ...formData,
        materials: formData.materials.split(',').map(m => m.trim()),
        tags: formData.tags.split(',').map(t => t.trim()),
        images: imageUrls,
        createdAt: new Date().toISOString()
      };

      // Add to Firestore
      await addDoc(collection(db, 'projects'), projectData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        category: 'Residential',
        materials: '',
        scale: '',
        location: '',
        process: '',
        inspiration: '',
        tags: '',
        testimonial: {
          quote: '',
          author: ''
        }
      });
      setImageFiles([]);
      setPreviewUrls([]);
      
      alert('Project added successfully!');
    } catch (error) {
      console.error('Error adding project:', error);
      alert('Error adding project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Add New Project</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({...prev, title: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({...prev, description: e.target.value}))}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({...prev, category: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Residential</option>
                  <option>Public</option>
                  <option>Corporate</option>
                  <option>Architectural</option>
                  <option>Custom</option>
                </select>
              </div>
            </div>

            {/* Technical Details */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Materials (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.materials}
                  onChange={(e) => setFormData(prev => ({...prev, materials: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Steel, Copper, Bronze"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Scale
                </label>
                <input
                  type="text"
                  value={formData.scale}
                  onChange={(e) => setFormData(prev => ({...prev, scale: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="8ft x 6ft x 4ft"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({...prev, location: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Process
                </label>
                <textarea
                  value={formData.process}
                  onChange={(e) => setFormData(prev => ({...prev, process: e.target.value}))}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Inspiration
                </label>
                <textarea
                  value={formData.inspiration}
                  onChange={(e) => setFormData(prev => ({...prev, inspiration: e.target.value}))}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData(prev => ({...prev, tags: e.target.value}))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="modern, abstract, outdoor"
                  required
                />
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Testimonial</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quote
                </label>
                <textarea
                  value={formData.testimonial.quote}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    testimonial: {...prev.testimonial, quote: e.target.value}
                  }))}
                  rows="2"
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.testimonial.author}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    testimonial: {...prev.testimonial, author: e.target.value}
                  }))}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Project Images
              </label>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={url}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                
                <label className="relative flex items-center justify-center w-full h-24 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <Plus className="w-8 h-8 text-gray-400" />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Adding Project...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Add Project
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddProjectPage;