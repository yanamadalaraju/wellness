import React from 'react';
import { Plane, Route, TrainFront } from 'lucide-react'; // or replace with custom icons

const ReachSection = () => {
  return (
    <section className="bg-[#f3f4ee] py-20 px-6 md:px-16 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-16">
          How to reach Wellness
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          {/* Air */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <Plane className="w-12 h-12 text-[#a8b398] mb-6" />
            <h3 className="text-lg font-semibold text-[#2f3e1e] mb-2">
              How to Reach Wellness by Air
            </h3>
            <p className="text-gray-700">
              Ahmedabad Airport is the nearest airport to Wellness. The distance is 58 km and you can
              easily hire a private taxi and or pre-book the taxi service from the centre.
            </p>
          </div>

          {/* Road */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <Route className="w-12 h-12 text-[#a8b398] mb-6" />
            <h3 className="text-lg font-semibold text-[#2f3e1e] mb-2">
              How to Reach Wellness by Road
            </h3>
            <p className="text-gray-700">
              Wellness is located on the Ahmedabad–Mehsana Expressway. The visitor will have to travel
              approximately 60 km from Ahmedabad city as it is located before Mehsana. It is
              advisable to use proper navigation to reach Wellness by road.
            </p>
          </div>

          {/* Rail */}
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <TrainFront className="w-12 h-12 text-[#a8b398] mb-6" />
            <h3 className="text-lg font-semibold text-[#2f3e1e] mb-2">
              How to Reach Wellness by Rail
            </h3>
            <p className="text-gray-700">
              The nearest railway stations from Wellness are Mehsana Railway Station (approximately 25
              km) and Kalupur Railway Station (approximately 64 km). You can hire a private taxi to
              get to Wellness from the station.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;
