import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, 
  Camera, 
  Calendar, 
  Flower2, 
  Sparkles, 
  Users,
  Utensils,
  Music,
  Palette,
  Star,
  ChevronRight,
  Gem
} from "lucide-react";

const WeddingPage: React.FC = () => {
  const services = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Wedding Photography",
      desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
      features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
    },
    {
      icon: <Flower2 className="w-12 h-12" />,
      title: "Decor & Styling",
      desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Event Planning",
      desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
      image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
      features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
    },
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Catering Services",
      desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
      features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Entertainment",
      desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
      features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Theme Design",
      desc: "Bring your vision to life with custom theme development and creative design solutions.",
      image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
      features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah & Michael",
      date: "June 15, 2024",
      text: "Our wedding was absolutely magical! The team exceeded all our expectations and made our dream day come true.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jessica & David",
      date: "August 22, 2024",
      text: "Professional, creative, and incredibly attentive. Every detail was perfect and our guests are still talking about it!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily & Christopher",
      date: "September 5, 2024",
      text: "From planning to execution, everything was flawless. We couldn't have asked for a more beautiful celebration.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const packages = [
    {
      name: "Essential",
      price: "$5,999",
      description: "Perfect for intimate celebrations",
      features: [
        "Wedding Planning",
        "Basic Photography",
        "Standard Decor",
        "Catering for 50 guests",
        "6 Hours Coverage"
      ],
      popular: false
    },
    {
      name: "Deluxe",
      price: "$9,999",
      description: "Our most popular package",
      features: [
        "Full Wedding Planning",
        "Premium Photography",
        "Luxury Decor",
        "Catering for 100 guests",
        "10 Hours Coverage",
        "Entertainment Package",
        "Bridal Makeup"
      ],
      popular: true
    },
    {
      name: "Royal",
      price: "$15,999",
      description: "The ultimate wedding experience",
      features: [
        "VIP Wedding Planning",
        "Elite Photography & Videography",
        "Custom Theme Design",
        "Gourmet Catering for 200+",
        "Full Day Coverage",
        "Live Band & DJ",
        "Luxury Transportation",
        "Day-of Coordinator"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0">
    <img
      src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
      alt="Beautiful wedding background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay for better text readability */}
    <div className="absolute inset-0 bg-black/40"></div>
    {/* Subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
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
      className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
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
      className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
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
    <Heart size={28} />
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
            <Gem className="w-12 h-12 text-white" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6"
      >
        <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
          Forever
        </span>
        <br />
        <span className="text-white">Starts Here</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
      >
        Crafting unforgettable moments and timeless memories for your perfect day
      </motion.p>

     
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = '/wedding-gallery'} // or use your router
  className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
>
  View Gallery
</motion.button>
    </motion.div>

    {/* Stats */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
    >
      {[
        { number: "500+", label: "Weddings" },
        { number: "98%", label: "Satisfaction" },
        { number: "50+", label: "Awards" },
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

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete <span className="text-emerald-600">Wedding Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to celebration, we handle every detail to make your wedding day perfect
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      {/* <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wedding <span className="text-emerald-600">Packages</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect package that matches your vision and budget
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
                      <Star className="w-4 h-4 fill-current" />
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

      {/* Testimonials Section */}
      {/* <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Love <span className="text-emerald-600">Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from couples who celebrated their special day with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-emerald-600 text-sm">{testimonial.date}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Let's create the wedding of your dreams together. Schedule a consultation and let us bring your vision to life.
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                Book Consultation
                <Calendar className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
              >
                Call Us Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WeddingPage;