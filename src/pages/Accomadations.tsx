import React from 'react';
import { Helmet } from 'react-helmet';

const EconomyAccommodation: React.FC = () => (
  <>
    <Helmet>
      <title>Economy Accommodation | Jindal Naturecure Institute</title>
      <meta
        name="description"
        content="Economy rooms at Jindal Naturecure Institute: basic, well‑ventilated, furnished rooms with attached bathrooms and essential amenities."
      />
    </Helmet>

    <main className="bg-gray-50 text-gray-800">
      {/* Banner */}
      <section className="bg-[url('/images/economy-banner.jpg')] bg-cover bg-center h-[300px] flex items-center justify-center text-white text-4xl font-bold shadow-md">
        <h1 className="bg-black bg-opacity-40 px-6 py-4 rounded-lg">Economy Accommodation</h1>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <p className="text-lg leading-relaxed">
          Fully furnished, spacious, well‑ventilated rooms tastefully designed with basic amenities, available
          in three categories: <strong>Economy</strong> (including Free, Basic, Standard/Executive), Premium,
          Deluxe. Ideal for those seeking treatment within a budget.
        </p>
      </section>

      {/* Room Types */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-center border-b pb-2">Room Types</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Room Card */}
            {[
              {
                title: 'Economy Double Room',
                occupancy: 'Shared by two patients of same gender or family',
                size: 'Approx. 270 sq ft',
                highlights: 'Independent room, 2 separate beds, TV, attached bathroom with shower',
                tariff:
                  '₹1,700/day per patient; admission gap: 6 months; minimum stay: 10 days; maximum stay: 20 days.',
              },
              {
                title: 'Economy Single Room',
                occupancy: 'Single occupancy',
                size: 'Approx. 220 sq ft',
                highlights: 'Independent room, single bed, TV, attached bathroom with shower, work desk',
                tariff: '₹2,000/day for one patient; admission gap: 6 months; stay: 10–20 days.',
              },
              {
                title: 'Executive Single / Double Room',
                occupancy: '',
                size: '',
                highlights: 'Executive category listed under economy section.',
                tariff: 'Single ₹4,500/day; Double ₹5,000 + ₹2,000 for second occupant.',
              },
            ].map((room, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-pink-600 mb-2">{room.title}</h3>
                {room.occupancy && <p><strong>Occupancy:</strong> {room.occupancy}</p>}
                {room.size && <p><strong>Size:</strong> {room.size}</p>}
                <p><strong>Highlights:</strong> {room.highlights}</p>
                <p><strong>Tariff:</strong> {room.tariff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-pink-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-2">Amenities & Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-disc list-inside text-lg">
            {[
              'Attached bathroom with shower',
              'Television with satellite connection',
              'Electronic safe',
              'Closet and work desk',
              'Air‑cooler/ heater available on request (₹250/day)',
              'Daily housekeeping service',
              'Hot water (limited hours)',
              'Newspaper service (chargeable)',
            ].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-red-600 font-semibold">
            Note: Towels and toiletries are <strong>not</strong> provided in Economy rooms. Please bring your own or purchase onsite.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-2">Booking Rules & Stay Conditions</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Minimum stay: 10 days; Maximum stay: 20 days. Readmission gap must be at least 6 months.</li>
            <li>No room-level assignment — economy is booked bed-wise; changing co-patient is not permitted.</li>
            <li>Check-in: from 11 a.m.; Check-out: by 9 a.m.</li>
          </ul>
        </div>
      </section>

      {/* Payment */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center border-b pb-2">Payment & Cancellation</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Advance deposit equivalent to three days’ charges must be paid with application. Booking is confirmed only after deposit.</li>
            <li>Tariffs subject to change; GST applies when room tariff exceeds ₹5,000/day/person.</li>
            <li>Cancellation/postponement policy: at least 3 working days’ notice needed; partial or full forfeiture applies based on timing. Frequent changes may lead to forfeiture.</li>
          </ul>
        </div>
      </section>
    </main>
  </>
);

export default EconomyAccommodation;
