// // src/admin/RoomManager.tsx
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
// import AdminNavbar from './AdminNavbar';

// // Define TypeScript interfaces
// interface Room {
//   id: number;
//   name: string;
//   description: string;
//   image_path?: string;
//   image_url?: string;
//   display_order: number;
//   is_active: boolean;
//   created_at?: string;
//   updated_at?: string;
// }

// interface FormData {
//   name: string;
//   description: string;
//   display_order: string;
//   is_active: boolean;
// }

// // IMPORTANT: Define your backend API URL
// const API_BASE_URL = 'http://localhost:5000/api';

// const RoomManager: React.FC = () => {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     description: '',
//     display_order: '',
//     is_active: true
//   });
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [editingId, setEditingId] = useState<number | null>(null); // Track if we're editing

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async (): Promise<void> => {
//     try {
//       console.log('Fetching rooms from:', `${API_BASE_URL}/admin/rooms`);
//       const response = await fetch(`${API_BASE_URL}/admin/rooms`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log('Rooms data:', data);
      
//       if (data.success) {
//         setRooms(data.rooms);
//       } else {
//         console.error('Failed to fetch rooms:', data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching rooms:', error);
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('display_order', formData.display_order);
//     formDataToSend.append('is_active', formData.is_active.toString());
    
//     if (imageFile) {
//       formDataToSend.append('image', imageFile);
//     }

//     try {
//       const url = editingId 
//         ? `${API_BASE_URL}/admin/rooms/${editingId}`
//         : `${API_BASE_URL}/admin/rooms`;
      
//       const method = editingId ? 'PUT' : 'POST';
      
//       console.log(`Sending ${method} request to:`, url);
      
//       const response = await fetch(url, {
//         method,
//         body: formDataToSend
//       });
      
//       console.log('Response status:', response.status, response.statusText);
      
//       // Check if response is OK before trying to parse JSON
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Server error response:', errorText);
//         throw new Error(`Server error: ${response.status} ${response.statusText}`);
//       }
      
//       // Try to parse JSON
//       const text = await response.text();
//       console.log('Response text:', text);
      
//       let data;
//       try {
//         data = JSON.parse(text);
//       } catch (parseError) {
//         console.error('Failed to parse JSON:', parseError);
//         throw new Error('Invalid JSON response from server');
//       }
      
//       if (data.success) {
//         const message = editingId ? 'Room updated successfully!' : 'Room added successfully!';
//         alert(message);
        
//         // Reset form
//         setFormData({ 
//           name: '', 
//           description: '', 
//           display_order: '', 
//           is_active: true 
//         });
//         setImageFile(null);
//         setEditingId(null);
        
//         // Refresh rooms list
//         fetchRooms();
//       } else {
//         alert(data.message || 'Operation failed');
//       }
//     } catch (error) {
//       console.error('Error in handleSubmit:', error);
//       alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number): Promise<void> => {
//     if (window.confirm('Are you sure you want to delete this room?')) {
//       try {
//         const response = await fetch(`${API_BASE_URL}/admin/rooms/${id}`, {
//           method: 'DELETE'
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         if (data.success) {
//           alert('Room deleted successfully!');
//           fetchRooms();
//         } else {
//           alert(data.message || 'Failed to delete room');
//         }
//       } catch (error) {
//         console.error('Error deleting room:', error);
//         alert('Error deleting room. Please check console for details.');
//       }
//     }
//   };

//   const handleEdit = (room: Room): void => {
//     console.log('Editing room:', room);
//     // Populate the form with room data
//     setFormData({
//       name: room.name,
//       description: room.description,
//       display_order: room.display_order.toString(),
//       is_active: room.is_active
//     });
//     setEditingId(room.id);
    
//     // Scroll to form
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleCancelEdit = (): void => {
//     setFormData({ 
//       name: '', 
//       description: '', 
//       display_order: '', 
//       is_active: true 
//     });
//     setImageFile(null);
//     setEditingId(null);
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
//     const { name, value, type } = e.target;
    
//     if (type === 'checkbox') {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData(prev => ({
//         ...prev,
//         [name]: checked
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     if (e.target.files && e.target.files[0]) {
//       setImageFile(e.target.files[0]);
//     }
//   };

//   return (
//     <>
//     <AdminNavbar />
    
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Manage Rooms</h2>
      
//       {/* Add/Edit Room Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">
//             {editingId ? `Edit Room (ID: ${editingId})` : 'Add New Room'}
//           </h3>
//           {editingId && (
//             <button
//               type="button"
//               onClick={handleCancelEdit}
//               className="text-sm text-gray-600 hover:text-gray-800"
//             >
//               Cancel Edit
//             </button>
//           )}
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Room Name *
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//               placeholder="Enter room name"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Display Order
//             </label>
//             <input
//               type="number"
//               name="display_order"
//               value={formData.display_order}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Order in list"
//               min="0"
//             />
//           </div>
          
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description *
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               rows={3}
//               required
//               placeholder="Enter room description"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Room Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="w-full px-3 py-2 border rounded"
//             />
//             {imageFile && (
//               <p className="text-sm text-green-600 mt-1">
//                 Selected: {imageFile.name}
//               </p>
//             )}
//           </div>
          
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="is_active"
//               name="is_active"
//               checked={formData.is_active}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <label htmlFor="is_active" className="text-sm text-gray-700">
//               Active (visible on website)
//             </label>
//           </div>
//         </div>
        
//         <div className="flex space-x-3 mt-6">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-4 py-2 rounded text-white ${
//               editingId 
//                 ? 'bg-blue-600 hover:bg-blue-700' 
//                 : 'bg-green-600 hover:bg-green-700'
//             } disabled:opacity-50`}
//           >
//             {loading ? 'Saving...' : editingId ? 'Update Room' : 'Add Room'}
//           </button>
          
//           <button
//             type="button"
//             onClick={() => {
//               setFormData({ 
//                 name: '', 
//                 description: '', 
//                 display_order: '', 
//                 is_active: true 
//               });
//               setImageFile(null);
//               setEditingId(null);
//             }}
//             className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
//           >
//             Clear Form
//           </button>
//         </div>
//       </form>
      
//       {/* Rooms List */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h3 className="text-lg font-semibold">Existing Rooms ({rooms.length})</h3>
//         </div>
        
//         {rooms.length === 0 ? (
//           <div className="p-6 text-center text-gray-500">
//             No rooms found. Add your first room using the form above.
//           </div>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Description
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Order
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {rooms.map((room: Room) => (
//                 <tr key={room.id}>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center">
//                       {room.image_url && (
//                         <img
//                           src={room.image_url}
//                           alt={room.name}
//                           className="w-12 h-12 object-cover rounded mr-3"
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).style.display = 'none';
//                           }}
//                         />
//                       )}
//                       <div>
//                         <span className="font-medium block">{room.name}</span>
//                         <span className="text-xs text-gray-500">ID: {room.id}</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <p className="text-sm text-gray-600 truncate max-w-xs">
//                       {room.description}
//                     </p>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className="px-2 py-1 bg-gray-100 rounded text-sm">
//                       {room.display_order}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2 py-1 text-xs rounded-full ${
//                       room.is_active 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {room.is_active ? 'Active' : 'Inactive'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(room)}
//                         className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded text-sm"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(room.id)}
//                         className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded text-sm"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
      
//       {/* Debug Info */}
//       {/* <div className="mt-8 p-4 bg-gray-50 rounded text-sm">
//         <h4 className="font-medium mb-2">Debug Information:</h4>
//         <p>Backend URL: <code className="bg-gray-200 px-1">{API_BASE_URL}</code></p>
//         <p>Frontend: <code className="bg-gray-200 px-1">{window.location.origin}</code></p>
//         <p>Total Rooms: {rooms.length}</p>
//         {editingId && <p>Currently editing Room ID: {editingId}</p>}
//       </div> */}
//     </div>
//     </>
//   );
// };

// export default RoomManager;





// // src/admin/RoomManager.tsx
// import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// // Import your BASE_URL from your config file
// // Make sure this file exists or create it
// import { BASE_URL } from '../config';
// import AdminNavbar from './AdminNavbar';

// // Define TypeScript interfaces
// interface Room {
//   id: number;
//   name: string;
//   description: string;
//   image_path?: string;
//   image_url?: string;
//   display_order: number;
//   is_active: boolean;
//   created_at?: string;
//   updated_at?: string;
// }

// interface FormData {
//   name: string;
//   description: string;
//   display_order: string;
//   is_active: boolean;
// }

// const API_BASE_URL = `${BASE_URL}/api`; // Use your BASE_URL

// const RoomManager: React.FC = () => {
//   const [rooms, setRooms] = useState<Room[]>([]);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     description: '',
//     display_order: '',
//     is_active: true
//   });
//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [editingId, setEditingId] = useState<number | null>(null); // Track if we're editing

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   const fetchRooms = async (): Promise<void> => {
//     try {
//       console.log('Fetching rooms from:', `${API_BASE_URL}/admin/rooms`);
//       const response = await fetch(`${API_BASE_URL}/admin/rooms`);
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       console.log('Rooms data:', data);
      
//       if (data.success) {
//         setRooms(data.rooms);
//       } else {
//         console.error('Failed to fetch rooms:', data.message);
//       }
//     } catch (error) {
//       console.error('Error fetching rooms:', error);
//     }
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
//     e.preventDefault();
//     setLoading(true);

//     const formDataToSend = new FormData();
//     formDataToSend.append('name', formData.name);
//     formDataToSend.append('description', formData.description);
//     formDataToSend.append('display_order', formData.display_order);
//     formDataToSend.append('is_active', formData.is_active.toString());
    
//     if (imageFile) {
//       formDataToSend.append('image', imageFile);
//     }

//     try {
//       const url = editingId 
//         ? `${API_BASE_URL}/admin/rooms/${editingId}`
//         : `${API_BASE_URL}/admin/rooms`;
      
//       const method = editingId ? 'PUT' : 'POST';
      
//       console.log(`Sending ${method} request to:`, url);
      
//       const response = await fetch(url, {
//         method,
//         body: formDataToSend
//       });
      
//       console.log('Response status:', response.status, response.statusText);
      
//       // Check if response is OK before trying to parse JSON
//       if (!response.ok) {
//         const errorText = await response.text();
//         console.error('Server error response:', errorText);
//         throw new Error(`Server error: ${response.status} ${response.statusText}`);
//       }
      
//       // Try to parse JSON
//       const text = await response.text();
//       console.log('Response text:', text);
      
//       let data;
//       try {
//         data = JSON.parse(text);
//       } catch (parseError) {
//         console.error('Failed to parse JSON:', parseError);
//         throw new Error('Invalid JSON response from server');
//       }
      
//       if (data.success) {
//         const message = editingId ? 'Room updated successfully!' : 'Room added successfully!';
//         alert(message);
        
//         // Reset form
//         setFormData({ 
//           name: '', 
//           description: '', 
//           display_order: '', 
//           is_active: true 
//         });
//         setImageFile(null);
//         setEditingId(null);
        
//         // Refresh rooms list
//         fetchRooms();
//       } else {
//         alert(data.message || 'Operation failed');
//       }
//     } catch (error) {
//       console.error('Error in handleSubmit:', error);
//       alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id: number): Promise<void> => {
//     if (window.confirm('Are you sure you want to delete this room?')) {
//       try {
//         const response = await fetch(`${API_BASE_URL}/admin/rooms/${id}`, {
//           method: 'DELETE'
//         });
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         if (data.success) {
//           alert('Room deleted successfully!');
//           fetchRooms();
//         } else {
//           alert(data.message || 'Failed to delete room');
//         }
//       } catch (error) {
//         console.error('Error deleting room:', error);
//         alert('Error deleting room. Please check console for details.');
//       }
//     }
//   };

//   const handleEdit = (room: Room): void => {
//     console.log('Editing room:', room);
//     // Populate the form with room data
//     setFormData({
//       name: room.name,
//       description: room.description,
//       display_order: room.display_order.toString(),
//       is_active: room.is_active
//     });
//     setEditingId(room.id);
    
//     // Scroll to form
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const handleCancelEdit = (): void => {
//     setFormData({ 
//       name: '', 
//       description: '', 
//       display_order: '', 
//       is_active: true 
//     });
//     setImageFile(null);
//     setEditingId(null);
//   };

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
//     const { name, value, type } = e.target;
    
//     if (type === 'checkbox') {
//       const checked = (e.target as HTMLInputElement).checked;
//       setFormData(prev => ({
//         ...prev,
//         [name]: checked
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
//     if (e.target.files && e.target.files[0]) {
//       setImageFile(e.target.files[0]);
//     }
//   };

//   return (
//     <>
//     <AdminNavbar />
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-6">Manage Rooms</h2>
      
//       {/* Add/Edit Room Form */}
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">
//             {editingId ? `Edit Room (ID: ${editingId})` : 'Add New Room'}
//           </h3>
//           {editingId && (
//             <button
//               type="button"
//               onClick={handleCancelEdit}
//               className="text-sm text-gray-600 hover:text-gray-800"
//             >
//               Cancel Edit
//             </button>
//           )}
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Room Name *
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               required
//               placeholder="Enter room name"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Display Order
//             </label>
//             <input
//               type="number"
//               name="display_order"
//               value={formData.display_order}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Order in list"
//               min="0"
//             />
//           </div>
          
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Description *
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleInputChange}
//               className="w-full px-3 py-2 border rounded"
//               rows={3}
//               required
//               placeholder="Enter room description"
//             />
//           </div>
          
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Room Image
//             </label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleFileChange}
//               className="w-full px-3 py-2 border rounded"
//             />
//             {imageFile && (
//               <p className="text-sm text-green-600 mt-1">
//                 Selected: {imageFile.name}
//               </p>
//             )}
//           </div>
          
//           <div className="flex items-center">
//             <input
//               type="checkbox"
//               id="is_active"
//               name="is_active"
//               checked={formData.is_active}
//               onChange={handleInputChange}
//               className="mr-2"
//             />
//             <label htmlFor="is_active" className="text-sm text-gray-700">
//               Active (visible on website)
//             </label>
//           </div>
//         </div>
        
//         <div className="flex space-x-3 mt-6">
//           <button
//             type="submit"
//             disabled={loading}
//             className={`px-4 py-2 rounded text-white ${
//               editingId 
//                 ? 'bg-blue-600 hover:bg-blue-700' 
//                 : 'bg-green-600 hover:bg-green-700'
//             } disabled:opacity-50`}
//           >
//             {loading ? 'Saving...' : editingId ? 'Update Room' : 'Add Room'}
//           </button>
          
//           <button
//             type="button"
//             onClick={() => {
//               setFormData({ 
//                 name: '', 
//                 description: '', 
//                 display_order: '', 
//                 is_active: true 
//               });
//               setImageFile(null);
//               setEditingId(null);
//             }}
//             className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
//           >
//             Clear Form
//           </button>
//         </div>
//       </form>
      
//       {/* Rooms List */}
//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h3 className="text-lg font-semibold">Existing Rooms ({rooms.length})</h3>
//         </div>
        
//         {rooms.length === 0 ? (
//           <div className="p-6 text-center text-gray-500">
//             No rooms found. Add your first room using the form above.
//           </div>
//         ) : (
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Name
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Description
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Order
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-200">
//               {rooms.map((room: Room) => (
//                 <tr key={room.id}>
//                   <td className="px-6 py-4">
//                     <div className="flex items-center">
//                       {room.image_url && (
//                         <img
//                           src={room.image_url}
//                           alt={room.name}
//                           className="w-12 h-12 object-cover rounded mr-3"
//                           onError={(e) => {
//                             (e.target as HTMLImageElement).style.display = 'none';
//                           }}
//                         />
//                       )}
//                       <div>
//                         <span className="font-medium block">{room.name}</span>
//                         <span className="text-xs text-gray-500">ID: {room.id}</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4">
//                     <p className="text-sm text-gray-600 truncate max-w-xs">
//                       {room.description}
//                     </p>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className="px-2 py-1 bg-gray-100 rounded text-sm">
//                       {room.display_order}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <span className={`px-2 py-1 text-xs rounded-full ${
//                       room.is_active 
//                         ? 'bg-green-100 text-green-800' 
//                         : 'bg-red-100 text-red-800'
//                     }`}>
//                       {room.is_active ? 'Active' : 'Inactive'}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleEdit(room)}
//                         className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded text-sm"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => handleDelete(room.id)}
//                         className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded text-sm"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
      
//       {/* Debug Info */}
//       {/* <div className="mt-8 p-4 bg-gray-50 rounded text-sm">
//         <h4 className="font-medium mb-2">API Information:</h4>
//         <p>Base URL: <code className="bg-gray-200 px-1">{BASE_URL}</code></p>
//         <p>API Endpoint: <code className="bg-gray-200 px-1">{API_BASE_URL}</code></p>
//         <p>Total Rooms: <span className="font-medium">{rooms.length}</span></p>
//         {editingId && <p>Currently editing Room ID: <span className="font-medium">{editingId}</span></p>}
//       </div> */}
//     </div>
//     </>
//   );
// };

// export default RoomManager;





// src/admin/RoomManager.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// Import your BASE_URL from your config file
// Make sure this file exists or create it
import { BASE_URL } from '../config';
import AdminNavbar from './AdminNavbar';

// Define TypeScript interfaces
interface Room {
  id: number;
  name: string;
  description: string;
  image_path?: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

interface FormData {
  name: string;
  description: string;
  display_order: string;
  is_active: boolean;
}

const API_BASE_URL = `${BASE_URL}/api`; // Use your BASE_URL

const RoomManager: React.FC = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    display_order: '',
    is_active: true
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [editingId, setEditingId] = useState<number | null>(null); // Track if we're editing

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async (): Promise<void> => {
    try {
      console.log('Fetching rooms from:', `${API_BASE_URL}/admin/rooms`);
      const response = await fetch(`${API_BASE_URL}/admin/rooms`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Rooms data:', data);
      
      if (data.success) {
        setRooms(data.rooms);
      } else {
        console.error('Failed to fetch rooms:', data.message);
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('display_order', formData.display_order);
    formDataToSend.append('is_active', formData.is_active.toString());
    
    if (imageFile) {
      formDataToSend.append('image', imageFile);
    }

    try {
      const url = editingId 
        ? `${API_BASE_URL}/admin/rooms/${editingId}`
        : `${API_BASE_URL}/admin/rooms`;
      
      const method = editingId ? 'PUT' : 'POST';
      
      console.log(`Sending ${method} request to:`, url);
      
      const response = await fetch(url, {
        method,
        body: formDataToSend
      });
      
      console.log('Response status:', response.status, response.statusText);
      
      // Check if response is OK before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      
      // Try to parse JSON
      const text = await response.text();
      console.log('Response text:', text);
      
      let data;
      try {
        data = JSON.parse(text);
      } catch (parseError) {
        console.error('Failed to parse JSON:', parseError);
        throw new Error('Invalid JSON response from server');
      }
      
      if (data.success) {
        const message = editingId ? 'Room updated successfully!' : 'Room added successfully!';
        alert(message);
        
        // Reset form
        setFormData({ 
          name: '', 
          description: '', 
          display_order: '', 
          is_active: true 
        });
        setImageFile(null);
        setEditingId(null);
        
        // Refresh rooms list
        fetchRooms();
      } else {
        alert(data.message || 'Operation failed');
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number): Promise<void> => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/rooms/${id}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.success) {
          alert('Room deleted successfully!');
          fetchRooms();
        } else {
          alert(data.message || 'Failed to delete room');
        }
      } catch (error) {
        console.error('Error deleting room:', error);
        alert('Error deleting room. Please check console for details.');
      }
    }
  };

  const handleEdit = (room: Room): void => {
    console.log('Editing room:', room);
    // Populate the form with room data
    setFormData({
      name: room.name,
      description: room.description,
      display_order: room.display_order.toString(),
      is_active: room.is_active
    });
    setEditingId(room.id);
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = (): void => {
    setFormData({ 
      name: '', 
      description: '', 
      display_order: '', 
      is_active: true 
    });
    setImageFile(null);
    setEditingId(null);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <>
    <AdminNavbar />
    <div className="pt-16 p-6"> {/* Add pt-16 for navbar space */}
      <h2 className="text-2xl font-bold mb-6">Manage Rooms</h2>
      
      {/* Add/Edit Room Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {editingId ? `Edit Room (ID: ${editingId})` : 'Add New Room'}
          </h3>
          {editingId && (
            <button
              type="button"
              onClick={handleCancelEdit}
              className="text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel Edit
            </button>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              required
              placeholder="Enter room name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Display Order
            </label>
            <input
              type="number"
              name="display_order"
              value={formData.display_order}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Order in list"
              min="0"
            />
          </div>
          
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              rows={3}
              required
              placeholder="Enter room description"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
            />
            {imageFile && (
              <p className="text-sm text-green-600 mt-1">
                Selected: {imageFile.name}
              </p>
            )}
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_active"
              name="is_active"
              checked={formData.is_active}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="is_active" className="text-sm text-gray-700">
              Active (visible on website)
            </label>
          </div>
        </div>
        
        <div className="flex space-x-3 mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${
              editingId 
                ? 'bg-blue-600 hover:bg-blue-700' 
                : 'bg-green-600 hover:bg-green-700'
            } disabled:opacity-50`}
          >
            {loading ? 'Saving...' : editingId ? 'Update Room' : 'Add Room'}
          </button>
          
          <button
            type="button"
            onClick={() => {
              setFormData({ 
                name: '', 
                description: '', 
                display_order: '', 
                is_active: true 
              });
              setImageFile(null);
              setEditingId(null);
            }}
            className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
          >
            Clear Form
          </button>
        </div>
      </form>
      
      {/* Rooms List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Existing Rooms ({rooms.length})</h3>
        </div>
        
        {rooms.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No rooms found. Add your first room using the form above.
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Order
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rooms.map((room: Room) => (
                <tr key={room.id}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      {room.image_url && (
                        <img
                          src={room.image_url}
                          alt={room.name}
                          className="w-12 h-12 object-cover rounded mr-3"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                          }}
                        />
                      )}
                      <div>
                        <span className="font-medium block">{room.name}</span>
                        <span className="text-xs text-gray-500">ID: {room.id}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-600 truncate max-w-xs">
                      {room.description}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 rounded text-sm">
                      {room.display_order}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      room.is_active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {room.is_active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(room)}
                        className="px-3 py-1 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(room.id)}
                        className="px-3 py-1 bg-red-50 text-red-600 hover:bg-red-100 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Debug Info */}
      {/* <div className="mt-8 p-4 bg-gray-50 rounded text-sm">
        <h4 className="font-medium mb-2">API Information:</h4>
        <p>Base URL: <code className="bg-gray-200 px-1">{BASE_URL}</code></p>
        <p>API Endpoint: <code className="bg-gray-200 px-1">{API_BASE_URL}</code></p>
        <p>Total Rooms: <span className="font-medium">{rooms.length}</span></p>
        {editingId && <p>Currently editing Room ID: <span className="font-medium">{editingId}</span></p>}
      </div> */}
    </div>
    </>
  );
};

export default RoomManager;