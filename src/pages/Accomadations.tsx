// src/pages/EconomyAccommodation.tsx
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AccommodationTariff from '../components/AccommodationTariff';
import RoomAmenities from '../components/Roomamenties';
import "./Accomadation.css";
import { useNavigate } from "react-router-dom";

// Import fallback images
import defaultRoomImage from '../assets/villaimage.jpg';
import heroBackground from '../assets/villaimage.jpg';
import AccommodationTable from '../components/AccommodationTariff';
import RoomTariffSection from './Charges';
import { BASE_URL } from '../config';

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

interface ApiResponse {
  success: boolean;
  rooms: Room[];
  message?: string;
}

// Fix for process.env not defined - use direct assignment
const API_BASE_URL = `${BASE_URL}/api`;

const EconomyAccommodation: React.FC = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch rooms from API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        console.log('Fetching rooms from:', `${API_BASE_URL}/rooms`);
        
        const response = await fetch(`${API_BASE_URL}/rooms`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        console.log('API Response:', data);
        
        if (data.success) {
          setRooms(data.rooms);
          console.log(`Loaded ${data.rooms.length} rooms`);
        } else {
          setError(data.message || 'Failed to load rooms');
        }
      } catch (err) {
        console.error('Error fetching rooms:', err);
        setError('Unable to load room information. Please try again later.');
        // Fallback to empty array
        setRooms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  const handleNext = () => {
    if (rooms.length > 0) {
      setActiveIndex((prev) => (prev + 1) % rooms.length);
    }
  };

  const handlePrev = () => {
    if (rooms.length > 0) {
      setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading room options...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Luxury Accommodations | Affordable Hospital Stays</title>
        <meta name="description" content="Affordable accommodation options for patients and attendants at our hospital facility" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Luxury Accommodations</h1>
          <p className="text-white text-xl md:text-2xl mb-8">
            Luxurious accommodation designed for a comfortable stay.
          </p>
        </div>
      </section>

      {/* Room Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Room Options</h2>
          
          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-2 text-blue-600 hover:text-blue-800"
              >
                Try Again
              </button>
            </div>
          )}
          
          {rooms.length === 0 && !loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No room options available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Please check back later or contact us.</p>
            </div>
          ) : (
            <>
              {/* Room Tabs - Improved Horizontal Layout */}
              <div className="flex overflow-x-auto pb-2 mb-8 hide-scrollbar">
                <div className="flex space-x-2 min-w-max">
                  {rooms.map((room, index) => (
                    <button
                      key={room.id || index}
                      onClick={() => setActiveIndex(index)}
                      className={`px-4 py-3 rounded-lg text-center transition-all flex-shrink-0 relative ${
                        activeIndex === index
                          ? 'bg-green-700 text-white shadow-md font-semibold'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-sm whitespace-nowrap">{room.name}</span>
                      {activeIndex === index && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-green-700 rotate-45 -mb-1.5"></div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Room Display */}
              <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
                {rooms.length > 0 && (
                  <>
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={rooms[activeIndex].image_url || defaultRoomImage}
                        alt={rooms[activeIndex].name}
                        className="w-full h-[500px] object-cover"
                        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                          console.log('Image load error, using default');
                          e.currentTarget.src = defaultRoomImage;
                        }}
                      />
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-white text-2xl font-bold mb-2">{rooms[activeIndex].name}</h3>
                      <p className="text-gray-200">{rooms[activeIndex].description}</p>
                    </div>
                    
                    <button
                      onClick={handlePrev}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button
                      onClick={handleNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
              
              {/* Book Now Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-lg transition-colors"
                >
                  Book Now
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Included Amenities</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '🛏️', name: 'Comfy Beds' },
              { icon: '🚿', name: 'Attached Bath' },
              { icon: '🧼', name: 'Daily Cleaning' },
              { icon: '📺', name: 'TV' },
              { icon: '❄️', name: 'AC/Fan' },
              { icon: '🔒', name: 'Lockers' },
              { icon: '🍸', name: 'Mini Bar' },
              { icon: '🌿', name: 'Green View' }
            ].map((amenity, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">{amenity.icon}</div>
                <h3 className="font-medium text-gray-800">{amenity.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RoomTariffSection />

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Book Accommodation</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <RoomAmenities />

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">Room Type</label>
                <select className="w-full px-4 py-2 border rounded-lg">
                  {rooms.map((room, index) => (
                    <option key={room.id || index} value={room.name}>{room.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1">Check-in</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Check-out</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg" />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EconomyAccommodation;