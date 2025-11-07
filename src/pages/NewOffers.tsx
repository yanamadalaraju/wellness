import React from "react";
import { motion } from "framer-motion";
import { Gift, Tag, Percent, Star, Sparkles, Clock } from "lucide-react";

const NewOffers = () => {
  const offers = [
    {
      icon: <Gift className="w-10 h-10 text-amber-500" />,
      title: "Wedding Season Offer",
      desc: "Book your event this month and get 20% OFF on lawn & banquet bookings.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=300&fit=crop",
      badge: "20% OFF",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: <Tag className="w-10 h-10 text-amber-500" />,
      title: "Exclusive Décor Deal",
      desc: "Enjoy complimentary floral décor on all premium wedding packages.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=300&fit=crop",
      badge: "Free Décor",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      icon: <Percent className="w-10 h-10 text-amber-500" />,
      title: "Early Bird Discount",
      desc: "Book 3 months in advance and save up to ₹15,000 on your celebration.",
      image: "https://images.unsplash.com/photo-1479065474856-4d4d45d7826e?w=500&h=300&fit=crop",
      badge: "Save ₹15K",
      gradient: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full translate-x-1/3 translate-y-1/3 opacity-60"></div>
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360, y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 text-amber-200"
      >
        <Sparkles size={35} />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360, scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-16 text-amber-200"
      >
        <Gift size={30} />
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
            <div className="absolute inset-0 bg-amber-100 rounded-full animate-ping opacity-60"></div>
            <Star className="w-12 h-12 text-amber-500 relative z-10" fill="currentColor" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent"
        >
          Exclusive Offers Just for You ✨
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          Make your celebration extra special with our limited-time wedding,
          banquet, and event offers. Experience luxury with unbeatable deals.
        </motion.p>
      </motion.div>

      {/* Offer Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10 mb-20">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.2, duration: 0.7, type: "spring" }}
            whileHover={{ y: -15, scale: 1.02 }}
            className="group relative"
          >
            {/* Gradient border effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`}></div>
            
            <div className="relative bg-white rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-100 group-hover:border-amber-200">
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition duration-500"></div>
                
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.3, type: "spring" }}
                  className={`absolute top-4 right-4 bg-gradient-to-r ${offer.gradient} text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg`}
                >
                  {offer.badge}
                </motion.div>
                
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                  {offer.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-amber-600 transition-colors">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {offer.desc}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-amber-500 text-white py-3 rounded-xl font-semibold hover:bg-amber-600 transition-colors shadow-lg hover:shadow-amber-200"
                >
                  Claim Offer
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Limited Time Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12 relative z-10"
      >
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-center gap-4 text-white">
            <Clock className="w-6 h-6" />
            <span className="text-lg font-semibold">Limited Time Offer - Ends Soon!</span>
            <Clock className="w-6 h-6" />
          </div>
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
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 shadow-2xl max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Hurry! Offers Valid for a Limited Time Only 🎉
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-amber-100 text-lg mb-8 max-w-2xl mx-auto"
          >
            Don't miss this opportunity to make your special day even more memorable with our exclusive offers.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(245, 158, 11, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-amber-50 transition-colors"
            >
              Claim Your Offer Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-amber-600 transition-colors"
            >
              View All Offers
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default NewOffers;