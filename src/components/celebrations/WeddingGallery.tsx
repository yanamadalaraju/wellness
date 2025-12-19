// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Camera, Search } from "lucide-react";

// const WeddingGallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("Weddings");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Sample gallery images for each category
//   const galleryImages = [
//     // Weddings Category
//     {
//       id: 1,
//       src: "https://i.pinimg.com/1200x/80/2b/e5/802be59a47603d04fc8985c55956d1d4.jpg",
//       category: "Weddings",
//       title: "Beautiful Wedding Ceremony"
//     },
//     {
//       id: 2,
//       src: "https://i.pinimg.com/1200x/35/59/0b/35590b8aa31c4090ef685c1e91ba9207.jpg",
//       category: "Weddings",
//       title: "Bridal Preparation"
//     },
//     {
//       id: 3,
//       src: "https://i.pinimg.com/1200x/6d/d8/6d/6dd86def42de8bac3dc0972a7743e066.jpg",
//       category: "Weddings",
//       title: "Romantic Couple Portraits"
//     },
//     {
//       id: 4,
//       src: "https://i.pinimg.com/736x/5d/29/3a/5d293a1d609ce67b1cbdc9264881a212.jpg",
//       category: "Weddings",
//       title: "Vows Exchange Moment"
//     },
//     {
//       id: 5,
//       src: "https://i.pinimg.com/1200x/da/f4/4b/daf44b2341e45823880639b136b17ef1.jpg",
//       category: "Weddings",
//       title: "Dinner"
//     },
//     {
//       id: 6,
//       src: "https://i.pinimg.com/1200x/db/17/f9/db17f9c69ab3e0acc0dbac3ada0262cd.jpg",
//       category: "Weddings",
//       title: "Haldi"
//     },

//     // Events Category
//     {
//       id: 7,
//       src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Corporate Gala Night"
//     },
//     {
//       id: 8,
//       src: "https://i.pinimg.com/1200x/c9/f7/dd/c9f7dd76f2944ba73fe5b34ea83f9f07.jpg",
//       category: "Events",
//       title: "Birthday Celebration"
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Anniversary Party"
//     },
//     {
//       id: 10,
//       src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Live Music Event"
//     },
//     {
//       id: 11,
//       src: "https://i.pinimg.com/1200x/03/ab/03/03ab03d3d4ddc645134259c0e31dbe11.jpg",
//       category: "Events",
//       title: "Product Launch"
//     },
//     {
//       id: 12,
//       src: "https://i.pinimg.com/736x/e2/1e/66/e21e66321742d3d1ef854f4546ebaa17.jpg",
//       category: "Events",
//       title: "Charity Fundraiser"
//     },

//     // Banquet Category
//     {
//       id: 13,
//       src: "https://images.unsplash.com/photo-1549458283-4d6d3f4c4c1a?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Grand Banquet Hall"
//     },
//     {
//       id: 14,
//       src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Elegant Table Settings"
//     },
//     {
//       id: 15,
//       src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Banquet Reception"
//     },
//     {
//       id: 16,
//       src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Luxury Dining Setup"
//     },
//     {
//       id: 17,
//       src: "https://images.unsplash.com/photo-1537633552985-df8f9132d1a0?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Fine Dining Experience"
//     },
//     {
//       id: 18,
//       src: "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&h=600&fit=crop",
//       category: "Banquet",
//       title: "Banquet Decor"
//     },

//     // Laws Category
//     {
//       id: 19,
//       src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Legal Documentation"
//     },
//     {
//       id: 20,
//       src: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Marriage Registration"
//     },
//     {
//       id: 21,
//       src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Legal Consultation"
//     },
//     {
//       id: 22,
//       src: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Contract Signing"
//     },
//     {
//       id: 23,
//       src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Legal Proceedings"
//     },
//     {
//       id: 24,
//       src: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=800&h=600&fit=crop",
//       category: "Laws",
//       title: "Official Documentation"
//     }
//   ];

//   const categories = ["Weddings", "Events", "Banquet", "Laws"];

//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const openModal = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "unset";
//   };

//   const goToNext = () => {
//     setSelectedImageIndex((prev) => 
//       prev === filteredImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? filteredImages.length - 1 : prev - 1
//     );
//   };

//   // Handle keyboard navigation
//   React.useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isModalOpen) return;
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrevious();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, selectedImageIndex, filteredImages.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
//       {/* Header with Search and Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Search Bar */}
//           <div className="relative w-full lg:w-96">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search images..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                   selectedCategory === category
//                     ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transform scale-105"
//                     : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {filteredImages.length > 0 ? (
//           <motion.div
//             layout
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//           >
//             {filteredImages.map((image, index) => (
//               <motion.div
//                 key={image.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//                 onClick={() => openModal(index)}
//               >
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                 </div>
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
//                   <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${
//                       image.category === "Weddings" ? "bg-pink-500/90" :
//                       image.category === "Events" ? "bg-blue-500/90" :
//                       image.category === "Banquet" ? "bg-amber-500/90" :
//                       "bg-purple-500/90"
//                     } backdrop-blur-sm`}>
//                       {image.category}
//                     </span>
//                     <h3 className="text-white font-semibold text-sm leading-tight">
//                       {image.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Zoom Icon */}
//                 <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
//                   <Camera className="w-4 h-4 text-emerald-600" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No images found in {selectedCategory} category.</p>
//             <button
//               onClick={() => setSearchTerm("")}
//               className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
//             >
//               Clear search
//             </button>
//           </motion.div>
//         )}
//       </div>

//       {/* Modal Carousel */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPrevious();
//               }}
//               className="absolute left-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNext();
//               }}
//               className="absolute right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Carousel Content */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 30 }}
//               className="relative max-w-6xl max-h-[85vh] w-full mx-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.div
//                 key={selectedImageIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-center items-center h-full"
//               >
//                 <img
//                   src={filteredImages[selectedImageIndex].src}
//                   alt={filteredImages[selectedImageIndex].title}
//                   className="max-w-full max-h-[85vh] object-contain rounded-lg"
//                 />
//               </motion.div>

//               {/* Image Info */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 min-w-[200px] text-center">
//                 <div className="text-white text-sm">
//                   <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
//                     filteredImages[selectedImageIndex].category === "Weddings" ? "bg-pink-500" :
//                     filteredImages[selectedImageIndex].category === "Events" ? "bg-blue-500" :
//                     filteredImages[selectedImageIndex].category === "Banquet" ? "bg-amber-500" :
//                     "bg-purple-500"
//                   }`}></span>
//                   <span className="font-semibold">
//                     {filteredImages[selectedImageIndex].title}
//                   </span>
//                   <span className="mx-2">•</span>
//                   <span className="text-emerald-300">
//                     {selectedImageIndex + 1} / {filteredImages.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               {filteredImages.length > 1 && (
//                 <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2 px-4">
//                   {filteredImages.map((image, index) => (
//                     <button
//                       key={image.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedImageIndex(index);
//                       }}
//                       className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         index === selectedImageIndex
//                           ? "border-emerald-400 scale-110 shadow-lg"
//                           : "border-white/30 hover:border-white/60"
//                       }`}
//                     >
//                       <img
//                         src={image.src}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             {/* Keyboard Hint */}
//             <div className="absolute bottom-6 right-6 text-white/50 text-xs hidden md:block">
//               ← → to navigate • ESC to close
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default WeddingGallery;






// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Camera, Search } from "lucide-react";

// const WeddingGallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("Weddings");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Sample gallery images for each category
//   const galleryImages = [
//     // Weddings Category
//     {
//       id: 1,
//       src: "https://i.pinimg.com/1200x/80/2b/e5/802be59a47603d04fc8985c55956d1d4.jpg",
//       category: "Weddings",
//       title: "Beautiful Wedding Ceremony"
//     },
//     {
//       id: 2,
//       src: "https://i.pinimg.com/1200x/35/59/0b/35590b8aa31c4090ef685c1e91ba9207.jpg",
//       category: "Weddings",
//       title: "Bridal Preparation"
//     },
//     {
//       id: 3,
//       src: "https://i.pinimg.com/1200x/6d/d8/6d/6dd86def42de8bac3dc0972a7743e066.jpg",
//       category: "Weddings",
//       title: "Romantic Couple Portraits"
//     },
//     {
//       id: 4,
//       src: "https://i.pinimg.com/736x/5d/29/3a/5d293a1d609ce67b1cbdc9264881a212.jpg",
//       category: "Weddings",
//       title: "Vows Exchange Moment"
//     },
//     {
//       id: 5,
//       src: "https://i.pinimg.com/1200x/da/f4/4b/daf44b2341e45823880639b136b17ef1.jpg",
//       category: "Weddings",
//       title: "Wedding Dinner"
//     },
//     {
//       id: 6,
//       src: "https://i.pinimg.com/1200x/db/17/f9/db17f9c69ab3e0acc0dbac3ada0262cd.jpg",
//       category: "Weddings",
//       title: "Haldi Ceremony"
//     },
//     {
//       id: 7,
//       src: "https://i.pinimg.com/736x/1e/55/c9/1e55c9e20b71ea174ac7e50cfc214c9e.jpg",
//       category: "Weddings",
//       title: "Mehendi Celebration"
//     },
//     {
//       id: 8,
//       src: "https://i.pinimg.com/736x/16/c8/66/16c866659ba9bede61caf58c84237693.jpg",
//       category: "Weddings",
//       title: "Baraat Procession"
//     },

//     // Events Category
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Corporate Gala Night"
//     },
//     {
//       id: 10,
//       src: "https://i.pinimg.com/1200x/c9/f7/dd/c9f7dd76f2944ba73fe5b34ea83f9f07.jpg",
//       category: "Events",
//       title: "Birthday Celebration"
//     },
//     {
//       id: 11,
//       src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Anniversary Party"
//     },
//     {
//       id: 12,
//       src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Live Music Event"
//     },
//     {
//       id: 13,
//       src: "https://i.pinimg.com/1200x/03/ab/03/03ab03d3d4ddc645134259c0e31dbe11.jpg",
//       category: "Events",
//       title: "Product Launch"
//     },
//     {
//       id: 14,
//       src: "https://i.pinimg.com/736x/e2/1e/66/e21e66321742d3d1ef854f4546ebaa17.jpg",
//       category: "Events",
//       title: "Charity Fundraiser"
//     },
//     {
//       id: 15,
//       src: "https://i.pinimg.com/1200x/0d/ae/7a/0dae7a58e92d7936e47acece0501ba28.jpg",
//       category: "Events",
//       title: "Networking Event"
//     },
//     {
//       id: 16,
//       src: "https://i.pinimg.com/736x/5e/c6/ed/5ec6edd52c074b4672e19e75b94ef25f.jpg",
//       category: "Events",
//       title: "Award Ceremony"
//     }
//   ];

//   const categories = ["Weddings", "Events"];

//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const openModal = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "unset";
//   };

//   const goToNext = () => {
//     setSelectedImageIndex((prev) => 
//       prev === filteredImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? filteredImages.length - 1 : prev - 1
//     );
//   };

//   // Handle keyboard navigation
//   React.useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isModalOpen) return;
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrevious();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, selectedImageIndex, filteredImages.length]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
//       {/* Header with Search and Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Search Bar */}
//           <div className="relative w-full lg:w-96">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search images..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                   selectedCategory === category
//                     ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transform scale-105"
//                     : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {filteredImages.length > 0 ? (
//           <motion.div
//             layout
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//           >
//             {filteredImages.map((image, index) => (
//               <motion.div
//                 key={image.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//                 onClick={() => openModal(index)}
//               >
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//                   />
//                 </div>
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
//                   <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${
//                       image.category === "Weddings" ? "bg-pink-500/90" :
//                       "bg-blue-500/90"
//                     } backdrop-blur-sm`}>
//                       {image.category}
//                     </span>
//                     <h3 className="text-white font-semibold text-sm leading-tight">
//                       {image.title}
//                     </h3>
//                   </div>
//                 </div>

//                 {/* Zoom Icon */}
//                 <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
//                   <Camera className="w-4 h-4 text-emerald-600" />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No images found in {selectedCategory} category.</p>
//             <button
//               onClick={() => setSearchTerm("")}
//               className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
//             >
//               Clear search
//             </button>
//           </motion.div>
//         )}
//       </div>

//       {/* Modal Carousel */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPrevious();
//               }}
//               className="absolute left-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNext();
//               }}
//               className="absolute right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Carousel Content */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 30 }}
//               className="relative max-w-6xl max-h-[85vh] w-full mx-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.div
//                 key={selectedImageIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-center items-center h-full"
//               >
//                 <img
//                   src={filteredImages[selectedImageIndex].src}
//                   alt={filteredImages[selectedImageIndex].title}
//                   className="max-w-full max-h-[85vh] object-contain rounded-lg"
//                 />
//               </motion.div>

//               {/* Image Info */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 min-w-[200px] text-center">
//                 <div className="text-white text-sm">
//                   <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
//                     filteredImages[selectedImageIndex].category === "Weddings" ? "bg-pink-500" :
//                     "bg-blue-500"
//                   }`}></span>
//                   <span className="font-semibold">
//                     {filteredImages[selectedImageIndex].title}
//                   </span>
//                   <span className="mx-2">•</span>
//                   <span className="text-emerald-300">
//                     {selectedImageIndex + 1} / {filteredImages.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               {filteredImages.length > 1 && (
//                 <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2 px-4">
//                   {filteredImages.map((image, index) => (
//                     <button
//                       key={image.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedImageIndex(index);
//                       }}
//                       className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         index === selectedImageIndex
//                           ? "border-emerald-400 scale-110 shadow-lg"
//                           : "border-white/30 hover:border-white/60"
//                       }`}
//                     >
//                       <img
//                         src={image.src}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             {/* Keyboard Hint */}
//             <div className="absolute bottom-6 right-6 text-white/50 text-xs hidden md:block">
//               ← → to navigate • ESC to close
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default WeddingGallery;






// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Camera, Search, Plus, Edit, Trash2 } from "lucide-react";
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// interface GalleryImage {
//   id: number;
//   src: string;
//   category: string;
//   title: string;
//   description?: string;
//   uploadedAt?: string;
// }

// interface Category {
//   id: number;
//   name: string;
//   color?: string;
// }

// const WeddingGallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
//   const [categories, setCategories] = useState<Category[]>([
//     { id: 1, name: "Weddings", color: "bg-pink-500" },
//     { id: 2, name: "Events", color: "bg-blue-500" }
//   ]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [selectedImages, setSelectedImages] = useState<number[]>([]);

//   // Fetch gallery data from API
//   useEffect(() => {
//     fetchGalleryData();
//   }, []);

//   const fetchGalleryData = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
      
//       // Fetch gallery images
//       const imagesResponse = await axios.get(`${API_URL}/gallery-images`);
//       if (imagesResponse.data.success) {
//         setGalleryImages(imagesResponse.data.data || []);
//       }
      
//       // Fetch categories
//       const categoriesResponse = await axios.get(`${API_URL}/gallery-categories`);
//       if (categoriesResponse.data.success && categoriesResponse.data.data) {
//         setCategories(categoriesResponse.data.data);
//       }
      
//     } catch (error: any) {
//       console.error('Error fetching gallery data:', error);
//       setError('Failed to load gallery. Using sample data.');
      
//       // Use sample data as fallback
//       setGalleryImages([
//         {
//           id: 1,
//           src: "https://i.pinimg.com/1200x/80/2b/e5/802be59a47603d04fc8985c55956d1d4.jpg",
//           category: "Weddings",
//           title: "Beautiful Wedding Ceremony"
//         },
//         {
//           id: 2,
//           src: "https://i.pinimg.com/1200x/35/59/0b/35590b8aa31c4090ef685c1e91ba9207.jpg",
//           category: "Weddings",
//           title: "Bridal Preparation"
//         },
//         {
//           id: 3,
//           src: "https://i.pinimg.com/1200x/6d/d8/6d/6dd86def42de8bac3dc0972a7743e066.jpg",
//           category: "Weddings",
//           title: "Romantic Couple Portraits"
//         },
//         {
//           id: 4,
//           src: "https://i.pinimg.com/736x/5d/29/3a/5d293a1d609ce67b1cbdc9264881a212.jpg",
//           category: "Weddings",
//           title: "Vows Exchange Moment"
//         },
//         {
//           id: 5,
//           src: "https://i.pinimg.com/1200x/da/f4/4b/daf44b2341e45823880639b136b17ef1.jpg",
//           category: "Weddings",
//           title: "Wedding Dinner"
//         },
//         {
//           id: 6,
//           src: "https://i.pinimg.com/1200x/db/17/f9/db17f9c69ab3e0acc0dbac3ada0262cd.jpg",
//           category: "Weddings",
//           title: "Haldi Ceremony"
//         },
//         {
//           id: 7,
//           src: "https://i.pinimg.com/736x/1e/55/c9/1e55c9e20b71ea174ac7e50cfc214c9e.jpg",
//           category: "Weddings",
//           title: "Mehendi Celebration"
//         },
//         {
//           id: 8,
//           src: "https://i.pinimg.com/736x/16/c8/66/16c866659ba9bede61caf58c84237693.jpg",
//           category: "Weddings",
//           title: "Baraat Procession"
//         },
//         {
//           id: 9,
//           src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
//           category: "Events",
//           title: "Corporate Gala Night"
//         },
//         {
//           id: 10,
//           src: "https://i.pinimg.com/1200x/c9/f7/dd/c9f7dd76f2944ba73fe5b34ea83f9f07.jpg",
//           category: "Events",
//           title: "Birthday Celebration"
//         },
//         {
//           id: 11,
//           src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
//           category: "Events",
//           title: "Anniversary Party"
//         },
//         {
//           id: 12,
//           src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
//           category: "Events",
//           title: "Live Music Event"
//         }
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          (image.description && image.description.toLowerCase().includes(searchTerm.toLowerCase()));
//     return matchesCategory && matchesSearch;
//   });

//   const openModal = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "unset";
//   };

//   const goToNext = () => {
//     setSelectedImageIndex((prev) => 
//       prev === filteredImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? filteredImages.length - 1 : prev - 1
//     );
//   };

//   // Handle image selection for bulk operations
//   const toggleImageSelection = (id: number) => {
//     setSelectedImages(prev => 
//       prev.includes(id) 
//         ? prev.filter(imgId => imgId !== id)
//         : [...prev, id]
//     );
//   };

//   // Handle bulk delete
//   const handleBulkDelete = async () => {
//     if (selectedImages.length === 0) return;
    
//     if (window.confirm(`Delete ${selectedImages.length} selected image(s)?`)) {
//       try {
//         await axios.delete(`${API_URL}/gallery-images/bulk`, {
//           data: { imageIds: selectedImages }
//         });
//         setGalleryImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
//         setSelectedImages([]);
//       } catch (error) {
//         console.error('Error deleting images:', error);
//         alert('Failed to delete images.');
//       }
//     }
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isModalOpen) return;
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrevious();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, selectedImageIndex, filteredImages.length]);

//   // Handle image errors
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const img = e.target as HTMLImageElement;
//     img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop';
//     img.onerror = null;
//   };

//   // Get category color
//   const getCategoryColor = (categoryName: string) => {
//     const category = categories.find(cat => cat.name === categoryName);
//     return category?.color || "bg-emerald-500";
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading gallery...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
//       {/* Header with Search and Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Search Bar */}
//           <div className="relative w-full lg:w-96">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search images by title, category, or description..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center gap-3">
//             {isEditMode && selectedImages.length > 0 && (
//               <button
//                 onClick={handleBulkDelete}
//                 className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 shadow-sm"
//               >
//                 <Trash2 className="w-4 h-4" />
//                 Delete ({selectedImages.length})
//               </button>
//             )}
            
//             <button
//               onClick={() => setIsEditMode(!isEditMode)}
//               className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
//                 isEditMode 
//                   ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
//                   : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//               }`}
//             >
//               <Edit className="w-4 h-4" />
//               {isEditMode ? "Exit Edit" : "Edit Gallery"}
//             </button>
            
//             <button
//               onClick={() => window.location.href = '/admin/gallery'}
//               className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl font-medium hover:bg-emerald-600 hover:shadow-lg transition-all duration-300 shadow-sm"
//             >
//               <Plus className="w-4 h-4" />
//               Manage Gallery
//             </button>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap gap-3 justify-center mt-6">
//           <button
//             onClick={() => setSelectedCategory("All")}
//             className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
//               selectedCategory === "All"
//                 ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transform scale-105"
//                 : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//             }`}
//           >
//             All ({galleryImages.length})
//           </button>
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.name)}
//               className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                 selectedCategory === category.name
//                   ? `${getCategoryColor(category.name)} text-white shadow-lg shadow-emerald-500/25 transform scale-105`
//                   : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//               }`}
//             >
//               {category.name} ({galleryImages.filter(img => img.category === category.name).length})
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="max-w-7xl mx-auto px-4 mb-6">
//           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                 </svg>
//               </div>
//               <div className="ml-3">
//                 <p className="text-sm text-yellow-700">{error}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Gallery Grid */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {filteredImages.length > 0 ? (
//           <motion.div
//             layout
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//           >
//             {filteredImages.map((image, index) => (
//               <motion.div
//                 key={image.id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.4, delay: index * 0.05 }}
//                 className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//                 onClick={() => isEditMode ? toggleImageSelection(image.id) : openModal(index)}
//               >
//                 {/* Selection Checkbox in Edit Mode */}
//                 {isEditMode && (
//                   <div className="absolute top-3 left-3 z-20">
//                     <input
//                       type="checkbox"
//                       checked={selectedImages.includes(image.id)}
//                       onChange={() => toggleImageSelection(image.id)}
//                       onClick={(e) => e.stopPropagation()}
//                       className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
//                     />
//                   </div>
//                 )}
                
//                 <div className="aspect-[4/3] overflow-hidden">
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//                     onError={handleImageError}
//                   />
//                 </div>
                
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
//                   <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                     <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${
//                       getCategoryColor(image.category)
//                     } backdrop-blur-sm`}>
//                       {image.category}
//                     </span>
//                     <h3 className="text-white font-semibold text-sm leading-tight mb-1">
//                       {image.title}
//                     </h3>
//                     {image.description && (
//                       <p className="text-white/80 text-xs truncate">
//                         {image.description}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Zoom Icon */}
//                 {!isEditMode && (
//                   <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
//                     <Camera className="w-4 h-4 text-emerald-600" />
//                   </div>
//                 )}
//               </motion.div>
//             ))}
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center py-16"
//           >
//             <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">
//               {searchTerm 
//                 ? `No images found for "${searchTerm}" in ${selectedCategory} category.`
//                 : `No images found in ${selectedCategory} category.`
//               }
//             </p>
//             <button
//               onClick={() => setSearchTerm("")}
//               className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
//             >
//               Clear search
//             </button>
//           </motion.div>
//         )}
//       </div>

//       {/* Image Counter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
//         <p className="text-gray-600 text-sm text-center">
//           Showing {filteredImages.length} of {galleryImages.length} images
//           {searchTerm && ` for "${searchTerm}"`}
//         </p>
//       </div>

//       {/* Modal Carousel */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Navigation Buttons */}
//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToPrevious();
//               }}
//               className="absolute left-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             <button
//               onClick={(e) => {
//                 e.stopPropagation();
//                 goToNext();
//               }}
//               className="absolute right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Carousel Content */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 30 }}
//               className="relative max-w-6xl max-h-[85vh] w-full mx-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.div
//                 key={selectedImageIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-center items-center h-full"
//               >
//                 <img
//                   src={filteredImages[selectedImageIndex].src}
//                   alt={filteredImages[selectedImageIndex].title}
//                   className="max-w-full max-h-[85vh] object-contain rounded-lg"
//                   onError={(e) => {
//                     const img = e.target as HTMLImageElement;
//                     img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop';
//                   }}
//                 />
//               </motion.div>

//               {/* Image Info */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-xl px-4 py-3 min-w-[200px] text-center">
//                 <div className="text-white">
//                   <div className="flex items-center justify-center mb-1">
//                     <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getCategoryColor(filteredImages[selectedImageIndex].category)}`}></span>
//                     <span className="font-semibold">
//                       {filteredImages[selectedImageIndex].title}
//                     </span>
//                   </div>
//                   {filteredImages[selectedImageIndex].description && (
//                     <p className="text-sm text-gray-200 mb-1">
//                       {filteredImages[selectedImageIndex].description}
//                     </p>
//                   )}
//                   <div className="text-sm text-emerald-300">
//                     {selectedImageIndex + 1} / {filteredImages.length} • {filteredImages[selectedImageIndex].category}
//                   </div>
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               {filteredImages.length > 1 && (
//                 <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2 px-4">
//                   {filteredImages.map((image, index) => (
//                     <button
//                       key={image.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedImageIndex(index);
//                       }}
//                       className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         index === selectedImageIndex
//                           ? "border-emerald-400 scale-110 shadow-lg"
//                           : "border-white/30 hover:border-white/60"
//                       }`}
//                     >
//                       <img
//                         src={image.src}
//                         alt=""
//                         className="w-full h-full object-cover"
//                         onError={(e) => {
//                           const img = e.target as HTMLImageElement;
//                           img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=100&h=100&fit=crop';
//                         }}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             {/* Keyboard Hint */}
//             <div className="absolute bottom-6 right-6 text-white/50 text-xs hidden md:block">
//               ← → to navigate • ESC to close
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default WeddingGallery;





// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Camera, Search, Loader2 } from "lucide-react";

// interface GalleryImage {
//   id: number;
//   src: string;
//   category: string;
//   title: string;
//   description?: string;
//   uploadedAt?: string;
// }

// const WeddingGallery: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categories, setCategories] = useState<string[]>(["All"]);
//   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch categories and images on component mount
//   useEffect(() => {
//     fetchGalleryData();
//   }, []);

//   const fetchGalleryData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Fetch categories
//       const categoriesResponse = await fetch('http://localhost:5000/api/gallery-categories');
//       const categoriesData = await categoriesResponse.json();
      
//       if (categoriesData.success) {
//         const categoryNames = ["All", ...categoriesData.data.map((cat: any) => cat.name)];
//         setCategories(categoryNames);
//       }
      
//       // Fetch images
//       const imagesResponse = await fetch('http://localhost:5000/api/gallery-images');
//       const imagesData = await imagesResponse.json();
      
//       if (imagesData.success) {
//         setGalleryImages(imagesData.data);
//       } else {
//         throw new Error(imagesData.message || 'Failed to fetch images');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to load gallery');
//       console.error('Error fetching gallery data:', err);
      
//       // Fallback to sample data if API fails
//       setGalleryImages(getSampleImages());
//       setCategories(["All", "Weddings", "Events"]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fallback sample images (in case API fails)
//   const getSampleImages = (): GalleryImage[] => [
//     {
//       id: 1,
//       src: "https://i.pinimg.com/1200x/80/2b/e5/802be59a47603d04fc8985c55956d1d4.jpg",
//       category: "Weddings",
//       title: "Beautiful Wedding Ceremony"
//     },
//     {
//       id: 2,
//       src: "https://i.pinimg.com/1200x/35/59/0b/35590b8aa31c4090ef685c1e91ba9207.jpg",
//       category: "Weddings",
//       title: "Bridal Preparation"
//     },
//     {
//       id: 3,
//       src: "https://i.pinimg.com/1200x/6d/d8/6d/6dd86def42de8bac3dc0972a7743e066.jpg",
//       category: "Weddings",
//       title: "Romantic Couple Portraits"
//     },
//     {
//       id: 9,
//       src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Corporate Gala Night"
//     },
//     {
//       id: 10,
//       src: "https://i.pinimg.com/1200x/c9/f7/dd/c9f7dd76f2944ba73fe5b34ea83f9f07.jpg",
//       category: "Events",
//       title: "Birthday Celebration"
//     },
//     {
//       id: 11,
//       src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
//       category: "Events",
//       title: "Anniversary Party"
//     }
//   ];

//   const filteredImages = galleryImages.filter(image => {
//     const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const openModal = (index: number) => {
//     setSelectedImageIndex(index);
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "unset";
//   };

//   const goToNext = () => {
//     setSelectedImageIndex((prev) => 
//       prev === filteredImages.length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevious = () => {
//     setSelectedImageIndex((prev) => 
//       prev === 0 ? filteredImages.length - 1 : prev - 1
//     );
//   };

//   // Get category color
//   const getCategoryColor = (category: string) => {
//     switch(category.toLowerCase()) {
//       case 'weddings': return 'bg-pink-500';
//       case 'events': return 'bg-blue-500';
//       case 'decor': return 'bg-purple-500';
//       case 'catering': return 'bg-amber-500';
//       default: return 'bg-emerald-500';
//     }
//   };

//   // Handle keyboard navigation
//   React.useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (!isModalOpen) return;
//       if (e.key === "Escape") closeModal();
//       if (e.key === "ArrowRight") goToNext();
//       if (e.key === "ArrowLeft") goToPrevious();
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen, selectedImageIndex, filteredImages.length]);

//   // Handle retry
//   const handleRetry = () => {
//     fetchGalleryData();
//   };

//   // Handle clear search
//   const handleClearSearch = () => {
//     setSearchTerm("");
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
//       {/* Header with Search and Filter */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
//         <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
//           {/* Search Bar */}
//           <div className="relative w-full lg:w-96">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search images..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
//             />
//           </div>

//           {/* Category Filter */}
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
//                   selectedCategory === category
//                     ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transform scale-105"
//                     : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Loading State */}
//       {loading && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="flex flex-col items-center justify-center py-20">
//             <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
//             <p className="text-gray-600">Loading gallery images...</p>
//           </div>
//         </motion.div>
//       )}

//       {/* Error State */}
//       {error && !loading && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
//             <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//             <p className="text-gray-600 mb-2">Error loading gallery: {error}</p>
//             <p className="text-gray-500 text-sm mb-4">Using sample data for demonstration</p>
//             <button
//               onClick={handleRetry}
//               className="px-6 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 font-medium"
//             >
//               Retry
//             </button>
//           </div>
//         </motion.div>
//       )}

//       {/* Gallery Grid */}
//       {!loading && !error && (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {filteredImages.length > 0 ? (
//             <motion.div
//               layout
//               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//             >
//               {filteredImages.map((image, index) => (
//                 <motion.div
//                   key={image.id}
//                   layout
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: index * 0.05 }}
//                   className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
//                   onClick={() => openModal(index)}
//                 >
//                   <div className="aspect-[4/3] overflow-hidden">
//                     <img
//                       src={image.src}
//                       alt={image.title}
//                       className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
//                       loading="lazy"
//                     />
//                   </div>
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
//                     <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//                       <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${getCategoryColor(image.category)}/90 backdrop-blur-sm`}>
//                         {image.category}
//                       </span>
//                       <h3 className="text-white font-semibold text-sm leading-tight">
//                         {image.title}
//                       </h3>
//                       {image.description && (
//                         <p className="text-white/80 text-xs mt-1 line-clamp-2">
//                           {image.description}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   {/* Zoom Icon */}
//                   <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
//                     <Camera className="w-4 h-4 text-emerald-600" />
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center py-16"
//             >
//               <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//               <p className="text-gray-500 text-lg">No images found in {selectedCategory} category.</p>
//               <button
//                 onClick={handleClearSearch}
//                 className="mt-4 px-6 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-xl font-medium transition-colors duration-300"
//               >
//                 Clear search & filters
//               </button>
//             </motion.div>
//           )}
//         </div>
//       )}

//       {/* Modal Carousel */}
//       <AnimatePresence>
//         {isModalOpen && filteredImages.length > 0 && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             onClick={closeModal}
//           >
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//             >
//               <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//             </button>

//             {/* Navigation Buttons */}
//             {filteredImages.length > 1 && (
//               <>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     goToPrevious();
//                   }}
//                   className="absolute left-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//                 >
//                   <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//                 </button>

//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     goToNext();
//                   }}
//                   className="absolute right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
//                 >
//                   <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
//                 </button>
//               </>
//             )}

//             {/* Carousel Content */}
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", damping: 30 }}
//               className="relative max-w-6xl max-h-[85vh] w-full mx-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <motion.div
//                 key={selectedImageIndex}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex justify-center items-center h-full"
//               >
//                 <img
//                   src={filteredImages[selectedImageIndex].src}
//                   alt={filteredImages[selectedImageIndex].title}
//                   className="max-w-full max-h-[85vh] object-contain rounded-lg"
//                 />
//               </motion.div>

//               {/* Image Info */}
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 min-w-[200px] text-center">
//                 <div className="text-white text-sm">
//                   <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getCategoryColor(filteredImages[selectedImageIndex].category)}`}></span>
//                   <span className="font-semibold">
//                     {filteredImages[selectedImageIndex].title}
//                   </span>
//                   <span className="mx-2">•</span>
//                   <span className="text-emerald-300">
//                     {selectedImageIndex + 1} / {filteredImages.length}
//                   </span>
//                 </div>
//               </div>

//               {/* Thumbnail Strip */}
//               {filteredImages.length > 1 && (
//                 <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2 px-4">
//                   {filteredImages.map((image, index) => (
//                     <button
//                       key={image.id}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setSelectedImageIndex(index);
//                       }}
//                       className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
//                         index === selectedImageIndex
//                           ? "border-emerald-400 scale-110 shadow-lg"
//                           : "border-white/30 hover:border-white/60"
//                       }`}
//                     >
//                       <img
//                         src={image.src}
//                         alt=""
//                         className="w-full h-full object-cover"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </motion.div>

//             {/* Keyboard Hint */}
//             <div className="absolute bottom-6 right-6 text-white/50 text-xs hidden md:block">
//               ← → to navigate • ESC to close
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default WeddingGallery;





import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Search, Loader2 } from "lucide-react";
import { BASE_URL } from "../../config"; // Import BASE_URL from config

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description?: string;
  uploadedAt?: string;
}

const WeddingGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories and images on component mount
  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch categories
      const categoriesResponse = await fetch(`${BASE_URL}/api/gallery-categories`);
      const categoriesData = await categoriesResponse.json();
      
      if (categoriesData.success) {
        const categoryNames = ["All", ...categoriesData.data.map((cat: any) => cat.name)];
        setCategories(categoryNames);
      }
      
      // Fetch images
      const imagesResponse = await fetch(`${BASE_URL}/api/gallery-images`);
      const imagesData = await imagesResponse.json();
      
      if (imagesData.success) {
        setGalleryImages(imagesData.data);
      } else {
        throw new Error(imagesData.message || 'Failed to fetch images');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load gallery');
      console.error('Error fetching gallery data:', err);
      
      // Fallback to sample data if API fails
      setGalleryImages(getSampleImages());
      setCategories(["All", "Weddings", "Events"]);
    } finally {
      setLoading(false);
    }
  };

  // Fallback sample images (in case API fails)
  const getSampleImages = (): GalleryImage[] => [
    {
      id: 1,
      src: "https://i.pinimg.com/1200x/80/2b/e5/802be59a47603d04fc8985c55956d1d4.jpg",
      category: "Weddings",
      title: "Beautiful Wedding Ceremony"
    },
    {
      id: 2,
      src: "https://i.pinimg.com/1200x/35/59/0b/35590b8aa31c4090ef685c1e91ba9207.jpg",
      category: "Weddings",
      title: "Bridal Preparation"
    },
    {
      id: 3,
      src: "https://i.pinimg.com/1200x/6d/d8/6d/6dd86def42de8bac3dc0972a7743e066.jpg",
      category: "Weddings",
      title: "Romantic Couple Portraits"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
      category: "Events",
      title: "Corporate Gala Night"
    },
    {
      id: 10,
      src: "https://i.pinimg.com/1200x/c9/f7/dd/c9f7dd76f2944ba73fe5b34ea83f9f07.jpg",
      category: "Events",
      title: "Birthday Celebration"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      category: "Events",
      title: "Anniversary Party"
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => 
      prev === filteredImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    switch(category.toLowerCase()) {
      case 'weddings': return 'bg-pink-500';
      case 'events': return 'bg-blue-500';
      case 'decor': return 'bg-purple-500';
      case 'catering': return 'bg-amber-500';
      default: return 'bg-emerald-500';
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrevious();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImageIndex, filteredImages.length]);

  // Handle retry
  const handleRetry = () => {
    fetchGalleryData();
  };

  // Handle clear search
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 py-8">
      {/* Header with Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 transform scale-105"
                    : "bg-white/80 text-gray-600 hover:bg-white hover:text-emerald-600 hover:shadow-md backdrop-blur-sm border border-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mb-4" />
            <p className="text-gray-600">Loading gallery images...</p>
          </div>
        </motion.div>
      )}

      {/* Error State */}
      {error && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center py-16 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Error loading gallery: {error}</p>
            <p className="text-gray-500 text-sm mb-4">Using sample data for demonstration</p>
            <button
              onClick={handleRetry}
              className="px-6 py-2 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 font-medium"
            >
              Retry
            </button>
          </div>
        </motion.div>
      )}

      {/* Gallery Grid */}
      {!loading && !error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
                  onClick={() => openModal(index)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                    <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${getCategoryColor(image.category)}/90 backdrop-blur-sm`}>
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-sm leading-tight">
                        {image.title}
                      </h3>
                      {image.description && (
                        <p className="text-white/80 text-xs mt-1 line-clamp-2">
                          {image.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500 shadow-lg">
                    <Camera className="w-4 h-4 text-emerald-600" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No images found in {selectedCategory} category.</p>
              <button
                onClick={handleClearSearch}
                className="mt-4 px-6 py-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 rounded-xl font-medium transition-colors duration-300"
              >
                Clear search & filters
              </button>
            </motion.div>
          )}
        </div>
      )}

      {/* Modal Carousel */}
      <AnimatePresence>
        {isModalOpen && filteredImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
            >
              <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevious();
                  }}
                  className="absolute left-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-6 z-60 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                >
                  <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>
              </>
            )}

            {/* Carousel Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 30 }}
              className="relative max-w-6xl max-h-[85vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center items-center h-full"
              >
                <img
                  src={filteredImages[selectedImageIndex].src}
                  alt={filteredImages[selectedImageIndex].title}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </motion.div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 min-w-[200px] text-center">
                <div className="text-white text-sm">
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getCategoryColor(filteredImages[selectedImageIndex].category)}`}></span>
                  <span className="font-semibold">
                    {filteredImages[selectedImageIndex].title}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-emerald-300">
                    {selectedImageIndex + 1} / {filteredImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnail Strip */}
              {filteredImages.length > 1 && (
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 max-w-full overflow-x-auto py-2 px-4">
                  {filteredImages.map((image, index) => (
                    <button
                      key={image.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(index);
                      }}
                      className={`flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === selectedImageIndex
                          ? "border-emerald-400 scale-110 shadow-lg"
                          : "border-white/30 hover:border-white/60"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Keyboard Hint */}
            <div className="absolute bottom-6 right-6 text-white/50 text-xs hidden md:block">
              ← → to navigate • ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WeddingGallery;