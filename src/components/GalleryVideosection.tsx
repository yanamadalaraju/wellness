import React from 'react';

const GalleryVideoSection = () => {
  return (
    <section className="bg-[#f5f6f0] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Experience the Wellness</h2>
        <p className="text-gray-600 mb-8">
          Discover our journey towards holistic healing and natural therapies through this short video.
        </p>

        <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ZpN6B62kZ5c"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GalleryVideoSection;
