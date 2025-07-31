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

const Ayurveda: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/2196383940/photo/nasya-treatment-in-sri-lanka.jpg?s=612x612&w=0&k=20&c=M1_j3qUYq2Dlx3SLuswxC8tdRvUTHMwrw80DkXwhZHY="
            alt="Holistic Programs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
            Ayurvedic Lifestyle Guidance
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            At Wellness Nature Cure
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
              <span className="text-sage-800 font-medium">Ayurveda</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* New Content Section */}
  <section className="py-20 px-6 md:px-10 bg-[#F8F9F4] text-[#435334]">
  <div className="max-w-4xl mx-auto text-center">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6 tracking-wide">
      We Provide Selective Ayurvedic Treatments
    </h2>

    {/* Decorative line under heading */}
    <div className="flex justify-center items-center mb-8">
      <div className="w-12 h-px bg-[#435334]/40"></div>
      <svg className="mx-3 w-5 h-5 text-[#435334]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" />
      </svg>
      <div className="w-12 h-px bg-[#435334]/40"></div>
    </div>

    {/* Quote */}
    <blockquote className="text-xl md:text-2xl font-light italic text-[#647160] mb-10 leading-relaxed">
      "Nature cures, not the physician. At Wellness, we simply facilitate the body's innate healing capacity through time-tested naturopathic principles."
    </blockquote>

    {/* Content */}
    <div className="text-lg md:text-xl leading-relaxed text-justify space-y-6 text-[#435334]/90">
      <p>
        Ayurveda helps maintain good health and well-being by embracing a preventive and personalized approach to care.
      </p>
      <p>
        Celebrated as the <span className="italic font-medium">“Science of Life,”</span> Ayurveda views each individual as an integral part of the greater cosmic whole. Rooted in the five foundational elements—Earth, Fire, Air, Water, and Ether—this ancient healing system extends beyond mere symptom treatment.
      </p>
      <p>
        The true beauty of Ayurveda lies in its holistic approach—addressing not just the physical condition, but also the emotional, psychological, and spiritual dimensions of a person.
      </p>
      <p>
        At <span className="font-semibold">Nowal Naturecare</span>, Ayurveda brings these energies into balance, nurturing profound healing and harmony at every level of being.
      </p>
    </div>
  </div>
</section>



 {/* <AyurvedsTherapySection /> */}

      




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

export default Ayurveda;