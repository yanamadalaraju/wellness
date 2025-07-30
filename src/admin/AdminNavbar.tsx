// import React from 'react';
// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../admin/AuthContext';

// const AdminNavbar: React.FC = () => {
//   const { isAuthenticated, isAdmin, logout } = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const isAdminRoute = location.pathname.startsWith('/admin') || 
//                       location.pathname.startsWith('/customers');

//   return (
//     <nav className={`fixed w-full z-50 shadow-lg ${isAdminRoute ? 'bg-white' : 'bg-indigo-600 text-white'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <Link 
//                 to={isAdminRoute ? '/admin/dashboard' : '/'} 
//                 className={`text-xl font-bold ${isAdminRoute ? 'text-indigo-600' : 'text-white'}`}
//               >
//                 {isAdminRoute ? 'Admin Dashboard' : 'Wellness Retreat'}
//               </Link>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//               {isAdminRoute && (
//                 <>
//                   <Link
//                     to="/admin/dashboard"
//                     className={`border-indigo-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                       isAdminRoute ? 'text-gray-900' : 'text-white'
//                     }`}
//                   >
//                     Dashboard
//                   </Link>
//                   <Link
//                     to="/customers"
//                     className={`border-transparent hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
//                       isAdminRoute ? 'text-gray-900 hover:text-gray-700' : 'text-white'
//                     }`}
//                   >
//                     Contact Submissions
//                   </Link>
//                 </>
//               )}
//             </div>
//           </div>
//           <div className="hidden sm:ml-6 sm:flex sm:items-center">
//             {isAuthenticated ? (
//               <button
//                 onClick={handleLogout}
//                 className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium ${
//                   isAdminRoute 
//                     ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
//                     : 'bg-white text-indigo-600 hover:bg-indigo-50'
//                 }`}
//               >
//                 Logout
//               </button>
//             ) : isAdminRoute ? (
//               <Link
//                 to="/login"
//                 className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
//               >
//                 Admin Login
//               </Link>
//             ) : null}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default AdminNavbar;


import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const AdminNavba: React.FC = () => {
  const { isAuthenticated, isAdmin, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  const isAdminRoute = location.pathname.startsWith('/admin') || 
                      location.pathname.startsWith('/customers');

  if (!isAuthenticated && isAdminRoute) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 shadow-lg ${isAdminRoute ? 'bg-white' : 'bg-indigo-600 text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to={isAdmin ? '/admin/dashboard' : '/'} 
              className={`text-xl font-bold ${isAdminRoute ? 'text-indigo-600' : 'text-white'}`}
            >
              {isAdminRoute ? 'Admin Dashboard' : 'Wellness Retreat'}
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {isAdmin && (
              <>
                <Link
                  to="/admin/dashboard"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/admin/dashboard' 
                      ? 'border-indigo-500 text-gray-900' 
                      : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/customers"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    location.pathname === '/customers' 
                      ? 'border-indigo-500 text-gray-900' 
                      : 'border-transparent hover:border-gray-300 text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Contacts
                </Link>
              </>
            )}
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {user && (
                  <span className="text-sm font-medium">
                    {user.email}
                  </span>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  Logout
                </button>
              </div>
            ) : isAdminRoute ? (
              <Link
                to="/login"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Login
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavba;