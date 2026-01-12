// import React, { useState } from 'react';
// import { FaOm } from 'react-icons/fa';

// const MantraCard = () => {
//   const [expanded, setExpanded] = useState(false);

//   const shortText = `
// Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness.
// `;

//   const fullText = `
// Rooted in India’s timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.

// OM Chanting  
// All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe.

// Chanting OM creates a gentle yet profound vibration that travels through the body, calming the nervous system and aligning breath with awareness.

// How Mantra Chanting Works  
// Sound is energy. Each mantra activates nadis and chakras, dissolving energetic blockages.

// Why Our Ancestors Believed in Mantra Vibrations  
// Mantras were revealed through deep meditation and resonate with cosmic frequencies.

// Mantra Chanting at NNC  
// Integrated into daily wellness routines to support emotional detox and inner stillness.
// `;

//   return (
//     <div>
//       <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//         {expanded ? shortText + fullText : shortText}
//       </p>

//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="mt-4 text-purple-600 font-medium hover:underline transition"
//       >
//         {expanded ? 'Show Less ▲' : 'Learn More ▼'}
//       </button>
//     </div>
//   );
// };

// export default MantraCard;




import React, { useState } from 'react';
import { FaOm } from 'react-icons/fa';

const MantraCard = () => {
  const [expanded, setExpanded] = useState(false);

  const shortText = `
Mantra chanting is an ancient spiritual practice that uses sacred sound vibrations to harmonise the body, calm the mind, and awaken inner awareness.
`;

  const fullText = `
Rooted in India's timeless wisdom traditions, mantra chanting has been practiced for thousands of years as a powerful tool for healing, meditation, and spiritual growth.

OM Chanting
All mantra practices traditionally begin with OM (AUM)—the primordial sound believed to be the original vibration of the universe. OM represents the union of creation, preservation, and transformation, resonating through the physical, mental, and subtle layers of the being.

Chanting OM creates a gentle yet profound vibration that travels through the body, stimulating the nervous system, balancing brain activity, and aligning the breath with awareness. This vibration helps slow the mind, deepen concentration, and prepare the body for meditation and healing practices.

How Mantra Chanting Works
Ancient sages understood that sound is energy. Every mantra, when pronounced correctly (mantra ucharan), generates specific vibrational frequencies that influence the body's energy channels (nadis) and subtle centers (chakras). These vibrations help dissolve energetic blockages and restore natural balance.

Modern science supports this wisdom—studies show that rhythmic chanting can regulate the vagus nerve, reduce stress hormones, and enhance emotional stability by calming the autonomic nervous system.

Why Our Ancestors Believed in Mantra Vibrations
Ancient Indian seers observed that the universe itself functions through vibration—from the movement of stars to the rhythm of breath. They recognised that precise sound vibrations could influence consciousness, health, and the environment.

Mantras were not created as words but experienced as sounds, revealed through deep meditation. When chanted with awareness, these sounds resonate with natural frequencies, creating harmony between the individual and the cosmos.

Benefits of Mantra Chanting
• Deep relaxation and mental calm
• Reduced stress, anxiety, and emotional turbulence
• Improved focus and mental clarity
• Balanced nervous system and breath rhythm
• Enhanced spiritual awareness and inner peace
• Supportive healing for lifestyle and stress-related conditions

Mantra Chanting at NNC
At our centre, mantra chanting is gently integrated into daily wellness routines—beginning with OM chanting and progressing into guided meditative practices. This sacred sound therapy supports emotional detoxification, mental stillness, and a deeper connection to one's inner self, enhancing the effectiveness of all healing therapies.
`;

  return (
    <div>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {expanded ? shortText + fullText : shortText}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-purple-600 font-medium hover:underline transition"
      >
        {expanded ? 'Show Less ▲' : 'Learn More ▼'}
      </button>
    </div>
  );
};

export default MantraCard;
