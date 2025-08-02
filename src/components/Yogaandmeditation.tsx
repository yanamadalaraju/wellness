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



import React, { useState } from 'react';
import { FaCheckCircle, FaOm, FaWater, FaHandsHelping, FaEye } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const therapies = [
  {
    name: 'Mantra Chanting',
    image: 'https://www.nimba.in/wp-content/uploads/2021/02/MANTRA_CHANTTING.jpg',
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
    content: 'Yoga Nidra Yoga Nidra is a guided deep relaxation technique that leads the body into a state of conscious rest. It calms the nervous system, reduces stress, and promotes healing—helping you access inner stillness while remaining aware, restoring both mental and physical well-being effortlessly	',
    benefits: [
      'Alleviates chronic pain',
      'Improves joint flexibility',
      'Enhances respiratory function',
      'Reduces inflammation markers'
    ],
    icon: <FaHandsHelping className="text-amber-500" />
  },
  {
    name: 'Shatkarma',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/SHATKARMA.jpg',
    content: 'The six purification techniques of classical yoga that deeply cleanse the physical and energetic bodies. These powerful detox methods prepare the system for higher yogic practices while removing accumulated toxins and blockages.',
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
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/TRATAK.jpg',
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
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/AQUATIC_YOGA-1.jpg',
    content: 'Aquatic Yoga or exercise is the best easiest practices in joint pain conditions and compromised health conditions.  ',
    benefits: [
      'Reduces impact on joints',
      'Improves range of motion',
      'Enhances proprioception',
      'Deepens relaxation response'
    ],
    icon: <FaWater className="text-cyan-400" />
  }
];

const YogaTherapySection = () => {
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
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {selected.content}
                  </p>
                  {/* <button className="px-5 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">
                    Book This Session
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button> */}
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