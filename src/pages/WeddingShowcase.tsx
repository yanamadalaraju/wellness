import React from "react";
import { motion } from "framer-motion";
import { Heart, Camera, Calendar, Flower2, Sparkles } from "lucide-react";

const WeddingShowcase = () => {
  const services = [
    {
      icon: <Camera className="w-10 h-10 text-rose-500" />,
      title: "Wedding Photography",
      desc: "Capturing timeless moments filled with love and laughter that you'll cherish forever.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop",
    },
    {
      icon: <Flower2 className="w-10 h-10 text-rose-500" />,
      title: "Decor & Styling",
      desc: "Elegant floral arrangements and dreamy décor that transforms your vision into reality.",
      image: "https://i.pinimg.com/1200x/b4/9e/0d/b49e0d740ab089773b0d199ba90cc5c5.jpg",
    },
    {
      icon: <Calendar className="w-10 h-10 text-rose-500" />,
      title: "Event Planning",
      desc: "Seamless coordination and meticulous planning for a stress-free celebration.",
      image: "https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=500&h=300&fit=crop",
    },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-rose-50 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      {/* Floating sparkles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 text-rose-200"
      >
        <Sparkles size={40} />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-32 left-20 text-rose-200"
      >
        <Sparkles size={30} />
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
            <div className="absolute inset-0 bg-rose-100 rounded-full animate-ping"></div>
            <Heart className="w-12 h-12 text-rose-500 relative z-10" fill="currentColor" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent"
        >
          Celebrate Love, Celebrate Forever
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          From the first look to the final dance — we make your wedding day
          truly unforgettable. Experience elegance, emotion, and artistry in
          every detail.
        </motion.p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 mb-20">
        {services.map((service, index) => (
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
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl transform group-hover:scale-105 transition duration-500"></div>
            
            <div className="relative bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-rose-100">
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex justify-center mb-4"
                >
                  {service.icon}
                </motion.div>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-2">
                  {service.desc}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 text-rose-500 font-semibold text-sm hover:text-rose-600 transition-colors"
                >
                  Learn more →
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center relative z-10"
      >
        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Make Your Dream Wedding Come True 💍
          </h2>
          <p className="text-rose-100 text-lg mb-8 max-w-2xl mx-auto">
            Your perfect day deserves perfect planning. Let us help you create memories that will last a lifetime.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(225, 29, 72, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-rose-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-rose-50 transition-colors"
          >
            Book Your Date Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingShowcase;