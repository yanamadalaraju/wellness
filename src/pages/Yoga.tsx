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
import AyurvedsTherapySection from '../components/Ayurvedtheraphy';
import YogaTherapySection from '../components/Yogaandmeditation';
import SEO from '../components/SEO';
import seoData from '../config/seoData';

const Yoga: React.FC = () => {
  return (
    <>
    <SEO 
        title={seoData.yoga.title}
        description={seoData.yoga.description}
        keywords={seoData.yoga.keywords}
        canonicalUrl={seoData.yoga.canonicalUrl}
      />
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1194094647/photo/handsome-young-man-practicing-yoga-at-park.jpg?s=612x612&w=0&k=20&c=pOc8R7KLJiYd8A6LOvOctwStEFvN775spziJqocadlk="
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Mindful Yoga Routine
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Nowal NatureCare
          </p>
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
              <span className="text-sage-800 font-medium">Yoga & Meditation</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* New Content Section */}
   {/* <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      Naturopathy and Yoga are two wheels of a cart and equally important for healthy lifestyle.
    </h2>



    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
     Yoga balances harmony with nature in our body
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
     Yoga is a timeless practice that unites body, mind, and breath—promoting flexibility, strength, inner peace, and harmony through movement, meditation, and conscious awareness.In Nowal NatureCare, we provide specialised Yoga therapy and personalized Yoga Sessions to give effective results.
      </p>
    </div>
  </div>
</section> */}

<section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      Holistic Integrated Yoga
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-10">
      “Yoga aligns body, breath, and awareness—creating harmony, vitality, and
      conscious balance in everyday life.”
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700 text-justify">
      <p>
        Holistic Integrated Yoga is a gentle yet powerful practice suitable for
        all ages and fitness levels, conducted every morning to awaken the body,
        calm the mind, and align inner energies. More than physical exercise,
        this integrated approach combines{" "}
        <span className="font-medium">
          asana (postures), pranayama (breathing), meditation, and mindful
          awareness
        </span>
        —creating balance, vitality, and mental clarity to set a harmonious
        rhythm for the day.
      </p>

      <p>
        Alongside group sessions, personalised yoga sessions are offered to
        support individual health needs such as posture correction, flexibility,
        recovery, and mental focus. Tailored to one’s body constitution and
        lifestyle, personalised yoga ensures safe practice, deeper awareness,
        and sustainable progress.
      </p>

      <p className="font-semibold text-sage-600">
        Benefits of Yoga for Body, Mind & Soul
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Body:</strong> Improved flexibility, strength, posture,
          circulation, digestion, and long-term vitality
        </li>
        <li>
          <strong>Mind:</strong> Reduced stress and anxiety, improved focus,
          emotional balance, patience, and better sleep
        </li>
        <li>
          <strong>Soul:</strong> Enhanced mindfulness, inner calm,
          self-awareness, and emotional stability
        </li>
      </ul>

      <p className="font-semibold text-sage-600">
        Yoga as a Discipline for Daily Living
      </p>

      <p>
        When practised regularly and mindfully, yoga becomes a lifelong wellness
        tool—supporting physical agility, mental calm, and emotional resilience.
        It encourages balanced responses to stress, improved decision-making,
        and a centred approach to work, relationships, and life.
      </p>

      <p>
        At <span className="font-semibold">Nowal NatureCare (NNC)</span>, yoga is
        offered with special care, structure, and conscious intention. Our
        approach emphasises regularity, discipline, and mindful awareness,
        allowing yoga to naturally integrate into daily life—nurturing balance,
        resilience, and lasting well-being.
      </p>

      <p className="font-semibold text-sage-600">
        Yogic Kriyas: The Foundation of Deep Cleansing & Holistic Healing
      </p>

      <p>
        Yogic Kriyas, also known as Shatkriyas, are ancient yogic purification
        techniques forming the backbone of holistic healing in traditional yoga
        and nature cure systems. These practices cleanse the body internally,
        remove accumulated toxins, balance vital energy (prana), and restore
        optimal organ function.
      </p>

      <p>
        Unlike conventional exercise routines, Yogic Kriyas work at a deeper
        physiological and energetic level—addressing the root causes of chronic,
        lifestyle-related, and long-standing health conditions. By purifying the
        respiratory tract, digestive system, nervous system, and sensory organs,
        kriyas activate the body’s innate self-healing intelligence.
      </p>

      <p className="font-semibold text-sage-600">
        Why Yogic Kriyas Are Essential for Healing
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>Eliminates toxins and metabolic waste</li>
        <li>Improves digestion, respiration, and circulation</li>
        <li>Balances the nervous and endocrine systems</li>
        <li>Enhances immunity, vitality, and mental clarity</li>
        <li>
          Supports recovery from chronic ailments such as sinusitis, digestive
          disorders, hormonal imbalance, stress-related conditions, and fatigue
        </li>
      </ul>

      <p className="font-semibold text-sage-600">
        Types of Yogic Kriyas & Their Benefits
      </p>

      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Jal Neti:</strong> Cleanses nasal passages and relieves sinus
          congestion and respiratory issues
        </li>
        <li>
          <strong>Sutra Neti:</strong> Deep nasal purification enhancing oxygen
          intake and alertness
        </li>
        <li>
          <strong>Kapalbhati:</strong> Detoxifies lungs and abdominal organs,
          boosts metabolism
        </li>
        <li>
          <strong>Vaman Dhauti (Kunjal Kriya):</strong> Cleanses the stomach and
          supports gastric health
        </li>
        <li>
          <strong>Laghu Shankhaprakshalana:</strong> Deep intestinal cleansing
          improving gut health
        </li>
        <li>
          <strong>Nauli:</strong> Strengthens digestion and stimulates abdominal
          organs
        </li>
        <li>
          <strong>Trataka:</strong> Improves eyesight, concentration, and mental
          stability
        </li>
      </ul>

      <p>
        When blended with yoga, pranayama, meditation, and naturopathic
        therapies, Yogic Kriyas become a powerful therapeutic foundation. At
        <span className="font-semibold"> Nowal NatureCare</span>, these practices
        are performed under expert guidance—laying the groundwork for
        sustainable health, emotional balance, and inner clarity, reaffirming
        yoga as a complete science of life.
      </p>
    </div>
  </div>
</section>



 <YogaTherapySection />

      




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
    </>
  );
};

export default Yoga;