import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';

interface DashboardMetrics {
  customers: number;
  applications: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    customers: 0,
    applications: 0
  });
  const [loading, setLoading] = useState<boolean>(true);

  // Simulate API data fetching
  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);
      try {
        // Replace with actual API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data - replace with real API response
        const mockData: DashboardMetrics = {
          customers: 1242,
          applications: 856
        };
        
        setMetrics(mockData);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <>
    <AdminNavbar />
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
          <p className="text-gray-600 mt-2">Key metrics and performance indicators</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Customers Card */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="rounded-full bg-blue-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Total Customers</p>
                {loading ? (
                  <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                ) : (
                  <p className="text-3xl font-bold text-gray-900">{metrics.customers.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>

          {/* Applications Card */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-medium">Applications</p>
                {loading ? (
                  <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                ) : (
                  <p className="text-3xl font-bold text-gray-900">{metrics.applications.toLocaleString()}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Area */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
          <div className="text-gray-600">
            <p>Additional dashboard content would go here...</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;