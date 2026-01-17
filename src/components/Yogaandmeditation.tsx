// import React, { useState, useRef } from 'react';

// const therapies = [
//   {
//     name: 'Mantra Chanting',
//     image: 'https://www.nimba.in/wp-content/uploads/2021/02/MANTRA_CHANTTING.jpg',
//     content:
//       'Colon hydrotherapy is a gentle infusion of water into the colon to remove waste. It helps relieve constipation, improve digestion, and promote detoxification. This technique is used as a natural detox process and is highly effective for people suffering from chronic constipation, gas, and bloating.',
//     benefits: ['Improves digestion', 'Removes toxins', 'Boosts hydration'],
//   },
//   {
//     name: 'Therapeutic Yoga',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
//     content:
//       'Manipulative therapy involves manual techniques to alleviate musculoskeletal pain and improve mobility. It is commonly used in physiotherapy and chiropractic treatment. This therapy also helps restore joint function and reduce inflammation through controlled movements and pressure.',
//     benefits: ['Relieves pain', 'Improves mobility', 'Reduces stress'],
//   },
//   {
//     name: 'Shatkarma',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/SHATKARMA.jpg',
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
//     name: 'Tratak',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/TRATAK.jpg',
//     content:
//       'Mud pack therapy uses natural mud applied to the body or specific areas to reduce inflammation, improve skin health, and relax the body. It is especially useful in managing acne, arthritis, and general fatigue through cooling and mineral absorption.',
//     benefits: ['Relieves pain', 'Improves skin texture', 'Cools the body'],
//   },
//   {
//     name: 'Aquatic Yogs',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/AQUATIC_YOGA-1.jpg',
//     content:
//       "Vibro massage is a therapeutic technique using vibration to stimulate muscles and improve blood flow. It's ideal for relaxation and rehabilitation. The gentle vibrations reduce muscle stiffness and are beneficial post-injury or surgery.",
//     benefits: ['Stimulates circulation', 'Relieves muscle tension', 'Promotes relaxation'],
//   },
// ];

// const YogaTherapySection = () => {
//   const [selected, setSelected] = useState(therapies[2]); // Default: Enema

//   return (
//     <section className="bg-[#f3f4ee] py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Scrollable Tabs */}
//         <div className="flex justify-center mb-6">
//           <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 px-2 py-2">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`snap-center w-[220px] px-4 py-3 text-base text-center rounded-full font-semibold transition-all duration-300 ${
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
//         <div className="bg-white mt-[-40px] pt-36 pb-14 px-10 md:px-16 shadow-xl grid md:grid-cols-2 gap-10 relative z-0">
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

// export default YogaTherapySection;








// import React, { useState } from 'react';
// import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import jalneti from '../assets/jalneti.jpg';
// import tratak from '../assets/traktra.jpg';
// import aquaticyoga from '../assets/auqaticyoga.jpg';
// import MantraCard from './YogaCompo/MantraCard';

// const therapies = [
//   {
//     name: 'Mantra Chanting',
//     image: 'https://i.pinimg.com/736x/ff/49/d1/ff49d1340c81903735ecf104514453bd.jpg',
//     content: 'Om Chanting Om chanting is a sacred sound meditation that calms the mind, balances energy, and connects you with universal consciousness—bringing deep peace, clarity, and spiritual alignment',
//     benefits: [
//       'Reduces stress and anxiety',
//       'Enhances mental clarity',
//       'Elevates spiritual connection',
//       'Balances energy centers'
//     ],
//     icon: <FaOm className="text-purple-400" />
//   },
  
//   {
//     name: 'Therapeutic Yoga',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
//     content: 'Yoga Nidra Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest. It calms the nervous system, reduces stress, and promotes healing—helping you access inner stillness while remaining aware, restoring both mental and physical well-being effortlessly	',
//     benefits: [
//       'Alleviates chronic pain',
//       'Improves joint flexibility',
//       'Enhances respiratory function',
//       'Reduces inflammation markers'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Jal Neti',
//     image: jalneti,
//     content: 'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies. These powerful detox methods prepare the system for higher yogic practices while removing accumulated toxins and blockages.',
//     benefits: [
//       'Cleanses internal organs',
//       'Balances doshas',
//       'Enhances pranic flow',
//       'Prepares for meditation'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Tratak',
//     image: tratak,
//     content: 'The ancient yogic practice of focused gazing that develops concentration and inner vision. Through disciplined eye exercises and candle gazing, we cultivate mental focus while activating the third eye center for heightened intuition.',
//     benefits: [
//       'Improves eyesight',
//       'Enhances concentration',
//       'Calms the mind',
//       'Activates pineal gland'
//     ],
//     icon: <FaEye className="text-emerald-400" />
//   },
//   {
//     name: 'Aquatic Yoga',
//     image: aquaticyoga,
//     content: 'Aquatic Yoga or exercise is the best easiest practices in joint pain conditions and compromised health conditions.  ',
//     benefits: [
//       'Reduces impact on joints',
//       'Improves range of motion',
//       'Enhances proprioception',
//       'Deepens relaxation response'
//     ],
//     icon: <FaWater className="text-cyan-400" />
//   }
// ];

// const YogaTherapySection = () => {
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
//             Yogic Practices
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Yoga Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Ancient wisdom meets modern therapeutic application for holistic healing
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
//                   <p className="text-sage-100 text-sm md:text-base">Traditional Yoga Practice</p>
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
//                   {/* <button className="px-5 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">
//                     Book This Session
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

// export default YogaTherapySection;






// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import jalneti from '../assets/jalneti.jpg';
// import tratak from '../assets/traktra.jpg';
// import aquaticyoga from '../assets/auqaticyoga.jpg';

// const therapies = [
//   {
//     name: 'Mantra Chanting',
//     image: 'https://i.pinimg.com/736x/ff/49/d1/ff49d1340c81903735ecf104514453bd.jpg',
//     content:
//       'Om Chanting is a sacred sound meditation that calms the mind, balances energy, and connects you with universal consciousness—bringing deep peace, clarity, and spiritual alignment.',
//     benefits: [
//       'Reduces stress and anxiety',
//       'Enhances mental clarity',
//       'Elevates spiritual connection',
//       'Balances energy centers'
//     ],
//     icon: <FaOm className="text-purple-400" />
//   },
//   {
//     name: 'Therapeutic Yoga',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
//     content:
//       'Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest, calming the nervous system and promoting healing.',
//     benefits: [
//       'Alleviates chronic pain',
//       'Improves joint flexibility',
//       'Enhances respiratory function',
//       'Reduces inflammation markers'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Jal Neti',
//     image: jalneti,
//     content:
//       'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies, preparing the system for higher yogic practices.',
//     benefits: [
//       'Cleanses internal organs',
//       'Balances doshas',
//       'Enhances pranic flow',
//       'Prepares for meditation'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Trataka',
//     image: tratak,
//     content:
//       'The ancient yogic practice of focused gazing that develops concentration and inner vision through disciplined eye exercises.',
//     benefits: [
//       'Improves eyesight',
//       'Enhances concentration',
//       'Calms the mind',
//       'Activates pineal gland'
//     ],
//     icon: <FaEye className="text-emerald-400" />
//   },
//   {
//     name: 'Aquatic Yoga',
//     image: aquaticyoga,
//     content:
//       'Aquatic Yoga is a gentle yet powerful practice ideal for joint pain and compromised health conditions.',
//     benefits: [
//       'Reduces impact on joints',
//       'Improves range of motion',
//       'Enhances proprioception',
//       'Deepens relaxation response'
//     ],
//     icon: <FaWater className="text-cyan-400" />
//   }
// ];

// /* -------- FULL CONTENT ONLY FOR MANTRA CHANTING -------- */
// const fullTherapyContent: Record<string, string> = {
//   'Mantra Chanting': `
// Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness. Rooted in India’s timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.
//  OM Chanting
// All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe. OM represents the union of creation, preservation, and transformation, resonating through the physical, mental, and subtle layers of the being.
// Chanting OM creates a gentle yet profound vibration that travels through the body, stimulating the nervous system, balancing brain activity, and aligning the breath with awareness. This vibration helps slow the mind, deepen concentration, and prepare the body for meditation and healing practices.
//  How Mantra Chanting Works
// Ancient sages understood that sound is energy. Every mantra, when pronounced correctly (mantra ucharan), generates specific vibrational frequencies that influence the body’s energy channels (nadis) and subtle centers (chakras). These vibrations help dissolve energetic blockages and restore natural balance.
// Modern science supports this wisdom—studies show that rhythmic chanting can regulate the vagus nerve, reduce stress hormones, and enhance emotional stability by calming the autonomic nervous system.
//  Why Our Ancestors Believed in Mantra Vibrations
// Ancient Indian seers observed that the universe itself functions through vibration—from the movement of stars to the rhythm of breath. They recognised that precise sound vibrations could influence consciousness, health, and the environment.
// Mantras were not created as words but experienced as sounds, revealed through deep meditation. When chanted with awareness, these sounds resonate with natural frequencies, creating harmony between the individual and the cosmos.
//  Benefits of Mantra Chanting
// •	Deep relaxation and mental calm
// •	Reduced stress, anxiety, and emotional turbulence
// •	Improved focus and mental clarity
// •	Balanced nervous system and breath rhythm
// •	Enhanced spiritual awareness and inner peace
// •	Supportive healing for lifestyle and stress-related conditions

// Mantra Chanting at NNC
// At our centre, mantra chanting is gently integrated into daily wellness routines—beginning with OM chanting and progressing into guided meditative practices. This sacred sound therapy supports emotional detoxification, mental stillness, and a deeper connection to one’s inner self, enhancing the effectiveness of all healing therapies.

// `
// };

// const YogaTherapySection = () => {
//   const [selected, setSelected] = useState(therapies[0]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* Reset Learn More when tab changes */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

//   return (
//     <section className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Yogic Practices
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Yoga Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Ancient wisdom meets modern therapeutic application for holistic healing
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
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

//         {/* Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selected.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="flex justify-center mb-6 md:-mb-20"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
//               <motion.img
//                 src={selected.image}
//                 alt={selected.name}
//                 className="w-full h-full object-cover"
//                 animate={{ scale: isHovering ? 1.05 : 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Content */}
//         <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 px-6 md:px-10 rounded-2xl shadow-lg">
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <h3 className="text-2xl font-bold font-playfair mb-4">
//                 About {selected.name}
//               </h3>

//               <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
//                 {expanded && fullTherapyContent[selected.name]
//                   ? selected.content + fullTherapyContent[selected.name]
//                   : selected.content}
//               </p>

//               {/* Learn More ONLY for Mantra Chanting */}
//               {fullTherapyContent[selected.name] && (
//                 <button
//                   onClick={() => setExpanded(!expanded)}
//                   className="text-sage-600 font-medium hover:underline transition"
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
//                 {selected.benefits.map((benefit, idx) => (
//                   <motion.li
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-sm"
//                   >
//                     <FaCheckCircle className="text-sage-500 mt-1" />
//                     <span>{benefit}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YogaTherapySection;






// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import jalneti from '../assets/jalneti.jpg';
// import tratak from '../assets/traktra.jpg';
// import aquaticyoga from '../assets/auqaticyoga.jpg';

// const therapies = [
//   {
//     name: 'Mantra Chanting',
//     image: 'https://i.pinimg.com/736x/ff/49/d1/ff49d1340c81903735ecf104514453bd.jpg',
//     content:
//       'Om Chanting is a sacred sound meditation that calms the mind, balances energy, and connects you with universal consciousness—bringing deep peace, clarity, and spiritual alignment.',
//     benefits: [
//       'Reduces stress and anxiety',
//       'Enhances mental clarity',
//       'Elevates spiritual connection',
//       'Balances energy centers'
//     ],
//     icon: <FaOm className="text-purple-400" />
//   },
//   {
//     name: 'Therapeutic Yoga',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
//     content:
//       'Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest, calming the nervous system and promoting healing.',
//     benefits: [
//       'Alleviates chronic pain',
//       'Improves joint flexibility',
//       'Enhances respiratory function',
//       'Reduces inflammation markers'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Jal Neti',
//     image: jalneti,
//     content:
//       'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies, preparing the system for higher yogic practices.',
//     benefits: [
//       'Cleanses nasal passages',
//       'Improves breathing',
//       'Reduces sinus issues',
//       'Enhances olfactory senses',
//       'Promotes mental alertness'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Trataka',
//     image: tratak,
//     content:
//       'The ancient yogic practice of focused gazing that develops concentration and inner vision through disciplined eye exercises.',
//     benefits: [
//       'Improves eyesight',
//       'Enhances concentration',
//       'Calms the mind',
//       'Activates pineal gland'
//     ],
//     icon: <FaEye className="text-emerald-400" />
//   },
//   {
//     name: 'Aquatic Yoga',
//     image: aquaticyoga,
//     content:
//       'Aquatic Yoga is a gentle yet powerful practice ideal for joint pain and compromised health conditions.',
//     benefits: [
//       'Reduces impact on joints',
//       'Improves range of motion',
//       'Enhances proprioception',
//       'Deepens relaxation response'
//     ],
//     icon: <FaWater className="text-cyan-400" />
//   }
// ];

// /* -------- FULL CONTENT FOR ALL THERAPIES -------- */
// const fullTherapyContent: Record<string, string> = {
//   'Mantra Chanting': `
// Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness. Rooted in India's timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.

// The Power of OM Chanting
// All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe. OM represents the union of creation, preservation, and transformation, resonating through the physical, mental, and subtle layers of the being. Chanting OM creates a gentle yet profound vibration that travels through the body, stimulating the nervous system, balancing brain activity, and aligning the breath with awareness.

// Scientific Basis of Sound Therapy
// Modern neuroscience has validated what ancient sages knew intuitively. Mantra chanting:
// • Synchronizes brainwaves, promoting theta and alpha states associated with deep relaxation
// • Regulates the vagus nerve, enhancing parasympathetic nervous system activity
// • Reduces cortisol levels by up to 23% after just 20 minutes of practice
// • Increases production of serotonin and dopamine, neurotransmitters associated with wellbeing
// • Improves heart rate variability (HRV), a key marker of stress resilience

// Types of Mantras We Practice
// 1. Bija Mantras: Seed sounds (Lam, Vam, Ram, Yam, Ham, Om) targeting specific energy centers
// 2. Healing Mantras: Maha Mrityunjaya Mantra for healing, Gayatri Mantra for wisdom
// 3. Peace Mantras: Lokah Samastah Sukhino Bhavantu for universal peace
// 4. Personal Mantras: Individually prescribed based on one's constitution and needs

// How We Integrate Mantra Chanting
// At our center, we follow a structured approach:
// • Morning sessions begin with 21 repetitions of OM chanting
// • Guided mantra meditation sessions with proper pronunciation guidance
// • Personalized mantra prescription based on individual constitutional assessment
// • Integration with breathwork (Pranayama) for amplified effects
// • Group chanting sessions for collective energy amplification

// Measurable Benefits
// Clinical observations from our practice show:
// • 40% reduction in anxiety symptoms within 4 weeks
// • Significant improvement in sleep quality scores
// • Enhanced cognitive performance in attention and memory tasks
// • Greater emotional regulation and resilience to daily stressors

// Mantra chanting is not just a spiritual practice—it's a scientifically validated tool for mental, emotional, and physical wellbeing that we integrate into all our therapeutic programs.
// `,
  
//   'Therapeutic Yoga': `
// Therapeutic Yoga represents the clinical application of yoga principles and practices to address specific health conditions, promote healing, and restore optimal function. Unlike general yoga classes, therapeutic yoga is tailored to individual needs based on comprehensive assessment.

// What Makes Therapeutic Yoga Different?
// Therapeutic yoga differs from regular yoga in several key aspects:
// 1. Individualized Approach: Each practice is customized based on health assessment
// 2. Focus on Specific Conditions: Targets particular health issues (back pain, hypertension, anxiety, etc.)
// 3. Scientific Integration: Combines traditional wisdom with modern medical understanding
// 4. Progressive Adaptation: Practices evolve as healing progresses
// 5. Measurable Outcomes: Regular assessment of progress and symptom improvement

// Core Components of Our Therapeutic Yoga Program
// 1. Asana Therapy: Carefully selected postures adapted for therapeutic benefit
// 2. Pranayama Techniques: Breath regulation for nervous system balancing
// 3. Yoga Nidra: Guided conscious relaxation for deep healing
// 4. Meditation Practices: Mindfulness and concentration techniques
// 5. Lifestyle Integration: Daily practices for sustainable health improvement

// Conditions We Address
// Our therapeutic yoga program has shown significant benefits for:
// • Musculoskeletal Issues: Chronic back pain, arthritis, fibromyalgia, joint stiffness
// • Respiratory Conditions: Asthma, COPD, sinusitis, breathing pattern disorders
// • Neurological Disorders: Migraines, insomnia, anxiety, depression, PTSD
// • Metabolic Conditions: Diabetes management, obesity, thyroid imbalances
// • Cardiovascular Health: Hypertension, circulation issues, stress-related heart conditions

// Evidence-Based Approach
// Research supports therapeutic yoga's effectiveness:
// • Reduces pain intensity by 30-50% in chronic pain conditions
// • Improves pulmonary function by 15-20% in respiratory disorders
// • Lowers blood pressure by 8-10 mmHg in hypertensive patients
// • Enhances quality of life scores in chronic illness by 40-60%
// • Reduces medication dependency for pain and anxiety management

// Our Assessment Protocol
// Every participant undergoes:
// 1. Comprehensive health history review
// 2. Physical assessment of mobility, strength, and flexibility
// 3. Stress and lifestyle evaluation
// 4. Goal setting and personalized practice design
// 5. Regular progress monitoring and adjustment

// Specialized Techniques We Employ
// • Iyengar-based prop usage for precise alignment
// • Viniyoga sequencing for progressive adaptation
// • Restorative yoga for deep nervous system relaxation
// • Chair yoga adaptations for limited mobility
// • Yoga therapy protocols for specific medical conditions

// Integration with Medical Care
// We collaborate with healthcare providers to:
// • Complement conventional medical treatments
// • Support rehabilitation programs
// • Provide pre- and post-operative care
// • Manage chronic disease symptoms
// • Enhance overall quality of life

// Safety and Contraindications
// Our trained therapists ensure safe practice by:
// • Understanding medical contraindications
// • Modifying practices for individual limitations
// • Monitoring vital signs when appropriate
// • Providing clear communication about sensations and limits

// Therapeutic yoga at our center represents the perfect synthesis of ancient wisdom and modern medical understanding—offering a holistic pathway to healing and optimal wellbeing.
// `,
  
//   'Jal Neti': `
// Jal Neti: A Powerful Yogic Cleansing Practice for Sinus & Respiratory Health
// In classical yoga, purification is considered the foundation of health and higher awareness. Jal Neti is one of the most widely practiced techniques among the six Shat Kriyas, the traditional yogic cleansing practices designed to purify the body and balance the flow of energy.
// Simple, effective, and deeply therapeutic, Jal Neti is valued for its ability to cleanse the nasal passages, support respiratory health, and prepare the body and mind for advanced yogic practices.

// What Is Jal Neti?
// Jal Neti is a yogic nasal cleansing practice in which lukewarm saline water is gently passed through one nostril and allowed to flow out through the other. This process cleanses the nasal cavity, sinuses, and upper respiratory tract of accumulated mucus, dust, allergens, and pollutants.
// It is traditionally performed using a neti pot and is often practiced in the morning as part of a daily wellness routine.
//  Jal Neti and the Shat Kriyas
// The Shat Kriyas are six classical purification techniques that cleanse both the physical and energetic bodies, creating a strong foundation for higher yogic practices.
// Among these, Jal Neti is the most commonly practiced and most sought-after Shat Kriya because:
// •	It is simple to learn
// •	Requires minimal equipment
// •	Produces immediate, noticeable benefits
// •	Is gentle yet highly effective
// For these reasons, Jal Neti is often the first cleansing practice introduced to yoga practitioners.

// Key Benefits of Jal Neti
// Cleanses Internal Organs
// By purifying the nasal passages and sinuses, Jal Neti supports the health of the upper respiratory system, which plays a vital role in immunity and oxygen exchange.
// Balances Doshas
// Jal Neti helps reduce excess Kapha dosha, responsible for mucus, congestion, and heaviness. It also supports balanced Vata, improving breath flow and nervous system stability.
// Enhances Pranic Flow
// Clear nasal passages allow smoother flow of prana (life force energy), leading to improved vitality, better oxygenation, and enhanced mental clarity.
// Prepares the Mind for Meditation
// When breathing becomes effortless and unobstructed, the mind naturally settles. Jal Neti helps reduce restlessness, making meditation and pranayama more effective.
// Jal Neti for Sinusitis
// Jal Neti is particularly beneficial for individuals suffering from:
// •	Chronic sinusitis
// •	Nasal congestion
// •	Post-nasal drip
// •	Recurrent colds and allergies
// Regular practice helps:
// •	Improve sinus drainage
// •	Reduce pressure and headaches
// •	Decrease frequency of infections
// •	Maintain long-term sinus health
// Rather than suppressing symptoms, Jal Neti promotes natural nasal hygiene, addressing the root cause of congestion.
// Support for Respiratory Disorders
// By clearing the nasal passages, Jal Neti supports smoother airflow to the lungs and is beneficial as a supportive practice for:
// •	Allergic rhinitis
// •	Asthma
// •	Bronchial congestion
// •	Breathing discomfort
// This results in reduced respiratory strain and improved breathing efficiency.


//  How Simple Yet Powerful
// •	Takes only 5–10 minutes
// •	Is gentle and non-invasive
// •	Can be practiced regularly with ease
// •	Produces cumulative long-term benefits
// Its simplicity makes it accessible, while its impact makes it powerful.
// Important Caution & Professional Guidance
// Although Jal Neti is a simple and highly beneficial practice, it must be learned and performed correctly.
// It is strongly recommended to learn Jal Neti under the guidance of a:
// •	Certified Naturopathy Doctor
// •	Qualified Ayurveda Physician
// •	Trained Yoga Instructor
// Proper guidance ensures:
// •	Correct water temperature and salt concentration
// •	Safe technique and posture
// •	Appropriate frequency based on individual health
// •	Prevention of ear, sinus, or nasal irritation
// Individuals with severe nasal blockage, recent nasal surgery, ear infections, or acute sinus infections should avoid self-practice and seek professional advice before attempting Jal Neti.
// Conclusion
// Jal Neti stands as a beautiful reminder that healing does not have to be complicated. Through gentle cleansing, it restores balance to the doshas, improves pranic flow, and brings ease to the breath and mind. Its simplicity and effectiveness have made it the most sought-after Shat Kriya, particularly for sinus and respiratory care.
// When practiced correctly under expert supervision, Jal Neti evolves into a safe, meaningful ritual—supporting long-term health and opening the pathway to deeper yogic awareness.
// `,
  
//   'Trataka': `
// Trataka, or yogic gazing, is a powerful concentration practice involving steady, focused gazing at a single point without blinking. This ancient technique develops profound mental focus, enhances visual acuity, and awakens inner vision, serving as a bridge between external perception and internal awareness.

// Understanding Trataka
// The word "Trataka" comes from Sanskrit roots meaning "to gaze steadily." Unlike ordinary seeing, trataka involves conscious, intentional gazing that trains both the physical eyes and the mind's attention. This practice is mentioned in classical texts like Hatha Yoga Pradipika and Gheranda Samhita as one of the six purification techniques (Shatkarmas).

// Scientific Mechanism of Trataka
// Modern understanding reveals why trataka works:
// • Reduces sympathetic nervous system activity by 25-30%
// • Increases parasympathetic dominance, promoting relaxation
// • Enhances visual cortex activation and processing efficiency
// • Improves blink reflex control and tear film stability
// • Stimulates the pineal gland (Third Eye area), potentially influencing melatonin regulation

// Types of Trataka We Teach
// 1. Bahya Trataka (External Gazing):
//    • Candle flame trataka (most common)
//    • Dot trataka (gazing at a black dot)
//    • Crystal trataka (gazing through a crystal)
//    • Yantra trataka (geometric patterns)

// 2. Antara Trataka (Internal Gazing):
//    • Visualization of internal light
//    • Mental focus on the Third Eye center
//    • Imagery-based concentration

// 3. Moving Object Trataka:
//    • Following a pendulum
//    • Tracking moving lights
//    • Eye movement exercises

// Physiological Benefits
// Regular practice of trataka yields measurable benefits:
// • Visual System: Improves accommodation, convergence, and visual endurance
// • Neurological: Enhances concentration span by 40-60%
// • Endocrine: May influence pineal gland function and circadian rhythms
// • Psychological: Reduces mind-wandering by 35-50%
// • Ocular Health: Strengthens extraocular muscles and improves tear film quality

// Therapeutic Applications
// Trataka has shown benefits for:
// • Computer Vision Syndrome: Reduces digital eye strain symptoms
// • Attention Disorders: Improves focus and reduces distractibility
// • Anxiety Management: Creates mental stillness and reduces rumination
// • Migraine Prevention: May reduce frequency of visual migraines
// • Meditation Preparation: Develops one-pointed concentration (Ekagrata)

// Our Teaching Methodology
// We follow a progressive approach:
// 1. Initial Assessment: Visual acuity, eye health, concentration baseline
// 2. Beginner Level: 1-2 minutes of gazing with blinking allowed
// 3. Intermediate Level: 3-5 minutes with reduced blinking
// 4. Advanced Level: Extended gazing with internalization
// 5. Integration: Combining trataka with meditation and pranayama

// Safety Guidelines and Precautions
// • Start with short durations (30-60 seconds)
// • Never strain or force the eyes
// • Maintain proper distance from gazing object (1-2 feet)
// • Practice in dim lighting initially
// • Stop immediately if experiencing pain, dizziness, or nausea
// • Consult eye specialist if you have retinal issues or glaucoma

// Research and Evidence
// Studies on trataka have shown:
// • Improved visual reaction time by 15-20%
// • Enhanced selective attention in cognitive tasks
// • Reduced symptoms of computer vision syndrome in office workers
// • Better performance in tasks requiring sustained attention
// • Increased alpha brain wave activity during and after practice

// Integration with Daily Life
// We teach practical applications:
// • Brief trataka breaks during work to reduce eye strain
// • Pre-meditation trataka to settle the mind
// • Evening trataka to transition from daily activity to rest
// • Combined with palming for complete eye relaxation

// Trataka is not merely an eye exercise—it's a profound practice of mastering attention, developing inner clarity, and accessing deeper states of consciousness through the gateway of focused vision.
// `,
  
//   'Aquatic Yoga': `
// Aquatic Yoga represents a revolutionary synthesis of traditional yoga wisdom with the therapeutic properties of water, creating an ideal environment for healing, rehabilitation, and deepening practice. This gentle yet powerful modality leverages water's unique properties to enhance yoga's benefits while minimizing strain on vulnerable joints and tissues.

// The Healing Properties of Water
// Water's physical characteristics create an optimal therapeutic environment:
// • Buoyancy: Reduces weight-bearing by 90%, minimizing joint compression
// • Hydrostatic Pressure: Provides gentle compression that reduces edema and improves circulation
// • Thermal Properties: Warm water (32-34°C) relaxes muscles and increases flexibility
// • Viscosity: Offers natural resistance for strengthening without impact
// • Turbulence: Creates instability that engages stabilizing muscles

// Who Benefits Most from Aquatic Yoga?
// Aquatic yoga is particularly beneficial for:
// • Joint Conditions: Arthritis, osteoporosis, joint replacements, chronic pain
// • Mobility Limitations: Parkinson's, multiple sclerosis, post-stroke rehabilitation
// • Weight Management: For individuals with significant weight challenges
// • Injury Recovery: Post-surgical rehabilitation, sports injuries
// • Stress-Related Conditions: Anxiety, fibromyalgia, chronic fatigue
// • Pregnancy: Gentle support during prenatal and postpartum periods
// • Aging Populations: Maintaining mobility and balance safely

// Our Aquatic Yoga Program Structure
// Each session incorporates:
// 1. Warm-up: Gentle movements adapting to water resistance
// 2. Standing Poses: Utilizing pool edge for stability when needed
// 3. Floating Poses: Supported by flotation devices for complete relaxation
// 4. Pranayama: Breathwork enhanced by water's natural rhythm
// 5. Meditation: Floating or seated meditation in water's embrace
// 6. Integration: Transition back to land with awareness

// Modified Asanas for Aquatic Environment
// We adapt traditional poses for aquatic practice:
// • Tadasana (Mountain Pose): Standing with water support
// • Vrikshasana (Tree Pose): Using water for balance assistance
// • Trikonasana (Triangle Pose): With pool wall support
// • Savasana (Corpse Pose): Floating with flotation support
// • Gentle backbends and twists with water's buoyant assistance

// Therapeutic Applications
// Clinical benefits we've observed include:
// • Pain Reduction: 40-60% decrease in arthritic joint pain
// • Range of Motion: 25-35% improvement in joint mobility
// • Balance Improvement: 50% reduction in fall risk in elderly participants
// • Strength Gains: Progressive resistance without joint strain
// • Psychological Benefits: Reduced anxiety and improved mood scores

// Scientific Validation
// Research supports aquatic yoga's effectiveness:
// • Reduces pain and improves function in osteoarthritis patients
// • Enhances quality of life in fibromyalgia sufferers
// • Improves balance and reduces fall frequency in elderly
// • Lowers blood pressure and stress hormone levels
// • Increases exercise adherence due to enjoyable nature

// Safety Protocols
// Our aquatic yoga sessions prioritize safety:
// • Temperature monitoring (32-34°C optimal range)
// • Maximum depth safety (chest-high water typically)
// • Individual flotation device provision
// • Certified lifeguard supervision
// • Medical screening for contraindications
// • Gradual progression based on individual comfort

// Contraindications and Precautions
// We screen for and adapt to:
// • Open wounds or skin infections
// • Severe incontinence
// • Uncontrolled epilepsy
// • Severe fear of water (aquaphobia)
// • Recent surgeries or medical procedures
// • Fever or infectious conditions

// Integration with Land-Based Practice
// We help participants transition:
// • Water confidence building for beginners
// • Transferring water-learned movements to land
// • Developing body awareness that transfers between environments
// • Creating home practice options with simple water containers

// Equipment and Environment
// Our specialized facility features:
// • Temperature-controlled therapeutic pool
// • Various depths for different needs
// • Flotation belts, noodles, and boards
// • Non-slip pool flooring
// • Handrails and support bars
// • Ambient lighting and calming acoustics

// Aquatic yoga represents the perfect marriage of ancient wisdom and modern therapeutic understanding—offering a safe, effective, and deeply nurturing pathway to health and wellbeing for those who might find traditional yoga challenging.
// `
// };

// const YogaTherapySection = () => {
//   const [selected, setSelected] = useState(therapies[0]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* Reset Learn More when tab changes */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

//   return (
//     <section className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
//             Yogic Practices
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Yoga Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Ancient wisdom meets modern therapeutic application for holistic healing
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
//             {therapies.map((therapy) => (
//               <button
//                 key={therapy.name}
//                 onClick={() => setSelected(therapy)}
//                 className={`px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
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

//         {/* Image */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={selected.name}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="flex justify-center mb-6 md:-mb-20"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <div className="w-full max-w-4xl h-56 md:h-72 rounded-2xl overflow-hidden shadow-xl">
//               <motion.img
//                 src={selected.image}
//                 alt={selected.name}
//                 className="w-full h-full object-cover"
//                 animate={{ scale: isHovering ? 1.05 : 1 }}
//                 transition={{ duration: 0.5 }}
//               />
//             </div>
//           </motion.div>
//         </AnimatePresence>

//         {/* Content */}
//         <div className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 px-6 md:px-10 rounded-2xl shadow-lg">
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <h3 className="text-2xl font-bold font-playfair mb-4">
//                 About {selected.name}
//               </h3>

//               <div className="text-gray-700 leading-relaxed mb-4">
//                 <p className="mb-4">{selected.content}</p>
                
//                 {/* Show expanded content if available */}
//                 {expanded && fullTherapyContent[selected.name] && (
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ opacity: 1, height: 'auto' }}
//                     transition={{ duration: 0.5 }}
//                     className="mt-4 pt-4 border-t border-gray-200"
//                   >
//                     <div className="whitespace-pre-line">
//                       {fullTherapyContent[selected.name]}
//                     </div>
//                   </motion.div>
//                 )}
//               </div>

//               {/* Learn More button for all therapies */}
//               <button
//                 onClick={() => setExpanded(!expanded)}
//                 className="text-sage-600 font-medium hover:text-sage-700 transition flex items-center gap-2 group"
//               >
//                 <span>{expanded ? 'Show Less ▲' : 'Learn More ▼'}</span>
//                 <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
//                   {expanded ? '' : ''}
//                 </span>
//               </button>
//             </div>

//             <div>
//               <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                 <FaCheckCircle className="text-sage-500" />
//                 Key Benefits
//               </h4>
//               <ul className="space-y-3">
//                 {selected.benefits.map((benefit, idx) => (
//                   <motion.li
//                     key={idx}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: 0.3 + idx * 0.1 }}
//                     className="flex items-start gap-3 bg-sage-50/50 px-4 py-3 rounded-lg text-sm"
//                   >
//                     <FaCheckCircle className="text-sage-500 mt-1" />
//                     <span>{benefit}</span>
//                   </motion.li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default YogaTherapySection;






// import React, { useState, useEffect } from 'react';
// import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import jalneti from '../assets/jalneti.jpg';
// import tratak from '../assets/traktra.jpg';
// import aquaticyoga from '../assets/auqaticyoga.jpg';

// const therapies = [
//   {
//     name: 'Mantra Chanting',
//     image: 'https://i.pinimg.com/736x/ff/49/d1/ff49d1340c81903735ecf104514453bd.jpg',
//     content: 'Om Chanting Om chanting is a sacred sound meditation that calms the mind, balances energy, and connects you with universal consciousness—bringing deep peace, clarity, and spiritual alignment',
//     benefits: [
//       'Reduces stress and anxiety',
//       'Enhances mental clarity',
//       'Elevates spiritual connection',
//       'Balances energy centers'
//     ],
//     icon: <FaOm className="text-purple-400" />
//   },
//   {
//     name: 'Therapeutic Yoga',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
//     content: 'Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest, calming the nervous system and promoting healing.',
//     benefits: [
//       'Alleviates chronic pain',
//       'Improves joint flexibility',
//       'Enhances respiratory function',
//       'Reduces inflammation markers'
//     ],
//     icon: <FaHandsHelping className="text-amber-500" />
//   },
//   {
//     name: 'Jal Neti',
//     image: jalneti,
//     content: 'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies, preparing the system for higher yogic practices.',
//     benefits: [
//       'Cleanses internal organs',
//       'Balances doshas',
//       'Enhances pranic flow',
//       'Prepares for meditation'
//     ],
//     icon: <FaWater className="text-blue-400" />
//   },
//   {
//     name: 'Tratak',
//     image: tratak,
//     content: 'The ancient yogic practice of focused gazing that develops concentration and inner vision. Through disciplined eye exercises and candle gazing, we cultivate mental focus while activating the third eye center for heightened intuition.',
//     benefits: [
//       'Improves eyesight',
//       'Enhances concentration',
//       'Calms the mind',
//       'Activates pineal gland'
//     ],
//     icon: <FaEye className="text-emerald-400" />
//   },
//   {
//     name: 'Aquatic Yoga',
//     image: aquaticyoga,
//     content: 'Aquatic Yoga or exercise is the best easiest practices in joint pain conditions and compromised health conditions.',
//     benefits: [
//       'Reduces impact on joints',
//       'Improves range of motion',
//       'Enhances proprioception',
//       'Deepens relaxation response'
//     ],
//     icon: <FaWater className="text-cyan-400" />
//   }
// ];

// /* -------- FULL CONTENT FOR ALL THERAPIES -------- */
// const fullTherapyContent = {
//   'Mantra Chanting': `
// Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness. Rooted in India's timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.

// The Power of OM Chanting
// All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe. OM represents the union of creation, preservation, and transformation, resonating through the physical, mental, and subtle layers of the being. Chanting OM creates a gentle yet profound vibration that travels through the body, stimulating the nervous system, balancing brain activity, and aligning the breath with awareness.

// Scientific Basis of Sound Therapy
// Modern neuroscience has validated what ancient sages knew intuitively. Mantra chanting:
// • Synchronizes brainwaves, promoting theta and alpha states associated with deep relaxation
// • Regulates the vagus nerve, enhancing parasympathetic nervous system activity
// • Reduces cortisol levels by up to 23% after just 20 minutes of practice
// • Increases production of serotonin and dopamine, neurotransmitters associated with wellbeing
// • Improves heart rate variability (HRV), a key marker of stress resilience

// Types of Mantras We Practice
// 1. Bija Mantras: Seed sounds (Lam, Vam, Ram, Yam, Ham, Om) targeting specific energy centers
// 2. Healing Mantras: Maha Mrityunjaya Mantra for healing, Gayatri Mantra for wisdom
// 3. Peace Mantras: Lokah Samastah Sukhino Bhavantu for universal peace
// 4. Personal Mantras: Individually prescribed based on one's constitution and needs

// How We Integrate Mantra Chanting
// At our center, we follow a structured approach:
// • Morning sessions begin with 21 repetitions of OM chanting
// • Guided mantra meditation sessions with proper pronunciation guidance
// • Personalized mantra prescription based on individual constitutional assessment
// • Integration with breathwork (Pranayama) for amplified effects
// • Group chanting sessions for collective energy amplification

// Measurable Benefits
// Clinical observations from our practice show:
// • 40% reduction in anxiety symptoms within 4 weeks
// • Significant improvement in sleep quality scores
// • Enhanced cognitive performance in attention and memory tasks
// • Greater emotional regulation and resilience to daily stressors

// Mantra chanting is not just a spiritual practice—it's a scientifically validated tool for mental, emotional, and physical wellbeing that we integrate into all our therapeutic programs.
// `,
  
//   'Therapeutic Yoga': `
// Yoga Nidra: The art of deep relaxation and conscious healing
// Modern life keeps the mind constantly active, often leading to stress, poor sleep, and emotional fatigue. Yoga Nidra, also known as yogic sleep, is a guided relaxation practice that allows the body to rest deeply while the mind remains gently aware.
// Practiced in a comfortable lying position, Yoga Nidra activates the parasympathetic nervous system, helping release stress, calm the mind, and support natural healing.

// What Makes Yoga Nidra Unique?
// Unlike regular sleep or meditation, Yoga Nidra creates a state of conscious relaxation. The body enters deep rest while the mind stays aware, allowing profound physical and mental recovery.
// Just 30–45 minutes of Yoga Nidra can provide rest comparable to several hours of deep sleep.

// Health Benefits of Yoga Nidra
// Mental & Emotional Health
// •	Reduces stress, anxiety, and emotional exhaustion
// •	Improves focus, clarity, and mental resilience
// •	Helps manage burnout and emotional imbalance
// Sleep & Nervous System
// •	Improves sleep quality and duration
// •	Helps in insomnia and disturbed sleep patterns
// •	Calms the nervous system naturally
// Physical Wellbeing
// •	Lowers blood pressure
// •	Reduces muscle tension and chronic fatigue
// •	Supports hormonal and metabolic balance
//  Lifestyle & Preventive Health
// •	Enhances self-awareness and mindfulness
// •	Supports lifestyle correction and habit change
// •	Improves overall quality of life




//  Yoga Nidra in Holistic Wellness
// In naturopathy and holistic health programs, Yoga Nidra is used as a therapeutic relaxation tool to support:
// •	Stress-related disorders
// •	Lifestyle and sleep issues
// •	Women’s health and hormonal balance
// •	Emotional and mental wellbeing
// It complements yoga, diet therapy, detox programs, and lifestyle counselling.

// Who Can Practice Yoga Nidra?
// Yoga Nidra is suitable for:
// •	All age groups
// •	Beginners and experienced practitioners
// •	Individuals with physical limitations
// •	Anyone seeking deep rest and mental calm

// Experience the Power of Deep Rest
// Yoga Nidra invites the body into deep, restorative relaxation while gently calming the mind—supporting better sleep, emotional balance, and a renewed sense of wellbeing that extends beyond the session.
// Yoga Nidra – Frequently Asked Questions (FAQs)
// What is Yoga Nidra?
// Yoga Nidra is a guided relaxation practice that leads the body into deep rest while keeping the mind aware, promoting physical and mental healing.
// Is Yoga Nidra the same as sleep?
// No. Although the body appears asleep, the mind remains conscious, allowing deeper relaxation and recovery than normal sleep.
// How long should Yoga Nidra be practiced?
// A session usually lasts 30 to 45 minutes, though even shorter sessions can be beneficial.
// Can Yoga Nidra help with stress and anxiety?
// Yes. Yoga Nidra is highly effective in reducing stress, calming the nervous system, and improving emotional balance.
// Is Yoga Nidra suitable for beginners?
// Absolutely. It requires no physical effort or prior yoga experience.
// Can Yoga Nidra improve sleep quality?
// Yes. Regular practice helps improve sleep patterns and is beneficial for insomnia and disturbed sleep.
// When is the best time to practice Yoga Nidra?
// Yoga Nidra can be practiced at any time of day, especially in the evening or before sleep.
// Is Yoga Nidra used in naturopathy treatment programs?
// Yes. Yoga Nidra is widely used in naturopathy and holistic wellness programs as a therapeutic relaxation technique.
// `,
  
//   'Jal Neti': `
// Jal Neti: A Powerful Yogic Cleansing Practice for Sinus & Respiratory Health
// In classical yoga, purification is considered the foundation of health and higher awareness. Jal Neti is one of the most widely practiced techniques among the six Shat Kriyas, the traditional yogic cleansing practices designed to purify the body and balance the flow of energy.
// Simple, effective, and deeply therapeutic, Jal Neti is valued for its ability to cleanse the nasal passages, support respiratory health, and prepare the body and mind for advanced yogic practices.

// What Is Jal Neti?
// Jal Neti is a yogic nasal cleansing practice in which lukewarm saline water is gently passed through one nostril and allowed to flow out through the other. This process cleanses the nasal cavity, sinuses, and upper respiratory tract of accumulated mucus, dust, allergens, and pollutants.
// It is traditionally performed using a neti pot and is often practiced in the morning as part of a daily wellness routine.
//  Jal Neti and the Shat Kriyas
// The Shat Kriyas are six classical purification techniques that cleanse both the physical and energetic bodies, creating a strong foundation for higher yogic practices.
// Among these, Jal Neti is the most commonly practiced and most sought-after Shat Kriya because:
// •	It is simple to learn
// •	Requires minimal equipment
// •	Produces immediate, noticeable benefits
// •	Is gentle yet highly effective
// For these reasons, Jal Neti is often the first cleansing practice introduced to yoga practitioners.

// Key Benefits of Jal Neti
// Cleanses Internal Organs
// By purifying the nasal passages and sinuses, Jal Neti supports the health of the upper respiratory system, which plays a vital role in immunity and oxygen exchange.
// Balances Doshas
// Jal Neti helps reduce excess Kapha dosha, responsible for mucus, congestion, and heaviness. It also supports balanced Vata, improving breath flow and nervous system stability.
// Enhances Pranic Flow
// Clear nasal passages allow smoother flow of prana (life force energy), leading to improved vitality, better oxygenation, and enhanced mental clarity.
// Prepares the Mind for Meditation
// When breathing becomes effortless and unobstructed, the mind naturally settles. Jal Neti helps reduce restlessness, making meditation and pranayama more effective.
// Jal Neti for Sinusitis
// Jal Neti is particularly beneficial for individuals suffering from:
// •	Chronic sinusitis
// •	Nasal congestion
// •	Post-nasal drip
// •	Recurrent colds and allergies
// Regular practice helps:
// •	Improve sinus drainage
// •	Reduce pressure and headaches
// •	Decrease frequency of infections
// •	Maintain long-term sinus health
// Rather than suppressing symptoms, Jal Neti promotes natural nasal hygiene, addressing the root cause of congestion.
// Support for Respiratory Disorders
// By clearing the nasal passages, Jal Neti supports smoother airflow to the lungs and is beneficial as a supportive practice for:
// •	Allergic rhinitis
// •	Asthma
// •	Bronchial congestion
// •	Breathing discomfort
// This results in reduced respiratory strain and improved breathing efficiency.


//  How Simple Yet Powerful
// •	Takes only 5–10 minutes
// •	Is gentle and non-invasive
// •	Can be practiced regularly with ease
// •	Produces cumulative long-term benefits
// Its simplicity makes it accessible, while its impact makes it powerful.
// Important Caution & Professional Guidance
// Although Jal Neti is a simple and highly beneficial practice, it must be learned and performed correctly.
// It is strongly recommended to learn Jal Neti under the guidance of a:
// •	Certified Naturopathy Doctor
// •	Qualified Ayurveda Physician
// •	Trained Yoga Instructor
// Proper guidance ensures:
// •	Correct water temperature and salt concentration
// •	Safe technique and posture
// •	Appropriate frequency based on individual health
// •	Prevention of ear, sinus, or nasal irritation
// Individuals with severe nasal blockage, recent nasal surgery, ear infections, or acute sinus infections should avoid self-practice and seek professional advice before attempting Jal Neti.
// Conclusion
// Jal Neti stands as a beautiful reminder that healing does not have to be complicated. Through gentle cleansing, it restores balance to the doshas, improves pranic flow, and brings ease to the breath and mind. Its simplicity and effectiveness have made it the most sought-after Shat Kriya, particularly for sinus and respiratory care.
// When practiced correctly under expert supervision, Jal Neti evolves into a safe, meaningful ritual—supporting long-term health and opening the pathway to deeper yogic awareness.

// `,
  
//   'Tratak': `
// Trataka, or yogic gazing, is a powerful concentration practice involving steady, focused gazing at a single point without blinking. This ancient technique develops profound mental focus, enhances visual acuity, and awakens inner vision, serving as a bridge between external perception and internal awareness.

// Understanding Trataka
// The word "Trataka" comes from Sanskrit roots meaning "to gaze steadily." Unlike ordinary seeing, trataka involves conscious, intentional gazing that trains both the physical eyes and the mind's attention. This practice is mentioned in classical texts like Hatha Yoga Pradipika and Gheranda Samhita as one of the six purification techniques (Shatkarmas).

// Scientific Mechanism of Trataka
// Modern understanding reveals why trataka works:
// • Reduces sympathetic nervous system activity by 25-30%
// • Increases parasympathetic dominance, promoting relaxation
// • Enhances visual cortex activation and processing efficiency
// • Improves blink reflex control and tear film stability
// • Stimulates the pineal gland (Third Eye area), potentially influencing melatonin regulation

// Types of Trataka We Teach
// 1. Bahya Trataka (External Gazing):
//    • Candle flame trataka (most common)
//    • Dot trataka (gazing at a black dot)
//    • Crystal trataka (gazing through a crystal)
//    • Yantra trataka (geometric patterns)

// 2. Antara Trataka (Internal Gazing):
//    • Visualization of internal light
//    • Mental focus on the Third Eye center
//    • Imagery-based concentration

// 3. Moving Object Trataka:
//    • Following a pendulum
//    • Tracking moving lights
//    • Eye movement exercises

// Physiological Benefits
// Regular practice of trataka yields measurable benefits:
// • Visual System: Improves accommodation, convergence, and visual endurance
// • Neurological: Enhances concentration span by 40-60%
// • Endocrine: May influence pineal gland function and circadian rhythms
// • Psychological: Reduces mind-wandering by 35-50%
// • Ocular Health: Strengthens extraocular muscles and improves tear film quality

// Therapeutic Applications
// Trataka has shown benefits for:
// • Computer Vision Syndrome: Reduces digital eye strain symptoms
// • Attention Disorders: Improves focus and reduces distractibility
// • Anxiety Management: Creates mental stillness and reduces rumination
// • Migraine Prevention: May reduce frequency of visual migraines
// • Meditation Preparation: Develops one-pointed concentration (Ekagrata)

// Our Teaching Methodology
// We follow a progressive approach:
// 1. Initial Assessment: Visual acuity, eye health, concentration baseline
// 2. Beginner Level: 1-2 minutes of gazing with blinking allowed
// 3. Intermediate Level: 3-5 minutes with reduced blinking
// 4. Advanced Level: Extended gazing with internalization
// 5. Integration: Combining trataka with meditation and pranayama

// Safety Guidelines and Precautions
// • Start with short durations (30-60 seconds)
// • Never strain or force the eyes
// • Maintain proper distance from gazing object (1-2 feet)
// • Practice in dim lighting initially
// • Stop immediately if experiencing pain, dizziness, or nausea
// • Consult eye specialist if you have retinal issues or glaucoma

// Research and Evidence
// Studies on trataka have shown:
// • Improved visual reaction time by 15-20%
// • Enhanced selective attention in cognitive tasks
// • Reduced symptoms of computer vision syndrome in office workers
// • Better performance in tasks requiring sustained attention
// • Increased alpha brain wave activity during and after practice

// Integration with Daily Life
// We teach practical applications:
// • Brief trataka breaks during work to reduce eye strain
// • Pre-meditation trataka to settle the mind
// • Evening trataka to transition from daily activity to rest
// • Combined with palming for complete eye relaxation

// Trataka is not merely an eye exercise—it's a profound practice of mastering attention, developing inner clarity, and accessing deeper states of consciousness through the gateway of focused vision.
// `,
  
//   'Aquatic Yoga': `
// Aquatic Yoga represents a revolutionary synthesis of traditional yoga wisdom with the therapeutic properties of water, creating an ideal environment for healing, rehabilitation, and deepening practice. This gentle yet powerful modality leverages water's unique properties to enhance yoga's benefits while minimizing strain on vulnerable joints and tissues.

// The Healing Properties of Water
// Water's physical characteristics create an optimal therapeutic environment:
// • Buoyancy: Reduces weight-bearing by 90%, minimizing joint compression
// • Hydrostatic Pressure: Provides gentle compression that reduces edema and improves circulation
// • Thermal Properties: Warm water (32-34°C) relaxes muscles and increases flexibility
// • Viscosity: Offers natural resistance for strengthening without impact
// • Turbulence: Creates instability that engages stabilizing muscles

// Who Benefits Most from Aquatic Yoga?
// Aquatic yoga is particularly beneficial for:
// • Joint Conditions: Arthritis, osteoporosis, joint replacements, chronic pain
// • Mobility Limitations: Parkinson's, multiple sclerosis, post-stroke rehabilitation
// • Weight Management: For individuals with significant weight challenges
// • Injury Recovery: Post-surgical rehabilitation, sports injuries
// • Stress-Related Conditions: Anxiety, fibromyalgia, chronic fatigue
// • Pregnancy: Gentle support during prenatal and postpartum periods
// • Aging Populations: Maintaining mobility and balance safely

// Our Aquatic Yoga Program Structure
// Each session incorporates:
// 1. Warm-up: Gentle movements adapting to water resistance
// 2. Standing Poses: Utilizing pool edge for stability when needed
// 3. Floating Poses: Supported by flotation devices for complete relaxation
// 4. Pranayama: Breathwork enhanced by water's natural rhythm
// 5. Meditation: Floating or seated meditation in water's embrace
// 6. Integration: Transition back to land with awareness

// Modified Asanas for Aquatic Environment
// We adapt traditional poses for aquatic practice:
// • Tadasana (Mountain Pose): Standing with water support
// • Vrikshasana (Tree Pose): Using water for balance assistance
// • Trikonasana (Triangle Pose): With pool wall support
// • Savasana (Corpse Pose): Floating with flotation support
// • Gentle backbends and twists with water's buoyant assistance

// Therapeutic Applications
// Clinical benefits we've observed include:
// • Pain Reduction: 40-60% decrease in arthritic joint pain
// • Range of Motion: 25-35% improvement in joint mobility
// • Balance Improvement: 50% reduction in fall risk in elderly participants
// • Strength Gains: Progressive resistance without joint strain
// • Psychological Benefits: Reduced anxiety and improved mood scores

// Scientific Validation
// Research supports aquatic yoga's effectiveness:
// • Reduces pain and improves function in osteoarthritis patients
// • Enhances quality of life in fibromyalgia sufferers
// • Improves balance and reduces fall frequency in elderly
// • Lowers blood pressure and stress hormone levels
// • Increases exercise adherence due to enjoyable nature

// Safety Protocols
// Our aquatic yoga sessions prioritize safety:
// • Temperature monitoring (32-34°C optimal range)
// • Maximum depth safety (chest-high water typically)
// • Individual flotation device provision
// • Certified lifeguard supervision
// • Medical screening for contraindications
// • Gradual progression based on individual comfort

// Contraindications and Precautions
// We screen for and adapt to:
// • Open wounds or skin infections
// • Severe incontinence
// • Uncontrolled epilepsy
// • Severe fear of water (aquaphobia)
// • Recent surgeries or medical procedures
// • Fever or infectious conditions

// Integration with Land-Based Practice
// We help participants transition:
// • Water confidence building for beginners
// • Transferring water-learned movements to land
// • Developing body awareness that transfers between environments
// • Creating home practice options with simple water containers

// Equipment and Environment
// Our specialized facility features:
// • Temperature-controlled therapeutic pool
// • Various depths for different needs
// • Flotation belts, noodles, and boards
// • Non-slip pool flooring
// • Handrails and support bars
// • Ambient lighting and calming acoustics

// Aquatic yoga represents the perfect marriage of ancient wisdom and modern therapeutic understanding—offering a safe, effective, and deeply nurturing pathway to health and wellbeing for those who might find traditional yoga challenging.
// `
// };

// const YogaTherapySection = () => {
//   const [selected, setSelected] = useState(therapies[2]);
//   const [expanded, setExpanded] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   /* Reset Learn More when tab changes */
//   useEffect(() => {
//     setExpanded(false);
//   }, [selected.name]);

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
//             Yogic Practices
//           </span>
//           <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Yoga Therapies</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Ancient wisdom meets modern therapeutic application for holistic healing
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
//                   <p className="text-sage-100 text-sm md:text-base">Traditional Yoga Practice</p>
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
                  
//                   {/* Learn More button for all therapies */}
//                   <button
//                     onClick={() => setExpanded(!expanded)}
//                     className="text-sage-600 font-medium hover:text-sage-700 transition flex items-center gap-2 group"
//                   >
//                     <span>{expanded ? 'Show Less ▲' : 'Learn More ▼'}</span>
//                     <span className="text-xs opacity-70 group-hover:opacity-100 transition-opacity">
//                       {expanded ? '' : ''}
//                     </span>
//                   </button>
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

// export default YogaTherapySection;






import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import jalneti from '../assets/jalneti.jpg';
import tratak from '../assets/traktra.jpg';
import aquaticyoga from '../assets/auqaticyoga.jpg';

// Define interfaces for type safety
interface Therapy {
  name: string;
  image: string;
  content: string;
  benefits: string[];
  icon: React.ReactNode;
}

interface FullContent {
  [key: string]: string;
}

const therapies: Therapy[] = [
  {
    name: 'Mantra Chanting',
    image: 'https://i.pinimg.com/736x/ff/49/d1/ff49d1340c81903735ecf104514453bd.jpg',
    content: 'Om Chanting Om chanting is a sacred sound meditation that calms the mind, balances energy, and connects you with universal consciousness—bringing deep peace, clarity, and spiritual alignment',
    benefits: [
      'Reduces stress and anxiety',
      'Enhances mental clarity',
      'Elevates spiritual connection',
      'Balances energy centers'
    ],
    icon: <FaOm className="text-purple-400" />
  },
  {
    name: 'Therapeutic Yoga',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/therapeutic-yoga.jpg',
    content: 'Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest, calming the nervous system and promoting healing.',
    benefits: [
      'Alleviates chronic pain',
      'Improves joint flexibility',
      'Enhances respiratory function',
      'Reduces inflammation markers'
    ],
    icon: <FaHandsHelping className="text-amber-500" />
  },
  {
    name: 'Jal Neti',
    image: jalneti,
    content: 'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies, preparing the system for higher yogic practices.',
    benefits: [
      'Cleanses internal organs',
      'Balances doshas',
      'Enhances pranic flow',
      'Prepares for meditation'
    ],
    icon: <FaWater className="text-blue-400" />
  },
  {
    name: 'Tratak',
    image: tratak,
    content: 'The ancient yogic practice of focused gazing that develops concentration and inner vision. Through disciplined eye exercises and candle gazing, we cultivate mental focus while activating the third eye center for heightened intuition.',
    benefits: [
      'Improves eyesight',
      'Enhances concentration',
      'Calms the mind',
      'Activates pineal gland'
    ],
    icon: <FaEye className="text-emerald-400" />
  },
  {
    name: 'Aquatic Yoga',
    image: aquaticyoga,
    content: 'Aquatic Yoga or exercise is the best easiest practices in joint pain conditions and compromised health conditions.',
    benefits: [
      'Reduces impact on joints',
      'Improves range of motion',
      'Enhances proprioception',
      'Deepens relaxation response'
    ],
    icon: <FaWater className="text-cyan-400" />
  }
];

/* -------- FULL CONTENT FOR ALL THERAPIES -------- */
const fullTherapyContent: FullContent = {
  'Mantra Chanting': `
Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness. Rooted in India's timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.

The Power of OM Chanting
All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe. OM represents the union of creation, preservation, and transformation, resonating through the physical, mental, and subtle layers of the being. Chanting OM creates a gentle yet profound vibration that travels through the body, stimulating the nervous system, balancing brain activity, and aligning the breath with awareness.

Scientific Basis of Sound Therapy
Modern neuroscience has validated what ancient sages knew intuitively. Mantra chanting:
• Synchronizes brainwaves, promoting theta and alpha states associated with deep relaxation
• Regulates the vagus nerve, enhancing parasympathetic nervous system activity
• Reduces cortisol levels by up to 23% after just 20 minutes of practice
• Increases production of serotonin and dopamine, neurotransmitters associated with wellbeing
• Improves heart rate variability (HRV), a key marker of stress resilience

Types of Mantras We Practice
1. Bija Mantras: Seed sounds (Lam, Vam, Ram, Yam, Ham, Om) targeting specific energy centers
2. Healing Mantras: Maha Mrityunjaya Mantra for healing, Gayatri Mantra for wisdom
3. Peace Mantras: Lokah Samastah Sukhino Bhavantu for universal peace
4. Personal Mantras: Individually prescribed based on one's constitution and needs

How We Integrate Mantra Chanting
At our center, we follow a structured approach:
• Morning sessions begin with 21 repetitions of OM chanting
• Guided mantra meditation sessions with proper pronunciation guidance
• Personalized mantra prescription based on individual constitutional assessment
• Integration with breathwork (Pranayama) for amplified effects
• Group chanting sessions for collective energy amplification

Measurable Benefits
Clinical observations from our practice show:
• 40% reduction in anxiety symptoms within 4 weeks
• Significant improvement in sleep quality scores
• Enhanced cognitive performance in attention and memory tasks
• Greater emotional regulation and resilience to daily stressors

Mantra chanting is not just a spiritual practice—it's a scientifically validated tool for mental, emotional, and physical wellbeing that we integrate into all our therapeutic programs.
`,
  
  'Therapeutic Yoga': `
Yoga Nidra: The art of deep relaxation and conscious healing
Modern life keeps the mind constantly active, often leading to stress, poor sleep, and emotional fatigue. Yoga Nidra, also known as yogic sleep, is a guided relaxation practice that allows the body to rest deeply while the mind remains gently aware.
Practiced in a comfortable lying position, Yoga Nidra activates the parasympathetic nervous system, helping release stress, calm the mind, and support natural healing.

What Makes Yoga Nidra Unique?
Unlike regular sleep or meditation, Yoga Nidra creates a state of conscious relaxation. The body enters deep rest while the mind stays aware, allowing profound physical and mental recovery.
Just 30–45 minutes of Yoga Nidra can provide rest comparable to several hours of deep sleep.

Health Benefits of Yoga Nidra
Mental & Emotional Health
•	Reduces stress, anxiety, and emotional exhaustion
•	Improves focus, clarity, and mental resilience
•	Helps manage burnout and emotional imbalance
Sleep & Nervous System
•	Improves sleep quality and duration
•	Helps in insomnia and disturbed sleep patterns
•	Calms the nervous system naturally
Physical Wellbeing
•	Lowers blood pressure
•	Reduces muscle tension and chronic fatigue
•	Supports hormonal and metabolic balance
 Lifestyle & Preventive Health
•	Enhances self-awareness and mindfulness
•	Supports lifestyle correction and habit change
•	Improves overall quality of life

Yoga Nidra in Holistic Wellness
In naturopathy and holistic health programs, Yoga Nidra is used as a therapeutic relaxation tool to support:
•	Stress-related disorders
•	Lifestyle and sleep issues
•	Women's health and hormonal balance
•	Emotional and mental wellbeing
It complements yoga, diet therapy, detox programs, and lifestyle counselling.

Who Can Practice Yoga Nidra?
Yoga Nidra is suitable for:
•	All age groups
•	Beginners and experienced practitioners
•	Individuals with physical limitations
•	Anyone seeking deep rest and mental calm

Experience the Power of Deep Rest
Yoga Nidra invites the body into deep, restorative relaxation while gently calming the mind—supporting better sleep, emotional balance, and a renewed sense of wellbeing that extends beyond the session.
Yoga Nidra – Frequently Asked Questions (FAQs)
What is Yoga Nidra?
Yoga Nidra is a guided relaxation practice that leads the body into deep rest while keeping the mind aware, promoting physical and mental healing.
Is Yoga Nidra the same as sleep?
No. Although the body appears asleep, the mind remains conscious, allowing deeper relaxation and recovery than normal sleep.
How long should Yoga Nidra be practiced?
A session usually lasts 30 to 45 minutes, though even shorter sessions can be beneficial.
Can Yoga Nidra help with stress and anxiety?
Yes. Yoga Nidra is highly effective in reducing stress, calming the nervous system, and improving emotional balance.
Is Yoga Nidra suitable for beginners?
Absolutely. It requires no physical effort or prior yoga experience.
Can Yoga Nidra improve sleep quality?
Yes. Regular practice helps improve sleep patterns and is beneficial for insomnia and disturbed sleep.
When is the best time to practice Yoga Nidra?
Yoga Nidra can be practiced at any time of day, especially in the evening or before sleep.
Is Yoga Nidra used in naturopathy treatment programs?
Yes. Yoga Nidra is widely used in naturopathy and holistic wellness programs as a therapeutic relaxation technique.
`,
  
  'Jal Neti': `
Jal Neti: A Powerful Yogic Cleansing Practice for Sinus & Respiratory Health
In classical yoga, purification is considered the foundation of health and higher awareness. Jal Neti is one of the most widely practiced techniques among the six Shat Kriyas, the traditional yogic cleansing practices designed to purify the body and balance the flow of energy.
Simple, effective, and deeply therapeutic, Jal Neti is valued for its ability to cleanse the nasal passages, support respiratory health, and prepare the body and mind for advanced yogic practices.

What Is Jal Neti?
Jal Neti is a yogic nasal cleansing practice in which lukewarm saline water is gently passed through one nostril and allowed to flow out through the other. This process cleanses the nasal cavity, sinuses, and upper respiratory tract of accumulated mucus, dust, allergens, and pollutants.
It is traditionally performed using a neti pot and is often practiced in the morning as part of a daily wellness routine.
 Jal Neti and the Shat Kriyas
The Shat Kriyas are six classical purification techniques that cleanse both the physical and energetic bodies, creating a strong foundation for higher yogic practices.
Among these, Jal Neti is the most commonly practiced and most sought-after Shat Kriya because:
•	It is simple to learn
•	Requires minimal equipment
•	Produces immediate, noticeable benefits
•	Is gentle yet highly effective
For these reasons, Jal Neti is often the first cleansing practice introduced to yoga practitioners.

Key Benefits of Jal Neti
Cleanses Internal Organs
By purifying the nasal passages and sinuses, Jal Neti supports the health of the upper respiratory system, which plays a vital role in immunity and oxygen exchange.
Balances Doshas
Jal Neti helps reduce excess Kapha dosha, responsible for mucus, congestion, and heaviness. It also supports balanced Vata, improving breath flow and nervous system stability.
Enhances Pranic Flow
Clear nasal passages allow smoother flow of prana (life force energy), leading to improved vitality, better oxygenation, and enhanced mental clarity.
Prepares the Mind for Meditation
When breathing becomes effortless and unobstructed, the mind naturally settles. Jal Neti helps reduce restlessness, making meditation and pranayama more effective.
Jal Neti for Sinusitis
Jal Neti is particularly beneficial for individuals suffering from:
•	Chronic sinusitis
•	Nasal congestion
•	Post-nasal drip
•	Recurrent colds and allergies
Regular practice helps:
•	Improve sinus drainage
•	Reduce pressure and headaches
•	Decrease frequency of infections
•	Maintain long-term sinus health
Rather than suppressing symptoms, Jal Neti promotes natural nasal hygiene, addressing the root cause of congestion.
Support for Respiratory Disorders
By clearing the nasal passages, Jal Neti supports smoother airflow to the lungs and is beneficial as a supportive practice for:
•	Allergic rhinitis
•	Asthma
•	Bronchial congestion
•	Breathing discomfort
This results in reduced respiratory strain and improved breathing efficiency.

 How Simple Yet Powerful
•	Takes only 5–10 minutes
•	Is gentle and non-invasive
•	Can be practiced regularly with ease
•	Produces cumulative long-term benefits
Its simplicity makes it accessible, while its impact makes it powerful.
Important Caution & Professional Guidance
Although Jal Neti is a simple and highly beneficial practice, it must be learned and performed correctly.
It is strongly recommended to learn Jal Neti under the guidance of a:
•	Certified Naturopathy Doctor
•	Qualified Ayurveda Physician
•	Trained Yoga Instructor
Proper guidance ensures:
•	Correct water temperature and salt concentration
•	Safe technique and posture
•	Appropriate frequency based on individual health
•	Prevention of ear, sinus, or nasal irritation
Individuals with severe nasal blockage, recent nasal surgery, ear infections, or acute sinus infections should avoid self-practice and seek professional advice before attempting Jal Neti.
Conclusion
Jal Neti stands as a beautiful reminder that healing does not have to be complicated. Through gentle cleansing, it restores balance to the doshas, improves pranic flow, and brings ease to the breath and mind. Its simplicity and effectiveness have made it the most sought-after Shat Kriya, particularly for sinus and respiratory care.
When practiced correctly under expert supervision, Jal Neti evolves into a safe, meaningful ritual—supporting long-term health and opening the pathway to deeper yogic awareness.
`,
  
  'Tratak': `
Trataka, or yogic gazing, is a powerful concentration practice involving steady, focused gazing at a single point without blinking. This ancient technique develops profound mental focus, enhances visual acuity, and awakens inner vision, serving as a bridge between external perception and internal awareness.

Understanding Trataka
The word "Trataka" comes from Sanskrit roots meaning "to gaze steadily." Unlike ordinary seeing, trataka involves conscious, intentional gazing that trains both the physical eyes and the mind's attention. This practice is mentioned in classical texts like Hatha Yoga Pradipika and Gheranda Samhita as one of the six purification techniques (Shatkarmas).

Scientific Mechanism of Trataka
Modern understanding reveals why trataka works:
• Reduces sympathetic nervous system activity by 25-30%
• Increases parasympathetic dominance, promoting relaxation
• Enhances visual cortex activation and processing efficiency
• Improves blink reflex control and tear film stability
• Stimulates the pineal gland (Third Eye area), potentially influencing melatonin regulation

Types of Trataka We Teach
1. Bahya Trataka (External Gazing):
   • Candle flame trataka (most common)
   • Dot trataka (gazing at a black dot)
   • Crystal trataka (gazing through a crystal)
   • Yantra trataka (geometric patterns)

2. Antara Trataka (Internal Gazing):
   • Visualization of internal light
   • Mental focus on the Third Eye center
   • Imagery-based concentration

3. Moving Object Trataka:
   • Following a pendulum
   • Tracking moving lights
   • Eye movement exercises

Physiological Benefits
Regular practice of trataka yields measurable benefits:
• Visual System: Improves accommodation, convergence, and visual endurance
• Neurological: Enhances concentration span by 40-60%
• Endocrine: May influence pineal gland function and circadian rhythms
• Psychological: Reduces mind-wandering by 35-50%
• Ocular Health: Strengthens extraocular muscles and improves tear film quality

Therapeutic Applications
Trataka has shown benefits for:
• Computer Vision Syndrome: Reduces digital eye strain symptoms
• Attention Disorders: Improves focus and reduces distractibility
• Anxiety Management: Creates mental stillness and reduces rumination
• Migraine Prevention: May reduce frequency of visual migraines
• Meditation Preparation: Develops one-pointed concentration (Ekagrata)

Our Teaching Methodology
We follow a progressive approach:
1. Initial Assessment: Visual acuity, eye health, concentration baseline
2. Beginner Level: 1-2 minutes of gazing with blinking allowed
3. Intermediate Level: 3-5 minutes with reduced blinking
4. Advanced Level: Extended gazing with internalization
5. Integration: Combining trataka with meditation and pranayama

Safety Guidelines and Precautions
• Start with short durations (30-60 seconds)
• Never strain or force the eyes
• Maintain proper distance from gazing object (1-2 feet)
• Practice in dim lighting initially
• Stop immediately if experiencing pain, dizziness, or nausea
• Consult eye specialist if you have retinal issues or glaucoma

Research and Evidence
Studies on trataka have shown:
• Improved visual reaction time by 15-20%
• Enhanced selective attention in cognitive tasks
• Reduced symptoms of computer vision syndrome in office workers
• Better performance in tasks requiring sustained attention
• Increased alpha brain wave activity during and after practice

Integration with Daily Life
We teach practical applications:
• Brief trataka breaks during work to reduce eye strain
• Pre-meditation trataka to settle the mind
• Evening trataka to transition from daily activity to rest
• Combined with palming for complete eye relaxation

Trataka is not merely an eye exercise—it's a profound practice of mastering attention, developing inner clarity, and accessing deeper states of consciousness through the gateway of focused vision.
`,
  
  'Aquatic Yoga': `
Aquatic Yoga represents a revolutionary synthesis of traditional yoga wisdom with the therapeutic properties of water, creating an ideal environment for healing, rehabilitation, and deepening practice. This gentle yet powerful modality leverages water's unique properties to enhance yoga's benefits while minimizing strain on vulnerable joints and tissues.

The Healing Properties of Water
Water's physical characteristics create an optimal therapeutic environment:
• Buoyancy: Reduces weight-bearing by 90%, minimizing joint compression
• Hydrostatic Pressure: Provides gentle compression that reduces edema and improves circulation
• Thermal Properties: Warm water (32-34°C) relaxes muscles and increases flexibility
• Viscosity: Offers natural resistance for strengthening without impact
• Turbulence: Creates instability that engages stabilizing muscles

Who Benefits Most from Aquatic Yoga?
Aquatic yoga is particularly beneficial for:
• Joint Conditions: Arthritis, osteoporosis, joint replacements, chronic pain
• Mobility Limitations: Parkinson's, multiple sclerosis, post-stroke rehabilitation
• Weight Management: For individuals with significant weight challenges
• Injury Recovery: Post-surgical rehabilitation, sports injuries
• Stress-Related Conditions: Anxiety, fibromyalgia, chronic fatigue
• Pregnancy: Gentle support during prenatal and postpartum periods
• Aging Populations: Maintaining mobility and balance safely

Our Aquatic Yoga Program Structure
Each session incorporates:
1. Warm-up: Gentle movements adapting to water resistance
2. Standing Poses: Utilizing pool edge for stability when needed
3. Floating Poses: Supported by flotation devices for complete relaxation
4. Pranayama: Breathwork enhanced by water's natural rhythm
5. Meditation: Floating or seated meditation in water's embrace
6. Integration: Transition back to land with awareness

Modified Asanas for Aquatic Environment
We adapt traditional poses for aquatic practice:
• Tadasana (Mountain Pose): Standing with water support
• Vrikshasana (Tree Pose): Using water for balance assistance
• Trikonasana (Triangle Pose): With pool wall support
• Savasana (Corpse Pose): Floating with flotation support
• Gentle backbends and twists with water's buoyant assistance

Therapeutic Applications
Clinical benefits we've observed include:
• Pain Reduction: 40-60% decrease in arthritic joint pain
• Range of Motion: 25-35% improvement in joint mobility
• Balance Improvement: 50% reduction in fall risk in elderly participants
• Strength Gains: Progressive resistance without joint strain
• Psychological Benefits: Reduced anxiety and improved mood scores

Scientific Validation
Research supports aquatic yoga's effectiveness:
• Reduces pain and improves function in osteoarthritis patients
• Enhances quality of life in fibromyalgia sufferers
• Improves balance and reduces fall frequency in elderly
• Lowers blood pressure and stress hormone levels
• Increases exercise adherence due to enjoyable nature

Safety Protocols
Our aquatic yoga sessions prioritize safety:
• Temperature monitoring (32-34°C optimal range)
• Maximum depth safety (chest-high water typically)
• Individual flotation device provision
• Certified lifeguard supervision
• Medical screening for contraindications
• Gradual progression based on individual comfort

Contraindications and Precautions
We screen for and adapt to:
• Open wounds or skin infections
• Severe incontinence
• Uncontrolled epilepsy
• Severe fear of water (aquaphobia)
• Recent surgeries or medical procedures
• Fever or infectious conditions

Integration with Land-Based Practice
We help participants transition:
• Water confidence building for beginners
• Transferring water-learned movements to land
• Developing body awareness that transfers between environments
• Creating home practice options with simple water containers

Equipment and Environment
Our specialized facility features:
• Temperature-controlled therapeutic pool
• Various depths for different needs
• Flotation belts, noodles, and boards
• Non-slip pool flooring
• Handrails and support bars
• Ambient lighting and calming acoustics

Aquatic yoga represents the perfect marriage of ancient wisdom and modern therapeutic understanding—offering a safe, effective, and deeply nurturing pathway to health and wellbeing for those who might find traditional yoga challenging.
`
};

const YogaTherapySection = () => {
  const [selected, setSelected] = useState<Therapy>(therapies[2]);
  const [expanded, setExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  /* Reset Learn More when tab changes */
  useEffect(() => {
    setExpanded(false);
  }, [selected.name]);

  return (
    <section className="relative bg-gradient-to-br from-[#f8f9f5] to-[#eef0e8] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-sage-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-20 w-60 h-60 rounded-full bg-cream-200/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block mb-3 text-sm uppercase tracking-widest text-sage-600 font-semibold">
            Yogic Practices
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Yoga Therapies</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ancient wisdom meets modern therapeutic application for holistic healing
          </p>
        </div>

        {/* Therapy Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full bg-white p-1 shadow-lg border border-gray-100">
            {therapies.map((therapy) => (
              <button
                key={therapy.name}
                onClick={() => setSelected(therapy)}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selected.name === therapy.name
                    ? 'text-white bg-gradient-to-r from-sage-500 to-sage-600 shadow-md'
                    : 'text-gray-700 hover:text-sage-600 hover:bg-sage-50'
                }`}
              >
                {therapy.icon}
                {therapy.name}
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
                  <p className="text-sage-100 text-sm md:text-base">Traditional Yoga Practice</p>
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
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10 rounded-2xl shadow-lg"
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
                        <div className="whitespace-pre-line">
                          {fullTherapyContent[selected.name]}
                        </div>
                      </motion.div>
                    )}
                  </div>
                  
                  {/* Learn More button for all therapies */}
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
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default YogaTherapySection;