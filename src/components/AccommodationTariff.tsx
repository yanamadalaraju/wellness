import React from "react";

const AccommodationTariff: React.FC = () => {
  const data = [
    {
      sl: 1,
      accommodation: "Premium Cottege Villa",
      maxOccupancy: 4,
      accomCount: 2,
      maxHeadCount: 8,
      unitMax: "",
      firstGuest: 10000,
      secondGuest: 10000,
      thirdGuest: 4000,
      fourthGuest: 4000,
      servant: 1500,
      total: 29500,
    },
    {
      sl: 2,
      accommodation: "Cottege Villa",
      maxOccupancy: 2,
      accomCount: 2,
      maxHeadCount: 4,
      unitMax: "",
      firstGuest: 8000,
      secondGuest: 8000,
      thirdGuest: 0,
      fourthGuest: 0,
      servant: 1500,
      total: 17500,
    },
    {
      sl: 3,
      accommodation: "Deluxe Room with backyard",
      maxOccupancy: 2,
      accomCount: 4,
      maxHeadCount: 8,
      unitMax: "",
      firstGuest: 6000,
      secondGuest: 3000,
      thirdGuest: null,
      fourthGuest: null,
      servant: null,
      total: 9000,
    },
    {
      sl: 4,
      accommodation: "Suite 3 bed with lounge",
      maxOccupancy: 3,
      accomCount: 3,
      maxHeadCount: 9,
      unitMax: "",
      firstGuest: 5000,
      secondGuest: 4000,
      thirdGuest: 3000,
      fourthGuest: null,
      servant: null,
      total: 12000,
    },
    {
      sl: 5,
      accommodation: "Suite 2 bed with lounge",
      maxOccupancy: 2,
      accomCount: 5,
      maxHeadCount: 10,
      unitMax: "",
      firstGuest: 6000,
      secondGuest: 3000,
      thirdGuest: null,
      fourthGuest: null,
      servant: null,
      total: 9000,
    },
    {
      sl: 6,
      accommodation: "Premium Rooms",
      maxOccupancy: 2,
      accomCount: 66,
      maxHeadCount: 132,
      unitMax: "",
      firstGuest: 5000,
      secondGuest: 2000,
      thirdGuest: null,
      fourthGuest: null,
      servant: null,
      total: 7000,
    },
    {
      sl: 7,
      accommodation: "Dormitory",
      maxOccupancy: 27,
      accomCount: 2,
      maxHeadCount: 27,
      unitMax: "",
      firstGuest: 2000,
      secondGuest: null,
      thirdGuest: null,
      fourthGuest: null,
      servant: null,
      total: 2000,
    },
  ];

  const formatValue = (val: number | string | null) =>
    val === null || val === undefined || val === "-" ? "–" : val;

  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Accommodation Tariff
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Your Home Away from Home, Spacious Rooms with Natural Ventilation and
          Every Comfort for Optimal Healing.
        </p>
        <div className="overflow-auto border rounded-lg">
          <table className="min-w-full table-auto border-collapse text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2">SL</th>
                <th className="border px-4 py-2">Accommodations</th>
                <th className="border px-4 py-2">Max Occupancy</th>
                {/* <th className="border px-4 py-2">Accom. Count</th>
                <th className="border px-4 py-2">Max Head Count</th>
                <th className="border px-4 py-2">Unit Max</th> */}
                <th className="border px-4 py-2">1st Guest</th>
                <th className="border px-4 py-2">2nd Guest</th>
                <th className="border px-4 py-2">3rd Guest</th>
                <th className="border px-4 py-2">4th Guest</th>
                <th className="border px-4 py-2">Servant</th>
                <th className="border px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.sl} className="text-center">
                  <td className="border px-2 py-2">{row.sl}</td>
                  <td className="border px-2 py-2 text-left">
                    {row.accommodation}
                  </td>
                  <td className="border px-2 py-2">{row.maxOccupancy}</td>
                  <td className="border px-2 py-2">{row.accomCount}</td>
                  <td className="border px-2 py-2">{row.maxHeadCount}</td>
                  {/* <td className="border px-2 py-2">{formatValue(row.unitMax)}</td>
                  <td className="border px-2 py-2">{formatValue(row.firstGuest)}</td>
                  <td className="border px-2 py-2">{formatValue(row.secondGuest)}</td> */}
                  <td className="border px-2 py-2">{formatValue(row.thirdGuest)}</td>
                  <td className="border px-2 py-2">{formatValue(row.fourthGuest)}</td>
                  <td className="border px-2 py-2">{formatValue(row.servant)}</td>
                  <td className="border px-2 py-2 font-semibold">{row.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AccommodationTariff;
