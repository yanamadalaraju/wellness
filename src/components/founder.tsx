import React from 'react';
import founderImage from '../assets/RNNF LOGO.png'; // Replace with actual image path

const AboutFounder = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">
            About Our Founder
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Founder Image */}
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={founderImage} 
                alt="Shri Ram Niwas Nowal" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Founder Bio */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Shri Ram Nivas Nowal
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A distinguished industrialist and philanthropist, Shri Nowal's deep-rooted belief in nature's healing power led to the creation of Nowal NatureCare Resort. His successful entrepreneurial journey is matched only by his commitment to community welfare and social upliftment.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              His vision for natural healing emerged from personal experiences and recognizing the limitations of conventional medicine. Drawing from India's ancient traditions of naturopathy and Ayurveda, he envisioned a sanctuary for drug-free, holistic wellness.
            </p>
            <div className="bg-green-100 border-l-4 border-green-600 p-4 mb-4">
              <p className="text-green-800 italic">
                "Through regular free naturopathy camps for surrounding villages, Shri Nowal makes holistic healthcare accessible to all, blending his philanthropic spirit with industrial success to create this healing haven near Khatushyam Temple."
              </p>
            </div>
            {/* <button className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md transition duration-300">
              Read Full Biography
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;