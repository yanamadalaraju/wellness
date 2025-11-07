import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Star } from "lucide-react";

const events = [
  {
    title: "Grand Wedding Expo 2025",
    date: "January 12, 2025",
    location: "Royal Palace Convention, Mumbai",
    description:
      "Join the largest wedding expo featuring top designers, planners, and vendors. Discover new trends, bridal collections, and luxury experiences.",
    image: "https://images.unsplash.com/photo-1604846887565-640f4e10c20e",
  },
  {
    title: "Luxury Banquet Launch",
    date: "March 3, 2025",
    location: "The Emerald Banquet, Delhi",
    description:
      "Celebrate the launch of our new luxury banquet hall with an evening filled with glamour, fine dining, and live music.",
    image: "https://images.unsplash.com/photo-1529680459049-bf0340fa0755",
  },
  {
    title: "Cultural Fest & Live Performances",
    date: "April 18, 2025",
    location: "Sunset Gardens, Hyderabad",
    description:
      "Experience the beauty of culture, music, and art under the stars. Enjoy traditional performances and gourmet cuisines.",
    image: "https://images.unsplash.com/photo-1607019658989-260e28728a9c",
  },
];

const EventsPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-white via-pink-50/30 to-white text-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519744346363-dc63c3aa91e5')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-4 text-rose-700"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Events & Celebrations
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Explore our upcoming and past events — where every celebration turns into a beautiful memory filled with joy, elegance, and unforgettable moments.
          </motion.p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-rose-800">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-4 left-4 bg-rose-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Calendar className="w-4 h-4 mr-1" /> {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="flex items-center text-rose-700 font-medium">
                  <MapPin className="w-5 h-5 mr-2" /> {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 via-pink-100 to-rose-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-rose-800">
          What Guests Say About Our Events
        </h2>
        <div className="grid md:grid-cols-3 gap-8 px-8 lg:px-20">
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                “{testimonial.feedback}”
              </p>
              <h4 className="font-semibold text-rose-700">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-rose-700 text-white">
        <h2 className="text-4xl font-bold mb-4">Host Your Next Event With Us</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Whether it’s a wedding, banquet, or cultural fest — our venues and event team make every moment extraordinary.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-white text-rose-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-rose-100 transition duration-300"
        >
          Plan an Event
        </motion.button>
      </section>
    </div>
  );
};

export default EventsPage;
