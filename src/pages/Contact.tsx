import React from 'react'
import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from 'lucide-react'
import ReachSection from '../components/Reachsection'
import { Link } from 'react-router-dom'

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
                    <span className="text-sage-800 font-medium">Contact Us</span>
                  </li>
                </ol>
              </nav>
            </div>

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
    
    <div className="rounded-xl overflow-hidden aspect-video relative shadow-lg">
      {/* Embedded Google Map */}
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.778119072864!2d72.3667497!3d23.587959999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c5a1b00000000%3A0x0!2zMjPCsDM1JzE2LjciTiA3MsKwMjInMDAuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
        width="800"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Wellness Nature Cure Location"
      ></iframe>
      
      {/* Floating location card */}
      <div className="absolute bottom-4 left-4 bg-white p-6 rounded-lg max-w-xs shadow-md">
        <div className="flex items-start gap-3">
          <MapPin className="w-6 h-6 text-sage-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-playfair font-semibold text-sage-700">Wellness Nature Cure</h3>
            <address className="not-italic text-sm text-gray-600 mt-1">
              Baliyasan, Nr. Mccain Foods<br />
              Ahmedabad–Mehsana Expressway<br />
              Mehsana – 382732, Gujarat
            </address>
          </div>
        </div>
        <a
          href="https://goo.gl/maps/example"
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
      <section className="section-padding bg-white">
  <div className="container-max">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-playfair font-bold text-sage-600 mb-3">
        Frequently Asked Questions
      </h2>
      <p className="text-lg text-gray-500 max-w-2xl mx-auto">
        Everything you need to know about your wellness journey at Nimba
      </p>
    </div>
    
    <div className="max-w-4xl mx-auto space-y-4">
      {/* FAQ Item 1 */}
      <div className="group overflow-hidden rounded-xl border border-sage-100 bg-sage-50 transition-all duration-300 hover:border-sage-200 hover:shadow-md">
        <div className="flex items-center justify-between p-6 cursor-pointer">
          <h3 className="text-xl font-semibold text-sage-700">
            What is the best time to visit?
          </h3>
          <svg className="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="px-6 pb-6 pt-0 text-gray-600">
          Our retreat is open year-round, but the best time depends on your preferences. 
          Spring (March-May) and fall (September-November) offer pleasant weather and beautiful scenery.
        </div>
      </div>

      {/* FAQ Item 2 */}
      <div className="group overflow-hidden rounded-xl border border-sage-100 bg-sage-50 transition-all duration-300 hover:border-sage-200 hover:shadow-md">
        <div className="flex items-center justify-between p-6 cursor-pointer">
          <h3 className="text-xl font-semibold text-sage-700">
            Do I need to bring anything specific?
          </h3>
          <svg className="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="px-6 pb-6 pt-0 text-gray-600">
          We provide most essentials including towels, yoga mats, and meditation cushions. 
          We recommend bringing comfortable clothing, personal items, and any medications you may need.
        </div>
      </div>

      {/* FAQ Item 3 */}
      <div className="group overflow-hidden rounded-xl border border-sage-100 bg-sage-50 transition-all duration-300 hover:border-sage-200 hover:shadow-md">
        <div className="flex items-center justify-between p-6 cursor-pointer">
          <h3 className="text-xl font-semibold text-sage-700">
            Are meals included in the programs?
          </h3>
          <svg className="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="px-6 pb-6 pt-0 text-gray-600">
          Yes, all our programs include three nutritious meals daily, plus healthy snacks. 
          Our meals are prepared according to Ayurvedic principles using organic, locally-sourced ingredients.
        </div>
      </div>

      {/* FAQ Item 4 */}
      <div className="group overflow-hidden rounded-xl border border-sage-100 bg-sage-50 transition-all duration-300 hover:border-sage-200 hover:shadow-md">
        <div className="flex items-center justify-between p-6 cursor-pointer">
          <h3 className="text-xl font-semibold text-sage-700">
            What if I have dietary restrictions?
          </h3>
          <svg className="w-5 h-5 text-sage-500 group-hover:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="px-6 pb-6 pt-0 text-gray-600">
          We accommodate various dietary needs including vegetarian, vegan, gluten-free, and allergy-specific requirements. 
          Please inform us about your dietary restrictions when booking.
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <p className="text-gray-500 mb-4">Still have questions?</p>
        <button className="bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg">
          Contact Our Team
        </button>
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