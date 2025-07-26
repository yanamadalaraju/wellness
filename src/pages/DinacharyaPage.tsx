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
import { Sun, Moon, Droplets, Leaf, ChevronRight, Quote, Clock, Heart, Activity } from 'lucide-react';

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

      {/* 3D Content Block with Heal Now Button */}
      <section className="content-block py-12 px-4 md:px-8">
        <div 
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 border border-slate-100 relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating decorative elements */}
          <div className={`absolute -top-20 -left-20 w-40 h-40 rounded-full bg-amber-100/30 blur-3xl transition-all duration-1000 ${isHovered ? 'opacity-70' : 'opacity-30'}`}></div>
          <div className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-amber-200/20 blur-3xl transition-all duration-1000 ${isHovered ? 'opacity-70' : 'opacity-30'}`}></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-6 font-serif">
              <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Transform Your Daily Routine
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the power of Ayurvedic wisdom in your daily practice. Begin your journey to holistic health with our time-tested rituals that align your body with nature's rhythms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative overflow-hidden group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  Begin Your Ritual
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              </button>
              <button className="relative overflow-hidden group border-2 border-amber-500 text-amber-600 hover:text-amber-700 hover:border-amber-600 font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="relative z-10 flex items-center">
                  Learn More
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Content Block */}
      <section className="quote-section py-20 px-4 md:px-8 bg-gradient-to-br from-amber-100/30 via-white to-amber-50/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Leaf className="absolute top-20 left-20 w-24 h-24 text-amber-200/30" />
          <Leaf className="absolute bottom-20 right-20 w-24 h-24 text-amber-200/30" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Decorative quote marks */}
          <Quote className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-16 h-16 text-amber-200/70" />
          
          <blockquote className="text-2xl md:text-3xl font-serif italic text-slate-700 mb-8 leading-relaxed relative z-10">
            "Dinacharya is the foundation of health. By aligning our daily routine with nature's rhythms, 
            we create harmony between body, mind, and consciousness."
          </blockquote>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-medium text-amber-700 flex items-center justify-center">
            <Moon className="w-5 h-5 mr-2" />
            Ayurvedic Proverb
            <Sun className="w-5 h-5 ml-2" />
          </p>
        </div>
      </section>

      {/* Daily Practices Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              The <span className="text-amber-600">Dinacharya</span> Way
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Daily practices to align your body with nature's cycles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Morning Rituals",
                description: "Wake with the sun, cleanse, and set intentions",
                icon: <Sun className="w-8 h-8 text-amber-500" />,
                bg: "bg-amber-100/50"
              },
              {
                title: "Self Massage",
                description: "Nourish your body with warm oil massage",
                icon: <Droplets className="w-8 h-8 text-amber-500" />,
                bg: "bg-amber-200/30"
              },
              {
                title: "Yoga Practice",
                description: "Align movement with your dosha type",
                 icon: <FaPersonPraying className="w-7 h-7 text-amber-500" />,
                bg: "bg-amber-100/40"
              },
              {
                title: "Evening Wind-down",
                description: "Prepare for restful sleep as sun sets",
                icon: <Moon className="w-8 h-8 text-amber-500" />,
                bg: "bg-amber-200/20"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`${item.bg} rounded-xl p-8 text-center border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 relative overflow-hidden group`}
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-amber-200/10 group-hover:bg-amber-300/10 transition-all duration-500"></div>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white flex items-center justify-center shadow-sm relative z-10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{item.title}</h3>
                <p className="text-slate-600 relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-amber-50 to-amber-100/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 font-serif">
              Benefits of <span className="text-amber-600">Daily Rituals</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              How Dinacharya transforms your health and wellbeing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Balanced Doshas",
                description: "Regular practice helps maintain equilibrium between Vata, Pitta, and Kapha",
                icon: <Heart className="w-8 h-8 text-amber-600" />
              },
              {
                title: "Improved Digestion",
                description: "Timed meals and rituals enhance Agni (digestive fire)",
                icon: <Leaf className="w-8 h-8 text-amber-600" />
              },
              {
                title: "Better Sleep",
                description: "Evening routines prepare body for deep, restorative sleep",
                icon: <Moon className="w-8 h-8 text-amber-600" />
              },
              {
                title: "Reduced Stress",
                description: "Rhythmic daily patterns calm the nervous system",
                icon: <Droplets className="w-8 h-8 text-amber-600" />
              },
              {
                title: "Increased Energy",
                description: "Morning practices boost vitality throughout the day",
                icon: <Sun className="w-8 h-8 text-amber-600" />
              },
              {
                title: "Mental Clarity",
                description: "Consistent routine enhances focus and awareness",
                icon: <Clock className="w-8 h-8 text-amber-600" />
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DinacharyaPage;