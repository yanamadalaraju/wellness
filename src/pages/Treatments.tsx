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


const Programs: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1393416667/photo/cancer-patient-woman.jpg?s=612x612&w=0&k=20&c=3soR1X1MbWfFFyNuqxPKxtKoB1WdM0AuA0gQQMdCOOQ="
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
            At Nimba Nature Cure
          </p>
          <Link 
            to="/programs" 
            className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
          >
            Explore Our Programs
          </Link>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      Experience Best Naturopathic Treatments At Our Panchakarma Centre
    </h2>
    
    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      "In any imbalance, there is always a path to restoration."
    </blockquote>
    
    <div className="space-y-6 text-lg text-gray-700">
      <p>
        Our carefully curated, customized treatment plans are tailored to your unique constitution (Prakriti) 
        and current imbalances (Vikriti). At Nimba's Panchakarma Centre, we blend ancient wisdom with 
        modern understanding to create profound healing experiences.
      </p>
      
      <p>
        Each treatment protocol is designed to address root causes rather than symptoms, utilizing the 
        powerful five-fold purification process of Panchakarma supported by naturopathic therapies. 
        Your journey begins with thorough consultation and continues with personalized care at every step.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Personalized Panchakarma</h3>
        <p className="text-gray-600">
          Deep cleansing therapies tailored to your doshic imbalance, including Abhyanga, 
          Shirodhara, and Basti treatments.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Naturopathic Healing</h3>
        <p className="text-gray-600">
          Hydrotherapy, mud therapy, and fasting protocols to activate your body's innate healing intelligence.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Post-Treatment Care</h3>
        <p className="text-gray-600">
          Customized diet plans, lifestyle recommendations, and follow-up care to maintain your renewed vitality.
        </p>
      </div>
    </div>

    <div className="mt-12 bg-sage-50 p-6 rounded-lg border border-sage-100">
      <p className="text-gray-700 italic">
        "Therapy protocols are determined after comprehensive consultation and may include varying 
        combinations of treatments based on individual constitution and health concerns. Your journey 
        is as unique as you are."
      </p>
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
              src='https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
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
              src='https://www.nimba.in/wp-content/uploads/2020/12/Naturopathy-wonders-min.png'
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
          src="https://www.nimba.in/wp-content/uploads/2020/12/Respiratory-ailments-min-1.png"
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
          src="https://www.nimba.in/wp-content/uploads/2020/12/Gastro-intestinal-disorders-min-1.png"
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
          src="https://www.nimba.in/wp-content/uploads/2020/12/Musculoskeletal-Conditions-min.png"
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
          src="https://www.nimba.in/wp-content/uploads/2020/12/endocrine-disorders-min.png"
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
          src="https://www.nimba.in/wp-content/uploads/2020/12/Lifestyle-preventive-wellness-min.png"
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