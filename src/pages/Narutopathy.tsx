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
           Naturopathic Consultation Service


          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Nowal NatureCare
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-sage-500 hover:bg-sage-600 text-white font-medium rounded-full transition duration-300"
          >
            Explore Our Programs
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
   <section className="py-16 px-4 md:px-8 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-playfair text-sage-600 mb-6">
      The Healing Power of Nature's Wisdom
    </h2>

    <blockquote className="text-xl md:text-2xl font-playfair italic text-sage-500 mb-8">
      "Nature cures, not the physician. At Wellness, we simply facilitate the body's innate healing capacity through time-tested naturopathic principles."
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
 Nowal NatureCare is guided by a team of highly skilled and compassionate naturopathy experts who have thoughtfully designed every therapy to uncover and address the root cause of illness—ensuring your path to complete physical, mental, and spiritual well-being remains clear, balanced, and deeply transformative. The Founder himself has profound understanding and interest in Naturopathy, and his thought is to make everyone follow the natural lifestyle to be disease fee in their lives.
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
        "Our naturopaths don't just treat diseases - they educate guests in the laws of healthy living. What you learn at Wellness becomes lifelong wellness wisdom you carry home."
      </p>
    </div> */}
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