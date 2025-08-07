import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import AccommodationTariff from '../components/AccommodationTariff';
import RoomAmenities from '../components/Roomamenties';

const EconomyAccommodation: React.FC = () => {
  const rooms = [
    {
      name: 'Premium Cottege Villa',
      image: 'https://i.pinimg.com/1200x/bd/c6/5d/bdc65d05d312d0894b03c4be0f6ce74e.jpg',
      description: 'Comfortable double occupancy room with essential amenities'
    },
    {
      name: 'Cottege Villa',
      image: 'https://i.pinimg.com/1200x/72/fe/60/72fe6032a8872b33d7a2dfb306244744.jpg',
      description: 'Cozy single occupancy room perfect for individual stays'
    },
    {
      name: 'Deluxe Room with backyard',
      image: 'https://i.pinimg.com/736x/3e/7a/50/3e7a50885983f868c90b9b714e6c17fc.jpg',
      description: 'Spacious double room with upgraded furnishings'
    },
    {
      name: 'Suite 3 bed with lounge',
      image: 'https://i.pinimg.com/736x/b9/a0/d0/b9a0d0039bd2acd69a612e3819596930.jpg',
      description: 'Premium single room with additional comforts'
    },
    {
      name: 'Suite 2 bed with lounge',
      image: 'https://i.pinimg.com/736x/27/09/a8/2709a80cf988785fa304dccbbda0c6d2.jpg',
      description: 'Basic accommodation for economically weaker patients'
    },
     {
      name: 'Premium Rooms',
      image: 'https://i.pinimg.com/736x/e7/83/c5/e783c5c6402da0edb34a9ea1baf0393c.jpg',
      description: 'Basic accommodation for economically weaker patients'
    },
       {
      name: '	Dormitory',
      image: 'https://i.pinimg.com/1200x/78/a4/cc/78a4cc2368e51676803fbf9fdf9add63.jpg',
      description: 'Basic accommodation for economically weaker patients'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % rooms.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  return (
    <>
      <Helmet>
        <title>Luxury Accommodations | Affordable Hospital Stays</title>
        <meta name="description" content="Affordable accommodation options for patients and attendants at our hospital facility" />
      </Helmet>

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/9e/ff/59/9eff59344ce942f96598948c9b0fde64.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">Luxury Accommodations</h1>
          <p className="text-white text-xl md:text-2xl mb-8">
     Luxurious accommodation designed for a comfortable stay.
          </p>
          {/* <button 
            onClick={() => setShowBookingModal(true)}
            className="bg-white text-green-800 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors"
          >
            Book Now
          </button> */}
        </div>
      </section>

      {/* Intro Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://i.pinimg.com/1200x/80/82/0f/80820ff7139643408ac803de05a3994d.jpg" 
                alt="Economy Accommodation Building" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Economy Facilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  We offer a range of affordable accommodation options to suit different needs and budgets:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Free Wards:</strong> Basic accommodation for those in financial need</li>
                  <li><strong>Economy Rooms:</strong> Single and double occupancy with essential amenities</li>
                  <li><strong>Executive Rooms:</strong> Enhanced comfort at still-affordable rates</li>
                </ul>
                <p>
                  All our economy accommodations include clean bedding, attached bathrooms, and access to common facilities.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="px-6 py-2 bg-green-700 text-white rounded-full font-medium hover:bg-green-800 transition-colors">
                  View Amenities
                </button>
                <button className="px-6 py-2 border border-green-700 text-green-700 rounded-full font-medium hover:bg-green-50 transition-colors">
                  Pricing Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Room Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Room Options</h2>
          
          {/* Room Tabs */}
          <div className="flex overflow-x-auto pb-2 mb-8 scrollbar-hide">
            <div className="flex space-x-4">
              {rooms.map((room, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-3 rounded-full whitespace-nowrap ${
                    activeIndex === index
                      ? 'bg-green-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Room Display */}
          <div className="relative bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={rooms[activeIndex].image}
                alt={rooms[activeIndex].name}
                className="w-full h-[500px] object-cover"
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
          </div>
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
              { icon: '🍽️', name: 'Dining Access' },
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

<AccommodationTariff />


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
                    <option key={index} value={room.name}>{room.name}</option>
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