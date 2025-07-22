// import React, { useState } from 'react';

// const therapies = [
//   {
//     name: 'PCOD/PCOS',
//     image: 'https://www.nimba.in/wp-content/uploads/2021/02/ENDOCRINE_DISORDERS_PCOS_PCOD.png',
//     content:
//       'Colon hydrotherapy is a gentle infusion of water into the colon to remove waste. It helps relieve constipation, improve digestion, and promote detoxification. This technique is used as a natural detox process and is highly effective for people suffering from chronic constipation, gas, and bloating.',
//     benefits: ['Improves digestion', 'Removes toxins', 'Boosts hydration'],
//   },
//   {
//     name: 'Hyperthyroidism',
//     image: 'https://www.nimba.in/wp-content/uploads/2021/02/ENDOCRINE_DISORDERS_THYROIDISM.png',
//     content:
//       'Manipulative therapy involves manual techniques to alleviate musculoskeletal pain and improve mobility. It is commonly used in physiotherapy and chiropractic treatment. This therapy also helps restore joint function and reduce inflammation through controlled movements and pressure.',
//     benefits: ['Relieves pain', 'Improves mobility', 'Reduces stress'],
//   },
//   {
//     name: 'Diabetes Mellitus',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/ENDOCRINE_DISORDERS_DIABETES_MELLITUS.png',
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
//     name: 'Osteoporosis',
//     image: 'https://www.nimba.in/wp-content/uploads/2020/07/ENDOCRINE_DISORDERS_OSTEOPOROSIS.png',
//     content:
//       'Mud pack therapy uses natural mud applied to the body or specific areas to reduce inflammation, improve skin health, and relax the body. It is especially useful in managing acne, arthritis, and general fatigue through cooling and mineral absorption.',
//     benefits: ['Relieves pain', 'Improves skin texture', 'Cools the body'],
//   },
// //   {
// //     name: 'Ultrasound',
// //     image: 'https://www.Wellness.in/wp-content/uploads/2020/08/Wellness-nature-service-img.jpg',
// //     content:
// //       "Vibro massage is a therapeutic technique using vibration to stimulate muscles and improve blood flow. It's ideal for relaxation and rehabilitation. The gentle vibrations reduce muscle stiffness and are beneficial post-injury or surgery.",
// //     benefits: ['Stimulates circulation', 'Relieves muscle tension', 'Promotes relaxation'],
// //   },
// ];

// const Endocrinesection = () => {
//   const [selected, setSelected] = useState(therapies[2]); // Default: Enema

//   return (
//     <section className="bg-[#f3f4ee] py-16 px-4 md:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Scrollable Tabs */}
//         <div className="flex justify-center mb-10">
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

//         {/* Content with Image on Right */}
//         <div className="bg-white pt-14 pb-14 px-6 md:px-16 shadow-xl grid md:grid-cols-2 gap-10 items-center">
//           {/* Left: Text + Benefits */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">{selected.name}</h2>
//             <p className="text-gray-700 text-lg leading-relaxed mb-6">{selected.content}</p>

//             <div className="flex flex-col gap-3">
//               {selected.benefits.map((benefit, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-[#e2e5d8] text-gray-800 px-5 py-3 rounded-full inline-block text-base font-medium shadow-sm"
//                 >
//                   ✓ {benefit}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right: Image */}
//           <div className="flex justify-center">
//             <img
//               src={selected.image}
//               alt={selected.name}
//               className="rounded-xl  w-full max-w-md"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Endocrinesection;



import React, { useState } from 'react';
import { FaLeaf, FaHeartbeat, FaFlask, FaBone, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const therapies = [
  {
    name: 'PCOD/PCOS',
    image: 'https://www.nimba.in/wp-content/uploads/2021/02/ENDOCRINE_DISORDERS_PCOS_PCOD.png',
    content: 'Our holistic approach to PCOD/PCOS focuses on hormonal balance, improving metabolism, and supporting reproductive health through specialized therapies, dietary guidance, and stress management techniques.',
    benefits: [
      'Regulates menstrual cycles',
      'Reduces insulin resistance',
      'Improves fertility',
      'Manages weight effectively'
    ],
    icon: <FaLeaf className="text-sage-400" />
  },
  {
    name: 'Hyperthyroidism',
    image: 'https://www.nimba.in/wp-content/uploads/2021/02/ENDOCRINE_DISORDERS_THYROIDISM.png',
    content: 'Natural treatment protocol for hyperthyroidism that helps regulate thyroid function, reduce symptoms, and restore metabolic balance through targeted therapies and nutritional support.',
    benefits: [
      'Regulates thyroid hormones',
      'Reduces anxiety and tremors',
      'Improves sleep quality',
      'Stabilizes weight'
    ],
    icon: <FaHeartbeat className="text-sage-500" />
  },
  {
    name: 'Diabetes Mellitus',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/ENDOCRINE_DISORDERS_DIABETES_MELLITUS.png',
    content: 'Comprehensive diabetes management program focusing on blood sugar regulation, improving insulin sensitivity, and preventing complications through lifestyle modifications and natural therapies.',
    benefits: [
      'Lowers blood sugar levels',
      'Improves insulin sensitivity',
      'Reduces medication dependency',
      'Prevents complications'
    ],
    icon: <FaFlask className="text-sage-600" />
  },
  {
    name: 'Osteoporosis',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/ENDOCRINE_DISORDERS_OSTEOPOROSIS.png',
    content: 'Our bone health program strengthens skeletal system, improves calcium absorption, and reduces fracture risk through specialized therapies, nutritional support, and weight-bearing exercises.',
    benefits: [
      'Increases bone density',
      'Reduces fracture risk',
      'Improves calcium absorption',
      'Enhances mobility'
    ],
    icon: <FaBone className="text-sage-300" />
  }
];

const Endocrinesection = () => {
  const [selected, setSelected] = useState(therapies[0]);
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
            Endocrine Wellness
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-gray-900 mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-600 to-sage-400">Hormonal & Metabolic</span> Conditions Treatment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Natural therapies for balancing hormones and improving metabolic health
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
                {React.cloneElement(therapy.icon, {
                  className: `${
                    selected.name === therapy.name
                      ? 'text-white'
                      : therapy.icon.props.className
                  }`
                })}
                {therapy.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content with Image on Right */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white/90 backdrop-blur-sm border border-gray-100 py-10 md:py-12 px-6 md:px-10 rounded-2xl shadow-lg grid md:grid-cols-2 gap-8 md:gap-10"
          >
            {/* Left: Text + Benefits */}
            <div>
              <h3 className="text-2xl font-bold font-playfair text-gray-900 mb-4">
                {selected.name} Treatment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selected.content}
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-sage-500" />
                  Treatment Benefits
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

              <button className="px-5 py-2.5 bg-gradient-to-r from-sage-500 to-sage-600 text-white font-medium rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm">
                Consult Our Specialist
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Right: Image */}
            <div className="flex justify-center items-center">
              <motion.div
                className="relative w-full max-w-md rounded-xl overflow-hidden shadow-xl"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <motion.img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-auto object-cover"
                  animate={{
                    scale: isHovering ? 1.03 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Endocrinesection;