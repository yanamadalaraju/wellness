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
import { Sun, Moon, Droplets, Leaf, ChevronRight, Quote, Clock, Heart, Activity, AlertCircle } from 'lucide-react';

import { FaPersonPraying } from 'react-icons/fa6';
import DinHeroSection from '../components/Dincharyacompo/Dincharyahero';

const DinacharyaPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="video-container aspect-video w-full rounded-xl overflow-hidden shadow-2xl">
  <iframe
    width="100%"
    height="100%"
    src="https://www.youtube.com/embed/uTN29kj7e-w?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0"
    title="Relaxing Nature Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="border-0"
  ></iframe>
</div>
      ),
      mobileContent: (
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          alt="Morning sunrise" 
          className="w-full h-full object-cover"
        />
      ),
      caption: "Start your day with the sun",
      icon: <Sun className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/20 to-amber-600/10"
    },
    {
      id: 2,
      desktopContent: (
        <div className="video-container aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/4YXYh39aW_s?si=K-NuWB0RAKj05CwS"
            title="Ayurvedic Self Massage"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="opacity-90"
          ></iframe>
        </div>
      ),
      mobileContent: (
        <img 
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          alt="Oil massage" 
          className="w-full h-full object-cover"
        />
      ),
      caption: "Abhyanga - Self massage with warm oil",
      icon: <Droplets className="w-8 h-8 text-amber-400" />,
      color: "from-amber-600/20 to-amber-700/10"
    },
    {
      id: 3,
      desktopContent: (
        <div className="video-container aspect-video w-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/MIr3RsUWrdo?autoplay=1&mute=1&loop=1&controls=0&playlist=MIr3RsUWrdo"
            title="Ayurvedic Yoga Practice"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="opacity-90"
          ></iframe>
        </div>
      ),
      mobileContent: (
        <img 
          src="https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
          alt="Yoga practice" 
          className="w-full h-full object-cover"
        />
      ),
      caption: "Yoga for dosha balance",
      icon: <FaPersonPraying className="w-7 h-7 text-amber-500" />,
      color: "from-amber-700/20 to-amber-800/10"
    }
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="dinacharya-page bg-gradient-to-b from-amber-50/30 to-white">
      {/* Hero Section with Custom Carousel */}
      {/* <section className="hero-section relative h-[500px] md:h-[700px] lg:h-[800px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent z-10"></div>
        <div className="relative w-full h-full">
          {carouselItems.map((item, index) => (
            <div 
              key={item.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {isMobile ? item.mobileContent : item.desktopContent}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.color}`}></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-8 md:p-12 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-full bg-slate-900/50 backdrop-blur-sm">
                    {item.icon}
                  </div>
                </div>
                <p className="text-2xl md:text-4xl lg:text-5xl font-serif text-white mb-2">{item.caption}</p>
                <p className="text-amber-300 font-light text-lg">Ayurvedic Daily Rituals</p>
              </div>
            </div>
          ))}
        </div>
        
    
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/50 hover:bg-white/80'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section> */}

    <DinHeroSection />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-center" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li className="inline-flex items-center">
              <Link to="/" className="text-slate-600 hover:text-slate-900 flex items-center transition-colors">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 mx-1 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
              </svg>
            </li>
            <li aria-current="page">
              <span className="text-slate-900 font-medium flex items-center">
                <Leaf className="w-4 h-4 mr-1 text-amber-600" />
                Dinacharya
              </span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Guest Essentials Section */}
<section className="py-20 px-4 md:px-8 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
        Guest <span className="text-amber-600">Essentials</span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Prepare for your holistic wellness journey at Nowal NatureCare
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Clothing Section */}
      <div className="bg-amber-50/50 rounded-xl p-8 border border-amber-100">
        <div className="flex items-center mb-6">
          <Activity className="w-8 h-8 text-amber-600 mr-4" />
          <h3 className="text-xl font-bold text-slate-800">Clothing Essentials</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Comfortable clothing for your entire stay</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Walking shoes and breathable tracksuits for therapies</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Appropriate yoga wear for daily practice</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Swimsuit for aquatic therapies</span>
          </li>
        </ul>
      </div>

      {/* Wellness Preparation Section */}
      <div className="bg-amber-50/50 rounded-xl p-8 border border-amber-100">
        <div className="flex items-center mb-6">
          <Heart className="w-8 h-8 text-amber-600 mr-4" />
          <h3 className="text-xl font-bold text-slate-800">Wellness Preparation</h3>
        </div>
        <ul className="space-y-4">
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Basic toiletries will be provided in your accommodation</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Bring instruments/costumes if joining cultural events</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Carry your most recent medical reports</span>
          </li>
          <li className="flex items-start">
            <ChevronRight className="w-5 h-5 text-amber-500 mt-1 mr-2 flex-shrink-0" />
            <span>Ensure medical information is complete for registration</span>
          </li>
        </ul>
      </div>
    </div>

    {/* Note Section */}
  <div className="mt-12 bg-amber-100/30 rounded-xl p-6 border border-amber-200">
  <div className="flex items-start">
    <div className="bg-amber-100 p-3 rounded-full mr-4">
      <AlertCircle className="w-6 h-6 text-amber-700" />
    </div>
    <div>
      <h4 className="text-lg font-medium text-slate-800 mb-2">Important Note</h4>
      <p className="text-slate-700">
        Your comfort and safety are our priority. Please ensure you bring all necessary items to fully participate in our wellness programs. 
        Incomplete medical information may affect your treatment plan.
      </p>
    </div>
  </div>
</div>

  </div>
</section>

      
    
      

     
    </div>
  );
};

export default DinacharyaPage;