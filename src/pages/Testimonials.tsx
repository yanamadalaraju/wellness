// import React, { useState } from 'react'
// import { Star, Play, Filter, Heart, Quote } from 'lucide-react'

// const Testimonials: React.FC = () => {
//   const [selectedFilter, setSelectedFilter] = useState('all')

//   const testimonials = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       location: "New York, USA",
//       image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Ayurveda Healing",
//       condition: "Stress & Anxiety",
//       testimonial: "This retreat completely transformed my life. I came here stressed, anxious, and exhausted from city life. The Ayurvedic treatments, combined with yoga and meditation, helped me find a peace I never knew was possible. Dr. Priya's personalized approach addressed not just my symptoms but the root causes of my stress. Three months later, I'm still practicing what I learned here.",
//       video: true,
//       featured: true
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       location: "California, USA",
//       image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Detox Program",
//       condition: "Digestive Issues",
//       testimonial: "After years of digestive problems that doctors couldn't solve, I found real healing here. The detox program was exactly what my body needed. The staff was incredibly knowledgeable and supportive throughout the process. I lost 15 pounds, my energy returned, and my digestion is better than it's been in years.",
//       video: false,
//       featured: false
//     },
//     {
//       id: 3,
//       name: "Emma Williams",
//       location: "London, UK",
//       image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Yoga & Meditation",
//       condition: "Depression",
//       testimonial: "I was skeptical about holistic healing, but this place changed my perspective completely. The yoga and meditation practices helped me work through deep-seated emotional issues. Sarah's guidance was gentle yet powerful. I learned tools that I use daily to maintain my mental health. This retreat gave me my life back.",
//       video: true,
//       featured: true
//     },
//     {
//       id: 4,
//       name: "David Rodriguez",
//       location: "Texas, USA",
//       image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Naturopathy",
//       condition: "Chronic Pain",
//       testimonial: "I've been dealing with chronic back pain for over a decade. Traditional medicine wasn't helping anymore. Dr. Chen's naturopathic approach was revolutionary. Through a combination of treatments, dietary changes, and lifestyle modifications, I'm now pain-free for the first time in years. The natural healing methods here are truly effective.",
//       video: false,
//       featured: false
//     },
//     {
//       id: 5,
//       name: "Lisa Thompson",
//       location: "Florida, USA",
//       image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Women's Wellness",
//       condition: "Hormonal Issues",
//       testimonial: "The women's wellness program was exactly what I needed during perimenopause. The holistic approach addressed my hormonal imbalances naturally. I feel more balanced, energetic, and confident than I have in years. The retreat environment was perfect for deep healing, and the staff made me feel truly cared for.",
//       video: false,
//       featured: false
//     },
//     {
//       id: 6,
//       name: "James Parker",
//       location: "Chicago, USA",
//       image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Stress Management",
//       condition: "Work Burnout",
//       testimonial: "I was on the verge of burnout when I came here. The stress management program taught me practical techniques that I could apply immediately. The meditation practices, breathing exercises, and lifestyle coaching helped me completely change my relationship with work and stress. I'm now more productive and much happier.",
//       video: true,
//       featured: true
//     },
//     {
//       id: 7,
//       name: "Maria Garcia",
//       location: "Arizona, USA",
//       image: "https://images.pexels.com/photos/1181664/pexels-photo-1181664.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Ayurveda Healing",
//       condition: "Autoimmune Issues",
//       testimonial: "Living with an autoimmune condition was exhausting. The Ayurvedic treatments here helped me understand my body's unique needs. The personalized herbal medicines, dietary recommendations, and lifestyle changes have significantly improved my symptoms. I have more energy and fewer flare-ups than I've had in years.",
//       video: false,
//       featured: false
//     },
//     {
//       id: 8,
//       name: "Robert Kim",
//       location: "Washington, USA",
//       image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=300",
//       rating: 5,
//       program: "Complete Wellness",
//       condition: "Overall Health",
//       testimonial: "The complete wellness program exceeded all my expectations. As someone who wanted to optimize their health preventatively, I found the comprehensive approach perfect. The combination of treatments, education, and lifestyle guidance gave me tools for lifelong wellness. This investment in my health was worth every penny.",
//       video: false,
//       featured: false
//     }
//   ]

//   const filters = [
//     { id: 'all', label: 'All Testimonials' },
//     { id: 'featured', label: 'Featured Stories' },
//     { id: 'video', label: 'Video Testimonials' },
//     { id: 'ayurveda', label: 'Ayurveda' },
//     { id: 'yoga', label: 'Yoga & Meditation' },
//     { id: 'detox', label: 'Detox Programs' },
//     { id: 'stress', label: 'Stress Management' }
//   ]

//   const filteredTestimonials = testimonials.filter(testimonial => {
//     if (selectedFilter === 'all') return true
//     if (selectedFilter === 'featured') return testimonial.featured
//     if (selectedFilter === 'video') return testimonial.video
//     if (selectedFilter === 'ayurveda') return testimonial.program.includes('Ayurveda')
//     if (selectedFilter === 'yoga') return testimonial.program.includes('Yoga')
//     if (selectedFilter === 'detox') return testimonial.program.includes('Detox')
//     if (selectedFilter === 'stress') return testimonial.program.includes('Stress')
//     return true
//   })

//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="The Healed Speaks"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-overlay"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             The Healed Speaks
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             Real stories of transformation from our wellness community
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="section-padding bg-white">
//         <div className="container-max">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <div className="text-4xl font-playfair font-bold text-sage-600 mb-2">500+</div>
//               <div className="text-gray-600">Happy Guests</div>
//             </div>
//             <div>
//               <div className="text-4xl font-playfair font-bold text-sage-600 mb-2">4.9/5</div>
//               <div className="text-gray-600">Average Rating</div>
//             </div>
//             <div>
//               <div className="text-4xl font-playfair font-bold text-sage-600 mb-2">98%</div>
//               <div className="text-gray-600">Would Recommend</div>
//             </div>
//             <div>
//               <div className="text-4xl font-playfair font-bold text-sage-600 mb-2">15+</div>
//               <div className="text-gray-600">Years of Excellence</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="section-padding bg-sage-50">
//         <div className="container-max">
//           <div className="text-center mb-8">
//             <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
//               Success Stories
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Read authentic testimonials from guests who have experienced transformation through our healing programs.
//             </p>
//           </div>
          
//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-2 mb-8">
//             {filters.map((filter) => (
//               <button
//                 key={filter.id}
//                 onClick={() => setSelectedFilter(filter.id)}
//                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
//                   selectedFilter === filter.id
//                     ? 'bg-sage-400 text-white'
//                     : 'bg-white text-sage-600 hover:bg-sage-100'
//                 }`}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
          
//           {/* Testimonials Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredTestimonials.map((testimonial) => (
//               <div key={testimonial.id} className="card relative">
//                 {testimonial.featured && (
//                   <div className="absolute top-4 right-4 bg-terracotta-400 text-white text-xs px-2 py-1 rounded-full">
//                     Featured
//                   </div>
//                 )}
                
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-sage-600">{testimonial.name}</h3>
//                     <p className="text-sm text-gray-500">{testimonial.location}</p>
//                   </div>
//                 </div>
                
//                 <div className="flex items-center mb-3">
//                   <div className="flex mr-2">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                     ))}
//                   </div>
//                   <span className="text-sm text-gray-600">
//                     {testimonial.program} • {testimonial.condition}
//                   </span>
//                 </div>
                
//                 <div className="relative mb-4">
//                   <Quote className="w-6 h-6 text-sage-300 absolute -top-2 -left-2" />
//                   <p className="text-gray-600 italic pl-4">
//                     "{testimonial.testimonial}"
//                   </p>
//                 </div>
                
//                 {testimonial.video && (
//                   <button className="flex items-center text-sage-600 hover:text-sage-700 font-medium">
//                     <Play className="w-4 h-4 mr-2" />
//                     Watch Video Testimonial
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Video Testimonials Section */}
//       <section className="section-padding bg-white">
//         <div className="container-max">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
//             Video Testimonials
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.filter(t => t.video).map((testimonial) => (
//               <div key={testimonial.id} className="card">
//                 <div className="relative mb-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-full h-48 object-cover rounded-lg"
//                   />
//                   <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
//                     <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-sage-100 transition-colors">
//                       <Play className="w-6 h-6 text-sage-600 ml-1" />
//                     </button>
//                   </div>
//                 </div>
                
//                 <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                   {testimonial.name}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-3">
//                   {testimonial.program} • {testimonial.condition}
//                 </p>
//                 <p className="text-gray-600 text-sm line-clamp-3">
//                   "{testimonial.testimonial.substring(0, 120)}..."
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-sage-400 text-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//             Ready to Write Your Success Story?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Join hundreds of others who have transformed their lives through our holistic healing programs.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/booking" className="btn-secondary">
//               Start Your Journey
//             </a>
//             <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
//               Get Free Consultation
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Testimonials



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
import VideoCarousel from '../components/VideoCarousel';
import TestimonialCarousel from '../components/TestimonialCarousel';

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
                    <span className="text-sage-800 font-medium">The Healed Speaks</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* New Content Section */}
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-sage-50">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-700 mb-6">
        Transformative Healing Journeys
      </h2>
      <div className="w-24 h-1.5 bg-sage-400 mx-auto mb-8"></div>
      <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
        Discover how our integrative approach to physiotherapy and stress management has helped our guests reclaim their vitality
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Testimonial Card */}
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-sage-100 transform transition hover:scale-[1.02] hover:shadow-xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-sage-800">Sarah K.</h4>
            <p className="text-sage-500">Chronic Back Pain Relief</p>
          </div>
        </div>
        <blockquote className="text-gray-700 italic text-lg border-l-4 border-sage-300 pl-6 py-2 mb-6">
          "After years of suffering, the team at Wellness gave me my life back. Their holistic approach addressed not just my pain but the stress that was making it worse."
        </blockquote>
        <div className="flex space-x-1 text-sage-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Features List */}
      <div>
        <h3 className="text-2xl font-playfair text-sage-700 mb-6">Our Healing Approach</h3>
        <ul className="space-y-4">
          {[
            "Personalized treatment plans combining physiotherapy and stress management",
            "Evidence-based techniques with ancient wellness traditions",
            "Mind-body connection focus for lasting results",
            "Non-invasive, drug-free pain relief solutions",
            "Emotional and physical healing in harmony"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-6 w-6 text-sage-500 mr-3 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Highlight Quote */}
    <div className="mt-16 bg-sage-600 p-8 md:p-10 rounded-2xl text-center text-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-sage-700 opacity-20"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-sage-800 opacity-20"></div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-sage-300 mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
      <blockquote className="text-xl md:text-2xl font-playfair italic mb-6 relative z-10">
        "Wellness didn't just treat my symptoms - they helped me understand and heal the root causes of my pain and stress. I've never felt more empowered in my health journey."
      </blockquote>
      <p className="font-semibold text-sage-200 relative z-10">— Michael T., Wellness Guest Since 2020</p>
    </div>
  </div>
</section>

<VideoCarousel />
<TestimonialCarousel />
      
    




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