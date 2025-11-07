import React from "react";
import { motion } from "framer-motion";
import { Trees, Building2, Sun, GlassWater, Users, Sparkles, Leaf } from "lucide-react";

const BanquetLawnShowcase = () => {
  const features = [
    {
      icon: <Trees className="w-10 h-10 text-emerald-500" />,
      title: "Lush Green Lawns",
      desc: "Spread across acres of beautifully maintained gardens that set the perfect scene for your big day.",
      image: "https://images.unsplash.com/photo-1479065474856-4d4d45d7826e?w=500&h=300&fit=crop",
    },
    {
      icon: <Building2 className="w-10 h-10 text-emerald-500" />,
      title: "Spacious Banquet Hall",
      desc: "Air-conditioned indoor hall with elegant décor and flexible seating for grand celebrations.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop",
    },
    {
      icon: <Sun className="w-10 h-10 text-emerald-500" />,
      title: "Open-Air Ambience",
      desc: "Experience the charm of nature with open-air dining, lighting, and live music setups.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=300&fit=crop",
    },
  ];

  const amenities = [
    { icon: <Users className="w-6 h-6" />, text: "Up to 1000 Guests" },
    { icon: <GlassWater className="w-6 h-6" />, text: "Poolside Party Zone" },
    { icon: <Building2 className="w-6 h-6" />, text: "Luxury Suites & Changing Rooms" },
    { icon: <Sun className="w-6 h-6" />, text: "Outdoor Lighting & Stage Setup" },
    { icon: <Trees className="w-6 h-6" />, text: "Landscaped Gardens" },
    { icon: <Leaf className="w-6 h-6" />, text: "Eco-Friendly Facilities" },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-60"></div>
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360, y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-16 text-emerald-200"
      >
        <Leaf size={35} />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360, y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-20 text-emerald-200"
      >
        <Sparkles size={28} />
      </motion.div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-60"></div>
            <GlassWater className="w-12 h-12 text-emerald-500 relative z-10" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"
        >
          Celebrate in Nature's Elegance
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Whether it's a wedding, reception, or grand event — our banquet and
          lawn spaces combine luxury, serenity, and unforgettable experiences.
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 mb-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Card background with elegant shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl transform group-hover:scale-105 transition duration-500"></div>
            
            <div className="relative bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-emerald-100">
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.desc}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-2 text-emerald-500 font-semibold text-sm hover:text-emerald-600 transition-colors flex items-center justify-center gap-1 mx-auto"
                >
                  Explore more <span>→</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Amenities Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-20 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent"
        >
          World-Class Amenities
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-emerald-100 rounded-full group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-600">
                  {amenity.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors text-center">
                  {amenity.text}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Book Your Banquet or Lawn Today 🌿
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto"
          >
            Experience the perfect blend of nature's beauty and luxury amenities for your special occasion.
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-emerald-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-emerald-50 transition-colors"
          >
            Schedule a Visit
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default BanquetLawnShowcase;