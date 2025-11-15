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






import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera, Search } from "lucide-react";

const WeddingGallery: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Weddings");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample gallery images for each category
  const galleryImages = [
    // Weddings Category
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
      id: 4,
      src: "https://i.pinimg.com/736x/5d/29/3a/5d293a1d609ce67b1cbdc9264881a212.jpg",
      category: "Weddings",
      title: "Vows Exchange Moment"
    },
    {
      id: 5,
      src: "https://i.pinimg.com/1200x/da/f4/4b/daf44b2341e45823880639b136b17ef1.jpg",
      category: "Weddings",
      title: "Wedding Dinner"
    },
    {
      id: 6,
      src: "https://i.pinimg.com/1200x/db/17/f9/db17f9c69ab3e0acc0dbac3ada0262cd.jpg",
      category: "Weddings",
      title: "Haldi Ceremony"
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/1e/55/c9/1e55c9e20b71ea174ac7e50cfc214c9e.jpg",
      category: "Weddings",
      title: "Mehendi Celebration"
    },
    {
      id: 8,
      src: "https://i.pinimg.com/736x/16/c8/66/16c866659ba9bede61caf58c84237693.jpg",
      category: "Weddings",
      title: "Baraat Procession"
    },

    // Events Category
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
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      category: "Events",
      title: "Live Music Event"
    },
    {
      id: 13,
      src: "https://i.pinimg.com/1200x/03/ab/03/03ab03d3d4ddc645134259c0e31dbe11.jpg",
      category: "Events",
      title: "Product Launch"
    },
    {
      id: 14,
      src: "https://i.pinimg.com/736x/e2/1e/66/e21e66321742d3d1ef854f4546ebaa17.jpg",
      category: "Events",
      title: "Charity Fundraiser"
    },
    {
      id: 15,
      src: "https://i.pinimg.com/1200x/0d/ae/7a/0dae7a58e92d7936e47acece0501ba28.jpg",
      category: "Events",
      title: "Networking Event"
    },
    {
      id: 16,
      src: "https://i.pinimg.com/736x/5e/c6/ed/5ec6edd52c074b4672e19e75b94ef25f.jpg",
      category: "Events",
      title: "Award Ceremony"
    }
  ];

  const categories = ["Weddings", "Events"];

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

      {/* Gallery Grid */}
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
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-4 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold text-white mb-2 ${
                      image.category === "Weddings" ? "bg-pink-500/90" :
                      "bg-blue-500/90"
                    } backdrop-blur-sm`}>
                      {image.category}
                    </span>
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {image.title}
                    </h3>
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
              onClick={() => setSearchTerm("")}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear search
            </button>
          </motion.div>
        )}
      </div>

      {/* Modal Carousel */}
      <AnimatePresence>
        {isModalOpen && (
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
                  <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
                    filteredImages[selectedImageIndex].category === "Weddings" ? "bg-pink-500" :
                    "bg-blue-500"
                  }`}></span>
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