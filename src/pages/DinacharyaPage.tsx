// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const DinacharyaPage: React.FC = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize(); // Set initial value
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const carouselItems = [
//     {
//       id: 1,
//       desktopContent: (
//         <div className="video-container">
//           <iframe
//             width="100%"
//             height="500"
//             src="https://www.youtube.com/embed/7sDY4m8KNLc?autoplay=1&mute=1&loop=1&controls=0"
//             title="Ayurvedic Morning Routine"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ),
//       mobileContent: (
//         <img 
//           src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//           alt="Morning sunrise" 
//           className="w-full h-auto"
//         />
//       ),
//       caption: "Start your day with the sun"
//     },
//     {
//       id: 2,
//       desktopContent: (
//         <div className="video-container">
//           <iframe
//             width="100%"
//             height="500"
//             src="https://www.youtube.com/embed/inpok4MKVLM?autoplay=1&mute=1&loop=1&controls=0"
//             title="Ayurvedic Self Massage"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ),
//       mobileContent: (
//         <img 
//           src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//           alt="Oil massage" 
//           className="w-full h-auto"
//         />
//       ),
//       caption: "Abhyanga - Self massage with warm oil"
//     },
//     {
//       id: 3,
//       desktopContent: (
//         <div className="video-container">
//           <iframe
//             width="100%"
//             height="500"
//             src="https://www.youtube.com/embed/ZbtVVYBLCug?autoplay=1&mute=1&loop=1&controls=0"
//             title="Yoga for Morning Routine"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       ),
//       mobileContent: (
//         <img 
//           src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//           alt="Yoga practice" 
//           className="w-full h-auto"
//         />
//       ),
//       caption: "Surya Namaskar - Sun salutation"
//     }
//   ];

//   return (
//     <div className="dinacharya-page">
//       {/* Hero Section with Carousel */}
//       <section className="hero-section">
//         <Carousel 
//           autoPlay 
//           infiniteLoop 
//           showThumbs={false} 
//           showStatus={false}
//           interval={8000}
//         >
//           {carouselItems.map((item) => (
//             <div key={item.id} className="relative">
//               {isMobile ? item.mobileContent : item.desktopContent}
//               <div className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
//                 <p className="text-xl md:text-2xl font-serif">{item.caption}</p>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </section>

//       {/* Quote Content Block */}
//       <section className="quote-section py-16 px-4 md:px-8 bg-amber-50">
//         <div className="max-w-4xl mx-auto text-center">
//           <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-900 mb-6">
//             "Dinacharya is the foundation of health. By aligning our daily routine with nature's rhythms, 
//             we create harmony between body, mind, and consciousness."
//           </blockquote>
//           <p className="text-lg md:text-xl font-semibold text-amber-800">
//             - Ayurvedic Proverb
//           </p>
//           <div className="mt-8 max-w-2xl mx-auto text-amber-900">
//             <p className="mb-4">
//               Dinacharya refers to the Ayurvedic daily routine that's designed to maintain balance with 
//               nature's cycles. Following a proper dinacharya helps establish optimal health, discipline, 
//               and connection to nature's intelligence.
//             </p>
//             <p>
//               The ideal routine begins before sunrise and includes practices like tongue scraping, oil 
//               pulling, self-massage, yoga, and meditation - all timed according to the Ayurvedic clock.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DinacharyaPage;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DinacharyaPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % carouselItems.length);
    }, 8000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const carouselItems = [
    {
      id: 1,
      desktopContent: (
        <div className="video-container aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/7sDY4m8KNLc?autoplay=1&mute=1&loop=1&controls=0"
            title="Ayurvedic Morning Routine"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      mobileContent: (
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Morning sunrise" 
          className="w-full h-full object-cover"
        />
      ),
      caption: "Start your day with the sun"
    },
    {
      id: 2,
      desktopContent: (
        <div className="video-container aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/inpok4MKVLM?autoplay=1&mute=1&loop=1&controls=0"
            title="Ayurvedic Self Massage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ),
      mobileContent: (
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Oil massage" 
          className="w-full h-full object-cover"
        />
      ),
      caption: "Abhyanga - Self massage with warm oil"
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="dinacharya-page">
      {/* Hero Section with Custom Carousel */}
      <section className="hero-section relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {isMobile ? item.mobileContent : item.desktopContent}
              <div className="absolute bottom-10 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <p className="text-xl md:text-2xl font-serif">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

        {/* Breadcrumbs */}
                        <div className="container mx-auto px-4 py-4 flex justify-center">
                    <nav className="flex" aria-label="Breadcrumb">
                      <ol className="inline-flex items-center space-x-2 md:space-x-2">
                        <li className="inline-flex items-center">
                          <Link to="/" className="text-sage-600 hover:text-sage-800">
                            Home
                          </Link>
                        </li>
                        <li className="flex items-center">
                          <span className="mx text-sage-500">{'>'}</span>
                          <span className="mx text-sage-500">{'>'}</span>
                        </li>
                        <li>
                          <span className="text-sage-800 font-medium">Dincharya</span>
                        </li>
                      </ol>
                    </nav>
                  </div>

      {/* 3D Content Block with Heal Now Button */}
      <section className="content-block py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 transform transition-all hover:scale-[1.01] hover:shadow-3xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Transform Your Daily Routine
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience the power of Ayurvedic wisdom in just two lines of practice.
              <br />
              Begin your journey to holistic health today.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              Heal Now
            </button>
          </div>
        </div>
      </section>

      {/* Quote Content Block */}
      <section className="quote-section py-16 px-4 md:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-serif italic text-amber-900 mb-6">
            "Dinacharya is the foundation of health. By aligning our daily routine with nature's rhythms, 
            we create harmony between body, mind, and consciousness."
          </blockquote>
          <p className="text-lg md:text-xl font-semibold text-amber-800">
            - Ayurvedic Proverb
          </p>
        </div>
      </section>
    </div>
  );
};

export default DinacharyaPage;