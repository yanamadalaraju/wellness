// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Heart, Settings as Lungs, Zap, Brain, Bone, Flower } from 'lucide-react'

// const Treatments: React.FC = () => {
//   const treatmentCategories = [
//     {
//       icon: <Lungs className="w-8 h-8 text-sage-400" />,
//       title: "Respiratory Health",
//       description: "Natural treatments for breathing and lung health",
//       image: "https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "Asthma Management",
//           description: "Comprehensive natural approach to control asthma symptoms",
//           duration: "10-14 days",
//           techniques: ["Pranayama therapy", "Herbal steam therapy", "Dietary modifications", "Stress management"]
//         },
//         {
//           name: "Chronic Bronchitis",
//           description: "Holistic treatment for persistent respiratory inflammation",
//           duration: "14-21 days",
//           techniques: ["Ayurvedic medicines", "Chest physiotherapy", "Breathing exercises", "Lifestyle changes"]
//         },
//         {
//           name: "Allergic Rhinitis",
//           description: "Natural relief from seasonal and environmental allergies",
//           duration: "7-10 days",
//           techniques: ["Nasal irrigation", "Herbal treatments", "Immunity boosting", "Allergen avoidance"]
//         }
//       ]
//     },
//     {
//       icon: <Zap className="w-8 h-8 text-sage-400" />,
//       title: "Digestive Health",
//       description: "Restore gut health and digestive wellness",
//       image: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "IBS Management",
//           description: "Comprehensive approach to irritable bowel syndrome",
//           duration: "14-21 days",
//           techniques: ["Dietary therapy", "Stress reduction", "Probiotics", "Herbal medicines"]
//         },
//         {
//           name: "Acid Reflux Treatment",
//           description: "Natural healing for GERD and heartburn",
//           duration: "7-14 days",
//           techniques: ["Alkaline diet", "Lifestyle modifications", "Herbal remedies", "Yoga therapy"]
//         },
//         {
//           name: "Digestive Detox",
//           description: "Complete cleansing and restoration of digestive system",
//           duration: "5-10 days",
//           techniques: ["Juice cleanses", "Colon therapy", "Probiotic restoration", "Nutritional counseling"]
//         }
//       ]
//     },
//     {
//       icon: <Bone className="w-8 h-8 text-sage-400" />,
//       title: "Musculoskeletal Health",
//       description: "Natural solutions for joint and muscle wellness",
//       image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "Arthritis Care",
//           description: "Comprehensive treatment for joint inflammation and pain",
//           duration: "14-21 days",
//           techniques: ["Anti-inflammatory diet", "Therapeutic massage", "Yoga therapy", "Herbal treatments"]
//         },
//         {
//           name: "Back Pain Relief",
//           description: "Holistic approach to chronic back pain management",
//           duration: "10-14 days",
//           techniques: ["Spinal therapy", "Muscle relaxation", "Posture correction", "Strengthening exercises"]
//         },
//         {
//           name: "Sports Injury Recovery",
//           description: "Natural healing for athletic injuries and performance",
//           duration: "7-14 days",
//           techniques: ["Physiotherapy", "Ayurvedic treatments", "Nutrition therapy", "Recovery protocols"]
//         }
//       ]
//     },
//     {
//       icon: <Brain className="w-8 h-8 text-sage-400" />,
//       title: "Neurological Wellness",
//       description: "Mind-body treatments for neurological conditions",
//       image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "Migraine Treatment",
//           description: "Natural approach to chronic headache management",
//           duration: "10-14 days",
//           techniques: ["Trigger identification", "Herbal remedies", "Stress management", "Lifestyle changes"]
//         },
//         {
//           name: "Anxiety Management",
//           description: "Holistic treatment for anxiety and panic disorders",
//           duration: "14-21 days",
//           techniques: ["Meditation training", "Herbal medicine", "Counseling", "Relaxation techniques"]
//         },
//         {
//           name: "Sleep Disorders",
//           description: "Natural solutions for insomnia and sleep disturbances",
//           duration: "7-14 days",
//           techniques: ["Sleep hygiene", "Herbal treatments", "Relaxation therapy", "Lifestyle modifications"]
//         }
//       ]
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-sage-400" />,
//       title: "Cardiovascular Health",
//       description: "Natural heart health and circulation support",
//       image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "Hypertension Management",
//           description: "Natural approach to blood pressure control",
//           duration: "14-21 days",
//           techniques: ["Dietary therapy", "Stress reduction", "Exercise programs", "Herbal medicine"]
//         },
//         {
//           name: "Cholesterol Management",
//           description: "Natural methods to improve lipid profile",
//           duration: "21-28 days",
//           techniques: ["Nutritional therapy", "Lifestyle changes", "Exercise protocols", "Herbal treatments"]
//         },
//         {
//           name: "Heart Disease Prevention",
//           description: "Comprehensive program for cardiovascular wellness",
//           duration: "21-28 days",
//           techniques: ["Risk assessment", "Lifestyle modification", "Nutritional counseling", "Stress management"]
//         }
//       ]
//     },
//     {
//       icon: <Flower className="w-8 h-8 text-sage-400" />,
//       title: "Women's Health",
//       description: "Specialized treatments for women's wellness",
//       image: "https://images.pexels.com/photos/3822643/pexels-photo-3822643.jpeg?auto=compress&cs=tinysrgb&w=600",
//       treatments: [
//         {
//           name: "Hormonal Balance",
//           description: "Natural solutions for hormonal imbalances",
//           duration: "14-21 days",
//           techniques: ["Herbal medicine", "Nutritional therapy", "Lifestyle changes", "Stress management"]
//         },
//         {
//           name: "PCOS Management",
//           description: "Holistic approach to polycystic ovary syndrome",
//           duration: "21-28 days",
//           techniques: ["Dietary modifications", "Weight management", "Herbal treatments", "Stress reduction"]
//         },
//         {
//           name: "Menopause Support",
//           description: "Natural relief for menopausal symptoms",
//           duration: "14-21 days",
//           techniques: ["Hormone balancing", "Nutritional support", "Herbal remedies", "Lifestyle guidance"]
//         }
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
//             alt="True Treatments"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-overlay"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             True Treatments
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             Specialized healing protocols for specific health conditions
//           </p>
//         </div>
//       </section>

//       {/* Treatment Categories */}
//       <section className="section-padding bg-white">
//         <div className="container-max">
//           <div className="space-y-16">
//             {treatmentCategories.map((category, index) => (
//               <div key={index} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                 <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
//                   <img
//                     src={category.image}
//                     alt={category.title}
//                     className="w-full h-64 object-cover rounded-xl shadow-lg"
//                   />
//                 </div>
                
//                 <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
//                   <div className="flex items-center mb-4">
//                     {category.icon}
//                     <div className="ml-4">
//                       <h2 className="text-3xl font-playfair font-bold text-sage-600">
//                         {category.title}
//                       </h2>
//                       <p className="text-lg text-gray-600">
//                         {category.description}
//                       </p>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-6">
//                     {category.treatments.map((treatment, idx) => (
//                       <div key={idx} className="border-l-4 border-sage-400 pl-6">
//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
//                           <h3 className="text-xl font-playfair font-semibold text-sage-600">
//                             {treatment.name}
//                           </h3>
//                           <span className="text-sm text-sage-500 font-medium">
//                             {treatment.duration}
//                           </span>
//                         </div>
//                         <p className="text-gray-600 mb-3">{treatment.description}</p>
//                         <div className="flex flex-wrap gap-2">
//                           {treatment.techniques.map((technique, techIdx) => (
//                             <span
//                               key={techIdx}
//                               className="px-3 py-1 bg-sage-100 text-sage-600 text-sm rounded-full"
//                             >
//                               {technique}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Treatment Process */}
//       <section className="section-padding bg-sage-50">
//         <div className="container-max">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
//             Our Treatment Process
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-white font-bold text-xl">1</span>
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Initial Assessment
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Comprehensive evaluation of your health condition and medical history
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-white font-bold text-xl">2</span>
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Personalized Plan
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Customized treatment protocol designed specifically for your needs
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-white font-bold text-xl">3</span>
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Treatment Implementation
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Guided therapy sessions with our expert healing team
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-white font-bold text-xl">4</span>
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Follow-up Care
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Ongoing support and monitoring to ensure lasting results
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-sage-400 text-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//             Ready to Begin Your Healing Journey?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Our specialized treatments are designed to address your specific health concerns with natural, effective solutions.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/booking" className="btn-secondary">
//               Book Treatment
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

// export default Treatments






import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wind,
  HeartPulse,
  Bone,
HeartHandshake ,
  ShieldAlert,
  Heart,
  Droplet,
  
} from "lucide-react";
import imagehero from "../assets/resbanner.jpg";
import image1 from "../assets/respiratory.jpg";
import image2 from "../assets/gastro.jpg";
import image3 from "../assets/musclularimage.jpg";
import image4 from "../assets/nuts.jpg";
import image5 from "../assets/lifestyle.jpg";
import { useNavigate } from 'react-router-dom';

const Programs: React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={imagehero}
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Aromatherapy Healing Massage
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Wellness Nature Cure
          </p>
          <Link 
            to="/contact" 
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
                    <span className="text-sage-800 font-medium">True Treatments</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* New Content Section */}
   <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-cream-50">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-playfair font-bold text-sage-800 mb-6 relative">
        <span className="relative z-10">
          Experience <span className="text-sage-600">Authentic</span> Naturopathic Treatments
        </span>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-sage-400 opacity-80"></span>
      </h2>
      
      <div className="relative max-w-3xl mx-auto mt-10 mb-12">
        <blockquote className="text-2xl md:text-3xl font-playfair italic text-sage-700 relative z-10 px-8 py-6 bg-white rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
          <svg 
            className="absolute -left-4 -top-4 w-10 h-10 text-sage-200" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          "In any imbalance, there is always a path to <span className="text-sage-600 font-semibold">restoration</span>."
          <svg 
            className="absolute -right-4 -bottom-4 w-10 h-10 text-sage-200 transform rotate-180" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </blockquote>
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="space-y-6 text-lg text-gray-700">
        <p className="relative pl-8 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-sage-400">
          Our carefully curated, customized treatment plans are tailored to your unique constitution (Prakriti) 
          and current imbalances (Vikriti). At Wellness's Panchakarma Centre, we blend <span className="font-medium text-sage-700">ancient wisdom</span> with 
          modern understanding to create profound healing experiences.
        </p>
        
        <p className="relative pl-8 before:absolute before:left-0 before:top-3 before:h-2 before:w-2 before:rounded-full before:bg-sage-400">
          Each treatment protocol is designed to address <span className="font-medium text-sage-700">root causes</span> rather than symptoms, utilizing the 
          powerful five-fold purification process of Panchakarma supported by naturopathic therapies. 
          Your journey begins with thorough consultation and continues with personalized care at every step.
        </p>
      </div>
      
      <div className="relative group">
        <div className="absolute -inset-2 bg-sage-100 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
        <div className="relative h-full bg-[url('https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center rounded-xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-sage-800/40"></div>
          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-playfair text-white font-bold mb-4">Begin Your Healing Journey</h3>
            <p className="text-sage-100 mb-6">Experience the transformative power of authentic Panchakarma in our serene healing space.</p>
            <button className="self-start px-6 py-3 bg-white text-sage-700 rounded-full font-medium hover:bg-sage-100 transition-all transform hover:scale-105 shadow-md flex items-center">
              Book Consultation
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {[
        {
          title: "Personalized Panchakarma",
          description: "Deep cleansing therapies tailored to your doshic imbalance, including Abhyanga, Shirodhara, and Basti treatments.",
          icon: (
            <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          ),
          color: "bg-indigo-50",
          hover: "hover:border-indigo-200"
        },
        {
          title: "Naturopathic Healing",
          description: "Hydrotherapy, mud therapy, and fasting protocols to activate your body's innate healing intelligence.",
          icon: (
            <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          ),
          color: "bg-teal-50",
          hover: "hover:border-teal-200"
        },
        {
          title: "Post-Treatment Care",
          description: "Customized diet plans, lifestyle recommendations, and follow-up care to maintain your renewed vitality.",
          icon: (
            <svg className="w-10 h-10 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          ),
          color: "bg-amber-50",
          hover: "hover:border-amber-200"
        }
      ].map((item, index) => (
        <div 
          key={index} 
          className={`${item.color} p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent ${item.hover} group transform hover:-translate-y-2`}
        >
          <div className="w-14 h-14 mb-6 flex items-center justify-center bg-white rounded-full shadow-sm group-hover:bg-sage-50 transition-colors">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold text-sage-800 mb-4">{item.title}</h3>
          <p className="text-gray-600 mb-5">
            {item.description}
          </p>
          <a href="#" className="inline-flex items-center text-sage-600 font-medium group-hover:text-sage-700">
            Learn more
            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      ))}
    </div>

    <div className="relative bg-sage-700 rounded-xl overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 p-8 md:p-12 text-center">
        <svg className="w-12 h-12 mx-auto text-sage-300 mb-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </svg>
        <p className="text-xl italic text-sage-100 mb-6">
          "Therapy protocols are determined after comprehensive consultation and may include varying 
          combinations of treatments based on individual constitution and health concerns. Your journey 
          is as unique as you are."
        </p>
        <button className="px-8 py-3 bg-white text-sage-700 rounded-full font-medium hover:bg-sage-100 transition-all transform hover:scale-105 shadow-md">
          Discover Your Path
        </button>
      </div>
    </div>
  </div>
</section>

      {/* First Image-Text Section (Image right, text left) */}
      {/* <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          
          <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
            <div className="flex flex-col items-start space-y-6">
              <div className="text-4xl text-gray-500">🌿</div>
              <h2 className="text-3xl font-serif text-gray-700">
                Naturopathy wonders
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In this age of mainstream health care dictating the terms, it is
                difficult to realize the genuine, long-term benefits of traditional
                healing practices. There is no medicine as strong as the healing...
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
            <img
              src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
              alt="Naturopathy Treatment"
              className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
            />
          </div>
        </div>
      </section> */}

      {/* Second Image-Text Section (Image left, text right) */}
      {/* <section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
          
          <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
            <div className="flex flex-col items-start space-y-6">
              <div className="text-4xl text-gray-500">🌱</div>
              <h2 className="text-3xl font-serif text-gray-700">
                Holistic Healing
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our natural therapies work in harmony with your body's innate healing abilities to restore balance and vitality from within...
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
            <img
              src='https://www.Wellness.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
              alt="Holistic Treatment"
              className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
            />
          </div>
        </div>
      </section> */}

      
       {/* First Section: Image Right, L shape top-right */}
      {/* Respiratory Ailments */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Wind className="text-green-800 w-10 h-10" />
        <h2 className="text-3xl font-serif text-gray-700">
          Respiratory ailments
        </h2>
        <p className="text-gray-600 leading-relaxed">
          With the increase in toxic air elements, pollution, and smoking habits...
        </p>
        <Link to="/naturopathy" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Read More
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src= {image1}
          alt="Naturopathy Treatment"
          className="rounded shadow-[20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute top-0 right-0 w-20 h-20 border-t-[8px] border-r-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Gastro-intestinal Disorders */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Droplet className="text-green-800 w-10 h-10" />
        <h2 className="text-3xl font-serif text-gray-700">
          Gastro-intestinal disorders
        </h2>
        <p className="text-gray-600 leading-relaxed">
          A person’s gastro-intestine extends throughout the digestive tract...
        </p>
        <Link to="/holistic-healing" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Read More
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 -mr-[10%] relative z-10">
      <div className="relative">
        <img
          src={image2}
          alt="Holistic Treatment"
          className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Musculoskeletal Conditions */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Bone className="text-green-800 w-10 h-10" />
        <h2 className="text-3xl font-serif text-gray-700">
          Musculoskeletal conditions
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Your musculoskeletal system creates a wonderful framework...
        </p>
        <Link to="/ayurveda" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Discover More
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src={image3}
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
        <HeartHandshake  className="text-green-800 w-10 h-10" />
        <h2 className="text-3xl font-serif text-gray-700">
          Endocrine disorders
        </h2>
        <p className="text-gray-600 leading-relaxed">
          The endocrine system is responsible for secreting hormones and regulating...
        </p>
        <Link to="/yoga-meditation" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Explore Practices
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 -mr-[10%] relative z-10">
      <div className="relative">
        <img
          src={image4}
          alt="Yoga Meditation"
          className="rounded shadow-[-20px_20px_20px_-5px_rgba(0,0,0,0.1)] w-full"
        />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-[8px] border-l-[8px] border-green-800"></div>
      </div>
    </div>
  </div>
</section>

{/* Lifestyle Preventive Wellness */}
<section className="bg-[#f5f6f1] py-16 px-4 relative overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    <div className="bg-white shadow-xl p-10 md:w-1/2 rounded relative z-20">
      <div className="flex flex-col items-start space-y-6">
        <Heart className="text-green-800 w-10 h-10" />
        <h2 className="text-3xl font-serif text-gray-700">
          Lifestyle preventive wellness
        </h2>
        <p className="text-gray-600 leading-relaxed">
          In the era of technology and fast-paced lifestyle, it becomes very convenient...
        </p>
        <Link to="/physiotherapy" className="text-gray-400 hover:text-gray-600 transition-colors duration-200">
          Learn About Treatments
        </Link>
      </div>
    </div>
    <div className="md:w-1/2 -ml-[10%] relative z-10">
      <div className="relative">
        <img
          src={image5}
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
            <button 
      onClick={() => navigate('/contact')}
      className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md"
    >
      Heal Now
    </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;