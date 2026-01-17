// import React, { useState } from 'react';

// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/08/Wellness-nature-service-img.jpg',
//     content:
//       'Colon hydrotherapy is a gentle infusion of water into the colon to remove waste. It helps relieve constipation, improve digestion, and promote detoxification. This technique is used as a natural detox process and is highly effective for people suffering from chronic constipation, gas, and bloating.',
//     benefits: ['Improves digestion', 'Removes toxins', 'Boosts hydration'],
//   },
//   {
//     name: 'Manipulative Therapy',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/10/MANIPULATIVE_THERAPY.jpg',
//     content:
//       'Manipulative therapy involves manual techniques to alleviate musculoskeletal pain and improve mobility. It is commonly used in physiotherapy and chiropractic treatment. This therapy also helps restore joint function and reduce inflammation through controlled movements and pressure.',
//     benefits: ['Relieves pain', 'Improves mobility', 'Reduces stress'],
//   },
//   {
//     name: 'Enema',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/08/Wellness-nature-service-img.jpg',
//     content:
//       'Enema is used to clean the colon by injecting fluid into the rectum. It promotes bowel movements and treats constipation effectively. This therapy is a natural way to remove toxins and reset your digestive health, especially helpful during fasting or detoxification routines.',
//     benefits: [
//       'Removes stagnant fecal matter',
//       'Treats constipation',
//       'Boosts the absorption of nutrients',
//       'Cleanses the end part of your colon',
//     ],
//   },
//   {
//     name: 'Mud Pack',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/07/MUD_PACK.jpg',
//     content:
//       'Mud pack therapy uses natural mud applied to the body or specific areas to reduce inflammation, improve skin health, and relax the body. It is especially useful in managing acne, arthritis, and general fatigue through cooling and mineral absorption.',
//     benefits: ['Relieves pain', 'Improves skin texture', 'Cools the body'],
//   },
//   {
//     name: 'Vibro Massage',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/07/VIBRO_MASSAGE.jpg',
//     content:
//       'Vibro massage is a therapeutic technique using vibration to stimulate muscles and improve blood flow. It’s ideal for relaxation and rehabilitation. The gentle vibrations reduce muscle stiffness and are beneficial post-injury or surgery.',
//     benefits: ['Stimulates circulation', 'Relieves muscle tension', 'Promotes relaxation'],
//   },
// ];

// const TherapySection = () => {
//   const [selected, setSelected] = useState(therapies[2]); // Default: Enema

//   return (
//     <section className="bg-[#f3f4ee] py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Carousel Tabs */}
//         <div className="overflow-x-auto no-scrollbar flex justify-center">
//           <div className="flex space-x-4 pb-4 snap-x snap-mandatory px-2">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`snap-center whitespace-nowrap px-6 py-3 text-lg rounded-full font-semibold transition-all duration-300 ${
//                   selected.name === therapy.name
//                     ? 'bg-[#5e6c3f] text-white'
//                     : 'bg-[#adb29e] text-white'
//                 }`}
//               >
//                 {therapy.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Overlapping Image */}
//         <div className="relative z-10 flex justify-center mt-10 mb-[-120px]">
//           <img
//             src={selected.image}
//             alt={selected.name}
//             className="w-full max-w-5xl rounded-xl shadow-2xl"
//           />
//         </div>

//         {/* Content */}
        
//         <div className="bg-white mt-[-40px] pt-36 pb-14 px-10 md:px-16  shadow-xl grid md:grid-cols-2 gap-10 relative z-0">
//           {/* Text Content */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">{selected.name}</h2>
//             <p className="text-gray-700 text-lg leading-relaxed">{selected.content}</p>
//           </div>

//           {/* Benefits List */}
//           <div className="flex flex-col gap-4">
//             {selected.benefits.map((benefit, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#e2e5d8] text-gray-800 px-5 py-3 rounded-full inline-block text-base font-medium shadow-sm"
//               >
//                 ✓ {benefit}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;


// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';

// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     content:
//       'A gentle infusion of purified water into the colon to remove accumulated waste, toxins, and gas. This advanced detoxification therapy improves digestion, enhances nutrient absorption, and promotes overall vitality.',
//     benefits: [
//       'Enhances digestive efficiency',
//       'Eliminates toxic buildup',
//       'Improves hydration at cellular level',
//       'Boosts immune system function'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Manipulative Therapy',
//     image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     content:
//       'Expert manual techniques performed by our certified therapists to realign musculoskeletal structures, relieve tension, and restore optimal movement patterns for pain-free living.',
//     benefits: [
//       'Alleviates chronic pain',
//       'Restores joint mobility',
//       'Improves posture alignment',
//       'Reduces muscle tension'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Detox Enema',
//     image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     content:
//       'A therapeutic cleansing procedure using specialized solutions to gently flush the lower colon, removing impacted waste and promoting optimal digestive function in our serene treatment environment.',
//     benefits: [
//       'Cleanses intestinal walls',
//       'Stimulates peristaltic action',
//       'Enhances nutrient assimilation',
//       'Reduces bloating and discomfort'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: 'Therapeutic Mud Pack',
//     image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     content:
//       'Our signature mineral-rich mud application draws out impurities, reduces inflammation, and nourishes the skin while providing deep therapeutic benefits for joints and muscles.',
//     benefits: [
//       'Detoxifies through skin',
//       'Reduces inflammatory markers',
//       'Improves skin elasticity',
//       'Relieves arthritic discomfort'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Vibroacoustic Massage',
//     image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
//     content:
//       'A cutting-edge therapy combining vibrational frequencies with therapeutic massage to release deep-seated tension, improve circulation, and promote cellular regeneration.',
//     benefits: [
//       'Breaks down fascial adhesions',
//       'Enhances lymphatic drainage',
//       'Reduces cortisol levels',
//       'Improves range of motion'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// const iconComponents = {
//   water: FaWater,
//   leaf: FaLeaf,
//   spa: FaSpa,
//   hands: FaHandsHelping
// };

// const TherapySection = () => {
//   const [selected, setSelected] = useState(therapies[2]);
//   const [isHovering, setIsHovering] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-24 px-4 md:px-8 overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <span className="inline-block mb-4 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Therapeutic Experiences
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-4">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Signature Therapies</span>
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Scientifically-backed natural treatments delivered with compassionate care
//           </p>
//         </div>

//         {/* Therapy Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                   selected.name === therapy.name
//                     ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
//                     : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
//                 }`}
//               >
//                 {therapy.icon}
//                 {therapy.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Therapy Content */}
//         <div className="relative">
//           {/* Floating image */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="relative z-10 flex justify-center -mb-28"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//               <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl">
//                 <div className="aspect-w-16 aspect-h-9 overflow-hidden">
//                   <motion.img
//                     src={selected.image}
//                     alt={selected.name}
//                     className="w-full h-full object-cover"
//                     animate={{
//                       scale: isHovering ? 1.05 : 1,
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-8 text-white">
//                   <h3 className="text-2xl font-bold">{selected.name}</h3>
//                   <p className="text-sage-100">Premium Wellness Treatment</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Content panel */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name + "content"}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative bg-white/90 backdrop-blur-sm border border-gray-100 mt-24 pt-32 pb-16 px-8 md:px-16 rounded-3xl shadow-xl"
//             >
//               <div className="grid md:grid-cols-2 gap-12">
//                 {/* Description */}
//                 <div>
//                   <h3 className="text-3xl font-bold font-playfair text-gray-900 mb-6">
//                     About {selected.name}
//                   </h3>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {selected.content}
//                   </p>
//                   <button className="mt-8 px-6 py-3 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2">
//                     Book This Treatment
//                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>

//                 {/* Benefits */}
//                 <div>
//                   <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
//                     <FaCheckCircle className="text-sage-500" />
//                     Key Benefits
//                   </h4>
//                   <ul className="space-y-4">
//                     {selected.benefits.map((benefit, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3 + idx * 0.1 }}
//                         className="flex items-start gap-3 bg-sage-50/50 px-5 py-4 rounded-xl text-gray-800 border border-sage-100 hover:border-sage-200 transition-colors"
//                       >
//                         <svg className="w-5 h-5 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span className="font-medium">{benefit}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;






// import React, { useState } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import hydrocolon from '../assets/hydrocolon.jpg';
// import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
// import enema from '../assets/enema.jpg';
// // import mudPack from '../assets/mudpack.jpg';
// import vibroacoustic from '../assets/vibrotictherapy.jpg';




// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: hydrocolon,
//     content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within. At Nowal NatureCare, this holistic treatment supports the bodys natural detoxification process, offering a range of health benefits that go beyond digestion.',
//     benefits: [
//       'Deeply cleanses the Large Intestine',
//       'Helps maintain optimal pH balance',
//       'Reduces fatigue and sluggishness',
//       'Enhances digestive efficiency',
//       'Aids in weight management and boosts energy levels'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Hands-on Therapy',
//     image: manipulativeTherapy,
//     content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being. At Nowal NatureCare, this therapeutic process involves the rhythmic massage and pressing of muscles and soft tissues using a variety of scientific techniques tailored to your needs.',
//     benefits: [
//       'Alleviates stress and muscle stiffness',
//       'Enhances metabolic function',
//       'Tones and relaxes muscles',
//       ' Improves blood flow and circulation',
//       'Promotes a youthful glow and boosts energy'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: ' Enema',
//     image: enema,
//     content: 'Healthy bowel movements are essential for the bodys overall functioning and balance. When this natural process is disrupted, Enema therapy offers an effective solution to restore digestive regularity. At Nowal NatureCare, enema treatments are tailored to your health condition and may include normal, neutral, warm, or herb-infused water. In this therapy, a gentle infusion of natural liquid into the rectum stimulates stool evacuation and relieves even chronic constipation.',
//     benefits: [
//       'Eliminates accumulated waste from the colon',
//       'Effectively treats constipation',
//       'Enhances nutrient absorption',
//       'Cleanses the lower digestive tract'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: ' Mud Pack',
//     image: "https://i.pinimg.com/736x/92/0e/04/920e04a658b79a2f734039e34729df90.jpg",
//     content: 'Mud, one of natures vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body. At Nowal NatureCare, our carefully curated mud pack treatments go beyond expectations—this is the essence of naturopathy. The treatment draws out harmful toxins, deeply cleansing and revitalizing the body.',
//     benefits: [
//       'Helps regulate body temperature',
//       'Supports digestive health',
//       'Eases headaches and tension',
//       'Nourishes and refreshes the skin',
//       ' Acts as a natural cooling agent'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Vibro Massage',
//     image: vibroacoustic,
//     content: 'Vibro Massage an advanced naturopathic treatment combines the benefits of high-tech vibratory therapy to target the entire body or specific tension points with powder of floor of grains.',
//     benefits: [
//       'Relaxes and tones deep muscle layers',
//       'Enhances blood circulation',
//       'Reduces cortisol levels',
//       'Eases stress, pain, and physical fatigue'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// const TherapySection = () => {
//   const [selected, setSelected] = useState(therapies[2]);
//   const [isHovering, setIsHovering] = useState(false);

//   return (
//     <section className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Therapeutic Experiences
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Signature Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Scientifically-backed natural treatments delivered with compassionate care
//           </p>
//         </div>

//         {/* Therapy Navigation */}
//        <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                   selected.name === therapy.name
//                     ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
//                     : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
//                 }`}
//               >
//                 {therapy.icon}
//                 {therapy.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Therapy Content */}
//         <div className="relative">
//           {/* Fixed-size image container */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="relative z-10 flex justify-center mb-6 md:-mb-20"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//              <div className="relative w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
//   <motion.img
//     src={selected.image}
//     alt={selected.name}
//     className="w-full h-full object-cover"
//     animate={{
//       scale: isHovering ? 1.05 : 1,
//     }}
//     transition={{ duration: 0.5 }}
//   />
//   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//   <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
//     <h3 className="text-xl md:text-2xl font-bold">{selected.name}</h3>
//     <p className="text-sage-100 text-sm md:text-base">Premium Nowal Treatment</p>
//   </div>
// </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Content panel */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name + "content"}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10 rounded-2xl shadow-lg"
//             >
//               <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//                 {/* Description */}
//                 <div>
//                   <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
//                     About {selected.name}
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     {selected.content}
//                   </p>
//                   {/* <button className="px-5 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">
//                     Book This Treatment
//                     <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button> */}
//                 </div>

//                 {/* Benefits */}
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                     <FaCheckCircle className="text-sage-500" />
//                     Key Benefits
//                   </h4>
//                   <ul className="space-y-3">
//                     {selected.benefits.map((benefit, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3 + idx * 0.1 }}
//                         className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-gray-800 border border-sage-100 hover:border-sage-200 transition-colors text-sm"
//                       >
//                         <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span>{benefit}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;







// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom'; // Import useLocation
// import hydrocolon from '../assets/hydrocolon.jpg';
// import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
// import enema from '../assets/enema.jpg';
// // import mudPack from '../assets/mudpack.jpg';
// import vibroacoustic from '../assets/vibrotictherapy.jpg';

// // Map therapy names from URL to actual therapy names
// const therapyNameMap = {
//   'mud-pack': 'Mud Pack',
//   'colon-hydrotherapy': 'Colon Hydrotherapy',
//   'hands-on-therapy': 'Hands-on Therapy',
//   'enema': 'Enema',
//   'vibro-massage': 'Vibro Massage'
// };

// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: hydrocolon,
//     content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within. At Nowal NatureCare, this holistic treatment supports the bodys natural detoxification process, offering a range of health benefits that go beyond digestion.',
//     benefits: [
//       'Deeply cleanses the Large Intestine',
//       'Helps maintain optimal pH balance',
//       'Reduces fatigue and sluggishness',
//       'Enhances digestive efficiency',
//       'Aids in weight management and boosts energy levels'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Hands-on Therapy',
//     image: manipulativeTherapy,
//     content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being. At Nowal NatureCare, this therapeutic process involves the rhythmic massage and pressing of muscles and soft tissues using a variety of scientific techniques tailored to your needs.',
//     benefits: [
//       'Alleviates stress and muscle stiffness',
//       'Enhances metabolic function',
//       'Tones and relaxes muscles',
//       ' Improves blood flow and circulation',
//       'Promotes a youthful glow and boosts energy'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Enema',
//     image: enema,
//     content: 'Healthy bowel movements are essential for the bodys overall functioning and balance. When this natural process is disrupted, Enema therapy offers an effective solution to restore digestive regularity. At Nowal NatureCare, enema treatments are tailored to your health condition and may include normal, neutral, warm, or herb-infused water. In this therapy, a gentle infusion of natural liquid into the rectum stimulates stool evacuation and relieves even chronic constipation.',
//     benefits: [
//       'Eliminates accumulated waste from the colon',
//       'Effectively treats constipation',
//       'Enhances nutrient absorption',
//       'Cleanses the lower digestive tract'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: 'Mud Pack',
//     image: "https://i.pinimg.com/736x/92/0e/04/920e04a658b79a2f734039e34729df90.jpg",
//     content: 'Mud, one of natures vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body. At Nowal NatureCare, our carefully curated mud pack treatments go beyond expectations—this is the essence of naturopathy. The treatment draws out harmful toxins, deeply cleansing and revitalizing the body.',
//     benefits: [
//       'Helps regulate body temperature',
//       'Supports digestive health',
//       'Eases headaches and tension',
//       'Nourishes and refreshes the skin',
//       ' Acts as a natural cooling agent'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Vibro Massage',
//     image: vibroacoustic,
//     content: 'Vibro Massage an advanced naturopathic treatment combines the benefits of high-tech vibratory therapy to target the entire body or specific tension points with powder of floor of grains.',
//     benefits: [
//       'Relaxes and tones deep muscle layers',
//       'Enhances blood circulation',
//       'Reduces cortisol levels',
//       'Eases stress, pain, and physical fatigue'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// const TherapySection = () => {
//   const location = useLocation();
//   const [selected, setSelected] = useState(therapies[2]);
//   const [isHovering, setIsHovering] = useState(false);

//   // Function to get URL parameters
//   const getQueryParams = () => {
//     const params = new URLSearchParams(location.search);
//     return Object.fromEntries(params.entries());
//   };

//   // Function to find therapy by name
//   const findTherapyByName = (name) => {
//     // First try exact match
//     let therapy = therapies.find(t => t.name.toLowerCase() === name.toLowerCase());
    
//     // If not found, try mapped names
//     if (!therapy) {
//       const mappedName = therapyNameMap[name];
//       if (mappedName) {
//         therapy = therapies.find(t => t.name === mappedName);
//       }
//     }
    
//     return therapy;
//   };

//   // Set initial therapy based on URL parameter
//   useEffect(() => {
//     const params = getQueryParams();
//     if (params.therapy) {
//       const therapyFromUrl = findTherapyByName(params.therapy);
//       if (therapyFromUrl) {
//         setSelected(therapyFromUrl);
        
//         // Optional: Scroll to the therapy section when loaded
//         setTimeout(() => {
//           const element = document.getElementById('therapy-section');
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//           }
//         }, 100);
//       }
//     }
//   }, [location.search]);

//   return (
//     <section id="therapy-section" className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Therapeutic Experiences
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Signature Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Scientifically-backed natural treatments delivered with compassionate care
//           </p>
//         </div>

//         {/* Therapy Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100 overflow-x-auto">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
//                   selected.name === therapy.name
//                     ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
//                     : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
//                 }`}
//               >
//                 {therapy.icon}
//                 {therapy.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Rest of your component remains the same */}
//         <div className="relative">
//           {/* Fixed-size image container */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="relative z-10 flex justify-center mb-6 md:-mb-20"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//               <div className="relative w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
//                 <motion.img
//                   src={selected.image}
//                   alt={selected.name}
//                   className="w-full h-full object-cover"
//                   animate={{
//                     scale: isHovering ? 1.05 : 1,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
//                   <h3 className="text-xl md:text-2xl font-bold">{selected.name}</h3>
//                   <p className="text-sage-100 text-sm md:text-base">Premium Nowal Treatment</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Content panel */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name + "content"}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10 rounded-2xl shadow-lg"
//             >
//               <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//                 {/* Description */}
//                 <div>
//                   <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
//                     About {selected.name}
//                   </h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     {selected.content}
//                   </p>
//                 </div>

//                 {/* Benefits */}
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                     <FaCheckCircle className="text-sage-500" />
//                     Key Benefits
//                   </h4>
//                   <ul className="space-y-3">
//                     {selected.benefits.map((benefit, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3 + idx * 0.1 }}
//                         className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-gray-800 border border-sage-100 hover:border-sage-200 transition-colors text-sm"
//                       >
//                         <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span>{benefit}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;






// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// import hydrocolon from '../assets/hydrocolon.jpg';
// import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
// import enema from '../assets/enema.jpg';
// import vibroacoustic from '../assets/vibrotictherapy.jpg';

// /* ---------------- URL NAME MAP ---------------- */
// const therapyNameMap: Record<string, string> = {
//   'mud-pack': 'Mud Pack',
//   'colon-hydrotherapy': 'Colon Hydrotherapy',
//   'hands-on-therapy': 'Hands-on Therapy',
//   'enema': 'Enema',
//   'vibro-massage': 'Vibro Massage'
// };

// /* ---------------- THERAPY DATA ---------------- */
// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: hydrocolon,
//     content:
//       'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within.',
//     benefits: [
//       'Deeply cleanses the Large Intestine',
//       'Helps maintain optimal pH balance',
//       'Reduces fatigue and sluggishness',
//       'Enhances digestive efficiency',
//       'Aids in weight management and boosts energy levels'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Hands-on Therapy',
//     image: manipulativeTherapy,
//     content:
//       'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being.',
//     benefits: [
//       'Alleviates stress and muscle stiffness',
//       'Enhances metabolic function',
//       'Tones and relaxes muscles',
//       'Improves blood flow and circulation',
//       'Promotes a youthful glow and boosts energy'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Enema',
//     image: enema,
//     content:
//       'Healthy bowel movements are essential for the body’s overall functioning. Enema therapy restores digestive regularity through gentle cleansing techniques.',
//     benefits: [
//       'Eliminates accumulated waste from the colon',
//       'Effectively treats constipation',
//       'Enhances nutrient absorption',
//       'Cleanses the lower digestive tract'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: 'Mud Pack',
//     image: 'https://i.pinimg.com/736x/92/0e/04/920e04a658b79a2f734039e34729df90.jpg',
//     content:
//       'Mud, one of nature’s vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body.',
//     benefits: [
//       'Helps regulate body temperature',
//       'Supports digestive health',
//       'Eases headaches and tension',
//       'Nourishes and refreshes the skin',
//       'Acts as a natural cooling agent'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Vibro Massage',
//     image: vibroacoustic,
//     content:
//       'Vibro Massage is an advanced naturopathic therapy using vibratory stimulation to relax muscles and reduce stress.',
//     benefits: [
//       'Relaxes and tones deep muscle layers',
//       'Enhances blood circulation',
//       'Reduces cortisol levels',
//       'Eases stress, pain, and fatigue'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// /* -------- FULL CONTENT (ONLY FOR 2 TABS) -------- */
// const fullTherapyContent: Record<string, string> = {
//   'Hands-on Therapy': `
// Hands-on Therapy, commonly known as Massage Therapy, is one of the most fundamental and revered therapeutic practices in holistic and natural medicine. This therapy involves the systematic application of skilled manual techniques using the hands to work on soft tissues, muscles, joints, and functional pathways of the body, promoting physical relaxation and physiological balance.
// In naturopathy, therapeutic touch is regarded as a powerful healing medium capable of positively influencing circulation, nervous system regulation, musculoskeletal function, and overall body equilibrium. Hands-on therapy stimulates blood and lymphatic flow, enhances tissue nourishment, supports the natural elimination of metabolic waste, and assists in releasing accumulated physical and emotional tension.
// This therapy works by engaging the body with natural elements—the Earth element through grounding touch and nourishing oils, the Water element through gentle hydro-massage techniques, and, when indicated, the Fire element through controlled warmth such as heated stones or the Air element through guided breathing and rhythmic movements. Together, these elements act synergistically to calm the nervous system, improve circulation, and support the body’s inherent healing response.
// Within the principles of nature cure and naturopathy, massage therapy is recognized as an essential supportive treatment for maintaining vitality and preventing disease. Regular hands-on therapy helps strengthen the body, improve flexibility, enhance mental clarity, and promote deep relaxation by activating the body’s innate self-regulating and restorative mechanisms, making it an integral component of comprehensive wellness care.
// Clinically and therapeutically, hands-on massage therapy has demonstrated benefits in the management of:
// •	Musculoskeletal pain, stiffness, and fatigue
// •	Stress, anxiety, and nervous system dysregulation
// •	Circulatory and lymphatic congestion
// •	Sleep disturbances and fatigue syndromes
// •	Joint disorders and postural imbalances
// •	General debility and age-related degeneration

// Therapeutic Approaches in Hands-On Therapy
// At NNC, hands-on therapies are delivered by trained therapists under medical and wellness supervision, following a comprehensive assessment of the guest’s constitution (Prakṛti), current imbalance (Vikṛti), and therapeutic goals. The key modalities include:
// •	Full-Body Therapeutic Massage – Rhythmic, synchronized strokes using medicated oils to nourish tissues and calm the nervous system
// •	Localized / Partial Massage – Focused application to specific areas of pain or dysfunction
// •	Deep Tissue & Musculoskeletal Techniques – Applied were indicated to relieve chronic tension and restricted mobility
// •	Relaxation & Rejuvenation Massage – Gentle techniques to promote mental relaxation and emotional balance
// Each session is customized with appropriate herbal oils, pressure, rhythm, and duration, ensuring safe, effective, and deeply restorative outcomes.
// Hands-on therapies at NNC:
// Soothing oil massage
// Hot stone therapy
// Salt Glow therapy
// Partial oil therapies
// Vibro Massage
// Deep Tissue Massage 
// Therapeutic Intent
// Hands-on therapy at NNC is not merely a physical intervention; it is a conscious healing dialogue between therapist and body, designed to restore balance, vitality, and inner harmony.

// `,

//   'Mud Pack': `
// Mud therapy, traditionally known as Mr̥ttikā Cikitsā and scientifically referred to as Pelotherapy, is a time-honoured therapeutic modality rooted in natural medicine and integral part of naturopathy treatment. Mud, derived from the earth, represents one of the five fundamental elements (Pancha Mahabhuta) and is valued for its cooling, detoxifying, anti-inflammatory, and grounding properties.
// Therapeutically prepared natural mud acts as a powerful medium to absorb toxins, regulate body temperature, improve circulation, and calm the nervous system. Its application helps restore physiological balance by reducing excess heat, inflammation, and stress within the body.
// Mud therapy has been extensively described in classical Ayurvedic literature, including the Sushruta Samhita, Harita Samhita, and the ancient Vedic texts, where earth-based therapies are recommended for both preventive and curative healthcare. Across India and many parts of the world, mud baths and applications have been practiced for centuries as effective natural interventions for a wide range of health conditions.
// Clinically, mud therapy has shown beneficial effects in the management of:
// •	Hypertension and stress-related disorders
// •	Anxiety and psychosomatic conditions
// •	Musculoskeletal disorders and joint stiffness
// •	Hormonal imbalances
// •	Certain neurological conditions
// •	Chronic skin ailments and inflammatory disorders

// Types of Mud Therapy
// At NNC, mud therapy is administered under the guidance of qualified wellness consultants and physicians, following individual assessment and therapeutic indication. The commonly practiced forms include:
// •	Mud Bath – Full-body application to promote detoxification, cooling, and relaxation
// •	Mud Packs – Localized application over specific body parts for targeted therapeutic effects
// •	Partial Mud Application – Applied to selected regions based on clinical need
// •	Hot Mud Application – Used selectively to relieve chronic stiffness and musculoskeletal discomfort
// Each therapy is customized according to the guest’s body constitution, health condition, and wellness goals, ensuring both safety and optimal therapeutic benefit.

// `
// };

// const TherapySection = () => {
//   const location = useLocation();
//   const [selected, setSelected] = useState(therapies[0]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* -------- RESET EXPAND ON TAB CHANGE -------- */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

//   /* -------- URL PARAM SUPPORT -------- */
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const therapyParam = params.get('therapy');
//     if (therapyParam) {
//       const mappedName = therapyNameMap[therapyParam] || therapyParam;
//       const found = therapies.find(
//         t => t.name.toLowerCase() === mappedName.toLowerCase()
//       );
//       if (found) setSelected(found);
//     }
//   }, [location.search]);

//   return (
//     <section
//       id="therapy-section"
//       className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Our <span className="text-sage-600">Signature Therapies</span>
//           </h2>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex bg-white rounded-full p-1 shadow">
//             {therapies.map(t => (
//               <button
//                 key={t.name}
//                 onClick={() => setSelected(t)}
//                 className={`px-6 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition ${
//                   selected.name === t.name
//                     ? 'bg-sage-600 text-white'
//                     : 'text-gray-700 hover:bg-sage-50'
//                 }`}
//               >
//                 {t.icon}
//                 {t.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selected.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="flex justify-center mb-10"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="w-full max-w-4xl h-64 rounded-2xl overflow-hidden shadow-lg">
//               <motion.img
//                 src={selected.image}
//                 alt={selected.name}
//                 className="w-full h-full object-cover"
//                 animate={{ scale: isHovering ? 1.05 : 1 }}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Content */}
//         <div className="bg-white rounded-2xl shadow-lg p-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-4">
//                 About {selected.name}
//               </h3>

//               <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
//                 {expanded && fullTherapyContent[selected.name]
//                   ? selected.content + fullTherapyContent[selected.name]
//                   : selected.content}
//               </p>

//               {/* Learn More button */}
//               {fullTherapyContent[selected.name] && (
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="text-sage-600 font-medium hover:underline"
//                 >
//                   {expanded ? 'Show Less ▲' : 'Learn More ▼'}
//                 </button>
//               )}
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                 <FaCheckCircle className="text-sage-500" />
//                 Key Benefits
//               </h4>
//               <ul className="space-y-3">
//                 {selected.benefits.map((b, i) => (
//                   <li
//                     key={i}
//                     className="flex gap-3 bg-sage-50 px-4 py-3 rounded-lg text-sm"
//                   >
//                     <FaCheckCircle className="text-sage-500 mt-1" />
//                     {b}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;






// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// import hydrocolon from '../assets/hydrocolon.jpg';
// import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
// import enema from '../assets/enema.jpg';
// import vibroacoustic from '../assets/vibrotictherapy.jpg';
// import mudPackImage from '../assets/mudpackimage.jpg'; // Make sure you have this image

// /* ---------------- URL TO THERAPY MAPPING ---------------- */
// const urlToTherapyMap: Record<string, string> = {
//   // Mud Therapy variations
//   'mud-pack': 'Mud Pack',
//   'mud-therapy': 'Mud Pack',
//   'mud': 'Mud Pack',
  
//   // Hydro Therapy variations
//   'colon-hydrotherapy': 'Colon Hydrotherapy',
//   'hydro-therapy': 'Colon Hydrotherapy',
//   'hydrotherapy': 'Colon Hydrotherapy',
//   'colon': 'Colon Hydrotherapy',
  
//   // Massage Therapy variations
//   'hands-on-therapy': 'Hands-on Therapy',
//   'massage-therapy': 'Hands-on Therapy',
//   'massage': 'Hands-on Therapy',
//   'hands-on': 'Hands-on Therapy',
  
//   // Physiotherapy variations
//   'physiotherapy': 'Hands-on Therapy', // Maps to Hands-on Therapy
//   'physical-therapy': 'Hands-on Therapy',
  
//   // Other therapies
//   'enema': 'Enema',
//   'vibro-massage': 'Vibro Massage',
//   'vibro': 'Vibro Massage',
//   'vibroacoustic': 'Vibro Massage'
// };

// /* ---------------- THERAPY DATA ---------------- */
// const therapies = [
//   {
//     name: 'Mud Pack',
//     image: mudPackImage, // Use your mud pack image
//     content: 'Mud, one of nature\'s vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body.',
//     benefits: [
//       'Helps regulate body temperature',
//       'Supports digestive health',
//       'Eases headaches and tension',
//       'Nourishes and refreshes the skin',
//       'Acts as a natural cooling agent'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Colon Hydrotherapy',
//     image: hydrocolon,
//     content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within.',
//     benefits: [
//       'Deeply cleanses the Large Intestine',
//       'Helps maintain optimal pH balance',
//       'Reduces fatigue and sluggishness',
//       'Enhances digestive efficiency',
//       'Aids in weight management and boosts energy levels'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Hands-on Therapy',
//     image: manipulativeTherapy,
//     content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being.',
//     benefits: [
//       'Alleviates stress and muscle stiffness',
//       'Enhances metabolic function',
//       'Tones and relaxes muscles',
//       'Improves blood flow and circulation',
//       'Promotes a youthful glow and boosts energy'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Enema',
//     image: enema,
//     content: 'Healthy bowel movements are essential for the body\'s overall functioning. Enema therapy restores digestive regularity through gentle cleansing techniques.',
//     benefits: [
//       'Eliminates accumulated waste from the colon',
//       'Effectively treats constipation',
//       'Enhances nutrient absorption',
//       'Cleanses the lower digestive tract'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: 'Vibro Massage',
//     image: vibroacoustic,
//     content: 'Vibro Massage is an advanced naturopathic therapy using vibratory stimulation to relax muscles and reduce stress.',
//     benefits: [
//       'Relaxes and tones deep muscle layers',
//       'Enhances blood circulation',
//       'Reduces cortisol levels',
//       'Eases stress, pain, and fatigue'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// /* -------- FULL CONTENT (FOR EXPANDABLE SECTIONS) -------- */
// const fullTherapyContent: Record<string, string> = {
//   'Hands-on Therapy': `
// Hands-on Therapy, commonly known as Massage Therapy, is one of the most fundamental and revered therapeutic practices in holistic and natural medicine. This therapy involves the systematic application of skilled manual techniques using the hands to work on soft tissues, muscles, joints, and functional pathways of the body, promoting physical relaxation and physiological balance.

// In naturopathy, therapeutic touch is regarded as a powerful healing medium capable of positively influencing circulation, nervous system regulation, musculoskeletal function, and overall body equilibrium. Hands-on therapy stimulates blood and lymphatic flow, enhances tissue nourishment, supports the natural elimination of metabolic waste, and assists in releasing accumulated physical and emotional tension.

// This therapy works by engaging the body with natural elements—the Earth element through grounding touch and nourishing oils, the Water element through gentle hydro-massage techniques, and, when indicated, the Fire element through controlled warmth such as heated stones or the Air element through guided breathing and rhythmic movements. Together, these elements act synergistically to calm the nervous system, improve circulation, and support the body's inherent healing response.

// Within the principles of nature cure and naturopathy, massage therapy is recognized as an essential supportive treatment for maintaining vitality and preventing disease. Regular hands-on therapy helps strengthen the body, improve flexibility, enhance mental clarity, and promote deep relaxation by activating the body's innate self-regulating and restorative mechanisms, making it an integral component of comprehensive wellness care.

// Clinically and therapeutically, hands-on massage therapy has demonstrated benefits in the management of:
// • Musculoskeletal pain, stiffness, and fatigue
// • Stress, anxiety, and nervous system dysregulation
// • Circulatory and lymphatic congestion
// • Sleep disturbances and fatigue syndromes
// • Joint disorders and postural imbalances
// • General debility and age-related degeneration

// Therapeutic Approaches in Hands-On Therapy
// At NNC, hands-on therapies are delivered by trained therapists under medical and wellness supervision, following a comprehensive assessment of the guest's constitution (Prakṛti), current imbalance (Vikṛti), and therapeutic goals. The key modalities include:
// • Full-Body Therapeutic Massage – Rhythmic, synchronized strokes using medicated oils to nourish tissues and calm the nervous system
// • Localized / Partial Massage – Focused application to specific areas of pain or dysfunction
// • Deep Tissue & Musculoskeletal Techniques – Applied were indicated to relieve chronic tension and restricted mobility
// • Relaxation & Rejuvenation Massage – Gentle techniques to promote mental relaxation and emotional balance

// Each session is customized with appropriate herbal oils, pressure, rhythm, and duration, ensuring safe, effective, and deeply restorative outcomes.

// Hands-on therapies at NNC:
// - Soothing oil massage
// - Hot stone therapy
// - Salt Glow therapy
// - Partial oil therapies
// - Vibro Massage
// - Deep Tissue Massage 

// Therapeutic Intent
// Hands-on therapy at NNC is not merely a physical intervention; it is a conscious healing dialogue between therapist and body, designed to restore balance, vitality, and inner harmony.
//   `,

//   'Mud Pack': `
// Mud therapy, traditionally known as Mr̥ttikā Cikitsā and scientifically referred to as Pelotherapy, is a time-honoured therapeutic modality rooted in natural medicine and integral part of naturopathy treatment. Mud, derived from the earth, represents one of the five fundamental elements (Pancha Mahabhuta) and is valued for its cooling, detoxifying, anti-inflammatory, and grounding properties.

// Therapeutically prepared natural mud acts as a powerful medium to absorb toxins, regulate body temperature, improve circulation, and calm the nervous system. Its application helps restore physiological balance by reducing excess heat, inflammation, and stress within the body.

// Mud therapy has been extensively described in classical Ayurvedic literature, including the Sushruta Samhita, Harita Samhita, and the ancient Vedic texts, where earth-based therapies are recommended for both preventive and curative healthcare. Across India and many parts of the world, mud baths and applications have been practiced for centuries as effective natural interventions for a wide range of health conditions.

// Clinically, mud therapy has shown beneficial effects in the management of:
// • Hypertension and stress-related disorders
// • Anxiety and psychosomatic conditions
// • Musculoskeletal disorders and joint stiffness
// • Hormonal imbalances
// • Certain neurological conditions
// • Chronic skin ailments and inflammatory disorders

// Types of Mud Therapy
// At NNC, mud therapy is administered under the guidance of qualified wellness consultants and physicians, following individual assessment and therapeutic indication. The commonly practiced forms include:
// • Mud Bath – Full-body application to promote detoxification, cooling, and relaxation
// • Mud Packs – Localized application over specific body parts for targeted therapeutic effects
// • Partial Mud Application – Applied to selected regions based on clinical need
// • Hot Mud Application – Used selectively to relieve chronic stiffness and musculoskeletal discomfort

// Each therapy is customized according to the guest's body constitution, health condition, and wellness goals, ensuring both safety and optimal therapeutic benefit.
//   `
// };

// const TherapySection = () => {
//   const location = useLocation();
//   const [selected, setSelected] = useState(therapies[0]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* -------- RESET EXPAND ON TAB CHANGE -------- */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

//   /* -------- HANDLE URL PARAMETERS -------- */
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const therapyParam = params.get('therapy');
    
//     if (therapyParam) {
//       // Normalize the parameter (remove spaces, lowercase)
//       const normalizedParam = therapyParam.toLowerCase().trim().replace(/\s+/g, '-');
      
//       // Get the mapped therapy name
//       const therapyName = urlToTherapyMap[normalizedParam];
      
//       if (therapyName) {
//         // Find the therapy in our array
//         const foundTherapy = therapies.find(t => 
//           t.name.toLowerCase() === therapyName.toLowerCase()
//         );
        
//         if (foundTherapy) {
//           setSelected(foundTherapy);
//           return;
//         }
//       }
      
//       // Fallback: try direct match if mapping fails
//       const directMatch = therapies.find(t => 
//         t.name.toLowerCase().replace(/\s+/g, '-') === normalizedParam
//       );
      
//       if (directMatch) {
//         setSelected(directMatch);
//         return;
//       }
//     }
    
//     // Default to first therapy if no valid parameter found
//     setSelected(therapies[0]);
//   }, [location.search]);

//   /* -------- SCROLL TO SECTION WHEN THERAPY CHANGES -------- */
//   useEffect(() => {
//     // Small delay to ensure DOM is updated
//     const timer = setTimeout(() => {
//       const element = document.getElementById('therapy-section');
//       if (element) {
//         window.scrollTo({
//           top: element.offsetTop - 80,
//           behavior: 'smooth'
//         });
//       }
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, [selected]);

//   return (
//     <section
//       id="therapy-section"
//       className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">
//             Our <span className="text-sage-600">Signature Therapies</span>
//           </h2>
//           <p className="text-gray-600 mt-2">
//             Explore our comprehensive range of naturopathic treatments
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex flex-wrap justify-center gap-2 bg-white rounded-full p-1 shadow">
//             {therapies.map((t) => (
//               <button
//                 key={t.name}
//                 onClick={() => setSelected(t)}
//                 className={`px-5 py-3 rounded-full flex items-center gap-2 text-sm font-medium transition ${
//                   selected.name === t.name
//                     ? 'bg-sage-600 text-white shadow-md'
//                     : 'text-gray-700 hover:bg-sage-50 hover:text-sage-700'
//                 }`}
//               >
//                 {t.icon}
//                 {t.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selected.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.4 }}
//             className="flex justify-center mb-10"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="w-full max-w-4xl h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
//               <motion.img
//                 src={selected.image}
//                 alt={selected.name}
//                 className="w-full h-full object-cover"
//                 animate={{ scale: isHovering ? 1.05 : 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//                 <h3 className="text-white text-2xl font-bold">{selected.name}</h3>
//               </div>
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Content */}
//         <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Left Column - Description */}
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-gray-800">
//                 About {selected.name}
//               </h3>

//               <div className="text-gray-700 leading-relaxed">
//                 <p className="mb-4">
//                   {selected.content}
//                 </p>
                
//                 {fullTherapyContent[selected.name] && (
//                   <AnimatePresence>
//                     {expanded && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <p className="text-gray-600 whitespace-pre-line">
//                           {fullTherapyContent[selected.name]}
//                         </p>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 )}
//               </div>

//               {/* Learn More button (only for therapies with expanded content) */}
//               {fullTherapyContent[selected.name] && (
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="mt-4 flex items-center gap-2 text-sage-600 font-semibold hover:text-sage-700 transition-colors"
//                 >
//                   {expanded ? (
//                     <>
//                       Show Less
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//                       </svg>
//                     </>
//                   ) : (
//                     <>
//                       Learn More
//                       <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                       </svg>
//                     </>
//                   )}
//                 </button>
//               )}
//             </div>

//             {/* Right Column - Benefits */}
//             <div>
//               <h4 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
//                 <FaCheckCircle className="text-sage-500" />
//                 Key Benefits of {selected.name}
//               </h4>
//               <ul className="space-y-3">
//                 {selected.benefits.map((benefit, index) => (
//                   <motion.li
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="flex gap-3 bg-sage-50 hover:bg-sage-100 px-4 py-3 rounded-lg transition-colors"
//                   >
//                     <FaCheckCircle className="text-sage-500 mt-1 flex-shrink-0" />
//                     <span className="text-gray-700">{benefit}</span>
//                   </motion.li>
//                 ))}
//               </ul>

//               {/* Additional Info Box */}
//               <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
//                 <h5 className="font-semibold text-blue-800 mb-2">
//                   <FaCheckCircle className="inline mr-2" />
//                   Consultation Available
//                 </h5>
//                 <p className="text-blue-700 text-sm">
//                   Book a personalized consultation to learn which therapy is best suited for your specific health goals and conditions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;







// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';

// import hydrocolon from '../assets/hydrocolon.jpg';
// import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
// import enema from '../assets/enema.jpg';
// import vibroacoustic from '../assets/vibrotictherapy.jpg';
// import mudPackImage from '../assets/mudpackimage.jpg';

// /* ---------------- URL TO THERAPY MAPPING ---------------- */
// const urlToTherapyMap = {
//   // Mud Therapy variations
//   'mud-pack': 'Mud Pack',
//   'mud-therapy': 'Mud Pack',
//   'mud': 'Mud Pack',
  
//   // Hydro Therapy variations
//   'colon-hydrotherapy': 'Colon Hydrotherapy',
//   'hydro-therapy': 'Colon Hydrotherapy',
//   'hydrotherapy': 'Colon Hydrotherapy',
//   'colon': 'Colon Hydrotherapy',
  
//   // Massage Therapy variations
//   'hands-on-therapy': 'Hands-on Therapy',
//   'massage-therapy': 'Hands-on Therapy',
//   'massage': 'Hands-on Therapy',
//   'hands-on': 'Hands-on Therapy',
  
//   // Physiotherapy variations
//   'physiotherapy': 'Hands-on Therapy',
//   'physical-therapy': 'Hands-on Therapy',
  
//   // Other therapies
//   'enema': 'Enema',
//   'vibro-massage': 'Vibro Massage',
//   'vibro': 'Vibro Massage',
//   'vibroacoustic': 'Vibro Massage'
// };

// /* ---------------- THERAPY DATA ---------------- */
// const therapies = [
//   {
//     name: 'Colon Hydrotherapy',
//     image: hydrocolon,
//     content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within. At Nowal NatureCare, this holistic treatment supports the bodys natural detoxification process, offering a range of health benefits that go beyond digestion.',
//     benefits: [
//       'Deeply cleanses the Large Intestine',
//       'Helps maintain optimal pH balance',
//       'Reduces fatigue and sluggishness',
//       'Enhances digestive efficiency',
//       'Aids in weight management and boosts energy levels'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Hands-on Therapy',
//     image: manipulativeTherapy,
//     content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being. At Nowal NatureCare, this therapeutic process involves the rhythmic massage and pressing of muscles and soft tissues using a variety of scientific techniques tailored to your needs.',
//     benefits: [
//       'Alleviates stress and muscle stiffness',
//       'Enhances metabolic function',
//       'Tones and relaxes muscles',
//       'Improves blood flow and circulation',
//       'Promotes a youthful glow and boosts energy'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Enema',
//     image: enema,
//     content: 'Healthy bowel movements are essential for the bodys overall functioning and balance. When this natural process is disrupted, Enema therapy offers an effective solution to restore digestive regularity. At Nowal NatureCare, enema treatments are tailored to your health condition and may include normal, neutral, warm, or herb-infused water. In this therapy, a gentle infusion of natural liquid into the rectum stimulates stool evacuation and relieves even chronic constipation.',
//     benefits: [
//       'Eliminates accumulated waste from the colon',
//       'Effectively treats constipation',
//       'Enhances nutrient absorption',
//       'Cleanses the lower digestive tract'
//     ],
//     icon: <FaLeaf className="text-emerald-400" />
//   },
//   {
//     name: 'Mud Pack',
//     image: mudPackImage,
//     content: 'Mud, one of natures vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body. At Nowal NatureCare, our carefully curated mud pack treatments go beyond expectations—this is the essence of naturopathy. The treatment draws out harmful toxins, deeply cleansing and revitalizing the body.',
//     benefits: [
//       'Helps regulate body temperature',
//       'Supports digestive health',
//       'Eases headaches and tension',
//       'Nourishes and refreshes the skin',
//       'Acts as a natural cooling agent'
//     ],
//     icon: <FaSpa className="text-amber-800" />
//   },
//   {
//     name: 'Vibro Massage',
//     image: vibroacoustic,
//     content: 'Vibro Massage an advanced naturopathic treatment combines the benefits of high-tech vibratory therapy to target the entire body or specific tension points with powder of floor of grains.',
//     benefits: [
//       'Relaxes and tones deep muscle layers',
//       'Enhances blood circulation',
//       'Reduces cortisol levels',
//       'Eases stress, pain, and physical fatigue'
//     ],
//     icon: <FaSpa className="text-purple-400" />
//   }
// ];

// /* -------- FULL CONTENT (FOR EXPANDABLE SECTIONS) -------- */
// const fullTherapyContent = {
//   'Hands-on Therapy': `
// Hands-on Therapy, commonly known as Massage Therapy, is one of the most fundamental and revered therapeutic practices in holistic and natural medicine. This therapy involves the systematic application of skilled manual techniques using the hands to work on soft tissues, muscles, joints, and functional pathways of the body, promoting physical relaxation and physiological balance.

// In naturopathy, therapeutic touch is regarded as a powerful healing medium capable of positively influencing circulation, nervous system regulation, musculoskeletal function, and overall body equilibrium. Hands-on therapy stimulates blood and lymphatic flow, enhances tissue nourishment, supports the natural elimination of metabolic waste, and assists in releasing accumulated physical and emotional tension.

// This therapy works by engaging the body with natural elements—the Earth element through grounding touch and nourishing oils, the Water element through gentle hydro-massage techniques, and, when indicated, the Fire element through controlled warmth such as heated stones or the Air element through guided breathing and rhythmic movements. Together, these elements act synergistically to calm the nervous system, improve circulation, and support the body's inherent healing response.

// Within the principles of nature cure and naturopathy, massage therapy is recognized as an essential supportive treatment for maintaining vitality and preventing disease. Regular hands-on therapy helps strengthen the body, improve flexibility, enhance mental clarity, and promote deep relaxation by activating the body's innate self-regulating and restorative mechanisms, making it an integral component of comprehensive wellness care.

// Clinically and therapeutically, hands-on massage therapy has demonstrated benefits in the management of:
// • Musculoskeletal pain, stiffness, and fatigue
// • Stress, anxiety, and nervous system dysregulation
// • Circulatory and lymphatic congestion
// • Sleep disturbances and fatigue syndromes
// • Joint disorders and postural imbalances
// • General debility and age-related degeneration

// Therapeutic Approaches in Hands-On Therapy
// At NNC, hands-on therapies are delivered by trained therapists under medical and wellness supervision, following a comprehensive assessment of the guest's constitution (Prakṛti), current imbalance (Vikṛti), and therapeutic goals. The key modalities include:
// • Full-Body Therapeutic Massage – Rhythmic, synchronized strokes using medicated oils to nourish tissues and calm the nervous system
// • Localized / Partial Massage – Focused application to specific areas of pain or dysfunction
// • Deep Tissue & Musculoskeletal Techniques – Applied were indicated to relieve chronic tension and restricted mobility
// • Relaxation & Rejuvenation Massage – Gentle techniques to promote mental relaxation and emotional balance

// Each session is customized with appropriate herbal oils, pressure, rhythm, and duration, ensuring safe, effective, and deeply restorative outcomes.

// Hands-on therapies at NNC:
// - Soothing oil massage
// - Hot stone therapy
// - Salt Glow therapy
// - Partial oil therapies
// - Vibro Massage
// - Deep Tissue Massage 

// Therapeutic Intent
// Hands-on therapy at NNC is not merely a physical intervention; it is a conscious healing dialogue between therapist and body, designed to restore balance, vitality, and inner harmony.
//   `,

//   'Mud Pack': `
// Mud therapy, traditionally known as Mr̥ttikā Cikitsā and scientifically referred to as Pelotherapy, is a time-honoured therapeutic modality rooted in natural medicine and integral part of naturopathy treatment. Mud, derived from the earth, represents one of the five fundamental elements (Pancha Mahabhuta) and is valued for its cooling, detoxifying, anti-inflammatory, and grounding properties.

// Therapeutically prepared natural mud acts as a powerful medium to absorb toxins, regulate body temperature, improve circulation, and calm the nervous system. Its application helps restore physiological balance by reducing excess heat, inflammation, and stress within the body.

// Mud therapy has been extensively described in classical Ayurvedic literature, including the Sushruta Samhita, Harita Samhita, and the ancient Vedic texts, where earth-based therapies are recommended for both preventive and curative healthcare. Across India and many parts of the world, mud baths and applications have been practiced for centuries as effective natural interventions for a wide range of health conditions.

// Clinically, mud therapy has shown beneficial effects in the management of:
// • Hypertension and stress-related disorders
// • Anxiety and psychosomatic conditions
// • Musculoskeletal disorders and joint stiffness
// • Hormonal imbalances
// • Certain neurological conditions
// • Chronic skin ailments and inflammatory disorders

// Types of Mud Therapy
// At NNC, mud therapy is administered under the guidance of qualified wellness consultants and physicians, following individual assessment and therapeutic indication. The commonly practiced forms include:
// • Mud Bath – Full-body application to promote detoxification, cooling, and relaxation
// • Mud Packs – Localized application over specific body parts for targeted therapeutic effects
// • Partial Mud Application – Applied to selected regions based on clinical need
// • Hot Mud Application – Used selectively to relieve chronic stiffness and musculoskeletal discomfort

// Each therapy is customized according to the guest's body constitution, health condition, and wellness goals, ensuring both safety and optimal therapeutic benefit.
//   `
// };

// const TherapySection = () => {
//   const location = useLocation();
//   const [selected, setSelected] = useState(therapies[2]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* -------- RESET EXPAND ON TAB CHANGE -------- */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

//   /* -------- HANDLE URL PARAMETERS -------- */
//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const therapyParam = params.get('therapy');
    
//     if (therapyParam) {
//       // Normalize the parameter (remove spaces, lowercase)
//       const normalizedParam = therapyParam.toLowerCase().trim().replace(/\s+/g, '-');
      
//       // Get the mapped therapy name
//       const therapyName = urlToTherapyMap[normalizedParam];
      
//       if (therapyName) {
//         // Find the therapy in our array
//         const foundTherapy = therapies.find(t => 
//           t.name.toLowerCase() === therapyName.toLowerCase()
//         );
        
//         if (foundTherapy) {
//           setSelected(foundTherapy);
//           return;
//         }
//       }
      
//       // Fallback: try direct match if mapping fails
//       const directMatch = therapies.find(t => 
//         t.name.toLowerCase().replace(/\s+/g, '-') === normalizedParam
//       );
      
//       if (directMatch) {
//         setSelected(directMatch);
//         return;
//       }
//     }
    
//     // Default to first therapy if no valid parameter found
//     setSelected(therapies[0]);
//   }, [location.search]);

//   /* -------- SCROLL TO SECTION WHEN THERAPY CHANGES -------- */
//   useEffect(() => {
//     // Small delay to ensure DOM is updated
//     const timer = setTimeout(() => {
//       const element = document.getElementById('therapy-section');
//       if (element) {
//         window.scrollTo({
//           top: element.offsetTop - 80,
//           behavior: 'smooth'
//         });
//       }
//     }, 100);
    
//     return () => clearTimeout(timer);
//   }, [selected]);

//   return (
//     <section
//       id="therapy-section"
//       className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden"
//     >
//       {/* Decorative elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Section header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Therapeutic Experiences
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Signature Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Scientifically-backed natural treatments delivered with compassionate care
//           </p>
//         </div>

//         {/* Therapy Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                   selected.name === therapy.name
//                     ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
//                     : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
//                 }`}
//               >
//                 {therapy.icon}
//                 {therapy.name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Therapy Content */}
//         <div className="relative">
//           {/* Fixed-size image container */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="relative z-10 flex justify-center mb-6 md:-mb-20"
//               onMouseEnter={() => setIsHovering(true)}
//               onMouseLeave={() => setIsHovering(false)}
//             >
//               <div className="relative w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
//                 <motion.img
//                   src={selected.image}
//                   alt={selected.name}
//                   className="w-full h-full object-cover"
//                   animate={{
//                     scale: isHovering ? 1.05 : 1,
//                   }}
//                   transition={{ duration: 0.5 }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
//                   <h3 className="text-xl md:text-2xl font-bold">{selected.name}</h3>
//                   <p className="text-sage-100 text-sm md:text-base">Premium Nowal Treatment</p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Content panel */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selected.name + "content"}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10 rounded-2xl shadow-lg"
//             >
//               <div className="grid md:grid-cols-2 gap-8 md:gap-10">
//                 {/* Description */}
//                 <div>
//                   <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
//                     About {selected.name}
//                   </h3>
//                   <div className="text-gray-700 leading-relaxed mb-4">
//                     <p className="mb-4">{selected.content}</p>
                    
//                     {/* Show expanded content if available */}
//                     {expanded && fullTherapyContent[selected.name] && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: 'auto' }}
//                         transition={{ duration: 0.5 }}
//                         className="mt-4 pt-4 border-t border-gray-200"
//                       >
//                         <div className="whitespace-pre-line">
//                           {fullTherapyContent[selected.name]}
//                         </div>
//                       </motion.div>
//                     )}
//                   </div>
                  
//                   {/* Learn More button for therapies with expanded content */}
//                   {fullTherapyContent[selected.name] && (
//                     <button
//                       onClick={() => setExpanded(!expanded)}
//                       className="text-sage-600 font-medium hover:text-sage-700 transition flex items-center gap-2 group"
//                     >
//                       <span>{expanded ? 'Show Less ▲' : 'Learn More ▼'}</span>
//                       <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
//                         {expanded ? '' : ''}
//                       </span>
//                     </button>
//                   )}
//                 </div>

//                 {/* Benefits */}
//                 <div>
//                   <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                     <FaCheckCircle className="text-sage-500" />
//                     Key Benefits
//                   </h4>
//                   <ul className="space-y-3">
//                     {selected.benefits.map((benefit, idx) => (
//                       <motion.li
//                         key={idx}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ delay: 0.3 + idx * 0.1 }}
//                         className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-gray-800 border border-sage-100 hover:border-sage-200 transition-colors text-sm"
//                       >
//                         <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span>{benefit}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
                  
//                   {/* Additional Info Box */}
//                   <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
//                     <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
//                       <FaCheckCircle className="text-blue-600" />
//                       Consultation Available
//                     </h5>
//                     <p className="text-blue-700 text-sm">
//                       Book a personalized consultation to learn which therapy is best suited for your specific health goals and conditions.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TherapySection;





import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import hydrocolon from '../assets/hydrocolon.jpg';
import manipulativeTherapy from '../assets/maniplativetherapy.jpg';
import enema from '../assets/enema.jpg';
import vibroacoustic from '../assets/vibrotictherapy.jpg';
import mudPackImage from '../assets/mudpackimage.jpg';

/* ---------------- URL TO THERAPY MAPPING ---------------- */
interface TherapyMap {
  [key: string]: string;
}

const urlToTherapyMap: TherapyMap = {
  // Mud Therapy variations
  'mud-pack': 'Mud Pack',
  'mud-therapy': 'Mud Pack',
  'mud': 'Mud Pack',
  
  // Hydro Therapy variations
  'colon-hydrotherapy': 'Colon Hydrotherapy',
  'hydro-therapy': 'Colon Hydrotherapy',
  'hydrotherapy': 'Colon Hydrotherapy',
  'colon': 'Colon Hydrotherapy',
  
  // Massage Therapy variations
  'hands-on-therapy': 'Hands-on Therapy',
  'massage-therapy': 'Hands-on Therapy',
  'massage': 'Hands-on Therapy',
  'hands-on': 'Hands-on Therapy',
  
  // Physiotherapy variations
  'physiotherapy': 'Hands-on Therapy',
  'physical-therapy': 'Hands-on Therapy',
  
  // Other therapies
  'enema': 'Enema',
  'vibro-massage': 'Vibro Massage',
  'vibro': 'Vibro Massage',
  'vibroacoustic': 'Vibro Massage'
};

/* ---------------- THERAPY DATA ---------------- */
interface Therapy {
  name: string;
  image: string;
  content: string;
  benefits: string[];
  icon: React.ReactNode;
}

const therapies: Therapy[] = [
  {
    name: 'Colon Hydrotherapy',
    image: hydrocolon,
    content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within.',
    benefits: [
      'Deeply cleanses the Large Intestine',
      'Helps maintain optimal pH balance',
      'Reduces fatigue and sluggishness',
      'Enhances digestive efficiency',
      'Aids in weight management and boosts energy levels'
    ],
    icon: <FaWater className="text-blue-400" />
  },
  {
    name: 'Hands-on Therapy',
    image: manipulativeTherapy,
    content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being. At Nowal NatureCare, this therapeutic process involves the rhythmic massage and pressing of muscles and soft tissues using a variety of scientific techniques tailored to your needs.',
    benefits: [
      'Alleviates stress and muscle stiffness',
      'Enhances metabolic function',
      'Tones and relaxes muscles',
      'Improves blood flow and circulation',
      'Promotes a youthful glow and boosts energy'
    ],
    icon: <FaHandsHelping className="text-amber-500" />
  },
  {
    name: 'Enema',
    image: enema,
    content: 'Healthy bowel movements are essential for the bodys overall functioning and balance. When this natural process is disrupted, Enema therapy offers an effective solution to restore digestive regularity. At Nowal NatureCare, enema treatments are tailored to your health condition and may include normal, neutral, warm, or herb-infused water. In this therapy, a gentle infusion of natural liquid into the rectum stimulates stool evacuation and relieves even chronic constipation.',
    benefits: [
      'Eliminates accumulated waste from the colon',
      'Effectively treats constipation',
      'Enhances nutrient absorption',
      'Cleanses the lower digestive tract'
    ],
    icon: <FaLeaf className="text-emerald-400" />
  },
  {
    name: 'Mud Pack',
    image: mudPackImage,
    content: 'Mud, one of natures vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body. At Nowal NatureCare, our carefully curated mud pack treatments go beyond expectations—this is the essence of naturopathy. The treatment draws out harmful toxins, deeply cleansing and revitalizing the body.',
    benefits: [
      'Helps regulate body temperature',
      'Supports digestive health',
      'Eases headaches and tension',
      'Nourishes and refreshes the skin',
      'Acts as a natural cooling agent'
    ],
    icon: <FaSpa className="text-amber-800" />
  },
  {
    name: 'Vibro Massage',
    image: vibroacoustic,
    content: 'Vibro Massage is an advanced naturopathic therapy using vibratory stimulation to relax muscles and reduce stress.',
    benefits: [
      'Relaxes and tones deep muscle layers',
      'Enhances blood circulation',
      'Reduces cortisol levels',
      'Eases stress, pain, and physical fatigue'
    ],
    icon: <FaSpa className="text-purple-400" />
  }
];

/* -------- FULL CONTENT FOR ALL THERAPIES -------- */
interface FullContent {
  [key: string]: string;
}

const fullTherapyContent: FullContent = {
  'Colon Hydrotherapy': `
Colon Hydrotherapy — Gentle Support for Digestive Health
Colon Hydrotherapy, also known as colonic irrigation, is a controlled cleansing procedure of the large intestine using warm, filtered water. Practiced under professional supervision, it supports the body’s natural elimination process and promotes digestive comfort without the use of drugs or chemicals.
At Nowal Naturecare, colon hydrotherapy is used as a supportive therapy, carefully integrated with diet, lifestyle correction, and medical assessment.

Understanding Colon Hydrotherapy
The colon plays a vital role in digestion, nutrient absorption, and waste elimination. When bowel movements are irregular or incomplete, waste accumulation may contribute to bloating, discomfort, and a feeling of heaviness.
Colon hydrotherapy gently introduces water into the colon to:
•	Loosen accumulated waste
•	Support natural bowel evacuation
•	Improve intestinal comfort
Modern systems are designed to be hygienic, pressure-controlled, and safe when administered by trained professionals.

Historical Perspective & Naturopathic Roots
Colon cleansing practices have long been part of hydrotherapy and naturopathy traditions.
•	Dr. John Harvey Kellogg, a pioneer in preventive medicine and hydrotherapy, highlighted the importance of bowel hygiene in overall health during the late 19th and early 20th centuries.
•	Dr. Bernard Jensen, a respected naturopath, further emphasized colon health as a foundation for systemic wellness, promoting gentle cleansing combined with diet and lifestyle correction.
Today, these principles are refined through modern equipment, clinical screening, and ethical practice standards.


Potential Benefits of Colon Hydrotherapy
When appropriately indicated and supervised, colon hydrotherapy may support:
•	Improved bowel regularity
•	Relief from chronic constipation
•	Reduction in bloating and abdominal discomfort
•	Enhanced digestive comfort
•	Support during structured detox or lifestyle reset programs
It is important to note that colon hydrotherapy is not a cure, but a supportive tool used alongside nutrition, hydration, and lifestyle guidance.

Colon Health & Overall Wellbeing
While colon hydrotherapy primarily supports digestive health, improved elimination can positively influence overall wellbeing. Many individuals report:
•	A feeling of lightness
•	Improved appetite awareness
•	Enhanced comfort during digestion
•	Better engagement with dietary and lifestyle changes
Responsible practice avoids exaggerated detox claims and focuses on sustainable health outcomes.

Safety, Screening & Medical Supervision
Colon hydrotherapy should always be performed:
•	After a medical consultation
•	By trained and certified therapists
•	Using modern, hygienic equipment
It is not recommended for individuals with:
•	Acute inflammatory bowel conditions
•	Recent abdominal surgery
•	Severe cardiac or kidney disease
•	Pregnancy
•	Unexplained abdominal pain
At a doctor-led centre, suitability is carefully assessed before recommending the therapy.

Our Clinical Integration Approach
At our wellness centre, colon hydrotherapy is part of a structured naturopathy program, which includes:
•	Doctor assessment and screening
•	Diet and hydration planning
•	Individualised colon hydrotherapy sessions
•	Post-therapy guidance for bowel health
•	Lifestyle and habit correction
This integrated approach ensures safety, comfort, and meaningful long-term benefits.

Who May Benefit 
Colon hydrotherapy may be considered for adults seeking supportive digestive care, particularly when used as part of a medically supervised naturopathy or lifestyle program. Each recommendation is individualised, based on health history, current symptoms, and clinical assessment.
 Digestive Health Support
Colon hydrotherapy may be helpful for individuals who experience:
•	Chronic functional constipation
•	Bloating, gas, and abdominal heaviness
•	Indigestion and irregular bowel habits
•	Irritable Bowel Syndrome (IBS), when medically evaluated
By supporting bowel evacuation and intestinal comfort, the therapy may help improve the overall function of the digestive system.
 Detoxification & Elimination Support
For individuals undergoing supervised detox or lifestyle correction programs, colon hydrotherapy may assist by:
•	Supporting the body’s natural elimination process
•	Reducing toxic load within the colon
•	Enhancing digestive efficiency
Improved elimination may also reflect positively on:
•	Skin health (such as acne or eczema tendencies)
•	Energy levels and fatigue
•	Overall sense of lightness and wellbeing

Weight & Metabolic Wellness Support
When integrated with diet therapy, movement, and lifestyle guidance, colon hydrotherapy may:
•	Help relieve sluggish digestion often associated with weight gain
•	Support metabolism indirectly by improving bowel regularity
•	Assist individuals during weight-management programs
It should be viewed as a supportive aid, not a stand-alone weight-loss solution.
 Immunity & Systemic Wellbeing
A well-functioning digestive system plays a key role in immune health. By supporting bowel hygiene and gut balance, colon hydrotherapy may contribute to:
•	Improved immune responsiveness
•	Reduced systemic inflammation
•	Enhanced nutrient absorption
Healthy elimination is also associated with better overall body resilience.
 Additional Supportive Benefits
Colon hydrotherapy may also be considered for individuals seeking support for:
•	Recurrent headaches linked to digestive sluggishness
•	Allergic tendencies aggravated by poor gut function
•	Hair and scalp concerns associated with nutritional absorption and detox balance
•	General feelings of heaviness, lethargy, or poor digestive comfort
 Important Medical Perspective
While colon hydrotherapy may support digestive health and elimination, it does not replace medical treatment and should not be viewed as a cure for disease. Claims related to serious conditions, including colon cancer, must always be evaluated and managed by qualified medical professionals.
A doctor-led approach ensures that colon hydrotherapy is recommended:
•	Only when appropriate
•	With proper screening and contraindication checks
•	As part of a holistic, long-term health strategy



Takeaway Note: 
Colon hydrotherapy is a supportive, not standalone, therapy. When practiced responsibly under professional supervision, it gently aids digestive comfort and natural elimination. Rooted in naturopathic principles and guided by modern clinical standards, it works best alongside diet therapy and lifestyle correction. A doctor-led approach ensures safety, ethical use, and meaningful benefits—supporting long-term digestive and overall wellbeing.
`,

  'Enema': `
Enema therapy is a time-honored cleansing technique that involves introducing liquid into the rectum and colon to stimulate evacuation and promote bowel health. This gentle yet effective therapy has been practiced for thousands of years across various healing traditions and remains a cornerstone of natural detoxification and digestive support.

Historical Significance
Enemas have been documented in ancient Egyptian papyri, Ayurvedic texts, and traditional Chinese medicine as essential tools for maintaining health and treating various ailments. The Ebers Papyrus (circa 1500 BCE) contains detailed instructions for enema administration, highlighting its importance in ancient medical practice.

Physiological Benefits
Enema therapy offers multiple health benefits:
• Immediate relief from constipation and fecal impaction
• Cleansing of the lower bowel without disrupting upper digestive function
• Reduction of toxic load on the liver through direct elimination
• Improved hydration and mineral balance through specialized solutions
• Enhanced peristalsis and bowel muscle tone

Types of Enemas at Nowal NatureCare
1. Simple Water Enema: Uses warm purified water for gentle cleansing
2. Herbal Enema: Incorporates medicinal herbs like chamomile, marshmallow root, or slippery elm
3. Coffee Enema: Specifically supports liver detoxification and glutathione production
4. Probiotic Enema: Introduces beneficial bacteria directly to the colon
5. Mineral Enema: Provides essential electrolytes and minerals

Therapeutic Applications
Enema therapy is particularly effective for:
• Acute and chronic constipation
• Pre-colonoscopy preparation
• Detoxification support during fasting or cleansing programs
• Management of certain inflammatory bowel conditions (under supervision)
• Preparation for deeper naturopathic treatments
• Support during fever management (in specific protocols)

Safety and Professional Guidance
At NNC, enema therapy is always administered under professional supervision with careful attention to:
• Appropriate solution temperature (typically 37-40°C)
• Proper positioning and comfort
• Gradual introduction of fluid
• Monitoring of individual response
• Post-treatment hydration and electrolyte balance

Contraindications include:
• Severe abdominal pain of unknown origin
• Active gastrointestinal bleeding
• Recent bowel surgery
• Certain cardiac conditions
• Advanced pregnancy

A typical enema session lasts 20-30 minutes, with the cleansing effects often continuing for several hours. Many individuals report immediate relief from bloating, improved mental clarity, and increased energy following treatment.
`,

  'Mud Pack': `
Mud therapy, traditionally known as Mr̥ttikā Cikitsā and scientifically referred to as Pelotherapy, is a time-honoured therapeutic modality rooted in natural medicine and integral part of naturopathy treatment. Mud, derived from the earth, represents one of the five fundamental elements (Pancha Mahabhuta) and is valued for its cooling, detoxifying, anti-inflammatory, and grounding properties.

Therapeutically prepared natural mud acts as a powerful medium to absorb toxins, regulate body temperature, improve circulation, and calm the nervous system. Its application helps restore physiological balance by reducing excess heat, inflammation, and stress within the body.

Mud therapy has been extensively described in classical Ayurvedic literature, including the Sushruta Samhita, Harita Samhita, and the ancient Vedic texts, where earth-based therapies are recommended for both preventive and curative healthcare. Across India and many parts of the world, mud baths and applications have been practiced for centuries as effective natural interventions for a wide range of health conditions.

Clinically, mud therapy has shown beneficial effects in the management of:
• Hypertension and stress-related disorders
• Anxiety and psychosomatic conditions
• Musculoskeletal disorders and joint stiffness
• Hormonal imbalances
• Certain neurological conditions
• Chronic skin ailments and inflammatory disorders

Types of Mud Therapy
At NNC, mud therapy is administered under the guidance of qualified wellness consultants and physicians, following individual assessment and therapeutic indication. The commonly practiced forms include:
• Mud Bath – Full-body application to promote detoxification, cooling, and relaxation
• Mud Packs – Localized application over specific body parts for targeted therapeutic effects
• Partial Mud Application – Applied to selected regions based on clinical need
• Hot Mud Application – Used selectively to relieve chronic stiffness and musculoskeletal discomfort

Each therapy is customized according to the guest's body constitution, health condition, and wellness goals, ensuring both safety and optimal therapeutic benefit.

Therapeutic Mechanism
Mud works through several mechanisms:
• Thermal Effect: Gradual heat transfer that increases local circulation
• Mechanical Effect: Gentle pressure and mineral absorption
• Chemical Effect: Release of beneficial minerals and trace elements
• Biological Effect: Antimicrobial and anti-inflammatory actions

Our specially curated therapeutic mud is sourced from mineral-rich regions and undergoes rigorous testing and preparation to ensure purity and therapeutic potency.
`,

  'Vibro Massage': `
Vibro Massage / Vibro Therapy 
Vibro Massage, also known as Vibro Therapy, is a supportive naturopathy treatment that uses controlled mechanical vibrations to stimulate muscles, improve circulation, and promote relaxation. At Nowal Naturecare, this therapy is performed using natural rice powder instead of talcum powder, in alignment with naturopathic and skin-safe principles.
Why Rice Powder Instead of Talcum Powder?
Rice powder is a natural, skin-friendly alternative that offers several advantages over talcum powder:
•	Free from chemicals, fragrances, and additives
•	Gentle on sensitive skin
•	Non-irritating and non-toxic
•	Absorbs excess moisture naturally
•	Allows smooth movement of the vibro head without clogging pores
Using rice powder ensures that the therapy remains pure, natural, and suitable for repeated therapeutic use.
How Vibro Therapy Works
During vibro massage:
•	Gentle vibrations stimulate muscles and soft tissues
•	Blood circulation and lymphatic flow improve
•	Muscle stiffness and fatigue reduce
•	Nervous system relaxation is promoted
The addition of rice powder allows the therapy head to glide smoothly while maintaining skin comfort and hygiene.
Therapeutic Benefits of Vibro Massage
•	Relieves muscle tension and stiffness
•	Improves local circulation
•	Supports lymphatic drainage
•	Helps reduce fatigue and body heaviness
•	Promotes relaxation and stress relief
•	Supports metabolism and tissue stimulation

 Clinical & Wellness Applications
Vibro therapy may be included as a supportive treatment in:
•	Musculoskeletal discomfort
•	Weight management programs
•	Circulation-related sluggishness
•	Stress and fatigue management
•	General rejuvenation therapies

 Safety & Professional Practice
Vibro massage should always be administered:
•	By trained therapists
•	As prescribed by the attending naturopathy doctor
•	With appropriate duration and intensity
It may not be suitable for individuals with acute inflammation, fractures, pregnancy, or certain medical conditions unless medically advised.

Takeaway Note
Vibro therapy, when performed with natural rice powder, offers a gentle yet effective way to stimulate circulation, relax muscles, and support overall wellbeing—while staying true to naturopathic principles of purity and skin safety.
`
};

const TherapySection = () => {
  const location = useLocation();
  const [selected, setSelected] = useState<Therapy>(therapies[2]);
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  /* -------- RESET EXPAND ON TAB CHANGE -------- */
  useEffect(() => {
    setExpanded(false);
  }, [selected.name]);

  /* -------- HANDLE URL PARAMETERS -------- */
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const therapyParam = params.get('therapy');
    
    if (therapyParam) {
      // Normalize the parameter (remove spaces, lowercase)
      const normalizedParam = therapyParam.toLowerCase().trim().replace(/\s+/g, '-');
      
      // Get the mapped therapy name
      const therapyName = urlToTherapyMap[normalizedParam];
      
      if (therapyName) {
        // Find the therapy in our array
        const foundTherapy = therapies.find(t => 
          t.name.toLowerCase() === therapyName.toLowerCase()
        );
        
        if (foundTherapy) {
          setSelected(foundTherapy);
          return;
        }
      }
      
      // Fallback: try direct match if mapping fails
      const directMatch = therapies.find(t => 
        t.name.toLowerCase().replace(/\s+/g, '-') === normalizedParam
      );
      
      if (directMatch) {
        setSelected(directMatch);
        return;
      }
    }
    
    // Default to third therapy (Enema) if no valid parameter found
    setSelected(therapies[2]);
  }, [location.search]);

  /* -------- SCROLL TO SECTION WHEN THERAPY CHANGES -------- */
  useEffect(() => {
    // Small delay to ensure DOM is updated
    const timer = setTimeout(() => {
      const element = document.getElementById('therapy-section');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [selected]);

  return (
    <section
      id="therapy-section"
      className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
            Therapeutic Experiences
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Signature Therapies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scientifically-backed natural treatments delivered with compassionate care
          </p>
        </div>

        {/* Therapy Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100 overflow-x-auto max-w-full">
            {therapies.map((therapy) => (
              <button
                key={therapy.name}
                onClick={() => setSelected(therapy)}
                className={`relative px-4 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 flex-shrink-0 ${
                  selected.name === therapy.name
                    ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
                    : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
                }`}
              >
                {therapy.icon}
                <span className="whitespace-nowrap">{therapy.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Therapy Content */}
        <div className="relative">
          {/* Fixed-size image container */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex justify-center mb-6 md:-mb-20"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: isHovering ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 md:p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold">{selected.name}</h3>
                  <p className="text-sage-100 text-sm md:text-base">Premium Nowal Treatment</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.name + "content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-4 sm:px-6 md:px-10 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
                    About {selected.name}
                  </h3>
                  <div className="text-gray-700 leading-relaxed mb-4">
                    <p className="mb-4">{selected.content}</p>
                    
                    {/* Show expanded content if available */}
                    {expanded && fullTherapyContent[selected.name] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-4 pt-4 border-t border-gray-200 overflow-hidden"
                      >
                        <div className="whitespace-pre-line text-gray-600">
                          {fullTherapyContent[selected.name]}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Learn More button for ALL therapies */}
                  {fullTherapyContent[selected.name] && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="text-sage-600 font-medium hover:text-sage-700 transition flex items-center gap-2 group"
                    >
                      <span>{expanded ? 'Show Less ▲' : 'Learn More ▼'}</span>
                      <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
                        {expanded ? '' : ''}
                      </span>
                    </button>
                  )}
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <FaCheckCircle className="text-sage-500" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {selected.benefits.map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-gray-800 border border-sage-100 hover:border-sage-200 transition-colors text-sm"
                      >
                        <svg className="w-4 h-4 text-sage-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Additional Info Box */}
                  <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <h5 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-blue-600" />
                      Consultation Available
                    </h5>
                    <p className="text-blue-700 text-sm">
                      Book a personalized consultation to learn which therapy is best suited for your specific health goals and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TherapySection;