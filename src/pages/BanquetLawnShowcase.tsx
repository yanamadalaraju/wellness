import React from "react";
import { motion } from "framer-motion";
import { Trees, Building2, Sun, GlassWater, Users, Sparkles, Leaf, ChevronRight, Calendar, MapPin } from "lucide-react";

const BanquetLawnPage: React.FC = () => {
  const features = [
    {
      icon: <Trees className="w-12 h-12" />,
      title: "Lush Green Lawns",
      desc: "Spread across acres of beautifully maintained gardens that set the perfect scene for your big day.",
      image: "https://i.pinimg.com/736x/00/fd/1a/00fd1ab5a0a5c0417b4851318a0e3efa.jpg",
      details: ["5+ Acres of Garden", "Manicured Lawns", "Natural Scenery", "Photo-friendly Spaces"]
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Spacious Banquet Hall",
      desc: "Air-conditioned indoor hall with elegant décor and flexible seating for grand celebrations.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      details: ["Climate Controlled", "Flexible Layout", "Elegant Decor", "Professional Lighting"]
    },
    {
      icon: <Sun className="w-12 h-12" />,
      title: "Open-Air Ambience",
      desc: "Experience the charm of nature with open-air dining, lighting, and live music setups.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      details: ["Outdoor Dining", "Live Music Setup", "Natural Lighting", "Starry Night Events"]
    },
    {
      icon: <GlassWater className="w-12 h-12" />,
      title: "Poolside Venues",
      desc: "Elegant poolside areas perfect for cocktail parties and intimate gatherings.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
      details: ["Infinity Pool", "Poolside Bar", "Lounge Areas", "Evening Reflections"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Grand Capacity",
      desc: "Accommodate large gatherings with our spacious venues designed for grand celebrations.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop",
      details: ["1000+ Capacity", "Multiple Layouts", "VIP Sections", "Guest Comfort"]
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: "Eco-Friendly Spaces",
      desc: "Sustainable venues that blend luxury with environmental consciousness.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      details: ["Green Initiatives", "Natural Ventilation", "Eco Materials", "Sustainable Practices"]
    }
  ];

  const amenities = [
    { icon: <Users className="w-6 h-6" />, text: "Up to 1000 Guests" },
    { icon: <GlassWater className="w-6 h-6" />, text: "Poolside Party Zone" },
    { icon: <Building2 className="w-6 h-6" />, text: "Luxury Suites & Changing Rooms" },
    { icon: <Sun className="w-6 h-6" />, text: "Outdoor Lighting & Stage Setup" },
    { icon: <Trees className="w-6 h-6" />, text: "Landscaped Gardens" },
    { icon: <Leaf className="w-6 h-6" />, text: "Eco-Friendly Facilities" },
    { icon: <Calendar className="w-6 h-6" />, text: "Flexible Booking Options" },
    { icon: <MapPin className="w-6 h-6" />, text: "Ample Parking Space" },
  ];

  const packages = [
    {
      name: "Lawn Package",
      price: "$8,999",
      description: "Perfect for outdoor celebrations",
      features: [
        "Outdoor Lawn Setup",
        "Basic Decorations",
        "Sound System",
        "Garden Access",
        "6 Hours Event"
      ],
      popular: false
    },
    {
      name: "Banquet Package",
      price: "$12,999",
      description: "Our most popular choice",
      features: [
        "Indoor Hall Access",
        "Premium Decor",
        "Professional Lighting",
        "Climate Control",
        "10 Hours Event",
        "Stage Setup",
        "VIP Lounge"
      ],
      popular: true
    },
    {
      name: "Premium Package",
      price: "$18,999",
      description: "The ultimate experience",
      features: [
        "Lawn + Banquet Access",
        "Luxury Decor",
        "Advanced Lighting",
        "Poolside Access",
        "Full Day Event",
        "Live Kitchen",
        "Butler Service",
        "Event Coordinator"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/1200x/54/8a/b9/548ab9901ae213d3ca754329f594054a.jpg"
            alt="Beautiful banquet lawn with lush greenery"
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
          <Leaf size={32} />
        </motion.div>
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -15, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-32 right-32 text-white/80"
        >
          <Trees size={28} />
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
                  <GlassWater className="w-12 h-12 text-white" />
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
                Banquet & Lawn
              </span>
              <br />
              <span className="text-white">Venues</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              Where nature's elegance meets luxury amenities for your most memorable celebrations
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
                Book Venue Tour
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
              { number: "50+", label: "Events Monthly" },
              { number: "1000+", label: "Guest Capacity" },
              { number: "5+", label: "Acres Garden" },
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

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Our <span className="text-emerald-600">Venue Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the perfect blend of natural beauty and luxury amenities for your special occasion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                    {feature.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.desc}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Explore Feature
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Premium <span className="text-emerald-600">Amenities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a flawless and memorable celebration
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-300 group text-center"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-white rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300 text-emerald-600 shadow-sm">
                    {amenity.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors">
                    {amenity.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Packages Section */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Venue <span className="text-emerald-600">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package that matches your vision and requirements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-2xl scale-105' 
                    : 'bg-white border border-gray-200 shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-emerald-600'}`}>
                    {pkg.price}
                  </div>
                  <p className={pkg.popular ? 'text-emerald-100' : 'text-gray-600'}>
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${pkg.popular ? 'bg-white' : 'bg-emerald-400'}`} />
                      <span className={pkg.popular ? 'text-white' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  Select Package
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready to Book Your Venue?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's create unforgettable memories in our beautiful banquet and lawn spaces
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Schedule Tour
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Get Quote
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default BanquetLawnPage;