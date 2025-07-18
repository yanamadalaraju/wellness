import React, { useState } from 'react'
import { X, ZoomIn, Filter } from 'lucide-react'

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState('all')

  const images = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatments",
      title: "Yoga Session",
      description: "Morning yoga practice in our serene pavilion"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatments",
      title: "Ayurvedic Treatment",
      description: "Traditional Ayurvedic healing session"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nature",
      title: "Mountain Views",
      description: "Breathtaking mountain landscape surrounding our retreat"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatments",
      title: "Meditation Session",
      description: "Peaceful meditation in our meditation caves"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "facilities",
      title: "Treatment Room",
      description: "Comfortable and serene treatment spaces"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nature",
      title: "Garden Sanctuary",
      description: "Our organic healing garden"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3822643/pexels-photo-3822643.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "facilities",
      title: "Relaxation Area",
      description: "Comfortable spaces for rest and reflection"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "facilities",
      title: "Dining Area",
      description: "Organic, healthy meals in beautiful settings"
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nature",
      title: "Sunrise Views",
      description: "Begin your day with spectacular sunrise views"
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "treatments",
      title: "Group Yoga",
      description: "Community yoga sessions with experienced instructors"
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "facilities",
      title: "Wellness Spa",
      description: "State-of-the-art spa facilities"
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "nature",
      title: "Forest Trails",
      description: "Peaceful walking trails through nature"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'nature', label: 'Nature' }
  ]

  const filteredImages = images.filter(image => 
    selectedFilter === 'all' || image.category === selectedFilter
  )

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Gallery
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Explore our serene retreat through stunning visuals
          </p>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
              Virtual Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Take a 360° virtual tour of our wellness retreat and experience the tranquil environment from anywhere in the world.
            </p>
          </div>
          
          <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video max-w-4xl mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-2">
                  360° Virtual Tour
                </h3>
                <p className="text-gray-600 mb-4">
                  Experience our retreat with an immersive virtual tour
                </p>
                <button className="btn-primary">
                  Start Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
              Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our collection of beautiful images showcasing the retreat experience, facilities, and natural surroundings.
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-sage-400 text-white'
                    : 'bg-white text-sage-600 hover:bg-sage-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
              Events & Workshops
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our regular events and workshops designed to deepen your wellness journey and connect with like-minded individuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Yoga Workshop"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-2">
                Monthly Yoga Workshop
              </h3>
              <p className="text-gray-600 mb-4">
                Deep dive into advanced yoga practices with our expert instructors.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sage-500 font-medium">Next: March 15</span>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
            
            <div className="card">
              <img
                src="https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Ayurveda Workshop"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-2">
                Ayurveda Cooking Class
              </h3>
              <p className="text-gray-600 mb-4">
                Learn to prepare healing meals using Ayurvedic principles.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sage-500 font-medium">Next: March 22</span>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
            
            <div className="card">
              <img
                src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Meditation Retreat"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-2">
                Weekend Meditation Retreat
              </h3>
              <p className="text-gray-600 mb-4">
                Immersive meditation experience for all levels.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sage-500 font-medium">Next: March 29</span>
                <button className="btn-primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Experience It Yourself
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pictures can only capture so much. Come experience the healing power of our retreat in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/booking" className="btn-secondary">
              Book Your Visit
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
              Plan Your Visit
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery