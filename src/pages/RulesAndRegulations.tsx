import React from 'react';
import { Link } from 'react-router-dom';

const RulesAndRegulations = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 md:py-40">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VsbG5lc3MlMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1600&q=60"
      alt="Wellness Center"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  </div>
  
  {/* Content */}
  <div className="container mx-auto px-4 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-serif">
      Rules & Regulations
    </h1>
    <p className="text-xl md:text-2xl max-w-2xl mx-auto">
      Please read our guidelines carefully before your visit
    </p>
    
    {/* Decorative Elements */}
    <div className="mt-8 flex justify-center">
      <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
    </div>
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
                    <span className="text-sage-800 font-medium">Rules And Regulations</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose lg:prose-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">General Guidelines</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">For Your Safety & Comfort</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Please carry valid ID proof for registration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Maintain silence in therapy areas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Mobile phones should be on silent mode</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Consumption of alcohol or narcotics is strictly prohibited</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Therapy Specific Rules</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Massage Therapies</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Please inform therapist about any medical conditions</li>
                <li>Arrive 15 minutes before your scheduled appointment</li>
                <li>Late arrivals may result in reduced treatment time</li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Hydrotherapy</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Shower before entering pools</li>
                <li>Proper swimwear required (no street clothes)</li>
                <li>No food or drinks in pool area</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6">Cancellation Policy</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400 mb-8">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>24 hours notice required for cancellations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>No-shows will be charged 50% of service fee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  <span>Package sessions expire after 6 months</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Need Assistance?</h3>
              <p className="mb-4">Our staff is available to answer any questions about our policies.</p>
              <Link 
                to="/contact" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Experience Wellness?</h2>
          <Link 
            to="/book-now" 
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-medium"
          >
            Book Your Session Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default RulesAndRegulations;