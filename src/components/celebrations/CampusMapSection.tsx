import React from "react";
import image from "../../assets/location.jpeg"

const CampusMapSection = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Campus Master Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the complete layout of our campus including buildings, green areas,
            water features, and infrastructure.
          </p>
        </div>

        {/* Image Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
          
          {/* Image */}
          <img
            src={image}
            alt="Campus Map"
            className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

          {/* Overlay Content */}
          <div className="absolute bottom-6 left-6 text-white">
            <h3 className="text-2xl font-semibold">Interactive Layout</h3>
            <p className="text-sm opacity-90">
              Buildings, pathways, and amenities mapped clearly
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampusMapSection;