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
import EnemaSection from '../components/EnemaSection';
import TherapySection from '../components/EnemaSection';

const Narutopathy: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1480755101/photo/woman-lying-on-back-during-tibetan-singing-bowls-deep-meditation-and-message.jpg?s=612x612&w=0&k=20&c=JOUzFJxSesJXHHs0QevxF6PPuaR9SG4MVQ7DH7ukjFY="
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
  Heal with Nature at Nowal NatureCare
</h1>

          {/* <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
           Naturopathic Consultation Service


          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Nowal NatureCare
          </p> */}
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
          >
            Book Now
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
      <li className="inline-flex items-center">
        <Link to="/programs" className="text-sage-600 hover:text-sage-800">
          Holistic Programmes

        </Link>
      </li>
      <li className="flex items-center">
        <span className="mx text-sage-500">{'>'}</span>
        <span className="mx text-sage-500">{'>'}</span>
      </li>
      <li>
        <span className="text-sage-800 font-medium">Naturopathy Wonders</span>
      </li>
    </ol>
  </nav>
</div>

      {/* New Content Section */}
   {/* <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      The Healing Power of Nature's Wisdom
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      "Nature cures, not the physician. At nowal, we simply facilitate the body's innate healing capacity through time-tested naturopathic principles."
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
 Nowal NatureCare is guided by a team of highly skilled and compassionate naturopathy experts who have thoughtfully designed every therapy to uncover and address the root cause of illness—ensuring your path to complete physical, mental, and spiritual well-being remains clear, balanced, and deeply transformative. The Founder himself has profound understanding and interest in Naturopathy, and his thought is to make everyone follow the natural lifestyle to be disease fee in their lives.
      </p>
    </div>

   
  </div>
</section> */}


  <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      The Healing Power of Naturopathy
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      “Naturopathy works in harmony with nature—awakening the body’s inherent
      ability to heal, restore balance, and sustain lasting well-being.”
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700 text-justify">
      <p>
        Naturopathy is a holistic, drug-free system of natural healing that
        focuses on restoring health by supporting the body’s innate
        self-healing ability. Rooted in the principles of nature cure, it seeks
        to identify and address the root cause of illness rather than merely
        suppressing symptoms.
      </p>

      <p>
        By harnessing the therapeutic benefits of natural elements such as
        earth, water, air, heat, and therapeutic touch, naturopathy promotes
        internal detoxification, improves circulation, balances metabolism,
        strengthens immunity, and enhances overall physical, mental, and
        emotional well-being.
      </p>

      <p>
        Naturopathic treatments integrate natural therapies, therapeutic diets,
        lifestyle correction, yoga, breathing techniques, and relaxation
        practices to support the management of lifestyle disorders, chronic
        conditions, stress-related ailments, and general health imbalances.
        Each program is personalised, gentle, and non-invasive—making
        naturopathy ideal for long-term wellness and preventive healthcare.
      </p>

      <p>
        At our naturopathy centre, healing is embraced as a journey—one that
        empowers individuals to reconnect with nature, adopt healthier habits,
        and achieve sustainable well-being through safe, effective, and
        time-tested natural therapies.
      </p>
    </div>
  </div>
  </section>


  <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      Hydrotherapy in Indian Naturopathy
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-10">
      “Water heals by cleansing, regulating, and revitalising the body from
      within.”
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700 text-justify">
      <p>
        Hydrotherapy is an integral treatment modality in Indian Naturopathy and
        Nature Cure, based on the therapeutic application of water in different
        forms, temperatures, and methods to support the body’s natural healing
        processes. In the Indian system of Nature Cure, water is regarded as a
        primary life-sustaining element and a powerful medium for cleansing,
        regulation, and revitalisation of the body.
      </p>

      <p>
        Indian naturopathy emphasises that many diseases originate from toxin
        accumulation, impaired circulation, and nervous system imbalance.
        Hydrotherapy stimulates the skin, blood vessels, nerves, and internal
        organs—enhancing detoxification, circulation, metabolism, and immune
        response without the use of drugs.
      </p>

      <p className="font-semibold text-sage-600">
        Indian & Asian Naturopathy References
      </p>

      <p>
        Hydrotherapy practices are deeply rooted in Indian Nature Cure philosophy
        and have been propagated through traditional teachings, Gandhian health
        centres, Nature Cure hospitals, and Yoga & Naturopathy medical colleges
        across India. Similar water-based healing practices are also found
        across Asian natural healing systems, where water is used to restore
        harmony between body, mind, and the natural environment.
      </p>

      <p>
        Modern Indian naturopathy textbooks and clinical guidelines recognise
        hydrotherapy as a non-invasive, cost-effective, and physiologically
        supportive therapy—suitable for both preventive care and long-term
        wellness management.
      </p>

      <p className="font-semibold text-sage-600">How Hydrotherapy Works</p>

      <ul className="list-disc list-inside space-y-2">
        <li>Thermal stimulation using hot, cold, and neutral water</li>
        <li>Mechanical action of water on tissues</li>
        <li>Reflex stimulation of skin and nerve endings</li>
      </ul>

      <p>
        These mechanisms help improve blood and lymph circulation, enhance toxin
        elimination through the skin and kidneys, regulate nervous system
        activity, reduce inflammation and congestion, and promote muscular
        relaxation and stress relief.
      </p>

      <p className="font-semibold text-sage-600">
        Types of Hydrotherapy at NNC
      </p>

      <ul className="list-decimal list-inside space-y-2">
        <li>
          <strong>Hip Bath (Cold / Hot / Contrast / Herbal):</strong> Supports
          digestive, urinary, pelvic, and gynaecological health
        </li>
        <li>
          <strong>Spinal Bath (Cold / Hot / Contrast):</strong> Regulates spinal
          nerves, promoting nervous system balance and mental calmness
        </li>
        <li>
          <strong>Full Immersion Bath / Jacuzzi:</strong> Enhances circulation,
          relaxation, and overall detoxification
        </li>
        <li>
          <strong>Steam Bath:</strong> Encourages sweating, respiratory relief,
          toxin elimination, and skin purification
        </li>
        <li>
          <strong>Packs & Compresses:</strong> Localised hot or cold applications
          to relieve pain, inflammation, and congestion
        </li>
        <li>
          <strong>Colon Hydrotherapy:</strong> A gentle naturopathic cleansing
          therapy supporting digestive health, bowel regularity, and gut
          balance
        </li>
      </ul>

      <p className="font-semibold text-sage-600">
        Health Benefits of Hydrotherapy
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>Detoxification and elimination of metabolic waste</li>
        <li>Improved circulation and lymphatic drainage</li>
        <li>Stress reduction and nervous system balance</li>
        <li>Relief from musculoskeletal pain and stiffness</li>
        <li>Support for digestive and eliminative health</li>
        <li>Enhanced immunity, energy levels, and sleep quality</li>
        <li>Mental relaxation and emotional well-being</li>
      </ul>

      <p className="font-semibold text-sage-600">
        Role of Hydrotherapy in Indian Naturopathy
      </p>

      <p>
        In Indian naturopathy, hydrotherapy is regarded as a foundational
        therapy—commonly prescribed alongside diet therapy, mud therapy,
        massage therapy, yoga, and lifestyle correction. Regular hydrotherapy
        prepares the body for deeper healing by improving circulation,
        elimination, and physiological balance.
      </p>

      <p className="font-semibold text-sage-600">
        Safety & Individualisation
      </p>

      <p>
        Hydrotherapy is planned after proper assessment and is customised based
        on age, body condition, tolerance, and health status. Certain medical
        conditions may require modification or prior medical clearance to
        ensure safe and effective application.
      </p>
    </div>
  </div>
</section>


 <TherapySection />


{/* <section className="bg-white py-12 px-4 md:px-8">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-6 md:p-10">
    
    
    <div className="text-center md:text-left mb-6 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Transform Your Daily Routine
      </h2>
    </div>

    
    <div>
       <Link to="/contact">
      <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-md">
        Heal Now
      </button>
    </Link>
    </div>

  </div>
</section> */}


    </div>
  );
};

export default Narutopathy;