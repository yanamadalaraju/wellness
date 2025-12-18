// // import React, { useState, useEffect } from 'react';
// // import AdminNavbar from './AdminNavbar';

// // interface AlertImage {
// //   id: number;
// //   image_url: string;
// //   title: string;
// //   description: string;
// //   is_active: boolean;
// //   created_at: string;
// // }

// // const AlertImageAdmin: React.FC = () => {
// //   const [images, setImages] = useState<AlertImage[]>([]);
// //   const [loading, setLoading] = useState(false);
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     description: ''
// //   });
// //   const [selectedFile, setSelectedFile] = useState<File | null>(null);

// //   const API_BASE_URL = 'http://localhost:5000/api';

// //   useEffect(() => {
// //     fetchImages();
// //   }, []);

// //   const fetchImages = async () => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/alert-images`);
// //       const data = await response.json();
// //       setImages(data);
// //     } catch (error) {
// //       console.error('Error fetching images:', error);
// //     }
// //   };

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
    
// //     if (!selectedFile) {
// //       alert('Please select an image file');
// //       return;
// //     }

// //     const formDataToSend = new FormData();
// //     formDataToSend.append('image', selectedFile);
// //     formDataToSend.append('title', formData.title);
// //     formDataToSend.append('description', formData.description);

// //     setLoading(true);

// //     try {
// //       const response = await fetch(`${API_BASE_URL}/alert-image`, {
// //         method: 'POST',
// //         body: formDataToSend
// //       });

// //       if (response.ok) {
// //         alert('Image uploaded successfully!');
// //         setFormData({ title: '', description: '' });
// //         setSelectedFile(null);
// //         fetchImages();
// //       } else {
// //         alert('Error uploading image');
// //       }
// //     } catch (error) {
// //       console.error('Error uploading image:', error);
// //       alert('Error uploading image');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleStatusChange = async (id: number, is_active: boolean) => {
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/alert-image/${id}/status`, {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json'
// //         },
// //         body: JSON.stringify({ is_active })
// //       });

// //       if (response.ok) {
// //         fetchImages();
// //       } else {
// //         alert('Error updating image status');
// //       }
// //     } catch (error) {
// //       console.error('Error updating status:', error);
// //     }
// //   };

// //   const handleDelete = async (id: number) => {
// //     if (!window.confirm('Are you sure you want to delete this image?')) {
// //       return;
// //     }

// //     try {
// //       const response = await fetch(`${API_BASE_URL}/alert-image/${id}`, {
// //         method: 'DELETE'
// //       });

// //       if (response.ok) {
// //         fetchImages();
// //       } else {
// //         alert('Error deleting image');
// //       }
// //     } catch (error) {
// //       console.error('Error deleting image:', error);
// //     }
// //   };

// //   return (
// //     <>
// //     <AdminNavbar />
// //     <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
// //       <h1>Alert Image Management</h1>
      
// //       {/* Upload Form */}
// //       <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
// //         <h2>Upload New Alert Image</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div style={{ marginBottom: '1rem' }}>
// //             <label>Title:</label>
// //             <input
// //               type="text"
// //               value={formData.title}
// //               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
// //               required
// //               style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
// //             />
// //           </div>
          
// //           <div style={{ marginBottom: '1rem' }}>
// //             <label>Description:</label>
// //             <textarea
// //               value={formData.description}
// //               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //               required
// //               style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', minHeight: '80px' }}
// //             />
// //           </div>
          
// //           <div style={{ marginBottom: '1rem' }}>
// //             <label>Image:</label>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
// //               required
// //               style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
// //             />
// //           </div>
          
// //           <button 
// //             type="submit" 
// //             disabled={loading}
// //             style={{
// //               backgroundColor: '#4CAF50',
// //               color: 'white',
// //               padding: '0.75rem 1.5rem',
// //               border: 'none',
// //               borderRadius: '4px',
// //               cursor: loading ? 'not-allowed' : 'pointer'
// //             }}
// //           >
// //             {loading ? 'Uploading...' : 'Upload Image'}
// //           </button>
// //         </form>
// //       </div>

// //       {/* Images List */}
// //       <div>
// //         <h2>Existing Images</h2>
// //         <div style={{ display: 'grid', gap: '1rem' }}>
// //           {images.map((image) => (
// //             <div key={image.id} style={{
// //               border: '1px solid #ddd',
// //               borderRadius: '8px',
// //               padding: '1rem',
// //               display: 'flex',
// //               gap: '1rem',
// //               alignItems: 'center'
// //             }}>
// //               <img 
// //                 src={`http://localhost:5000${image.image_url}`}
// //                 alt={image.title}
// //                 style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '4px' }}
// //               />
              
// //               <div style={{ flex: 1 }}>
// //                 <h3>{image.title}</h3>
// //                 <p>{image.description}</p>
// //                 <small>Uploaded: {new Date(image.created_at).toLocaleDateString()}</small>
// //                 <div style={{ marginTop: '0.5rem' }}>
// //                   <span style={{ 
// //                     color: image.is_active ? 'green' : 'gray',
// //                     fontWeight: 'bold'
// //                   }}>
// //                     {image.is_active ? 'ACTIVE' : 'INACTIVE'}
// //                   </span>
// //                 </div>
// //               </div>
              
// //               <div style={{ display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
// //                 {!image.is_active && (
// //                   <button
// //                     onClick={() => handleStatusChange(image.id, true)}
// //                     style={{
// //                       backgroundColor: '#4CAF50',
// //                       color: 'white',
// //                       border: 'none',
// //                       padding: '0.5rem 1rem',
// //                       borderRadius: '4px',
// //                       cursor: 'pointer'
// //                     }}
// //                   >
// //                     Activate
// //                   </button>
// //                 )}
                
// //                 <button
// //                   onClick={() => handleDelete(image.id)}
// //                   style={{
// //                     backgroundColor: '#f44336',
// //                     color: 'white',
// //                     border: 'none',
// //                     padding: '0.5rem 1rem',
// //                     borderRadius: '4px',
// //                     cursor: 'pointer'
// //                   }}
// //                 >
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //     </>
// //   );
// // };

// // export default AlertImageAdmin;





// import React, { useState, useEffect } from 'react';
// import AdminNavbar from './AdminNavbar';

// interface AlertImage {
//   id: number;
//   image_url: string;
//   title: string;
//   description: string;
//   is_active: boolean;
//   created_at: string;
// }

// const AlertImageAdmin: React.FC = () => {
//   const [images, setImages] = useState<AlertImage[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [uploadLoading, setUploadLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: ''
//   });
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string>('');

//   const API_BASE_URL = 'http://localhost:5000/api';

//   useEffect(() => {
//     fetchImages();
//   }, []);

//   const fetchImages = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE_URL}/alert-images`);
//       const data = await response.json();
//       setImages(data);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//       alert('Failed to load images');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setSelectedFile(file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         setPreviewUrl(e.target?.result as string);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setPreviewUrl('');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedFile) {
//       alert('Please select an image file');
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append('image', selectedFile);
//     formDataToSend.append('title', formData.title);
//     formDataToSend.append('description', formData.description);

//     setUploadLoading(true);

//     try {
//       const response = await fetch(`${API_BASE_URL}/alert-image`, {
//         method: 'POST',
//         body: formDataToSend
//       });

//       if (response.ok) {
//         alert('🎉 Image uploaded successfully!');
//         setFormData({ title: '', description: '' });
//         setSelectedFile(null);
//         setPreviewUrl('');
//         // Reset file input
//         const fileInput = document.getElementById('image-upload') as HTMLInputElement;
//         if (fileInput) fileInput.value = '';
//         fetchImages();
//       } else {
//         const error = await response.json();
//         alert(`Error: ${error.error || 'Upload failed'}`);
//       }
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       alert('❌ Error uploading image');
//     } finally {
//       setUploadLoading(false);
//     }
//   };

//   const handleStatusChange = async (id: number, is_active: boolean) => {
//     try {
//       const response = await fetch(`${API_BASE_URL}/alert-image/${id}/status`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ is_active })
//       });

//       if (response.ok) {
//         fetchImages();
//       } else {
//         alert('Error updating image status');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//       alert('Failed to update status');
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to delete this image? This action cannot be undone.')) {
//       return;
//     }

//     try {
//       const response = await fetch(`${API_BASE_URL}/alert-image/${id}`, {
//         method: 'DELETE'
//       });

//       if (response.ok) {
//         alert('🗑️ Image deleted successfully');
//         fetchImages();
//       } else {
//         alert('Error deleting image');
//       }
//     } catch (error) {
//       console.error('Error deleting image:', error);
//       alert('Failed to delete image');
//     }
//   };

//   return (
//     <>
//       <AdminNavbar />
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
//         <div className="max-w-6xl mx-auto">
//           {/* Header */}
//           <div className="text-center mb-12 mt-10">
//             <h1 className="text-4xl font-bold text-gray-800 mb-4">
//               🎯 Alert Image Management
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Manage popup alert images that appear when users visit your website. 
//               Only one image can be active at a time.
//             </p>
//           </div>

//           {/* Upload Card */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
//             <div className="flex items-center mb-6">
//               <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
//                 <span className="text-2xl text-white">📤</span>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-gray-800">Upload New Alert Image</h2>
//                 <p className="text-gray-600">Upload and activate a new popup image</p>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Form Fields */}
//                 <div className="space-y-6">
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Title *
//                     </label>
//                     <input
//                       type="text"
//                       value={formData.title}
//                       onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                       required
//                       placeholder="Enter a catchy title..."
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Description *
//                     </label>
//                     <textarea
//                       value={formData.description}
//                       onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                       required
//                       placeholder="Describe your offer or message..."
//                       rows={4}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
//                     />
//                   </div>
                  
//                   <div>
//                     <label className="block text-sm font-semibold text-gray-700 mb-2">
//                       Image Upload *
//                     </label>
//                     <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
//                       <input
//                         id="image-upload"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         required
//                         className="hidden"
//                       />
//                       <label htmlFor="image-upload" className="cursor-pointer">
//                         <div className="flex flex-col items-center justify-center">
//                           <span className="text-4xl mb-2">🖼️</span>
//                           <p className="text-gray-600 mb-1">
//                             {selectedFile ? selectedFile.name : 'Click to upload image'}
//                           </p>
//                           <p className="text-sm text-gray-500">
//                             PNG, JPG, JPEG up to 5MB
//                           </p>
//                         </div>
//                       </label>
//                     </div>
//                   </div>

//                   <button 
//                     type="submit" 
//                     disabled={uploadLoading}
//                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
//                   >
//                     {uploadLoading ? (
//                       <>
//                         <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
//                         Uploading...
//                       </>
//                     ) : (
//                       <>
//                         <span className="mr-2">🚀</span>
//                         Upload & Activate Image
//                       </>
//                     )}
//                   </button>
//                 </div>

//                 {/* Preview */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-700 mb-2">
//                     Image Preview
//                   </label>
//                   <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-4 h-full min-h-[300px] flex items-center justify-center">
//                     {previewUrl ? (
//                       <div className="text-center">
//                         <img 
//                           src={previewUrl} 
//                           alt="Preview" 
//                           className="max-w-full max-h-64 rounded-lg shadow-md mx-auto mb-4"
//                         />
//                         <p className="text-sm text-green-600 font-medium">✓ Preview Ready</p>
//                       </div>
//                     ) : (
//                       <div className="text-center text-gray-400">
//                         <span className="text-6xl mb-2 block">👁️</span>
//                         <p>Image preview will appear here</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>

//           {/* Images List */}
//           <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
//             <div className="flex items-center justify-between mb-8">
//               <div className="flex items-center">
//                 <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
//                   <span className="text-xl text-white">🖼️</span>
//                 </div>
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-800">Existing Images</h2>
//                   <p className="text-gray-600">
//                     {images.length} image{images.length !== 1 ? 's' : ''} found
//                   </p>
//                 </div>
//               </div>
//               <button 
//                 onClick={fetchImages}
//                 disabled={loading}
//                 className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-colors duration-200"
//               >
//                 <span className="mr-2">🔄</span>
//                 Refresh
//               </button>
//             </div>

//             {loading ? (
//               <div className="text-center py-12">
//                 <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//                 <p className="text-gray-600">Loading images...</p>
//               </div>
//             ) : images.length === 0 ? (
//               <div className="text-center py-12 bg-gray-50 rounded-xl">
//                 <span className="text-6xl mb-4 block">😴</span>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">No Images Yet</h3>
//                 <p className="text-gray-600">Upload your first alert image to get started!</p>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {images.map((image) => (
//                   <div 
//                     key={image.id} 
//                     className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
//                       image.is_active 
//                         ? 'border-green-500 bg-green-50' 
//                         : 'border-gray-200 bg-white'
//                     }`}
//                   >
//                     {/* Image */}
//                     <div className="mb-4">
//                       <img 
//                         src={`http://localhost:5000${image.image_url}`}
//                         alt={image.title}
//                         className="w-full h-48 object-cover rounded-xl shadow-md"
//                         onError={(e) => {
//                           e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5YzljOWMiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
//                         }}
//                       />
//                     </div>
                    
//                     {/* Content */}
//                     <div className="space-y-3">
//                       <h3 className="font-bold text-lg text-gray-800 truncate">
//                         {image.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm line-clamp-2">
//                         {image.description}
//                       </p>
                      
//                       <div className="flex items-center justify-between text-sm text-gray-500">
//                         <span>📅 {new Date(image.created_at).toLocaleDateString()}</span>
//                         <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           image.is_active 
//                             ? 'bg-green-100 text-green-800' 
//                             : 'bg-gray-100 text-gray-600'
//                         }`}>
//                           {image.is_active ? '🌟 ACTIVE' : '⏸️ INACTIVE'}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Actions */}
//                     <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
//                       {!image.is_active && (
//                         <button
//                           onClick={() => handleStatusChange(image.id, true)}
//                           className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center"
//                         >
//                           <span className="mr-1">⭐</span>
//                           Activate
//                         </button>
//                       )}
                      
//                       <button
//                         onClick={() => handleDelete(image.id)}
//                         className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center"
//                       >
//                         <span className="mr-1">🗑️</span>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AlertImageAdmin;






import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import { BASE_URL } from '../config';

interface AlertImage {
  id: number;
  image_url: string;
  title: string;
  description: string;
  is_active: boolean;
  created_at: string;
}

const AlertImageAdmin: React.FC = () => {
  const [images, setImages] = useState<AlertImage[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const API_BASE_URL = `${BASE_URL}/api`;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('Fetching alert images from:', `${API_BASE_URL}/alert-images`);
      const response = await fetch(`${API_BASE_URL}/alert-images`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch images: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setImages(data);
    } catch (error: any) {
      console.error('Error fetching images:', error);
      setError(`Failed to load images: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file (PNG, JPG, JPEG)');
        setSelectedFile(null);
        setPreviewUrl('');
        return;
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('Image size should be less than 5MB');
        setSelectedFile(null);
        setPreviewUrl('');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFile) {
      setError('Please select an image file');
      return;
    }

    if (!formData.title.trim() || !formData.description.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('image', selectedFile);
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);

    setUploadLoading(true);
    setError(null);
    setSuccess(null);

    try {
      console.log('Uploading image to:', `${API_BASE_URL}/alert-image`);
      const response = await fetch(`${API_BASE_URL}/alert-image`, {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(result.message || '🎉 Image uploaded successfully!');
        setFormData({ title: '', description: '' });
        setSelectedFile(null);
        setPreviewUrl('');
        // Reset file input
        const fileInput = document.getElementById('image-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
        
        // Refresh images list
        setTimeout(() => {
          fetchImages();
        }, 1000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || `Upload failed with status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error uploading image:', error);
      setError(`❌ ${error.message || 'Error uploading image. Please try again.'}`);
    } finally {
      setUploadLoading(false);
    }
  };

  const handleStatusChange = async (id: number, is_active: boolean) => {
    setError(null);
    setSuccess(null);
    
    try {
      console.log('Updating status at:', `${API_BASE_URL}/alert-image/${id}/status`);
      const response = await fetch(`${API_BASE_URL}/alert-image/${id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ is_active })
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(result.message || `Image ${is_active ? 'activated' : 'deactivated'} successfully!`);
        fetchImages();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to update status: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error updating status:', error);
      setError(`❌ ${error.message || 'Failed to update status'}`);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this image? This action cannot be undone.')) {
      return;
    }

    setError(null);
    setSuccess(null);

    try {
      console.log('Deleting image at:', `${API_BASE_URL}/alert-image/${id}`);
      const response = await fetch(`${API_BASE_URL}/alert-image/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess(result.message || '🗑️ Image deleted successfully');
        fetchImages();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to delete: ${response.status}`);
      }
    } catch (error: any) {
      console.error('Error deleting image:', error);
      setError(`❌ ${error.message || 'Failed to delete image'}`);
    }
  };

  // Function to get full image URL
  const getImageUrl = (imagePath: string) => {
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // If the path doesn't start with http, prepend the BASE_URL
    return `${BASE_URL}${imagePath}`;
  };

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 mt-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              🎯 Alert Image Management
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Manage popup alert images that appear when users visit your website. 
              Only one image can be active at a time.
            </p>
            <div className="mt-4 text-sm text-gray-500 bg-white/50 rounded-lg p-2 inline-block">
              <span className="font-medium">Backend:</span> {BASE_URL}
            </div>
          </div>

          {/* Status Messages */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">❌</span>
                <div>
                  <p className="text-red-700 font-medium">{error}</p>
                  <p className="text-red-600 text-sm mt-1">
                    Please check that your backend server is running at <code className="bg-red-100 px-2 py-1 rounded">{BASE_URL}</code>
                  </p>
                </div>
              </div>
            </div>
          )}

          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">✅</span>
                <p className="text-green-700 font-medium">{success}</p>
              </div>
            </div>
          )}

          {/* Upload Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-white">📤</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Upload New Alert Image</h2>
                <p className="text-gray-600">Upload and activate a new popup image</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Form Fields */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Title *
                    </label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                      placeholder="Enter a catchy title..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      required
                      placeholder="Describe your offer or message..."
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Image Upload *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors duration-200">
                      <input
                        id="image-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                        className="hidden"
                      />
                      <label htmlFor="image-upload" className="cursor-pointer">
                        <div className="flex flex-col items-center justify-center">
                          <span className="text-4xl mb-2">🖼️</span>
                          <p className="text-gray-600 mb-1">
                            {selectedFile ? selectedFile.name : 'Click to upload image'}
                          </p>
                          <p className="text-sm text-gray-500">
                            PNG, JPG, JPEG up to 5MB
                          </p>
                          {selectedFile && (
                            <p className="text-xs text-blue-600 mt-1">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          )}
                        </div>
                      </label>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={uploadLoading || !selectedFile || !formData.title.trim() || !formData.description.trim()}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {uploadLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <span className="mr-2">🚀</span>
                        Upload & Activate Image
                      </>
                    )}
                  </button>
                </div>

                {/* Preview */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Image Preview
                  </label>
                  <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl p-4 h-full min-h-[300px] flex items-center justify-center">
                    {previewUrl ? (
                      <div className="text-center">
                        <img 
                          src={previewUrl} 
                          alt="Preview" 
                          className="max-w-full max-h-64 rounded-lg shadow-md mx-auto mb-4"
                        />
                        <p className="text-sm text-green-600 font-medium">✓ Preview Ready</p>
                        {selectedFile && (
                          <p className="text-xs text-gray-500">
                            Type: {selectedFile.type} • Size: {(selectedFile.size / 1024).toFixed(0)} KB
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="text-center text-gray-400">
                        <span className="text-6xl mb-2 block">👁️</span>
                        <p>Image preview will appear here</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Images List */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-xl text-white">🖼️</span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Existing Images</h2>
                  <p className="text-gray-600">
                    {images.length} image{images.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-lg">
                  API: {API_BASE_URL}
                </div>
                <button 
                  onClick={fetchImages}
                  disabled={loading}
                  className="flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-xl transition-colors duration-200"
                >
                  <span className="mr-2">🔄</span>
                  Refresh
                </button>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Loading images...</p>
                <p className="text-sm text-gray-500 mt-2">Connecting to: {API_BASE_URL}</p>
              </div>
            ) : images.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-xl">
                <span className="text-6xl mb-4 block">😴</span>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Images Yet</h3>
                <p className="text-gray-600">Upload your first alert image to get started!</p>
                <button 
                  onClick={() => document.getElementById('image-upload')?.click()}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Upload First Image
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {images.map((image) => (
                  <div 
                    key={image.id} 
                    className={`border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg ${
                      image.is_active 
                        ? 'border-green-500 bg-green-50' 
                        : 'border-gray-200 bg-white'
                    }`}
                  >
                    {/* Image */}
                    <div className="mb-4 relative">
                      <img 
                        src={getImageUrl(image.image_url)}
                        alt={image.title}
                        className="w-full h-48 object-cover rounded-xl shadow-md"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjRmNiIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZpbGw9IiM5YzljOWMiPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                      {image.is_active && (
                        <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                          ACTIVE
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg text-gray-800 truncate">
                        {image.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {image.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center">
                          <span className="mr-1">📅</span>
                          {new Date(image.created_at).toLocaleDateString()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          image.is_active 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {image.is_active ? '🌟 ACTIVE' : '⏸️ INACTIVE'}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200">
                      {!image.is_active && (
                        <button
                          onClick={() => handleStatusChange(image.id, true)}
                          className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center"
                        >
                          <span className="mr-1">⭐</span>
                          Activate
                        </button>
                      )}
                      
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-200 flex items-center justify-center"
                      >
                        <span className="mr-1">🗑️</span>
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Backend Status Footer */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
              <div className={`w-2 h-2 rounded-full ${images.length > 0 ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-sm text-gray-600">
                Backend Status: {images.length > 0 ? 'Connected' : 'Checking...'}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Using BASE_URL: {BASE_URL} • API Endpoint: {API_BASE_URL}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertImageAdmin;