import React, { useState, useEffect } from 'react';
import AdminNavbar from './AdminNavbar';
import { BASE_URL } from '../config';

interface DashboardMetrics {
  customers: number;
  applications: number;
  contacts: number;
  alertImages: number;
}

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    customers: 0,
    applications: 0,
    contacts: 0,
    alertImages: 0
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  // Fetch metrics from API
  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);
      setError('');
      try {
        // Fetch all metrics in parallel
        const [applicationsRes, contactsRes, alertImagesRes] = await Promise.all([
          fetch(`${BASE_URL}/api/careers`),
          fetch(`${BASE_URL}/api/contacts`),
          fetch(`${BASE_URL}/api/alert-images`)
        ]);

        // Check if all responses are OK
        if (!applicationsRes.ok || !contactsRes.ok || !alertImagesRes.ok) {
          throw new Error('Failed to fetch one or more metrics');
        }

        // Parse responses
        const applications = await applicationsRes.json();
        const contacts = await contactsRes.json();
        const alertImages = await alertImagesRes.json();

        // Calculate metrics
        const metricsData: DashboardMetrics = {
          customers: contacts.length, // Assuming contacts represent customers
          applications: applications.length,
          contacts: contacts.length,
          alertImages: alertImages.length
        };

        setMetrics(metricsData);
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setError('Failed to load dashboard data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  // If you have actual users/customers endpoint, you can use this instead:
  /*
  useEffect(() => {
    const fetchMetrics = async () => {
      setLoading(true);
      try {
        // Replace with your actual endpoints
        const endpoints = [
          `${BASE_URL}/api/users/count`, // If you have users count endpoint
          `${BASE_URL}/api/careers`,
          `${BASE_URL}/api/contacts`,
          `${BASE_URL}/api/alert-images`
        ];

        const [usersRes, applicationsRes, contactsRes, alertImagesRes] = await Promise.all(
          endpoints.map(endpoint => fetch(endpoint))
        );

        const usersCount = usersRes.ok ? await usersRes.json() : { count: 0 };
        const applications = applicationsRes.ok ? await applicationsRes.json() : [];
        const contacts = contactsRes.ok ? await contactsRes.json() : [];
        const alertImages = alertImagesRes.ok ? await alertImagesRes.json() : [];

        setMetrics({
          customers: usersCount.count || contacts.length, // Fallback to contacts count
          applications: applications.length,
          contacts: contacts.length,
          alertImages: alertImages.length
        });
      } catch (error) {
        console.error('Error fetching metrics:', error);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);
  */

  return (
    <>
      <AdminNavbar />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto mt-20">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Business Dashboard</h1>
            <p className="text-gray-600 mt-2">Key metrics and performance indicators</p>
            {error && (
              <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Customers Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-blue-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total Contacts</p>
                  {loading ? (
                    <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                  ) : (
                    <p className="text-3xl font-bold text-gray-900">{metrics.customers.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Applications Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-green-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Career Applications</p>
                  {loading ? (
                    <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                  ) : (
                    <p className="text-3xl font-bold text-gray-900">{metrics.applications.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Contacts Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-purple-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Contact Submissions</p>
                  {loading ? (
                    <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                  ) : (
                    <p className="text-3xl font-bold text-gray-900">{metrics.contacts.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Alert Images Card */}
            <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center">
                <div className="rounded-full bg-orange-100 p-3 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-medium">Alert Images</p>
                  {loading ? (
                    <div className="mt-1 h-8 bg-gray-200 rounded animate-pulse w-24"></div>
                  ) : (
                    <p className="text-3xl font-bold text-gray-900">{metrics.alertImages.toLocaleString()}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="/admin/alert-image" 
                  className="block p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  Manage Alert Images
                </a>
                <a 
                  href="/admin/applications" 
                  className="block p-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                >
                  View Applications
                </a>
                <a 
                  href="/admin/contacts" 
                  className="block p-3 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors"
                >
                  View Contacts
                </a>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-md p-6 md:col-span-2">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
              <div className="text-gray-600">
                {loading ? (
                  <div className="space-y-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p>📊 <strong>{metrics.applications}</strong> career applications received</p>
                    <p>📞 <strong>{metrics.contacts}</strong> contact form submissions</p>
                    <p>🖼️ <strong>{metrics.alertImages}</strong> alert images uploaded</p>
                    <p className="text-sm text-gray-500 mt-4">Last updated: {new Date().toLocaleString()}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;