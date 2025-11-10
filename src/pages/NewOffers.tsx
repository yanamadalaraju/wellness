import React from "react";
import { motion } from "framer-motion";
import { Gift, Tag, Percent, Star, Sparkles, Clock, ChevronRight, Calendar } from "lucide-react";

const NewsOffersPage: React.FC = () => {
  const offers = [
    {
      icon: <Gift className="w-12 h-12" />,
      title: "Wedding Season Special",
      desc: "Book your event this month and get exclusive discounts on lawn & banquet bookings with complimentary services.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      badge: "20% OFF",
      features: ["Free Decor Setup", "Complimentary Cake", "Photo Package", "Priority Booking"],
      validUntil: "December 31, 2024"
    },
    {
      icon: <Tag className="w-12 h-12" />,
      title: "Premium Decor Package",
      desc: "Enjoy luxury floral décor and premium styling on all our wedding and celebration packages at no extra cost.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      badge: "Free Upgrade",
      features: ["Luxury Florals", "Premium Lighting", "Theme Design", "Setup Included"],
      validUntil: "January 15, 2025"
    },
    {
      icon: <Percent className="w-12 h-12" />,
      title: "Early Bird Advantage",
      desc: "Plan ahead and save significantly on your celebration with our advanced booking discounts and benefits.",
      image: "https://i.pinimg.com/736x/8f/4e/65/8f4e6545eb954c4abcdf76c13f155cca.jpg",
      badge: "Save ₹15K",
      features: ["3+ Months Advance", "Flexible Dates", "Extra Services", "Payment Plans"],
      validUntil: "Ongoing"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Weekday Celebration Offer",
      desc: "Celebrate on weekdays and enjoy special rates with all the premium amenities and services included.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
      badge: "30% OFF",
      features: ["Monday-Thursday", "Full Service", "No Compromise", "Easy Booking"],
      validUntil: "March 31, 2025"
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Loyalty Rewards",
      desc: "Existing customers get exclusive benefits and additional discounts on their next booking with us.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      badge: "Member Only",
      features: ["Repeat Discount", "Priority Service", "Extra Perks", "VIP Treatment"],
      validUntil: "Always Available"
    },
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: "Festive Season Special",
      desc: "Celebrate during festive seasons with our special packages including traditional decorations and customs.",
      image: "https://images.unsplash.com/photo-1549451371-64aa98a6f660?w=600&h=400&fit=crop",
      badge: "Festive Deal",
      features: ["Traditional Decor", "Cultural Setup", "Special Menu", "Custom Services"],
      validUntil: "Seasonal"
    }
  ];

  const news = [
    {
      title: "New Banquet Hall Launch",
      date: "December 15, 2024",
      description: "We're excited to announce the opening of our new luxury banquet hall with state-of-the-art facilities.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=250&fit=crop",
      category: "Facility Update"
    },
    {
      title: "Sustainable Initiatives",
      date: "November 28, 2024",
      description: "Implementing eco-friendly practices across all our venues to promote sustainable celebrations.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      category: "Sustainability"
    },
    {
      title: "Award Recognition",
      date: "November 15, 2024",
      description: "Proud recipients of the 'Best Wedding Venue 2024' award for excellence in service and facilities.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
      category: "Achievement"
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/15/92/ab/1592abad73c99dd2f1645649e3b749f6.jpg"
            alt="Celebration and offers background"
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
          <Gift size={28} />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
                  <Star className="w-12 h-12 text-white" fill="currentColor" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif"
            >
              <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                News & Offers
              </span>
              <br />
              <span className="text-white">Special Deals</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Discover exclusive deals and stay updated with the latest news from our premium venues
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
                View All Offers
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Latest News
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
              { number: "50+", label: "Active Offers" },
              { number: "95%", label: "Satisfaction" },
              { number: "24/7", label: "Support" },
              { number: "500+", label: "Happy Clients" }
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

      {/* Special Offers Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Special <span className="text-emerald-600">Offers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Exclusive deals and packages designed to make your celebrations even more special
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {offer.badge}
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    {offer.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {offer.desc}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Valid until: {offer.validUntil}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Claim Offer
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Latest <span className="text-emerald-600">News</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with our latest developments, achievements, and announcements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Banner */}
      <section className="py-16 px-6 bg-gradient-to-r from-emerald-500 to-green-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Limited Time Offers - Don't Miss Out!</span>
              <Clock className="w-6 h-6" />
            </div>
            <p className="text-emerald-100 mb-6">
              These exclusive deals are available for a limited period. Book now to secure your special rates.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-gray-900"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Plan Your Celebration?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create unforgettable memories with our special offers and premium services
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300"
              >
                Get Custom Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsOffersPage;