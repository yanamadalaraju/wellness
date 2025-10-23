// // import React, { useEffect, useState } from 'react'
// // import axios from 'axios'

// // interface ContactFormData {
// //   id: number
// //   name: string
// //   email: string
// //   phone: string
// //   subject: string
// //   message: string
// //   created_at: string
// // }

// // const AdminContactDashboard: React.FC = () => {
// //   const [contacts, setContacts] = useState<ContactFormData[]>([])
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState<string | null>(null)

// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const response = await axios.get<ContactFormData[]>('http://localhost:5000/api/contacts')
// //         setContacts(response.data)
// //       } catch (err) {
// //         setError('Failed to fetch contact data.')
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchContacts()
// //   }, [])

// //   return (
// //     <div className="min-h-screen bg-gray-50 p-6">
// //       <h1 className="text-3xl font-bold mb-6 text-sage-700">Contact Form Submissions</h1>

// //       {loading && <p className="text-gray-600">Loading...</p>}
// //       {error && <p className="text-red-500">{error}</p>}

// //       {!loading && !error && contacts.length === 0 && (
// //         <p className="text-gray-600">No submissions yet.</p>
// //       )}

// //       {!loading && contacts.length > 0 && (
// //         <div className="overflow-x-auto shadow border border-gray-200 rounded-lg">
// //           <table className="min-w-full bg-white divide-y divide-gray-200">
// //             <thead className="bg-sage-100">
// //               <tr>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Email</th>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Subject</th>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Message</th>
// //                 <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
// //               </tr>
// //             </thead>
// //             <tbody className="divide-y divide-gray-100">
// //               {contacts.map((contact) => (
// //                 <tr key={contact.id} className="hover:bg-sage-50">
// //                   <td className="px-4 py-2">{contact.name}</td>
// //                   <td className="px-4 py-2">{contact.email}</td>
// //                   <td className="px-4 py-2">{contact.phone}</td>
// //                   <td className="px-4 py-2">{contact.subject}</td>
// //                   <td className="px-4 py-2">{contact.message}</td>
// //                   <td className="px-4 py-2 text-sm text-gray-500">
// //                     {new Date(contact.created_at).toLocaleString()}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default AdminContactDashboard




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { 
//   Mail, 
//   Phone, 
//   User, 
//   MessageSquare, 
//   Calendar, 
//   Search, 
//   Filter, 
//   ChevronLeft, 
//   ChevronRight,
//   Trash2
// } from 'lucide-react';
// import AdminNavbar from './adminNavbar';

// interface ContactFormData {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
//   created_at: string;
// }

// const AdminContactDashboard: React.FC = () => {
//   const [contacts, setContacts] = useState<ContactFormData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(10);
//   const [selectedContact, setSelectedContact] = useState<ContactFormData | null>(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get<ContactFormData[]>('http://localhost:5000/api/contacts');
//         setContacts(response.data);
//       } catch (err) {
//         setError('Failed to fetch contact data. Please try again later.');
//         console.error('Error fetching contacts:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   const filteredContacts = contacts.filter(contact => {
//     const searchLower = searchTerm.toLowerCase();
//     return (
//       contact.name.toLowerCase().includes(searchLower) ||
//       contact.email.toLowerCase().includes(searchLower) ||
//       (contact.phone && contact.phone.includes(searchTerm)) ||
//       contact.subject.toLowerCase().includes(searchLower) ||
//       contact.message.toLowerCase().includes(searchLower)
//     );
//   });

//   // Pagination logic
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredContacts.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);

//   const handleDelete = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this contact submission?')) {
//       try {
//         await axios.delete(`http://localhost:5000/api/contacts/${id}`);
//         setContacts(contacts.filter(contact => contact.id !== id));
//       } catch (err) {
//         setError('Failed to delete contact. Please try again.');
//         console.error('Error deleting contact:', err);
//       }
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading contact submissions...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
//           <p>{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//     <div className="min-h-screen bg-gray-50 p-6">
    
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//           <div>
//             <h1 className="text-3xl font-bold text-sage-800 mb-2">Contact Form Submissions</h1>
//             <p className="text-gray-600">
//               {contacts.length} total submissions • {filteredContacts.length} filtered
//             </p>
//           </div>
          
//           <div className="mt-4 md:mt-0 flex space-x-2">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <Search className="h-5 w-5 text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search submissions..."
//                 className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
//                 value={searchTerm}
//                 onChange={(e) => {
//                   setSearchTerm(e.target.value);
//                   setCurrentPage(1);
//                 }}
//               />
//             </div>
//             <button className="px-4 py-2 border border-gray-300 rounded-lg flex items-center text-gray-700 hover:bg-gray-100">
//               <Filter className="h-5 w-5 mr-2" />
//               Filters
//             </button>
//           </div>
//         </div>

//         {contacts.length === 0 ? (
//           <div className="bg-white rounded-lg shadow p-8 text-center">
//             <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//             <h3 className="text-lg font-medium text-gray-900 mb-1">No submissions yet</h3>
//             <p className="text-gray-500">Contact form submissions will appear here.</p>
//           </div>
//         ) : (
//           <div className="bg-white shadow rounded-lg overflow-hidden">
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-sage-50">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       <div className="flex items-center">
//                         <User className="h-4 w-4 mr-2" />
//                         Name
//                       </div>
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       <div className="flex items-center">
//                         <Mail className="h-4 w-4 mr-2" />
//                         Email
//                       </div>
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       <div className="flex items-center">
//                         <Phone className="h-4 w-4 mr-2" />
//                         Phone
//                       </div>
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       Subject
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       <div className="flex items-center">
//                         <Calendar className="h-4 w-4 mr-2" />
//                         Date
//                       </div>
//                     </th>
//                     <th className="px-6 py-3 text-right text-xs font-medium text-sage-800 uppercase tracking-wider">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {currentItems.map((contact) => (
//                     <tr 
//                       key={contact.id} 
//                       className="hover:bg-sage-50 cursor-pointer"
//                       onClick={() => setSelectedContact(contact)}
//                     >
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="font-medium text-gray-900">{contact.name}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                         {contact.email}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                         {contact.phone || '-'}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-sage-100 text-sage-800">
//                           {contact.subject}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                         {formatDate(contact.created_at)}
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <button
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleDelete(contact.id);
//                           }}
//                           className="text-red-600 hover:text-red-900 p-1"
//                           title="Delete"
//                         >
//                           <Trash2 className="h-5 w-5" />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//               <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
//                 <div>
//                   <p className="text-sm text-gray-700">
//                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
//                     <span className="font-medium">
//                       {Math.min(indexOfLastItem, filteredContacts.length)}
//                     </span>{' '}
//                     of <span className="font-medium">{filteredContacts.length}</span> results
//                   </p>
//                 </div>
//                 <div>
//                   <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
//                     <button
//                       onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//                       disabled={currentPage === 1}
//                       className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <ChevronLeft className="h-5 w-5" />
//                     </button>
//                     {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
//                       <button
//                         key={page}
//                         onClick={() => setCurrentPage(page)}
//                         className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
//                           currentPage === page
//                             ? 'bg-sage-600 border-sage-600 text-white'
//                             : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     ))}
//                     <button
//                       onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//                       disabled={currentPage === totalPages}
//                       className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//                     >
//                       <ChevronRight className="h-5 w-5" />
//                     </button>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Contact Detail Modal */}
//       {selectedContact && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex justify-between items-start mb-4">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   Contact Details
//                 </h3>
//                 <button
//                   onClick={() => setSelectedContact(null)}
//                   className="text-gray-400 hover:text-gray-500"
//                 >
//                   <span className="sr-only">Close</span>
//                   <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Name</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedContact.name}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Email</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Phone</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedContact.phone || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Subject</h4>
//                   <p className="mt-1 text-sm text-gray-900">{selectedContact.subject}</p>
//                 </div>
//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Submitted</h4>
//                   <p className="mt-1 text-sm text-gray-900">{formatDate(selectedContact.created_at)}</p>
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-sm font-medium text-gray-500">Message</h4>
//                 <div className="mt-1 p-3 bg-gray-50 rounded-md">
//                   <p className="text-sm text-gray-900 whitespace-pre-line">{selectedContact.message}</p>
//                 </div>
//               </div>

//               <div className="mt-6 flex justify-end space-x-3">
//                 <button
//                   type="button"
//                   onClick={() => setSelectedContact(null)}
//                   className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
//                 >
//                   Close
//                 </button>
//                 <a
//                   href={`mailto:${selectedContact.email}`}
//                   className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
//                 >
//                   Reply via Email
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default AdminContactDashboard;



// AdminContactDashboard.tsx
// import React, { useEffect, useState, useMemo } from 'react';
// import axios from 'axios';
// import { 
//   Download,
//   Calendar,
//   Filter,
//   Trash2,
//   Mail
// } from 'lucide-react';
// import * as XLSX from 'xlsx';
// import { BASE_URL } from '../config';
// import AdminNavbar from '../admin/AdminNavbar';
// import DataTable from './Datatable';

// interface ContactFormData {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   medical_conditions: string;
//   applying_from: string;
//   message: string;
//   created_at: string;
// }

// const AdminContactDashboard: React.FC = () => {
//   const [contacts, setContacts] = useState<ContactFormData[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedContact, setSelectedContact] = useState<ContactFormData | null>(null);
//   const [dateRange, setDateRange] = useState({
//     startDate: '',
//     endDate: ''
//   });

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await axios.get<ContactFormData[]>(`${BASE_URL}/api/contacts`);
//         setContacts(response.data);
//       } catch (err) {
//         setError('Failed to fetch contact data. Please try again later.');
//         console.error('Error fetching contacts:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   // Filter contacts based on date range
//   const filteredContacts = useMemo(() => {
//     if (!dateRange.startDate && !dateRange.endDate) {
//       return contacts;
//     }

//     const start = dateRange.startDate ? new Date(dateRange.startDate) : null;
//     const end = dateRange.endDate ? new Date(dateRange.endDate) : null;
    
//     if (end) {
//       end.setHours(23, 59, 59, 999); // Include entire end date
//     }

//     return contacts.filter(contact => {
//       const contactDate = new Date(contact.created_at);
      
//       if (start && end) {
//         return contactDate >= start && contactDate <= end;
//       } else if (start) {
//         return contactDate >= start;
//       } else if (end) {
//         return contactDate <= end;
//       }
      
//       return true;
//     });
//   }, [contacts, dateRange]);

//   const handleDelete = async (id: number) => {
//     if (window.confirm('Are you sure you want to delete this contact submission?')) {
//       try {
//         await axios.delete(`${BASE_URL}/api/contacts/${id}`);
//         setContacts(contacts.filter(contact => contact.id !== id));
//       } catch (err) {
//         setError('Failed to delete contact. Please try again.');
//         console.error('Error deleting contact:', err);
//       }
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit',
//     };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };

//   const exportToExcel = () => {
//     // Use the filteredContacts for export
//     const dataToExport = filteredContacts;

//     // Prepare data for Excel with S.No instead of ID
//     const excelData = dataToExport.map((contact, index) => ({
//       'S.No': index + 1,
//       'Name': contact.name,
//       'Email': contact.email,
//       'Phone': contact.phone,
//       'Medical Conditions': contact.medical_conditions,
//       'Applying From': contact.applying_from,
//       'Message': contact.message,
//       'Submitted Date': formatDate(contact.created_at)
//     }));

//     // Create workbook and worksheet
//     const workbook = XLSX.utils.book_new();
//     const worksheet = XLSX.utils.json_to_sheet(excelData);

//     // Add worksheet to workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Submissions');

//     // Generate Excel file
//     const fileName = `contact_submissions_${new Date().toISOString().split('T')[0]}.xlsx`;
//     XLSX.writeFile(workbook, fileName);
//   };

//   const columns = [
//     {
//       header: 'Name',
//       accessor: 'name',
//     },
//     {
//       header: 'Email',
//       accessor: 'email',
//     },
//     {
//       header: 'Phone',
//       accessor: 'phone',
//       render: (value: string) => value || '-'
//     },
//     {
//       header: 'Medical Conditions',
//       accessor: 'medical_conditions',
//       render: (value: string) => (
//         <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-sage-100 text-sage-800 max-w-xs truncate">
//           {value}
//         </span>
//       )
//     },
//     {
//       header: 'Applying From',
//       accessor: 'applying_from',
//     },
//     {
//       header: 'Date',
//       accessor: 'created_at',
//       render: (value: string) => formatDate(value)
//     },
//     {
//       header: 'Actions',
//       accessor: 'id',
//       render: (value: number, row: ContactFormData) => (
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             handleDelete(value);
//           }}
//           className="text-red-600 hover:text-red-900 p-1"
//           title="Delete"
//         >
//           <Trash2 className="h-5 w-5" />
//         </button>
//       )
//     }
//   ];

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading contact submissions...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
//           <p>{error}</p>
//           <button 
//             onClick={() => window.location.reload()}
//             className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <AdminNavbar />
    
//       <div className="min-h-screen bg-gray-50 pt-20 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
//             <div>
//               <h1 className="text-3xl font-bold text-sage-800 mb-2">Contact Form Submissions</h1>
//               <p className="text-gray-600">
//                 {filteredContacts.length} filtered submissions of {contacts.length} total
//               </p>
//             </div>
            
//             <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
//               {/* Date Range Filter */}
//               <div className="flex space-x-2 items-center">
//                 <Calendar className="h-5 w-5 text-gray-400" />
//                 <input
//                   type="date"
//                   className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                   value={dateRange.startDate}
//                   onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
//                   placeholder="Start Date"
//                 />
//                 <span className="text-gray-500">to</span>
//                 <input
//                   type="date"
//                   className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
//                   value={dateRange.endDate}
//                   onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
//                   placeholder="End Date"
//                 />
//                 {(dateRange.startDate || dateRange.endDate) && (
//                   <button
//                     onClick={() => setDateRange({ startDate: '', endDate: '' })}
//                     className="text-red-600 hover:text-red-800 text-sm"
//                   >
//                     Clear
//                   </button>
//                 )}
//               </div>

//               {/* Export Button */}
//               <button
//                 onClick={exportToExcel}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center hover:bg-green-700"
//               >
//                 <Download className="h-5 w-5 mr-2" />
//                 Export Excel
//               </button>
//             </div>
//           </div>

//           {contacts.length === 0 ? (
//             <div className="bg-white rounded-lg shadow p-8 text-center">
//               <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-medium text-gray-900 mb-1">No submissions yet</h3>
//               <p className="text-gray-500">Contact form submissions will appear here.</p>
//             </div>
//           ) : (
//             <DataTable
//               columns={columns}
//               data={filteredContacts} // Use filteredContacts instead of contacts
//               pageSize={10}
//               searchable={true}
//               onRowClick={setSelectedContact}
//             />
//           )}
//         </div>

//         {/* Contact Detail Modal */}
//         {selectedContact && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-xl font-bold text-gray-900">
//                     Contact Details
//                   </h3>
//                   <button
//                     onClick={() => setSelectedContact(null)}
//                     className="text-gray-400 hover:text-gray-500"
//                   >
//                     <span className="sr-only">Close</span>
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Name</h4>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.name}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Email</h4>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.email}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Phone</h4>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.phone || 'Not provided'}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Medical Conditions</h4>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.medical_conditions}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Applying From</h4>
//                     <p className="mt-1 text-sm text-gray-900">{selectedContact.applying_from}</p>
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-medium text-gray-500">Submitted</h4>
//                     <p className="mt-1 text-sm text-gray-900">{formatDate(selectedContact.created_at)}</p>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-sm font-medium text-gray-500">Message</h4>
//                   <div className="mt-1 p-3 bg-gray-50 rounded-md">
//                     <p className="text-sm text-gray-900 whitespace-pre-line">{selectedContact.message}</p>
//                   </div>
//                 </div>

//                 {/* <div className="mt-6 flex justify-end space-x-3">
//                   <button
//                     type="button"
//                     onClick={() => setSelectedContact(null)}
//                     className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
//                   >
//                     Close
//                   </button>
//                   <a
//                     href={`mailto:${selectedContact.email}`}
//                     className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
//                   >
//                     Reply via Email
//                   </a>
//                 </div> */}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default AdminContactDashboard;




// AdminContactDashboard.tsx
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { 
  Download,
  Calendar,
  Trash2,
  Mail
} from 'lucide-react';
import * as XLSX from 'xlsx';
import { BASE_URL } from '../config';
import AdminNavbar from '../admin/AdminNavbar';
import DataTable from './Datatable';

interface ContactFormData {
  id: number;
  name: string;
  email: string;
  phone: string;
  created_at: string;
}

const AdminContactDashboard: React.FC = () => {
  const [contacts, setContacts] = useState<ContactFormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactFormData | null>(null);
  const [dateRange, setDateRange] = useState({
    startDate: '',
    endDate: ''
  });

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get<ContactFormData[]>(`${BASE_URL}/api/contacts`);
        setContacts(response.data);
      } catch (err) {
        setError('Failed to fetch contact data. Please try again later.');
        console.error('Error fetching contacts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  // Filter contacts based on date range
  const filteredContacts = useMemo(() => {
    if (!dateRange.startDate && !dateRange.endDate) {
      return contacts;
    }

    const start = dateRange.startDate ? new Date(dateRange.startDate) : null;
    const end = dateRange.endDate ? new Date(dateRange.endDate) : null;
    
    if (end) {
      end.setHours(23, 59, 59, 999); // Include entire end date
    }

    return contacts.filter(contact => {
      const contactDate = new Date(contact.created_at);
      
      if (start && end) {
        return contactDate >= start && contactDate <= end;
      } else if (start) {
        return contactDate >= start;
      } else if (end) {
        return contactDate <= end;
      }
      
      return true;
    });
  }, [contacts, dateRange]);

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this contact submission?')) {
      try {
        await axios.delete(`${BASE_URL}/api/contacts/${id}`);
        setContacts(contacts.filter(contact => contact.id !== id));
      } catch (err) {
        setError('Failed to delete contact. Please try again.');
        console.error('Error deleting contact:', err);
      }
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const exportToExcel = () => {
    // Use the filteredContacts for export
    const dataToExport = filteredContacts;

    // Prepare data for Excel with S.No instead of ID
    const excelData = dataToExport.map((contact, index) => ({
      'S.No': index + 1,
      'Name': contact.name,
      'Email': contact.email,
      'Phone': contact.phone,
      'Submitted Date': formatDate(contact.created_at)
    }));

    // Create workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(excelData);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contact Submissions');

    // Generate Excel file
    const fileName = `contact_submissions_${new Date().toISOString().split('T')[0]}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };

  const columns = [
    {
      header: 'Name',
      accessor: 'name',
    },
    {
      header: 'Email',
      accessor: 'email',
    },
    {
      header: 'Phone',
      accessor: 'phone',
      render: (value: string) => value || '-'
    },
    {
      header: 'Date',
      accessor: 'created_at',
      render: (value: string) => formatDate(value)
    },
    {
      header: 'Actions',
      accessor: 'id',
      render: (value: number, row: ContactFormData) => (
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(value);
          }}
          className="text-red-600 hover:text-red-900 p-1"
          title="Delete"
        >
          <Trash2 className="h-5 w-5" />
        </button>
      )
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading contact submissions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-md">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-2 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
    
      <div className="min-h-screen bg-gray-50 pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-sage-800 mb-2">Contact Form Submissions</h1>
              <p className="text-gray-600">
                {filteredContacts.length} filtered submissions of {contacts.length} total
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              {/* Date Range Filter */}
              <div className="flex space-x-2 items-center">
                <Calendar className="h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={dateRange.startDate}
                  onChange={(e) => setDateRange(prev => ({ ...prev, startDate: e.target.value }))}
                  placeholder="Start Date"
                />
                <span className="text-gray-500">to</span>
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  value={dateRange.endDate}
                  onChange={(e) => setDateRange(prev => ({ ...prev, endDate: e.target.value }))}
                  placeholder="End Date"
                />
                {(dateRange.startDate || dateRange.endDate) && (
                  <button
                    onClick={() => setDateRange({ startDate: '', endDate: '' })}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Export Button */}
              <button
                onClick={exportToExcel}
                className="px-4 py-2 bg-green-600 text-white rounded-lg flex items-center hover:bg-green-700"
              >
                <Download className="h-5 w-5 mr-2" />
                Export Excel
              </button>
            </div>
          </div>

          {contacts.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-1">No submissions yet</h3>
              <p className="text-gray-500">Contact form submissions will appear here.</p>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={filteredContacts} // Use filteredContacts instead of contacts
              pageSize={10}
              searchable={true}
              onRowClick={setSelectedContact}
            />
          )}
        </div>

        {/* Contact Detail Modal */}
        {selectedContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Contact Details
                  </h3>
                  <button
                    onClick={() => setSelectedContact(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Name</h4>
                    <p className="mt-1 text-lg text-gray-900 font-medium">{selectedContact.name}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Email</h4>
                    <p className="mt-1 text-sm text-gray-900 break-all">{selectedContact.email}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Phone</h4>
                    <p className="mt-1 text-sm text-gray-900">{selectedContact.phone || 'Not provided'}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Submitted</h4>
                    <p className="mt-1 text-sm text-gray-900">{formatDate(selectedContact.created_at)}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedContact(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
                  >
                    Close
                  </button>
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sage-600 hover:bg-sage-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sage-500"
                  >
                    Reply via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminContactDashboard;