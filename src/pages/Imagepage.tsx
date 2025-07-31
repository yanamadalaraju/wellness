// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
// import ReachSection from '../components/Reachsection';
// import CareerForm from '../components/Careerform';
// import JobOpeningsSection from '../components/JobOpeningsSection';
// import { Link } from 'react-router-dom';
// import SectionGallery from '../components/SectionGallery';

// const Image: React.FC = () => {
//   const location = useLocation();

//   // Restore scroll position if coming from job application
//   React.useEffect(() => {
//     if (location.state?.scrollPosition) {
//       window.scrollTo(0, location.state.scrollPosition);
//     }
//   }, [location.state]);

//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://media.istockphoto.com/id/1059930772/vector/vector-black-picture-frame-set-on-wall-background.jpg?s=612x612&w=0&k=20&c=rhywyqazCshHI2IjMfIv_hz0Qs4iH7uygmNf7iCMXzw="
//             alt="Career Opportunities"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black bg-opacity-40"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             Join Our Team
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             We're looking for passionate individuals to join our nowal journey
//           </p>
//         </div>
//       </section>

//       {/* Breadcrumbs */}
//             <div className="container mx-auto px-4 py-4 flex justify-center">
//         <nav className="flex" aria-label="Breadcrumb">
//           <ol className="inline-flex items-center space-x-2 md:space-x-2">
//             <li className="inline-flex items-center">
//               <Link to="/" className="text-sage-600 hover:text-sage-800">
//                 Home
//               </Link>
//             </li>
//             <li className="flex items-center">
//               <span className="mx text-sage-500">{'>'}</span>
//               <span className="mx text-sage-500">{'>'}</span>
//             </li>
//             <li>
//               <span className="text-sage-800 font-medium">Images</span>
//             </li>
//           </ol>
//         </nav>
//       </div>

      
// <SectionGallery />
     
      

//       {/* Careers CTA Section */}
//       <section className="bg-white py-12 px-4 md:px-8">
//   <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white rounded-xl shadow-xl p-6 md:p-10">
    
//     {/* Left Text */}
//     <div className="text-center md:text-left mb-6 md:mb-0">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
//         Transform Your Daily Routine
//       </h2>
//     </div>

//     {/* Right Button with left-to-right hover fill */}
//     <div>
//       <button className="relative overflow-hidden bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-md transition-all duration-300 group">
//         <span className="relative z-10">Heal Now</span>
//         <span className="absolute left-0 top-0 w-0 h-full bg-amber-800 transition-all duration-500 ease-in-out group-hover:w-full z-0"></span>
//       </button>
//     </div>

//   </div>
// </section>
//     </div>
//   );
// };

// export default Image;


import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import ReachSection from '../components/Reachsection';
import CareerForm from '../components/Careerform';
import JobOpeningsSection from '../components/JobOpeningsSection';
import { Link } from 'react-router-dom';
import SectionGallery from '../components/SectionGallery';

// Import images from assets
import heroImage from '../assets/3d4-1.jpg';
// Import more images as needed
// import image1 from '../assets/images/gallery/image1.jpg';

const Image: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state?.scrollPosition) {
      window.scrollTo(0, location.state.scrollPosition);
    }
  }, [location.state]);

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section - Now using local image */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage} // Using imported image
            alt="Career Opportunities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            We're looking for passionate individuals to join our nowal journey
          </p>
        </div>
      </section>

      {/* Rest of your component remains the same */}
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
              <span className="text-sage-800 font-medium">Images</span>
            </li>
          </ol>
        </nav>
      </div>

      <SectionGallery />
      
      <section className="bg-white py-12 px-4 md:px-8">
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
      </section>
    </div>
  );
};

export default Image;