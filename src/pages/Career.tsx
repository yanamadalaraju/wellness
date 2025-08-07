import React from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import ReachSection from '../components/Reachsection';
import CareerForm from '../components/Careerform';
import JobOpeningsSection from '../components/JobOpeningsSection';
import { Link } from 'react-router-dom';

const Carrer: React.FC = () => {
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
            src="https://media.istockphoto.com/id/1384110533/photo/asian-male-director-is-interviewing-to-recruit-new-employees.jpg?s=612x612&w=0&k=20&c=rR1-wkWClaIfcH7vwut8L2AXK3LML2RLQ-xZ60ZrwEE="
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
            We're looking for passionate individuals to join our Nowal journey
          </p>
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
            <li>
              <span className="text-sage-800 font-medium">Career With Us</span>
            </li>
          </ol>
        </nav>
      </div>

      <JobOpeningsSection />
      <CareerForm />

      {/* Map Section */}
      <section className="section-padding bg-sage-50">
  <div className="container-max">
    <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-8 text-center">
      Find Us
    </h2>
    
    <div className="rounded-xl overflow-hidden aspect-video relative shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3546.625357611623!2d75.40674847545166!3d27.26227687644048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1754558662832!5m2!1sen!2sin"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Looniyawas Location"
      ></iframe>
      
      {/* Floating location card */}
      <div className="absolute bottom-4 left-4 bg-white p-6 rounded-lg max-w-xs shadow-md">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-playfair font-semibold text-sage-700">Our Location</h3>
            <address className="not-italic text-sm text-gray-600 mt-1">
              Looniyawas<br />
              Rajasthan 303602<br />
              India
            </address>
          </div>
        </div>
        <a
          href="https://maps.app.goo.gl/ASG19fXbguNBmBtG7"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block w-full bg-sage-600 hover:bg-sage-700 text-white text-center py-2 rounded transition-colors"
        >
          Get Directions
        </a>
      </div>
    </div>
  </div>
</section>

      <ReachSection />

      {/* FAQ Section */}
      

      {/* Careers CTA Section */}
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

export default Carrer;