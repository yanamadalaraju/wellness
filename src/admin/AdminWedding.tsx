// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Save, 
//   Upload, 
//   Image, 
//   Type, 
//   Hash, 
//   ToggleLeft, 
//   ToggleRight,
//   Eye,
//   RotateCcw,
//   CheckCircle,
//   XCircle,
//   Gem,
//   Heart,
//   Sparkles
// } from 'lucide-react';
// import axios from 'axios';
// import AdminNavbar from './AdminNavbar';
// import { BASE_URL } from '../config';

// // API base URL
// // const API_URL = 'http://localhost:5000/api';
// const API_URL = `${BASE_URL}/api`;

// // Local fallback images (SVG data URLs)
// const FALLBACK_IMAGE_PREVIEW = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+CiAgPGcgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNmI3MjgwIj4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLTEwIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+CiAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZHk9IjEwIj5QbGVhc2UgdXBsb2FkIGEgbmV3IGltYWdlPC90ZXh0PgogIDwvZz4KPC9zdmc+';

// const FALLBACK_BACKGROUND = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+CiAgPGcgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmZmZmIj4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIj5CYWNrZ3JvdW5kIEltYWdlPC90ZXh0PgogIDwvZz4KPC9zdmc+';

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

// const AdminWedding: React.FC = () => {
//   const [heroContent, setHeroContent] = useState<HeroContent>({
//     backgroundImage: "https://i.pinimg.com/1200x/a2/53/fc/a253fc965d6bcff7b014d412770e7ab8.jpg",
//     titleLine1: "Forever",
//     titleLine2: "Starts Here",
//     subtitle: "Crafting unforgettable moments and timeless memories for your perfect day",
//     buttonText: "View Gallery",
//     stats: [
//       { number: "500+", label: "Weddings" },
//       { number: "98%", label: "Satisfaction" },
//       { number: "50+", label: "Awards" },
//       { number: "24/7", label: "Support" }
//     ],
//     floatingIcons: true,
//     animatedElements: true
//   });

//   const [isSaved, setIsSaved] = useState(false);
//   const [showPreview, setShowPreview] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [error, setError] = useState<string | null>(null);

//   // Load hero content from API
//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
//       const response = await axios.get(`${API_URL}/wedding-hero`);
      
//       if (response.data.success) {
//         if (response.data.data) {
//           setHeroContent(response.data.data);
//         }
//       } else {
//         setError('Failed to fetch hero content');
//       }
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Error loading data. Please check your connection.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//     field: keyof HeroContent
//   ) => {
//     setHeroContent(prev => ({
//       ...prev,
//       [field]: e.target.value
//     }));
//     setIsSaved(false);
//     setError(null);
//   };

//   const handleStatChange = (index: number, field: 'number' | 'label', value: string) => {
//     const updatedStats = [...heroContent.stats];
//     updatedStats[index] = {
//       ...updatedStats[index],
//       [field]: value
//     };
//     setHeroContent(prev => ({
//       ...prev,
//       stats: updatedStats
//     }));
//     setIsSaved(false);
//   };

//   const handleToggle = (field: 'floatingIcons' | 'animatedElements') => {
//     setHeroContent(prev => ({
//       ...prev,
//       [field]: !prev[field]
//     }));
//     setIsSaved(false);
//   };

//   const handleSave = async () => {
//     try {
//       setIsSaved(false);
//       setError(null);
//       setUploadProgress(0);
      
//       const formData = new FormData();
      
//       // Add text fields
//       formData.append('titleLine1', heroContent.titleLine1);
//       formData.append('titleLine2', heroContent.titleLine2);
//       formData.append('subtitle', heroContent.subtitle);
//       formData.append('buttonText', heroContent.buttonText);
//       formData.append('floatingIcons', heroContent.floatingIcons.toString());
//       formData.append('animatedElements', heroContent.animatedElements.toString());
//       formData.append('stats', JSON.stringify(heroContent.stats));
      
//       // Handle image upload
//       const backgroundImageInput = document.getElementById('image-upload') as HTMLInputElement;
//       if (backgroundImageInput && backgroundImageInput.files && backgroundImageInput.files[0]) {
//         // If a new file is selected, use it
//         formData.append('backgroundImage', backgroundImageInput.files[0]);
//       } else if (heroContent.backgroundImage.startsWith('data:image')) {
//         // If it's a base64 image from previous upload
//         const response = await fetch(heroContent.backgroundImage);
//         const blob = await response.blob();
//         formData.append('backgroundImage', blob, 'background.jpg');
//       } else if (heroContent.backgroundImage.startsWith('blob:')) {
//         // If it's a blob URL
//         const response = await fetch(heroContent.backgroundImage);
//         const blob = await response.blob();
//         formData.append('backgroundImage', blob, 'background.jpg');
//       } else {
//         // It's already a URL
//         formData.append('backgroundImage', heroContent.backgroundImage);
//       }
      
//       const response = await axios.put(`${API_URL}/wedding-hero`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//         onUploadProgress: (progressEvent) => {
//           if (progressEvent.total) {
//             const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
//             setUploadProgress(percentCompleted);
//           }
//         }
//       });
      
//       if (response.data.success) {
//         setIsSaved(true);
//         setUploadProgress(0);
        
//         // Refresh data from server
//         await fetchHeroContent();
        
//         // Reset saved status after 3 seconds
//         setTimeout(() => setIsSaved(false), 3000);
//       } else {
//         setError(response.data.message || 'Failed to save changes');
//       }
//     } catch (error: any) {
//       console.error('Error saving hero content:', error);
//       if (error.response?.data?.message) {
//         setError(error.response.data.message);
//       } else {
//         setError('Error saving changes. Please try again.');
//       }
//     }
//   };

//   const handleReset = async () => {
//     if (window.confirm('Are you sure you want to reset to default? This action cannot be undone.')) {
//       try {
//         setError(null);
//         const response = await axios.post(`${API_URL}/wedding-hero/reset`);
        
//         if (response.data.success) {
//           await fetchHeroContent();
//           setIsSaved(true);
//           setTimeout(() => setIsSaved(false), 3000);
//         } else {
//           setError('Failed to reset to default');
//         }
//       } catch (error) {
//         console.error('Error resetting hero content:', error);
//         setError('Error resetting to default. Please try again.');
//       }
//     }
//   };

//   const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       // Validate file type
//       if (!file.type.startsWith('image/')) {
//         setError('Please select an image file (JPG, PNG, GIF, etc.)');
//         return;
//       }
      
//       // Validate file size (5MB)
//       if (file.size > 5 * 1024 * 1024) {
//         setError('Image size should be less than 5MB');
//         return;
//       }
      
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (event.target?.result) {
//           setHeroContent(prev => ({
//             ...prev,
//             backgroundImage: event.target!.result as string
//           }));
//           setIsSaved(false);
//           setError(null);
//         }
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const addStat = () => {
//     setHeroContent(prev => ({
//       ...prev,
//       stats: [...prev.stats, { number: "", label: "" }]
//     }));
//     setIsSaved(false);
//   };

//   const removeStat = (index: number) => {
//     if (heroContent.stats.length > 1) {
//       const updatedStats = heroContent.stats.filter((_, i) => i !== index);
//       setHeroContent(prev => ({
//         ...prev,
//         stats: updatedStats
//       }));
//       setIsSaved(false);
//     }
//   };

//   // Function to handle image loading errors
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
//     e.currentTarget.src = fallback;
//     e.currentTarget.onerror = null; // Prevent infinite loop
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-20">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading wedding hero content...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//     <AdminNavbar />
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 pt-24">
//       <div className="max-w-7xl mx-auto mt-20">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl p-6 mb-6"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Wedding Hero Section Admin</h1>
//               <p className="text-gray-600 mt-2">Manage your wedding page hero section content</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => setShowPreview(!showPreview)}
//                 className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
//               >
//                 <Eye className="w-4 h-4" />
//                 {showPreview ? 'Hide Preview' : 'Show Preview'}
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleReset}
//                 className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
//               >
//                 <RotateCcw className="w-4 h-4" />
//                 Reset to Default
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSave}
//                 disabled={uploadProgress > 0 && uploadProgress < 100}
//                 className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {uploadProgress > 0 && uploadProgress < 100 ? (
//                   <>
//                     <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                     Uploading {uploadProgress}%
//                   </>
//                 ) : (
//                   <>
//                     <Save className="w-5 h-5" />
//                     Save Changes
//                   </>
//                 )}
//               </motion.button>
//             </div>
//           </div>
          
//           {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4"
//             >
//               <p className="text-red-700 font-medium">{error}</p>
//             </motion.div>
//           )}
          
//           {isSaved && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-xl p-4 flex items-center gap-3"
//             >
//               <CheckCircle className="w-5 h-5 text-emerald-600" />
//               <span className="text-emerald-700 font-medium">Changes saved successfully!</span>
//             </motion.div>
//           )}
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-6">
//           {/* Left Column: Form Controls */}
//           <div className="space-y-6">
//             {/* Image Upload */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <Image className="w-6 h-6 text-emerald-600" />
//                 <h2 className="text-xl font-bold text-gray-900">Background Image</h2>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Image URL
//                   </label>
//                   <input
//                     type="text"
//                     value={heroContent.backgroundImage}
//                     onChange={(e) => handleInputChange(e, 'backgroundImage')}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter image URL"
//                   />
//                   <p className="text-xs text-gray-500 mt-1">Enter a direct image URL or upload a file below</p>
//                 </div>
                
//                 <div className="border-t border-gray-200 pt-4">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Upload Image
//                   </label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="hidden"
//                       id="image-upload"
//                     />
//                     <label htmlFor="image-upload" className="cursor-pointer block">
//                       <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                       <p className="text-gray-600">Click to upload or drag and drop</p>
//                       <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
//                     </label>
//                   </div>
//                 </div>
                
//                 {/* Current Image Preview */}
//                 <div className="mt-4">
//                   <p className="text-sm font-medium text-gray-700 mb-2">Current Image Preview:</p>
//                   <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-300">
//                     <img
//                       src={heroContent.backgroundImage}
//                       alt="Background preview"
//                       className="w-full h-full object-cover"
//                       onError={(e) => handleImageError(e, FALLBACK_IMAGE_PREVIEW)}
//                     />
//                     <div className="absolute inset-0 bg-black/20"></div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Text Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center gap-3 mb-4">
//                 <Type className="w-6 h-6 text-emerald-600" />
//                 <h2 className="text-xl font-bold text-gray-900">Text Content</h2>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Title Line 1
//                   </label>
//                   <input
//                     type="text"
//                     value={heroContent.titleLine1}
//                     onChange={(e) => handleInputChange(e, 'titleLine1')}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter first line of title"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Title Line 2
//                   </label>
//                   <input
//                     type="text"
//                     value={heroContent.titleLine2}
//                     onChange={(e) => handleInputChange(e, 'titleLine2')}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter second line of title"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Subtitle
//                   </label>
//                   <textarea
//                     value={heroContent.subtitle}
//                     onChange={(e) => handleInputChange(e, 'subtitle')}
//                     rows={3}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
//                     placeholder="Enter subtitle text"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Button Text
//                   </label>
//                   <input
//                     type="text"
//                     value={heroContent.buttonText}
//                     onChange={(e) => handleInputChange(e, 'buttonText')}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter button text"
//                   />
//                 </div>
//               </div>
//             </motion.div>

//             {/* Stats Management */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <Hash className="w-6 h-6 text-emerald-600" />
//                   <h2 className="text-xl font-bold text-gray-900">Statistics</h2>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={addStat}
//                   className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-200 transition-colors"
//                 >
//                   + Add Stat
//                 </motion.button>
//               </div>
              
//               <div className="space-y-4">
//                 {heroContent.stats.map((stat, index) => (
//                   <div key={index} className="grid grid-cols-2 gap-4 items-start p-4 bg-gray-50 rounded-xl">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Number/Value
//                       </label>
//                       <input
//                         type="text"
//                         value={stat.number}
//                         onChange={(e) => handleStatChange(index, 'number', e.target.value)}
//                         className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                         placeholder="e.g., 500+"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Label
//                       </label>
//                       <div className="flex gap-2">
//                         <input
//                           type="text"
//                           value={stat.label}
//                           onChange={(e) => handleStatChange(index, 'label', e.target.value)}
//                           className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                           placeholder="e.g., Weddings"
//                         />
//                         {heroContent.stats.length > 1 && (
//                           <button
//                             onClick={() => removeStat(index)}
//                             className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
//                             title="Remove stat"
//                           >
//                             <XCircle className="w-5 h-5" />
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Toggles */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <h2 className="text-xl font-bold text-gray-900 mb-4">Animation Settings</h2>
              
//               <div className="space-y-4">
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
//                   <div>
//                     <h3 className="font-medium text-gray-900">Floating Icons</h3>
//                     <p className="text-sm text-gray-600">Show animated floating icons in hero section</p>
//                   </div>
//                   <button
//                     onClick={() => handleToggle('floatingIcons')}
//                     className="relative"
//                   >
//                     {heroContent.floatingIcons ? (
//                       <ToggleRight className="w-12 h-12 text-emerald-600" />
//                     ) : (
//                       <ToggleLeft className="w-12 h-12 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
                
//                 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
//                   <div>
//                     <h3 className="font-medium text-gray-900">Animated Elements</h3>
//                     <p className="text-sm text-gray-600">Show rotating background elements</p>
//                   </div>
//                   <button
//                     onClick={() => handleToggle('animatedElements')}
//                     className="relative"
//                   >
//                     {heroContent.animatedElements ? (
//                       <ToggleRight className="w-12 h-12 text-emerald-600" />
//                     ) : (
//                       <ToggleLeft className="w-12 h-12 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column: Live Preview */}
//           <div className="space-y-6">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-6 h-full"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-xl font-bold text-gray-900">Live Preview</h2>
//                 <div className="text-sm text-gray-500">
//                   Changes appear instantly
//                 </div>
//               </div>
              
//               {/* Preview Container */}
//               <div className="relative h-[600px] rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-900">
//                 {/* Simulated Hero Section Preview */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={heroContent.backgroundImage}
//                     alt="Preview background"
//                     className="w-full h-full object-cover"
//                     onError={(e) => handleImageError(e, FALLBACK_BACKGROUND)}
//                   />
//                   <div className="absolute inset-0 bg-black/40"></div>
//                   {heroContent.animatedElements && (
//                     <div className="absolute inset-0">
//                       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"></div>
//                       <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"></div>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Content Preview */}
//                 <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
//                   <div className="mb-6">
//                     <div className="relative inline-block mb-4">
//                       <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
//                       <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full">
//                         <Gem className="w-8 h-8 text-white" />
//                       </div>
//                     </div>
                    
//                     <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
//                       <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
//                         {heroContent.titleLine1 || "Title Line 1"}
//                       </span>
//                       <br />
//                       <span className="text-white">{heroContent.titleLine2 || "Title Line 2"}</span>
//                     </h1>
                    
//                     <p className="text-white/90 text-base md:text-lg max-w-md mx-auto mb-6">
//                       {heroContent.subtitle || "Your subtitle text will appear here"}
//                     </p>
                    
//                     <button className="border-2 border-white/50 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300">
//                       {heroContent.buttonText || "Button Text"}
//                     </button>
//                   </div>
                  
//                   {/* Stats Preview */}
//                   <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md">
//                     {heroContent.stats.map((stat, index) => (
//                       <div key={index} className="text-center">
//                         <div className="text-lg font-bold text-white">{stat.number || "Value"}</div>
//                         <div className="text-white/80 text-xs">{stat.label || "Label"}</div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
                
//                 {/* Floating Icons Preview */}
//                 {heroContent.floatingIcons && (
//                   <>
//                     <div className="absolute top-10 left-10 text-white/60">
//                       <Sparkles className="w-6 h-6" />
//                     </div>
//                     <div className="absolute bottom-20 right-20 text-white/60">
//                       <Heart className="w-5 h-5" />
//                     </div>
//                   </>
//                 )}
//               </div>
              
//               {/* Preview Info */}
//               <div className="mt-6 p-4 bg-gray-50 rounded-xl">
//                 <h3 className="font-medium text-gray-900 mb-2">Preview Information</h3>
//                 <div className="grid grid-cols-2 gap-4 text-sm">
//                   <div>
//                     <span className="text-gray-600">Background Image:</span>
//                     <span className="ml-2 text-gray-900 truncate block">
//                       {heroContent.backgroundImage.length > 30 
//                         ? `${heroContent.backgroundImage.substring(0, 30)}...` 
//                         : heroContent.backgroundImage}
//                     </span>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Stats Count:</span>
//                     <span className="ml-2 text-gray-900">{heroContent.stats.length}</span>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Floating Icons:</span>
//                     <span className={`ml-2 font-medium ${heroContent.floatingIcons ? 'text-emerald-600' : 'text-gray-600'}`}>
//                       {heroContent.floatingIcons ? 'Enabled' : 'Disabled'}
//                     </span>
//                   </div>
//                   <div>
//                     <span className="text-gray-600">Animations:</span>
//                     <span className={`ml-2 font-medium ${heroContent.animatedElements ? 'text-emerald-600' : 'text-gray-600'}`}>
//                       {heroContent.animatedElements ? 'Enabled' : 'Disabled'}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Save Button at Bottom */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 shadow-xl"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <div>
//               <h3 className="text-lg font-bold text-gray-900">Ready to Update Your Wedding Page?</h3>
//               <p className="text-gray-600 mt-1">Your changes will be reflected on the main wedding page</p>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={handleReset}
//                 className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
//               >
//                 Discard Changes
//               </button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSave}
//                 className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:to-green-700 transition-all"
//               >
//                 <div className="flex items-center gap-2">
//                   <Save className="w-5 h-5" />
//                   Save & Publish Changes
//                 </div>
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AdminWedding;






import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Save, 
  Upload, 
  Image, 
  Type, 
  Hash, 
  ToggleLeft, 
  ToggleRight,
  Eye,
  RotateCcw,
  CheckCircle,
  XCircle,
  Gem,
  Heart,
  Sparkles
} from 'lucide-react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/api`;

// Local fallback images (SVG data URLs)
const FALLBACK_IMAGE_PREVIEW = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjFmNWY5Ii8+CiAgPGcgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNmI3MjgwIj4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkeT0iLTEwIj5JbWFnZSBOb3QgRm91bmQ8L3RleHQ+CiAgICA8dGV4dCB4PSI1MCUiIHk9IjUwJSIgZHk9IjEwIj5QbGVhc2UgdXBsb2FkIGEgbmV3IGltYWdlPC90ZXh0PgogIDwvZz4KPC9zdmc+';

const FALLBACK_BACKGROUND = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWYyOTM3Ii8+CiAgPGcgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjZmZmZmZmIj4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIj5CYWNrZ3JvdW5kIEltYWdlPC90ZXh0PgogIDwvZz4KPC9zdmc+';

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

const AdminWedding: React.FC = () => {
  const [heroContent, setHeroContent] = useState<HeroContent>({
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
  });

  const [isSaved, setIsSaved] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  // Load hero content from API
  useEffect(() => {
    fetchHeroContent();
  }, []);

  const fetchHeroContent = async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log('Fetching wedding hero content from:', `${API_URL}/wedding-hero`);
      
      const response = await axios.get(`${API_URL}/wedding-hero`);
      
      if (response.data.success) {
        if (response.data.data) {
          setHeroContent(response.data.data);
          console.log('Hero content loaded successfully');
        } else {
          console.log('No data returned, using default values');
        }
      } else {
        setError('Failed to fetch hero content: ' + (response.data.message || 'Unknown error'));
      }
    } catch (error: any) {
      console.error('Error fetching hero content:', error);
      
      if (error.code === 'ERR_NETWORK') {
        setError(`Network error: Cannot connect to backend server at ${BASE_URL}. Please make sure the server is running.`);
      } else if (error.response?.status === 404) {
        setError('API endpoint not found (404). Please check if the backend route /api/wedding-hero exists.');
      } else if (error.response?.status >= 500) {
        setError('Server error (500). Please check the backend server logs.');
      } else {
        setError(`Error loading data: ${error.message || 'Please check your connection.'}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof HeroContent
  ) => {
    setHeroContent(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    setIsSaved(false);
    setError(null);
  };

  const handleStatChange = (index: number, field: 'number' | 'label', value: string) => {
    const updatedStats = [...heroContent.stats];
    updatedStats[index] = {
      ...updatedStats[index],
      [field]: value
    };
    setHeroContent(prev => ({
      ...prev,
      stats: updatedStats
    }));
    setIsSaved(false);
  };

  const handleToggle = (field: 'floatingIcons' | 'animatedElements') => {
    setHeroContent(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
    setIsSaved(false);
  };

  const handleSave = async () => {
    try {
      setIsSaved(false);
      setError(null);
      setUploadProgress(0);
      
      const formData = new FormData();
      
      // Add text fields
      formData.append('titleLine1', heroContent.titleLine1);
      formData.append('titleLine2', heroContent.titleLine2);
      formData.append('subtitle', heroContent.subtitle);
      formData.append('buttonText', heroContent.buttonText);
      formData.append('floatingIcons', heroContent.floatingIcons.toString());
      formData.append('animatedElements', heroContent.animatedElements.toString());
      formData.append('stats', JSON.stringify(heroContent.stats));
      
      // Handle image upload
      const backgroundImageInput = document.getElementById('image-upload') as HTMLInputElement;
      if (backgroundImageInput && backgroundImageInput.files && backgroundImageInput.files[0]) {
        // If a new file is selected, use it
        formData.append('backgroundImage', backgroundImageInput.files[0]);
      } else if (heroContent.backgroundImage.startsWith('data:image')) {
        // If it's a base64 image from previous upload
        const response = await fetch(heroContent.backgroundImage);
        const blob = await response.blob();
        formData.append('backgroundImage', blob, 'background.jpg');
      } else if (heroContent.backgroundImage.startsWith('blob:')) {
        // If it's a blob URL
        const response = await fetch(heroContent.backgroundImage);
        const blob = await response.blob();
        formData.append('backgroundImage', blob, 'background.jpg');
      } else {
        // It's already a URL
        formData.append('backgroundImage', heroContent.backgroundImage);
      }
      
      console.log('Saving wedding hero content to:', `${API_URL}/wedding-hero`);
      
      const response = await axios.put(`${API_URL}/wedding-hero`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setUploadProgress(percentCompleted);
          }
        }
      });
      
      if (response.data.success) {
        setIsSaved(true);
        setUploadProgress(0);
        
        // Refresh data from server
        await fetchHeroContent();
        
        // Reset saved status after 3 seconds
        setTimeout(() => setIsSaved(false), 3000);
      } else {
        setError(response.data.message || 'Failed to save changes');
      }
    } catch (error: any) {
      console.error('Error saving hero content:', error);
      if (error.response?.data?.message) {
        setError(error.response.data.message);
      } else if (error.code === 'ERR_NETWORK') {
        setError(`Network error: Cannot connect to backend server at ${BASE_URL}. Please make sure the server is running.`);
      } else {
        setError('Error saving changes. Please try again.');
      }
    }
  };

  const handleReset = async () => {
    if (window.confirm('Are you sure you want to reset to default? This action cannot be undone.')) {
      try {
        setError(null);
        const response = await axios.post(`${API_URL}/wedding-hero/reset`);
        
        if (response.data.success) {
          await fetchHeroContent();
          setIsSaved(true);
          setTimeout(() => setIsSaved(false), 3000);
        } else {
          setError('Failed to reset to default');
        }
      } catch (error: any) {
        console.error('Error resetting hero content:', error);
        if (error.code === 'ERR_NETWORK') {
          setError(`Network error: Cannot connect to backend server at ${BASE_URL}. Please make sure the server is running.`);
        } else {
          setError('Error resetting to default. Please try again.');
        }
      }
    }
  };

 const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  // ✅ Validate file type
  if (!file.type.startsWith("image/")) {
    setError("Please select an image file (JPG, PNG, GIF, etc.)");
    return;
  }

  // ✅ Validate file size (5MB)
  if (file.size > 5 * 1024 * 1024) {
    setError("Image size should be less than 5MB");
    return;
  }

  // ✅ Create lightweight preview URL (NO BASE64)
  const previewUrl = URL.createObjectURL(file);

  setHeroContent(prev => ({
    ...prev,
    backgroundImage: previewUrl
  }));

  setIsSaved(false);
  setError(null);
};

useEffect(() => {
  return () => {
    if (heroContent.backgroundImage.startsWith("blob:")) {
      URL.revokeObjectURL(heroContent.backgroundImage);
    }
  };
}, [heroContent.backgroundImage]);


  const addStat = () => {
    setHeroContent(prev => ({
      ...prev,
      stats: [...prev.stats, { number: "", label: "" }]
    }));
    setIsSaved(false);
  };

  const removeStat = (index: number) => {
    if (heroContent.stats.length > 1) {
      const updatedStats = heroContent.stats.filter((_, i) => i !== index);
      setHeroContent(prev => ({
        ...prev,
        stats: updatedStats
      }));
      setIsSaved(false);
    }
  };

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, fallback: string) => {
    e.currentTarget.src = fallback;
    e.currentTarget.onerror = null; // Prevent infinite loop
  };

  if (isLoading) {
    return (
      <>
        <AdminNavbar />
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading wedding hero content...</p>
            <p className="text-sm text-gray-500 mt-2">Connecting to backend at: {BASE_URL}</p>
            <p className="text-xs text-gray-400 mt-1">API Endpoint: {API_URL}/wedding-hero</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 pt-24">
        <div className="max-w-7xl mx-auto mt-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-6 mb-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Wedding Hero Section Admin</h1>
                <p className="text-gray-600 mt-2">Manage your wedding page hero section content</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-1 bg-emerald-100 text-emerald-800 rounded-full">
                    Backend: {BASE_URL}
                  </span>
                  <span className="text-xs text-gray-500">API: {API_URL}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleReset}
                  className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset to Default
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  disabled={uploadProgress > 0 && uploadProgress < 100}
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploadProgress > 0 && uploadProgress < 100 ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading {uploadProgress}%
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      Save Changes
                    </>
                  )}
                </motion.button>
              </div>
            </div>
            
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-red-50 border border-red-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 font-medium">{error}</p>
                    <p className="text-red-600 text-sm mt-1">
                      Please check that your backend server is running at <span className="font-mono">{BASE_URL}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {isSaved && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-xl p-4 flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Changes saved successfully!</span>
              </motion.div>
            )}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column: Form Controls */}
            <div className="space-y-6">
              {/* Image Upload */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Image className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-bold text-gray-900">Background Image</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      value={heroContent.backgroundImage}
                      onChange={(e) => handleInputChange(e, 'backgroundImage')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Enter image URL"
                    />
                    <p className="text-xs text-gray-500 mt-1">Enter a direct image URL or upload a file below</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Image
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors cursor-pointer">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer block">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Click to upload or drag and drop</p>
                        <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 5MB</p>
                      </label>
                    </div>
                  </div>
                  
                  {/* Current Image Preview */}
                  <div className="mt-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Current Image Preview:</p>
                    <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-300">
                      <img
                        src={heroContent.backgroundImage}
                        alt="Background preview"
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, FALLBACK_IMAGE_PREVIEW)}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Type className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-bold text-gray-900">Text Content</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title Line 1
                    </label>
                    <input
                      type="text"
                      value={heroContent.titleLine1}
                      onChange={(e) => handleInputChange(e, 'titleLine1')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Enter first line of title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title Line 2
                    </label>
                    <input
                      type="text"
                      value={heroContent.titleLine2}
                      onChange={(e) => handleInputChange(e, 'titleLine2')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Enter second line of title"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subtitle
                    </label>
                    <textarea
                      value={heroContent.subtitle}
                      onChange={(e) => handleInputChange(e, 'subtitle')}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                      placeholder="Enter subtitle text"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Button Text
                    </label>
                    <input
                      type="text"
                      value={heroContent.buttonText}
                      onChange={(e) => handleInputChange(e, 'buttonText')}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Enter button text"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Stats Management */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Hash className="w-6 h-6 text-emerald-600" />
                    <h2 className="text-xl font-bold text-gray-900">Statistics</h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addStat}
                    className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-200 transition-colors"
                  >
                    + Add Stat
                  </motion.button>
                </div>
                
                <div className="space-y-4">
                  {heroContent.stats.map((stat, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 items-start p-4 bg-gray-50 rounded-xl">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Number/Value
                        </label>
                        <input
                          type="text"
                          value={stat.number}
                          onChange={(e) => handleStatChange(index, 'number', e.target.value)}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                          placeholder="e.g., 500+"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Label
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            value={stat.label}
                            onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                            placeholder="e.g., Weddings"
                          />
                          {heroContent.stats.length > 1 && (
                            <button
                              onClick={() => removeStat(index)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              title="Remove stat"
                            >
                              <XCircle className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Toggles */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">Animation Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-medium text-gray-900">Floating Icons</h3>
                      <p className="text-sm text-gray-600">Show animated floating icons in hero section</p>
                    </div>
                    <button
                      onClick={() => handleToggle('floatingIcons')}
                      className="relative"
                    >
                      {heroContent.floatingIcons ? (
                        <ToggleRight className="w-12 h-12 text-emerald-600" />
                      ) : (
                        <ToggleLeft className="w-12 h-12 text-gray-400" />
                      )}
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div>
                      <h3 className="font-medium text-gray-900">Animated Elements</h3>
                      <p className="text-sm text-gray-600">Show rotating background elements</p>
                    </div>
                    <button
                      onClick={() => handleToggle('animatedElements')}
                      className="relative"
                    >
                      {heroContent.animatedElements ? (
                        <ToggleRight className="w-12 h-12 text-emerald-600" />
                      ) : (
                        <ToggleLeft className="w-12 h-12 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Live Preview */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl p-6 h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Live Preview</h2>
                  <div className="text-sm text-gray-500">
                    Changes appear instantly
                  </div>
                </div>
                
                {/* Preview Container */}
                <div className="relative h-[600px] rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-900">
                  {/* Simulated Hero Section Preview */}
                  <div className="absolute inset-0">
                    <img
                      src={heroContent.backgroundImage}
                      alt="Preview background"
                      className="w-full h-full object-cover"
                      onError={(e) => handleImageError(e, FALLBACK_BACKGROUND)}
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    {heroContent.animatedElements && (
                      <div className="absolute inset-0">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-green-200/30 rounded-full opacity-20"></div>
                        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-r from-emerald-100/30 to-green-100/30 rounded-full opacity-30"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Preview */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-6">
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75"></div>
                        <div className="relative bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-full">
                          <Gem className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      
                      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        <span className="bg-gradient-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                          {heroContent.titleLine1 || "Title Line 1"}
                        </span>
                        <br />
                        <span className="text-white">{heroContent.titleLine2 || "Title Line 2"}</span>
                      </h1>
                      
                      <p className="text-white/90 text-base md:text-lg max-w-md mx-auto mb-6">
                        {heroContent.subtitle || "Your subtitle text will appear here"}
                      </p>
                      
                      <button className="border-2 border-white/50 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-white/20 transition-all duration-300">
                        {heroContent.buttonText || "Button Text"}
                      </button>
                    </div>
                    
                    {/* Stats Preview */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md">
                      {heroContent.stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-white">{stat.number || "Value"}</div>
                          <div className="text-white/80 text-xs">{stat.label || "Label"}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Icons Preview */}
                  {heroContent.floatingIcons && (
                    <>
                      <div className="absolute top-10 left-10 text-white/60">
                        <Sparkles className="w-6 h-6" />
                      </div>
                      <div className="absolute bottom-20 right-20 text-white/60">
                        <Heart className="w-5 h-5" />
                      </div>
                    </>
                  )}
                </div>
                
                {/* Preview Info */}
                <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                  <h3 className="font-medium text-gray-900 mb-2">Preview Information</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Background Image:</span>
                      <span className="ml-2 text-gray-900 truncate block">
                        {heroContent.backgroundImage.length > 30 
                          ? `${heroContent.backgroundImage.substring(0, 30)}...` 
                          : heroContent.backgroundImage}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Stats Count:</span>
                      <span className="ml-2 text-gray-900">{heroContent.stats.length}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Floating Icons:</span>
                      <span className={`ml-2 font-medium ${heroContent.floatingIcons ? 'text-emerald-600' : 'text-gray-600'}`}>
                        {heroContent.floatingIcons ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Animations:</span>
                      <span className={`ml-2 font-medium ${heroContent.animatedElements ? 'text-emerald-600' : 'text-gray-600'}`}>
                        {heroContent.animatedElements ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Save Button at Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl p-6 shadow-xl"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Ready to Update Your Wedding Page?</h3>
                <p className="text-gray-600 mt-1">Your changes will be reflected on the main wedding page</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  Discard Changes
                </button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:from-emerald-700 hover:to-green-700 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <Save className="w-5 h-5" />
                    Save & Publish Changes
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AdminWedding;