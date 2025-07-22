// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Heart, Leaf, Mountain, Waves, Dumbbell, Brain, Flower, Sun } from 'lucide-react'

// const HealthOffers: React.FC = () => {
//   const programs = [
//     {
//       icon: <Leaf className="w-8 h-8 text-sage-400" />,
//       title: "Ayurveda Healing",
//       description: "Ancient Indian medicine system focusing on natural healing and balance",
//       duration: "7-21 days",
//       price: "From $599",
//       features: ["Personalized consultation", "Herbal treatments", "Panchakarma therapy", "Lifestyle guidance"]
//     },
//     {
//       icon: <Mountain className="w-8 h-8 text-sage-400" />,
//       title: "Yoga & Meditation",
//       description: "Comprehensive mind-body practices for inner peace and physical strength",
//       duration: "3-14 days",
//       price: "From $499",
//       features: ["Daily yoga sessions", "Meditation training", "Pranayama practices", "Spiritual guidance"]
//     },
//     {
//       icon: <Waves className="w-8 h-8 text-sage-400" />,
//       title: "Detox & Cleanse",
//       description: "Deep cleansing programs to eliminate toxins and restore vitality",
//       duration: "5-10 days",
//       price: "From $699",
//       features: ["Juice cleanses", "Colon hydrotherapy", "Lymphatic drainage", "Nutritional counseling"]
//     },
//     {
//       icon: <Brain className="w-8 h-8 text-sage-400" />,
//       title: "Stress Management",
//       description: "Comprehensive stress reduction and mental wellness programs",
//       duration: "7-14 days",
//       price: "From $549",
//       features: ["Stress assessment", "Relaxation techniques", "Counseling sessions", "Lifestyle coaching"]
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-sage-400" />,
//       title: "Heart Health",
//       description: "Cardiovascular wellness through natural healing methods",
//       duration: "14-21 days",
//       price: "From $799",
//       features: ["Cardiac evaluation", "Exercise therapy", "Nutritional medicine", "Lifestyle modification"]
//     },
//     {
//       icon: <Flower className="w-8 h-8 text-sage-400" />,
//       title: "Women's Wellness",
//       description: "Specialized programs addressing women's unique health needs",
//       duration: "7-14 days",
//       price: "From $629",
//       features: ["Hormonal balance", "Reproductive health", "Emotional wellness", "Beauty treatments"]
//     }
//   ]

//   const treatments = [
//     {
//       category: "Respiratory Health",
//       treatments: ["Asthma management", "Bronchitis treatment", "Allergic rhinitis", "Sinus therapy"]
//     },
//     {
//       category: "Digestive Health",
//       treatments: ["IBS management", "Acid reflux therapy", "Digestive detox", "Gut health restoration"]
//     },
//     {
//       category: "Musculoskeletal",
//       treatments: ["Arthritis care", "Back pain relief", "Joint mobility", "Muscle rehabilitation"]
//     },
//     {
//       category: "Neurological",
//       treatments: ["Migraine treatment", "Anxiety management", "Sleep disorders", "Cognitive enhancement"]
//     }
//   ]

//   const amenities = [
//     {
//       icon: <Mountain className="w-6 h-6" />,
//       name: "Meditation Caves",
//       description: "Natural stone caves for deep meditation practice"
//     },
//     {
//       icon: <Dumbbell className="w-6 h-6" />,
//       name: "Wellness Gym",
//       description: "Modern fitness equipment with natural views"
//     },
//     {
//       icon: <Waves className="w-6 h-6" />,
//       name: "Infinity Pool",
//       description: "Mineral-rich pool overlooking the valley"
//     },
//     {
//       icon: <Leaf className="w-6 h-6" />,
//       name: "Organic Garden",
//       description: "Fresh herbs and vegetables grown on-site"
//     },
//     {
//       icon: <Sun className="w-6 h-6" />,
//       name: "Yoga Pavilion",
//       description: "Open-air pavilion for morning yoga sessions"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       name: "Healing Spa",
//       description: "Full-service spa with traditional treatments"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Health Offers"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-overlay"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             Health Offers
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             Comprehensive wellness programs tailored to your unique needs
//           </p>
//         </div>
//       </section>

//       {/* Holistic Programs */}
//       <section className="section-padding bg-white">
//         <div className="container-max">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
//             Holistic Programs
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <div key={index} className="card">
//                 <div className="flex items-center mb-4">
//                   {program.icon}
//                   <h3 className="text-xl font-playfair font-semibold ml-3 text-sage-600">
//                     {program.title}
//                   </h3>
//                 </div>
//                 <p className="text-gray-600 mb-4">{program.description}</p>
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-sm text-sage-500">{program.duration}</span>
//                   <span className="text-lg font-semibold text-sage-600">{program.price}</span>
//                 </div>
//                 <ul className="space-y-2 mb-6">
//                   {program.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-600">
//                       <div className="w-2 h-2 bg-sage-400 rounded-full mr-2"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link to="/booking" className="btn-primary w-full text-center">
//                   Book Now
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* True Treatments */}
//       <section className="section-padding bg-sage-50">
//         <div className="container-max">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
//             True Treatments
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {treatments.map((category, index) => (
//               <div key={index} className="card">
//                 <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-4">
//                   {category.category}
//                 </h3>
//                 <ul className="space-y-2">
//                   {category.treatments.map((treatment, idx) => (
//                     <li key={idx} className="flex items-center text-sm text-gray-600">
//                       <div className="w-2 h-2 bg-terracotta-400 rounded-full mr-2"></div>
//                       {treatment}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Retreat Amenities */}
//       <section id="amenities" className="section-padding bg-white">
//         <div className="container-max">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
//             Retreat Amenities
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {amenities.map((amenity, index) => (
//               <div key={index} className="card text-center">
//                 <div className="flex justify-center mb-4 text-sage-400">
//                   {amenity.icon}
//                 </div>
//                 <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                   {amenity.name}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{amenity.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-sage-400 text-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//             Ready to Transform Your Health?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Choose the program that resonates with your wellness goals and begin your journey to optimal health.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/booking" className="btn-secondary">
//               Book Your Program
//             </Link>
//             <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
//               Get Consultation
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default HealthOffers


import React from 'react';
import { Link } from 'react-router-dom';
import {
  HeartPulse,
  Trees,
  Flower,
  Dumbbell,
  Leaf,
  Mountain,
} from 'lucide-react';

const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/512686460/photo/healthy-lifestyle-concept-with-diet-and-fitness.jpg?s=612x612&w=0&k=20&c=WpU-fXfOWg4WtgRV1fEcxWRU2Ovgkxb4ZT246bd1zxU="
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Holistic Wellness Programs
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Wellness Nature Cure
          </p>
          <Link 
            to="/programs" 
            className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
          >
            Explore Our Programs
          </Link>
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
                    <span className="text-sage-800 font-medium">Retreat Amenities</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* New Content Section */}
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-sage-50/30 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-full h-full opacity-5">
    <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-200 blur-xl"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-amber-100 blur-xl"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-800 mb-8 leading-tight">
        In <span className="text-sage-600">Healing</span>, There Is a Power <br className="hidden md:block"/> Beyond Our Understanding
      </h2>
      
      <div className="relative max-w-3xl mx-auto">
        <blockquote className="text-2xl md:text-3xl font-playfair italic text-sage-700 relative z-10 px-8 py-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-sage-100 transform rotate-0 hover:rotate-1 transition-transform duration-300">
          <svg 
            className="absolute -left-4 -top-4 w-10 h-10 text-sage-300" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="relative z-20">
            "Our bodies are temples that need to be worshipped for all it endures inside out, and there is no time like today to truly care for its well-being."
          </span>
          <svg 
            className="absolute -right-4 -bottom-4 w-10 h-10 text-sage-300 transform rotate-180" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </blockquote>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="space-y-6 text-lg text-gray-700 md:pr-8">
        <p className="relative pl-8 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-sage-400">
          An amalgamation of deeply understood and well-curated physical, psychological, or spiritual activities — <span className="font-medium text-sage-700">Wellness's retreats</span> are going to bless you with a healed and healthy mind, body, and soul.
        </p>
        
        <div className="relative group mt-10">
          <div className="absolute -inset-2 bg-sage-100 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center rounded-xl overflow-hidden shadow-lg min-h-[300px]">
            <div className="absolute inset-0 bg-sage-800/40"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-playfair text-white font-bold mb-4">Begin Your Sacred Journey</h3>
              <button className="self-start px-6 py-3 bg-white text-sage-700 rounded-full font-medium hover:bg-sage-100 transition-all transform hover:scale-105 shadow-md flex items-center">
                Explore Retreats
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        {[
          {
            title: "Mindful Healing",
            description: "Discover tranquility through meditative and therapeutic practices, calming the mind and rejuvenating the spirit.",
            icon: (
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
            color: "bg-indigo-50/70",
            hover: "hover:border-indigo-200"
          },
          {
            title: "Holistic Treatments",
            description: "Personalized care with naturopathic and ayurvedic therapies that restore balance and vitality.",
            icon: (
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            ),
            color: "bg-amber-50/70",
            hover: "hover:border-amber-200"
          },
          {
            title: "Spiritual Awakening",
            description: "Engage in soulful activities that align body, mind, and soul — from yoga to nature therapy.",
            icon: (
              <svg className="w-8 h-8 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            ),
            color: "bg-purple-50/70",
            hover: "hover:border-purple-200"
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className={`${item.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent ${item.hover} group transform hover:-translate-y-2 flex items-start`}
          >
            <div className="w-12 h-12 mr-6 flex-shrink-0 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:bg-sage-50 transition-colors">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-sage-800 mb-3">{item.title}</h3>
              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="relative bg-sage-700 rounded-xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548602088-9d12a4f9c839?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 p-10 text-center">
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-sage-600/20 rounded-full backdrop-blur-sm">
          <svg className="w-8 h-8 text-sage-200" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
        </div>
        <p className="text-xl md:text-2xl italic text-sage-100 mb-8 leading-relaxed">
          "Every retreat at Wellness is crafted to offer not just relaxation but transformation — a deep connection to your true self and natural rhythm."
        </p>
        <button className="px-8 py-3 bg-white text-sage-700 rounded-full font-medium hover:bg-sage-100 transition-all transform hover:scale-105 shadow-md flex items-center mx-auto">
          Begin Your Transformation
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

      
       {/* First Section: Image Right, L shape top-right */}
    {/* Healing Abode */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <HeartPulse className="w-10 h-10 text-green-800" />
        <h2 className="text-3xl font-serif text-gray-700">Healing Abode</h2>
        <p className="text-gray-600 leading-relaxed">
          The wellness care at Wellness transcends beyond just the Wholesome Wellness
          Programs and True Treatments. The healing continues even when you are asleep…
        </p>
        <Link
          to="/naturopathy"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </div>

    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src="https://www.nimba.in/wp-content/uploads/2021/02/healing-abode-service.png"
          alt="Naturopathy Treatment"
          className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Recreation Spaces */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Trees className="w-10 h-10 text-green-800" />
        <h2 className="text-3xl font-serif text-gray-700">Recreation Spaces</h2>
        <p className="text-gray-600 leading-relaxed">
          “Give your body and soul a boost of energy with games and activities.” For a
          fruitful healing process, it is necessary to rejuvenate your mind and give your body a break.
        </p>
        <Link
          to="/holistic-healing"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          Read More
        </Link>
      </div>
    </div>

    <div className="md:w-1/2 -mr-[10%] relative z-10">
      <div className="relative">
        <img
          src="https://www.nimba.in/wp-content/uploads/2021/02/recreation-spaces-image.png"
          alt="Holistic Treatment"
          className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Meditation Caves */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Flower className="w-10 h-10 text-green-800" />
        <h2 className="text-3xl font-serif text-gray-700">Meditation Caves</h2>
        <p className="text-gray-600 leading-relaxed">
          “Release the entanglements in your mind and free the chaos within you.” Wellness Nature Cure and Holistic
          Healthcare Centre is in close connection with spirituality and the potential…
        </p>
        <Link
          to="/ayurveda"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          Discover More
        </Link>
      </div>
    </div>

    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src="https://www.nimba.in/wp-content/uploads/2021/02/meditation-caves-services.png"
          alt="Ayurvedic Treatment"
          className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Endocrine Disorders */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Leaf className="w-10 h-10 text-green-800" />
        <h2 className="text-3xl font-serif text-gray-700">Endocrine Disorders</h2>
        <p className="text-gray-600 leading-relaxed">
          The endocrine system is responsible for secreting our body’s hormones and regulating our entire body. These hormones, in turn, control the several…
        </p>
        <Link
          to="/yoga-meditation"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          Explore Practices
        </Link>
      </div>
    </div>

    <div className="md:w-1/2 -mr-[10%] relative z-10">
      <div className="relative">
        <img
          src="https://www.nimba.in/wp-content/uploads/2021/02/meditation-caves-services.png"
          alt="Yoga Meditation"
          className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Cardio Gym */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Dumbbell className="w-10 h-10 text-green-800" />
        <h2 className="text-3xl font-serif text-gray-700">Cardio Gym</h2>
        <p className="text-gray-600 leading-relaxed">
          A healthy mind and a healthy body are two sides of the same coin. At Wellness, we are committed
          to providing you with an assortment of experiences, all directed towards…
        </p>
        <Link
          to="/physiotherapy"
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          Learn About Treatments
        </Link>
      </div>
    </div>

    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src="https://www.nimba.in/wp-content/uploads/2021/02/cardio-gym-services-1-min.png"
          alt="Physiotherapy Session"
          className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>




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
    </div>
  );
};

export default Programs;