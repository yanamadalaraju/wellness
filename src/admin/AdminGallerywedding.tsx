// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Save, 
//   Upload, 
//   Image as ImageIcon, 
//   X, 
//   Plus, 
//   Trash2, 
//   Edit, 
//   Eye,
//   Search,
//   Tag,
//   CheckCircle,
//   XCircle,
//   Camera,
//   Palette,
//   FolderPlus,
//   Layers,
//   ArrowLeft,
//   RefreshCw
// } from 'lucide-react';
// import axios from 'axios';
// import { BASE_URL } from '../config';

// // const API_URL = 'http://localhost:5000/api';
// const API_URL = `${BASE_URL}/api`;

// interface GalleryImage {
//   id: number;
//   src: string;
//   category: string;
//   title: string;
//   description: string;
//   uploadedAt: string;
// }

// interface Category {
//   id: number;
//   name: string;
//   color: string;
//   imageCount: number;
// }

// const AdminGallery: React.FC = () => {
//   const [images, setImages] = useState<GalleryImage[]>([]);
//   const [categories, setCategories] = useState<Category[]>([
//     { id: 1, name: "Weddings", color: "bg-pink-500", imageCount: 0 },
//     { id: 2, name: "Events", color: "bg-blue-500", imageCount: 0 },
//     { id: 3, name: "Decor", color: "bg-purple-500", imageCount: 0 },
//     { id: 4, name: "Catering", color: "bg-amber-500", imageCount: 0 }
//   ]);
//   const [selectedImages, setSelectedImages] = useState<number[]>([]);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
//   // New image form
//   const [newImage, setNewImage] = useState({
//     title: "",
//     description: "",
//     category: "Weddings",
//     imageFile: null as File | null
//   });
  
//   // New category form
//   const [newCategory, setNewCategory] = useState({
//     name: "",
//     color: "bg-emerald-500"
//   });

//   // Color options for categories
//   const colorOptions = [
//     { name: "Emerald", value: "bg-emerald-500" },
//     { name: "Pink", value: "bg-pink-500" },
//     { name: "Blue", value: "bg-blue-500" },
//     { name: "Purple", value: "bg-purple-500" },
//     { name: "Amber", value: "bg-amber-500" },
//     { name: "Red", value: "bg-red-500" },
//     { name: "Indigo", value: "bg-indigo-500" },
//     { name: "Teal", value: "bg-teal-500" }
//   ];

//   useEffect(() => {
//     fetchGalleryData();
//   }, []);

//   const fetchGalleryData = async () => {
//     try {
//       setIsLoading(true);
//       setError(null);
      
//       console.log('Fetching gallery data from API...');
      
//       // Try to fetch images
//       try {
//         const imagesResponse = await axios.get(`${API_URL}/gallery-images`);
//         console.log('Images API response:', imagesResponse.data);
        
//         if (imagesResponse.data.success) {
//           setImages(imagesResponse.data.data || []);
//         } else {
//           console.warn('Images API returned success: false', imagesResponse.data.message);
//           setImages([]); // Set empty array if API fails
//         }
//       } catch (imagesError: any) {
//         console.error('Error fetching images:', imagesError);
//         setImages([]);
//       }
      
//       // Try to fetch categories
//       try {
//         const categoriesResponse = await axios.get(`${API_URL}/gallery-categories`);
//         console.log('Categories API response:', categoriesResponse.data);
        
//         if (categoriesResponse.data.success && categoriesResponse.data.data) {
//           setCategories(categoriesResponse.data.data);
//         } else {
//           console.warn('Categories API returned success: false', categoriesResponse.data?.message);
//           // Keep default categories
//         }
//       } catch (categoriesError: any) {
//         console.error('Error fetching categories:', categoriesError);
//         // Keep default categories on error
//       }
      
//     } catch (error: any) {
//       console.error('General error fetching gallery data:', error);
//       setError('Failed to load gallery data. Please check if the backend server is running.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate file
//     if (!file.type.startsWith('image/')) {
//       setError('Please select an image file');
//       return;
//     }

//     if (file.size > 10 * 1024 * 1024) {
//       setError('Image size should be less than 10MB');
//       return;
//     }

//     setNewImage(prev => ({
//       ...prev,
//       imageFile: file
//     }));
//     setError(null); // Clear previous errors
//   };

//   const handleAddImage = async () => {
//     if (!newImage.title.trim()) {
//       setError('Please enter a title for the image');
//       return;
//     }

//     if (!newImage.imageFile) {
//       setError('Please select an image file');
//       return;
//     }

//     try {
//       setUploading(true);
//       setError(null);
//       setUploadProgress(0);

//       const formData = new FormData();
//       formData.append('image', newImage.imageFile);
//       formData.append('title', newImage.title);
//       formData.append('description', newImage.description);
//       formData.append('category', newImage.category);

//       const response = await axios.post(`${API_URL}/gallery-images`, formData, {
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
//         setSuccess('Image uploaded successfully!');
//         fetchGalleryData(); // Refresh images
        
//         // Reset form
//         setNewImage({
//           title: "",
//           description: "",
//           category: "Weddings",
//           imageFile: null
//         });
        
//         // Clear success message after 3 seconds
//         setTimeout(() => setSuccess(null), 3000);
//       } else {
//         setError(response.data.message || 'Failed to upload image');
//       }
//     } catch (error: any) {
//       console.error('Error uploading image:', error);
//       if (error.response?.data?.message) {
//         setError(`Upload failed: ${error.response.data.message}`);
//       } else if (error.message.includes('Network Error')) {
//         setError('Network error. Please check if the backend server is running.');
//       } else {
//         setError('Error uploading image. Please try again.');
//       }
//     } finally {
//       setUploading(false);
//       setUploadProgress(0);
//     }
//   };

//   const handleAddCategory = async () => {
//     if (!newCategory.name.trim()) {
//       setError('Please enter a category name');
//       return;
//     }

//     if (categories.some(cat => cat.name.toLowerCase() === newCategory.name.toLowerCase())) {
//       setError('Category already exists');
//       return;
//     }

//     try {
//       const response = await axios.post(`${API_URL}/gallery-categories`, newCategory);
      
//       if (response.data.success) {
//         setSuccess('Category added successfully!');
//         fetchGalleryData(); // Refresh categories
        
//         // Reset form
//         setNewCategory({
//           name: "",
//           color: "bg-emerald-500"
//         });
        
//         setTimeout(() => setSuccess(null), 3000);
//       } else {
//         setError(response.data.message || 'Failed to add category');
//       }
//     } catch (error: any) {
//       console.error('Error adding category:', error);
//       if (error.response?.data?.message) {
//         setError(`Failed to add category: ${error.response.data.message}`);
//       } else if (error.message.includes('Network Error')) {
//         setError('Network error. Please check if the backend server is running.');
//       } else {
//         setError('Error adding category. Please try again.');
//       }
//     }
//   };

//   const handleDeleteImages = async () => {
//     if (selectedImages.length === 0) return;

//     if (!window.confirm(`Delete ${selectedImages.length} selected image(s)?`)) {
//       return;
//     }

//     try {
//       const response = await axios.delete(`${API_URL}/gallery-images/bulk`, {
//         data: { imageIds: selectedImages }
//       });

//       if (response.data.success) {
//         setSuccess(`${selectedImages.length} image(s) deleted successfully!`);
        
//         // Update local state immediately
//         setImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
//         setSelectedImages([]);
        
//         setTimeout(() => setSuccess(null), 3000);
//       } else {
//         setError('Failed to delete images');
//       }
//     } catch (error: any) {
//       console.error('Error deleting images:', error);
//       if (error.response?.data?.message) {
//         setError(`Delete failed: ${error.response.data.message}`);
//       } else {
//         setError('Error deleting images. Please try again.');
//       }
//     }
//   };

//   const handleDeleteCategory = async (categoryId: number) => {
//     if (!window.confirm('Delete this category? Images in this category will not be deleted.')) {
//       return;
//     }

//     try {
//       const response = await axios.delete(`${API_URL}/gallery-categories/${categoryId}`);
      
//       if (response.data.success) {
//         setSuccess('Category deleted successfully!');
//         fetchGalleryData(); // Refresh categories
//         setTimeout(() => setSuccess(null), 3000);
//       } else {
//         setError('Failed to delete category');
//       }
//     } catch (error: any) {
//       console.error('Error deleting category:', error);
//       if (error.response?.data?.message) {
//         setError(`Delete failed: ${error.response.data.message}`);
//       } else {
//         setError('Error deleting category. Please try again.');
//       }
//     }
//   };

//   const toggleImageSelection = (id: number) => {
//     setSelectedImages(prev => 
//       prev.includes(id) 
//         ? prev.filter(imgId => imgId !== id)
//         : [...prev, id]
//     );
//   };

//   const selectAllImages = () => {
//     if (selectedImages.length === filteredImages.length) {
//       setSelectedImages([]);
//     } else {
//       setSelectedImages(filteredImages.map(img => img.id));
//     }
//   };

//   const filteredImages = images.filter(image => {
//     const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   const filteredCategories = categories.filter(cat => 
//     cat.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle image error
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
//     const img = e.target as HTMLImageElement;
//     img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop';
//     img.onerror = null;
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
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 p-4 md:p-8 pt-24">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white rounded-2xl shadow-xl p-6 mb-6"
//         >
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Wedding Gallery Management</h1>
//               <p className="text-gray-600 mt-2">Manage your wedding gallery images and categories</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <button
//                 onClick={() => window.location.href = '/wedding-gallery'}
//                 className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
//               >
//                 <Eye className="w-4 h-4" />
//                 View Gallery
//               </button>
//               <button
//                 onClick={fetchGalleryData}
//                 className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
//               >
//                 <RefreshCw className="w-4 h-4" />
//                 Refresh
//               </button>
//             </div>
//           </div>

//           {/* Messages */}
//           {error && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3"
//             >
//               <XCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//               <div className="flex-1">
//                 <p className="text-yellow-800 font-medium">{error}</p>
//                 <p className="text-yellow-700 text-sm mt-1">
//                   Make sure your backend server is running at http://localhost:5000
//                 </p>
//               </div>
//               <button
//                 onClick={() => setError(null)}
//                 className="text-yellow-600 hover:text-yellow-800"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </motion.div>
//           )}

//           {success && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3"
//             >
//               <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
//               <p className="text-emerald-700 font-medium">{success}</p>
//               <button
//                 onClick={() => setSuccess(null)}
//                 className="text-emerald-600 hover:text-emerald-800 ml-auto"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </motion.div>
//           )}
//         </motion.div>

//         <div className="grid lg:grid-cols-3 gap-6">
//           {/* Left Column: Add Image & Add Category */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Add Image Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <Camera className="w-6 h-6 text-emerald-600" />
//                 <h2 className="text-xl font-bold text-gray-900">Add New Image</h2>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Image Title *
//                   </label>
//                   <input
//                     type="text"
//                     value={newImage.title}
//                     onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter image title"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Description
//                   </label>
//                   <textarea
//                     value={newImage.description}
//                     onChange={(e) => setNewImage(prev => ({ ...prev, description: e.target.value }))}
//                     rows={2}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
//                     placeholder="Enter image description (optional)"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category
//                   </label>
//                   <select
//                     value={newImage.category}
//                     onChange={(e) => setNewImage(prev => ({ ...prev, category: e.target.value }))}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                   >
//                     {categories.map(category => (
//                       <option key={category.id} value={category.name}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Upload Image *
//                   </label>
//                   <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
//                     <input
//                       type="file"
//                       accept="image/*"
//                       onChange={handleImageUpload}
//                       className="hidden"
//                       id="image-upload"
//                     />
//                     <label htmlFor="image-upload" className="cursor-pointer block">
//                       {newImage.imageFile ? (
//                         <div className="text-center">
//                           <ImageIcon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
//                           <p className="text-emerald-600 font-medium truncate">{newImage.imageFile.name}</p>
//                           <p className="text-sm text-gray-500 mt-1">
//                             {(newImage.imageFile.size / 1024 / 1024).toFixed(2)} MB
//                           </p>
//                           <button
//                             type="button"
//                             onClick={() => setNewImage(prev => ({ ...prev, imageFile: null }))}
//                             className="mt-2 text-red-600 text-sm hover:text-red-700"
//                           >
//                             Remove file
//                           </button>
//                         </div>
//                       ) : (
//                         <>
//                           <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
//                           <p className="text-gray-600">Click to upload or drag and drop</p>
//                           <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
//                         </>
//                       )}
//                     </label>
//                   </div>
//                 </div>

//                 {/* Upload Progress */}
//                 {uploading && (
//                   <div className="mt-4">
//                     <div className="flex justify-between text-sm text-gray-600 mb-1">
//                       <span>Uploading...</span>
//                       <span>{uploadProgress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <motion.div
//                         className="bg-emerald-500 h-2 rounded-full"
//                         initial={{ width: 0 }}
//                         animate={{ width: `${uploadProgress}%` }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>
//                   </div>
//                 )}

//                 <button
//                   onClick={handleAddImage}
//                   disabled={uploading || !newImage.title.trim() || !newImage.imageFile}
//                   className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//                 >
//                   {uploading ? (
//                     <div className="flex items-center justify-center gap-2">
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Uploading...
//                     </div>
//                   ) : (
//                     <>
//                       <Plus className="w-5 h-5 inline-block mr-2" />
//                       Add to Gallery
//                     </>
//                   )}
//                 </button>
//               </div>
//             </motion.div>

//             {/* Add Category Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center gap-3 mb-6">
//                 <FolderPlus className="w-6 h-6 text-emerald-600" />
//                 <h2 className="text-xl font-bold text-gray-900">Add New Category</h2>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category Name *
//                   </label>
//                   <input
//                     type="text"
//                     value={newCategory.name}
//                     onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))}
//                     className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
//                     placeholder="Enter category name"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Category Color
//                   </label>
//                   <div className="grid grid-cols-4 gap-2">
//                     {colorOptions.map(color => (
//                       <button
//                         key={color.value}
//                         type="button"
//                         onClick={() => setNewCategory(prev => ({ ...prev, color: color.value }))}
//                         className={`h-10 rounded-lg flex items-center justify-center transition-all ${
//                           newCategory.color === color.value
//                             ? 'ring-2 ring-offset-2 ring-emerald-500 transform scale-105'
//                             : 'hover:opacity-90'
//                         } ${color.value}`}
//                         title={color.name}
//                       >
//                         <Palette className="w-4 h-4 text-white" />
//                       </button>
//                     ))}
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">Selected: {newCategory.color.replace('bg-', '').replace('-500', '')}</p>
//                 </div>

//                 <button
//                   onClick={handleAddCategory}
//                   disabled={!newCategory.name.trim()}
//                   className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
//                 >
//                   <Tag className="w-5 h-5 inline-block mr-2" />
//                   Create Category
//                 </button>
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Column: Gallery Images & Categories */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Gallery Images Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">Gallery Images</h2>
//                   <p className="text-gray-600 mt-1">
//                     {images.length} total image{images.length !== 1 ? 's' : ''}
//                     {selectedCategory !== "All" && ` in ${selectedCategory}`}
//                   </p>
//                 </div>
                
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//                     <input
//                       type="text"
//                       placeholder="Search images..."
//                       value={searchTerm}
//                       onChange={(e) => setSearchTerm(e.target.value)}
//                       className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all w-48"
//                     />
//                   </div>
                  
//                   {selectedImages.length > 0 && (
//                     <button
//                       onClick={handleDeleteImages}
//                       className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-600 transition-colors"
//                     >
//                       <Trash2 className="w-4 h-4" />
//                       Delete ({selectedImages.length})
//                     </button>
//                   )}
//                 </div>
//               </div>

//               {/* Category Filter */}
//               <div className="flex flex-wrap gap-2 mb-6">
//                 <button
//                   onClick={() => setSelectedCategory("All")}
//                   className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
//                     selectedCategory === "All"
//                       ? "bg-emerald-500 text-white shadow-md"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   All ({images.length})
//                 </button>
//                 {categories.map(category => (
//                   <button
//                     key={category.id}
//                     onClick={() => setSelectedCategory(category.name)}
//                     className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
//                       selectedCategory === category.name
//                         ? `${category.color} text-white shadow-md`
//                         : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                     }`}
//                   >
//                     <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
//                     {category.name} ({category.imageCount})
//                   </button>
//                 ))}
//               </div>

//               {/* Images Grid */}
//               {filteredImages.length > 0 ? (
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto p-1">
//                   {filteredImages.map(image => (
//                     <div
//                       key={image.id}
//                       className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-400 transition-all duration-300"
//                     >
//                       <div className="aspect-square overflow-hidden">
//                         <img
//                           src={image.src}
//                           alt={image.title}
//                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                           onError={handleImageError}
//                         />
//                       </div>
                      
//                       {/* Selection Checkbox */}
//                       <div className="absolute top-2 left-2">
//                         <input
//                           type="checkbox"
//                           checked={selectedImages.includes(image.id)}
//                           onChange={() => toggleImageSelection(image.id)}
//                           className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
//                         />
//                       </div>

//                       {/* Image Info */}
//                       <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
//                         <h3 className="text-white font-semibold text-sm truncate">{image.title}</h3>
//                         <div className="flex items-center justify-between mt-1">
//                           <span className={`text-xs px-2 py-1 rounded-full ${categories.find(c => c.name === image.category)?.color || 'bg-gray-500'} text-white`}>
//                             {image.category}
//                           </span>
//                           <span className="text-xs text-gray-300">
//                             {new Date(image.uploadedAt).toLocaleDateString()}
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="text-center py-12">
//                   <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                   <p className="text-gray-500">
//                     {searchTerm 
//                       ? `No images found for "${searchTerm}"`
//                       : selectedCategory === "All" 
//                         ? "No images in gallery"
//                         : `No images in ${selectedCategory} category`
//                     }
//                   </p>
//                   {images.length === 0 && (
//                     <button
//                       onClick={() => window.location.reload()}
//                       className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
//                     >
//                       Try refreshing the page
//                     </button>
//                   )}
//                 </div>
//               )}

//               {/* Bulk Actions */}
//               {filteredImages.length > 0 && (
//                 <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="checkbox"
//                       checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
//                       onChange={selectAllImages}
//                       className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
//                     />
//                     <span className="text-sm text-gray-600">
//                       Select all {filteredImages.length} images
//                     </span>
//                   </div>
                  
//                   <div className="text-sm text-gray-500">
//                     {selectedImages.length} of {filteredImages.length} selected
//                   </div>
//                 </div>
//               )}
//             </motion.div>

//             {/* Categories Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.1 }}
//               className="bg-white rounded-2xl shadow-xl p-6"
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h2 className="text-xl font-bold text-gray-900">Categories</h2>
//                   <p className="text-gray-600 mt-1">Manage your gallery categories</p>
//                 </div>
//                 <Layers className="w-6 h-6 text-emerald-600" />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {filteredCategories.map(category => (
//                   <div
//                     key={category.id}
//                     className="border border-gray-200 rounded-xl p-4 hover:border-emerald-400 transition-all duration-300"
//                   >
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center gap-2">
//                         <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
//                         <h3 className="font-semibold text-gray-900">{category.name}</h3>
//                       </div>
//                       <button
//                         onClick={() => handleDeleteCategory(category.id)}
//                         className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-lg transition-colors"
//                         title="Delete category"
//                         disabled={category.name === "Weddings" || category.name === "Events"} // Prevent deleting default categories
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
                    
//                     <div className="text-sm text-gray-600 mb-2">
//                       {category.imageCount} image{category.imageCount !== 1 ? 's' : ''}
//                     </div>
                    
//                     <div className={`h-2 rounded-full w-full ${category.color.replace('500', '200')} overflow-hidden`}>
//                       <div 
//                         className={`h-full ${category.color} transition-all duration-500`}
//                         style={{ 
//                           width: `${images.length > 0 ? (category.imageCount / images.length * 100) : 0}%` 
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {filteredCategories.length === 0 && (
//                 <div className="text-center py-8">
//                   <Tag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
//                   <p className="text-gray-500">No categories found</p>
//                 </div>
//               )}
//             </motion.div>
//           </div>
//         </div>

//         {/* Stats Footer */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6 shadow-xl"
//         >
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="text-2xl font-bold text-gray-900">{images.length}</div>
//               <div className="text-sm text-gray-600">Total Images</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-gray-900">{categories.length}</div>
//               <div className="text-sm text-gray-600">Categories</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-gray-900">
//                 {categories.length > 0 ? categories.reduce((max, cat) => Math.max(max, cat.imageCount), 0) : 0}
//               </div>
//               <div className="text-sm text-gray-600">Most in Category</div>
//             </div>
//             <div className="text-center">
//               <div className="text-2xl font-bold text-gray-900">
//                 {categories.length > 0 && images.length > 0 ? Math.round(images.length / categories.length) : 0}
//               </div>
//               <div className="text-sm text-gray-600">Avg per Category</div>
//             </div>
//           </div>
          
//           {/* Backend Status */}
//           <div className="mt-4 pt-4 border-t border-emerald-100 text-center">
//             <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
//               <div className={`w-2 h-2 rounded-full ${images.length > 0 ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
//               Backend: {images.length > 0 ? 'Connected' : 'Checking...'}
//             </div>
//             <p className="text-xs text-gray-500 mt-2">
//               API Endpoint: {API_URL}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AdminGallery;




import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Save, 
  Upload, 
  Image as ImageIcon, 
  X, 
  Plus, 
  Trash2, 
  Edit, 
  Eye,
  Search,
  Tag,
  CheckCircle,
  XCircle,
  Camera,
  Palette,
  FolderPlus,
  Layers,
  ArrowLeft,
  RefreshCw
} from 'lucide-react';
import axios from 'axios';
import { BASE_URL } from '../config';

const API_URL = `${BASE_URL}/api`;

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description: string;
  uploadedAt: string;
}

interface Category {
  id: number;
  name: string;
  color: string;
  imageCount: number;
}

const AdminGallery: React.FC = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: "Weddings", color: "bg-pink-500", imageCount: 0 },
    { id: 2, name: "Events", color: "bg-blue-500", imageCount: 0 },
    { id: 3, name: "Decor", color: "bg-purple-500", imageCount: 0 },
    { id: 4, name: "Catering", color: "bg-amber-500", imageCount: 0 }
  ]);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  // New image form
  const [newImage, setNewImage] = useState({
    title: "",
    description: "",
    category: "Weddings",
    imageFile: null as File | null
  });
  
  // New category form
  const [newCategory, setNewCategory] = useState({
    name: "",
    color: "bg-emerald-500"
  });

  // Color options for categories
  const colorOptions = [
    { name: "Emerald", value: "bg-emerald-500" },
    { name: "Pink", value: "bg-pink-500" },
    { name: "Blue", value: "bg-blue-500" },
    { name: "Purple", value: "bg-purple-500" },
    { name: "Amber", value: "bg-amber-500" },
    { name: "Red", value: "bg-red-500" },
    { name: "Indigo", value: "bg-indigo-500" },
    { name: "Teal", value: "bg-teal-500" }
  ];

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('Fetching gallery data from API...');
      
      // Try to fetch images
      try {
        const imagesResponse = await axios.get(`${API_URL}/gallery-images`);
        console.log('Images API response:', imagesResponse.data);
        
        if (imagesResponse.data.success) {
          setImages(imagesResponse.data.data || []);
        } else {
          console.warn('Images API returned success: false', imagesResponse.data.message);
          setImages([]); // Set empty array if API fails
        }
      } catch (imagesError: any) {
        console.error('Error fetching images:', imagesError);
        setImages([]);
      }
      
      // Try to fetch categories
      try {
        const categoriesResponse = await axios.get(`${API_URL}/gallery-categories`);
        console.log('Categories API response:', categoriesResponse.data);
        
        if (categoriesResponse.data.success && categoriesResponse.data.data) {
          setCategories(categoriesResponse.data.data);
        } else {
          console.warn('Categories API returned success: false', categoriesResponse.data?.message);
          // Keep default categories
        }
      } catch (categoriesError: any) {
        console.error('Error fetching categories:', categoriesError);
        // Keep default categories on error
      }
      
    } catch (error: any) {
      console.error('General error fetching gallery data:', error);
      setError('Failed to load gallery data. Please check if the backend server is running.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Image size should be less than 10MB');
      return;
    }

    setNewImage(prev => ({
      ...prev,
      imageFile: file
    }));
    setError(null); // Clear previous errors
  };

  const handleAddImage = async () => {
    if (!newImage.title.trim()) {
      setError('Please enter a title for the image');
      return;
    }

    if (!newImage.imageFile) {
      setError('Please select an image file');
      return;
    }

    try {
      setUploading(true);
      setError(null);
      setUploadProgress(0);

      const formData = new FormData();
      formData.append('image', newImage.imageFile);
      formData.append('title', newImage.title);
      formData.append('description', newImage.description);
      formData.append('category', newImage.category);

      const response = await axios.post(`${API_URL}/gallery-images`, formData, {
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
        setSuccess('Image uploaded successfully!');
        fetchGalleryData(); // Refresh images
        
        // Reset form
        setNewImage({
          title: "",
          description: "",
          category: "Weddings",
          imageFile: null
        });
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(response.data.message || 'Failed to upload image');
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      if (error.response?.data?.message) {
        setError(`Upload failed: ${error.response.data.message}`);
      } else if (error.message.includes('Network Error')) {
        setError('Network error. Please check if the backend server is running.');
      } else {
        setError('Error uploading image. Please try again.');
      }
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.name.trim()) {
      setError('Please enter a category name');
      return;
    }

    if (categories.some(cat => cat.name.toLowerCase() === newCategory.name.toLowerCase())) {
      setError('Category already exists');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/gallery-categories`, newCategory);
      
      if (response.data.success) {
        setSuccess('Category added successfully!');
        fetchGalleryData(); // Refresh categories
        
        // Reset form
        setNewCategory({
          name: "",
          color: "bg-emerald-500"
        });
        
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError(response.data.message || 'Failed to add category');
      }
    } catch (error: any) {
      console.error('Error adding category:', error);
      if (error.response?.data?.message) {
        setError(`Failed to add category: ${error.response.data.message}`);
      } else if (error.message.includes('Network Error')) {
        setError('Network error. Please check if the backend server is running.');
      } else {
        setError('Error adding category. Please try again.');
      }
    }
  };

  const handleDeleteImages = async () => {
    if (selectedImages.length === 0) return;

    if (!window.confirm(`Delete ${selectedImages.length} selected image(s)?`)) {
      return;
    }

    try {
      const response = await axios.delete(`${API_URL}/gallery-images/bulk`, {
        data: { imageIds: selectedImages }
      });

      if (response.data.success) {
        setSuccess(`${selectedImages.length} image(s) deleted successfully!`);
        
        // Update local state immediately
        setImages(prev => prev.filter(img => !selectedImages.includes(img.id)));
        setSelectedImages([]);
        
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError('Failed to delete images');
      }
    } catch (error: any) {
      console.error('Error deleting images:', error);
      if (error.response?.data?.message) {
        setError(`Delete failed: ${error.response.data.message}`);
      } else {
        setError('Error deleting images. Please try again.');
      }
    }
  };

  const handleDeleteCategory = async (categoryId: number) => {
    if (!window.confirm('Delete this category? Images in this category will not be deleted.')) {
      return;
    }

    try {
      const response = await axios.delete(`${API_URL}/gallery-categories/${categoryId}`);
      
      if (response.data.success) {
        setSuccess('Category deleted successfully!');
        fetchGalleryData(); // Refresh categories
        setTimeout(() => setSuccess(null), 3000);
      } else {
        setError('Failed to delete category');
      }
    } catch (error: any) {
      console.error('Error deleting category:', error);
      if (error.response?.data?.message) {
        setError(`Delete failed: ${error.response.data.message}`);
      } else {
        setError('Error deleting category. Please try again.');
      }
    }
  };

  const toggleImageSelection = (id: number) => {
    setSelectedImages(prev => 
      prev.includes(id) 
        ? prev.filter(imgId => imgId !== id)
        : [...prev, id]
    );
  };

  const selectAllImages = () => {
    if (selectedImages.length === filteredImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(filteredImages.map(img => img.id));
    }
  };

  const filteredImages = images.filter(image => {
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop';
    img.onerror = null;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 p-4 md:p-8 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 mb-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Wedding Gallery Management</h1>
              <p className="text-gray-600 mt-2">Manage your wedding gallery images and categories</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.location.href = '/wedding-gallery'}
                className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl font-medium hover:bg-emerald-100 transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Gallery
              </button>
              <button
                onClick={fetchGalleryData}
                className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>

          {/* Messages */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-start gap-3"
            >
              <XCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-yellow-800 font-medium">{error}</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Make sure your backend server is running at {BASE_URL}
                </p>
              </div>
              <button
                onClick={() => setError(null)}
                className="text-yellow-600 hover:text-yellow-800"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3"
            >
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-emerald-700 font-medium">{success}</p>
              <button
                onClick={() => setSuccess(null)}
                className="text-emerald-600 hover:text-emerald-800 ml-auto"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column: Add Image & Add Category */}
          <div className="lg:col-span-1 space-y-6">
            {/* Add Image Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Camera className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-900">Add New Image</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Title *
                  </label>
                  <input
                    type="text"
                    value={newImage.title}
                    onChange={(e) => setNewImage(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Enter image title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newImage.description}
                    onChange={(e) => setNewImage(prev => ({ ...prev, description: e.target.value }))}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all resize-none"
                    placeholder="Enter image description (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={newImage.category}
                    onChange={(e) => setNewImage(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.name}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Image *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-emerald-400 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer block">
                      {newImage.imageFile ? (
                        <div className="text-center">
                          <ImageIcon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                          <p className="text-emerald-600 font-medium truncate">{newImage.imageFile.name}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {(newImage.imageFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <button
                            type="button"
                            onClick={() => setNewImage(prev => ({ ...prev, imageFile: null }))}
                            className="mt-2 text-red-600 text-sm hover:text-red-700"
                          >
                            Remove file
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">Click to upload or drag and drop</p>
                          <p className="text-sm text-gray-500 mt-1">PNG, JPG, GIF up to 10MB</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>

                {/* Upload Progress */}
                {uploading && (
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Uploading...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-emerald-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAddImage}
                  disabled={uploading || !newImage.title.trim() || !newImage.imageFile}
                  className="w-full bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 rounded-xl font-semibold hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {uploading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading...
                    </div>
                  ) : (
                    <>
                      <Plus className="w-5 h-5 inline-block mr-2" />
                      Add to Gallery
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Add Category Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <FolderPlus className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-900">Add New Category</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    placeholder="Enter category name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category Color
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {colorOptions.map(color => (
                      <button
                        key={color.value}
                        type="button"
                        onClick={() => setNewCategory(prev => ({ ...prev, color: color.value }))}
                        className={`h-10 rounded-lg flex items-center justify-center transition-all ${
                          newCategory.color === color.value
                            ? 'ring-2 ring-offset-2 ring-emerald-500 transform scale-105'
                            : 'hover:opacity-90'
                        } ${color.value}`}
                        title={color.name}
                      >
                        <Palette className="w-4 h-4 text-white" />
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Selected: {newCategory.color.replace('bg-', '').replace('-500', '')}</p>
                </div>

                <button
                  onClick={handleAddCategory}
                  disabled={!newCategory.name.trim()}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  <Tag className="w-5 h-5 inline-block mr-2" />
                  Create Category
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Gallery Images & Categories */}
          <div className="lg:col-span-2 space-y-6">
            {/* Gallery Images Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Gallery Images</h2>
                  <p className="text-gray-600 mt-1">
                    {images.length} total image{images.length !== 1 ? 's' : ''}
                    {selectedCategory !== "All" && ` in ${selectedCategory}`}
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search images..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all w-48"
                    />
                  </div>
                  
                  {selectedImages.length > 0 && (
                    <button
                      onClick={handleDeleteImages}
                      className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl font-medium hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete ({selectedImages.length})
                    </button>
                  )}
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-6">
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === "All"
                      ? "bg-emerald-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  All ({images.length})
                </button>
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      selectedCategory === category.name
                        ? `${category.color} text-white shadow-md`
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${category.color}`}></span>
                    {category.name} ({category.imageCount})
                  </button>
                ))}
              </div>

              {/* Images Grid */}
              {filteredImages.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto p-1">
                  {filteredImages.map(image => (
                    <div
                      key={image.id}
                      className="group relative rounded-xl overflow-hidden border border-gray-200 hover:border-emerald-400 transition-all duration-300"
                    >
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={handleImageError}
                        />
                      </div>
                      
                      {/* Selection Checkbox */}
                      <div className="absolute top-2 left-2">
                        <input
                          type="checkbox"
                          checked={selectedImages.includes(image.id)}
                          onChange={() => toggleImageSelection(image.id)}
                          className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                        />
                      </div>

                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                        <h3 className="text-white font-semibold text-sm truncate">{image.title}</h3>
                        <div className="flex items-center justify-between mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${categories.find(c => c.name === image.category)?.color || 'bg-gray-500'} text-white`}>
                            {image.category}
                          </span>
                          <span className="text-xs text-gray-300">
                            {new Date(image.uploadedAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">
                    {searchTerm 
                      ? `No images found for "${searchTerm}"`
                      : selectedCategory === "All" 
                        ? "No images in gallery"
                        : `No images in ${selectedCategory} category`
                    }
                  </p>
                  {images.length === 0 && (
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Try refreshing the page
                    </button>
                  )}
                </div>
              )}

              {/* Bulk Actions */}
              {filteredImages.length > 0 && (
                <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
                      onChange={selectAllImages}
                      className="w-4 h-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-600">
                      Select all {filteredImages.length} images
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {selectedImages.length} of {filteredImages.length} selected
                  </div>
                </div>
              )}
            </motion.div>

            {/* Categories Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Categories</h2>
                  <p className="text-gray-600 mt-1">Manage your gallery categories</p>
                </div>
                <Layers className="w-6 h-6 text-emerald-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredCategories.map(category => (
                  <div
                    key={category.id}
                    className="border border-gray-200 rounded-xl p-4 hover:border-emerald-400 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className={`w-3 h-3 rounded-full ${category.color}`}></span>
                        <h3 className="font-semibold text-gray-900">{category.name}</h3>
                      </div>
                      <button
                        onClick={() => handleDeleteCategory(category.id)}
                        className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete category"
                        disabled={category.name === "Weddings" || category.name === "Events"} // Prevent deleting default categories
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-2">
                      {category.imageCount} image{category.imageCount !== 1 ? 's' : ''}
                    </div>
                    
                    <div className={`h-2 rounded-full w-full ${category.color.replace('500', '200')} overflow-hidden`}>
                      <div 
                        className={`h-full ${category.color} transition-all duration-500`}
                        style={{ 
                          width: `${images.length > 0 ? (category.imageCount / images.length * 100) : 0}%` 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {filteredCategories.length === 0 && (
                <div className="text-center py-8">
                  <Tag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No categories found</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 bg-gradient-to-r from-emerald-50 to-blue-50 border border-emerald-200 rounded-2xl p-6 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{images.length}</div>
              <div className="text-sm text-gray-600">Total Images</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{categories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {categories.length > 0 ? categories.reduce((max, cat) => Math.max(max, cat.imageCount), 0) : 0}
              </div>
              <div className="text-sm text-gray-600">Most in Category</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {categories.length > 0 && images.length > 0 ? Math.round(images.length / categories.length) : 0}
              </div>
              <div className="text-sm text-gray-600">Avg per Category</div>
            </div>
          </div>
          
          {/* Backend Status */}
          <div className="mt-4 pt-4 border-t border-emerald-100 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
              <div className={`w-2 h-2 rounded-full ${images.length > 0 ? 'bg-emerald-500' : 'bg-yellow-500'}`}></div>
              Backend: {images.length > 0 ? 'Connected' : 'Checking...'}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              API Endpoint: {API_URL}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminGallery;