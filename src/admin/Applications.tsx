// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Download, Trash2, ChevronLeft } from 'lucide-react';
// import AdminNavbar from './AdminNavbar';

// interface Application {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
//   designation: string;
//   message: string;
//   resume_path: string;
//   created_at: string;
// }

// const Applications = () => {
//   const [applications, setApplications] = useState<Application[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/careers');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch applications');
//         }
        
//         const data = await response.json();
//         setApplications(data);
//       } catch (err) {
//         console.error('Error fetching applications:', err);
//         setError(err.message || 'Failed to load applications');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, []);

//   const handleDelete = async (id: number) => {
//     if (!window.confirm('Are you sure you want to delete this application?')) return;
    
//     try {
//       const response = await fetch(`http://localhost:5000/api/careers/${id}`, {
//         method: 'DELETE',
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to delete application');
//       }
      
//       setApplications(applications.filter(app => app.id !== id));
//     } catch (err) {
//       console.error('Error deleting application:', err);
//       setError(err.message || 'Failed to delete application');
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric',
//       hour: '2-digit',
//       minute: '2-digit'
//     };
//     return new Date(dateString).toLocaleDateString('en-US', options);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage-600"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="max-w-4xl mx-auto p-8">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//           {error}
//         </div>
//         <Link to="/dashboard" className="flex items-center text-sage-600 hover:text-sage-800">
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Back to Dashboard
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <>
//     <AdminNavbar />
   
//     <div className="container-max py-8 pt-20">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-2xl font-bold text-sage-800">Career Applications</h1>
//           <div className="text-sm text-gray-500">
//             {applications.length} {applications.length === 1 ? 'application' : 'applications'}
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-sage-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Position</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Contact</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {applications.map((application) => (
//                   <tr key={application.id} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="font-medium text-gray-900">{application.name}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-gray-900">{application.designation}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-gray-500">{application.email}</div>
//                       <div className="text-gray-500">{application.phone}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {formatDate(application.created_at)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                       <div className="flex space-x-2">
//                         <a
//                           href={`http://localhost:5000/${application.resume_path}`}
//                           download
//                           className="text-sage-600 hover:text-sage-800 flex items-center"
//                           title="Download Resume"
//                         >
//                           <Download className="w-4 h-4 mr-1" />
//                         </a>
//                         <button
//                           onClick={() => handleDelete(application.id)}
//                           className="text-red-600 hover:text-red-800 flex items-center"
//                           title="Delete Application"
//                         >
//                           <Trash2 className="w-4 h-4 mr-1" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {applications.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-gray-500">No applications found</p>
//             <Link to="/dashboard" className="mt-4 inline-flex items-center text-sage-600 hover:text-sage-800">
//               <ChevronLeft className="w-5 h-5 mr-1" />
//               Back to Dashboard
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//      </>
//   );
// };

// export default Applications;


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Trash2, ChevronLeft } from 'lucide-react';
import AdminNavbar from './AdminNavbar';
import { BASE_URL } from '../config';

interface Application {
  id: number;
  name: string;
  email: string;
  phone: string;
  designation: string;
  message: string;
  resume_path: string;
  created_at: string;
  resume_url?: string;
}

const Applications = () => {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/careers`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch applications');
        }
        
        const data = await response.json();
        setApplications(data);
      } catch (err) {
        console.error('Error fetching applications:', err);
        setError(err.message || 'Failed to load applications');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;
    
    try {
      const response = await fetch(`${BASE_URL}/api/careers/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete application');
      }
      
      setApplications(applications.filter(app => app.id !== id));
    } catch (err) {
      console.error('Error deleting application:', err);
      setError(err.message || 'Failed to delete application');
    }
  };

  const handleDownload = async (id: number, resumePath: string) => {
    try {
      // Open the resume URL in a new tab for download
      const resumeUrl = `${BASE_URL}/api/careers/${id}/resume`;
      
      // Create a temporary anchor element to trigger the download
      const a = document.createElement('a');
      a.href = resumeUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.download = resumePath.split('/').pop() || 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      console.error('Error downloading resume:', err);
      setError(err.message || 'Failed to download resume');
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sage-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
        <Link to="/dashboard" className="flex items-center text-sage-600 hover:text-sage-800">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
      <div className="container-max py-8 pt-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-sage-800">Career Applications</h1>
            <div className="text-sm text-gray-500">
              {applications.length} {applications.length === 1 ? 'application' : 'applications'}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-sage-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Position</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-sage-800 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((application) => (
                    <tr key={application.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">{application.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900">{application.designation}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-500">{application.email}</div>
                        <div className="text-gray-500">{application.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(application.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleDownload(application.id, application.resume_path)}
                            className="text-sage-600 hover:text-sage-800 flex items-center"
                            title="Download Resume"
                          >
                            <Download className="w-4 h-4 mr-1" />
                          </button>
                          <button
                            onClick={() => handleDelete(application.id)}
                            className="text-red-600 hover:text-red-800 flex items-center"
                            title="Delete Application"
                          >
                            <Trash2 className="w-4 h-4 mr-1" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {applications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No applications found</p>
              <Link to="/dashboard" className="mt-4 inline-flex items-center text-sage-600 hover:text-sage-800">
                <ChevronLeft className="w-5 h-5 mr-1" />
                Back to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Applications;