import React, { useState } from 'react';

const ImagegridEvent = () => {
  // Curated wellness images with direct Unsplash links
  const images = [
    { url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Yoga Session" },
    { url: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", title: "Spa Treatment" },
    { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Meditation" },
    { url: "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Massage Therapy" },
    { url: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyb21hdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Aromatherapy" },
    { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Beauty Salon" },
    { url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Nowal Retreat" },
    { url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwc3ByaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", title: "Hot Spring" },
    { url: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1bmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Sauna" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#f5f6f0] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#3a3a3a]">Nowal Sanctuary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, idx) => (
            <div 
              key={idx} 
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-64 cursor-pointer"
              onClick={() => openModal(idx)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white text-lg font-medium">
                  {image.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Carousel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300"
          >
            &times;
          </button>
          
          <div className="relative w-full max-w-4xl">
            <button 
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="overflow-hidden rounded-lg">
              <img
                src={images[currentIndex].url}
                alt={images[currentIndex].title}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="bg-black/50 text-white p-4 text-center">
                <h3 className="text-xl font-medium">{images[currentIndex].title}</h3>
                <p className="text-gray-300">{currentIndex + 1} / {images.length}</p>
              </div>
            </div>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ImagegridEvent;