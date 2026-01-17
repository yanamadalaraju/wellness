// import React from "react";

// const FacilitiesSection: React.FC = () => {
//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
//             Our Infrastructure
//           </span>
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
//             Grand Totals & Facilities
//           </h2>
//           <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//             Designed to accommodate spiritual gatherings, celebrations, and
//             large-scale events with comfort and elegance.
//           </p>
//         </div>

//         {/* Grand Totals */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
//           <div className="bg-white rounded-2xl shadow-md p-8 text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Total Keys
//             </h3>
//             <p className="text-4xl font-bold text-primary">101</p>
//           </div>

//           <div className="bg-white rounded-2xl shadow-md p-8 text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//               Maximum Occupancy
//             </h3>
//             <p className="text-4xl font-bold text-primary">225 Guests</p>
//           </div>
//         </div>

//         {/* Facilities */}
//         <div className="bg-white rounded-2xl shadow-lg p-10 mb-16">
//           <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
//             Our Facilities
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               { name: "Ram – Sita – Hanuman Ji Temple" },
//               { name: "Banquet Hall", size: "3,628 sq. ft." },
//               { name: "Banquet Dining", size: "2,695 sq. ft." },
//               { name: "Dhyan Vatika", size: "17,539 sq. ft." },
//               { name: "Utsav Lawns", size: "39,480 sq. ft." },
//               { name: "Hawan Area", size: "526 sq. ft." },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="border rounded-xl p-6 text-center hover:shadow-md transition"
//               >
//                 <h4 className="text-lg font-semibold text-gray-800">
//                   {item.name}
//                 </h4>
//                 {item.size && (
//                   <p className="mt-2 text-primary font-medium">
//                     {item.size}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Services */}
//         <div className="bg-primary text-white rounded-2xl p-10 text-center">
//           <h3 className="text-2xl font-bold mb-6">Services</h3>

//           <div className="flex flex-col md:flex-row justify-center gap-8">
//             <div className="bg-white/10 rounded-xl px-8 py-4">
//               <p className="text-lg font-semibold">Inhouse Catering Service</p>
//             </div>
//             <div className="bg-white/10 rounded-xl px-8 py-4">
//               <p className="text-lg font-semibold">Outside Catering Service</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacilitiesSection;





// import React from "react";

// const FacilitiesSection: React.FC = () => {
//   return (
//     <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section Heading */}
//         <div className="text-center mb-20">
//           <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm tracking-wider uppercase rounded-full mb-4">
//             Our Infrastructure
//           </span>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
//             Grand Totals & <span className="text-primary">Facilities</span>
//           </h2>
//           <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
//             Designed to accommodate spiritual gatherings, celebrations, and
//             large-scale events with comfort and elegance.
//           </p>
//         </div>

//         {/* Grand Totals - Enhanced */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
//             <div className="relative bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
//                 <span className="text-2xl">🔑</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Total Keys
//               </h3>
//               <p className="text-6xl font-bold text-primary">101</p>
//               <p className="mt-4 text-gray-500">Spacious rooms & suites</p>
//             </div>
//           </div>

//           <div className="relative group">
//             <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>
//             <div className="relative bg-white rounded-3xl shadow-xl p-10 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 rounded-full mb-6">
//                 <span className="text-2xl">👥</span>
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Maximum Occupancy
//               </h3>
//               <p className="text-6xl font-bold text-orange-500">225</p>
//               <p className="mt-4 text-gray-500">Comfortable guests capacity</p>
//             </div>
//           </div>
//         </div>

//         {/* Facilities - Enhanced */}
//         <div className="relative mb-24">
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-32 bg-primary/5 blur-3xl rounded-full"></div>
//           <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 border border-gray-100">
//             <div className="text-center mb-14">
//               <h3 className="text-3xl font-bold text-gray-900 mb-4">
//                 Our <span className="text-primary">Facilities</span>
//               </h3>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 Premium amenities designed for spiritual and celebratory occasions
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 { 
//                   name: "Ram – Sita – Hanuman Ji Temple", 
//                   icon: "🛕",
//                   color: "from-purple-500/10 to-purple-600/10",
//                   borderColor: "border-purple-200"
//                 },
//                 { 
//                   name: "Banquet Hall", 
//                   size: "3,628 sq. ft.",
//                   icon: "🎪",
//                   color: "from-blue-500/10 to-cyan-500/10",
//                   borderColor: "border-blue-200"
//                 },
//                 { 
//                   name: "Banquet Dining", 
//                   size: "2,695 sq. ft.",
//                   icon: "🍽️",
//                   color: "from-emerald-500/10 to-green-500/10",
//                   borderColor: "border-emerald-200"
//                 },
//                 { 
//                   name: "Dhyan Vatika", 
//                   size: "17,539 sq. ft.",
//                   icon: "🌳",
//                   color: "from-green-500/10 to-teal-500/10",
//                   borderColor: "border-green-200"
//                 },
//                 { 
//                   name: "Utsav Lawns", 
//                   size: "39,480 sq. ft.",
//                   icon: "🌿",
//                   color: "from-lime-500/10 to-emerald-500/10",
//                   borderColor: "border-lime-200"
//                 },
//                 { 
//                   name: "Hawan Area", 
//                   size: "526 sq. ft.",
//                   icon: "🔥",
//                   color: "from-orange-500/10 to-red-500/10",
//                   borderColor: "border-orange-200"
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className={`group relative bg-gradient-to-br ${item.color} border ${item.borderColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]`}
//                 >
//                   <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
//                     <span className="text-4xl">{item.icon}</span>
//                   </div>
//                   <div className="relative z-10">
//                     <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl mb-6 shadow-sm">
//                       <span className="text-2xl">{item.icon}</span>
//                     </div>
//                     <h4 className="text-xl font-bold text-gray-900 mb-3">
//                       {item.name}
//                     </h4>
//                     {item.size && (
//                       <div className="mt-4 pt-4 border-t border-white/50">
//                         <p className="text-lg font-semibold text-primary">
//                           {item.size}
//                         </p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Services - Enhanced */}
//         <div className="relative">
//           <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-20"></div>
//           <div className="relative bg-gradient-to-r from-primary to-blue-600 text-white rounded-3xl shadow-2xl overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white/50 to-transparent"></div>
//             <div className="p-12 text-center">
//               <h3 className="text-3xl font-bold mb-4">
//                 Premium <span className="text-yellow-300">Services</span>
//               </h3>
//               <p className="text-white/80 mb-10 max-w-2xl mx-auto">
//                 Experience culinary excellence with our dedicated catering services
//               </p>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
//                 <div className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-white/30 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                   <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
//                       <span className="text-2xl">👨‍🍳</span>
//                     </div>
//                     <p className="text-xl font-bold">In-house Catering</p>
//                     <p className="mt-3 text-white/70">Premium culinary experience</p>
//                   </div>
//                 </div>

//                 <div className="group relative">
//                   <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent to-white/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
//                   <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
//                       <span className="text-2xl">🎯</span>
//                     </div>
//                     <p className="text-xl font-bold">Outside Catering</p>
//                     <p className="mt-3 text-white/70">Flexible service options</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-12 pt-8 border-t border-white/20">
//                 <p className="text-white/70">
//                   All services designed for your comfort and convenience
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FacilitiesSection;




import React from "react";

const FacilitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/5 text-primary-dark font-medium text-sm tracking-wider uppercase rounded-lg mb-4 border border-primary/10">
            Our Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Grand Totals & <span className="text-primary">Facilities</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Designed to accommodate spiritual gatherings, celebrations, and
            large-scale events with comfort and elegance.
          </p>
        </div>

        {/* Grand Totals - Professional Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-full mb-6">
                <span className="text-2xl text-primary">🔑</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Total Keys
              </h3>
              <p className="text-5xl font-bold text-gray-900 mb-2">101</p>
              <p className="text-gray-600 text-sm font-medium">Spacious rooms & suites</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/5 rounded-full mb-6">
                <span className="text-2xl text-orange-500">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Maximum Occupancy
              </h3>
              <p className="text-5xl font-bold text-gray-900 mb-2">225</p>
              <p className="text-gray-600 text-sm font-medium">Comfortable guests capacity</p>
            </div>
          </div>
        </div>

        {/* Facilities - Professional Design */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              Our <span className="text-primary">Facilities</span>
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Premium amenities designed for spiritual and celebratory occasions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  name: "Ram – Sita – Hanuman Ji Temple", 
                  icon: "🛕",
                  color: "bg-purple-50",
                  borderColor: "border-purple-100"
                },
                { 
                  name: "Banquet Hall", 
                  size: "3,628 sq. ft.",
                  icon: "🎪",
                  color: "bg-blue-50",
                  borderColor: "border-blue-100"
                },
                { 
                  name: "Banquet Dining", 
                  size: "2,695 sq. ft.",
                  icon: "🍽️",
                  color: "bg-emerald-50",
                  borderColor: "border-emerald-100"
                },
                { 
                  name: "Dhyan Vatika", 
                  size: "17,539 sq. ft.",
                  icon: "🌳",
                  color: "bg-green-50",
                  borderColor: "border-green-100"
                },
                { 
                  name: "Utsav Lawns", 
                  size: "39,480 sq. ft.",
                  icon: "🌿",
                  color: "bg-lime-50",
                  borderColor: "border-lime-100"
                },
                { 
                  name: "Hawan Area", 
                  size: "526 sq. ft.",
                  icon: "🔥",
                  color: "bg-orange-50",
                  borderColor: "border-orange-100"
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group ${item.color} border ${item.borderColor} rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200">
                        <span className="text-xl">{item.icon}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {item.name}
                      </h4>
                      {item.size && (
                        <p className="text-primary font-semibold">
                          {item.size}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services - Professional Design */}
       <div className="bg-gradient-to-r from-primary to-primary-dark text-black rounded-2xl shadow-xl overflow-hidden">
  <div className="p-10 lg:p-12">
    <div className="text-center mb-10">
      <h3 className="text-3xl font-bold mb-3 text-black">
        Services
      </h3>
      <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
      <p className="text-black/95 max-w-2xl mx-auto text-lg font-medium">
        Experience culinary excellence with our dedicated catering services
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <span className="text-2xl text-black">👨‍🍳</span>
          </div>
          <h4 className="text-xl font-bold mb-2 text-black">In-house Catering Service</h4>
          <p className="text-black/95 text-base">
            Premium culinary experience with our expert chefs
          </p>
        </div>
      </div>

      <div className="bg-white/15 backdrop-blur-sm rounded-xl p-8 border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/30 rounded-full flex items-center justify-center mb-6 shadow-inner">
            <span className="text-2xl text-white">🎯</span>
          </div>
          <h4 className="text-xl font-bold mb-2 text-black">Outside Catering Service</h4>
          <p className="text-black/95 text-base">
            Flexible service options for your specific needs
          </p>
        </div>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t border-white/30 text-center">
      <p className="text-black/95 text-base font-semibold">
        All services designed for your comfort and convenience
      </p>
    </div>
  </div>
        </div>

        
      </div>
    </section>
  );
};

export default FacilitiesSection;