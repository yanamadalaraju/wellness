// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem
// } from "lucide-react";

// const WeddingPage: React.FC = () => {
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah & Michael",
//       date: "June 15, 2024",
//       text: "Our wedding was absolutely magical! The team exceeded all our expectations and made our dream day come true.",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       name: "Jessica & David",
//       date: "August 22, 2024",
//       text: "Professional, creative, and incredibly attentive. Every detail was perfect and our guests are still talking about it!",
//       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       name: "Emily & Christopher",
//       date: "September 5, 2024",
//       text: "From planning to execution, everything was flawless. We couldn't have asked for a more beautiful celebration.",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//     }
//   ];

//   const packages = [
//     {
//       name: "Essential",
//       price: "$5,999",
//       description: "Perfect for intimate celebrations",
//       features: [
//         "Wedding Planning",
//         "Basic Photography",
//         "Standard Decor",
//         "Catering for 50 guests",
//         "6 Hours Coverage"
//       ],
//       popular: false
//     },
//     {
//       name: "Deluxe",
//       price: "$9,999",
//       description: "Our most popular package",
//       features: [
//         "Full Wedding Planning",
//         "Premium Photography",
//         "Luxury Decor",
//         "Catering for 100 guests",
//         "10 Hours Coverage",
//         "Entertainment Package",
//         "Bridal Makeup"
//       ],
//       popular: true
//     },
//     {
//       name: "Royal",
//       price: "$15,999",
//       description: "The ultimate wedding experience",
//       features: [
//         "VIP Wedding Planning",
//         "Elite Photography & Videography",
//         "Custom Theme Design",
//         "Gourmet Catering for 200+",
//         "Full Day Coverage",
//         "Live Band & DJ",
//         "Luxury Transportation",
//         "Day-of Coordinator"
//       ],
//       popular: false
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//   {/* Background Image with Overlay */}
//   <div className="absolute inset-0">
//     <img
//       src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
//       alt="Beautiful wedding background"
//       className="w-full h-full object-cover"
//     />
//     {/* Dark overlay for better text readability */}
//     <div className="absolute inset-0 bg-black/40"></div>
//     {/* Subtle gradient overlay */}
//     <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//   </div>

//   {/* Animated Background Elements */}
//   <div className="absolute inset-0">
//     <motion.div
//       animate={{ 
//         rotate: 360,
//         scale: [1, 1.1, 1]
//       }}
//       transition={{ 
//         rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//         scale: { duration: 8, repeat: Infinity }
//       }}
//       className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//     />
//     <motion.div
//       animate={{ 
//         rotate: -360,
//         y: [0, -20, 0]
//       }}
//       transition={{ 
//         rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//         y: { duration: 6, repeat: Infinity }
//       }}
//       className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//     />
//   </div>

//   {/* Floating Icons */}
//   <motion.div
//     animate={{ 
//       y: [0, -20, 0],
//       rotate: [0, 10, 0]
//     }}
//     transition={{ duration: 4, repeat: Infinity }}
//     className="absolute top-20 left-20 text-white/80"
//   >
//     <Sparkles size={32} />
//   </motion.div>
//   <motion.div
//     animate={{ 
//       y: [0, 15, 0],
//       rotate: [0, -15, 0]
//     }}
//     transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//     className="absolute bottom-32 right-32 text-white/80"
//   >
//     <Heart size={28} />
//   </motion.div>

//   <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       className="mb-8"
//     >
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//         className="flex justify-center mb-6"
//       >
//         <div className="relative">
//           <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//           <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//             <Gem className="w-12 h-12 text-white" />
//           </div>
//         </div>
//       </motion.div>

//       <motion.h1
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="text-5xl md:text-7xl font-bold text-white mb-6"
//       >
//         <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//           Forever
//         </span>
//         <br />
//         <span className="text-white">Starts Here</span>
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.7 }}
//         className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//       >
//         Crafting unforgettable moments and timeless memories for your perfect day
//       </motion.p>

     
// <motion.button
//   whileHover={{ scale: 1.05 }}
//   whileTap={{ scale: 0.95 }}
//   onClick={() => window.location.href = '/wedding-gallery'} // or use your router
//   className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
// >
//   View Gallery
// </motion.button>
//     </motion.div>

//     {/* Stats */}
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 1.1 }}
//       className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//     >
//       {[
//         { number: "500+", label: "Weddings" },
//         { number: "98%", label: "Satisfaction" },
//         { number: "50+", label: "Awards" },
//         { number: "24/7", label: "Support" }
//       ].map((stat, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ scale: 1.1 }}
//           className="text-center"
//         >
//           <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//           <div className="text-white/80 text-sm">{stat.label}</div>
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>

//   {/* Scroll Indicator */}
//   <motion.div
//     animate={{ y: [0, 10, 0] }}
//     transition={{ duration: 2, repeat: Infinity }}
//     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//   >
//     <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//       <motion.div
//         animate={{ y: [0, 12, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="w-1 h-3 bg-white rounded-full mt-2"
//       />
//     </div>
//   </motion.div>
// </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Packages Section */}
//       {/* <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Wedding <span className="text-emerald-600">Packages</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Choose the perfect package that matches your vision and budget
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {packages.map((pkg, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 whileHover={{ y: -5 }}
//                 className={`relative rounded-2xl p-8 ${
//                   pkg.popular 
//                     ? 'bg-gradient-to-br from-emerald-500 to-green-500 text-white shadow-2xl scale-105' 
//                     : 'bg-white border border-gray-200 shadow-xl'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold text-sm flex items-center gap-2">
//                       <Star className="w-4 h-4 fill-current" />
//                       Most Popular
//                     </div>
//                   </div>
//                 )}

//                 <div className="text-center mb-6">
//                   <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
//                     {pkg.name}
//                   </h3>
//                   <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-emerald-600'}`}>
//                     {pkg.price}
//                   </div>
//                   <p className={pkg.popular ? 'text-emerald-100' : 'text-gray-600'}>
//                     {pkg.description}
//                   </p>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center gap-3">
//                       <div className={`w-2 h-2 rounded-full ${pkg.popular ? 'bg-white' : 'bg-emerald-400'}`} />
//                       <span className={pkg.popular ? 'text-white' : 'text-gray-600'}>
//                         {feature}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>

//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-full py-4 rounded-xl font-semibold transition-all ${
//                     pkg.popular
//                       ? 'bg-white text-emerald-600 hover:bg-emerald-50'
//                       : 'bg-emerald-600 text-white hover:bg-emerald-700'
//                   }`}
//                 >
//                   Select Package
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* Testimonials Section */}
//       {/* <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Love <span className="text-emerald-600">Stories</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Hear from couples who celebrated their special day with us
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-emerald-600 text-sm">{testimonial.date}</p>
//                   </div>
//                 </div>
//                 <p className="text-gray-600 leading-relaxed italic">"{testimonial.text}"</p>
//                 <div className="flex gap-1 mt-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* CTA Section */}
//       <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-green-600">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="text-white"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               Ready to Start Your Journey?
//             </h2>
//             <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
//               Let's create the wedding of your dreams together. Schedule a consultation and let us bring your vision to life.
//             </p>
//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
//               >
//                 Book Consultation
//                 <Calendar className="w-5 h-5" />
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-300"
//               >
//                 Call Us Now
//               </motion.button>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WeddingPage;





// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone
// } from "lucide-react";

// const WeddingPage: React.FC = () => {
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Sarah & Michael",
//       date: "June 15, 2024",
//       text: "Our wedding was absolutely magical! The team exceeded all our expectations and made our dream day come true.",
//       image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       name: "Jessica & David",
//       date: "August 22, 2024",
//       text: "Professional, creative, and incredibly attentive. Every detail was perfect and our guests are still talking about it!",
//       image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face"
//     },
//     {
//       name: "Emily & Christopher",
//       date: "September 5, 2024",
//       text: "From planning to execution, everything was flawless. We couldn't have asked for a more beautiful celebration.",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
//     }
//   ];

//   const packages = [
//     {
//       name: "Essential",
//       price: "$5,999",
//       description: "Perfect for intimate celebrations",
//       features: [
//         "Wedding Planning",
//         "Basic Photography",
//         "Standard Decor",
//         "Catering for 50 guests",
//         "6 Hours Coverage"
//       ],
//       popular: false
//     },
//     {
//       name: "Deluxe",
//       price: "$9,999",
//       description: "Our most popular package",
//       features: [
//         "Full Wedding Planning",
//         "Premium Photography",
//         "Luxury Decor",
//         "Catering for 100 guests",
//         "10 Hours Coverage",
//         "Entertainment Package",
//         "Bridal Makeup"
//       ],
//       popular: true
//     },
//     {
//       name: "Royal",
//       price: "$15,999",
//       description: "The ultimate wedding experience",
//       features: [
//         "VIP Wedding Planning",
//         "Elite Photography & Videography",
//         "Custom Theme Design",
//         "Gourmet Catering for 200+",
//         "Full Day Coverage",
//         "Live Band & DJ",
//         "Luxury Transportation",
//         "Day-of Coordinator"
//       ],
//       popular: false
//     }
//   ];

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/40"></div>
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity }
//             }}
//             className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -360,
//               y: [0, -20, 0]
//             }}
//             transition={{ 
//               rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//               y: { duration: 6, repeat: Infinity }
//             }}
//             className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//           />
//         </div>

//         {/* Floating Icons */}
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 10, 0]
//           }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-20 left-20 text-white/80"
//         >
//           <Sparkles size={32} />
//         </motion.div>
//         <motion.div
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -15, 0]
//           }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-32 right-32 text-white/80"
//         >
//           <Heart size={28} />
//         </motion.div>

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 Forever
//               </span>
//               <br />
//               <span className="text-white">Starts Here</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               Crafting unforgettable moments and timeless memories for your perfect day
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={redirectToGallery}
//               className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//             >
//               View Gallery
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {[
//               { number: "500+", label: "Weddings" },
//               { number: "98%", label: "Satisfaction" },
//               { number: "50+", label: "Awards" },
//               { number: "24/7", label: "Support" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 925158271, 925158273
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click from triggering
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//      {/* Contact Section */}
// {/* Contact Section */}
// <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//   {/* Background Image with Overlay */}
//   <div className="absolute inset-0">
//     <img
//       src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//       alt="Luxury wedding background"
//       className="w-full h-full object-cover"
//     />
//     <div className="absolute inset-0 bg-black/40"></div>
//     <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//   </div>

//   {/* Animated Background Elements */}
//   <div className="absolute inset-0">
//     {[...Array(4)].map((_, i) => (
//       <motion.div
//         key={i}
//         className="absolute text-white/15"
//         style={{
//           left: `${Math.random() * 100}%`,
//           top: `${Math.random() * 100}%`,
//         }}
//         animate={{
//           y: [0, -20, 0],
//           rotate: [0, 180],
//         }}
//         transition={{
//           duration: 6 + Math.random() * 3,
//           repeat: Infinity,
//           delay: Math.random() * 2,
//         }}
//       >
//         <Heart size={20} />
//       </motion.div>
//     ))}
//   </div>

//   {/* Sparkle Cursor Trail */}
//   <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
//     {/* This will be populated by JavaScript sparkles */}
//   </div>

//   <div className="relative z-10 max-w-4xl mx-auto">
//     {/* Header */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="text-center mb-12"
//     >
//       <motion.h2
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//         whileHover={{
//           scale: 1.02,
//           transition: { duration: 0.2 }
//         }}
//       >
//         For Wedding & Events{" "}
//         <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//           Get In Touch
//         </span>
//       </motion.h2>
//       <motion.p 
//         className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//         whileHover={{
//           scale: 1.05,
//           transition: { duration: 0.2 }
//         }}
//       >
//         Let's create your perfect day together
//       </motion.p>
//     </motion.div>

//     {/* Contact Cards */}
//     <div className="grid md:grid-cols-2 gap-6">
//       {/* Phone Numbers Card */}
//       <motion.div
//         initial={{ opacity: 0, x: -30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//         whileHover={{
//           scale: 1.02,
//           y: -5,
//           transition: { duration: 0.3 }
//         }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {/* Star Border Animation */}
//         <div className="absolute inset-0 rounded-2xl overflow-hidden">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute"
//               style={{
//                 left: `${(i / 8) * 100}%`,
//                 top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//               }}
//               animate={{
//                 x: [0, 100, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: i * 0.4,
//                 ease: "linear"
//               }}
//             >
//               <Star className="w-3 h-3 text-emerald-400 fill-current" />
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//           whileHover={{
//             scale: 1.1,
//             rotate: 5,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <Phone className="w-6 h-6 text-white" />
//         </motion.div>
        
//         <motion.h3 
//           className="text-xl font-bold text-white text-center mb-4 cursor-default"
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.2 }
//           }}
//         >
//           Call Us Directly
//         </motion.h3>
        
//         <div className="space-y-3">
//           <motion.div
//             whileHover={{ 
//               x: 5,
//               scale: 1.02,
//               backgroundColor: "rgba(255,255,255,0.1)"
//             }}
//             className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//           >
//             <div className="flex items-center space-x-3">
//               <motion.div 
//                 className="w-2 h-2 bg-emerald-400 rounded-full"
//                 animate={{
//                   scale: [1, 1.5, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                 }}
//               />
//               <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">925158271</span>
//               <motion.div
//                 className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                 animate={{
//                   x: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                 }}
//               >
//                 <ChevronRight className="w-4 h-4 text-emerald-400" />
//               </motion.div>
//             </div>
//           </motion.div>

//           <motion.div
//             whileHover={{ 
//               x: 5,
//               scale: 1.02,
//               backgroundColor: "rgba(255,255,255,0.1)"
//             }}
//             className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//           >
//             <div className="flex items-center space-x-3">
//               <motion.div 
//                 className="w-2 h-2 bg-green-400 rounded-full"
//                 animate={{
//                   scale: [1, 1.5, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   delay: 0.5
//                 }}
//               />
//               <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">925158273</span>
//               <motion.div
//                 className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                 animate={{
//                   x: [0, 5, 0],
//                 }}
//                 transition={{
//                   duration: 0.5,
//                   repeat: Infinity,
//                 }}
//               >
//                 <ChevronRight className="w-4 h-4 text-green-400" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>

//         <motion.p 
//           className="text-white/70 text-sm text-center mt-4 cursor-default"
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.2 }
//           }}
//         >
//           Available 24/7 for inquiries
//         </motion.p>
//       </motion.div>

//       {/* Consultation Card */}
//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         viewport={{ once: true }}
//         className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//         whileHover={{
//           scale: 1.02,
//           y: -5,
//           transition: { duration: 0.3 }
//         }}
//         whileTap={{ scale: 0.98 }}
//       >
//         {/* Star Border Animation */}
//         <div className="absolute inset-0 rounded-2xl overflow-hidden">
//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute"
//               style={{
//                 left: `${(i / 8) * 100}%`,
//                 top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//               }}
//               animate={{
//                 x: [100, 0, 100],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: 3,
//                 repeat: Infinity,
//                 delay: i * 0.4,
//                 ease: "linear"
//               }}
//             >
//               <Star className="w-3 h-3 text-white fill-current" />
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//           whileHover={{
//             scale: 1.1,
//             rotate: -5,
//             transition: { duration: 0.2 }
//           }}
//         >
//           <Calendar className="w-6 h-6 text-emerald-600" />
//         </motion.div>
        
//         <motion.h3 
//           className="text-xl font-bold text-white text-center mb-4 cursor-default"
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.2 }
//           }}
//         >
//           Free Consultation
//         </motion.h3>
        
//         <motion.p 
//           className="text-white/80 text-sm text-center mb-6 cursor-default"
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.2 }
//           }}
//         >
//           Discuss your vision with our experts
//         </motion.p>

//         <motion.button
//           whileHover={{ 
//             scale: 1.05,
//             boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative z-10 cursor-pointer group/btn"
//         >
//           <motion.span
//             animate={{
//               x: [0, 3, 0],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//           >
//             Book Now
//           </motion.span>
//           <motion.div
//             animate={{
//               x: [0, 5, 0],
//             }}
//             transition={{
//               duration: 1.5,
//               repeat: Infinity,
//             }}
//           >
//             <ChevronRight className="w-4 h-4" />
//           </motion.div>
//         </motion.button>
//       </motion.div>
//     </div>

//     {/* Quick Features */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//     >
//       {[
//         { icon: "✨", text: "Expert" },
//         { icon: "💎", text: "Luxury" },
//         { icon: "❤️", text: "Custom" }
//       ].map((item, index) => (
//         <motion.div
//           key={index}
//           whileHover={{ 
//             scale: 1.1,
//             y: -2,
//             transition: { duration: 0.2 }
//           }}
//           whileTap={{ scale: 0.95 }}
//           className="text-center cursor-pointer group/feature"
//         >
//           <motion.div 
//             className="text-2xl mb-1"
//             whileHover={{
//               scale: 1.3,
//               rotate: 10,
//               transition: { duration: 0.2 }
//             }}
//           >
//             {item.icon}
//           </motion.div>
//           <motion.div 
//             className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//             whileHover={{
//               scale: 1.05,
//               transition: { duration: 0.2 }
//             }}
//           >
//             {item.text}
//           </motion.div>
//         </motion.div>
//       ))}
//     </motion.div>
//   </div>

//   {/* Sparkle Cursor Script */}
//   <script
//     dangerouslySetInnerHTML={{
//       __html: `
//         document.addEventListener('DOMContentLoaded', function() {
//           if (window.matchMedia('(min-width: 768px)').matches) {
//             const cursorTrail = document.querySelector('.fixed.inset-0');
//             let mouseX = 0;
//             let mouseY = 0;
//             let sparkles = [];
//             let sparkleId = 0;

//             // Create initial sparkles
//             for (let i = 0; i < 15; i++) {
//               createSparkle();
//             }

//             function createSparkle() {
//               const sparkle = document.createElement('div');
//               sparkle.className = 'absolute w-2 h-2 pointer-events-none';
//               sparkle.innerHTML = \`
//                 <div class="w-full h-full relative">
//                   <div class="absolute inset-0 bg-yellow-300 rounded-full animate-ping"></div>
//                   <div class="absolute inset-0 bg-yellow-200 rounded-full"></div>
//                 </div>
//               \`;
              
//               sparkle.style.left = Math.random() * 100 + '%';
//               sparkle.style.top = Math.random() * 100 + '%';
//               sparkle.dataset.id = sparkleId++;
              
//               cursorTrail.appendChild(sparkle);
//               sparkles.push(sparkle);

//               // Random movement for idle sparkles
//               moveSparkleRandomly(sparkle);
//             }

//             function moveSparkleRandomly(sparkle) {
//               const duration = 3000 + Math.random() * 4000;
//               const x = Math.random() * 100;
//               const y = Math.random() * 100;

//               sparkle.style.transition = \`all \${duration}ms ease-in-out\`;
//               sparkle.style.left = x + '%';
//               sparkle.style.top = y + '%';

//               setTimeout(() => moveSparkleRandomly(sparkle), duration);
//             }

//             document.addEventListener('mousemove', (e) => {
//               mouseX = e.clientX;
//               mouseY = e.clientY;

//               // Move some sparkles toward cursor
//               sparkles.forEach((sparkle, index) => {
//                 if (index % 3 === 0) { // Move every 3rd sparkle
//                   const rect = sparkle.getBoundingClientRect();
//                   const sparkleX = rect.left + rect.width / 2;
//                   const sparkleY = rect.top + rect.height / 2;
                  
//                   const distance = Math.sqrt(
//                     Math.pow(mouseX - sparkleX, 2) + Math.pow(mouseY - sparkleY, 2)
//                   );

//                   if (distance < 200) {
//                     const angle = Math.atan2(mouseY - sparkleY, mouseX - sparkleX);
//                     const moveX = Math.cos(angle) * 2;
//                     const moveY = Math.sin(angle) * 2;

//                     sparkle.style.transform = \`translate(\${moveX}px, \${moveY}px)\`;
                    
//                     // Create trail effect
//                     if (distance < 100 && Math.random() > 0.7) {
//                       createTrailSparkle(mouseX, mouseY);
//                     }
//                   }
//                 }
//               });

//               // Create cursor sparkles
//               if (Math.random() > 0.3) {
//                 createCursorSparkle(mouseX, mouseY);
//               }
//             });

//             function createCursorSparkle(x, y) {
//               const trailSparkle = document.createElement('div');
//               trailSparkle.className = 'absolute w-1 h-1 pointer-events-none';
//               trailSparkle.innerHTML = \`
//                 <div class="w-full h-full bg-gradient-to-r from-emerald-300 to-green-300 rounded-full animate-ping"></div>
//               \`;
              
//               trailSparkle.style.left = x + 'px';
//               trailSparkle.style.top = y + 'px';
//               trailSparkle.style.opacity = '0.8';
              
//               cursorTrail.appendChild(trailSparkle);

//               // Animate and remove
//               setTimeout(() => {
//                 trailSparkle.style.transition = 'all 500ms ease-out';
//                 trailSparkle.style.opacity = '0';
//                 trailSparkle.style.transform = 'scale(2)';
//                 setTimeout(() => {
//                   cursorTrail.removeChild(trailSparkle);
//                 }, 500);
//               }, 100);
//             }

//             function createTrailSparkle(x, y) {
//               const trail = document.createElement('div');
//               trail.className = 'absolute w-1 h-1 pointer-events-none';
//               trail.innerHTML = \`
//                 <div class="w-full h-full bg-white rounded-full"></div>
//               \`;
              
//               trail.style.left = (x + Math.random() * 20 - 10) + 'px';
//               trail.style.top = (y + Math.random() * 20 - 10) + 'px';
//               trail.style.opacity = '0.6';
              
//               cursorTrail.appendChild(trail);

//               // Animate and remove
//               setTimeout(() => {
//                 trail.style.transition = 'all 800ms ease-out';
//                 trail.style.opacity = '0';
//                 trail.style.transform = 'translateY(-20px) scale(0.5)';
//                 setTimeout(() => {
//                   if (trail.parentNode) {
//                     cursorTrail.removeChild(trail);
//                   }
//                 }, 800);
//               }, 200);
//             }

//             // Clean up sparkles periodically
//             setInterval(() => {
//               if (sparkles.length > 20) {
//                 const oldSparkle = sparkles.shift();
//                 if (oldSparkle && oldSparkle.parentNode) {
//                   cursorTrail.removeChild(oldSparkle);
//                 }
//               }
//             }, 5000);
//           }
//         });
//       `,
//     }}
//   />
// </section>
//     </div>
//   );
// };

// export default WeddingPage;






// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone,
//   User
// } from "lucide-react";

// const WeddingPage: React.FC = () => {
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   // Sparkle lighting cursor effect for contact section only
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const contactSection = document.getElementById('wedding-contact');
//     if (!contactSection) return;

//     let isInsideContactSection = false;
//     let cursorTrail: HTMLDivElement | null = null;

//     const createCursorTrail = () => {
//       cursorTrail = document.createElement('div');
//       cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
//       cursorTrail.style.display = 'none';
//       document.body.appendChild(cursorTrail);
//     };

//     const handleMouseEnter = () => {
//       isInsideContactSection = true;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'block';
//       }
//     };

//     const handleMouseLeave = () => {
//       isInsideContactSection = false;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'none';
//         // Clear all sparkles when leaving
//         cursorTrail.innerHTML = '';
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isInsideContactSection || !cursorTrail) return;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // Create sparkle lighting effect
//       createSparkleLight(mouseX, mouseY);
      
//       // Create occasional trail sparkles
//       if (Math.random() > 0.7) {
//         createTrailSparkle(mouseX, mouseY);
//       }
//     };

//     const createSparkleLight = (x: number, y: number) => {
//       const sparkle = document.createElement('div');
//       sparkle.className = 'absolute pointer-events-none z-50';
      
//       // Random sparkle size
//       const size = 3 + Math.random() * 4;
//       sparkle.style.width = `${size}px`;
//       sparkle.style.height = `${size}px`;
      
//       // Random position around cursor
//       const offsetX = (Math.random() - 0.5) * 40;
//       const offsetY = (Math.random() - 0.5) * 40;
      
//       sparkle.style.left = (x + offsetX) + 'px';
//       sparkle.style.top = (y + offsetY) + 'px';
      
//       // Sparkle styles
//       sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
//       sparkle.style.borderRadius = '50%';
//       sparkle.style.boxShadow = `
//         0 0 8px #ffffff,
//         0 0 12px #34d399,
//         0 0 16px #10b981
//       `;
//       sparkle.style.opacity = '0.9';
//       sparkle.style.transform = 'scale(0)';
      
//       cursorTrail!.appendChild(sparkle);

//       // Sparkle animation
//       const animation = sparkle.animate([
//         { transform: 'scale(0) rotate(0deg)', opacity: 0 },
//         { transform: 'scale(1) rotate(180deg)', opacity: 1 },
//         { transform: 'scale(0) rotate(360deg)', opacity: 0 }
//       ], {
//         duration: 800 + Math.random() * 400,
//         easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
//       });

//       animation.onfinish = () => {
//         if (sparkle.parentNode) {
//           cursorTrail!.removeChild(sparkle);
//         }
//       };
//     };

//     const createTrailSparkle = (x: number, y: number) => {
//       const trail = document.createElement('div');
//       trail.className = 'absolute pointer-events-none z-50';
      
//       trail.style.width = '2px';
//       trail.style.height = '2px';
//       trail.style.left = x + 'px';
//       trail.style.top = y + 'px';
//       trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
//       trail.style.borderRadius = '50%';
//       trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
//       trail.style.opacity = '0.8';
      
//       cursorTrail!.appendChild(trail);

//       // Trail animation
//       const animation = trail.animate([
//         { transform: 'scale(1) translateY(0)', opacity: 0.8 },
//         { transform: 'scale(3) translateY(-20px)', opacity: 0 }
//       ], {
//         duration: 600,
//         easing: 'ease-out'
//       });

//       animation.onfinish = () => {
//         if (trail.parentNode) {
//           cursorTrail!.removeChild(trail);
//         }
//       };
//     };

//     // Create cursor trail element
//     createCursorTrail();

//     // Add event listeners
//     contactSection.addEventListener('mouseenter', handleMouseEnter);
//     contactSection.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       // Cleanup
//       contactSection.removeEventListener('mouseenter', handleMouseEnter);
//       contactSection.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mousemove', handleMouseMove);
//       if (cursorTrail && cursorTrail.parentNode) {
//         document.body.removeChild(cursorTrail);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/40"></div>
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity }
//             }}
//             className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -360,
//               y: [0, -20, 0]
//             }}
//             transition={{ 
//               rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//               y: { duration: 6, repeat: Infinity }
//             }}
//             className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//           />
//         </div>

//         {/* Floating Icons */}
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 10, 0]
//           }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-20 left-20 text-white/80"
//         >
//           <Sparkles size={32} />
//         </motion.div>
//         <motion.div
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -15, 0]
//           }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-32 right-32 text-white/80"
//         >
//           <Heart size={28} />
//         </motion.div>

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 Forever
//               </span>
//               <br />
//               <span className="text-white">Starts Here</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               Crafting unforgettable moments and timeless memories for your perfect day
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={redirectToGallery}
//               className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//             >
//               View Gallery
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {[
//               { number: "500+", label: "Weddings" },
//               { number: "98%", label: "Satisfaction" },
//               { number: "50+", label: "Awards" },
//               { number: "24/7", label: "Support" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 925158271, 925158273
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click from triggering
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with Sparkle Cursor */}
//       <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//             alt="Luxury wedding background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white/15"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               <Heart size={20} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               For Wedding & Events{" "}
//               <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//                 Get In Touch
//               </span>
//             </motion.h2>
//             <motion.p 
//               className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               Let's create your perfect day together
//             </motion.p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Phone Numbers Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [0, 100, 0],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-emerald-400 fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Phone className="w-6 h-6 text-white" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Call Us Directly
//               </motion.h3>
              
//               <div className="space-y-3">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-emerald-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                     <User className="w-4 h-4 text-emerald-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">925158271</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-emerald-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-green-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: 0.5
//                       }}
//                     />
//                     <User className="w-4 h-4 text-green-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">925158273</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-green-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="text-white/70 text-sm text-center mt-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Available 24/7 for inquiries
//               </motion.p>
//             </motion.div>

//             {/* Consultation Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [100, 0, 100],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Calendar className="w-6 h-6 text-emerald-600" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Free Consultation
//               </motion.h3>
              
//               <motion.p 
//                 className="text-white/80 text-sm text-center mb-6 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Discuss your vision with our experts
//               </motion.p>

//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative z-10 cursor-pointer group/btn"
//               >
//                 <motion.span
//                   animate={{
//                     x: [0, 3, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   Book Now
//                 </motion.span>
//                 <motion.div
//                   animate={{
//                     x: [0, 5, 0],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                   }}
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </motion.div>
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Quick Features */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//           >
//             {[
//               { icon: "✨", text: "Expert" },
//               { icon: "💎", text: "Luxury" },
//               { icon: "❤️", text: "Custom" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ 
//                   scale: 1.1,
//                   y: -2,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-center cursor-pointer group/feature"
//               >
//                 <motion.div 
//                   className="text-2xl mb-1"
//                   whileHover={{
//                     scale: 1.3,
//                     rotate: 10,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <motion.div 
//                   className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.text}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WeddingPage;





// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone,
//   User,
//   CheckCircle,
//   Clock,
//   MapPin,
//   Gift
// } from "lucide-react";

// const WeddingPage: React.FC = () => {
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   const [isShaking, setIsShaking] = useState(false);

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   // Function to handle book now click with shake animation
//   const handleBookNow = () => {
//     setIsShaking(true);
//     // Reset shake animation after it completes
//     setTimeout(() => setIsShaking(false), 600);
    
//     // You can add your booking logic here
//     console.log("Book Now clicked!");
//   };

//   // Sparkle lighting cursor effect for contact section only
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const contactSection = document.getElementById('wedding-contact');
//     if (!contactSection) return;

//     let isInsideContactSection = false;
//     let cursorTrail: HTMLDivElement | null = null;

//     const createCursorTrail = () => {
//       cursorTrail = document.createElement('div');
//       cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
//       cursorTrail.style.display = 'none';
//       document.body.appendChild(cursorTrail);
//     };

//     const handleMouseEnter = () => {
//       isInsideContactSection = true;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'block';
//       }
//     };

//     const handleMouseLeave = () => {
//       isInsideContactSection = false;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'none';
//         // Clear all sparkles when leaving
//         cursorTrail.innerHTML = '';
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isInsideContactSection || !cursorTrail) return;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // Create sparkle lighting effect
//       createSparkleLight(mouseX, mouseY);
      
//       // Create occasional trail sparkles
//       if (Math.random() > 0.7) {
//         createTrailSparkle(mouseX, mouseY);
//       }
//     };

//     const createSparkleLight = (x: number, y: number) => {
//       const sparkle = document.createElement('div');
//       sparkle.className = 'absolute pointer-events-none z-50';
      
//       // Random sparkle size
//       const size = 3 + Math.random() * 4;
//       sparkle.style.width = `${size}px`;
//       sparkle.style.height = `${size}px`;
      
//       // Random position around cursor
//       const offsetX = (Math.random() - 0.5) * 40;
//       const offsetY = (Math.random() - 0.5) * 40;
      
//       sparkle.style.left = (x + offsetX) + 'px';
//       sparkle.style.top = (y + offsetY) + 'px';
      
//       // Sparkle styles
//       sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
//       sparkle.style.borderRadius = '50%';
//       sparkle.style.boxShadow = `
//         0 0 8px #ffffff,
//         0 0 12px #34d399,
//         0 0 16px #10b981
//       `;
//       sparkle.style.opacity = '0.9';
//       sparkle.style.transform = 'scale(0)';
      
//       cursorTrail!.appendChild(sparkle);

//       // Sparkle animation
//       const animation = sparkle.animate([
//         { transform: 'scale(0) rotate(0deg)', opacity: 0 },
//         { transform: 'scale(1) rotate(180deg)', opacity: 1 },
//         { transform: 'scale(0) rotate(360deg)', opacity: 0 }
//       ], {
//         duration: 800 + Math.random() * 400,
//         easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
//       });

//       animation.onfinish = () => {
//         if (sparkle.parentNode) {
//           cursorTrail!.removeChild(sparkle);
//         }
//       };
//     };

//     const createTrailSparkle = (x: number, y: number) => {
//       const trail = document.createElement('div');
//       trail.className = 'absolute pointer-events-none z-50';
      
//       trail.style.width = '2px';
//       trail.style.height = '2px';
//       trail.style.left = x + 'px';
//       trail.style.top = y + 'px';
//       trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
//       trail.style.borderRadius = '50%';
//       trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
//       trail.style.opacity = '0.8';
      
//       cursorTrail!.appendChild(trail);

//       // Trail animation
//       const animation = trail.animate([
//         { transform: 'scale(1) translateY(0)', opacity: 0.8 },
//         { transform: 'scale(3) translateY(-20px)', opacity: 0 }
//       ], {
//         duration: 600,
//         easing: 'ease-out'
//       });

//       animation.onfinish = () => {
//         if (trail.parentNode) {
//           cursorTrail!.removeChild(trail);
//         }
//       };
//     };

//     // Create cursor trail element
//     createCursorTrail();

//     // Add event listeners
//     contactSection.addEventListener('mouseenter', handleMouseEnter);
//     contactSection.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       // Cleanup
//       contactSection.removeEventListener('mouseenter', handleMouseEnter);
//       contactSection.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mousemove', handleMouseMove);
//       if (cursorTrail && cursorTrail.parentNode) {
//         document.body.removeChild(cursorTrail);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/40"></div>
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity }
//             }}
//             className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -360,
//               y: [0, -20, 0]
//             }}
//             transition={{ 
//               rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//               y: { duration: 6, repeat: Infinity }
//             }}
//             className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//           />
//         </div>

//         {/* Floating Icons */}
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 10, 0]
//           }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-20 left-20 text-white/80"
//         >
//           <Sparkles size={32} />
//         </motion.div>
//         <motion.div
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -15, 0]
//           }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-32 right-32 text-white/80"
//         >
//           <Heart size={28} />
//         </motion.div>

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 Forever
//               </span>
//               <br />
//               <span className="text-white">Starts Here</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               Crafting unforgettable moments and timeless memories for your perfect day
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={redirectToGallery}
//               className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//             >
//               View Gallery
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {[
//               { number: "500+", label: "Weddings" },
//               { number: "98%", label: "Satisfaction" },
//               { number: "50+", label: "Awards" },
//               { number: "24/7", label: "Support" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div>
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 925158271, 925158273
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click from triggering
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with Sparkle Cursor */}
//       <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//             alt="Luxury wedding background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white/15"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               <Heart size={20} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               For Wedding & Events{" "}
//               <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//                 Get In Touch
//               </span>
//             </motion.h2>
//             <motion.p 
//               className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               Let's create your perfect day together
//             </motion.p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Phone Numbers Card */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               animate={isShaking ? {
//                 x: [0, -10, 10, -10, 10, 0],
//                 transition: { duration: 0.6 }
//               } : {}}
//               className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [0, 100, 0],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-emerald-400 fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Phone className="w-6 h-6 text-white" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Call Us Directly
//               </motion.h3>
              
//               <div className="space-y-3">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-emerald-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                     <User className="w-4 h-4 text-emerald-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">925158271</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-emerald-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-green-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: 0.5
//                       }}
//                     />
//                     <User className="w-4 h-4 text-green-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">925158273</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-green-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="text-white/70 text-sm text-center mt-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Available 24/7 for inquiries
//               </motion.p>
//             </motion.div>

//             {/* Consultation Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [100, 0, 100],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Calendar className="w-6 h-6 text-emerald-600" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Free Consultation
//               </motion.h3>
              
//               <motion.p 
//                 className="text-white/80 text-sm text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Let's discuss your dream wedding with our experts
//               </motion.p>

//               {/* Additional Points */}
//               <div className="space-y-3 mb-6">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <CheckCircle className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Personalized Planning Session</span>
//                   </div>
//                 </motion.div>

//                 {/* <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Clock className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Flexible Timing Options</span>
//                   </div>
//                 </motion.div> */}
// {/* 
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Venue Selection Guidance</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Gift className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Budget Planning Assistance</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Users className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Vendor Recommendations</span>
//                   </div>
//                 </motion.div> */}
//               </div>

//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative z-10 cursor-pointer group/btn"
//               >
//                 <motion.span
//                   animate={{
//                     x: [0, 3, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   Book Now
//                 </motion.span>
//                 <motion.div
//                   animate={{
//                     x: [0, 5, 0],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                   }}
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </motion.div>
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Quick Features */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//           >
//             {[
//               { icon: "✨", text: "Expert" },
//               { icon: "💎", text: "Luxury" },
//               { icon: "❤️", text: "Custom" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ 
//                   scale: 1.1,
//                   y: -2,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-center cursor-pointer group/feature"
//               >
//                 <motion.div 
//                   className="text-2xl mb-1"
//                   whileHover={{
//                     scale: 1.3,
//                     rotate: 10,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <motion.div 
//                   className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.text}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WeddingPage;






// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone,
//   User,
//   CheckCircle,
//   Clock,
//   MapPin,
//   Gift
// } from "lucide-react";

// const WeddingPage: React.FC = () => {
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   const [isShaking, setIsShaking] = useState(false);

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   // Function to handle book now click with shake animation
//   const handleBookNow = () => {
//     setIsShaking(true);
//     // Reset shake animation after it completes
//     setTimeout(() => setIsShaking(false), 600);
    
//     // You can add your booking logic here
//     console.log("Book Now clicked!");
//   };

//   // Sparkle lighting cursor effect for contact section only
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const contactSection = document.getElementById('wedding-contact');
//     if (!contactSection) return;

//     let isInsideContactSection = false;
//     let cursorTrail: HTMLDivElement | null = null;

//     const createCursorTrail = () => {
//       cursorTrail = document.createElement('div');
//       cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
//       cursorTrail.style.display = 'none';
//       document.body.appendChild(cursorTrail);
//     };

//     const handleMouseEnter = () => {
//       isInsideContactSection = true;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'block';
//       }
//     };

//     const handleMouseLeave = () => {
//       isInsideContactSection = false;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'none';
//         // Clear all sparkles when leaving
//         cursorTrail.innerHTML = '';
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isInsideContactSection || !cursorTrail) return;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       // Create sparkle lighting effect
//       createSparkleLight(mouseX, mouseY);
      
//       // Create occasional trail sparkles
//       if (Math.random() > 0.7) {
//         createTrailSparkle(mouseX, mouseY);
//       }
//     };

//     const createSparkleLight = (x: number, y: number) => {
//       const sparkle = document.createElement('div');
//       sparkle.className = 'absolute pointer-events-none z-50';
      
//       // Random sparkle size
//       const size = 3 + Math.random() * 4;
//       sparkle.style.width = `${size}px`;
//       sparkle.style.height = `${size}px`;
      
//       // Random position around cursor
//       const offsetX = (Math.random() - 0.5) * 40;
//       const offsetY = (Math.random() - 0.5) * 40;
      
//       sparkle.style.left = (x + offsetX) + 'px';
//       sparkle.style.top = (y + offsetY) + 'px';
      
//       // Sparkle styles
//       sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
//       sparkle.style.borderRadius = '50%';
//       sparkle.style.boxShadow = `
//         0 0 8px #ffffff,
//         0 0 12px #34d399,
//         0 0 16px #10b981
//       `;
//       sparkle.style.opacity = '0.9';
//       sparkle.style.transform = 'scale(0)';
      
//       cursorTrail!.appendChild(sparkle);

//       // Sparkle animation
//       const animation = sparkle.animate([
//         { transform: 'scale(0) rotate(0deg)', opacity: 0 },
//         { transform: 'scale(1) rotate(180deg)', opacity: 1 },
//         { transform: 'scale(0) rotate(360deg)', opacity: 0 }
//       ], {
//         duration: 800 + Math.random() * 400,
//         easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
//       });

//       animation.onfinish = () => {
//         if (sparkle.parentNode) {
//           cursorTrail!.removeChild(sparkle);
//         }
//       };
//     };

//     const createTrailSparkle = (x: number, y: number) => {
//       const trail = document.createElement('div');
//       trail.className = 'absolute pointer-events-none z-50';
      
//       trail.style.width = '2px';
//       trail.style.height = '2px';
//       trail.style.left = x + 'px';
//       trail.style.top = y + 'px';
//       trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
//       trail.style.borderRadius = '50%';
//       trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
//       trail.style.opacity = '0.8';
      
//       cursorTrail!.appendChild(trail);

//       // Trail animation
//       const animation = trail.animate([
//         { transform: 'scale(1) translateY(0)', opacity: 0.8 },
//         { transform: 'scale(3) translateY(-20px)', opacity: 0 }
//       ], {
//         duration: 600,
//         easing: 'ease-out'
//       });

//       animation.onfinish = () => {
//         if (trail.parentNode) {
//           cursorTrail!.removeChild(trail);
//         }
//       };
//     };

//     // Create cursor trail element
//     createCursorTrail();

//     // Add event listeners
//     contactSection.addEventListener('mouseenter', handleMouseEnter);
//     contactSection.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       // Cleanup
//       contactSection.removeEventListener('mouseenter', handleMouseEnter);
//       contactSection.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mousemove', handleMouseMove);
//       if (cursorTrail && cursorTrail.parentNode) {
//         document.body.removeChild(cursorTrail);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg"
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//           />
//           {/* Dark overlay for better text readability */}
//           <div className="absolute inset-0 bg-black/40"></div>
//           {/* Subtle gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           <motion.div
//             animate={{ 
//               rotate: 360,
//               scale: [1, 1.1, 1]
//             }}
//             transition={{ 
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity }
//             }}
//             className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//           />
//           <motion.div
//             animate={{ 
//               rotate: -360,
//               y: [0, -20, 0]
//             }}
//             transition={{ 
//               rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//               y: { duration: 6, repeat: Infinity }
//             }}
//             className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//           />
//         </div>

//         {/* Floating Icons */}
//         <motion.div
//           animate={{ 
//             y: [0, -20, 0],
//             rotate: [0, 10, 0]
//           }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="absolute top-20 left-20 text-white/80"
//         >
//           <Sparkles size={32} />
//         </motion.div>
//         <motion.div
//           animate={{ 
//             y: [0, 15, 0],
//             rotate: [0, -15, 0]
//           }}
//           transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//           className="absolute bottom-32 right-32 text-white/80"
//         >
//           <Heart size={28} />
//         </motion.div>

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 Forever
//               </span>
//               <br />
//               <span className="text-white">Starts Here</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               Crafting unforgettable moments and timeless memories for your perfect day
//             </motion.p>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={redirectToGallery}
//               className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//             >
//               View Gallery
//             </motion.button>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {[
//               { number: "500+", label: "Weddings" },
//               { number: "98%", label: "Satisfaction" },
//               { number: "50+", label: "Awards" },
//               { number: "24/7", label: "Support" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Scroll Indicator */}
//         {/* <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </div>
//         </motion.div> */}
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 925158271, 925158273
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation(); // Prevent card click from triggering
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with Sparkle Cursor */}
//       <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//             alt="Luxury wedding background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white/15"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               <Heart size={20} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               For Wedding & Events{" "}
//               <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//                 Get In Touch
//               </span>
//             </motion.h2>
//             <motion.p 
//               className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               Let's create your perfect day together
//             </motion.p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Phone Numbers Card - This one will shake */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               animate={isShaking ? {
//                 x: [0, -10, 10, -10, 10, 0],
//                 transition: { duration: 0.6 }
//               } : {}}
//               className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [0, 100, 0],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-emerald-400 fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Phone className="w-6 h-6 text-white" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Call Us Directly
//               </motion.h3>
              
//               <div className="space-y-3">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-emerald-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                     <User className="w-4 h-4 text-emerald-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">925158271</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-emerald-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-green-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: 0.5
//                       }}
//                     />
//                     <User className="w-4 h-4 text-green-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">925158273</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-green-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="text-white/70 text-sm text-center mt-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Available 24/7 for inquiries
//               </motion.p>
//             </motion.div>

//             {/* Consultation Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [100, 0, 100],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Calendar className="w-6 h-6 text-emerald-600" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Free Consultation
//               </motion.h3>
              
//               <motion.p 
//                 className="text-white/80 text-sm text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Let's discuss your dream wedding with our experts
//               </motion.p>

//               {/* Additional Points */}
//               <div className="space-y-3 mb-6">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <CheckCircle className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Personalized Planning Session</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Clock className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Flexible Timing Options</span>
//                   </div>
//                 </motion.div>

//                 {/* <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <MapPin className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Venue Selection Guidance</span>
//                   </div>
//                 </motion.div> */}

//                 {/* <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Gift className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Budget Planning Assistance</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Users className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Vendor Recommendations</span>
//                   </div>
//                 </motion.div> */}
//               </div>

//               {/* <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2 relative z-10 cursor-pointer group/btn"
//               >
//                 <motion.span
//                   animate={{
//                     x: [0, 3, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                   }}
//                 >
//                   Book Now
//                 </motion.span>
//                 <motion.div
//                   animate={{
//                     x: [0, 5, 0],
//                   }}
//                   transition={{
//                     duration: 1.5,
//                     repeat: Infinity,
//                   }}
//                 >
//                   <ChevronRight className="w-4 h-4" />
//                 </motion.div>
//               </motion.button> */}
//             </motion.div>
//           </div>

//           {/* Quick Features */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//           >
//             {[
//               { icon: "✨", text: "Expert" },
//               { icon: "💎", text: "Luxury" },
//               { icon: "❤️", text: "Custom" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ 
//                   scale: 1.1,
//                   y: -2,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-center cursor-pointer group/feature"
//               >
//                 <motion.div 
//                   className="text-2xl mb-1"
//                   whileHover={{
//                     scale: 1.3,
//                     rotate: 10,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <motion.div 
//                   className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.text}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WeddingPage;



// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone,
//   User,
//   CheckCircle,
//   Clock,
//   MapPin,
//   Gift,
//   ArrowRight
// } from "lucide-react";
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// interface HeroContent {
//   backgroundImage: string;
//   titleLine1: string;
//   titleLine2: string;
//   subtitle: string;
//   buttonText: string;
//   stats: Array<{
//     number: string;
//     label: string;
//   }>;
//   floatingIcons: boolean;
//   animatedElements: boolean;
// }

// const defaultHeroContent: HeroContent = {
//   backgroundImage: "https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg",
//   titleLine1: "Forever",
//   titleLine2: "Starts Here",
//   subtitle: "Crafting unforgettable moments and timeless memories for your perfect day",
//   buttonText: "View Gallery",
//   stats: [
//     { number: "500+", label: "Weddings" },
//     { number: "98%", label: "Satisfaction" },
//     { number: "50+", label: "Awards" },
//     { number: "24/7", label: "Support" }
//   ],
//   floatingIcons: true,
//   animatedElements: true
// };

// const WeddingPage: React.FC = () => {
//   const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent);
//   const [isShaking, setIsShaking] = useState(false);
//   const [isLoading, setIsLoading] = useState(false); // Changed to false since we're only loading hero
//   const [error, setError] = useState<string | null>(null);
//   const [apiError, setApiError] = useState(false);

//   // Load hero content from API
//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       setApiError(false);
      
//       console.log('Fetching wedding hero content from API...');
      
//       const response = await axios.get(`${API_URL}/wedding-hero`, {
//         timeout: 10000,
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       console.log('API Response:', response.data);
      
//       if (response.data.success) {
//         if (response.data.data) {
//           console.log('Setting hero content from API:', response.data.data);
//           setHeroContent(response.data.data);
//         } else {
//           console.log('No data in database, using default');
//           setHeroContent(defaultHeroContent);
//         }
//       } else {
//         console.error('API returned success: false');
//         setError('Failed to load wedding content from server');
//         setApiError(true);
//         setHeroContent(defaultHeroContent);
//       }
//     } catch (error: any) {
//       console.error('Error fetching hero content:', error);
//       console.error('Error details:', error.message);
      
//       let errorMessage = 'Error loading wedding page. Please try again later.';
      
//       if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Request timeout. Please check if the backend server is running.';
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status}`;
//       } else if (error.request) {
//         errorMessage = 'No response from server. Please check your connection.';
//       }
      
//       setError(errorMessage);
//       setApiError(true);
//       setHeroContent(defaultHeroContent);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Static services data - NOT from API
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   // Static why choose us data - NOT from API
//   const whyChooseUs = [
//     {
//       icon: "🎯",
//       title: "Expert Planning",
//       description: "Over 20 years of experience in creating dream weddings"
//     },
//     {
//       icon: "💎",
//       title: "Luxury Experience",
//       description: "Premium services with attention to every detail"
//     },
//     {
//       icon: "💰",
//       title: "Transparent Pricing",
//       description: "No hidden costs, clear packages and pricing"
//     },
//     {
//       icon: "🌟",
//       title: "5-Star Reviews",
//       description: "Rated excellent by hundreds of happy couples"
//     }
//   ];

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   // Function to handle book now click with shake animation
//   const handleBookNow = () => {
//     setIsShaking(true);
//     setTimeout(() => setIsShaking(false), 600);
//     scrollToContact();
//   };

//   // Function to retry fetching data
//   const handleRetry = () => {
//     fetchHeroContent();
//   };

//   // Sparkle lighting cursor effect for contact section only
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const contactSection = document.getElementById('wedding-contact');
//     if (!contactSection) return;

//     let isInsideContactSection = false;
//     let cursorTrail: HTMLDivElement | null = null;

//     const createCursorTrail = () => {
//       cursorTrail = document.createElement('div');
//       cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
//       cursorTrail.style.display = 'none';
//       document.body.appendChild(cursorTrail);
//     };

//     const handleMouseEnter = () => {
//       isInsideContactSection = true;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'block';
//       }
//     };

//     const handleMouseLeave = () => {
//       isInsideContactSection = false;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'none';
//         cursorTrail.innerHTML = '';
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isInsideContactSection || !cursorTrail) return;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       createSparkleLight(mouseX, mouseY);
      
//       if (Math.random() > 0.7) {
//         createTrailSparkle(mouseX, mouseY);
//       }
//     };

//     const createSparkleLight = (x: number, y: number) => {
//       const sparkle = document.createElement('div');
//       sparkle.className = 'absolute pointer-events-none z-50';
      
//       const size = 3 + Math.random() * 4;
//       sparkle.style.width = `${size}px`;
//       sparkle.style.height = `${size}px`;
      
//       const offsetX = (Math.random() - 0.5) * 40;
//       const offsetY = (Math.random() - 0.5) * 40;
      
//       sparkle.style.left = (x + offsetX) + 'px';
//       sparkle.style.top = (y + offsetY) + 'px';
      
//       sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
//       sparkle.style.borderRadius = '50%';
//       sparkle.style.boxShadow = `
//         0 0 8px #ffffff,
//         0 0 12px #34d399,
//         0 0 16px #10b981
//       `;
//       sparkle.style.opacity = '0.9';
//       sparkle.style.transform = 'scale(0)';
      
//       cursorTrail.appendChild(sparkle);

//       const animation = sparkle.animate([
//         { transform: 'scale(0) rotate(0deg)', opacity: 0 },
//         { transform: 'scale(1) rotate(180deg)', opacity: 1 },
//         { transform: 'scale(0) rotate(360deg)', opacity: 0 }
//       ], {
//         duration: 800 + Math.random() * 400,
//         easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
//       });

//       animation.onfinish = () => {
//         if (sparkle.parentNode) {
//           cursorTrail!.removeChild(sparkle);
//         }
//       };
//     };

//     const createTrailSparkle = (x: number, y: number) => {
//       const trail = document.createElement('div');
//       trail.className = 'absolute pointer-events-none z-50';
      
//       trail.style.width = '2px';
//       trail.style.height = '2px';
//       trail.style.left = x + 'px';
//       trail.style.top = y + 'px';
//       trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
//       trail.style.borderRadius = '50%';
//       trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
//       trail.style.opacity = '0.8';
      
//       cursorTrail!.appendChild(trail);

//       const animation = trail.animate([
//         { transform: 'scale(1) translateY(0)', opacity: 0.8 },
//         { transform: 'scale(3) translateY(-20px)', opacity: 0 }
//       ], {
//         duration: 600,
//         easing: 'ease-out'
//       });

//       animation.onfinish = () => {
//         if (trail.parentNode) {
//           cursorTrail!.removeChild(trail);
//         }
//       };
//     };

//     createCursorTrail();
//     contactSection.addEventListener('mouseenter', handleMouseEnter);
//     contactSection.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       contactSection.removeEventListener('mouseenter', handleMouseEnter);
//       contactSection.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mousemove', handleMouseMove);
//       if (cursorTrail && cursorTrail.parentNode) {
//         document.body.removeChild(cursorTrail);
//       }
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Error Message - Only show if API error */}
//       {apiError && (
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4">
//           <div className="flex items-center justify-between">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-yellow-700">{error}</p>
//                 <p className="text-xs text-yellow-600 mt-1">Showing default content</p>
//               </div>
//             </div>
//             <button
//               onClick={handleRetry}
//               className="ml-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-200"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hero Section - Dynamic */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src={heroContent.backgroundImage}
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//             onError={(e) => {
//               console.log('Image load error, using fallback');
//               (e.target as HTMLImageElement).src = 'https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg';
//             }}
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements - Conditionally rendered */}
//         {heroContent.animatedElements && (
//           <div className="absolute inset-0">
//             <motion.div
//               animate={{ 
//                 rotate: 360,
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 8, repeat: Infinity }
//               }}
//               className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//             />
//             <motion.div
//               animate={{ 
//                 rotate: -360,
//                 y: [0, -20, 0]
//               }}
//               transition={{ 
//                 rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//                 y: { duration: 6, repeat: Infinity }
//               }}
//               className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//             />
//           </div>
//         )}

//         {/* Floating Icons - Conditionally rendered */}
//         {heroContent.floatingIcons && (
//           <>
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 10, 0]
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute top-20 left-20 text-white/80"
//             >
//               <Sparkles size={32} />
//             </motion.div>
//             <motion.div
//               animate={{ 
//                 y: [0, 15, 0],
//                 rotate: [0, -15, 0]
//               }}
//               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//               className="absolute bottom-32 right-32 text-white/80"
//             >
//               <Heart size={28} />
//             </motion.div>
//           </>
//         )}

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           {/* Debug info - remove in production */}
//           {process.env.NODE_ENV === 'development' && (
//             <div className="absolute top-4 right-4 bg-black/50 text-white text-xs p-2 rounded">
//               API: {apiError ? '❌ Error' : '✅ Connected'}
//             </div>
//           )}

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 {heroContent.titleLine1}
//               </span>
//               <br />
//               <span className="text-white">{heroContent.titleLine2}</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               {heroContent.subtitle}
//             </motion.p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={redirectToGallery}
//                 className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//               >
//                 {heroContent.buttonText}
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
//               >
//                 Book Your Dream Wedding
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {heroContent.stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 925158271, 925158273
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose <span className="text-emerald-600">Our Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine expertise, creativity, and passion to create weddings that exceed expectations
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
//               >
//                 <motion.div
//                   className="text-4xl mb-6"
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section with Sparkle Cursor */}
//       <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//             alt="Luxury wedding background"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white/15"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               <Heart size={20} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               For Wedding & Events{" "}
//               <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//                 Get In Touch
//               </span>
//             </motion.h2>
//             <motion.p 
//               className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               Let's create your perfect day together
//             </motion.p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Phone Numbers Card - This one will shake */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               animate={isShaking ? {
//                 x: [0, -10, 10, -10, 10, 0],
//                 transition: { duration: 0.6 }
//               } : {}}
//               className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [0, 100, 0],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-emerald-400 fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Phone className="w-6 h-6 text-white" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Call Us Directly
//               </motion.h3>
              
//               <div className="space-y-3">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-emerald-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                     <User className="w-4 h-4 text-emerald-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">925158271</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-emerald-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-green-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: 0.5
//                       }}
//                     />
//                     <User className="w-4 h-4 text-green-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">925158273</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-green-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="text-white/70 text-sm text-center mt-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Available 24/7 for inquiries
//               </motion.p>
//             </motion.div>

//             {/* Consultation Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [100, 0, 100],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Calendar className="w-6 h-6 text-emerald-600" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Free Consultation
//               </motion.h3>
              
//               <motion.p 
//                 className="text-white/80 text-sm text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Let's discuss your dream wedding with our experts
//               </motion.p>

//               {/* Additional Points */}
//               <div className="space-y-3 mb-6">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <CheckCircle className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Personalized Planning Session</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Clock className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Flexible Timing Options</span>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
//               >
//                 Schedule Free Consultation
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Quick Features */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//           >
//             {[
//               { icon: "✨", text: "Expert" },
//               { icon: "💎", text: "Luxury" },
//               { icon: "❤️", text: "Custom" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ 
//                   scale: 1.1,
//                   y: -2,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-center cursor-pointer group/feature"
//               >
//                 <motion.div 
//                   className="text-2xl mb-1"
//                   whileHover={{
//                     scale: 1.3,
//                     rotate: 10,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <motion.div 
//                   className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.text}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-white mb-6"
//           >
//             Ready to Start Your Journey?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
//           >
//             Contact us today to begin planning the wedding of your dreams
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={scrollToContact}
//             className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
//           >
//             Get Started Now
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WeddingPage;






// import React, { useEffect, useState, useRef } from "react";
// import SEO from '../components/SEO';
// import seoData from '../config/seoData';
// import { motion } from "framer-motion";
// import { 
//   Heart, 
//   Camera, 
//   Calendar, 
//   Flower2, 
//   Sparkles, 
//   Users,
//   Utensils,
//   Music,
//   Palette,
//   Star,
//   ChevronRight,
//   Gem,
//   Phone,
//   User,
//   CheckCircle,
//   Clock,
//   MapPin,
//   Gift,
//   ArrowRight
// } from "lucide-react";
// import axios from 'axios';
// import { BASE_URL } from "../config";
// import FacilitiesSection from "../components/WeddingCompo/FacilitiesSection";

// const API_URL = `${BASE_URL}/api`;

// interface HeroContent {
//   backgroundImage: string;
//   titleLine1: string;
//   titleLine2: string;
//   subtitle: string;
//   buttonText: string;
//   stats: Array<{
//     number: string;
//     label: string;
//   }>;
//   floatingIcons: boolean;
//   animatedElements: boolean;
// }

// const defaultHeroContent: HeroContent = {
//   backgroundImage: "https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg",
//   titleLine1: "Forever",
//   titleLine2: "Starts Here",
//   subtitle: "Crafting unforgettable moments and timeless memories for your perfect day",
//   buttonText: "View Gallery",
//   stats: [
//     { number: "500+", label: "Weddings" },
//     { number: "98%", label: "Satisfaction" },
//     { number: "50+", label: "Awards" },
//     { number: "24/7", label: "Support" }
//   ],
//   floatingIcons: true,
//   animatedElements: true
// };

// const WeddingPage: React.FC = () => {
//   const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent);
//   const [isShaking, setIsShaking] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [apiError, setApiError] = useState(false);
//   const hasFetchedRef = useRef(false);

//   // Load hero content from API
//   useEffect(() => {
//     if (hasFetchedRef.current) return;
//     hasFetchedRef.current = true;
    
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       setApiError(false);
      
//       const response = await axios.get(`${API_URL}/wedding-hero`, {
//         timeout: 10000,
//         headers: {
//           'Content-Type': 'application/json',
//         }
//       });
      
//       if (response.data.success) {
//         if (response.data.data) {
//           setHeroContent(response.data.data);
//         } else {
//           setHeroContent(defaultHeroContent);
//         }
//       } else {
//         setError('Failed to load wedding content from server');
//         setApiError(true);
//         setHeroContent(defaultHeroContent);
//       }
//     } catch (error: any) {
//       let errorMessage = 'Error loading wedding page. Please try again later.';
      
//       if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Request timeout. Please check if the backend server is running.';
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status}`;
//       } else if (error.request) {
//         errorMessage = 'No response from server. Please check your connection.';
//       }
      
//       setError(errorMessage);
//       setApiError(true);
//       setHeroContent(defaultHeroContent);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle image errors
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const img = e.target as HTMLImageElement;
    
//     if (img.src.includes('pinimg.com')) {
//       img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop';
//     } else {
//       img.src = 'https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg';
//     }
    
//     img.onerror = null;
//   };

//   // Static services data
//   const services = [
//     {
//       icon: <Camera className="w-12 h-12" />,
//       title: "Wedding Photography",
//       desc: "Professional photography that captures every precious moment of your special day with artistic flair.",
//       image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
//       features: ["8 Hours Coverage", "2 Photographers", "500+ Edited Photos", "Online Gallery"]
//     },
//     {
//       icon: <Flower2 className="w-12 h-12" />,
//       title: "Decor & Styling",
//       desc: "Transform your venue into a magical space with our exquisite floral arrangements and elegant décor.",
//       image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
//       features: ["Floral Arrangements", "Lighting Design", "Table Settings", "Theme Coordination"]
//     },
//     {
//       icon: <Calendar className="w-12 h-12" />,
//       title: "Event Planning",
//       desc: "Comprehensive wedding planning services to ensure your day is seamless and stress-free.",
//       image: "https://i.pinimg.com/736x/3f/4c/e4/3f4ce4265b717aacce9b6b8378018292.jpg",
//       features: ["Vendor Coordination", "Timeline Management", "Budget Planning", "Day-of Coordination"]
//     },
//     {
//       icon: <Utensils className="w-12 h-12" />,
//       title: "Catering Services",
//       desc: "Exquisite culinary experiences with customized menus that delight your guests' palates.",
//       image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
//       features: ["Custom Menus", "International Cuisine", "Dietary Accommodations", "Professional Staff"]
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Entertainment",
//       desc: "Create the perfect atmosphere with our curated entertainment options and live performances.",
//       image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&h=400&fit=crop",
//       features: ["Live Bands", "DJ Services", "Sound Systems", "Dance Floor Setup"]
//     },
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Theme Design",
//       desc: "Bring your vision to life with custom theme development and creative design solutions.",
//       image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
//       features: ["Concept Development", "Color Schemes", "Custom Props", "Style Guides"]
//     }
//   ];

//   // Static why choose us data
//   const whyChooseUs = [
//     {
//       icon: "🎯",
//       title: "Expert Planning",
//       description: "Over 20 years of experience in creating dream weddings"
//     },
//     {
//       icon: "💎",
//       title: "Luxury Experience",
//       description: "Premium services with attention to every detail"
//     },
//     {
//       icon: "💰",
//       title: "Transparent Pricing",
//       description: "No hidden costs, clear packages and pricing"
//     },
//     {
//       icon: "🌟",
//       title: "5-Star Reviews",
//       description: "Rated excellent by hundreds of happy couples"
//     }
//   ];

//   // Function to scroll to contact section
//   const scrollToContact = () => {
//     const contactSection = document.getElementById('wedding-contact');
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Function to redirect to gallery
//   const redirectToGallery = () => {
//     window.location.href = '/wedding-gallery';
//   };

//   // Function to handle book now click with shake animation
//   const handleBookNow = () => {
//     setIsShaking(true);
//     setTimeout(() => setIsShaking(false), 600);
//     scrollToContact();
//   };

//   // Sparkle lighting cursor effect for contact section only
//   useEffect(() => {
//     if (typeof window === 'undefined') return;

//     const contactSection = document.getElementById('wedding-contact');
//     if (!contactSection) return;

//     let isInsideContactSection = false;
//     let cursorTrail: HTMLDivElement | null = null;

//     const createCursorTrail = () => {
//       cursorTrail = document.createElement('div');
//       cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
//       cursorTrail.style.display = 'none';
//       document.body.appendChild(cursorTrail);
//     };

//     const handleMouseEnter = () => {
//       isInsideContactSection = true;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'block';
//       }
//     };

//     const handleMouseLeave = () => {
//       isInsideContactSection = false;
//       if (cursorTrail) {
//         cursorTrail.style.display = 'none';
//         cursorTrail.innerHTML = '';
//       }
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!isInsideContactSection || !cursorTrail) return;

//       const mouseX = e.clientX;
//       const mouseY = e.clientY;

//       createSparkleLight(mouseX, mouseY);
      
//       if (Math.random() > 0.7) {
//         createTrailSparkle(mouseX, mouseY);
//       }
//     };

//     const createSparkleLight = (x: number, y: number) => {
//       const sparkle = document.createElement('div');
//       sparkle.className = 'absolute pointer-events-none z-50';
      
//       const size = 3 + Math.random() * 4;
//       sparkle.style.width = `${size}px`;
//       sparkle.style.height = `${size}px`;
      
//       const offsetX = (Math.random() - 0.5) * 40;
//       const offsetY = (Math.random() - 0.5) * 40;
      
//       sparkle.style.left = (x + offsetX) + 'px';
//       sparkle.style.top = (y + offsetY) + 'px';
      
//       sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
//       sparkle.style.borderRadius = '50%';
//       sparkle.style.boxShadow = `
//         0 0 8px #ffffff,
//         0 0 12px #34d399,
//         0 0 16px #10b981
//       `;
//       sparkle.style.opacity = '0.9';
//       sparkle.style.transform = 'scale(0)';
      
//       cursorTrail.appendChild(sparkle);

//       const animation = sparkle.animate([
//         { transform: 'scale(0) rotate(0deg)', opacity: 0 },
//         { transform: 'scale(1) rotate(180deg)', opacity: 1 },
//         { transform: 'scale(0) rotate(360deg)', opacity: 0 }
//       ], {
//         duration: 800 + Math.random() * 400,
//         easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
//       });

//       animation.onfinish = () => {
//         if (sparkle.parentNode) {
//           cursorTrail!.removeChild(sparkle);
//         }
//       };
//     };

//     const createTrailSparkle = (x: number, y: number) => {
//       const trail = document.createElement('div');
//       trail.className = 'absolute pointer-events-none z-50';
      
//       trail.style.width = '2px';
//       trail.style.height = '2px';
//       trail.style.left = x + 'px';
//       trail.style.top = y + 'px';
//       trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
//       trail.style.borderRadius = '50%';
//       trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
//       trail.style.opacity = '0.8';
      
//       cursorTrail!.appendChild(trail);

//       const animation = trail.animate([
//         { transform: 'scale(1) translateY(0)', opacity: 0.8 },
//         { transform: 'scale(3) translateY(-20px)', opacity: 0 }
//       ], {
//         duration: 600,
//         easing: 'ease-out'
//       });

//       animation.onfinish = () => {
//         if (trail.parentNode) {
//           cursorTrail!.removeChild(trail);
//         }
//       };
//     };

//     createCursorTrail();
//     contactSection.addEventListener('mouseenter', handleMouseEnter);
//     contactSection.addEventListener('mouseleave', handleMouseLeave);
//     document.addEventListener('mousemove', handleMouseMove);

//     return () => {
//       contactSection.removeEventListener('mouseenter', handleMouseEnter);
//       contactSection.removeEventListener('mouseleave', handleMouseLeave);
//       document.removeEventListener('mousemove', handleMouseMove);
//       if (cursorTrail && cursorTrail.parentNode) {
//         document.body.removeChild(cursorTrail);
//       }
//     };
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading wedding page...</p>
//           <p className="text-sm text-gray-500 mt-2">Fetching dynamic content from server</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//     <SEO 
//         title={seoData.wedding.title}
//         description={seoData.wedding.description}
//         keywords={seoData.wedding.keywords}
//         canonicalUrl={seoData.wedding.canonicalUrl}
//       />
//     <div className="min-h-screen bg-white overflow-hidden">
//       {/* Error Message - Only show if API error */}
//       {apiError && (
//         <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4">
//           <div className="flex items-center justify-between">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-yellow-700">{error}</p>
//                 <p className="text-xs text-yellow-600 mt-1">Showing default content</p>
//               </div>
//             </div>
//             <button
//               onClick={fetchHeroContent}
//               className="ml-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-200"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Hero Section - Dynamic */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src={heroContent.backgroundImage}
//             alt="Beautiful wedding background"
//             className="w-full h-full object-cover"
//             onError={handleImageError}
//             loading="eager"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
//         </div>

//         {/* Animated Background Elements */}
//         {heroContent.animatedElements && (
//           <div className="absolute inset-0">
//             <motion.div
//               animate={{ 
//                 rotate: 360,
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 8, repeat: Infinity }
//               }}
//               className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"
//             />
//             <motion.div
//               animate={{ 
//                 rotate: -360,
//                 y: [0, -20, 0]
//               }}
//               transition={{ 
//                 rotate: { duration: 25, repeat: Infinity, ease: "linear" },
//                 y: { duration: 6, repeat: Infinity }
//               }}
//               className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"
//             />
//           </div>
//         )}

//         {/* Floating Icons */}
//         {heroContent.floatingIcons && (
//           <>
//             <motion.div
//               animate={{ 
//                 y: [0, -20, 0],
//                 rotate: [0, 10, 0]
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="absolute top-20 left-20 text-white/80"
//             >
//               <Sparkles size={32} />
//             </motion.div>
//             <motion.div
//               animate={{ 
//                 y: [0, 15, 0],
//                 rotate: [0, -15, 0]
//               }}
//               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//               className="absolute bottom-32 right-32 text-white/80"
//             >
//               <Heart size={28} />
//             </motion.div>
//           </>
//         )}

//         <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="mb-8"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
//               className="flex justify-center mb-6"
//             >
//               <div className="relative">
//                 <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                 <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-4 rounded-full shadow-2xl backdrop-blur-sm">
//                   <Gem className="w-12 h-12 text-white" />
//                 </div>
//               </div>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="text-5xl md:text-7xl font-bold text-white mb-6"
//             >
//               <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                 {heroContent.titleLine1}
//               </span>
//               <br />
//               <span className="text-white">{heroContent.titleLine2}</span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.7 }}
//               className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
//             >
//               {heroContent.subtitle}
//             </motion.p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={redirectToGallery}
//                 className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
//               >
//                 {heroContent.buttonText}
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
//               >
//                 Book Your Dream Wedding
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Stats */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.1 }}
//             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
//           >
//             {heroContent.stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.1 }}
//                 className="text-center"
//               >
//                 <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
//                 <div className="text-white/80 text-sm">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* Moving Contact Strip */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{
//             x: [0, -1000],
//           }}
//           transition={{
//             x: {
//               repeat: Infinity,
//               repeatType: "loop",
//               duration: 20,
//               ease: "linear",
//             },
//           }}
//         >
//           {[...Array(6)].map((_, index) => (
//             <div key={index} className="flex items-center space-x-8 mx-8">
//               <div className="flex items-center space-x-4">
//                 <Phone className="w-5 h-5 text-white" />
//                 <span className="text-white font-semibold text-lg">
//                   For Wedding & Events Contact: 9251582671, 9251582673
//                 </span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//               <div className="flex items-center space-x-2">
//                 <Heart className="w-4 h-4 text-white" />
//                 <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
//               </div>
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           ))}
//         </motion.div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Why Choose <span className="text-emerald-600">Our Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               We combine expertise, creativity, and passion to create weddings that exceed expectations
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
//               >
//                 <motion.div
//                   className="text-4xl mb-6"
//                   whileHover={{
//                     scale: 1.2,
//                     rotate: 10,
//                     transition: { duration: 0.3 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//               Complete <span className="text-emerald-600">Wedding Services</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               From concept to celebration, we handle every detail to make your wedding day perfect
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ delay: index * 0.1, duration: 0.6 }}
//                 whileHover={{ y: -10 }}
//                 className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
//                 onClick={redirectToGallery}
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
//                     onError={handleImageError}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-4 mb-4">
//                     <div className="p-3 bg-gradient-to-r from-emerald-100 to-green-100 rounded-xl text-emerald-600">
//                       {service.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
//                   </div>

//                   <p className="text-gray-600 mb-4 leading-relaxed">{service.desc}</p>

//                   <ul className="space-y-2 mb-4">
//                     {service.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
//                         <div className="w-2 h-2 bg-emerald-400 rounded-full" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       scrollToContact();
//                     }}
//                     className="w-full bg-emerald-50 text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-100 transition-colors flex items-center justify-center gap-2"
//                   >
//                     Learn More
//                     <ChevronRight className="w-4 h-4" />
//                   </motion.button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//         <FacilitiesSection />

//       {/* Contact Section with Sparkle Cursor */}
//       <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <img
//             src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
//             alt="Luxury wedding background"
//             className="w-full h-full object-cover"
//             onError={handleImageError}
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//           <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
//         </div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0">
//           {[...Array(4)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute text-white/15"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: 6 + Math.random() * 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             >
//               <Heart size={20} />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto">
//           {/* Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
//               whileHover={{
//                 scale: 1.02,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               For Wedding & Events{" "}
//               <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
//                 Get In Touch
//               </span>
//             </motion.h2>
//             <motion.p 
//               className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
//               whileHover={{
//                 scale: 1.05,
//                 transition: { duration: 0.2 }
//               }}
//             >
//               Let's create your perfect day together
//             </motion.p>
//           </motion.div>

//           {/* Contact Cards */}
//           <div className="grid md:grid-cols-2 gap-6">
//             {/* Phone Numbers Card - This one will shake */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               animate={isShaking ? {
//                 x: [0, -10, 10, -10, 10, 0],
//                 transition: { duration: 0.6 }
//               } : {}}
//               className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [0, 100, 0],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-emerald-400 fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: 5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Phone className="w-6 h-6 text-white" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Call Us Directly
//               </motion.h3>
              
//               <div className="space-y-3">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-emerald-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                       }}
//                     />
//                     <User className="w-4 h-4 text-emerald-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">9251582671</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-emerald-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <motion.div 
//                       className="w-2 h-2 bg-green-400 rounded-full"
//                       animate={{
//                         scale: [1, 1.5, 1],
//                         }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: 0.5
//                       }}
//                     />
//                     <User className="w-4 h-4 text-green-300" />
//                     <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">9251582673</span>
//                     <motion.div
//                       className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
//                       animate={{
//                         x: [0, 5, 0],
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         repeat: Infinity,
//                       }}
//                     >
//                       <ChevronRight className="w-4 h-4 text-green-400" />
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.p 
//                 className="text-white/70 text-sm text-center mt-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Available 24/7 for inquiries
//               </motion.p>
//             </motion.div>

//             {/* Consultation Card */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
//               whileHover={{
//                 scale: 1.02,
//                 y: -5,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Star Border Animation */}
//               <div className="absolute inset-0 rounded-2xl overflow-hidden">
//                 {[...Array(8)].map((_, i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute"
//                     style={{
//                       left: `${(i / 8) * 100}%`,
//                       top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
//                     }}
//                     animate={{
//                       x: [100, 0, 100],
//                       opacity: [0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 3,
//                       repeat: Infinity,
//                       delay: i * 0.4,
//                       ease: "linear"
//                     }}
//                   >
//                     <Star className="w-3 h-3 text-white fill-current" />
//                   </motion.div>
//                 ))}
//               </div>

//               <motion.div
//                 className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
//                 whileHover={{
//                   scale: 1.1,
//                   rotate: -5,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 <Calendar className="w-6 h-6 text-emerald-600" />
//               </motion.div>
              
//               <motion.h3 
//                 className="text-xl font-bold text-white text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Free Consultation
//               </motion.h3>
              
//               <motion.p 
//                 className="text-white/80 text-sm text-center mb-4 cursor-default"
//                 whileHover={{
//                   scale: 1.05,
//                   transition: { duration: 0.2 }
//                 }}
//               >
//                 Let's discuss your dream wedding with our experts
//               </motion.p>

//               {/* Additional Points */}
//               <div className="space-y-3 mb-6">
//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <CheckCircle className="w-4 h-4 text-emerald-300" />
//                     <span className="text-white text-sm font-medium">Personalized Planning Session</span>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   whileHover={{ 
//                     x: 5,
//                     scale: 1.02,
//                     backgroundColor: "rgba(255,255,255,0.1)"
//                   }}
//                   className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
//                 >
//                   <div className="flex items-center space-x-3">
//                     <Clock className="w-4 h-4 text-green-300" />
//                     <span className="text-white text-sm font-medium">Flexible Timing Options</span>
//                   </div>
//                 </motion.div>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleBookNow}
//                 className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
//               >
//                 Schedule Free Consultation
//               </motion.button>
//             </motion.div>
//           </div>

//           {/* Quick Features */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
//           >
//             {[
//               { icon: "✨", text: "Expert" },
//               { icon: "💎", text: "Luxury" },
//               { icon: "❤️", text: "Custom" }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ 
//                   scale: 1.1,
//                   y: -2,
//                   transition: { duration: 0.2 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="text-center cursor-pointer group/feature"
//               >
//                 <motion.div 
//                   className="text-2xl mb-1"
//                   whileHover={{
//                     scale: 1.3,
//                     rotate: 10,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.icon}
//                 </motion.div>
//                 <motion.div 
//                   className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
//                   whileHover={{
//                     scale: 1.05,
//                     transition: { duration: 0.2 }
//                   }}
//                 >
//                   {item.text}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-white mb-6"
//           >
//             Ready to Start Your Journey?
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 }}
//             className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
//           >
//             Contact us today to begin planning the wedding of your dreams
//           </motion.p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={scrollToContact}
//             className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
//           >
//             Get Started Now
//             <ArrowRight className="w-5 h-5" />
//           </motion.button>
//         </div>
//       </section>
//     </div>
//     </>
//   );
// };

// export default WeddingPage;






import React, { useEffect, useState, useRef } from "react";
import SEO from '../components/SEO';
import seoData from '../config/seoData';
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
  Gem,
  Phone,
  User,
  CheckCircle,
  Clock,
  MapPin,
  Gift,
  ArrowRight
} from "lucide-react";
import axios from 'axios';
import { BASE_URL } from "../config";
import FacilitiesSection from "../components/WeddingCompo/FacilitiesSection";

const API_URL = `${BASE_URL}/api`;

interface HeroContent {
  backgroundImage: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  buttonText: string;
  stats: Array<{
    number: string;
    label: string;
  }>;
  floatingIcons: boolean;
  animatedElements: boolean;
}

const defaultHeroContent: HeroContent = {
  backgroundImage: "https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg",
  titleLine1: "Forever",
  titleLine2: "Starts Here",
  subtitle: "Crafting unforgettable moments and timeless memories for your perfect day",
  buttonText: "View Gallery",
  stats: [
    { number: "500+", label: "Weddings" },
    { number: "98%", label: "Satisfaction" },
    { number: "50+", label: "Awards" },
    { number: "24/7", label: "Support" }
  ],
  floatingIcons: true,
  animatedElements: true
};

const WeddingPage: React.FC = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>(defaultHeroContent);
  const [isShaking, setIsShaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiError, setApiError] = useState(false);
  const hasFetchedRef = useRef(false);

  // Load hero content from API
  useEffect(() => {
    if (hasFetchedRef.current) return;
    hasFetchedRef.current = true;
    
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setApiError(false);
      
      const response = await axios.get(`${API_URL}/wedding-hero`, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data.success) {
        if (response.data.data) {
          setHeroContent(response.data.data);
        } else {
          setHeroContent(defaultHeroContent);
        }
      } else {
        setError('Failed to load wedding content from server');
        setApiError(true);
        setHeroContent(defaultHeroContent);
      }
    } catch (error: any) {
      let errorMessage = 'Error loading wedding page. Please try again later.';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check if the backend server is running.';
      } else if (error.response) {
        errorMessage = `Server error: ${error.response.status}`;
      } else if (error.request) {
        errorMessage = 'No response from server. Please check your connection.';
      }
      
      setError(errorMessage);
      setApiError(true);
      setHeroContent(defaultHeroContent);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle image errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    
    if (img.src.includes('pinimg.com')) {
      img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop';
    } else {
      img.src = 'https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg';
    }
    
    img.onerror = null;
  };

  // Static services data
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

  // Static why choose us data
  const whyChooseUs = [
    {
      icon: "🎯",
      title: "Expert Planning",
      description: "Over 20 years of experience in creating dream weddings"
    },
    {
      icon: "💎",
      title: "Luxury Experience",
      description: "Premium services with attention to every detail"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden costs, clear packages and pricing"
    },
    {
      icon: "🌟",
      title: "5-Star Reviews",
      description: "Rated excellent by hundreds of happy couples"
    }
  ];

  // Function to navigate to contact page with form hash
  const navigateToContact = () => {
    window.location.href = '/contact#contact-form';
  };

  // Function to redirect to gallery
  const redirectToGallery = () => {
    window.location.href = '/wedding-gallery';
  };

  // Function to handle book now click with shake animation
  const handleBookNow = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 600);
    navigateToContact();
  };

  // Sparkle lighting cursor effect for contact section only
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const contactSection = document.getElementById('wedding-contact');
    if (!contactSection) return;

    let isInsideContactSection = false;
    let cursorTrail: HTMLDivElement | null = null;

    const createCursorTrail = () => {
      cursorTrail = document.createElement('div');
      cursorTrail.className = 'sparkle-cursor-trail fixed inset-0 pointer-events-none z-50';
      cursorTrail.style.display = 'none';
      document.body.appendChild(cursorTrail);
    };

    const createSparkleLight = (x: number, y: number) => {
      if (!cursorTrail) return;
      
      const sparkle = document.createElement('div');
      sparkle.className = 'absolute pointer-events-none z-50';
      
      const size = 3 + Math.random() * 4;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      
      const offsetX = (Math.random() - 0.5) * 40;
      const offsetY = (Math.random() - 0.5) * 40;
      
      sparkle.style.left = (x + offsetX) + 'px';
      sparkle.style.top = (y + offsetY) + 'px';
      
      sparkle.style.background = 'radial-gradient(circle, #ffffff, #a7f3d0, #34d399)';
      sparkle.style.borderRadius = '50%';
      sparkle.style.boxShadow = `
        0 0 8px #ffffff,
        0 0 12px #34d399,
        0 0 16px #10b981
      `;
      sparkle.style.opacity = '0.9';
      sparkle.style.transform = 'scale(0)';
      
      cursorTrail.appendChild(sparkle);

      const animation = sparkle.animate([
        { transform: 'scale(0) rotate(0deg)', opacity: 0 },
        { transform: 'scale(1) rotate(180deg)', opacity: 1 },
        { transform: 'scale(0) rotate(360deg)', opacity: 0 }
      ], {
        duration: 800 + Math.random() * 400,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
      });

      animation.onfinish = () => {
        if (sparkle.parentNode && cursorTrail) {
          cursorTrail.removeChild(sparkle);
        }
      };
    };

    const createTrailSparkle = (x: number, y: number) => {
      if (!cursorTrail) return;
      
      const trail = document.createElement('div');
      trail.className = 'absolute pointer-events-none z-50';
      
      trail.style.width = '2px';
      trail.style.height = '2px';
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
      trail.style.background = 'radial-gradient(circle, #ffffff, #34d399)';
      trail.style.borderRadius = '50%';
      trail.style.boxShadow = '0 0 6px #10b981, 0 0 12px #34d399';
      trail.style.opacity = '0.8';
      
      cursorTrail.appendChild(trail);

      const animation = trail.animate([
        { transform: 'scale(1) translateY(0)', opacity: 0.8 },
        { transform: 'scale(3) translateY(-20px)', opacity: 0 }
      ], {
        duration: 600,
        easing: 'ease-out'
      });

      animation.onfinish = () => {
        if (trail.parentNode && cursorTrail) {
          cursorTrail.removeChild(trail);
        }
      };
    };

    const handleMouseEnter = () => {
      isInsideContactSection = true;
      if (cursorTrail) {
        cursorTrail.style.display = 'block';
      }
    };

    const handleMouseLeave = () => {
      isInsideContactSection = false;
      if (cursorTrail) {
        cursorTrail.style.display = 'none';
        cursorTrail.innerHTML = '';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isInsideContactSection || !cursorTrail) return;

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      createSparkleLight(mouseX, mouseY);
      
      if (Math.random() > 0.7) {
        createTrailSparkle(mouseX, mouseY);
      }
    };

    createCursorTrail();
    contactSection.addEventListener('mouseenter', handleMouseEnter);
    contactSection.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      contactSection.removeEventListener('mouseenter', handleMouseEnter);
      contactSection.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousemove', handleMouseMove);
      if (cursorTrail && cursorTrail.parentNode) {
        document.body.removeChild(cursorTrail);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading wedding page...</p>
          <p className="text-sm text-gray-500 mt-2">Fetching dynamic content from server</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={seoData.wedding.title}
        description={seoData.wedding.description}
        keywords={seoData.wedding.keywords || []}
        canonicalUrl={seoData.wedding.canonicalUrl}
      />
      <div className="min-h-screen bg-white overflow-hidden">
        {/* Error Message - Only show if API error */}
        {apiError && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 m-4">
            <div className="flex items-center justify-between">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">{error}</p>
                  <p className="text-xs text-yellow-600 mt-1">Showing default content</p>
                </div>
              </div>
              <button
                onClick={fetchHeroContent}
                className="ml-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded text-sm font-medium hover:bg-yellow-200"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Hero Section - Dynamic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={heroContent.backgroundImage}
              alt="Beautiful wedding background"
              className="w-full h-full object-cover"
              onError={handleImageError}
              loading="eager"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-green-900/10"></div>
          </div>

          {/* Animated Background Elements */}
          {heroContent.animatedElements && (
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
          )}

          {/* Floating Icons */}
          {heroContent.floatingIcons && (
            <>
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
            </>
          )}

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
                  {heroContent.titleLine1}
                </span>
                <br />
                <span className="text-white">{heroContent.titleLine2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8"
              >
                {heroContent.subtitle}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={redirectToGallery}
                  className="border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                >
                  {heroContent.buttonText}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookNow}
                  className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg"
                >
                  Book Your Dream Wedding
                </motion.button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-2xl mx-auto"
            >
              {heroContent.stats.map((stat, index) => (
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
        </section>

        {/* Moving Contact Strip */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-4 overflow-hidden">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex items-center space-x-8 mx-8">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold text-lg">
                    For Wedding & Events Contact: 9251582671, 9251582673
                  </span>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-white" />
                  <span className="text-white font-medium">Book Your Dream Wedding Today!</span>
                </div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-white to-emerald-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose <span className="text-emerald-600">Our Wedding Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We combine expertise, creativity, and passion to create weddings that exceed expectations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 text-center"
                >
                  <motion.div
                    className="text-4xl mb-6"
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
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
                  className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
                  onClick={redirectToGallery}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition duration-700"
                      onError={handleImageError}
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
                      onClick={(e) => {
                        e.stopPropagation();
                        navigateToContact();
                      }}
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

        <FacilitiesSection />

        {/* Contact Section with Sparkle Cursor */}
        <section id="wedding-contact" className="relative py-16 px-6 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://i.pinimg.com/1200x/fa/c2/c8/fac2c838539f96bf7aff4268a62ba254.jpg"
              alt="Luxury wedding background"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-green-900/20"></div>
          </div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-white/15"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 6 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                <Heart size={20} />
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-4 cursor-default"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                For Wedding & Events{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent">
                  Get In Touch
                </span>
              </motion.h2>
              <motion.p 
                className="text-white/80 text-lg max-w-xl mx-auto cursor-default"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                Let's create your perfect day together
              </motion.p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Phone Numbers Card - This one will shake */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={isShaking ? {
                  x: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.6 }
                } : {}}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl overflow-hidden group cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={navigateToContact}
              >
                {/* Star Border Animation */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${(i / 8) * 100}%`,
                        top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
                      }}
                      animate={{
                        x: [0, 100, 0],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "linear"
                      }}
                    >
                      <Star className="w-3 h-3 text-emerald-400 fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl mb-4 mx-auto"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Phone className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white text-center mb-4 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Call Us Directly
                </motion.h3>
                
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/number"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                      <User className="w-4 h-4 text-emerald-300" />
                      <span className="text-lg font-semibold text-white group-hover/number:text-emerald-200 transition-colors duration-200">9251582671</span>
                      <motion.div
                        className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                        }}
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-400" />
                      </motion.div>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                    className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/number"
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                      <User className="w-4 h-4 text-green-300" />
                      <span className="text-lg font-semibold text-white group-hover/number:text-green-200 transition-colors duration-200">9251582673</span>
                      <motion.div
                        className="opacity-0 group-hover/number:opacity-100 transition-opacity duration-200"
                        animate={{
                          x: [0, 5, 0],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                        }}
                      >
                        <ChevronRight className="w-4 h-4 text-green-400" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <motion.p 
                  className="text-white/70 text-sm text-center mt-4 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Available 24/7 for inquiries
                </motion.p>
              </motion.div>

              {/* Consultation Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-emerald-500/20 to-green-500/20 backdrop-blur-md rounded-2xl p-6 border border-emerald-400/30 shadow-xl overflow-hidden group cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                onClick={navigateToContact}
              >
                {/* Star Border Animation */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${(i / 8) * 100}%`,
                        top: i % 2 === 0 ? '-2px' : 'calc(100% - 12px)',
                      }}
                      animate={{
                        x: [100, 0, 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "linear"
                      }}
                    >
                      <Star className="w-3 h-3 text-white fill-current" />
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-4 mx-auto"
                  whileHover={{
                    scale: 1.1,
                    rotate: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Calendar className="w-6 h-6 text-emerald-600" />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold text-white text-center mb-4 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Free Consultation
                </motion.h3>
                
                <motion.p 
                  className="text-white/80 text-sm text-center mb-4 cursor-default"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  Let's discuss your dream wedding with our experts
                </motion.p>

                {/* Additional Points */}
                <div className="space-y-3 mb-6">
                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                    className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-emerald-400/30 transition-all duration-200 cursor-pointer group/feature"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-300" />
                      <span className="text-white text-sm font-medium">Personalized Planning Session</span>
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ 
                      x: 5,
                      scale: 1.02,
                      backgroundColor: "rgba(255,255,255,0.1)"
                    }}
                    className="bg-white/5 rounded-xl p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200 cursor-pointer group/feature"
                  >
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-green-300" />
                      <span className="text-white text-sm font-medium">Flexible Timing Options</span>
                    </div>
                  </motion.div>
                </div>

                {/* <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateToContact();
                  }}
                  className="w-full bg-white text-emerald-600 py-3 rounded-xl font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Schedule Free Consultation
                </motion.button> */}
              </motion.div>
            </div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto"
            >
              {[
                { icon: "✨", text: "Expert" },
                { icon: "💎", text: "Luxury" },
                { icon: "❤️", text: "Custom" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-center cursor-pointer group/feature"
                  onClick={navigateToContact}
                >
                  <motion.div 
                    className="text-2xl mb-1"
                    whileHover={{
                      scale: 1.3,
                      rotate: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.icon}
                  </motion.div>
                  <motion.div 
                    className="text-white/80 text-sm font-medium group-hover/feature:text-white transition-colors duration-200"
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {item.text}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-green-600 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Journey?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/90 text-lg mb-8 max-w-2xl mx-auto"
            >
              Contact us today to begin planning the wedding of your dreams
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={navigateToContact}
              className="bg-white text-emerald-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </section>
      </div>
    </>
  );
};

export default WeddingPage;