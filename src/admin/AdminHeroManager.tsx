// import React, { useState, useEffect } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X } from 'lucide-react';
// import { BASE_URL } from '../config';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       const data = await response.json();
//       setHeroVideos(data);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         await fetchHeroContent();
//         setIsAdding(false);
//       }
//     } catch (error) {
//       console.error('Error adding video:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (response.ok) {
//         await fetchHeroContent();
//         setEditingVideo(null);
//       }
//     } catch (error) {
//       console.error('Error updating video:', error);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           await fetchHeroContent();
//         }
//       } catch (error) {
//         console.error('Error deleting video:', error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Manage Hero Section</h1>
//         <button
//           onClick={() => setIsAdding(true)}
//           className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add Video
//         </button>
//       </div>

//       {/* Add/Edit Form */}
//       {(isAdding || editingVideo) && (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6">
//           <h2 className="text-xl font-semibold mb-4">
//             {isAdding ? 'Add New Hero Video' : 'Edit Hero Video'}
//           </h2>
//           <form
//             onSubmit={async (e) => {
//               e.preventDefault();
//               const formData = new FormData(e.currentTarget);
              
//               if (isAdding) {
//                 await handleAddVideo(formData);
//               } else if (editingVideo) {
//                 await handleUpdateVideo(editingVideo.id, formData);
//               }
//             }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Title</label>
//                 <input
//                   type="text"
//                   name="title"
//                   defaultValue={editingVideo?.title}
//                   className="w-full border rounded-lg px-3 py-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Subtitle</label>
//                 <input
//                   type="text"
//                   name="subtitle"
//                   defaultValue={editingVideo?.subtitle}
//                   className="w-full border rounded-lg px-3 py-2"
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Display Order</label>
//                 <input
//                   type="number"
//                   name="display_order"
//                   defaultValue={editingVideo?.display_order || 0}
//                   className="w-full border rounded-lg px-3 py-2"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Video File</label>
//                 <input
//                   type="file"
//                   name="video"
//                   accept="video/*"
//                   className="w-full border rounded-lg px-3 py-2"
//                   required={isAdding}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 disabled={uploading}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
//               >
//                 <Save className="w-4 h-4 mr-2" />
//                 {uploading ? 'Uploading...' : 'Save'}
//               </button>
//               <button
//                 type="button"
//                 onClick={() => {
//                   setIsAdding(false);
//                   setEditingVideo(null);
//                 }}
//                 className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center"
//               >
//                 <X className="w-4 h-4 mr-2" />
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Videos List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {heroVideos.map((video) => (
//           <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <div className="relative aspect-video bg-gray-200">
//               <video
//                 src={`${BASE_URL}${video.video_url}`}
//                 className="w-full h-full object-cover"
//                 muted
//                 loop
//                 playsInline
//               />
//               <div className="absolute top-2 right-2 flex gap-1">
//                 <button
//                   onClick={() => setEditingVideo(video)}
//                   className="bg-blue-600 text-white p-1 rounded"
//                 >
//                   <Edit className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={() => handleDeleteVideo(video.id)}
//                   className="bg-red-600 text-white p-1 rounded"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4">
//               <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
//               <p className="text-gray-600 text-sm mb-2">{video.subtitle}</p>
//               <div className="flex justify-between text-xs text-gray-500">
//                 <span>Order: {video.display_order}</span>
//                 <span>{video.is_active ? 'Active' : 'Inactive'}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminHeroManager;





// import React, { useState, useEffect } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//     } catch (error) {
//       console.error('Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setError(null);
//   };

//   if (loading) {
//     return (
//       <div className="p-6 flex justify-center items-center h-64">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading hero content...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//     <AdminNavbar />
//     <div className="p-6">
//       {/* Success/Error Messages */}
//       {error && (
//         <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//           <AlertCircle className="w-5 h-5 mr-2" />
//           {error}
//         </div>
//       )}
      
//       {success && (
//         <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//           {success}
//         </div>
//       )}

//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold">Manage Hero Section</h1>
//         <button
//           onClick={() => setIsAdding(true)}
//           className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//         >
//           <Plus className="w-4 h-4 mr-2" />
//           Add Video
//         </button>
//       </div>

//       {/* Add/Edit Form */}
//       {(isAdding || editingVideo) && (
//         <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//           <h2 className="text-xl font-semibold mb-4">
//             {isAdding ? 'Add New Hero Video' : 'Edit Hero Video'}
//           </h2>
          
//           {/* File size warning */}
//           <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//             <p className="text-sm text-yellow-800">
//               <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//             </p>
//           </div>

//           <form
//             onSubmit={async (e) => {
//               e.preventDefault();
//               const formData = new FormData(e.currentTarget);
              
//               if (isAdding) {
//                 await handleAddVideo(formData);
//               } else if (editingVideo) {
//                 await handleUpdateVideo(editingVideo.id, formData);
//               }
//             }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                 <input
//                   type="text"
//                   name="title"
//                   defaultValue={editingVideo?.title}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                   placeholder="Enter video title"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                 <input
//                   type="text"
//                   name="subtitle"
//                   defaultValue={editingVideo?.subtitle}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   required
//                   placeholder="Enter video subtitle"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                 <input
//                   type="number"
//                   name="display_order"
//                   defaultValue={editingVideo?.display_order || 0}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   min="0"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium mb-2 text-gray-700">
//                   Video File {isAdding && '*'}
//                 </label>
//                 <input
//                   type="file"
//                   name="video"
//                   accept="video/*"
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                   required={isAdding}
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <button
//                 type="submit"
//                 disabled={uploading}
//                 className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Save className="w-4 h-4 mr-2" />
//                 {uploading ? 'Uploading...' : 'Save'}
//               </button>
//               <button
//                 type="button"
//                 onClick={clearForm}
//                 className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <X className="w-4 h-4 mr-2" />
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* Videos List */}
//       {heroVideos.length === 0 ? (
//         <div className="bg-white rounded-lg shadow-md p-8 text-center">
//           <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No hero videos yet</h3>
//           <p className="text-gray-500 mb-4">Add your first hero video to get started.</p>
//           <button
//             onClick={() => setIsAdding(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center mx-auto"
//           >
//             <Plus className="w-4 h-4 mr-2" />
//             Add First Video
//           </button>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {heroVideos.map((video) => (
//             <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//               <div className="relative aspect-video bg-gray-200">
//                 <video
//                   src={`${BASE_URL}${video.video_url}`}
//                   className="w-full h-full object-cover"
//                   muted
//                   loop
//                   playsInline
//                 />
//                 <div className="absolute top-2 right-2 flex gap-1">
//                   <button
//                     onClick={() => setEditingVideo(video)}
//                     className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                     title="Edit"
//                   >
//                     <Edit className="w-4 h-4" />
//                   </button>
//                   <button
//                     onClick={() => handleDeleteVideo(video.id)}
//                     className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                     title="Delete"
//                   >
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                 <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                 <div className="flex justify-between text-xs text-gray-500">
//                   <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                   <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                     {video.is_active ? 'Active' : 'Inactive'}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default AdminHeroManager;




// import React, { useState, useEffect } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//     } catch (error) {
//       console.error('Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setError(null);
//   };

//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading hero content...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Success/Error Messages */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
//               <p className="text-gray-600">
//                 {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={() => setIsAdding(true)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Video
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingVideo) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isAdding ? 'Add New Hero Video' : 'Edit Hero Video'}
//               </h2>
              
//               {/* File size warning */}
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//                 </p>
//               </div>

//               <form
//                 onSubmit={async (e) => {
//                   e.preventDefault();
//                   const formData = new FormData(e.currentTarget);
                  
//                   if (isAdding) {
//                     await handleAddVideo(formData);
//                   } else if (editingVideo) {
//                     await handleUpdateVideo(editingVideo.id, formData);
//                   }
//                 }}
//               >
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingVideo?.title}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video title"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       defaultValue={editingVideo?.subtitle}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video subtitle"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingVideo?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Video File {isAdding && '*'}
//                     </label>
//                     <input
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     disabled={uploading}
//                     className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <Save className="w-4 h-4 mr-2" />
//                     {uploading ? 'Uploading...' : 'Save'}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={clearForm}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Videos List */}
//           {heroVideos.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
//               <p className="text-gray-500">Add your first hero video to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {heroVideos.map((video) => (
//                 <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <video
//                       src={`${BASE_URL}${video.video_url}`}
//                       className="w-full h-full object-cover"
//                       muted
//                       loop
//                       playsInline
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingVideo(video)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteVideo(video.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {video.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminHeroManager;




// import React, { useState, useEffect } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       console.log('🔄 Starting update for video ID:', id);
//       console.log('📝 FormData contents:');
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value instanceof File ? `File: ${value.name} (${value.type}, ${value.size} bytes)` : value);
//       }

//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log('📨 Update response:', result);

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//     } catch (error) {
//       console.error('❌ Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setError(null);
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     const form = e.currentTarget;
//     const formData = new FormData(form);
    
//     // Add is_active field for updates
//     if (editingVideo) {
//       formData.append('is_active', 'true');
//     }

//     // Get the file input
//     const videoInput = form.querySelector('input[name="video"]') as HTMLInputElement;
//     const videoFile = videoInput?.files?.[0];

//     console.log('🎯 Form submission details:');
//     console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
//     console.log('Video file selected:', videoFile ? `Yes - ${videoFile.name}` : 'No');
//     console.log('Form data entries:');
//     for (let [key, value] of formData.entries()) {
//       console.log(`  ${key}:`, value instanceof File ? `File: ${value.name}` : value);
//     }

//     if (isAdding) {
//       if (!videoFile) {
//         showMessage('Please select a video file for new uploads', true);
//         return;
//       }
//       await handleAddVideo(formData);
//     } else if (editingVideo) {
//       await handleUpdateVideo(editingVideo.id, formData);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading hero content...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Success/Error Messages */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
//               <p className="text-gray-600">
//                 {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={() => setIsAdding(true)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Video
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingVideo) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isAdding ? 'Add New Hero Video' : `Edit Video: ${editingVideo?.title}`}
//               </h2>
              
//               {/* File size warning */}
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//                   {editingVideo && " Leave video file empty to keep the existing video."}
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} noValidate>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingVideo?.title}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video title"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       defaultValue={editingVideo?.subtitle}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video subtitle"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingVideo?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Video File {isAdding ? '*' : '(Optional)'}
//                     </label>
//                     <input
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                     {editingVideo && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500">
//                           Current video: <strong>{editingVideo.video_url.split('/').pop()}</strong>
//                         </p>
//                         <div className="mt-1">
//                           <video
//                             src={`${BASE_URL}${editingVideo.video_url}`}
//                             className="w-32 h-20 object-cover rounded border"
//                             muted
//                             playsInline
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     disabled={uploading}
//                     className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <Save className="w-4 h-4 mr-2" />
//                     {uploading ? 'Uploading...' : (editingVideo ? 'Update Video' : 'Save Video')}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={clearForm}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Videos List */}
//           {heroVideos.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
//               <p className="text-gray-500">Add your first hero video to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {heroVideos.map((video) => (
//                 <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <video
//                       src={`${BASE_URL}${video.video_url}`}
//                       className="w-full h-full object-cover"
//                       muted
//                       loop
//                       playsInline
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingVideo(video)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteVideo(video.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {video.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminHeroManager;




// import React, { useState, useEffect } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [videoFile, setVideoFile] = useState<File | null>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//       setVideoFile(null);
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       console.log('🔄 Starting update for video ID:', id);
//       console.log('📝 FormData contents:');
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value instanceof File ? `File: ${value.name} (${value.type}, ${value.size} bytes)` : value);
//       }

//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log('📨 Update response:', result);

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//       setVideoFile(null);
//     } catch (error) {
//       console.error('❌ Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setVideoFile(null);
//     setError(null);
//   };

//   const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setVideoFile(file);
//     console.log('Video file selected:', file ? `${file.name} (${file.size} bytes)` : 'None');
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     const form = e.currentTarget;
//     const formData = new FormData(form);
    
//     // Manually add the video file to FormData if one is selected
//     if (videoFile) {
//       formData.set('video', videoFile);
//     }
    
//     // Add is_active field for updates
//     if (editingVideo) {
//       formData.append('is_active', 'true');
//     }

//     console.log('🎯 Form submission details:');
//     console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
//     console.log('Video file in FormData:', videoFile ? `Yes - ${videoFile.name}` : 'No');
//     console.log('Form data entries:');
//     for (let [key, value] of formData.entries()) {
//       console.log(`  ${key}:`, value instanceof File ? `File: ${value.name}` : value);
//     }

//     if (isAdding) {
//       if (!videoFile) {
//         showMessage('Please select a video file for new uploads', true);
//         return;
//       }
//       await handleAddVideo(formData);
//     } else if (editingVideo) {
//       await handleUpdateVideo(editingVideo.id, formData);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading hero content...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Success/Error Messages */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
//               <p className="text-gray-600">
//                 {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={() => setIsAdding(true)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Video
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingVideo) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isAdding ? 'Add New Hero Video' : `Edit Video: ${editingVideo?.title}`}
//               </h2>
              
//               {/* File size warning */}
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//                   {editingVideo && " Leave video file empty to keep the existing video."}
//                 </p>
//                 {videoFile && (
//                   <p className="text-sm text-green-800 mt-1">
//                     <strong>Selected:</strong> {videoFile.name} ({(videoFile.size / (1024 * 1024)).toFixed(2)} MB)
//                   </p>
//                 )}
//               </div>

//               <form onSubmit={handleSubmit} noValidate>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingVideo?.title}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video title"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       defaultValue={editingVideo?.subtitle}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video subtitle"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingVideo?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Video File {isAdding ? '*' : '(Optional)'}
//                     </label>
//                     <input
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       onChange={handleVideoFileChange}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                     {editingVideo && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500">
//                           Current video: <strong>{editingVideo.video_url.split('/').pop()}</strong>
//                         </p>
//                         <div className="mt-1">
//                           <video
//                             src={`${BASE_URL}${editingVideo.video_url}`}
//                             className="w-32 h-20 object-cover rounded border"
//                             muted
//                             playsInline
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     disabled={uploading}
//                     className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <Save className="w-4 h-4 mr-2" />
//                     {uploading ? 'Uploading...' : (editingVideo ? 'Update Video' : 'Save Video')}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={clearForm}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Videos List */}
//           {heroVideos.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
//               <p className="text-gray-500">Add your first hero video to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {heroVideos.map((video) => (
//                 <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <video
//                       src={`${BASE_URL}${video.video_url}`}
//                       className="w-full h-full object-cover"
//                       muted
//                       loop
//                       playsInline
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingVideo(video)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteVideo(video.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {video.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminHeroManager;




// import React, { useState, useEffect, useRef } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       console.log('🔄 Starting update for video ID:', id);
//       console.log('📝 FormData contents:');
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value instanceof File ? `File: ${value.name} (${value.type}, ${value.size} bytes)` : value);
//       }

//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log('📨 Update response:', result);

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//     } catch (error) {
//       console.error('❌ Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setError(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   // Handle form submission
// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
    
// //     const form = e.currentTarget;
// //     const formData = new FormData(form);
    
// //     // Add is_active field for updates
// //     if (editingVideo) {
// //       formData.append('is_active', 'true');
// //     }

// //     // Get the file input directly from the form
// //     const videoInput = form.querySelector('input[name="video"]') as HTMLInputElement;
// //     const videoFile = videoInput?.files?.[0];

// //     console.log('🎯 Form submission details:');
// //     console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
// //     console.log('Video file selected:', videoFile ? `Yes - ${videoFile.name}` : 'No');
// //     console.log('Form data entries:');
// //     for (let [key, value] of formData.entries()) {
// //       console.log(`  ${key}:`, value instanceof File ? `File: ${value.name}` : value);
// //     }

// //     if (isAdding) {
// //       if (!videoFile) {
// //         showMessage('Please select a video file for new uploads', true);
// //         return;
// //       }
// //       await handleAddVideo(formData);
// //     } else if (editingVideo) {
// //       await handleUpdateVideo(editingVideo.id, formData);
// //     }
// //   };
// // In the handleSubmit function, add this:
// const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
  
//   const form = e.currentTarget;
//   const formData = new FormData(form);
  
//   // Add is_active field for updates
//   if (editingVideo) {
//     formData.append('is_active', 'true');
//   }

//   // Get the file input directly from the form
//   const videoInput = form.querySelector('input[name="video"]') as HTMLInputElement;
//   const videoFile = videoInput?.files?.[0];

//   console.log('🎯 Form submission details:');
//   console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
//   console.log('Video file selected:', videoFile ? `Yes - ${videoFile.name} (${videoFile.size} bytes)` : 'No');
//   console.log('Form data entries:');
//   for (let [key, value] of formData.entries()) {
//     console.log(`  ${key}:`, value instanceof File ? `File: ${value.name} (${value.size} bytes)` : value);
//   }

//   // Check if FormData actually contains the file
//   const hasVideoInFormData = formData.get('video') instanceof File;
//   console.log('📁 Video in FormData:', hasVideoInFormData ? 'YES' : 'NO');

//   if (isAdding) {
//     if (!videoFile) {
//       showMessage('Please select a video file for new uploads', true);
//       return;
//     }
//     await handleAddVideo(formData);
//   } else if (editingVideo) {
//     await handleUpdateVideo(editingVideo.id, formData);
//   }
// };
//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading hero content...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Success/Error Messages */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
//               <p className="text-gray-600">
//                 {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={() => setIsAdding(true)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Video
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingVideo) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isAdding ? 'Add New Hero Video' : `Edit Video: ${editingVideo?.title}`}
//               </h2>
              
//               {/* File size warning */}
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//                   {editingVideo && " Leave video file empty to keep the existing video."}
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingVideo?.title}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video title"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       defaultValue={editingVideo?.subtitle}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video subtitle"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingVideo?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Video File {isAdding ? '*' : '(Optional)'}
//                     </label>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                     {editingVideo && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500">
//                           Current video: <strong>{editingVideo.video_url.split('/').pop()}</strong>
//                         </p>
//                         <div className="mt-1">
//                           <video
//                             src={`${BASE_URL}${editingVideo.video_url}`}
//                             className="w-32 h-20 object-cover rounded border"
//                             muted
//                             playsInline
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     disabled={uploading}
//                     className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <Save className="w-4 h-4 mr-2" />
//                     {uploading ? 'Uploading...' : (editingVideo ? 'Update Video' : 'Save Video')}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={clearForm}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Videos List */}
//           {heroVideos.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
//               <p className="text-gray-500">Add your first hero video to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {heroVideos.map((video) => (
//                 <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <video
//                       src={`${BASE_URL}${video.video_url}`}
//                       className="w-full h-full object-cover"
//                       muted
//                       loop
//                       playsInline
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingVideo(video)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteVideo(video.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {video.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminHeroManager;



// import React, { useState, useEffect, useRef } from 'react';
// import { Plus, Edit, Trash2, Video, Upload, Save, X, AlertCircle } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface HeroVideo {
//   id: number;
//   video_url: string;
//   title: string;
//   subtitle: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminHeroManager: React.FC = () => {
//   const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
//   const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     fetchHeroContent();
//   }, []);

//   const fetchHeroContent = async () => {
//     try {
//       setLoading(true);
//       const response = await fetch(`${BASE_URL}/api/hero-content`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch hero content');
//       }
//       const data = await response.json();
//       setHeroVideos(data);
//       setError(null);
//     } catch (error) {
//       console.error('Error fetching hero content:', error);
//       setError('Failed to load hero content');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const showMessage = (message: string, isError = false) => {
//     if (isError) {
//       setError(message);
//       setSuccess(null);
//     } else {
//       setSuccess(message);
//       setError(null);
//     }
//     setTimeout(() => {
//       setError(null);
//       setSuccess(null);
//     }, 5000);
//   };

//   const handleAddVideo = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/hero-content`, {
//         method: 'POST',
//         body: formData,
//       });

//       const result = await response.json();

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to add video');
//       }

//       showMessage('Video added successfully!');
//       await fetchHeroContent();
//       setIsAdding(false);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//     } catch (error) {
//       console.error('Error adding video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateVideo = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       console.log('🔄 Starting update for video ID:', id);
//       console.log('📝 FormData contents:');
//       for (let [key, value] of formData.entries()) {
//         console.log(`${key}:`, value instanceof File ? `File: ${value.name} (${value.type}, ${value.size} bytes)` : value);
//       }

//       const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       const result = await response.json();
//       console.log('📨 Update response:', result);

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to update video');
//       }

//       showMessage('Video updated successfully!');
//       await fetchHeroContent();
//       setEditingVideo(null);
//       if (fileInputRef.current) {
//         fileInputRef.current.value = '';
//       }
//     } catch (error) {
//       console.error('❌ Error updating video:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update video', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteVideo = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this hero video?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete video');
//         }

//         showMessage('Video deleted successfully!');
//         await fetchHeroContent();
//       } catch (error) {
//         console.error('Error deleting video:', error);
//         showMessage('Failed to delete video', true);
//       }
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingVideo(null);
//     setError(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     const form = e.currentTarget;
//     const formData = new FormData(form);
    
//     // Add is_active field for updates
//     if (editingVideo) {
//       formData.append('is_active', 'true');
//     }

//     // Get the file input directly from the form
//     const videoInput = form.querySelector('input[name="video"]') as HTMLInputElement;
//     const videoFile = videoInput?.files?.[0];

//     console.log('🎯 Form submission details:');
//     console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
//     console.log('Video file selected:', videoFile ? `Yes - ${videoFile.name} (${videoFile.size} bytes)` : 'No');
//     console.log('Form data entries:');
//     for (let [key, value] of formData.entries()) {
//       console.log(`  ${key}:`, value instanceof File ? `File: ${value.name} (${value.size} bytes)` : value);
//     }

//     // Check if FormData actually contains the file
//     const hasVideoInFormData = formData.get('video') instanceof File;
//     console.log('📁 Video in FormData:', hasVideoInFormData ? 'YES' : 'NO');

//     if (isAdding) {
//       if (!videoFile) {
//         showMessage('Please select a video file for new uploads', true);
//         return;
//       }
//       await handleAddVideo(formData);
//     } else if (editingVideo) {
//       await handleUpdateVideo(editingVideo.id, formData);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading hero content...</p>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Success/Error Messages */}
//           {error && (
//             <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               {error}
//             </div>
//           )}
          
//           {success && (
//             <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
//               {success}
//             </div>
//           )}

//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
//               <p className="text-gray-600">
//                 {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0">
//               <button
//                 onClick={() => setIsAdding(true)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Video
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingVideo) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <h2 className="text-xl font-semibold mb-4">
//                 {isAdding ? 'Add New Hero Video' : `Edit Video: ${editingVideo?.title}`}
//               </h2>
              
//               {/* File size warning */}
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
//                   {editingVideo && " Leave video file empty to keep the existing video."}
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingVideo?.title}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video title"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
//                     <input
//                       type="text"
//                       name="subtitle"
//                       defaultValue={editingVideo?.subtitle}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter video subtitle"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingVideo?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Video File {isAdding ? '*' : '(Optional)'}
//                     </label>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       name="video"
//                       accept="video/*"
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                     {editingVideo && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500">
//                           Current video: <strong>{editingVideo.video_url.split('/').pop()}</strong>
//                         </p>
//                         <div className="mt-1">
//                           <video
//                             src={`${BASE_URL}${editingVideo.video_url}`}
//                             className="w-32 h-20 object-cover rounded border"
//                             muted
//                             playsInline
//                           />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <div className="flex gap-2">
//                   <button
//                     type="submit"
//                     disabled={uploading}
//                     className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <Save className="w-4 h-4 mr-2" />
//                     {uploading ? 'Uploading...' : (editingVideo ? 'Update Video' : 'Save Video')}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={clearForm}
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//                   >
//                     <X className="w-4 h-4 mr-2" />
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}

//           {/* Videos List */}
//           {heroVideos.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
//               <p className="text-gray-500">Add your first hero video to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {heroVideos.map((video) => (
//                 <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <video
//                       src={`${BASE_URL}${video.video_url}`}
//                       className="w-full h-full object-cover"
//                       muted
//                       loop
//                       playsInline
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingVideo(video)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteVideo(video.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {video.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminHeroManager;




import React, { useState, useEffect, useRef } from 'react';
import { Plus, Edit, Trash2, Video, Save, X, AlertCircle, RefreshCw } from 'lucide-react';
import { BASE_URL } from '../config';
import AdminNavbar from './AdminNavbar';

interface HeroVideo {
  id: number;
  video_url: string;
  title: string;
  subtitle: string;
  display_order: number;
  is_active: boolean;
}

const AdminHeroManager: React.FC = () => {
  const [heroVideos, setHeroVideos] = useState<HeroVideo[]>([]);
  const [editingVideo, setEditingVideo] = useState<HeroVideo | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkServerStatus();
    fetchHeroContent();
  }, []);

  // Check if server is reachable
  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/health`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setServerStatus('online');
      } else {
        setServerStatus('offline');
      }
    } catch (error) {
      console.error('Server status check failed:', error);
      setServerStatus('offline');
    }
  };

  const fetchHeroContent = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🔄 Fetching hero content from:', `${BASE_URL}/api/hero-content`);
      
      const response = await fetch(`${BASE_URL}/api/hero-content`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('📨 Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Hero content loaded:', data.length, 'videos');
      
      setHeroVideos(data);
      setServerStatus('online');
    } catch (error) {
      console.error('❌ Error fetching hero content:', error);
      setError(`Failed to load hero content: ${error.message}`);
      setServerStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  const showMessage = (message: string, isError = false) => {
    if (isError) {
      setError(message);
      setSuccess(null);
    } else {
      setSuccess(message);
      setError(null);
    }
    setTimeout(() => {
      setError(null);
      setSuccess(null);
    }, 5000);
  };

  const handleAddVideo = async (formData: FormData) => {
    try {
      setUploading(true);
      setError(null);
      
      console.log('📤 Adding new video to:', `${BASE_URL}/api/hero-content`);
      
      // Test connection first
      try {
        await checkServerStatus();
        if (serverStatus === 'offline') {
          throw new Error('Server is not reachable. Please check if the backend is running.');
        }
      } catch (error) {
        throw new Error('Cannot connect to server. Make sure the backend is running on port 5000.');
      }

      const response = await fetch(`${BASE_URL}/api/hero-content`, {
        method: 'POST',
        body: formData,
      });

      console.log('📨 Add video response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Server response error:', errorText);
        throw new Error(errorText || `Server returned ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Video added successfully:', result);

      showMessage('Video added successfully!');
      await fetchHeroContent();
      setIsAdding(false);
      resetFileInput();
    } catch (error) {
      console.error('❌ Error adding video:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to add video. Check server connection.';
      showMessage(errorMessage, true);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateVideo = async (id: number, formData: FormData) => {
    try {
      setUploading(true);
      setError(null);
      
      console.log('🔄 Updating video ID:', id, 'at:', `${BASE_URL}/api/hero-content/${id}`);

      const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
        method: 'PUT',
        body: formData,
      });

      console.log('📨 Update response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Server response error:', errorText);
        throw new Error(errorText || `Server returned ${response.status}`);
      }

      const result = await response.json();
      console.log('✅ Video updated successfully:', result);

      showMessage('Video updated successfully!');
      await fetchHeroContent();
      setEditingVideo(null);
      resetFileInput();
    } catch (error) {
      console.error('❌ Error updating video:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to update video. Check server connection.';
      showMessage(errorMessage, true);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteVideo = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this hero video?')) {
      try {
        console.log('🗑️ Deleting video ID:', id);
        
        const response = await fetch(`${BASE_URL}/api/hero-content/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error(`Server returned ${response.status}`);
        }

        showMessage('Video deleted successfully!');
        await fetchHeroContent();
      } catch (error) {
        console.error('Error deleting video:', error);
        showMessage('Failed to delete video. Check server connection.', true);
      }
    }
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const clearForm = () => {
    setIsAdding(false);
    setEditingVideo(null);
    setError(null);
    resetFileInput();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Get form values
    const title = formData.get('title') as string;
    const subtitle = formData.get('subtitle') as string;
    const display_order = formData.get('display_order') as string;
    const videoFile = formData.get('video') as File;

    console.log('🎯 Form submission details:');
    console.log('Mode:', isAdding ? 'ADD' : 'EDIT');
    console.log('Video file:', videoFile ? `Selected - ${videoFile.name} (${videoFile.size} bytes)` : 'Not selected');

    // Validate required fields
    if (!title || !subtitle) {
      showMessage('Title and subtitle are required', true);
      return;
    }

    // For new videos, require a file
    if (isAdding && (!videoFile || videoFile.size === 0)) {
      showMessage('Please select a video file', true);
      return;
    }

    // Create new FormData with proper structure
    const submitData = new FormData();
    submitData.append('title', title);
    submitData.append('subtitle', subtitle);
    submitData.append('display_order', display_order || '0');
    submitData.append('is_active', 'true');

    // Only append video if a file is selected and has size
    if (videoFile && videoFile.size > 0) {
      submitData.append('video', videoFile);
      console.log('📁 Video appended to FormData');
    } else {
      console.log('📼 No new video file - keeping existing');
    }

    console.log('📦 Final FormData contents:');
    for (let [key, value] of submitData.entries()) {
      console.log(`  ${key}:`, value instanceof File ? `File: ${value.name}` : value);
    }

    if (isAdding) {
      await handleAddVideo(submitData);
    } else if (editingVideo) {
      await handleUpdateVideo(editingVideo.id, submitData);
    }
  };

  // Server status indicator
  const ServerStatusIndicator = () => (
    <div className={`flex items-center mb-4 p-3 rounded-lg ${
      serverStatus === 'online' ? 'bg-green-100 text-green-800' :
      serverStatus === 'offline' ? 'bg-red-100 text-red-800' :
      'bg-yellow-100 text-yellow-800'
    }`}>
      <div className={`w-3 h-3 rounded-full mr-2 ${
        serverStatus === 'online' ? 'bg-green-500' :
        serverStatus === 'offline' ? 'bg-red-500' :
        'bg-yellow-500'
      }`}></div>
      <span className="text-sm font-medium">
        {serverStatus === 'online' ? 'Server is online' :
         serverStatus === 'offline' ? 'Server is offline - Check backend connection' :
         'Checking server status...'}
      </span>
      {serverStatus === 'offline' && (
        <button
          onClick={checkServerStatus}
          className="ml-auto bg-white hover:bg-gray-50 text-red-700 px-3 py-1 rounded text-sm flex items-center"
        >
          <RefreshCw className="w-3 h-3 mr-1" />
          Retry
        </button>
      )}
    </div>
  );

  if (loading) {
    return (
      <>
        <AdminNavbar />
        <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading hero content...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminNavbar />
    
      <div className="min-h-screen bg-gray-50 pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Server Status */}
          <ServerStatusIndicator />

          {/* Success/Error Messages */}
          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {error}
            </div>
          )}
          
          {success && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-sage-800 mb-2">Hero Section Manager</h1>
              <p className="text-gray-600">
                {heroVideos.length} video{heroVideos.length !== 1 ? 's' : ''} in hero section
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <button
                onClick={fetchHeroContent}
                disabled={loading}
                className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={() => setIsAdding(true)}
                disabled={serverStatus === 'offline'}
                className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Video
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          {(isAdding || editingVideo) && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {isAdding ? 'Add New Hero Video' : `Edit Video: ${editingVideo?.title}`}
                </h2>
                <button
                  onClick={clearForm}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              {/* File size warning */}
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Maximum file size is 100MB. Supported formats: MP4, MOV, AVI, etc.
                  {editingVideo && " Leave video file empty to keep the existing video."}
                </p>
              </div>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={editingVideo?.title || ''}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="Enter video title"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Subtitle *</label>
                    <input
                      type="text"
                      name="subtitle"
                      defaultValue={editingVideo?.subtitle || ''}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="Enter video subtitle"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
                    <input
                      type="number"
                      name="display_order"
                      defaultValue={editingVideo?.display_order || 0}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Video File {isAdding ? '*' : '(Optional)'}
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="video"
                      accept="video/*"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required={isAdding}
                    />
                    {editingVideo && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 mb-1">
                          Current video: <strong>{editingVideo.video_url.split('/').pop()}</strong>
                        </p>
                        <div className="mt-1">
                          <video
                            src={`${BASE_URL}${editingVideo.video_url}`}
                            className="w-32 h-20 object-cover rounded border"
                            muted
                            playsInline
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={uploading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    {uploading ? 'Uploading...' : (editingVideo ? 'Update Video' : 'Save Video')}
                  </button>
                  <button
                    type="button"
                    onClick={clearForm}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Videos List */}
          {heroVideos.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Video className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No hero videos yet</h3>
              <p className="text-gray-500">Add your first hero video to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heroVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video bg-gray-200">
                    <video
                      src={`${BASE_URL}${video.video_url}`}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      {/* <button
                        onClick={() => setEditingVideo(video)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button> */}
                      <button
                        onClick={() => handleDeleteVideo(video.id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{video.subtitle}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">Order: {video.display_order}</span>
                      <span className={`px-2 py-1 rounded ${video.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                        {video.is_active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminHeroManager;