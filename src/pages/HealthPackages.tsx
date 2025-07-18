import React from 'react'
import { Link } from 'react-router-dom'
import { Download, Star, Clock, Users, CheckCircle } from 'lucide-react'

const HealthPackages: React.FC = () => {
  const packages = [
    {
      id: 'essential',
      name: 'Essential Wellness',
      duration: '3 Days',
      price: '$599',
      originalPrice: '$699',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Perfect introduction to holistic wellness with basic treatments and yoga',
      includes: [
        'Daily yoga and meditation sessions',
        'Basic Ayurvedic consultation',
        'Healthy organic meals',
        'Relaxation treatments',
        'Wellness coaching session',
        'Take-home wellness kit'
      ],
      bestFor: 'Beginners, Weekend getaway, Stress relief'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Healing',
      duration: '7 Days',
      price: '$1,299',
      originalPrice: '$1,499',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3768128/pexels-photo-3768128.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Complete wellness experience with personalized treatments and programs',
      includes: [
        'Comprehensive health assessment',
        'Personalized treatment plan',
        'Daily Ayurvedic treatments',
        'Yoga and meditation training',
        'Detox and cleansing protocols',
        'Nutritional counseling',
        'Lifestyle coaching',
        'Follow-up support'
      ],
      bestFor: 'Chronic conditions, Deep healing, Life transformation',
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Transformation',
      duration: '14 Days',
      price: '$2,499',
      originalPrice: '$2,899',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Ultimate healing journey with luxury accommodations and premium treatments',
      includes: [
        'Luxury private accommodation',
        'Personal wellness consultant',
        'Daily premium treatments',
        'Panchakarma therapy',
        'Private yoga sessions',
        'Specialized diet programs',
        'Spa treatments',
        'Wellness retreat materials',
        '3-month follow-up program'
      ],
      bestFor: 'Complete transformation, Luxury experience, Long-term wellness'
    },
    {
      id: 'intensive',
      name: 'Intensive Healing',
      duration: '21 Days',
      price: '$3,499',
      originalPrice: '$3,999',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Most comprehensive program for serious health conditions and deep healing',
      includes: [
        'Extended healing protocols',
        'Multiple specialist consultations',
        'Advanced Ayurvedic treatments',
        'Intensive detox programs',
        'Psychological counseling',
        'Lifestyle transformation',
        'Ongoing support system',
        'Lifetime wellness plan',
        '6-month follow-up program'
      ],
      bestFor: 'Serious conditions, Complete lifestyle change, Maximum results'
    }
  ]

  const policies = [
    {
      title: 'Booking Policy',
      rules: [
        'All bookings require a 30% deposit',
        'Full payment due 48 hours before arrival',
        'Bookings confirmed within 24 hours',
        'Valid ID required at check-in'
      ]
    },
    {
      title: 'Cancellation Policy',
      rules: [
        'Free cancellation up to 7 days before arrival',
        '50% refund for cancellations 3-7 days before',
        'No refund for cancellations within 48 hours',
        'Medical emergencies considered case-by-case'
      ]
    },
    {
      title: 'Health Requirements',
      rules: [
        'Health questionnaire must be completed',
        'Medical clearance may be required',
        'Medications should be disclosed',
        'Pregnancy requires special consultation'
      ]
    },
    {
      title: 'Facility Rules',
      rules: [
        'Smoking prohibited throughout the facility',
        'Alcohol not permitted',
        'Quiet hours: 10 PM - 6 AM',
        'Mobile phone use restricted in treatment areas'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Health Packages"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Health Packages
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Comprehensive wellness programs designed for your transformation
          </p>
        </div>
      </section>

      {/* Package Selection */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-4">
              Choose Your Wellness Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the perfect package for your needs. All packages include accommodation, meals, and treatments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`card relative ${pkg.popular ? 'ring-2 ring-sage-400' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-sage-400 text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                
                <div className="text-center mb-4">
                  <h3 className="text-xl font-playfair font-bold text-sage-600 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Clock className="w-4 h-4 text-sage-400" />
                    <span className="text-sage-500 font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{pkg.rating} rating</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-2xl font-playfair font-bold text-sage-600">{pkg.price}</span>
                    <span className="text-sm text-gray-400 line-through">{pkg.originalPrice}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Per person</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-sage-600 mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.slice(0, 3).map((item, index) => (
                      <li key={index} className="flex items-start text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-sage-400 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className="text-sage-600 text-xs hover:text-sage-700 mt-2">
                    View full details
                  </button>
                </div>
                
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-1">Best for:</p>
                  <p className="text-xs font-medium text-sage-600">{pkg.bestFor}</p>
                </div>
                
                <Link to="/booking" className="btn-primary w-full text-center">
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochures Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
            Download Brochures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Complete Package Guide
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Detailed information about all our wellness packages and treatments
              </p>
              <button className="btn-primary">Download PDF</button>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Pricing & Tariffs
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Current pricing information and seasonal offers
              </p>
              <button className="btn-primary">Download PDF</button>
            </div>
            
            <div className="card text-center">
              <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
                Wellness Journey Map
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Visual guide to your wellness journey and what to expect
              </p>
              <button className="btn-primary">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* Policies and Rules */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
            Policies & Guidelines
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-4">
                  {policy.title}
                </h3>
                <ul className="space-y-2">
                  {policy.rules.map((rule, ruleIndex) => (
                    <li key={ruleIndex} className="flex items-start text-gray-600">
                      <div className="w-2 h-2 bg-sage-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      <section className="section-padding bg-sage-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-12 text-center">
            Package Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-sage-400 text-white">
                  <th className="px-6 py-4 text-left font-playfair">Features</th>
                  <th className="px-6 py-4 text-center font-playfair">Essential</th>
                  <th className="px-6 py-4 text-center font-playfair">Comprehensive</th>
                  <th className="px-6 py-4 text-center font-playfair">Premium</th>
                  <th className="px-6 py-4 text-center font-playfair">Intensive</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Duration</td>
                  <td className="px-6 py-4 text-center">3 Days</td>
                  <td className="px-6 py-4 text-center">7 Days</td>
                  <td className="px-6 py-4 text-center">14 Days</td>
                  <td className="px-6 py-4 text-center">21 Days</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Personal Consultant</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Panchakarma Therapy</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-medium">Private Accommodation</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">❌</td>
                  <td className="px-6 py-4 text-center">✅</td>
                  <td className="px-6 py-4 text-center">✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-medium">Follow-up Support</td>
                  <td className="px-6 py-4 text-center">1 Month</td>
                  <td className="px-6 py-4 text-center">2 Months</td>
                  <td className="px-6 py-4 text-center">3 Months</td>
                  <td className="px-6 py-4 text-center">6 Months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Choose the package that best fits your needs and start your transformation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-secondary">
              Book Your Package
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
              Get Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HealthPackages