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
      The Healing Power of Nature's Wisdom
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      "Nature cures, not the physician. At Nimba, we simply facilitate the body's innate healing capacity through time-tested naturopathic principles."
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
        Naturopathy at Nimba is more than treatment - it's a return to harmony with nature's rhythms. Our retreats combine ancient healing wisdom with modern understanding to address root causes, not just symptoms.
      </p>
    </div>

    {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">The Five Elements</h3>
        <p className="text-gray-600">
          Earth, water, fire, air, and space - our therapies balance these fundamental elements through mud therapy, hydrotherapy, sun therapy, air baths, and fasting.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Vital Force Activation</h3>
        <p className="text-gray-600">
          Stimulate your body's self-healing mechanisms through acupuncture, chromotherapy, and magnetotherapy without synthetic medicines.
        </p>
      </div>
      <div className="bg-cream-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-sage-600 mb-3">Panchakarma Detox</h3>
        <p className="text-gray-600">
          Deep cellular cleansing through therapeutic vomiting, purgation, enema, nasal cleansing, and blood purification.
        </p>
      </div>
    </div> */}

    

    {/* <div className="mt-12 bg-sage-100 p-6 rounded-lg border-l-4 border-sage-600">
      <p className="text-gray-800 italic">
        "Our naturopaths don't just treat diseases - they educate guests in the laws of healthy living. What you learn at Nimba becomes lifelong wellness wisdom you carry home."
      </p>
    </div> */}
  </div>
</section>


 <TherapySection />

      




<section className="bg-white py-12 px-4 md:px-8">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-6 md:p-10">
    
    {/* Left Text */}
    <div className="text-center md:text-left mb-6 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Transform Your Daily Routine
      </h2>
    </div>

    {/* Right Button with left-to-right hover fill */}
    <div>
      <button className="relative overflow-hidden bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 group">
        <span className="relative z-10">Heal Now</span>
        <span className="absolute left-0 top-0 w-0 h-full bg-amber-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
      </button>
    </div>

  </div>
</section>


    </div>
  );
};

export default Narutopathy;