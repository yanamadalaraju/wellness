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


import React, { useState } from 'react';
import { FaCheckCircle, FaLeaf, FaSpa, FaWater, FaHandsHelping } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const therapies = [
  {
    name: 'Colon Hydrotherapy',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&fit=crop',
    content: 'Our bodies hold more than just blood and water—they also accumulate waste and toxins that may disrupt digestive health. Colon Hydrotherapy, also known as colon cleansing, is a powerful naturopathic therapy that gently eliminates these harmful substances, restoring balance from within. At Nowal NatureCare, this holistic treatment supports the bodys natural detoxification process, offering a range of health benefits that go beyond digestion.',
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
    name: 'Manipulative Therapy',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&fit=crop',
    content: 'Massage therapy is an ancient healing practice, cherished for centuries for its ability to relieve tension, stimulate circulation, and promote overall well-being. At Nowal NatureCare, this therapeutic process involves the rhythmic massage and pressing of muscles and soft tissues using a variety of scientific techniques tailored to your needs.',
    benefits: [
      'Alleviates stress and muscle stiffness',
      'Enhances metabolic function',
      'Tones and relaxes muscles',
      ' Improves blood flow and circulation',
      'Promotes a youthful glow and boosts energy'
    ],
    icon: <FaHandsHelping className="text-amber-500" />
  },
  {
    name: ' Enema',
    image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&fit=crop',
    content: 'Healthy bowel movements are essential for the body’s overall functioning and balance. When this natural process is disrupted, Enema therapy offers an effective solution to restore digestive regularity. At Nowal NatureCare, enema treatments are tailored to your health condition and may include normal, neutral, warm, or herb-infused water. In this therapy, a gentle infusion of natural liquid into the rectum stimulates stool evacuation and relieves even chronic constipation.',
    benefits: [
      'Eliminates accumulated waste from the colon',
      'Effectively treats constipation',
      'Enhances nutrient absorption',
      'Cleanses the lower digestive tract'
    ],
    icon: <FaLeaf className="text-emerald-400" />
  },
  {
    name: ' Mud Pack',
    image: 'https://i.pinimg.com/736x/e3/73/93/e373936c4728387cf9257cdc538e08af.jpg',
    content: 'Mud, one of nature’s vital elements, is rich in minerals that offer powerful therapeutic benefits when applied to the body. At Nowal NatureCare, our carefully curated mud pack treatments go beyond expectations—this is the essence of naturopathy. The treatment draws out harmful toxins, deeply cleansing and revitalizing the body.',
    benefits: [
      'Helps regulate body temperature',
      'Supports digestive health',
      'Eases headaches and tension',
      'Nourishes and refreshes the skin',
      ' Acts as a natural cooling agent'
    ],
    icon: <FaSpa className="text-amber-800" />
  },
  {
    name: 'Vibroacoustic Massage',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&fit=crop',
    content: 'Vibro Massage an advanced naturopathic treatment combines the benefits of high-tech vibratory therapy to target the entire body or specific tension points with powder of floor of grains.',
    benefits: [
      'Relaxes and tones deep muscle layers',
      'Enhances blood circulation',
      'Reduces cortisol levels',
      'Eases stress, pain, and physical fatigue'
    ],
    icon: <FaSpa className="text-purple-400" />
  }
];

const TherapySection = () => {
  const [selected, setSelected] = useState(therapies[2]);
  const [isHovering, setIsHovering] = useState(false);

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
              className="relative bg-white/90 backdrop-blur-sm border border-gray-100 pt-20 md:pt-24 pb-10 md:pb-12 px-6 md:px-10 rounded-2xl shadow-lg"
            >
              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {/* Description */}
                <div>
                  <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
                    About {selected.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selected.content}
                  </p>
                  <button className="px-5 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">
                    Book This Treatment
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
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

export default TherapySection;