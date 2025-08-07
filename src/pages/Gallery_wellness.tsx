import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import ReachSection from '../components/Reachsection';
import CareerForm from '../components/Careerform';
import JobOpeningsSection from '../components/JobOpeningsSection';
import { Link } from 'react-router-dom';
import SectionGallery from '../components/SectionGallery';
import GalleryVideoSection from '../components/GalleryVideosection';
import ImageGridSection from '../components/ImageGridSection';
import img from "../assets/1ps-7.png";
import ImagegridGallery from '../components/Imagegridgallery';

const Gallerywellness: React.FC = () => {
  const location = useLocation();

  // Restore scroll position if coming from job application
  React.useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src = {img}
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            We're looking for passionate individuals to join our wellness journey
          </p>
        </div> */}
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
            <li>
              <span className="text-sage-800 font-medium">Gallery - Nowal NatureCare</span>
            </li>
          </ol>
        </nav>
      </div>

      
{/* <GalleryVideoSection /> */}
<ImagegridGallery />
     
      

      {/* Careers CTA Section */}
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

export default Gallerywellness;