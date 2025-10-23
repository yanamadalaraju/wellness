// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Leaf } from 'lucide-react';

// // Import local video assets
// import video1 from "../../assets/medi_large.mp4";
// import video2 from "../../assets/birdvideo.mp4";
// import video3 from "../../assets/Untitled video - Made.mp4";
// import video4 from "../../assets/meditationvideo.mp4";

// interface HeroVideo {
//   video: string;
//   title: string;
//   subtitle: string;
// }

// interface HeroSectionProps {
//   heroMessages?: string[];
//   customVideos?: HeroVideo[];
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ 
//   heroMessages = [
//     "Welcome to Nowal NatureCare – Where luxury meets natural healing",
//     "Breathe. Relax. Reconnect here at Nowal NatureCare Resort",
//     "Discover tranquility in every leaf, every breeze, every sunrise",
//     "Your journey to nowal begins at Nowal – where nature nurtures",
//     "Unplug from stress. Reconnect with nature. Rejuvenate your soul"
//   ],
//   customVideos
// }) => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const autoSlideInterval = useRef<NodeJS.Timeout>();

//   // Default videos if no custom videos provided
//   const defaultVideos: HeroVideo[] = [
//     {
//       video: video1,
//       title: heroMessages[0],
//       subtitle: "Science-backed ancient healing. Your journey to wholeness starts here."
//     },
//     {
//       video: video2,
//       title: heroMessages[1],
//       subtitle: "Connect with nature and rediscover your balance."
//     },
//     {
//       video: video3,
//       title: heroMessages[2],
//       subtitle: "Premium Nowal treatments in a serene environment."
//     },
//     {
//       video: video4,
//       title: heroMessages[3],
//       subtitle: "Transform your health through natural therapies."
//     }
//   ];

//   const heroVideos = customVideos || defaultVideos;

//   // Auto slide functionality
//   useEffect(() => {
//     autoSlideInterval.current = setInterval(() => {
//       setCurrentVideoIndex((prev) => 
//         prev === heroVideos.length - 1 ? 0 : prev + 1
//       );
//     }, 5000);

//     return () => {
//       if (autoSlideInterval.current) {
//         clearInterval(autoSlideInterval.current);
//       }
//     };
//   }, [heroVideos.length]);

//   // Scroll-aware video playback
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Section is in view - play video with sound
//           if (videoRef.current) {
//             videoRef.current.muted = false;
//             videoRef.current.currentTime = 0; // Reset to start
//             videoRef.current.play().catch(error => {
//               console.log("Autoplay prevented:", error);
//               // Fallback to muted autoplay
//               if (videoRef.current) {
//                 videoRef.current.muted = true;
//                 videoRef.current.play();
//               }
//             });
//           }
//         } else {
//           // Section is out of view - completely stop video
//           if (videoRef.current) {
//             videoRef.current.pause();
//             videoRef.current.currentTime = 0; // Reset to start
//             videoRef.current.muted = true; // Ensure no audio plays
//           }
//         }
//       },
//       { 
//         threshold: 0.5,
//         rootMargin: "0px 0px -100px 0px" // Adds a small buffer zone
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//       // Clean up video when component unmounts
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//         videoRef.current.muted = true;
//       }
//     };
//   }, []);

//   // Handle browser tab visibility changes
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden && videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.muted = true;
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, []);

//   // Pause auto-slide when user manually changes slide
//   const handleManualSlideChange = (index: number) => {
//     setCurrentVideoIndex(index);
//     if (autoSlideInterval.current) {
//       clearInterval(autoSlideInterval.current);
//       // Restart auto-slide after manual interaction
//       autoSlideInterval.current = setInterval(() => {
//         setCurrentVideoIndex((prev) => 
//           prev === heroVideos.length - 1 ? 0 : prev + 1
//         );
//       }, 5000);
//     }
//   };

//   return (
//     <section ref={sectionRef} className="relative h-[88vh] flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode='wait'>
//           <motion.video
//             key={currentVideoIndex}
//             ref={videoRef}
//             autoPlay
//             muted={false}
//             loop
//             playsInline
//             preload="auto"
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             onEnded={() => {
//               // Smooth transition to next video when current ends
//               setCurrentVideoIndex(prev => (prev + 1) % heroVideos.length);
//             }}
//           >
//             <source src={heroVideos[currentVideoIndex].video} type="video/mp4" />
//             Your browser does not support the video tag.
//           </motion.video>
//         </AnimatePresence>
//         {/* Add a subtle overlay for better text readability */}
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={`hero-content-${currentVideoIndex}`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {/* Leaf Icon */}
//             <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex justify-center"
//             >
//               <Leaf className="w-12 h-12 text-white/90 mb-4" />
//             </motion.div>

//             {/* Main Title */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
//               {heroVideos[currentVideoIndex].title}
//             </h1>

//             {/* Subtitle */}
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
//             >
//               {heroVideos[currentVideoIndex].subtitle}
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
//             >
//               <button className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
//                 Book Now
//               </button>
//               <button className="border-2 border-white hover:bg-white hover:text-[#3E5F44] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center">
//                 Learn More
//               </button>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Video Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//         {heroVideos.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => handleManualSlideChange(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               currentVideoIndex === index 
//                 ? 'bg-white w-8' 
//                 : 'bg-white/50 hover:bg-white/70'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-white rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;




// import React, { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Leaf, Loader2 } from 'lucide-react';
// import { BASE_URL } from '../../config';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// interface HeroSectionProps {
//   customVideos?: HeroVideo[];
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ customVideos }) => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const autoSlideInterval = useRef<NodeJS.Timeout>();

//   // Fetch hero content from backend
//   useEffect(() => {
//     const fetchHeroContent = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${BASE_URL}/api/hero-content`);
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch hero content');
//         }
        
//         const data = await response.json();
        
//         if (customVideos) {
//           setHeroVideos(customVideos);
//         } else {
//           setHeroVideos(data);
//         }
//       } catch (err) {
//         console.error('Error fetching hero content:', err);
//         setError('Failed to load hero content');
//         // Fallback to default content
//         setHeroVideos(getDefaultVideos());
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHeroContent();
//   }, [customVideos]);

//   const getDefaultVideos = (): HeroVideo[] => [
//     {
//       id: 1,
//       video_url: "/assets/medi_large.mp4",
//       title: "Welcome to Nowal NatureCare – Where luxury meets natural healing",
//       subtitle: "Science-backed ancient healing. Your journey to wholeness starts here.",
//       display_order: 0,
//       is_active: true
//     },
//     {
//       id: 2,
//       video_url: "/assets/birdvideo.mp4",
//       title: "Breathe. Relax. Reconnect here at Nowal NatureCare Resort",
//       subtitle: "Connect with nature and rediscover your balance.",
//       display_order: 1,
//       is_active: true
//     }
//   ];

//   // Auto slide functionality
//   useEffect(() => {
//     if (heroVideos.length > 1) {
//       autoSlideInterval.current = setInterval(() => {
//         setCurrentVideoIndex((prev) => 
//           prev === heroVideos.length - 1 ? 0 : prev + 1
//         );
//       }, 5000);
//     }

//     return () => {
//       if (autoSlideInterval.current) {
//         clearInterval(autoSlideInterval.current);
//       }
//     };
//   }, [heroVideos.length]);

//   // Scroll-aware video playback
//   useEffect(() => {
//     if (heroVideos.length === 0) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && videoRef.current) {
//           // Section is in view - play video with sound
//           videoRef.current.muted = false;
//           videoRef.current.currentTime = 0;
//           videoRef.current.play().catch(error => {
//             console.log("Autoplay prevented:", error);
//             // Fallback to muted autoplay
//             if (videoRef.current) {
//               videoRef.current.muted = true;
//               videoRef.current.play();
//             }
//           });
//         } else if (videoRef.current) {
//           // Section is out of view - completely stop video
//           videoRef.current.pause();
//           videoRef.current.currentTime = 0;
//           videoRef.current.muted = true;
//         }
//       },
//       { 
//         threshold: 0.5,
//         rootMargin: "0px 0px -100px 0px"
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//       if (videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.currentTime = 0;
//         videoRef.current.muted = true;
//       }
//     };
//   }, [heroVideos.length]);

//   // Handle browser tab visibility changes
//   useEffect(() => {
//     const handleVisibilityChange = () => {
//       if (document.hidden && videoRef.current) {
//         videoRef.current.pause();
//         videoRef.current.muted = true;
//       }
//     };

//     document.addEventListener('visibilitychange', handleVisibilityChange);
//     return () => {
//       document.removeEventListener('visibilitychange', handleVisibilityChange);
//     };
//   }, []);

//   const handleManualSlideChange = (index: number) => {
//     setCurrentVideoIndex(index);
//     if (autoSlideInterval.current) {
//       clearInterval(autoSlideInterval.current);
//       if (heroVideos.length > 1) {
//         autoSlideInterval.current = setInterval(() => {
//           setCurrentVideoIndex((prev) => 
//             prev === heroVideos.length - 1 ? 0 : prev + 1
//           );
//         }, 5000);
//       }
//     }
//   };

//   if (loading) {
//     return (
//       <section className="relative h-[88vh] flex items-center justify-center bg-gray-100">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-[#3E5F44] animate-spin mx-auto mb-4" />
//           <p className="text-gray-600">Loading hero content...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error || heroVideos.length === 0) {
//     return (
        
//       <section className="relative h-[88vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
//         <div className="text-center text-gray-800">
//           <Leaf className="w-16 h-16 text-[#3E5F44] mx-auto mb-4" />
//           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
//             Welcome to Nowal NatureCare
//           </h1>
//           <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
//             Where luxury meets natural healing. Your journey to wholeness starts here.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   const currentVideo = heroVideos[currentVideoIndex];

//   return (
//     <section ref={sectionRef} className="relative h-[88vh] flex items-center justify-center overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <AnimatePresence mode='wait'>
//           <motion.video
//             key={currentVideo.id}
//             ref={videoRef}
//             autoPlay
//             muted={false}
//             loop
//             playsInline
//             preload="auto"
//             className="w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1 }}
//             onEnded={() => {
//               if (heroVideos.length > 1) {
//                 setCurrentVideoIndex(prev => (prev + 1) % heroVideos.length);
//               }
//             }}
//           >
//             <source src={`${BASE_URL}${currentVideo.video_url}`} type="video/mp4" />
//             Your browser does not support the video tag.
//           </motion.video>
//         </AnimatePresence>
//         <div className="absolute inset-0 bg-black/30"></div>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//         <AnimatePresence mode='wait'>
//           <motion.div
//             key={`hero-content-${currentVideo.id}`}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -50 }}
//             transition={{ duration: 0.8 }}
//             className="space-y-6"
//           >
//             {/* Leaf Icon */}
//             {/* <motion.div
//               initial={{ scale: 0, rotate: -180 }}
//               animate={{ scale: 1, rotate: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex justify-center"
//             >
//               <Leaf className="w-12 h-12 text-white/90 mb-4" />
//             </motion.div> */}

//             {/* Main Title */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
//               {currentVideo.title}
//             </h1>

//             {/* Subtitle */}
//             <motion.p 
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.4 }}
//               className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
//             >
//               {currentVideo.subtitle}
//             </motion.p>

//             {/* CTA Buttons */}
//             {/* <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
//             >
//               <button className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
//                 Book Now
//               </button>
//               <button className="border-2 border-white hover:bg-white hover:text-[#3E5F44] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center">
//                 Learn More
//               </button>
//             </motion.div> */}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Video Navigation Dots */}
//       {heroVideos.length > 1 && (
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
//           {heroVideos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleManualSlideChange(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentVideoIndex === index 
//                   ? 'bg-white w-8' 
//                   : 'bg-white/50 hover:bg-white/70'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}

//       {/* Scroll Indicator */}
//       {/* <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1 }}
//         className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
//         >
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-white rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div> */}
//     </section>
//   );
// };

// export default HeroSection;




import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Loader2 } from 'lucide-react';
import { BASE_URL } from '../../config';

interface HeroVideo {
  id: number;
  video_url: string;
  title: string;
  subtitle: string;
  display_order: number;
  is_active: boolean;
}

interface HeroSectionProps {
  customVideos?: HeroVideo[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ customVideos }) => {
  const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoSlideInterval = useRef<NodeJS.Timeout>();

  // **CHANGED: Increased slide duration from 5s to 10s**
  const SLIDE_DURATION = 10000; // 10 seconds

  // Fetch hero content from backend
  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${BASE_URL}/api/hero-content`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch hero content');
        }
        
        const data = await response.json();
        
        if (customVideos) {
          setHeroVideos(customVideos);
        } else {
          setHeroVideos(data);
        }
      } catch (err) {
        console.error('Error fetching hero content:', err);
        setError('Failed to load hero content');
        // Fallback to default content
        setHeroVideos(getDefaultVideos());
      } finally {
        setLoading(false);
      }
    };

    fetchHeroContent();
  }, [customVideos]);

  const getDefaultVideos = (): HeroVideo[] => [
    {
      id: 1,
      video_url: "/assets/medi_large.mp4",
      title: "Welcome to Nowal NatureCare – Where luxury meets natural healing",
      subtitle: "Science-backed ancient healing. Your journey to wholeness starts here.",
      display_order: 0,
      is_active: true
    },
    {
      id: 2,
      video_url: "/assets/birdvideo.mp4",
      title: "Breathe. Relax. Reconnect here at Nowal NatureCare Resort",
      subtitle: "Connect with nature and rediscover your balance.",
      display_order: 1,
      is_active: true
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    if (heroVideos.length > 1) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentVideoIndex((prev) => 
          prev === heroVideos.length - 1 ? 0 : prev + 1
        );
      }, SLIDE_DURATION); // **CHANGED: Using the constant here**
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [heroVideos.length, SLIDE_DURATION]);

  // Scroll-aware video playback
  useEffect(() => {
    if (heroVideos.length === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          // Section is in view - play video with sound
          videoRef.current.muted = false;
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(error => {
            console.log("Autoplay prevented:", error);
            // Fallback to muted autoplay
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current.play();
            }
          });
        } else if (videoRef.current) {
          // Section is out of view - completely stop video
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
          videoRef.current.muted = true;
        }
      },
      { 
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        videoRef.current.muted = true;
      }
    };
  }, [heroVideos.length]);

  // Handle browser tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && videoRef.current) {
        videoRef.current.pause();
        videoRef.current.muted = true;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleManualSlideChange = (index: number) => {
    setCurrentVideoIndex(index);
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      if (heroVideos.length > 1) {
        autoSlideInterval.current = setInterval(() => {
          setCurrentVideoIndex((prev) => 
            prev === heroVideos.length - 1 ? 0 : prev + 1
          );
        }, SLIDE_DURATION); // **CHANGED: Using the constant here**
      }
    }
  };

  if (loading) {
    return (
      <section className="relative h-[88vh] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#3E5F44] animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading hero content...</p>
        </div>
      </section>
    );
  }

  if (error || heroVideos.length === 0) {
    return (
      <section className="relative h-[88vh] flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
        <div className="text-center text-gray-800">
          <Leaf className="w-16 h-16 text-[#3E5F44] mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Welcome to Nowal NatureCare
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Where luxury meets natural healing. Your journey to wholeness starts here.
          </p>
        </div>
      </section>
    );
  }

  const currentVideo = heroVideos[currentVideoIndex];

  return (
    <section ref={sectionRef} className="relative h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode='wait'>
          <motion.video
            key={currentVideo.id}
            ref={videoRef}
            autoPlay
            muted={false}
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            onEnded={() => {
              if (heroVideos.length > 1) {
                setCurrentVideoIndex(prev => (prev + 1) % heroVideos.length);
              }
            }}
          >
            <source src={`${BASE_URL}${currentVideo.video_url}`} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <AnimatePresence mode='wait'>
          <motion.div
            key={`hero-content-${currentVideo.id}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              {currentVideo.title}
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
            >
              {currentVideo.subtitle}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Video Navigation Dots */}
      {heroVideos.length > 1 && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => handleManualSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentVideoIndex === index 
                  ? 'bg-white w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;