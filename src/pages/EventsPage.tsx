import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star, ChevronRight, Sparkles } from "lucide-react";

const events = [
  {
    title: "Grand Wedding Expo 2025",
    date: "January 12, 2025",
    location: "Royal Palace Convention, Mumbai",
    description:
      "Join the largest wedding expo featuring top designers, planners, and vendors. Discover new trends, bridal collections, and luxury experiences.",
    image: "https://i.pinimg.com/1200x/00/ba/4b/00ba4ba599f5517eb6dd575ff69f067d.jpg",
  },
  {
    title: "Luxury Banquet Launch",
    date: "March 3, 2025",
    location: "The Emerald Banquet, Delhi",
    description:
      "Celebrate the launch of our new luxury banquet hall with an evening filled with glamour, fine dining, and live music.",
    image: "https://i.pinimg.com/1200x/03/ab/03/03ab03d3d4ddc645134259c0e31dbe11.jpg",
  },
  {
    title: "Cultural Fest & Live Performances",
    date: "April 18, 2025",
    location: "Sunset Gardens, Hyderabad",
    description:
      "Experience the beauty of culture, music, and art under the stars. Enjoy traditional performances and gourmet cuisines.",
    image: "https://i.pinimg.com/736x/46/af/55/46af55a204d9caab72979411904986d1.jpg",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/38/c2/13/38c213022e35a688ec2fa415d6a922c5.jpg"
            alt="Beautiful event background with lights and celebration"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50"></div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity }
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-green-200/20 rounded-full opacity-20"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              y: [0, -20, 0]
            }}
            transition={{ 
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity }
            }}
            className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/20 to-green-100/20 rounded-full opacity-30"
          />
        </div>

        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 text-white/80"
        >
          <Sparkles size={32} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-32 text-white/80"
        >
          <Star size={28} />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                Events &
              </span>
              <br />
              <span className="text-white">Celebrations</span>
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Explore our upcoming events where every celebration turns into beautiful memories filled with joy, elegance, and unforgettable moments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
              >
                Explore Events
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                View Gallery
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: "200+", label: "Events" },
              { number: "95%", label: "Satisfaction" },
              { number: "50+", label: "Venues" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Events Section */}
     <section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto">
    {/* Header Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center justify-center mb-6">
        <div className="w-16 h-px bg-emerald-300 mr-4"></div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100"
        >
          <Calendar className="w-8 h-8 text-emerald-600" />
        </motion.div>
        <div className="w-16 h-px bg-emerald-300 ml-4"></div>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
        Upcoming <span className="text-emerald-600">Events</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Curated experiences designed to create lasting memories and meaningful connections
      </p>
    </motion.div>

    {/* Events Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ 
            delay: index * 0.1, 
            duration: 0.7,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          whileHover={{ 
            y: -8,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
          className="group relative"
        >
          {/* Card Container */}
          <div className="relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 group-hover:border-emerald-100">
            
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-700 ease-out"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60"></div>
              
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold flex items-center shadow-lg border border-white/20">
                <Calendar className="w-4 h-4 mr-2 text-emerald-600" />
                <span className="text-gray-700">{event.date}</span>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6">
              {/* Event Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                {event.title}
              </h3>
              
              {/* Location */}
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2 text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium">{event.location}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm line-clamp-3 font-light">
                {event.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-emerald-600 text-white py-3 rounded-lg font-semibold text-sm hover:bg-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Register Now
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 border border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300 flex items-center justify-center"
                >
                  <span>Details</span>
                </motion.button>
              </div>
            </div>
            
            {/* Professional Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          {/* Subtle Hover Effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-50/0 to-green-50/0 group-hover:from-emerald-50/30 group-hover:to-green-50/20 transition-all duration-500 -z-10"></div>
        </motion.div>
      ))}
    </div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="text-center mt-16 pt-16 border-t border-gray-100"
    >
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
          Ready to Experience Our Events?
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Join our community of event enthusiasts and be the first to know about upcoming experiences
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl"
          >
            <Calendar className="w-5 h-5" />
            View Event Calendar
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
          >
            Contact Events Team
          </motion.button>
        </div>
        
        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-gray-100">
          {[
            { number: "200+", label: "Successful Events" },
            { number: "10K+", label: "Happy Attendees" },
            { number: "50+", label: "Premium Venues" },
            { number: "24/7", label: "Event Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.number}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What <span className="text-emerald-600">Guests Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our guests about their unforgettable experiences at our events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Aarav Sharma",
                feedback:
                  "An unforgettable experience! The event was beautifully organized and full of joy. Truly magical!",
              },
              {
                name: "Neha Patel",
                feedback:
                  "Every detail was perfect — from the decor to the hospitality. A truly elegant celebration!",
              },
              {
                name: "Rahul Mehta",
                feedback:
                  "Loved the energy, the design, and the experience. The event was a masterpiece of organization.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic mb-6 text-center">
                  "{testimonial.feedback}"
                </p>
                <h4 className="font-semibold text-emerald-600 text-center">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Host Your Next Event With Us
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Whether it's a wedding, banquet, or cultural fest — our venues and event team make every moment extraordinary.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Plan Your Event
                <Calendar className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                View Venues
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default EventsPage;