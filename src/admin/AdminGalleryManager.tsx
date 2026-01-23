// import React, { useState, useEffect, useRef } from 'react';
// import { Plus, Edit, Trash2, Image, Save, X, AlertCircle, RefreshCw } from 'lucide-react';
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// interface GalleryImage {
//   id: number;
//   image_url: string;
//   title: string;
//   description: string;
//   display_order: number;
//   is_active: boolean;
// }

// const AdminGalleryManager: React.FC = () => {
//   const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
//   const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [success, setSuccess] = useState<string | null>(null);
//   const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     checkServerStatus();
//     fetchGalleryImages();
//   }, []);

//   const checkServerStatus = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/api/health`);
//       setServerStatus(response.ok ? 'online' : 'offline');
//     } catch (error) {
//       setServerStatus('offline');
//     }
//   };

//   const fetchGalleryImages = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/gallery-images`);
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch gallery images');
//       }

//       const data = await response.json();
//       setGalleryImages(data);
//       setServerStatus('online');
//     } catch (error) {
//       console.error('Error fetching gallery images:', error);
//       setError('Failed to load gallery images');
//       setServerStatus('offline');
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

//   const handleAddImage = async (formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/gallery-images`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || 'Failed to add image');
//       }

//       showMessage('Image added successfully!');
//       await fetchGalleryImages();
//       setIsAdding(false);
//       resetFileInput();
//     } catch (error) {
//       console.error('Error adding image:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to add image', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleUpdateImage = async (id: number, formData: FormData) => {
//     try {
//       setUploading(true);
//       setError(null);
      
//       const response = await fetch(`${BASE_URL}/api/gallery-images/${id}`, {
//         method: 'PUT',
//         body: formData,
//       });

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(errorText || 'Failed to update image');
//       }

//       showMessage('Image updated successfully!');
//       await fetchGalleryImages();
//       setEditingImage(null);
//       resetFileInput();
//     } catch (error) {
//       console.error('Error updating image:', error);
//       showMessage(error instanceof Error ? error.message : 'Failed to update image', true);
//     } finally {
//       setUploading(false);
//     }
//   };

//   const handleDeleteImage = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this image?')) {
//       try {
//         const response = await fetch(`${BASE_URL}/api/gallery-images/${id}`, {
//           method: 'DELETE',
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete image');
//         }

//         showMessage('Image deleted successfully!');
//         await fetchGalleryImages();
//       } catch (error) {
//         console.error('Error deleting image:', error);
//         showMessage('Failed to delete image', true);
//       }
//     }
//   };

//   const resetFileInput = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.value = '';
//     }
//   };

//   const clearForm = () => {
//     setIsAdding(false);
//     setEditingImage(null);
//     setError(null);
//     resetFileInput();
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError(null);
    
//     const form = e.currentTarget;
//     const formData = new FormData(form);
    
//     const title = formData.get('title') as string;
//     const description = formData.get('description') as string;
//     const display_order = formData.get('display_order') as string;
//     const imageFile = formData.get('image') as File;

//     // Validate required fields
//     if (!title) {
//       showMessage('Title is required', true);
//       return;
//     }

//     // For new images, require a file
//     if (isAdding && (!imageFile || imageFile.size === 0)) {
//       showMessage('Please select an image file', true);
//       return;
//     }

//     const submitData = new FormData();
//     submitData.append('title', title);
//     submitData.append('description', description || '');
//     submitData.append('display_order', display_order || '0');
//     submitData.append('is_active', 'true');

//     if (imageFile && imageFile.size > 0) {
//       submitData.append('image', imageFile);
//     }

//     if (isAdding) {
//       await handleAddImage(submitData);
//     } else if (editingImage) {
//       await handleUpdateImage(editingImage.id, submitData);
//     }
//   };

//   if (loading) {
//     return (
//       <>
//         <AdminNavbar />
//         <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
//           <div className="text-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//             <p className="text-gray-600">Loading gallery images...</p>
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
//           {/* Server Status */}
//           <div className={`flex items-center mb-4 p-3 rounded-lg ${
//             serverStatus === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//           }`}>
//             <div className={`w-3 h-3 rounded-full mr-2 ${
//               serverStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
//             }`}></div>
//             <span className="text-sm font-medium">
//               {serverStatus === 'online' ? 'Server is online' : 'Server is offline - Check backend connection'}
//             </span>
//           </div>

//           {/* Messages */}
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
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Gallery Manager</h1>
//               <p className="text-gray-600">
//                 {galleryImages.length} image{galleryImages.length !== 1 ? 's' : ''} in gallery
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0 flex gap-2">
//               <button
//                 onClick={fetchGalleryImages}
//                 disabled={loading}
//                 className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
//                 Refresh
//               </button>
//               <button
//                 onClick={() => setIsAdding(true)}
//                 disabled={serverStatus === 'offline'}
//                 className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
//               >
//                 <Plus className="w-4 h-4 mr-2" />
//                 Add Image
//               </button>
//             </div>
//           </div>

//           {/* Add/Edit Form */}
//           {(isAdding || editingImage) && (
//             <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">
//                   {isAdding ? 'Add New Gallery Image' : `Edit Image: ${editingImage?.title}`}
//                 </h2>
//                 <button onClick={clearForm} className="text-gray-500 hover:text-gray-700">
//                   <X className="w-5 h-5" />
//                 </button>
//               </div>
              
//               <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
//                 <p className="text-sm text-yellow-800">
//                   <strong>Note:</strong> Maximum file size is 10MB. Supported formats: JPG, PNG, WebP.
//                   {editingImage && " Leave image file empty to keep the existing image."}
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
//                     <input
//                       type="text"
//                       name="title"
//                       defaultValue={editingImage?.title || ''}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       required
//                       placeholder="Enter image title"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Description</label>
//                     <textarea
//                       name="description"
//                       defaultValue={editingImage?.description || ''}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       rows={3}
//                       placeholder="Enter image description"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">Display Order</label>
//                     <input
//                       type="number"
//                       name="display_order"
//                       defaultValue={editingImage?.display_order || 0}
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       min="0"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                       Image File {isAdding ? '*' : '(Optional)'}
//                     </label>
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       name="image"
//                       accept="image/*"
//                       className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                       required={isAdding}
//                     />
//                     {editingImage && (
//                       <div className="mt-2">
//                         <p className="text-xs text-gray-500 mb-1">
//                           Current image: <strong>{editingImage.image_url.split('/').pop()}</strong>
//                         </p>
//                         <div className="mt-1">
//                           <img
//                             src={`${BASE_URL}${editingImage.image_url}`}
//                             className="w-32 h-20 object-cover rounded border"
//                             alt="Current"
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
//                     {uploading ? 'Uploading...' : (editingImage ? 'Update Image' : 'Save Image')}
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

//           {/* Images Grid */}
//           {galleryImages.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No gallery images yet</h3>
//               <p className="text-gray-500">Add your first image to get started.</p>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {galleryImages.map((image) => (
//                 <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
//                   <div className="relative aspect-video bg-gray-200">
//                     <img
//                       src={`${BASE_URL}${image.image_url}`}
//                       className="w-full h-full object-cover"
//                       alt={image.title}
//                     />
//                     <div className="absolute top-2 right-2 flex gap-1">
//                       <button
//                         onClick={() => setEditingImage(image)}
//                         className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
//                         title="Edit"
//                       >
//                         <Edit className="w-4 h-4" />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteImage(image.id)}
//                         className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
//                         title="Delete"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="font-semibold text-lg mb-1 text-gray-800">{image.title}</h3>
//                     <p className="text-gray-600 text-sm mb-2 line-clamp-2">{image.description}</p>
//                     <div className="flex justify-between text-xs text-gray-500">
//                       <span className="bg-gray-100 px-2 py-1 rounded">Order: {image.display_order}</span>
//                       <span className={`px-2 py-1 rounded ${image.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                         {image.is_active ? 'Active' : 'Inactive'}
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

// export default AdminGalleryManager;



import React, { useState, useEffect, useRef } from 'react';
import { Plus, Edit, Trash2, Image, Save, X, AlertCircle, RefreshCw } from 'lucide-react';
import { BASE_URL } from '../config';
import AdminNavbar from './AdminNavbar';

interface GalleryImage {
  id: number;
  image_url: string;
  title: string;
  description: string;
  display_order: number;
  is_active: boolean;
}

const AdminGalleryManager: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [serverStatus, setServerStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    checkServerStatus();
    fetchGalleryImages();
  }, []);

  const checkServerStatus = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/health`);
      setServerStatus(response.ok ? 'online' : 'offline');
    } catch (error) {
      setServerStatus('offline');
    }
  };

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`${BASE_URL}/api/gallery-images`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch gallery images');
      }

      const result = await response.json();
      
      // Check if response has data property
      if (result.success && Array.isArray(result.data)) {
        // Map the backend response to match frontend interface
        const mappedImages = result.data.map((item: any) => ({
          id: item.id,
          image_url: item.src || item.image_url,
          title: item.title,
          description: item.description || '',
          display_order: 0, // Default value since backend doesn't have this field
          is_active: true // Default value
        }));
        setGalleryImages(mappedImages);
      } else {
        // If no data property, try to use the response directly
        if (Array.isArray(result)) {
          setGalleryImages(result);
        } else {
          setGalleryImages([]);
          console.warn('Unexpected response format:', result);
        }
      }
      
      setServerStatus('online');
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setError('Failed to load gallery images. Please check your connection.');
      setServerStatus('offline');
      setGalleryImages([]);
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

  const handleAddImage = async (formData: FormData) => {
    try {
      setUploading(true);
      setError(null);
      
      console.log('Sending form data...');
      // Log what's in the FormData
      for (let [key, value] of formData.entries()) {
        console.log(key, value instanceof File ? `File: ${value.name}, size: ${value.size} bytes` : value);
      }
      
      const response = await fetch(`${BASE_URL}/api/gallery-images`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(errorText || 'Failed to add image');
      }

      const result = await response.json();
      console.log('Server response:', result);
      
      if (result.success) {
        showMessage('Image added successfully!');
        await fetchGalleryImages();
        setIsAdding(false);
        resetFileInput();
      } else {
        throw new Error(result.message || 'Failed to add image');
      }
    } catch (error) {
      console.error('Error adding image:', error);
      showMessage(error instanceof Error ? error.message : 'Failed to add image', true);
    } finally {
      setUploading(false);
    }
  };

  const handleUpdateImage = async (id: number, formData: FormData) => {
    try {
      setUploading(true);
      setError(null);
      
      // Note: Your backend doesn't have update endpoint, you might need to create it
      const response = await fetch(`${BASE_URL}/api/gallery-images/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Failed to update image');
      }

      showMessage('Image updated successfully!');
      await fetchGalleryImages();
      setEditingImage(null);
      resetFileInput();
    } catch (error) {
      console.error('Error updating image:', error);
      showMessage(error instanceof Error ? error.message : 'Failed to update image', true);
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      try {
        // Note: Your backend only has bulk delete, not single delete
        // You need to create a single delete endpoint or use the bulk one
        const response = await fetch(`${BASE_URL}/api/gallery-images/bulk`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ imageIds: [id] })
        });

        if (!response.ok) {
          throw new Error('Failed to delete image');
        }

        showMessage('Image deleted successfully!');
        await fetchGalleryImages();
      } catch (error) {
        console.error('Error deleting image:', error);
        showMessage('Failed to delete image', true);
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
    setEditingImage(null);
    setError(null);
    resetFileInput();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Get the image file from the file input
    const imageFile = (fileInputRef.current?.files?.[0]) as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const category = formData.get('category') as string;

    // Validate required fields
    if (!title) {
      showMessage('Title is required', true);
      return;
    }

    if (!category) {
      showMessage('Category is required', true);
      return;
    }

    // For new images, require a file
    if (isAdding) {
      if (!imageFile) {
        showMessage('Please select an image file', true);
        return;
      }
    }

    // Use the original formData and just ensure everything is included
    if (imageFile) {
      formData.set('image', imageFile); // Ensure image is set in FormData
    }

    // Log FormData contents for debugging
    console.log('FormData contents before sending:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value instanceof File ? `File - ${value.name} (${value.size} bytes)` : value);
    }

    if (isAdding) {
      await handleAddImage(formData);
    } else if (editingImage) {
      await handleUpdateImage(editingImage.id, formData);
    }
  };

  if (loading) {
    return (
      <>
        <AdminNavbar />
        <div className="min-h-screen bg-gray-50 pt-20 p-6 flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading gallery images...</p>
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
          <div className={`flex items-center mb-4 p-3 rounded-lg ${
            serverStatus === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className={`w-3 h-3 rounded-full mr-2 ${
              serverStatus === 'online' ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium">
              {serverStatus === 'online' ? 'Server is online' : 'Server is offline - Check backend connection'}
            </span>
          </div>

          {/* Messages */}
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
              <h1 className="text-3xl font-bold text-sage-800 mb-2">Gallery Manager</h1>
              <p className="text-gray-600">
                {galleryImages.length} image{galleryImages.length !== 1 ? 's' : ''} in gallery
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-2">
              <button
                onClick={fetchGalleryImages}
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
                Add Image
              </button>
            </div>
          </div>

          {/* Add/Edit Form */}
          {(isAdding || editingImage) && (
            <div className="bg-white p-6 rounded-lg shadow-md mb-6 border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">
                  {isAdding ? 'Add New Gallery Image' : `Edit Image: ${editingImage?.title}`}
                </h2>
                <button onClick={clearForm} className="text-gray-500 hover:text-gray-700">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Maximum file size is 10MB. Supported formats: JPG, PNG, WebP.
                  {editingImage && " Leave image file empty to keep the existing image."}
                </p>
              </div>

              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Title *</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={editingImage?.title || ''}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder="Enter image title"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2 text-gray-700">Description</label>
                    <textarea
                      name="description"
                      defaultValue={editingImage?.description || ''}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Enter image description"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Category *</label>
                    <select
                      name="category"
                      defaultValue="Weddings"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    >
                      <option value="Weddings">Weddings</option>
                      <option value="Events">Events</option>
                      <option value="Decor">Decor</option>
                      <option value="Catering">Catering</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                      Image File {isAdding ? '*' : '(Optional)'}
                    </label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="image"
                      accept="image/*"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      required={isAdding}
                    />
                    {editingImage && (
                      <div className="mt-2">
                        <p className="text-xs text-gray-500 mb-1">
                          Current image: <strong>{editingImage.image_url.split('/').pop()}</strong>
                        </p>
                        <div className="mt-1">
                          <img
                            src={editingImage.image_url.startsWith('http') ? editingImage.image_url : `${BASE_URL}${editingImage.image_url}`}
                            className="w-32 h-20 object-cover rounded border"
                            alt="Current"
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
                    {uploading ? 'Uploading...' : (editingImage ? 'Update Image' : 'Save Image')}
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

          {/* Images Grid */}
          {!Array.isArray(galleryImages) || galleryImages.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No gallery images yet</h3>
              <p className="text-gray-500">Add your first image to get started.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video bg-gray-200">
                    <img
                      src={image.image_url.startsWith('http') ? image.image_url : `${BASE_URL}${image.image_url}`}
                      className="w-full h-full object-cover"
                      alt={image.title}
                    />
                    <div className="absolute top-2 right-2 flex gap-1">
                      <button
                        onClick={() => setEditingImage(image)}
                        className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteImage(image.id)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1 text-gray-800">{image.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">{image.description}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span className="bg-gray-100 px-2 py-1 rounded">ID: {image.id}</span>
                      <span className="px-2 py-1 rounded bg-green-100 text-green-800">
                        Active
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

export default AdminGalleryManager;