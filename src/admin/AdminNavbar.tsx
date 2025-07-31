import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Assuming you have an AuthContext

const AdminNavbar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth(); // Get auth state and logout function
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold">
                MyApp
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {isAuthenticated && (
                  <>
                    <Link
                      to="/dashboard"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/customers"
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 transition"
                    >
                      Customers
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 transition"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {isAuthenticated && (
            <>
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                Dashboard
              </Link>
              <Link
                to="/customers"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                Customers
              </Link>
            </>
          )}
          <div className="pt-4 pb-3 border-t border-indigo-500">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="block w-full px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-700 hover:bg-indigo-800"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;