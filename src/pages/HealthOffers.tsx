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
    <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      In Healing, There Is a Power Beyond Our Understanding
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      "Our bodies are temples that need to be worshipped for all it endures inside out, and there is no time like today to truly care for its well-being."
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
        An amalgamation of deeply understood and well-curated physical, psychological, or spiritual activities — Wellness’s retreats are going to bless you with a healed and healthy mind, body, and soul.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Mindful Healing</h3>
        <p className="text-gray-600">
          Discover tranquility through meditative and therapeutic practices, calming the mind and rejuvenating the spirit.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Holistic Treatments</h3>
        <p className="text-gray-600">
          Personalized care with naturopathic and ayurvedic therapies that restore balance and vitality.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Spiritual Awakening</h3>
        <p className="text-gray-600">
          Engage in soulful activities that align body, mind, and soul — from yoga to nature therapy.
        </p>
      </div>
    </div>

    <div className="mt-12 bg-sage-50 p-6 rounded-lg border border-sage-100">
      <p className="text-gray-700 italic">
        "Every retreat at Wellness is crafted to offer not just relaxation but transformation — a deep connection to your true self and natural rhythm."
      </p>
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