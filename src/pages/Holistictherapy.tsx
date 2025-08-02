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
import PhysioTherapySection from '../components/PhysioTherapySection';
import HolisticTherapySection from '../components/Holistictherapysection';

const Holistictheraphy: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/670210386/photo/young-woman-at-crystal-healing-session.jpg?s=612x612&w=0&k=20&c=3X-EB028m1-W0mz1jFaoeerCPT1PH0bD46ofgvHQyuM="
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Holistic Healing Approach
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At nowal NatureCare
          </p>
          <Link 
            to="/programs" 
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
              <span className="text-sage-800 font-medium">Holistic Therapies</span>
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
      "Nature cures, not the physician. At nowal, we simply facilitate the body's innate healing capacity through time-tested naturopathic principles."
    </blockquote>

    <div className="space-y-6 text-lg text-gray-700">
      <p>
        Naturopathy at nowal is more than treatment - it's a return to harmony with nature's rhythms. Our retreats combine ancient healing wisdom with modern understanding to address root causes, not just symptoms.
      </p>
    </div>
  </div>
</section>


 <HolisticTherapySection />

      




{/* <section className="bg-white py-12 px-4 md:px-8">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-6 md:p-10">
    
    <div className="text-center md:text-left mb-6 md:mb-0">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Transform Your Daily Routine
      </h2>
    </div>

   
    <div>
      <button className="relative overflow-hidden bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 group">
        <span className="relative z-10">Heal Now</span>
        <span className="absolute left-0 top-0 w-0 h-full bg-amber-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
      </button>
    </div>

  </div>
</section> */}


    </div>
  );
};

export default Holistictheraphy;