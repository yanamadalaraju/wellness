import React from 'react'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>()

  const onSubmit = (data: ContactFormData) => {
    console.log('Contact form submitted:', data)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    reset()
  }

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Get in Touch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-overlay"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            We're here to guide you on your wellness journey
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-sage-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-600 mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Wellness Valley<br />
                      Serene Hills, Nature State 12345<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-sage-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-600 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: +1 (555) 123-4567<br />
                      Emergency: +1 (555) 123-4568
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-sage-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-600 mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: info@wellness-retreat.com<br />
                      Bookings: bookings@wellness-retreat.com<br />
                      Support: support@wellness-retreat.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-sage-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-600 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: 10:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-6 h-6 text-sage-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-sage-600 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">
                      +1 (555) 123-4567<br />
                      Available 24/7 for urgent inquiries
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">Emergency Contact</h3>
                <p className="text-yellow-700 text-sm">
                  For medical emergencies during your stay, please contact our 24/7 emergency line: 
                  <span className="font-semibold"> +1 (555) 123-4568</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card">
              <h2 className="text-3xl font-playfair font-bold text-sage-600 mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  >
                    <option value="">Select a subject</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="programs">Program Information</option>
                    <option value="treatments">Treatment Questions</option>
                    <option value="general">General Information</option>
                    <option value="feedback">Feedback</option>
                    <option value="careers">Career Opportunities</option>
                  </select>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                    placeholder="Please share your questions or comments..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-max">
          <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-8 text-center">
            Find Us
          </h2>
          
          <div className="bg-gray-200 rounded-xl overflow-hidden aspect-video">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-sage-400 mx-auto mb-4" />
                <h3 className="text-xl font-playfair font-semibold text-sage-600 mb-2">
                  Interactive Map
                </h3>
                <p className="text-gray-600">
                  Map integration would be implemented here using Google Maps API
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-sage-600 mb-2">
                What is the best time to visit?
              </h3>
              <p className="text-gray-600">
                Our retreat is open year-round, but the best time depends on your preferences. 
                Spring (March-May) and fall (September-November) offer pleasant weather and beautiful scenery.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-sage-600 mb-2">
                Do I need to bring anything specific?
              </h3>
              <p className="text-gray-600">
                We provide most essentials including towels, yoga mats, and meditation cushions. 
                We recommend bringing comfortable clothing, personal items, and any medications you may need.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-sage-600 mb-2">
                Are meals included in the programs?
              </h3>
              <p className="text-gray-600">
                Yes, all our programs include three nutritious meals daily, plus healthy snacks. 
                Our meals are prepared according to Ayurvedic principles using organic, locally-sourced ingredients.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold text-sage-600 mb-2">
                What if I have dietary restrictions?
              </h3>
              <p className="text-gray-600">
                We accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. 
                Please inform us about your dietary restrictions when booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section-padding bg-sage-400 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Are you passionate about holistic healing? We're always looking for dedicated professionals to join our wellness team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-secondary">
              View Open Positions
            </a>
            <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact