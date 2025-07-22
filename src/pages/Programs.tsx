// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Leaf, Heart, Brain, Flower, Sun, Mountain } from 'lucide-react'

// const Programs: React.FC = () => {
//   const programs = [
//     {
//       id: 'ayurveda',
//       icon: <Leaf className="w-12 h-12 text-sage-400" />,
//       title: "Ayurveda Healing Program",
//       subtitle: "Ancient Wisdom for Modern Wellness",
//       description: "Experience the profound healing power of Ayurveda through personalized treatments, herbal medicine, and lifestyle guidance based on your unique constitution.",
//       duration: "7-21 days",
//       price: "From $599",
//       image: "https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Detailed Ayurvedic consultation and pulse diagnosis",
//         "Personalized herbal medicine prescriptions",
//         "Panchakarma detoxification therapies",
//         "Abhyanga (therapeutic oil massage)",
//         "Shirodhara (oil pouring therapy)",
//         "Customized yoga and meditation practices",
//         "Ayurvedic cooking classes",
//         "Lifestyle and dietary guidance"
//       ],
//       benefits: [
//         "Improved digestion and metabolism",
//         "Enhanced immunity and vitality",
//         "Stress reduction and mental clarity",
//         "Better sleep quality",
//         "Balanced hormones",
//         "Increased energy levels"
//       ]
//     },
//     {
//       id: 'naturopathy',
//       icon: <Mountain className="w-12 h-12 text-sage-400" />,
//       title: "Naturopathy Program",
//       subtitle: "Nature's Path to Healing",
//       description: "Harness the healing power of nature through drug-free treatments that support your body's innate ability to heal itself.",
//       duration: "5-14 days",
//       price: "From $549",
//       image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Comprehensive health assessment",
//         "Hydrotherapy treatments",
//         "Mud therapy and earth treatments",
//         "Chromotherapy (color therapy)",
//         "Acupuncture and acupressure",
//         "Nutritional counseling",
//         "Fasting and detox protocols",
//         "Herbal medicine consultations"
//       ],
//       benefits: [
//         "Natural detoxification",
//         "Improved circulation",
//         "Enhanced healing response",
//         "Reduced inflammation",
//         "Better organ function",
//         "Increased mental clarity"
//       ]
//     },
//     {
//       id: 'yoga',
//       icon: <Sun className="w-12 h-12 text-sage-400" />,
//       title: "Yoga & Meditation Retreat",
//       subtitle: "Union of Body, Mind, and Spirit",
//       description: "Deep dive into the ancient practice of yoga with comprehensive training in asanas, pranayama, and meditation techniques.",
//       duration: "3-14 days",
//       price: "From $499",
//       image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Daily yoga practice sessions",
//         "Pranayama (breathing exercises)",
//         "Meditation training",
//         "Yoga philosophy classes",
//         "Mantra chanting",
//         "Mindfulness practices",
//         "Yoga therapy sessions",
//         "Spiritual guidance"
//       ],
//       benefits: [
//         "Increased flexibility and strength",
//         "Better stress management",
//         "Improved mental focus",
//         "Enhanced spiritual awareness",
//         "Better sleep quality",
//         "Emotional balance"
//       ]
//     },
//     {
//       id: 'detox',
//       icon: <Flower className="w-12 h-12 text-sage-400" />,
//       title: "Detox & Rejuvenation",
//       subtitle: "Cleanse and Renew",
//       description: "Comprehensive detoxification program to eliminate toxins, boost immunity, and restore your body's natural balance.",
//       duration: "5-10 days",
//       price: "From $699",
//       image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Supervised juice cleanses",
//         "Colon hydrotherapy",
//         "Lymphatic drainage massage",
//         "Infrared sauna sessions",
//         "Nutritional IV therapy",
//         "Liver detox protocols",
//         "Cellular regeneration treatments",
//         "Post-detox meal planning"
//       ],
//       benefits: [
//         "Improved energy levels",
//         "Clearer skin",
//         "Better digestion",
//         "Weight management",
//         "Enhanced immunity",
//         "Mental clarity"
//       ]
//     },
//     {
//       id: 'stress',
//       icon: <Brain className="w-12 h-12 text-sage-400" />,
//       title: "Stress Management Program",
//       subtitle: "Find Your Inner Peace",
//       description: "Comprehensive program addressing stress, anxiety, and mental wellness through proven therapeutic techniques.",
//       duration: "7-14 days",
//       price: "From $549",
//       image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Stress assessment and evaluation",
//         "Cognitive behavioral therapy",
//         "Relaxation techniques training",
//         "Mindfulness meditation",
//         "Biofeedback sessions",
//         "Counseling and therapy",
//         "Lifestyle coaching",
//         "Stress management workshops"
//       ],
//       benefits: [
//         "Reduced anxiety and stress",
//         "Improved emotional regulation",
//         "Better sleep quality",
//         "Enhanced focus and clarity",
//         "Improved relationships",
//         "Greater life satisfaction"
//       ]
//     },
//     {
//       id: 'wellness',
//       icon: <Heart className="w-12 h-12 text-sage-400" />,
//       title: "Complete Wellness Program",
//       subtitle: "Total Body-Mind Transformation",
//       description: "Our most comprehensive program combining multiple healing modalities for complete physical, mental, and spiritual transformation.",
//       duration: "14-21 days",
//       price: "From $899",
//       image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
//       features: [
//         "Comprehensive health assessment",
//         "Personalized treatment protocol",
//         "Ayurvedic and naturopathic treatments",
//         "Daily yoga and meditation",
//         "Nutritional counseling",
//         "Stress management techniques",
//         "Detox and cleansing protocols",
//         "Lifestyle transformation coaching"
//       ],
//       benefits: [
//         "Complete health transformation",
//         "Sustainable lifestyle changes",
//         "Optimal physical health",
//         "Mental and emotional balance",
//         "Spiritual growth",
//         "Long-term wellness"
//       ]
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Holistic Programs"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-overlay"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             Holistic Programs
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             Comprehensive healing programs combining ancient wisdom with modern science
//           </p>
//         </div>
//       </section>

//       {/* Programs Grid */}
//       <section className="section-padding bg-white">
//         <div className="container-max">
//           <div className="space-y-16">
//             {programs.map((program, index) => (
//               <div key={program.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                 <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
//                   <div className="flex items-center mb-4">
//                     {program.icon}
//                     <div className="ml-4">
//                       <h2 className="text-3xl font-playfair font-bold text-sage-600">
//                         {program.title}
//                       </h2>
//                       <p className="text-lg text-terracotta-500 font-medium">
//                         {program.subtitle}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                     {program.description}
//                   </p>
                  
//                   <div className="flex items-center justify-between mb-6">
//                     <span className="text-sage-500 font-medium">{program.duration}</span>
//                     <span className="text-2xl font-playfair font-bold text-sage-600">{program.price}</span>
//                   </div>
                  
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                     <div>
//                       <h3 className="font-semibold text-sage-600 mb-3">What's Included:</h3>
//                       <ul className="space-y-2">
//                         {program.features.slice(0, 4).map((feature, idx) => (
//                           <li key={idx} className="flex items-start text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-sage-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
//                             {feature}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-sage-600 mb-3">Benefits:</h3>
//                       <ul className="space-y-2">
//                         {program.benefits.slice(0, 4).map((benefit, idx) => (
//                           <li key={idx} className="flex items-start text-sm text-gray-600">
//                             <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
//                             {benefit}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <Link to="/booking" className="btn-primary">
//                       Book This Program
//                     </Link>
//                     <Link to="/contact" className="btn-outline">
//                       Get More Info
//                     </Link>
//                   </div>
//                 </div>
                
//                 <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
//                   <img
//                     src={program.image}
//                     alt={program.title}
//                     className="w-full h-96 object-cover rounded-xl shadow-lg"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-sage-400 text-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//             Not Sure Which Program is Right for You?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Our wellness experts are here to help you choose the perfect program based on your individual needs and goals.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/contact" className="btn-secondary">
//               Get Free Consultation
//             </Link>
//             <Link to="/booking" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
//               Book Any Program
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Programs

// import React from 'react'
// import { Link } from 'react-router-dom'

// const Programs: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Holistic Programs"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
//             Holistic Wellness Programs
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">
//             At Wellness Nature Cure
//           </p>
//           <Link 
//             to="/programs" 
//             className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
//           >
//             Explore Our Programs
//           </Link>
//         </div>
//       </section>

//       {/* New Content Section */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <blockquote className="text-2xl md:text-3xl font-playfair italic text-sage-600 mb-8">
//             "In a healthy body resides a happy soul."
//           </blockquote>
          
//           <div className="space-y-6 text-lg text-gray-700">
//             <p>
//               The wholesome wellness of our bodies is the stepping stone to an empowering spiritual, 
//               physical and mental well-being instantly.
//             </p>
            
//             <p>
//               A safe haven to indulge into the holistic betterment of every individual, Wellness's 
//               Wellness Programmes enable one to lead a rejuvenating, stimulating and healthy life 
//               through an effective blend of western and natural treatments.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Spiritual Well-being</h3>
//               <p className="text-gray-600">
//                 Connect with your inner self through meditation, yoga, and mindfulness practices.
//               </p>
//             </div>
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Physical Health</h3>
//               <p className="text-gray-600">
//                 Restore balance with natural therapies, detox programs, and personalized treatments.
//               </p>
//             </div>
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Mental Clarity</h3>
//               <p className="text-gray-600">
//                 Achieve peace of mind through stress management and holistic counseling.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>


//         <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        
//         {/* Text Card */}
//         <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//           <div className="flex flex-col items-start space-y-6">
//             <div className="text-4xl text-gray-500">🌿</div>
//             <h2 className="text-3xl font-serif text-gray-700">
//               Naturopathy wonders
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               In this age of mainstream health care dictating the terms, it is
//               difficult to realize the genuine, long-term benefits of traditional
//               healing practices. There is no medicine as strong as the healing...
//             </p>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Image - overlaps on the left card */}
//         <div className="md:w-1/2 -ml-[10%] relative z-10">
//           <img
//             src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
//             alt="Naturopathy Treatment"
//             className="rounded shadow-lg w-full"
//           />
//         </div>
//       </div>
//     </section>

//      <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
        
//         {/* Text Card - Right Side */}
//         <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//           <div className="flex flex-col items-start space-y-6">
//             <div className="text-4xl text-gray-500">🌱</div>
//             <h2 className="text-3xl font-serif text-gray-700">
//               Naturopathy wonders
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               In this age of mainstream health care dictating the terms, it is
//               difficult to realize the genuine, long-term benefits of traditional
//               healing practices. There is no medicine as strong as the healing...
//             </p>
//             <a
//               href="#"
//               className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//             >
//               Read More
//             </a>
//           </div>
//         </div>

//         {/* Image - Left Side with 10% overlap */}
//         <div className="md:w-1/2 -mr-[10%] relative z-10">
//           <img
//              src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
//             alt="Naturopathy Treatment"
//             className="rounded shadow-lg w-full"
//           />
//         </div>
//       </div>
//     </section>


    

   
//     </div>
//   )
// }

// export default Programs



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Programs: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-[70vh] flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Holistic Programs"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
//             Holistic Wellness Programs
//           </h1>
//           <p className="text-xl md:text-2xl mb-8">
//             At Wellness Nature Cure
//           </p>
//           <Link 
//             to="/programs" 
//             className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
//           >
//             Explore Our Programs
//           </Link>
//         </div>
//       </section>

//       {/* Breadcrumbs */}
//                   <div className="container mx-auto px-4 py-4 flex justify-center">
//               <nav className="flex" aria-label="Breadcrumb">
//                 <ol className="inline-flex items-center space-x-2 md:space-x-2">
//                   <li className="inline-flex items-center">
//                     <Link to="/" className="text-sage-600 hover:text-sage-800">
//                       Home
//                     </Link>
//                   </li>
//                   <li className="flex items-center">
//                     <span className="mx text-sage-500">{'>'}</span>
//                     <span className="mx text-sage-500">{'>'}</span>
//                   </li>
//                   <li>
//                     <span className="text-sage-800 font-medium">Holistic Programmes</span>
//                   </li>
//                 </ol>
//               </nav>
//             </div>

//       {/* New Content Section */}
//       <section className="py-16 px-4 md:px-8 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <blockquote className="text-2xl md:text-3xl font-playfair italic text-sage-600 mb-8">
//             "In a healthy body resides a happy soul."
//           </blockquote>
          
//           <div className="space-y-6 text-lg text-gray-700">
//             <p>
//               The wholesome wellness of our bodies is the stepping stone to an empowering spiritual, 
//               physical and mental well-being instantly.
//             </p>
            
//             <p>
//               A safe haven to indulge into the holistic betterment of every individual, Wellness's 
//               Wellness Programmes enable one to lead a rejuvenating, stimulating and healthy life 
//               through an effective blend of western and natural treatments.
//             </p>
//           </div>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Spiritual Well-being</h3>
//               <p className="text-gray-600">
//                 Connect with your inner self through meditation, yoga, and mindfulness practices.
//               </p>
//             </div>
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Physical Health</h3>
//               <p className="text-gray-600">
//                 Restore balance with natural therapies, detox programs, and personalized treatments.
//               </p>
//             </div>
//             <div className="bg-cream-50 p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold text-sage-600 mb-3">Mental Clarity</h3>
//               <p className="text-gray-600">
//                 Achieve peace of mind through stress management and holistic counseling.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* First Image-Text Section (Image right, text left) */}
//       {/* <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
//           <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//             <div className="flex flex-col items-start space-y-6">
//               <div className="text-4xl text-gray-500">🌿</div>
//               <h2 className="text-3xl font-serif text-gray-700">
//                 Naturopathy wonders
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 In this age of mainstream health care dictating the terms, it is
//                 difficult to realize the genuine, long-term benefits of traditional
//                 healing practices. There is no medicine as strong as the healing...
//               </p>
//               <Link
//                 to="/naturopathy"
//                 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>

       
//           <div className="md:w-1/2 -ml-[10%] relative z-10">
//             <img
//               src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
//               alt="Naturopathy Treatment"
//               className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//             />
//           </div>
//         </div>
//       </section> */}

//       {/* Second Image-Text Section (Image left, text right) */}
//       {/* <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
          
//           <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//             <div className="flex flex-col items-start space-y-6">
//               <div className="text-4xl text-gray-500">🌱</div>
//               <h2 className="text-3xl font-serif text-gray-700">
//                 Holistic Healing
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Our natural therapies work in harmony with your body's innate healing abilities to restore balance and vitality from within...
//               </p>
//               <Link
//                 to="/holistic-healing"
//                 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>

          
//           <div className="md:w-1/2 -mr-[10%] relative z-10">
//             <img
//               src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
//               alt="Holistic Treatment"
//               className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//             />
//           </div>
//         </div>
//       </section> */}

      
//        {/* First Section: Image Right, L shape top-right */}
//       <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">

//           {/* Text Card */}
//           <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//             <div className="flex flex-col items-start space-y-6">
//               <div className="text-4xl text-gray-500">🌿</div>
//               <h2 className="text-3xl font-serif text-gray-700">
//                 Naturopathy wonders
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 In this age of mainstream health care dictating the terms, it is
//                 difficult to realize the genuine, long-term benefits of traditional
//                 healing practices. There is no medicine as strong as the healing...
//               </p>
//               <Link
//                 to="/naturopathy"
//                 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>

//           {/* Image with L-shape top-right */}
//           <div className="md:w-1/2 -ml-[10%] relative z-10">
//             <div className="relative">
//               <img
//                 src="https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png"
//                 alt="Naturopathy Treatment"
//                 className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//               />
//               {/* L-shape Top-Right */}
//               <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Second Section: Image Left, L shape bottom-left */}
//       <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">

//           {/* Text Card */}
//           <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//             <div className="flex flex-col items-start space-y-6">
//               <div className="text-4xl text-gray-500">🌱</div>
//               <h2 className="text-3xl font-serif text-gray-700">
//                 Holistic Healing
//               </h2>
//               <p className="text-gray-600 leading-relaxed">
//                 Our natural therapies work in harmony with your body's innate healing abilities to restore balance and vitality from within...
//               </p>
//               <Link
//                 to="/holistic-healing"
//                 className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//               >
//                 Read More
//               </Link>
//             </div>
//           </div>

//           {/* Image with L-shape bottom-left */}
//           <div className="md:w-1/2 -mr-[10%] relative z-10">
//             <div className="relative">
//               <img
//                 src="https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png"
//                 alt="Holistic Treatment"
//                 className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"

//               />
//               {/* L-shape Bottom-Left */}
//               <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* <!-- Authentic Ayurveda Section --> */}
// <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
//     {/* Text Card */}
//     <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//       <div className="flex flex-col items-start space-y-6">
//         <div className="text-4xl text-gray-500">🪔</div>
//         <h2 className="text-3xl font-serif text-gray-700">
//           Authentic Ayurveda
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Experience the 5,000-year-old healing wisdom of Ayurveda that treats the root cause of imbalances. Our authentic Panchakarma therapies and herbal formulations bring harmony to body, mind and consciousness through personalized treatments.
//         </p>
//         <Link
//           to="/ayurveda"
//           className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//         >
//           Discover More
//         </Link>
//       </div>
//     </div>

//     {/* Image with L-shape top-right */}
//     <div className="md:w-1/2 -ml-[10%] relative z-10">
//       <div className="relative">
//         <img
//           src="https://www.nimba.in/wp-content/uploads/2020/12/Authentic-Ayurveda-min.png"
//           alt="Ayurvedic Treatment"
//           className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//         />
//         {/* L-shape Top-Right */}
//          <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* <!-- Yoga & Meditation Section --> */}
// <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
//     {/* Text Card */}
//     <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//       <div className="flex flex-col items-start space-y-6">
//         <div className="text-4xl text-gray-500">🧘</div>
//         <h2 className="text-3xl font-serif text-gray-700">
//           Yoga & Meditation
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Our ancient yoga practices and meditation techniques go beyond physical exercise to unite body, mind and spirit. Experience transformative sessions tailored to your needs, from gentle Hatha to dynamic Vinyasa, complemented by deep meditation.
//         </p>
//         <Link
//           to="/yoga-meditation"
//           className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//         >
//           Explore Practices
//         </Link>
//       </div>
//     </div>

//     {/* Image with L-shape bottom-left */}
//     <div className="md:w-1/2 -mr-[10%] relative z-10">
//       <div className="relative">
//         <img
//           src="https://www.nimba.in/wp-content/uploads/2020/12/yoga-meditation-min.png"
//           alt="Yoga Meditation"
//           className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//         />
//         {/* L-shape Bottom-Left */}
//           <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* <!-- Powerful Physiotherapy Section --> */}
// <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
//     {/* Text Card */}
//     <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//       <div className="flex flex-col items-start space-y-6">
//         <div className="text-4xl text-gray-500">💪</div>
//         <h2 className="text-3xl font-serif text-gray-700">
//           Powerful Physiotherapy
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Our evidence-based physiotherapy combines modern techniques with traditional wisdom to restore movement and function. Whether recovering from injury or managing chronic pain, our personalized programs accelerate healing and improve quality of life.
//         </p>
//         <Link
//           to="/physiotherapy"
//           className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//         >
//           Learn About Treatments
//         </Link>
//       </div>
//     </div>

//     {/* Image with L-shape top-right */}
//     <div className="md:w-1/2 -ml-[10%] relative z-10">
//       <div className="relative">
//         <img
//           src="https://www.nimba.in/wp-content/uploads/2020/12/Powerful-Physiotherapy-min.png"
//           alt="Physiotherapy Session"
//           className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//         />
//         {/* L-shape Top-Right */}
//         <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
//       </div>
//     </div>
//   </div>
// </section>

// {/* <!-- Holistic Therapies Section --> */}
// <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
//   <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
//     {/* Text Card */}
//     <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
//       <div className="flex flex-col items-start space-y-6">
//         <div className="text-4xl text-gray-500">✨</div>
//         <h2 className="text-3xl font-serif text-gray-700">
//           Holistic Therapies
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Our integrative approach combines the best of ancient healing traditions with modern wellness science. From acupuncture to sound healing, these therapies work on physical, emotional and energetic levels to promote complete wellbeing.
//         </p>
//         <Link
//           to="/holistic-therapies"
//           className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
//         >
//           View All Therapies
//         </Link>
//       </div>
//     </div>

//     {/* Image with L-shape bottom-left */}
//     <div className="md:w-1/2 -mr-[10%] relative z-10">
//       <div className="relative">
//         <img
//           src="https://www.nimba.in/wp-content/uploads/2020/12/Holistic-Therapies-min.png"
//           alt="Holistic Therapy Session"
//           className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
//         />
//         {/* L-shape Bottom-Left */}
//          <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="content-block py-12 px-4 md:px-8">
//         <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 transform transition-all hover:scale-[1.01] hover:shadow-3xl">
//           <div className="text-center">
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//               Transform Your Daily Routine
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               Experience the power of Ayurvedic wisdom in just two lines of practice.
//               <br />
//               Begin your journey to holistic health today.
//             </p>
//             <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
//               Heal Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Programs;



import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Programs: React.FC = () => {
  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Holistic Programs"
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sage-300 to-white">
              Holistic Wellness Programs
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
            At Wellness Nature Cure
          </p>
          <Link 
            to="/programs" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-sage-500 to-sage-600 hover:from-sage-600 hover:to-sage-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Programs
          </Link>
        </div>
      </section>

      {/* Polished Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li className="inline-flex items-center">
              <Link 
                to="/" 
                className="text-sage-600 hover:text-sage-800 transition-colors duration-200 flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 text-sage-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-sage-800 font-medium">Holistic Programmes</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Enhanced Content Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-2xl md:text-3xl font-playfair italic text-sage-600 mb-8 relative">
            <svg 
              className="absolute -left-8 -top-4 w-8 h-8 text-sage-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            "In a healthy body resides a happy soul."
            <svg 
              className="absolute -right-8 -bottom-4 w-8 h-8 text-sage-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </blockquote>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              The wholesome wellness of our bodies is the stepping stone to an empowering spiritual, 
              physical and mental well-being instantly.
            </p>
            
            <p>
              A safe haven to indulge into the holistic betterment of every individual, Wellness's 
              Wellness Programmes enable one to lead a rejuvenating, stimulating and healthy life 
              through an effective blend of western and natural treatments.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Spiritual Well-being",
                description: "Connect with your inner self through meditation, yoga, and mindfulness practices.",
                icon: "🧘‍♂️"
              },
              {
                title: "Physical Health",
                description: "Restore balance with natural therapies, detox programs, and personalized treatments.",
                icon: "💆‍♀️"
              },
              {
                title: "Mental Clarity",
                description: "Achieve peace of mind through stress management and holistic counseling.",
                icon: "🧠"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-cream-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-cream-100 hover:border-sage-200"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-sage-600 mb-3">{item.title}</h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Image-Text Sections */}
    {[
  {
    title: "Naturopathy Wonders",
    description:
      "In this age of mainstream healthcare dictating the terms, it's difficult to realize the long-term benefits of traditional healing practices. There's no medicine as strong as the healing power of nature.",
    image: "https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png",
    link: "/naturopathy",
    reverse: false,
    icon: "🌿",
  },
  {
    title: "Holistic Healing",
    description:
      "Our natural therapies work in harmony with your body's innate healing abilities to restore balance and vitality from within — naturally and sustainably.",
    image: "https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png",
    link: "/holistic-healing",
    reverse: true,
    icon: "🌱",
  },
  {
    title: "Authentic Ayurveda",
    description:
      "Experience the 5,000-year-old healing wisdom of Ayurveda. Panchakarma therapies and herbal formulations harmonize your body, mind, and spirit through personalized care.",
    image: "https://www.nimba.in/wp-content/uploads/2020/12/Authentic-Ayurveda-min.png",
    link: "/ayurveda",
    reverse: false,
    icon: "🪔",
  },
  {
    title: "Yoga & Meditation",
    description:
      "Our yoga and meditation sessions go beyond fitness. From gentle Hatha to deep breathwork, experience a complete body-mind-spirit transformation.",
    image: "https://www.nimba.in/wp-content/uploads/2020/12/yoga-meditation-min.png",
    link: "/yoga-meditation",
    reverse: true,
    icon: "🧘",
  },
].map((section, index) => (
  <section
    key={index}
    className={`relative py-24 px-6 md:px-16 overflow-hidden ${
      index % 2 === 0
        ? "bg-gradient-to-br from-[#f3fff5] via-[#eaf9ec] to-[#f0fff3]"
        : "bg-white"
    }`}
  >
    <div
      className={`max-w-7xl mx-auto flex flex-col md:flex-row ${
        section.reverse ? "md:flex-row-reverse" : ""
      } items-center gap-20`}
    >
      {/* Image Block */}
      <div
        className="relative group w-full md:w-1/2"
        data-aos={section.reverse ? "fade-left" : "fade-right"}
      >
        <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-[#ccefd6] to-[#e6f9f0] opacity-30 blur-3xl z-0" />
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700">
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div
          className={`absolute ${
            section.reverse
              ? "bottom-0 left-0 border-b-[8px] border-l-[8px]"
              : "top-0 right-0 border-t-[8px] border-r-[8px]"
          } border-sage-700 w-20 h-20 z-20 rounded-xl group-hover:w-24 group-hover:h-24 transition-all duration-500`}
        ></div>
      </div>

      {/* Text Block */}
      <div
        className="w-full md:w-1/2"
        data-aos={section.reverse ? "fade-right" : "fade-left"}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-sage-100 shadow-2xl rounded-3xl p-10 md:p-12 hover:shadow-[0_20px_80px_-20px_rgba(0,0,0,0.35)] transition-all duration-500">
          <div className="text-5xl mb-4 animate-bounce-slow text-sage-600">
            {section.icon}
          </div>
          <h2 className="text-4xl font-extrabold font-playfair text-sage-900 mb-4 leading-tight tracking-tight">
            {section.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {section.description}
          </p>
          <Link
            to={section.link}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-sage-700 text-white text-base font-semibold shadow-lg hover:bg-sage-900 transition"
          >
            Read More
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </section>
))}


{/* Luxury Featured Program */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image with decorative frame */}
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage-100 to-sage-200 rounded-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Featured Program" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <span className="text-sm uppercase tracking-widest text-sage-200 font-medium">Featured Program</span>
                    <h3 className="text-2xl font-bold mt-2">Signature Detox Retreat</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-6 leading-tight">
                Our <span className="text-sage-600">Signature</span> Wellness Experience
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Immerse yourself in our most comprehensive program combining naturopathy, ayurveda and yoga therapy for complete transformation.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  "7-day personalized healing journey",
                  "Daily yoga and meditation sessions",
                  "Ayurvedic treatments and massages",
                  "Naturopathic detox therapies",
                  "Nutritional counseling",
                  "Mindfulness practices"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-sage-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/programs/signature-detox" 
                  className="px-8 py-3 bg-gradient-to-r from-sage-600 to-sage-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  Explore Program
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 border border-sage-600 text-sage-600 font-medium rounded-full hover:bg-sage-50 transition-colors duration-300 flex items-center gap-2"
                >
                  Book Now
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-sage-600 to-sage-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Our experts are ready to guide you to the perfect program for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-3 bg-white hover:bg-gray-100 text-sage-700 font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
            >
              Book a Consultation
            </Link>
            <Link 
              to="/programs" 
              className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-medium rounded-full transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;