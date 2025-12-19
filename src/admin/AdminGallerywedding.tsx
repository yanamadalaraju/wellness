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
//                   Make sure your backend server is running at {BASE_URL}
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




// import React, { useState, useEffect } from "react";
// import { 
//   Upload, 
//   Image as ImageIcon, 
//   Trash2, 
//   Eye, 
//   Check, 
//   X, 
//   Plus, 
//   Search,
//   Tag,
//   Loader2,
//   AlertCircle,
//   Grid,
//   List,
//   Filter,
//   Calendar,
//   Edit
// } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

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
//   color: string;
//   imageCount: number;
// }

// const GalleryAdmin: React.FC = () => {
//   // State management
//   const [images, setImages] = useState<GalleryImage[]>([]);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
//   // Form state
//   const [newImage, setNewImage] = useState({
//     title: "",
//     description: "",
//     category: "",
//     image: null as File | null
//   });
  
//   const [newCategory, setNewCategory] = useState({
//     name: "",
//     color: "bg-emerald-500"
//   });
  
//   // UI state
//   const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
//   const [selectedImages, setSelectedImages] = useState<number[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filterCategory, setFilterCategory] = useState("All");
//   const [previewImage, setPreviewImage] = useState<string | null>(null);
//   const [showUploadModal, setShowUploadModal] = useState(false);
//   const [showCategoryModal, setShowCategoryModal] = useState(false);
//   const [editImageId, setEditImageId] = useState<number | null>(null);
  
//   // Color options for categories
//   const colorOptions = [
//     { value: "bg-pink-500", label: "Pink", colorClass: "bg-pink-500" },
//     { value: "bg-blue-500", label: "Blue", colorClass: "bg-blue-500" },
//     { value: "bg-emerald-500", label: "Emerald", colorClass: "bg-emerald-500" },
//     { value: "bg-purple-500", label: "Purple", colorClass: "bg-purple-500" },
//     { value: "bg-amber-500", label: "Amber", colorClass: "bg-amber-500" },
//     { value: "bg-red-500", label: "Red", colorClass: "bg-red-500" },
//     { value: "bg-indigo-500", label: "Indigo", colorClass: "bg-indigo-500" },
//     { value: "bg-cyan-500", label: "Cyan", colorClass: "bg-cyan-500" }
//   ];

//   // Fetch gallery data
//   const fetchGalleryData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Fetch categories
//       const categoriesResponse = await fetch('http://localhost:5000/api/gallery-categories');
//       const categoriesData = await categoriesResponse.json();
      
//       if (categoriesData.success) {
//         setCategories(categoriesData.data);
//       }
      
//       // Fetch images
//       const imagesResponse = await fetch('http://localhost:5000/api/gallery-images');
//       const imagesData = await imagesResponse.json();
      
//       if (imagesData.success) {
//         setImages(imagesData.data);
//       } else {
//         throw new Error(imagesData.message || 'Failed to fetch images');
//       }
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to load gallery data');
//       console.error('Error fetching gallery data:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchGalleryData();
//   }, []);

//   // Handle image upload
//   const handleImageUpload = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!newImage.image) {
//       setError("Please select an image to upload");
//       return;
//     }
    
//     if (!newImage.title.trim()) {
//       setError("Please enter a title for the image");
//       return;
//     }
    
//     if (!newImage.category) {
//       setError("Please select a category");
//       return;
//     }
    
//     setUploading(true);
//     setError(null);
    
//     const formData = new FormData();
//     formData.append('image', newImage.image);
//     formData.append('title', newImage.title);
//     formData.append('description', newImage.description);
//     formData.append('category', newImage.category);
    
//     try {
//       const response = await fetch('http://localhost:5000/api/gallery-images', {
//         method: 'POST',
//         body: formData
//       });
      
//       const data = await response.json();
      
//       if (data.success) {
//         setSuccessMessage('Image uploaded successfully!');
//         setNewImage({
//           title: "",
//           description: "",
//           category: "",
//           image: null
//         });
//         setShowUploadModal(false);
//         fetchGalleryData(); // Refresh the list
        
//         // Clear success message after 3 seconds
//         setTimeout(() => setSuccessMessage(null), 3000);
//       } else {
//         setError(data.message || 'Failed to upload image');
//       }
//     } catch (err) {
//       setError('Error uploading image. Please try again.');
//       console.error('Upload error:', err);
//     } finally {
//       setUploading(false);
//     }
//   };

//   // Handle bulk delete
//   const handleBulkDelete = async () => {
//     if (selectedImages.length === 0) {
//       setError("No images selected for deletion");
//       return;
//     }
    
//     if (!window.confirm(`Are you sure you want to delete ${selectedImages.length} image(s)? This action cannot be undone.`)) {
//       return;
//     }
    
//     try {
//       const response = await fetch('http://localhost:5000/api/gallery-images/bulk', {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ imageIds: selectedImages })
//       });
      
//       const data = await response.json();
      
//       if (data.success) {
//         setSuccessMessage(data.message || `${selectedImages.length} image(s) deleted successfully`);
//         setSelectedImages([]);
//         fetchGalleryData();
        
//         setTimeout(() => setSuccessMessage(null), 3000);
//       } else {
//         setError(data.message || 'Failed to delete images');
//       }
//     } catch (err) {
//       setError('Error deleting images. Please try again.');
//       console.error('Delete error:', err);
//     }
//   };

//   // Handle category creation
//   const handleCreateCategory = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!newCategory.name.trim()) {
//       setError("Please enter a category name");
//       return;
//     }
    
//     try {
//       const response = await fetch('http://localhost:5000/api/gallery-categories', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newCategory)
//       });
      
//       const data = await response.json();
      
//       if (data.success) {
//         setSuccessMessage('Category created successfully!');
//         setNewCategory({ name: "", color: "bg-emerald-500" });
//         setShowCategoryModal(false);
//         fetchGalleryData();
        
//         setTimeout(() => setSuccessMessage(null), 3000);
//       } else {
//         setError(data.message || 'Failed to create category');
//       }
//     } catch (err) {
//       setError('Error creating category. Please try again.');
//       console.error('Category creation error:', err);
//     }
//   };

//   // Handle category deletion
//   const handleDeleteCategory = async (categoryId: number) => {
//     if (!window.confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
//       return;
//     }
    
//     try {
//       const response = await fetch(`http://localhost:5000/api/gallery-categories/${categoryId}`, {
//         method: 'DELETE'
//       });
      
//       const data = await response.json();
      
//       if (data.success) {
//         setSuccessMessage('Category deleted successfully!');
//         fetchGalleryData();
        
//         setTimeout(() => setSuccessMessage(null), 3000);
//       } else {
//         setError(data.message || 'Failed to delete category');
//       }
//     } catch (err) {
//       setError('Error deleting category. Please try again.');
//       console.error('Category deletion error:', err);
//     }
//   };

//   // Filter images based on search and category
//   const filteredImages = images.filter(image => {
//     const matchesCategory = filterCategory === "All" || image.category === filterCategory;
//     const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          image.category.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   // Handle image selection
//   const toggleImageSelection = (id: number) => {
//     setSelectedImages(prev =>
//       prev.includes(id)
//         ? prev.filter(imgId => imgId !== id)
//         : [...prev, id]
//     );
//   };

//   // Handle select all
//   const toggleSelectAll = () => {
//     if (selectedImages.length === filteredImages.length) {
//       setSelectedImages([]);
//     } else {
//       setSelectedImages(filteredImages.map(img => img.id));
//     }
//   };

//   // Format date
//   const formatDate = (dateString?: string) => {
//     if (!dateString) return "N/A";
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   // Get category color
//   const getCategoryColor = (category: string) => {
//     const cat = categories.find(c => c.name === category);
//     return cat?.color || "bg-emerald-500";
//   };

//   // Clear messages
//   const clearMessages = () => {
//     setError(null);
//     setSuccessMessage(null);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
//           <p className="text-gray-600">Loading gallery data...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 p-4 md:p-6">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//           <div>
//             <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
//             <p className="text-gray-600 mt-2">Upload, organize, and manage your gallery images</p>
//           </div>
          
//           <div className="flex flex-wrap gap-3">
//             <button
//               onClick={() => setShowUploadModal(true)}
//               className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 font-medium"
//             >
//               <Upload className="w-4 h-4" />
//               Upload Image
//             </button>
            
//             <button
//               onClick={() => setShowCategoryModal(true)}
//               className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 font-medium"
//             >
//               <Tag className="w-4 h-4" />
//               Add Category
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Messages */}
//       <AnimatePresence>
//         {error && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="max-w-7xl mx-auto mb-4"
//           >
//             <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <AlertCircle className="w-5 h-5 text-red-500" />
//                 <p className="text-red-700">{error}</p>
//               </div>
//               <button
//                 onClick={clearMessages}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           </motion.div>
//         )}
        
//         {successMessage && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="max-w-7xl mx-auto mb-4"
//           >
//             <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
//               <div className="flex items-center gap-3">
//                 <Check className="w-5 h-5 text-emerald-500" />
//                 <p className="text-emerald-700">{successMessage}</p>
//               </div>
//               <button
//                 onClick={clearMessages}
//                 className="text-emerald-500 hover:text-emerald-700"
//               >
//                 <X className="w-4 h-4" />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Stats Cards */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Total Images</p>
//               <p className="text-2xl font-bold text-gray-900">{images.length}</p>
//             </div>
//             <div className="p-3 bg-emerald-50 rounded-lg">
//               <ImageIcon className="w-6 h-6 text-emerald-500" />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Categories</p>
//               <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
//             </div>
//             <div className="p-3 bg-blue-50 rounded-lg">
//               <Tag className="w-6 h-6 text-blue-500" />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Selected</p>
//               <p className="text-2xl font-bold text-gray-900">{selectedImages.length}</p>
//             </div>
//             <div className="p-3 bg-amber-50 rounded-lg">
//               <Check className="w-6 h-6 text-amber-500" />
//             </div>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-sm text-gray-500">Filtered</p>
//               <p className="text-2xl font-bold text-gray-900">{filteredImages.length}</p>
//             </div>
//             <div className="p-3 bg-purple-50 rounded-lg">
//               <Filter className="w-6 h-6 text-purple-500" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Categories Section */}
//       <div className="max-w-7xl mx-auto mb-8">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
//           <button
//             onClick={() => setShowCategoryModal(true)}
//             className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
//           >
//             <Plus className="w-4 h-4" />
//             Add New
//           </button>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
//           {categories.map(category => (
//             <div
//               key={category.id}
//               className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
//             >
//               <div className="flex items-center justify-between mb-2">
//                 <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${category.color}`}>
//                   {category.name}
//                 </span>
//                 <button
//                   onClick={() => handleDeleteCategory(category.id)}
//                   className="text-gray-400 hover:text-red-500 transition-colors"
//                   title="Delete category"
//                 >
//                   <Trash2 className="w-3 h-3" />
//                 </button>
//               </div>
//               <p className="text-xs text-gray-500">
//                 {category.imageCount} image{category.imageCount !== 1 ? 's' : ''}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Gallery Controls */}
//       <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//           {/* Search */}
//           <div className="relative w-full md:w-64">
//             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
//             <input
//               type="text"
//               placeholder="Search images..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//             />
//           </div>
          
//           {/* Filter and View Controls */}
//           <div className="flex items-center gap-4">
//             {/* Category Filter */}
//             <select
//               value={filterCategory}
//               onChange={(e) => setFilterCategory(e.target.value)}
//               className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//             >
//               <option value="All">All Categories</option>
//               {categories.map(category => (
//                 <option key={category.id} value={category.name}>
//                   {category.name} ({category.imageCount})
//                 </option>
//               ))}
//             </select>
            
//             {/* View Mode */}
//             <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg">
//               <button
//                 onClick={() => setViewMode("grid")}
//                 className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-100"}`}
//                 title="Grid View"
//               >
//                 <Grid className={`w-4 h-4 ${viewMode === "grid" ? "text-emerald-500" : "text-gray-400"}`} />
//               </button>
//               <button
//                 onClick={() => setViewMode("list")}
//                 className={`p-2 rounded ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-100"}`}
//                 title="List View"
//               >
//                 <List className={`w-4 h-4 ${viewMode === "list" ? "text-emerald-500" : "text-gray-400"}`} />
//               </button>
//             </div>
            
//             {/* Bulk Actions */}
//             {selectedImages.length > 0 && (
//               <button
//                 onClick={handleBulkDelete}
//                 className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
//               >
//                 <Trash2 className="w-4 h-4" />
//                 Delete Selected ({selectedImages.length})
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Gallery Content */}
//       <div className="max-w-7xl mx-auto">
//         {/* Select All */}
//         {filteredImages.length > 0 && (
//           <div className="mb-4 flex items-center gap-3">
//             <input
//               type="checkbox"
//               id="selectAll"
//               checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
//               onChange={toggleSelectAll}
//               className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
//             />
//             <label htmlFor="selectAll" className="text-sm text-gray-600">
//               Select all {filteredImages.length} images
//             </label>
//           </div>
//         )}

//         {/* Images Grid/List */}
//         {filteredImages.length === 0 ? (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
//             <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
//             <p className="text-gray-500 text-lg">No images found</p>
//             <p className="text-gray-400 text-sm mt-2">Try adjusting your search or upload new images</p>
//             <button
//               onClick={() => setShowUploadModal(true)}
//               className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-medium"
//             >
//               Upload Your First Image
//             </button>
//           </div>
//         ) : viewMode === "grid" ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredImages.map(image => (
//               <div
//                 key={image.id}
//                 className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
//               >
//                 {/* Image */}
//                 <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
//                   <img
//                     src={image.src}
//                     alt={image.title}
//                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                   />
                  
//                   {/* Selection Overlay */}
//                   <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
//                     selectedImages.includes(image.id) 
//                       ? 'bg-emerald-500/20' 
//                       : 'bg-black/0 hover:bg-black/10'
//                   }`}>
//                     <input
//                       type="checkbox"
//                       checked={selectedImages.includes(image.id)}
//                       onChange={() => toggleImageSelection(image.id)}
//                       className="w-5 h-5 text-emerald-500 rounded border-gray-300 shadow-sm"
//                     />
//                   </div>
                  
//                   {/* Preview Button */}
//                   <button
//                     onClick={() => setPreviewImage(image.src)}
//                     className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg"
//                     title="Preview"
//                   >
//                     <Eye className="w-4 h-4 text-gray-700" />
//                   </button>
//                 </div>
                
//                 {/* Info */}
//                 <div className="p-4">
//                   <div className="flex items-center justify-between mb-2">
//                     <h3 className="font-semibold text-gray-900 truncate">{image.title}</h3>
//                     <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(image.category)}`}>
//                       {image.category}
//                     </span>
//                   </div>
                  
//                   {image.description && (
//                     <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
//                   )}
                  
//                   <div className="flex items-center justify-between text-xs text-gray-500">
//                     <div className="flex items-center gap-1">
//                       <Calendar className="w-3 h-3" />
//                       {formatDate(image.uploadedAt)}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => {
//                           // Set edit mode
//                           setEditImageId(image.id);
//                           setNewImage({
//                             title: image.title,
//                             description: image.description || "",
//                             category: image.category,
//                             image: null
//                           });
//                           setShowUploadModal(true);
//                         }}
//                         className="text-gray-400 hover:text-emerald-500 transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-3 h-3" />
//                       </button>
//                       <button
//                         onClick={() => toggleImageSelection(image.id)}
//                         className="text-gray-400 hover:text-red-500 transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-3 h-3" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* List View */
//           <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 border-b border-gray-200">
//                   <th className="py-3 px-4 text-left">
//                     <input
//                       type="checkbox"
//                       checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
//                       onChange={toggleSelectAll}
//                       className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
//                     />
//                   </th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Image</th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Title</th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Category</th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Uploaded</th>
//                   <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredImages.map(image => (
//                   <tr key={image.id} className="border-b border-gray-100 hover:bg-gray-50/50">
//                     <td className="py-3 px-4">
//                       <input
//                         type="checkbox"
//                         checked={selectedImages.includes(image.id)}
//                         onChange={() => toggleImageSelection(image.id)}
//                         className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
//                       />
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                         <img
//                           src={image.src}
//                           alt={image.title}
//                           className="w-full h-full object-cover"
//                         />
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <div>
//                         <p className="font-medium text-gray-900">{image.title}</p>
//                         {image.description && (
//                           <p className="text-sm text-gray-600 truncate max-w-xs">{image.description}</p>
//                         )}
//                       </div>
//                     </td>
//                     <td className="py-3 px-4">
//                       <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(image.category)}`}>
//                         {image.category}
//                       </span>
//                     </td>
//                     <td className="py-3 px-4 text-sm text-gray-600">
//                       {formatDate(image.uploadedAt)}
//                     </td>
//                     <td className="py-3 px-4">
//                       <div className="flex items-center gap-2">
//                         <button
//                           onClick={() => setPreviewImage(image.src)}
//                           className="p-2 text-gray-400 hover:text-emerald-500 transition-colors rounded-lg hover:bg-emerald-50"
//                           title="Preview"
//                         >
//                           <Eye className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => {
//                             setEditImageId(image.id);
//                             setNewImage({
//                               title: image.title,
//                               description: image.description || "",
//                               category: image.category,
//                               image: null
//                             });
//                             setShowUploadModal(true);
//                           }}
//                           className="p-2 text-gray-400 hover:text-blue-500 transition-colors rounded-lg hover:bg-blue-50"
//                           title="Edit"
//                         >
//                           <Edit className="w-4 h-4" />
//                         </button>
//                         <button
//                           onClick={() => toggleImageSelection(image.id)}
//                           className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-4 h-4" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>

//       {/* Upload Modal */}
//       <AnimatePresence>
//         {showUploadModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
//             onClick={() => setShowUploadModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     {editImageId ? 'Edit Image' : 'Upload New Image'}
//                   </h3>
//                   <button
//                     onClick={() => setShowUploadModal(false)}
//                     className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <X className="w-5 h-5 text-gray-500" />
//                   </button>
//                 </div>

//                 <form onSubmit={handleImageUpload}>
//                   {/* Image Upload */}
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Image File
//                     </label>
//                     <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors">
//                       {newImage.image ? (
//                         <div className="space-y-4">
//                           <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden bg-gray-100">
//                             <img
//                               src={URL.createObjectURL(newImage.image)}
//                               alt="Preview"
//                               className="w-full h-full object-cover"
//                             />
//                           </div>
//                           <p className="text-sm text-gray-600">{newImage.image.name}</p>
//                           <button
//                             type="button"
//                             onClick={() => setNewImage({...newImage, image: null})}
//                             className="text-sm text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       ) : (
//                         <div>
//                           <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
//                           <p className="text-sm text-gray-600 mb-2">Drag & drop or click to upload</p>
//                           <p className="text-xs text-gray-500">JPG, PNG, GIF, WEBP (max 10MB)</p>
//                           <input
//                             type="file"
//                             accept="image/*"
//                             onChange={(e) => {
//                               const file = e.target.files?.[0];
//                               if (file) {
//                                 setNewImage({...newImage, image: file});
//                               }
//                             }}
//                             className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>

//                   {/* Title */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Title *
//                     </label>
//                     <input
//                       type="text"
//                       value={newImage.title}
//                       onChange={(e) => setNewImage({...newImage, title: e.target.value})}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//                       placeholder="Enter image title"
//                       required
//                     />
//                   </div>

//                   {/* Description */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Description
//                     </label>
//                     <textarea
//                       value={newImage.description}
//                       onChange={(e) => setNewImage({...newImage, description: e.target.value})}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//                       placeholder="Enter image description"
//                       rows={3}
//                     />
//                   </div>

//                   {/* Category */}
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Category *
//                     </label>
//                     <select
//                       value={newImage.category}
//                       onChange={(e) => setNewImage({...newImage, category: e.target.value})}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//                       required
//                     >
//                       <option value="">Select a category</option>
//                       {categories.map(category => (
//                         <option key={category.id} value={category.name}>
//                           {category.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={uploading || !newImage.image}
//                     className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
//                       uploading || !newImage.image
//                         ? 'bg-gray-300 cursor-not-allowed'
//                         : 'bg-emerald-500 hover:bg-emerald-600 text-white'
//                     }`}
//                   >
//                     {uploading ? (
//                       <span className="flex items-center justify-center gap-2">
//                         <Loader2 className="w-4 h-4 animate-spin" />
//                         {editImageId ? 'Updating...' : 'Uploading...'}
//                       </span>
//                     ) : editImageId ? (
//                       'Update Image'
//                     ) : (
//                       'Upload Image'
//                     )}
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Category Modal */}
//       <AnimatePresence>
//         {showCategoryModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
//             onClick={() => setShowCategoryModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.95, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.95, opacity: 0 }}
//               className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-bold text-gray-900">Add New Category</h3>
//                   <button
//                     onClick={() => setShowCategoryModal(false)}
//                     className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
//                   >
//                     <X className="w-5 h-5 text-gray-500" />
//                   </button>
//                 </div>

//                 <form onSubmit={handleCreateCategory}>
//                   {/* Category Name */}
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Category Name *
//                     </label>
//                     <input
//                       type="text"
//                       value={newCategory.name}
//                       onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
//                       className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
//                       placeholder="e.g., Weddings, Events"
//                       required
//                     />
//                   </div>

//                   {/* Color Selection */}
//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Color
//                     </label>
//                     <div className="grid grid-cols-4 gap-2">
//                       {colorOptions.map(color => (
//                         <button
//                           key={color.value}
//                           type="button"
//                           onClick={() => setNewCategory({...newCategory, color: color.value})}
//                           className={`p-3 rounded-lg border-2 transition-all ${
//                             newCategory.color === color.value
//                               ? 'border-emerald-500 ring-2 ring-emerald-500/20'
//                               : 'border-gray-200 hover:border-gray-300'
//                           }`}
//                         >
//                           <div className={`w-8 h-8 rounded-full ${color.colorClass} mx-auto`} />
//                           <p className="text-xs mt-2 text-gray-600">{color.label}</p>
//                         </button>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors font-medium"
//                   >
//                     Create Category
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Preview Modal */}
//       <AnimatePresence>
//         {previewImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
//             onClick={() => setPreviewImage(null)}
//           >
//             <button
//               onClick={() => setPreviewImage(null)}
//               className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
//             >
//               <X className="w-5 h-5 text-white" />
//             </button>
            
//             <div className="max-w-4xl max-h-[85vh]">
//               <img
//                 src={previewImage}
//                 alt="Preview"
//                 className="max-w-full max-h-[85vh] object-contain rounded-lg"
//               />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default GalleryAdmin;






import React, { useState, useEffect } from "react";
import { 
  Upload, 
  Image as ImageIcon, 
  Trash2, 
  Eye, 
  Check, 
  X, 
  Plus, 
  Search,
  Tag,
  Loader2,
  AlertCircle,
  Grid,
  List,
  Filter,
  Calendar,
  Edit
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_URL } from "../config"; // Import the BASE_URL

interface GalleryImage {
  id: number;
  src: string;
  category: string;
  title: string;
  description?: string;
  uploadedAt?: string;
}

interface Category {
  id: number;
  name: string;
  color: string;
  imageCount: number;
}

const GalleryAdmin: React.FC = () => {
  // State management
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Form state
  const [newImage, setNewImage] = useState({
    title: "",
    description: "",
    category: "",
    image: null as File | null
  });
  
  const [newCategory, setNewCategory] = useState({
    name: "",
    color: "bg-emerald-500"
  });
  
  // UI state
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [editImageId, setEditImageId] = useState<number | null>(null);
  
  // Color options for categories
  const colorOptions = [
    { value: "bg-pink-500", label: "Pink", colorClass: "bg-pink-500" },
    { value: "bg-blue-500", label: "Blue", colorClass: "bg-blue-500" },
    { value: "bg-emerald-500", label: "Emerald", colorClass: "bg-emerald-500" },
    { value: "bg-purple-500", label: "Purple", colorClass: "bg-purple-500" },
    { value: "bg-amber-500", label: "Amber", colorClass: "bg-amber-500" },
    { value: "bg-red-500", label: "Red", colorClass: "bg-red-500" },
    { value: "bg-indigo-500", label: "Indigo", colorClass: "bg-indigo-500" },
    { value: "bg-cyan-500", label: "Cyan", colorClass: "bg-cyan-500" }
  ];

  // Fetch gallery data
  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch categories
      const categoriesResponse = await fetch(`${BASE_URL}/api/gallery-categories`);
      const categoriesData = await categoriesResponse.json();
      
      if (categoriesData.success) {
        setCategories(categoriesData.data);
      }
      
      // Fetch images
      const imagesResponse = await fetch(`${BASE_URL}/api/gallery-images`);
      const imagesData = await imagesResponse.json();
      
      if (imagesData.success) {
        setImages(imagesData.data);
      } else {
        throw new Error(imagesData.message || 'Failed to fetch images');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load gallery data');
      console.error('Error fetching gallery data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);

  // Handle image upload
  const handleImageUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newImage.image) {
      setError("Please select an image to upload");
      return;
    }
    
    if (!newImage.title.trim()) {
      setError("Please enter a title for the image");
      return;
    }
    
    if (!newImage.category) {
      setError("Please select a category");
      return;
    }
    
    setUploading(true);
    setError(null);
    
    const formData = new FormData();
    formData.append('image', newImage.image);
    formData.append('title', newImage.title);
    formData.append('description', newImage.description);
    formData.append('category', newImage.category);
    
    try {
      const response = await fetch(`${BASE_URL}/api/gallery-images`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccessMessage('Image uploaded successfully!');
        setNewImage({
          title: "",
          description: "",
          category: "",
          image: null
        });
        setShowUploadModal(false);
        fetchGalleryData(); // Refresh the list
        
        // Clear success message after 3 seconds
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setError(data.message || 'Failed to upload image');
      }
    } catch (err) {
      setError('Error uploading image. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
    }
  };

  // Handle bulk delete
  const handleBulkDelete = async () => {
    if (selectedImages.length === 0) {
      setError("No images selected for deletion");
      return;
    }
    
    if (!window.confirm(`Are you sure you want to delete ${selectedImages.length} image(s)? This action cannot be undone.`)) {
      return;
    }
    
    try {
      const response = await fetch(`${BASE_URL}/api/gallery-images/bulk`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ imageIds: selectedImages })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccessMessage(data.message || `${selectedImages.length} image(s) deleted successfully`);
        setSelectedImages([]);
        fetchGalleryData();
        
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setError(data.message || 'Failed to delete images');
      }
    } catch (err) {
      setError('Error deleting images. Please try again.');
      console.error('Delete error:', err);
    }
  };

  // Handle category creation
  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCategory.name.trim()) {
      setError("Please enter a category name");
      return;
    }
    
    try {
      const response = await fetch(`${BASE_URL}/api/gallery-categories`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccessMessage('Category created successfully!');
        setNewCategory({ name: "", color: "bg-emerald-500" });
        setShowCategoryModal(false);
        fetchGalleryData();
        
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setError(data.message || 'Failed to create category');
      }
    } catch (err) {
      setError('Error creating category. Please try again.');
      console.error('Category creation error:', err);
    }
  };

  // Handle category deletion
  const handleDeleteCategory = async (categoryId: number) => {
    if (!window.confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
      return;
    }
    
    try {
      const response = await fetch(`${BASE_URL}/api/gallery-categories/${categoryId}`, {
        method: 'DELETE'
      });
      
      const data = await response.json();
      
      if (data.success) {
        setSuccessMessage('Category deleted successfully!');
        fetchGalleryData();
        
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setError(data.message || 'Failed to delete category');
      }
    } catch (err) {
      setError('Error deleting category. Please try again.');
      console.error('Category deletion error:', err);
    }
  };

  // Filter images based on search and category
  const filteredImages = images.filter(image => {
    const matchesCategory = filterCategory === "All" || image.category === filterCategory;
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle image selection
  const toggleImageSelection = (id: number) => {
    setSelectedImages(prev =>
      prev.includes(id)
        ? prev.filter(imgId => imgId !== id)
        : [...prev, id]
    );
  };

  // Handle select all
  const toggleSelectAll = () => {
    if (selectedImages.length === filteredImages.length) {
      setSelectedImages([]);
    } else {
      setSelectedImages(filteredImages.map(img => img.id));
    }
  };

  // Format date
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Get category color
  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.name === category);
    return cat?.color || "bg-emerald-500";
  };

  // Clear messages
  const clearMessages = () => {
    setError(null);
    setSuccessMessage(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading gallery data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50/30 p-4 md:p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Gallery Management</h1>
            <p className="text-gray-600 mt-2">Upload, organize, and manage your gallery images</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowUploadModal(true)}
              className="flex items-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors duration-300 font-medium"
            >
              <Upload className="w-4 h-4" />
              Upload Image
            </button>
            
            <button
              onClick={() => setShowCategoryModal(true)}
              className="flex items-center gap-2 px-4 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors duration-300 font-medium"
            >
              <Tag className="w-4 h-4" />
              Add Category
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto mb-4"
          >
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <p className="text-red-700">{error}</p>
              </div>
              <button
                onClick={clearMessages}
                className="text-red-500 hover:text-red-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
        
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-7xl mx-auto mb-4"
          >
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-500" />
                <p className="text-emerald-700">{successMessage}</p>
              </div>
              <button
                onClick={clearMessages}
                className="text-emerald-500 hover:text-emerald-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Images</p>
              <p className="text-2xl font-bold text-gray-900">{images.length}</p>
            </div>
            <div className="p-3 bg-emerald-50 rounded-lg">
              <ImageIcon className="w-6 h-6 text-emerald-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Categories</p>
              <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Tag className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Selected</p>
              <p className="text-2xl font-bold text-gray-900">{selectedImages.length}</p>
            </div>
            <div className="p-3 bg-amber-50 rounded-lg">
              <Check className="w-6 h-6 text-amber-500" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Filtered</p>
              <p className="text-2xl font-bold text-gray-900">{filteredImages.length}</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Filter className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">Categories</h2>
          <button
            onClick={() => setShowCategoryModal(true)}
            className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium"
          >
            <Plus className="w-4 h-4" />
            Add New
          </button>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map(category => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${category.color}`}>
                  {category.name}
                </span>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete category"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <p className="text-xs text-gray-500">
                {category.imageCount} image{category.imageCount !== 1 ? 's' : ''}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Controls */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search images..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>
          
          {/* Filter and View Controls */}
          <div className="flex items-center gap-4">
            {/* Category Filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            >
              <option value="All">All Categories</option>
              {categories.map(category => (
                <option key={category.id} value={category.name}>
                  {category.name} ({category.imageCount})
                </option>
              ))}
            </select>
            
            {/* View Mode */}
            <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded ${viewMode === "grid" ? "bg-white shadow-sm" : "hover:bg-gray-100"}`}
                title="Grid View"
              >
                <Grid className={`w-4 h-4 ${viewMode === "grid" ? "text-emerald-500" : "text-gray-400"}`} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded ${viewMode === "list" ? "bg-white shadow-sm" : "hover:bg-gray-100"}`}
                title="List View"
              >
                <List className={`w-4 h-4 ${viewMode === "list" ? "text-emerald-500" : "text-gray-400"}`} />
              </button>
            </div>
            
            {/* Bulk Actions */}
            {selectedImages.length > 0 && (
              <button
                onClick={handleBulkDelete}
                className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                <Trash2 className="w-4 h-4" />
                Delete Selected ({selectedImages.length})
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto">
        {/* Select All */}
        {filteredImages.length > 0 && (
          <div className="mb-4 flex items-center gap-3">
            <input
              type="checkbox"
              id="selectAll"
              checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
              onChange={toggleSelectAll}
              className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
            />
            <label htmlFor="selectAll" className="text-sm text-gray-600">
              Select all {filteredImages.length} images
            </label>
          </div>
        )}

        {/* Images Grid/List */}
        {filteredImages.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">No images found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or upload new images</p>
            <button
              onClick={() => setShowUploadModal(true)}
              className="mt-6 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-medium"
            >
              Upload Your First Image
            </button>
          </div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Selection Overlay */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    selectedImages.includes(image.id) 
                      ? 'bg-emerald-500/20' 
                      : 'bg-black/0 hover:bg-black/10'
                  }`}>
                    <input
                      type="checkbox"
                      checked={selectedImages.includes(image.id)}
                      onChange={() => toggleImageSelection(image.id)}
                      className="w-5 h-5 text-emerald-500 rounded border-gray-300 shadow-sm"
                    />
                  </div>
                  
                  {/* Preview Button */}
                  <button
                    onClick={() => setPreviewImage(image.src)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    title="Preview"
                  >
                    <Eye className="w-4 h-4 text-gray-700" />
                  </button>
                </div>
                
                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 truncate">{image.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(image.category)}`}>
                      {image.category}
                    </span>
                  </div>
                  
                  {image.description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{image.description}</p>
                  )}
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {formatDate(image.uploadedAt)}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          // Set edit mode
                          setEditImageId(image.id);
                          setNewImage({
                            title: image.title,
                            description: image.description || "",
                            category: image.category,
                            image: null
                          });
                          setShowUploadModal(true);
                        }}
                        className="text-gray-400 hover:text-emerald-500 transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => toggleImageSelection(image.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* List View */
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="py-3 px-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedImages.length === filteredImages.length && filteredImages.length > 0}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
                    />
                  </th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Image</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Title</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Category</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Uploaded</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredImages.map(image => (
                  <tr key={image.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="py-3 px-4">
                      <input
                        type="checkbox"
                        checked={selectedImages.includes(image.id)}
                        onChange={() => toggleImageSelection(image.id)}
                        className="w-4 h-4 text-emerald-500 rounded focus:ring-emerald-500 border-gray-300"
                      />
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium text-gray-900">{image.title}</p>
                        {image.description && (
                          <p className="text-sm text-gray-600 truncate max-w-xs">{image.description}</p>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(image.category)}`}>
                        {image.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">
                      {formatDate(image.uploadedAt)}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setPreviewImage(image.src)}
                          className="p-2 text-gray-400 hover:text-emerald-500 transition-colors rounded-lg hover:bg-emerald-50"
                          title="Preview"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => {
                            setEditImageId(image.id);
                            setNewImage({
                              title: image.title,
                              description: image.description || "",
                              category: image.category,
                              image: null
                            });
                            setShowUploadModal(true);
                          }}
                          className="p-2 text-gray-400 hover:text-blue-500 transition-colors rounded-lg hover:bg-blue-50"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleImageSelection(image.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowUploadModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {editImageId ? 'Edit Image' : 'Upload New Image'}
                  </h3>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleImageUpload}>
                  {/* Image Upload */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Image File
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-emerald-500 transition-colors">
                      {newImage.image ? (
                        <div className="space-y-4">
                          <div className="relative w-32 h-32 mx-auto rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={URL.createObjectURL(newImage.image)}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-sm text-gray-600">{newImage.image.name}</p>
                          <button
                            type="button"
                            onClick={() => setNewImage({...newImage, image: null})}
                            className="text-sm text-red-500 hover:text-red-700"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div>
                          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                          <p className="text-sm text-gray-600 mb-2">Drag & drop or click to upload</p>
                          <p className="text-xs text-gray-500">JPG, PNG, GIF, WEBP (max 10MB)</p>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                setNewImage({...newImage, image: file});
                              }
                            }}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={newImage.title}
                      onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter image title"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      value={newImage.description}
                      onChange={(e) => setNewImage({...newImage, description: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Enter image description"
                      rows={3}
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      value={newImage.category}
                      onChange={(e) => setNewImage({...newImage, category: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select a category</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={uploading || !newImage.image}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                      uploading || !newImage.image
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    {uploading ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {editImageId ? 'Updating...' : 'Uploading...'}
                      </span>
                    ) : editImageId ? (
                      'Update Image'
                    ) : (
                      'Upload Image'
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category Modal */}
      <AnimatePresence>
        {showCategoryModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setShowCategoryModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Add New Category</h3>
                  <button
                    onClick={() => setShowCategoryModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <form onSubmit={handleCreateCategory}>
                  {/* Category Name */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category Name *
                    </label>
                    <input
                      type="text"
                      value={newCategory.name}
                      onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="e.g., Weddings, Events"
                      required
                    />
                  </div>

                  {/* Color Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Color
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {colorOptions.map(color => (
                        <button
                          key={color.value}
                          type="button"
                          onClick={() => setNewCategory({...newCategory, color: color.value})}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            newCategory.color === color.value
                              ? 'border-emerald-500 ring-2 ring-emerald-500/20'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full ${color.colorClass} mx-auto`} />
                          <p className="text-xs mt-2 text-gray-600">{color.label}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-900 transition-colors font-medium"
                  >
                    Create Category
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            <div className="max-w-4xl max-h-[85vh]">
              <img
                src={previewImage}
                alt="Preview"
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryAdmin;