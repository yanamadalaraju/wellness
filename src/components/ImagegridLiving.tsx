// import React, { useState } from 'react';

// const ImagegridLiving = () => {
//   // Curated wellness images with direct Unsplash links
//   const images = [
//     { url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Yoga Session" },
//     { url: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", title: "Spa Treatment" },
//     { url: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lZGl0YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Meditation" },
//     { url: "https://images.unsplash.com/photo-1591348122449-02525d70379b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzc2FnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Massage Therapy" },
//     { url: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyb21hdGhlcmFweXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Aromatherapy" },
//     { url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Fsb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Beauty Salon" },
//     { url: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60", title: "Wellness Retreat" },
//     { url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwc3ByaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60", title: "Hot Spring" },
//     { url: "https://images.unsplash.com/photo-1593810450967-f9c42742e326?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F1bmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60", title: "Sauna" }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (index: number) => {
//     setCurrentIndex(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = 'auto'; // Re-enable scrolling
//   };

//   const goToPrev = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <section className="bg-[#f5f6f0] py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-serif text-center mb-12 text-[#3a3a3a]">Wellness Sanctuary</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {images.map((image, idx) => (
//             <div 
//               key={idx} 
//               className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-64 cursor-pointer"
//               onClick={() => openModal(idx)}
//             >
//               <img
//                 src={image.url}
//                 alt={image.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                 <span className="text-white text-lg font-medium">
//                   {image.title}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal Carousel */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
//           <button 
//             onClick={closeModal}
//             className="absolute top-4 right-4 text-white text-4xl z-50 hover:text-gray-300"
//           >
//             &times;
//           </button>
          
//           <div className="relative w-full max-w-4xl">
//             <button 
//               onClick={goToPrev}
//               className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
            
//             <div className="overflow-hidden rounded-lg">
//               <img
//                 src={images[currentIndex].url}
//                 alt={images[currentIndex].title}
//                 className="w-full max-h-[80vh] object-contain"
//               />
//               <div className="bg-black/50 text-white p-4 text-center">
//                 <h3 className="text-xl font-medium">{images[currentIndex].title}</h3>
//                 <p className="text-gray-300">{currentIndex + 1} / {images.length}</p>
//               </div>
//             </div>
            
//             <button 
//               onClick={goToNext}
//               className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full z-10"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default ImagegridLiving;

import React, { useState } from 'react';

// Import all images from assets
import yogaImage from '../assets/01.jpg';
import spaImage from '../assets/1ps-7.png';
import meditationImage from '../assets/2ps-7.png';
import massageImage from '../assets/303.jpg';
import aromaImage from '../assets/3D2-5.jpg';
import salonImage from '../assets/3d1-1 (1).jpg';
import retreatImage from '../assets/3d1-1.jpg';
import hotSpringImage from '../assets/3d1-1.jpg';
import saunaImage from '../assets/3d1-1 (1).jpg';

import newImage1 from '../assets/3d1-2.jpg';
import newImage2 from '../assets/3d10.jpg';
import newImage3 from '../assets/3d11.jpg';
import newImage4 from '../assets/Dormitory -2.jpg';
import newImage5 from '../assets/3d2 (15).jpg';

import newImage6 from '../assets/3d2-1.jpg';
import newImage7 from '../assets/3d2-6.jpg';
import newImage8 from '../assets/3d2.jpg';
import newImage9 from '../assets/3d22.jpg';
import newImage10 from '../assets/3d3-1.jpg';

import newImage11 from '../assets/3d3.jpg';
import newImage12 from '../assets/3d4 (1).jpg';
import newImage13 from '../assets/3d4-1.jpg';
import newImage14 from '../assets/3d4.jpg';
import newImage15 from '../assets/3d5 (1).jpg';

import newImage16 from '../assets/3d5.jpg';
import newImage17 from '../assets/3d6.jpg';
import newImage18 from '../assets/3d7.jpg';
import newImage19 from '../assets/3d8.jpg';
import newImage20 from '../assets/3d9.jpg';

import newImage21 from '../assets/COTTAGE 2 ELEVATION .jpg';
import newImage22 from '../assets/DORMITORY  (1).jpg';
import newImage23 from '../assets/Dormitory -3 (1).jpg';
import newImage24 from '../assets/Dormitory .jpg';
import newImage25 from '../assets/FINAL-02.jpg';

import newImage26 from '../assets/IMAGE-04.jpeg';
import newImage27 from '../assets/Md cabin.png';
import newImage28 from '../assets/Night View 1.jpg';
import newImage29 from '../assets/Night View.jpg';
import newImage30 from '../assets/Photo from Suneel Sharma (1).jpg';

import newImage31 from '../assets/Pool view 2 .jpeg';
import newImage32 from '../assets/Restaurant 1st floor .jpg';
import newImage33 from '../assets/Shirodhara room2 .jpg';
import newImage34 from '../assets/Shirodhara therapy.jpg';
import newImage35 from '../assets/c-3d1_2.jpg';

import newImage36 from '../assets/c-3d2_2.jpg';
import newImage37 from '../assets/dor-4.jpg';
import newImage38 from '../assets/dor-5.jpg';
import newImage39 from '../assets/dor-6.jpg';
import newImage40 from '../assets/dor-7.jpg';

import newImage41 from '../assets/male dining block view1.png';
import newImage42 from '../assets/male dining block view2.png';
import newImage43 from '../assets/male dining block view5.png';
import newImage44 from '../assets/md.png';
import newImage45 from '../assets/male dining block view8.png';

interface NowalImage {
  url: string;
  title: string;
}

const ImagegridLiving = () => {
  // Using imported local images
  const images: NowalImage[] = [
    { url: yogaImage, title: "Yoga Session" },
    { url: spaImage, title: "Spa Treatment" },
    { url: meditationImage, title: "Meditation" },
    { url: massageImage, title: "Massage Therapy" },
    { url: aromaImage, title: "Aromatherapy" },
    { url: salonImage, title: "Beauty Salon" },
    { url: retreatImage, title: "Nowal Retreat" },
    { url: hotSpringImage, title: "Hot Spring" },
    { url: saunaImage, title: "Sauna" },

     // New images added here
    { url: newImage1, title: "New Treatment 1" },
    { url: newImage2, title: "New Treatment 2" },
    { url: newImage3, title: "New Treatment 3" },
    { url: newImage4, title: "New Treatment 4" },
    { url: newImage5, title: "New Treatment 5" },

    { url: newImage6, title: "New Treatment 1" },
    { url: newImage7, title: "New Treatment 2" },
    { url: newImage8, title: "New Treatment 3" },
    { url: newImage9, title: "New Treatment 4" },
    { url: newImage10, title: "New Treatment 5" },

    { url: newImage11, title: "New Treatment 1" },
    { url: newImage12, title: "New Treatment 2" },
    { url: newImage13, title: "New Treatment 3" },
    { url: newImage14, title: "New Treatment 4" },
    { url: newImage15, title: "New Treatment 5" },

     { url: newImage16, title: "New Treatment 1" },
    { url: newImage17, title: "New Treatment 2" },
    { url: newImage18, title: "New Treatment 3" },
    { url: newImage19, title: "New Treatment 4" },
    { url: newImage20, title: "New Treatment 5" },

    { url: newImage21, title: "New Treatment 1" },
    { url: newImage22, title: "New Treatment 2" },
    { url: newImage23, title: "New Treatment 3" },
    { url: newImage24, title: "New Treatment 4" },
    { url: newImage25, title: "New Treatment 5" },

     { url: newImage26, title: "New Treatment 1" },
    { url: newImage27, title: "New Treatment 2" },
    { url: newImage28, title: "New Treatment 3" },
    { url: newImage29, title: "New Treatment 4" },
    { url: newImage30, title: "New Treatment 5" },

     { url: newImage31, title: "New Treatment 1" },
    { url: newImage32, title: "New Treatment 2" },
    { url: newImage33, title: "New Treatment 3" },
    { url: newImage34, title: "New Treatment 4" },
    { url: newImage35, title: "New Treatment 5" },

     { url: newImage36, title: "New Treatment 1" },
    { url: newImage37, title: "New Treatment 2" },
    { url: newImage38, title: "New Treatment 3" },
    { url: newImage39, title: "New Treatment 4" },
    { url: newImage40, title: "New Treatment 5" },

     { url: newImage41, title: "New Treatment 1" },
    { url: newImage42, title: "New Treatment 2" },
    { url: newImage43, title: "New Treatment 3" },
    { url: newImage44, title: "New Treatment 4" },
    { url: newImage45, title: "New Treatment 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
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
                loading="lazy" // Add lazy loading
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

      {/* Modal Carousel - remains the same */}
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

export default ImagegridLiving;