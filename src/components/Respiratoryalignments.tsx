import React, { useState } from 'react';

const therapies = [
  {
    name: 'Pulmonary Fibrosis',
    image: 'https://www.nimba.in/wp-content/uploads/2020/10/RESPIRATORY_AILMENTS_PULMONARY_FIBROSIS.png',
    content:
      'Colon hydrotherapy is a gentle infusion of water into the colon to remove waste. It helps relieve constipation, improve digestion, and promote detoxification. This technique is used as a natural detox process and is highly effective for people suffering from chronic constipation, gas, and bloating.',
    benefits: ['Improves digestion', 'Removes toxins', 'Boosts hydration'],
  },
  {
    name: 'Sinusitis',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/RESPIRATORY_AILMENTS_PULMONARY_SINUSITIS.png',
    content:
      'Manipulative therapy involves manual techniques to alleviate musculoskeletal pain and improve mobility. It is commonly used in physiotherapy and chiropractic treatment. This therapy also helps restore joint function and reduce inflammation through controlled movements and pressure.',
    benefits: ['Relieves pain', 'Improves mobility', 'Reduces stress'],
  },
  {
    name: 'Allergic Bronchitis',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/RESPIRATORY_AILMENTS_PULMONARY_ALLERGIC_BRONCHITIS.png',
    content:
      'Enema is used to clean the colon by injecting fluid into the rectum. It promotes bowel movements and treats constipation effectively. This therapy is a natural way to remove toxins and reset your digestive health, especially helpful during fasting or detoxification routines.',
    benefits: [
      'Removes stagnant fecal matter',
      'Treats constipation',
      'Boosts the absorption of nutrients',
      'Cleanses the end part of your colon',
    ],
  },
  {
    name: 'Asthma',
    image: 'https://www.nimba.in/wp-content/uploads/2020/07/RESPIRATORY_AILMENTS_ASTHAMA.png',
    content:
      'Mud pack therapy uses natural mud applied to the body or specific areas to reduce inflammation, improve skin health, and relax the body. It is especially useful in managing acne, arthritis, and general fatigue through cooling and mineral absorption.',
    benefits: ['Relieves pain', 'Improves skin texture', 'Cools the body'],
  },
//   {
//     name: 'Ultrasound',
//     image: 'https://www.Wellness.in/wp-content/uploads/2020/08/Wellness-nature-service-img.jpg',
//     content:
//       "Vibro massage is a therapeutic technique using vibration to stimulate muscles and improve blood flow. It's ideal for relaxation and rehabilitation. The gentle vibrations reduce muscle stiffness and are beneficial post-injury or surgery.",
//     benefits: ['Stimulates circulation', 'Relieves muscle tension', 'Promotes relaxation'],
//   },
];

const Respiratoryalignments = () => {
  const [selected, setSelected] = useState(therapies[2]); // Default: Enema

  return (
    <section className="bg-[#f3f4ee] py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Scrollable Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory space-x-4 px-2 py-2">
            {therapies.map((therapy) => (
              <button
                key={therapy.name}
                onClick={() => setSelected(therapy)}
                className={`snap-center w-[220px] px-4 py-3 text-base text-center rounded-full font-semibold transition-all duration-300 ${
                  selected.name === therapy.name
                    ? 'bg-[#5e6c3f] text-white'
                    : 'bg-[#adb29e] text-white'
                }`}
              >
                {therapy.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content with Image on Right */}
        <div className="bg-white pt-14 pb-14 px-6 md:px-16 shadow-xl grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text + Benefits */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">{selected.name}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">{selected.content}</p>

            <div className="flex flex-col gap-3">
              {selected.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#e2e5d8] text-gray-800 px-5 py-3 rounded-full inline-block text-base font-medium shadow-sm"
                >
                  ✓ {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <img
              src={selected.image}
              alt={selected.name}
              className="rounded-xl  w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Respiratoryalignments;
