import React from 'react';
import icon from '../assets/2ps-7.png'; // Replace with your icon path

const RoomAmenities: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold mb-2 border-b pb-2">ROOM AMENITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          
          {/* Column 1: Room Features */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ROOM FEATURES</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>An economy Accommodation</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Attached Bathroom with shower</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Closet</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div>
            <h3 className="text-lg font-semibold mb-4">TECHNOLOGY</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Electronic Safe</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Television with satellite connection</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Centralised Instrumental Music</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Air - Cooler (on chargeable basis)</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Daily Housekeeping Service</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={icon} alt="icon" className="w-5 h-5 mt-1" />
                <span>Hot water facility in restricted hours</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RoomAmenities;
