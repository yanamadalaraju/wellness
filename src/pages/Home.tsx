// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Play, Star, Award, Users, Heart, Mountain, Waves } from 'lucide-react'
// import { Leaf, FlaskConical, CircleDashed, Dumbbell, Sparkles } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
// import { FaQuoteLeft, FaQuoteRight, FaUser } from 'react-icons/fa';

// import {
//   Activity,
//   Brain,
 
//   Salad,
//   ShieldCheck,
//   Syringe,
//   Thermometer,
//   Sprout,
//   HeartPulse,
//   AlertTriangle,
//   Apple,
//   BadgePlus
// } from "lucide-react";

// import { motion } from 'framer-motion'
// import './Home.css';
// import { FaArrowRight } from 'react-icons/fa6';

// const Home: React.FC = () => {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0)


// const blogPosts = [
//   {
//     title: 'Pulmonary Fibrosis Treatment: Taking Control of Your Journey',
//     desc: 'Facing pulmonary fibrosis can feel overwhelming, but never forget – you are not alone, and hope remains...',
//     image: 'https://www.nimba.in/wp-content/uploads/2025/07/Pulmonary-Fibrosis-Treatment-Taking-Control-of-Your-Journey.jpg',
//   },
//   {
//     title: 'Ayurveda for Diabetes: A Complete Approach to Balanced Blood Sugar',
//     desc: 'In a world filled with fast food, a sedentary lifestyle, and stress, diabetes has emerged as a common...',
//     image: 'https://www.nimba.in/wp-content/uploads/2025/07/Ayurveda-for-Diabetes-A-Complete-Approach-to-Balanced-Blood-Sugar.jpg',
//   },
//   {
//     title: 'Manage Cervical Spondylitis with Ayurvedic Treatment',
//     desc: 'Cervical spondylitis, or cervical osteoarthritis, is a degenerative disease primarily affecting...',
//     image: 'https://www.nimba.in/wp-content/uploads/2025/06/Nimba-Blogs.jpg',
//   },
// ];

// const galleryItems = [
//   { title: 'nimba', image: 'https://www.nimba.in/wp-content/uploads/2020/10/Nowal-Main-Image-min.jpg' },
//   { title: 'Amenities', image: 'https://www.nimba.in/wp-content/uploads/2020/10/Swimming-Pool.jpg' },
//   { title: 'Media & Events', image: 'https://www.nimba.in/wp-content/uploads/2020/10/TAFI-1.jpg' },
//   { title: 'Living Space', image: 'https://www.nimba.in/wp-content/uploads/2020/10/Deluxe-Room-1.jpg' },
// ];
// const testimonials = [
//   {
//     name: 'Vivek Oberoi',
//     role: 'Actor, Bollywood, India',
//     quote: `I was truly taken by surprise & my experience at nimba has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.`,
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png',
//   },
//   {
//     name: 'Raveena Taurani',
//     role: 'Nutritionist',
//     quote: `I appreciate their food plan which is not fasting focussed instead focuses on the right mix.`,
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/Raveena-Taurani-min.png',
//   },
//   {
//     name: 'Reyhna Malhotra',
//     role: 'Model & Actress',
//     quote: `I have had a good detox & inch loss which is always welcoming. Nice nimba retreat with holistic approach and goodness of Naturopathy, Ayurveda, Yoga, Hydrotherapy, Raga therapy and many international therapies.`,
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/Reyhna-Malhotra-min.png',
//   },
// ];

//   const diseases = [
//   { icon: Salad, title: "Detoxification" },
//   { icon: Syringe, title: "Diabetes" },
//   { icon: Brain, title: "Neurological Disorders" },
//   { icon: HeartPulse, title: "Heart Diseases" },
//   { icon: Apple, title: "Obesity" },
//   { icon: Activity, title: "Liver Diseases" },
//   { icon: Thermometer, title: "Hormonal Disorder" },
//   { icon: ShieldCheck, title: "Rheumatoid Arthritis" },
 
//   { icon: AlertTriangle, title: "Stress management" },
  
// ];
  
//   // Video carousel data
//   const heroVideos = [
//     {
//       video: "https://videos.pexels.com/video-files/17252788/17252788-hd_1920_1080_24fps.mp4",
     
//       title: "Rejuvenate Your Being. Naturally.",
//       subtitle: "Science-backed ancient healing. Your journey to wholeness starts here."
//     },
//     {
//       // video: "https://media.istockphoto.com/id/1994316862/video/old-man-meditating-on-yoga-mat-in-yard.mp4?s=mp4-640x640-is&k=20&c=79ZoUDn_S-mBE3_O8XbMnUwcWR4ZFG5MDp4pcmMlxHk=",
//       video: "https://media.istockphoto.com/id/127737092/video/blue-tit-perching-on-the-branch.mp4?s=mp4-640x640-is&k=20&c=q20fOs37zjOvrgkZvck_34-G2B930EA4_rUjvT57fo8=",
//       title: "Find Your Inner Peace",
//       subtitle: "Connect with nature and rediscover your balance."
//     },
//     {
//       video: "https://media.istockphoto.com/id/1994316862/video/old-man-meditating-on-yoga-mat-in-yard.mp4?s=mp4-640x640-is&k=20&c=79ZoUDn_S-mBE3_O8XbMnUwcWR4ZFG5MDp4pcmMlxHk=",
//       title: "Luxury Healing Experience",
//       subtitle: "Premium nimba treatments in a serene environment."
//     }
//   ]

//   // Auto-rotate videos every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => 
//         prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
//       )
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Video Carousel */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           {/* Video Background */}
//           <video
//             key={currentVideoIndex}
//             autoPlay
//             muted
//             loop
//             className="w-full h-full object-cover"
//           >
//             <source src={heroVideos[currentVideoIndex].video} type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-black/40"></div>
          
//           {/* Video Navigation Dots */}
//           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//             {heroVideos.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentVideoIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all ${currentVideoIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <motion.h1 
//             className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-shadow"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             key={`title-${currentVideoIndex}`}
//           >
//             {heroVideos[currentVideoIndex].title}
//           </motion.h1>
//           <motion.p 
//             className="text-xl md:text-2xl mb-8 text-shadow"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             key={`subtitle-${currentVideoIndex}`}
//           >
//             {heroVideos[currentVideoIndex].subtitle}
//           </motion.p>
//           <motion.div 
//             className="flex flex-col sm:flex-row gap-4 justify-center"
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <Link to="/booking" className="btn-primary text-lg px-8 py-4">
//               Start Your Healing Journey
//             </Link>
//             <button className="btn-outline text-lg px-8 py-4 flex items-center justify-center space-x-2">
//               <Play className="w-5 h-5" />
//               <span>Watch Our Story</span>
//             </button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Moving Strip - No background color */}
//       <div className="border-t border-b border-sage-200 py-3 overflow-hidden">
//         <div className="animate-marquee whitespace-nowrap">
//           <span className="text-lg font-medium mx-8 text-gray-700">20% off for 10 days & above</span>
//           <span className="text-lg font-medium mx-8 text-gray-700">10% off for 5 days & above</span>
//           <span className="text-lg font-medium mx-8 text-gray-700">Applied on June & July month bookings only</span>
//           <span className="text-lg font-medium mx-8 text-gray-700">20% off for 10 days & above</span>
//           <span className="text-lg font-medium mx-8 text-gray-700">10% off for 5 days & above</span>
//           <span className="text-lg font-medium mx-8 text-gray-700">Applied on June & July month bookings only</span>
//         </div>
//       </div>

    
//       {/* Accreditation Banner Section - Matching Logo Section Style */}
// <section className="bg-sage-50  px-4">
//   <div className="w-full bg-white shadow-md">
//     <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 p-8">
//       {/* NABH Accreditation Badge - remains same size */}
//       <div className="w-40 h-40 bg-sage-50 rounded-full shadow-sm flex items-center justify-center border border-sage-200 shrink-0">
//         <Award className="w-20 h-20 text-sage-600" />
//       </div>
      
//       {/* Content with top/bottom strips */}
//       <div className="max-w-md relative py-4">
//         {/* Top strip */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-sage-400"></div>
        
//         <h2 className="text-xl font-bold text-gray-800 mb-2 whitespace-nowrap">
//           Welcome to nimba Nature Cure & Holistic Healthcare Centre
//         </h2>
//         <p className="text-xl text-sage-700 font-medium whitespace-nowrap">
//           Gujarat's Premier NABH Accredited nimba Destination
//         </p>
        
//         {/* Bottom strip */}
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-sage-400"></div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* True Treatments Section */}
// <section className="bg-sage-50 py-16 px-4">
//   <div className="max-w-6xl mx-auto text-center">
//     <h2 className="text-4xl font-playfair text-gray-700 mb-4">
//       True Treatments for Chronic nimba
//     </h2>
//     <div className="flex justify-center items-center mb-6">
//       <div className="w-16 h-1 bg-sage-400 mr-2"></div>
//       <Leaf className="text-sage-600 w-6 h-6" />
//       <div className="w-16 h-1 bg-sage-400 ml-2"></div>
//     </div>
//     <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
//       Our therapeutic programs target root causes to promote deep, sustainable healing through personalized natural treatments.
//     </p>

//   <div className="overflow-x-auto">
//   <div className="grid grid-cols-5 gap-8 min-w-[1000px] text-sage-700 px-4 pb-4">
//     {/* Naturopathy */}
//     <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden min-h-[160px]">
//       <Leaf className="w-12 h-12 mb-3 text-green-600" />
//       <h3 className="font-semibold text-lg mb-1">Naturopathy</h3>
//       <p className="text-center text-sm text-gray-600">Natural healing at its best</p>
//     </div>

//     {/* Ayurveda */}
//     <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden min-h-[160px]">
//       <FlaskConical className="w-12 h-12 mb-3 text-yellow-600" />
//       <h3 className="font-semibold text-lg mb-1">Ayurveda</h3>
//       <p className="text-center text-sm text-gray-600">Ancient Indian medicine</p>
//     </div>

//     {/* Yoga & Meditation */}
//     <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden min-h-[160px]">
//       <CircleDashed className="w-12 h-12 mb-3 text-purple-600" />
//       <h3 className="font-semibold text-lg mb-1">Yoga & Meditation</h3>
//       <p className="text-center text-sm text-gray-600">Balance mind & body</p>
//     </div>

//     {/* Physiotherapy */}
//     <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden min-h-[160px]">
//       <Dumbbell className="w-12 h-12 mb-3 text-blue-600" />
//       <h3 className="font-semibold text-lg mb-1">Physiotherapy</h3>
//       <p className="text-center text-sm text-gray-600">Movement & recovery</p>
//     </div>

//     {/* Holistic Therapies */}
//     <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg overflow-hidden min-h-[160px]">
//       <Sparkles className="w-12 h-12 mb-3 text-pink-600" />
//       <h3 className="font-semibold text-lg mb-1">Holistic Therapies</h3>
//       <p className="text-center text-sm text-gray-600">Whole-body nimba</p>
//     </div>
//   </div>
// </div>

//   </div>
// </section>


// <section
//       className="relative py-20 px-4 text-white"
//       style={{
//         backgroundImage: `url('https://media.istockphoto.com/id/1087510858/photo/curry-leaves.jpg?s=612x612&w=0&k=20&c=ix42iQk5-_Ia4O1BHVWYiCGBEHKQ5jTdmMGBDNB3YyI=')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-green-950/80 backdrop-blur-sm"></div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         <h2 className="text-4xl font-bold text-center mb-4">Diseases Treated</h2>
//         <p className="text-center text-gray-300 max-w-3xl mx-auto mb-12">
//           At nimba, we adopt a holistic approach to treating various ailments by detoxifying the body to promote health and well-being.
//         </p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {diseases.map((item, idx) => (
//             <div
//               key={idx}
//               className="flex items-center gap-4 bg-white/10 border border-white/20 px-5 py-4 rounded-lg shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-green-300/30 hover:scale-[1.03]"
//             >
//               <div className="bg-white p-2 rounded shadow-sm">
//                 <item.icon className="w-7 h-7 text-green-800" />
//               </div>
//               <h3 className="font-semibold text-white">{item.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//     <section className="bg-[#f8faf5] py-16 px-4">
//   <div className="max-w-7xl mx-auto text-center">
//     <h2 className="text-4xl font-serif text-gray-800 font-semibold mb-2">Popular Therapies</h2>
//     <div className="flex justify-center items-center mb-6">
//       <div className="w-16 h-1 bg-sage-400 mr-2"></div>
//      <HeartPulse className="text-sage-600 w-6 h-6" />

//       <div className="w-16 h-1 bg-sage-400 ml-2"></div>
//     </div>

//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//       {/* Card 1 */}
//       <div className="flex flex-col items-center">
//         <img src="https://www.nimba.in/wp-content/uploads/2022/01/Asset-6-min.png" alt="Panchakarma" className="rounded-lg w-full object-cover h-48" />
//         <h3 className="text-lg font-medium mt-4">Panchakarma Therapy</h3>
//         <p className="text-gray-600 text-sm mt-1">Minimum 7 days</p>
//         <button className="mt-4 bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition">
//           Book Now
//         </button>
//       </div>

//       {/* Card 2 */}
//       <div className="flex flex-col items-center">
//         <img src="https://www.nimba.in/wp-content/uploads/2022/01/Asset-5.png" alt="Mud Therapy" className="rounded-lg w-full object-cover h-48" />
//         <h3 className="text-lg font-medium mt-4">Mud Therapy</h3>
//         <p className="text-gray-600 text-sm mt-1">Minimum 5 days</p>
//         <button className="mt-4 bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition">
//           Book Now
//         </button>
//       </div>

//       {/* Card 3 */}
//       <div className="flex flex-col items-center">
//         <img src="https://www.nimba.in/wp-content/uploads/2022/01/Asset-4-1.png" alt="Hydro Therapy" className="rounded-lg w-full object-cover h-48" />
//         <h3 className="text-lg font-medium mt-4">Hydro Therapy</h3>
//         <p className="text-gray-600 text-sm mt-1">Minimum 3 – 7 days</p>
//         <button className="mt-4 bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition">
//           Book Now
//         </button>
//       </div>

//       {/* Card 4 */}
//       <div className="flex flex-col items-center">
//         <img src="https://www.nimba.in/wp-content/uploads/2023/11/IMG_9162-1.png" alt="Massage Therapy" className="rounded-lg w-full object-cover h-48" />
//         <h3 className="text-lg font-medium mt-4">Massage Therapy</h3>
//         <p className="text-gray-600 text-sm mt-1">Minimum 5 days</p>
//         <button className="mt-4 bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800 transition">
//           Book Now
//         </button>
//       </div>
//     </div>
//   </div>
// </section>


// <section
//       className="relative bg-green-900 text-white py-20 px-4 bg-cover bg-center"
//       style={{
//         backgroundImage: "url('https://media.istockphoto.com/id/1292399474/photo/woman-meditating-at-park.jpg?s=612x612&w=0&k=20&c=iWXLpMMYCWq59Z11E6qKqHBeTgzXedktGRmsObGvi7g=')", // 🔁 Replace with your image path
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-green-950 bg-opacity-80 z-0"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold">The healed speaks</h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-10 px-4">
//           {testimonials.map((t, index) => (
//             <div key={index} className="text-center">
//               <img
//                 src={t.image}
//                 alt={t.name}
//                 className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-white"
//               />
//               <div className="text-lg mt-6 relative">
//                 <FaQuoteLeft className="inline mr-2 text-slate-300 text-xl" />
//                 <p className="inline leading-relaxed">{t.quote}</p>
//                 <FaQuoteRight className="inline ml-2 text-slate-300 text-xl" />
//               </div>
//               <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-300">
//                 <FaUser />
//                 <span className="font-medium">{t.name} – {t.role}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>

//    <section className="bg-[#f9faf6] py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-4">
//   Gallery
// </h2>

// {/* Underline with Sprout */}
// <div className="flex justify-center items-center mb-12">
//   <div className="w-16 h-[2px] bg-sage-400 mr-3"></div>
//   <Sprout className="text-sage-600 w-6 h-6" />
//   <div className="w-16 h-[2px] bg-sage-400 ml-3"></div>
// </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//           {galleryItems.map((item, index) => (
//             <div key={index} className="text-center">
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-56 object-cover rounded shadow-md"
//               />

//               {/* Button */}
//               <button className="mt-4 bg-green-900 text-white px-6 py-2 rounded hover:bg-green-800 transition-all inline-flex items-center gap-2">
//                 {item.title} <FaArrowRight className="text-sm" />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     <section className="py-16 px-4 bg-white text-green-950 text-center">
//   <h2 className="text-3xl md:text-4xl font-semibold mb-2">Blog</h2>
//   <div className="flex justify-center mb-8">
//     <hr className="w-16 border-green-300 border-t-2" />
//     <span className="mx-2 text-green-700 text-xl">❃</span>
//     <hr className="w-16 border-green-300 border-t-2" />
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
//     {blogPosts.map((post, index) => (
//       <div 
//         key={index} 
//         className="text-left group relative overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg"
//       >
//         {/* Image with zoom effect */}
//         <div className="overflow-hidden rounded-t-lg">
//           <img 
//             src={post.image} 
//             alt={post.title} 
//             className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
//           />
//         </div>
        
//         {/* Content with fade-in effect */}
//         <div className="p-6 transition-all duration-300 group-hover:bg-green-50/50">
//           <h3 className="text-lg font-semibold mb-2 text-green-950 line-clamp-2 group-hover:text-green-800 transition-colors">
//             {post.title}
//           </h3>
//           <p className="text-sm text-gray-600 line-clamp-3 mb-2 group-hover:text-gray-700 transition-colors">
//             {post.desc}
//           </p>
//           <span className="text-xs text-gray-400 hover:underline cursor-pointer inline-flex items-center transition-all">
//             Read More
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" 
//               fill="none" 
//               viewBox="0 0 24 24" 
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </span>
//         </div>
        
//         {/* Hover border effect */}
//         <div className="absolute inset-0 border-2 border-transparent group-hover:border-green-300 rounded-lg pointer-events-none transition-all duration-300"></div>
//       </div>
//     ))}
//   </div>

//   <div className="flex justify-center mt-8">
//     <button className="bg-[#435334] text-white font-semibold px-6 py-2 rounded hover:bg-[#9EB384] hover:text-[#435334] transition-all duration-300">
//       View All
//     </button>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Home


//---------------working-------------507-----//
// import React, { useState, useEffect,useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { Play, Star, Award, Users, Heart, Mountain, Waves } from 'lucide-react'
// import { Leaf, FlaskConical, CircleDashed, Dumbbell, Sparkles } from 'lucide-react';
// import { ArrowRight } from 'lucide-react';
// import { FaQuoteLeft, FaQuoteRight, FaUser } from 'react-icons/fa';
// import {
//   Activity,
//   Brain,
//   Salad,
//   ShieldCheck,
//   Syringe,
//   Thermometer,
//   Sprout,
//   HeartPulse,
//   AlertTriangle,
//   Apple,
//   BadgePlus
// } from "lucide-react";
// import { motion } from 'framer-motion'
// import './Home.css';
// import { FaArrowRight } from 'react-icons/fa6';
// import AlertPopup from './NimbaGallery';
// import image1 from "../assets/panchakarma.jpg";
// import image2 from "../assets/mudtherapy.jpg";
// import image3 from "../assets/hydrotherapy.jpg";
// import image4 from "../assets/massage.jpg";
// import image5 from "../assets/Nowal.jpg";
// import image6 from "../assets/303.jpg";
// import image7 from "../assets/3d2-1.jpg";
// import image8 from "../assets/Dormitory .jpg";


// const Home: React.FC = () => {
 
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isVideoPlayingWithSound, setIsVideoPlayingWithSound] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//    const handlePlayWithSound = () => {
//     setIsVideoPlayingWithSound(true);
//     if (videoRef.current) {
//       videoRef.current.muted = false;
//       videoRef.current.play();
//     }
//   };

//   const blogPosts = [
//     {
//       title: 'Pulmonary Fibrosis Treatment: Taking Control of Your Journey',
//       desc: 'Facing pulmonary fibrosis can feel overwhelming, but never forget – you are not alone, and hope remains...',
//       image: 'https://www.nimba.in/wp-content/uploads/2025/07/Pulmonary-Fibrosis-Treatment-Taking-Control-of-Your-Journey.jpg',
//     },
//     {
//       title: 'Ayurveda for Diabetes: A Complete Approach to Balanced Blood Sugar',
//       desc: 'In a world filled with fast food, a sedentary lifestyle, and stress, diabetes has emerged as a common...',
//       image: 'https://www.nimba.in/wp-content/uploads/2025/07/Ayurveda-for-Diabetes-A-Complete-Approach-to-Balanced-Blood-Sugar.jpg',
//     },
//     {
//       title: 'Manage Cervical Spondylitis with Ayurvedic Treatment',
//       desc: 'Cervical spondylitis, or cervical osteoarthritis, is a degenerative disease primarily affecting...',
//       image: 'https://www.nimba.in/wp-content/uploads/2025/06/Nimba-Blogs.jpg',
//     },
//   ];

//   const galleryItems = [
//     { title: 'Nowal', image: image5 },
//     { title: 'Amenities', image: image6 },
//     { title: 'Media & Events', image: image7 },
//     { title: 'Living Space', image: image8 },
//   ];

//   const testimonials = [
//     {
//       name: 'Vivek Oberoi',
//       role: 'Actor, Bollywood, India',
//       quote: `I was truly taken by surprise & my experience at nowal has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.`,
//       image: 'https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png',
//     },
//     {
//       name: 'Raveena Taurani',
//       role: 'Nutritionist',
//       quote: `I appreciate their food plan which is not fasting focussed instead focuses on the right mix.`,
//       image: 'https://www.nimba.in/wp-content/uploads/2020/07/Raveena-Taurani-min.png',
//     },
//     {
//       name: 'Reyhna Malhotra',
//       role: 'Model & Actress',
//       quote: `I have had a good detox & inch loss which is always welcoming. Nice nowal retreat with holistic approach and goodness of Naturopathy, Ayurveda, Yoga, Hydrotherapy, Raga therapy and many international therapies.`,
//       image: 'https://www.nimba.in/wp-content/uploads/2020/07/Reyhna-Malhotra-min.png',
//     },
//   ];

//   const diseases = [
//     { icon: Salad, title: "Detoxification" },
//     { icon: Syringe, title: "Diabetes" },
//     { icon: Brain, title: "Neurological Disorders" },
//     { icon: HeartPulse, title: "Heart Diseases" },
//     { icon: Apple, title: "Obesity" },
//     { icon: Activity, title: "Liver Diseases" },
//     { icon: Thermometer, title: "Hormonal Disorder" },
//     { icon: ShieldCheck, title: "Rheumatoid Arthritis" },
//     { icon: AlertTriangle, title: "Stress management" },
//   ];
  
//   const heroVideos = [
//     {
//       video: "https://videos.pexels.com/video-files/6629917/6629917-uhd_2732_1440_25fps.mp4",
//       title: "Rejuvenate Your Being. Naturally.",
//       subtitle: "Science-backed ancient healing. Your journey to wholeness starts here."
//     },
//     {
//       video: "https://media.istockphoto.com/id/127737092/video/blue-tit-perching-on-the-branch.mp4?s=mp4-640x640-is&k=20&c=q20fOs37zjOvrgkZvck_34-G2B930EA4_rUjvT57fo8=",
//       title: "Find Your Inner Peace",
//       subtitle: "Connect with nature and rediscover your balance."
//     },
//     {
//       video: "https://media.istockphoto.com/id/1994316862/video/old-man-meditating-on-yoga-mat-in-yard.mp4?s=mp4-640x640-is&k=20&c=79ZoUDn_S-mBE3_O8XbMnUwcWR4ZFG5MDp4pcmMlxHk=",
//       title: "Luxury Healing Experience",
//       subtitle: "Premium nowal treatments in a serene environment."
//     }
//   ]

//   // Auto-rotate videos every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentVideoIndex((prevIndex) => 
//         prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
//       )
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <div className="min-h-screen font-sans">
//        <AlertPopup />
//       {/* Hero Section with Video Carousel */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <video
//           key={currentVideoIndex}
//           ref={videoRef}
//           autoPlay
//           muted={!isVideoPlayingWithSound}
//           loop
//           className="w-full h-full object-cover"
//         >
//           <source src={heroVideos[currentVideoIndex].video} type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//         {/* Video Navigation Dots */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//           {heroVideos.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentVideoIndex(index)}
//               className={`w-3 h-3 rounded-full transition-all ${currentVideoIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//         {/* Play with Sound Button */}
//         {!isVideoPlayingWithSound && (
//           <button
//             onClick={handlePlayWithSound}
//             className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-5 py-2 rounded-full text-sm font-semibold z-20 shadow-lg hover:bg-white"
//           >
//             🔊 Play with Sound
//           </button>
//         )}
//       </div>

//       <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//         <motion.h1
//           className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           key={`title-${currentVideoIndex}`}
//         >
//           {heroVideos[currentVideoIndex].title}
//         </motion.h1>
//         <motion.p
//           className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           key={`subtitle-${currentVideoIndex}`}
//         >
//           {heroVideos[currentVideoIndex].subtitle}
//         </motion.p>
//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <Link
//             to="/booking"
//             className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
//           >
//             Start Your Healing Journey
//             <ArrowRight className="ml-2 w-5 h-5" />
//           </Link>
//           <button className="bg-transparent hover:bg-white/10 text-white text-lg px-8 py-4 rounded-full border-2 border-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
//             <Play className="w-5 h-5" />
//             <span>Watch Our Story</span>
//           </button>
//         </motion.div>
//       </div>
//     </section>

//       {/* Promo Banner */}
//       <div className="bg-gradient-to-r from-[#3E5F44] to-[#2E4A34] py-3 overflow-hidden text-white">
//         <div className="animate-marquee whitespace-nowrap">
//           <span className="text-lg font-medium mx-8">✨ 20% off for 10 days & above stays</span>
//           <span className="text-lg font-medium mx-8">🌿 10% off for 5 days & above stays</span>
//           <span className="text-lg font-medium mx-8">🌸 Special rates for June & July bookings</span>
//           <span className="text-lg font-medium mx-8">✨ 20% off for 10 days & above stays</span>
//           <span className="text-lg font-medium mx-8">🌿 10% off for 5 days & above stays</span>
//           <span className="text-lg font-medium mx-8">🌸 Special rates for June & July bookings</span>
//         </div>
//       </div>

//       {/* Accreditation Banner */}
//       <section className="bg-gradient-to-b from-white to-[#f0f5f1] py-12 px-4">
//         <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="flex flex-col md:flex-row items-center p-8">
//             <div className="w-40 h-40 bg-[#f0f5f1] rounded-full flex items-center justify-center border-4 border-[#d1e0d4] shadow-inner shrink-0">
//               <Award className="w-16 h-16 text-[#3E5F44]" />
//             </div>
            
//             <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
//               <div className="relative inline-block">
//                 <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
//                   Welcome to Nowal Nature Care & Holistic Healthcare Centre
//                 </h2>
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a7d52] to-[#3E5F44]"></div>
//               </div>
//               <p className="text-xl text-[#3E5F44] font-medium mt-4">
//                 Gujarat's Premier NABH Accredited Nowal Destination
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Treatments Section */}
//       <section className="py-20 px-4 bg-gradient-to-b from-[#f0f5f1] to-white">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
//             True Treatments for Chronic Nowal
//           </h2>
//           <div className="flex justify-center items-center mb-8">
//             <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
//             <Leaf className="text-[#3E5F44] w-6 h-6" />
//             <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
//           </div>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
//             Our therapeutic programs target root causes to promote deep, sustainable healing through personalized natural treatments.
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
//             {[
//               { icon: Leaf, title: "Naturopathy", color: "text-green-600" },
//               { icon: FlaskConical, title: "Ayurveda", color: "text-yellow-600" },
//               { icon: CircleDashed, title: "Yoga & Meditation", color: "text-purple-600" },
//               { icon: Dumbbell, title: "Physiotherapy", color: "text-blue-600" },
//               { icon: Sparkles, title: "Holistic Therapies", color: "text-pink-600" },
//             ].map((item, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
//               >
//                 <div className={`${item.color} mb-4`}>
//                   <item.icon className="w-10 h-10 mx-auto" />
//                 </div>
//                 <h3 className="font-semibold text-gray-800">{item.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Diseases Treated Section */}
//       <section className="relative py-20 px-4 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
//         <div className="absolute inset-0 bg-[#3E5F44]/90 backdrop-blur-sm"></div>
//         <div className="relative max-w-7xl mx-auto z-10">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
//             Conditions We Treat
//           </h2>
//           <p className="text-center text-[#c8d5cb] max-w-3xl mx-auto mb-12 text-lg">
//             At nowal, we adopt a holistic approach to treating various ailments by detoxifying the body to promote health and well-being.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {diseases.map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.03 }}
//                 className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-5 rounded-xl shadow-md transition-all"
//               >
//                 <div className="bg-white p-2 rounded-lg shadow-sm">
//                   <item.icon className="w-6 h-6 text-[#3E5F44]" />
//                 </div>
//                 <h3 className="font-semibold text-lg">{item.title}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Therapies Section */}
//       <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f0f5f1]">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
//             Popular Therapies
//           </h2>
//           <div className="flex justify-center items-center mb-8">
//             <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
//             <HeartPulse className="text-[#3E5F44] w-6 h-6" />
//             <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { 
//                 title: "Panchakarma Therapy", 
//                 duration: "Minimum 7 days", 
//                 image: image1, 
//               },
//               { 
//                 title: "Mud Therapy", 
//                 duration: "Minimum 5 days", 
//                 image: image2 
//               },
//               { 
//                 title: "Hydro Therapy", 
//                 duration: "Minimum 3-7 days", 
//                 image: image3
//               },
//               { 
//                 title: "Massage Therapy", 
//                 duration: "Minimum 5 days", 
//                 image: image4 
//               },
//             ].map((therapy, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={therapy.image} 
//                     alt={therapy.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-1">{therapy.title}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{therapy.duration}</p>
//                   <button className="w-full bg-[#3E5F44] hover:bg-[#2E4A34] text-white font-medium py-2 px-4 rounded-lg transition-all">
//                     Book Now
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="relative py-20 px-4 text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
//         <div className="absolute inset-0 bg-[#3E5F44]/90 backdrop-blur-sm"></div>
//         <div className="relative max-w-7xl mx-auto z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
//               Healing Stories
//             </h2>
//             <div className="flex justify-center items-center">
//               <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
//               <Star className="text-[#c8d5cb] w-5 h-5" />
//               <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
//             </div>
//           </div>
          
//           <div className="grid md:grid-cols-3 gap-10 px-4">
//             {testimonials.map((t, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ scale: 1.02 }}
//                 className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center transition-all"
//               >
//                 <img
//                   src={t.image}
//                   alt={t.name}
//                   className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-[#c8d5cb] shadow-md"
//                 />
//                 <div className="mt-6 relative">
//                   <FaQuoteLeft className="inline mr-2 text-[#c8d5cb] text-xl" />
//                   <p className="inline leading-relaxed text-[#e8f0ea]">{t.quote}</p>
//                   <FaQuoteRight className="inline ml-2 text-[#c8d5cb] text-xl" />
//                 </div>
//                 <div className="mt-6 flex flex-col items-center">
//                   <span className="font-semibold text-lg">{t.name}</span>
//                   <span className="text-[#c8d5cb] text-sm">{t.role}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 px-4 bg-gradient-to-b from-[#f0f5f1] to-white">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-gray-800 mb-4">
//             Our Sanctuary
//           </h2>
//           <div className="flex justify-center items-center mb-12">
//             <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
//             <Sprout className="text-[#3E5F44] w-6 h-6" />
//             <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {galleryItems.map((item, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ scale: 1.03 }}
//                 className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
//                   <button className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
//                     {item.title} <FaArrowRight />
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
//             Nowal Wisdom
//           </h2>
//           <div className="flex justify-center items-center mb-12">
//             <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
//             <BadgePlus className="text-[#3E5F44] w-6 h-6" />
//             <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {blogPosts.map((post, index) => (
//               <motion.div 
//                 key={index}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all text-left"
//               >
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={post.image} 
//                     alt={post.title} 
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
//                     {post.title}
//                   </h3>
//                   <p className="text-gray-600 mb-4 line-clamp-3">
//                     {post.desc}
//                   </p>
//                   <Link 
//                     to="#" 
//                     className="text-[#3E5F44] hover:text-[#2E4A34] font-medium inline-flex items-center gap-1 transition-colors"
//                   >
//                     Read More
//                     <ArrowRight className="w-4 h-4 mt-1" />
//                   </Link>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           <button className="mt-12 bg-[#3E5F44] hover:bg-[#2E4A34] text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg">
//             Explore All Articles
//           </button>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Home


import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Play, Star, Award, Users, Heart, Mountain, Waves } from 'lucide-react'
import { Leaf, FlaskConical, CircleDashed, Dumbbell, Sparkles } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { FaQuoteLeft, FaQuoteRight, FaUser } from 'react-icons/fa';
import {
  Activity,
  Brain,
  Salad,
  ShieldCheck,
  Syringe,
  Thermometer,
  Sprout,
  HeartPulse,
  AlertTriangle,
  Apple,
  BadgePlus
} from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';
import { FaArrowRight } from 'react-icons/fa6';
import AlertPopup from './NimbaGallery';
import image1 from "../assets/panchakarma.jpg";
import image2 from "../assets/mudtherapy.jpg";
import image3 from "../assets/hydrotherapy.jpg";
import image4 from "../assets/massage.jpg";
import image5 from "../assets/wellness.jpg";
import image6 from "../assets/303.jpg";
import image7 from "../assets/3d2-1.jpg";
import image8 from "../assets/Dormitory .jpg";

const Home: React.FC = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  // In your state declarations
const [isVideoPlayingWithSound, setIsVideoPlayingWithSound] = useState(true);

  const handlePlayWithSound = () => {
    setIsVideoPlayingWithSound(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  };

  const blogPosts = [
    {
      // title: 'Pulmonary Fibrosis Treatment: Taking Control of Your Journey',
      // desc: 'Facing pulmonary fibrosis can feel overwhelming, but never forget – you are not alone, and hope remains...',
      image: 'https://www.nimba.in/wp-content/uploads/2025/07/Pulmonary-Fibrosis-Treatment-Taking-Control-of-Your-Journey.jpg',
    },
    {
      // title: 'Ayurveda for Diabetes: A Complete Approach to Balanced Blood Sugar',
      // desc: 'In a world filled with fast food, a sedentary lifestyle, and stress, diabetes has emerged as a common...',
      image: 'https://www.nimba.in/wp-content/uploads/2025/07/Ayurveda-for-Diabetes-A-Complete-Approach-to-Balanced-Blood-Sugar.jpg',
    },
    {
      // title: 'Manage Cervical Spondylitis with Ayurvedic Treatment',
      // desc: 'Cervical spondylitis, or cervical osteoarthritis, is a degenerative disease primarily affecting...',
      image: 'https://www.nimba.in/wp-content/uploads/2025/06/Nimba-Blogs.jpg',
    },
  ];

  const galleryItems = [
    { title: 'nowal', image: image5 },
    { title: 'Amenities', image: image6 },
    { title: 'Media & Events', image: image7 },
    { title: 'Living Space', image: image8 },
  ];

  const testimonials = [
    {
      name: 'Vivek Oberoi',
      role: 'Actor, Bollywood, India',
      quote: `I was truly taken by surprise & my experience at Nowal has been exceptional. I believe Naturopathy is the need of the hour as people are done with allopathic treatments and their side effects.`,
      image: 'https://www.nimba.in/wp-content/uploads/2020/07/Vivek-Oberoi-%E2%80%93-Actor-Bollywood-India.png',
    },
    {
      name: 'Raveena Taurani',
      role: 'Nutritionist',
      quote: `I appreciate their food plan which is not fasting focussed instead focuses on the right mix.`,
      image: 'https://www.nimba.in/wp-content/uploads/2020/07/Raveena-Taurani-min.png',
    },
    {
      name: 'Reyhna Malhotra',
      role: 'Model & Actress',
      quote: `I have had a good detox & inch loss which is always welcoming. Nice Nowal retreat with holistic approach and goodness of Naturopathy, Ayurveda, Yoga, Hydrotherapy, Raga therapy and many international therapies.`,
      image: 'https://www.nimba.in/wp-content/uploads/2020/07/Reyhna-Malhotra-min.png',
    },
  ];

  const diseases = [
    { icon: Salad, title: "Detoxification" },
    { icon: Syringe, title: "Obesity" },
    { icon: Brain, title: "Diabetes" },
    { icon: HeartPulse, title: "Digestive Disorders" },
    { icon: Apple, title: "Liver Diseases" },
    { icon: Activity, title: "Hypertension" },
    { icon: Thermometer, title: "	PCOS/PCOD	" },
    { icon: ShieldCheck, title: "Respiratory Diseases " },
    { icon: AlertTriangle, title: "Hormonal Imbalance	" },
        { icon: AlertTriangle, title: " 	Pain management	" },
  ];
  
  const heroMessages = [
    "Welcome to Nowal Naturecare Resort – Where luxury meets natural healing",
    "Breathe. Relax. Reconnect here at Nowal Naturecare Resort",
    "Discover tranquility in every leaf, every breeze, every sunrise",
    "Your journey to nowal begins at Nowal – where nature nurtures",
    "Unplug from stress. Reconnect with nature. Rejuvenate your soul"
  ];

  const keyHighlights = [
    { 
      title: "Nature-Integrated Architecture", 
      description: "Eco-friendly design blending with lush greenery for a tranquil escape into nature.",
      icon: Sprout
    },
    { 
      title: "Holistic nowal Programs", 
      description: "Personalized naturopathy, Ayurveda, yoga, and meditation with experts.",
      icon: HeartPulse
    },
    { 
      title: "Luxurious Accommodations", 
      description: "Spacious, serene rooms with nature views and calming minimalist interiors.",
      icon: Star
    },
    { 
      title: "Yoga & Meditation Spaces", 
      description: "Open-air pavilions and peaceful studios to deepen your practice.",
      icon: CircleDashed
    },
    { 
      title: "Organic Farm-to-Table", 
      description: "Wholesome meals from fresh, organic produce grown in our farmland.",
      icon: Salad
    },
    { 
      title: "Healing Spa & Therapies", 
      description: "Rejuvenating treatments using natural oils, herbs, and traditional methods.",
      icon: FlaskConical
    }
  ];

  const heroVideos = [
    {
      video: "https://videos.pexels.com/video-files/6629917/6629917-uhd_2732_1440_25fps.mp4",
      title: heroMessages[0],
      subtitle: "Science-backed ancient healing. Your journey to wholeness starts here."
    },
    {
      video: "https://media.istockphoto.com/id/127737092/video/blue-tit-perching-on-the-branch.mp4?s=mp4-640x640-is&k=20&c=q20fOs37zjOvrgkZvck_34-G2B930EA4_rUjvT57fo8=",
      title: heroMessages[1],
      subtitle: "Connect with nature and rediscover your balance."
    },
    {
      video: "https://media.istockphoto.com/id/1994316862/video/old-man-meditating-on-yoga-mat-in-yard.mp4?s=mp4-640x640-is&k=20&c=79ZoUDn_S-mBE3_O8XbMnUwcWR4ZFG5MDp4pcmMlxHk=",
      title: heroMessages[2],
      subtitle: "Premium Nowal treatments in a serene environment."
    }
  ];

// In your useEffect for video rotation
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === heroVideos.length - 1 ? 0 : prevIndex + 1
    )
  }, 5000)
  
  // Automatically play with sound when component mounts
  if (videoRef.current) {
    videoRef.current.muted = false;
    videoRef.current.play().catch(error => {
      console.log("Auto-play was prevented:", error);
      // Fallback: show play button
      setIsVideoPlayingWithSound(false);
    });
  }
  
  return () => clearInterval(interval)
}, [])

  return (
    <div className="min-h-screen font-sans bg-white">
      <AlertPopup />
      
      {/* Hero Section with Video Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode='wait'>
            
<motion.video
  key={currentVideoIndex}
  ref={videoRef}
  autoPlay
  muted={!isVideoPlayingWithSound}
  loop
  playsInline // Important for mobile browsers
  className="w-full h-full object-cover"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1 }}
>
  <source src={heroVideos[currentVideoIndex].video} type="video/mp4" />
</motion.video>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.div
            key={`hero-content-${currentVideoIndex}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
              {heroVideos[currentVideoIndex].title}
            </h1>
            <p className="text-xl md:text-2xl font-light">
              {heroVideos[currentVideoIndex].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/booking"
                className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Book Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              {/* <Link
                to="/resort"
                className="bg-transparent hover:bg-white/10 text-white text-lg px-8 py-4 rounded-full border-2 border-white transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Explore Resort</span>
              </Link> */}
            </div>
          </motion.div>
        </div>

        {/* Video Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideoIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentVideoIndex === index ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Play with Sound Button */}
        {!isVideoPlayingWithSound && (
          <button
            onClick={handlePlayWithSound}
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white/90 text-black px-5 py-2 rounded-full text-sm font-semibold z-20 shadow-lg hover:bg-white transition-all"
          >
            🔊 Play with Sound
          </button>
        )}
      </section>

      {/* Promo Banner */}
      <div className="bg-gradient-to-r from-[#3E5F44] to-[#2E4A34] py-3 overflow-hidden text-white">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-lg font-medium mx-8">✨ 20% off for 10+ day stays</span>
          <span className="text-lg font-medium mx-8">🌿 10% off for 5+ day stays</span>
          <span className="text-lg font-medium mx-8">🌸 Special rates for June & July</span>
          <span className="text-lg font-medium mx-8">💚 Free nowal consultation</span>
          <span className="text-lg font-medium mx-8">🧘‍♀️ Complimentary yoga sessions</span>
        </div>
      </div>

      {/* Key Highlights Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Experience Nowal Naturecare
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
              <Leaf className="text-[#3E5F44] w-6 h-6" />
              <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyHighlights.map((highlight, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-[#f0f5f1] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#3E5F44] transition-all">
                  <highlight.icon className="w-6 h-6 text-[#3E5F44] group-hover:text-white transition-all" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditation Banner */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-[#f0f5f1]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center p-8">
            <div className="w-40 h-40 bg-[#f0f5f1] rounded-full flex items-center justify-center border-4 border-[#d1e0d4] shadow-inner shrink-0">
              <Award className="w-16 h-16 text-[#3E5F44]" />
            </div>
            
            <div className="md:ml-8 mt-6 md:mt-0 text-center md:text-left">
              <div className="relative inline-block">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-2">
                  Welcome to Nowal Nature Care
                </h2>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a7d52] to-[#3E5F44]"></div>
              </div>
              <p className="text-xl text-[#3E5F44] font-medium mt-4">
                Gujarat's Premier NABH Accredited nowal Destination
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f0f5f1] to-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Experience the power of nature in every healing touch
            </h1>
            <h5 className="text-2xl font-medium text-gray-700">Healing Program</h5>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
              <Leaf className="text-[#3E5F44] w-6 h-6" />
              <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
            </div>
          </motion.div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
        Nowal Naturecare guides you on a journey back to balance, awakening the natural healer that already lives inside you
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Leaf, title: "Naturopathy", color: "text-green-600", bg: "bg-green-50" },
              { icon: FlaskConical, title: "Ayurveda", color: "text-yellow-600", bg: "bg-yellow-50" },
              { icon: CircleDashed, title: "Meditation and Yoga", color: "text-purple-600", bg: "bg-purple-50" },
              { icon: Dumbbell, title: "Physiotherapy", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Sparkles, title: "Treatments", color: "text-pink-600", bg: "bg-pink-50" },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                className={`${item.bg} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}
              >
                <div className={`${item.color} mb-4`}>
                  <item.icon className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diseases Treated Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3E5F44]/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Conditions We Treat
            </h2>
            <p className="text-[#c8d5cb] max-w-3xl mx-auto text-lg">
           	At Nimba we have adopted holistic approach to treating various ailments by detoxifying body to promote health and wellbeing	Nowal Naturecare believes in healing from within—through detox and natural therapies that support your body’s full well-being	
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseases.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-5 rounded-xl shadow-md transition-all"
              >
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <item.icon className="w-6 h-6 text-[#3E5F44]" />
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#f0f5f1]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
              Popular Therapies
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
              <HeartPulse className="text-[#3E5F44] w-6 h-6" />
              <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Panchakarma Therapy", 
                duration: "Minimum 7 days", 
                image: image1, 
              },
              { 
                title: "Mud Therapy", 
                duration: "Minimum 5 days", 
                image: image2 
              },
              { 
                title: "Hydro Therapy", 
                duration: "Minimum 3-7 days", 
                image: image3
              },
              { 
                title: "Massage Therapy", 
                duration: "Minimum 5 days", 
                image: image4 
              },
            ].map((therapy, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={therapy.image} 
                    alt={therapy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{therapy.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{therapy.duration}</p>
                  {/* <button className="w-full bg-[#3E5F44] hover:bg-[#2E4A34] text-white font-medium py-2 px-4 rounded-lg transition-all">
                    Book Now
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#3E5F44]/90 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              	Customers speak	
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
              <Star className="text-[#c8d5cb] w-5 h-5" />
              <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
            </div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-10 px-4">
            {testimonials.map((t, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center transition-all"
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <img
                    src={t.image}
                    alt={t.name}
                    className="mx-auto rounded-full w-32 h-32 object-cover border-4 border-[#c8d5cb] shadow-md"
                  />
                </motion.div>
                <div className="mt-6 relative">
                  <FaQuoteLeft className="inline mr-2 text-[#c8d5cb] text-xl" />
                  <p className="inline leading-relaxed text-[#e8f0ea]">{t.quote}</p>
                  <FaQuoteRight className="inline ml-2 text-[#c8d5cb] text-xl" />
                </div>
                <div className="mt-6 flex flex-col items-center">
                  <span className="font-semibold text-lg">{t.name}</span>
                  <span className="text-[#c8d5cb] text-sm">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#f0f5f1] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
              Our Sanctuary
            </h2>
            <div className="flex justify-center items-center">
              <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
              <Sprout className="text-[#3E5F44] w-6 h-6" />
              <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <button className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
                    {item.title} <FaArrowRight />
                  </button> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
    <section className="py-20 px-4 bg-white">
  <div className="max-w-7xl mx-auto text-center">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
        Nowal Wisdom
      </h2>
      <div className="flex justify-center items-center">
        <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
        <BadgePlus className="text-[#3E5F44] w-6 h-6" />
        <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
      </div>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
        >
          <div className="aspect-w-16 aspect-h-10">
            <img
              src={post.image}
              alt=""
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>
      ))}
    </div>

    {/* <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-12 bg-[#3E5F44] hover:bg-[#2E4A34] text-white font-semibold px-8 py-3 rounded-full transition-all shadow-md hover:shadow-lg"
    >
      Explore All Articles
    </motion.button> */}
  </div>
</section>

    </div>
  )
}

export default Home