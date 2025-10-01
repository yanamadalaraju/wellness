
// import React, { useState } from "react";

// const AccommodationCharges: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"accommodation" | "treatment">(
//     "accommodation"
//   );

//   const accommodationData = [
//     {
//       category: "Deluxe",
//       rows: [
//         { type: "Super Deluxe Nest", p1: 20000, p2: 20000, p3: 7500, p4: 7500, servant: 2500 },
//         { type: "Deluxe Nest", p1: 17000, p2: 17000, p3: 6000, p4: 6000, servant: 2500 },
//         { type: "Deluxe Hut", p1: 17000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
//         { type: "Deluxe Double Room", p1: 12000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
//       ],
//     },
//     {
//       category: "Premium",
//       rows: [
//         { type: "Nest", p1: 13000, p2: 13000, p3: 5500, p4: 5500, servant: 2500 },
//         { type: "Hut", p1: 13000, p2: 5500, p3: "-", p4: "-", servant: 2500 },
//         { type: "Cottage", p1: 12000, p2: 5000, p3: "-", p4: "-", servant: 2500 },
//       ],
//     },
//     {
//       category: "Economy",
//       rows: [
//         { type: "Executive Single Room", p1: 4500, p2: "-", p3: "-", p4: "-", servant: "-" },
//         { type: "Executive Double Room", p1: 5000, p2: 2000, p3: "-", p4: "-", servant: "-" },
//         { type: "Economy Single Room", p1: 2000, p2: "-", p3: "-", p4: "-", servant: "-" },
//         { type: "Economy Double Room", p1: 1700, p2: 1700, p3: "-", p4: "-", servant: "-" },
//         { type: "Free Ward", p1: "Free Bed", p2: "-", p3: "-", p4: "-", servant: "-" },
//       ],
//     },
//   ];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl">
//         {/* Tabs */}
//         <div className="flex">
//           <button
//             className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
//               activeTab === "accommodation"
//                 ? "border-blue-600 text-blue-600 bg-gray-100"
//                 : "border-transparent text-gray-500 hover:text-blue-500"
//             }`}
//             onClick={() => setActiveTab("accommodation")}
//           >
//             Accommodation Charges
//           </button>
//           <button
//             className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
//               activeTab === "treatment"
//                 ? "border-blue-600 text-blue-600 bg-gray-100"
//                 : "border-transparent text-gray-500 hover:text-blue-500"
//             }`}
//             onClick={() => setActiveTab("treatment")}
//           >
//             Treatment Charges
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === "accommodation" && (
//             <>
//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Accommodation Charges
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full border border-gray-300 text-sm text-center">
//                   <thead className="bg-gray-100 text-gray-800">
//                     <tr>
//                       <th className="border p-3">Accommodation Type</th>
//                       <th className="border p-3">
//                         1st Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         2nd Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         3rd Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         4th Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         Servant Boarding <br /> and Lodging
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {accommodationData.map((group, i) => (
//                       <React.Fragment key={i}>
//                         <tr className="bg-gray-100 font-semibold">
//                           <td colSpan={6} className="text-left px-4 py-2">
//                             {group.category}
//                           </td>
//                         </tr>
//                         {group.rows.map((row, j) => (
//                           <tr key={j} className="hover:bg-gray-50">
//                             <td className="border px-3 py-2 text-left">{row.type}</td>
//                             <td className="border px-3 py-2">{row.p1}</td>
//                             <td className="border px-3 py-2">{row.p2}</td>
//                             <td className="border px-3 py-2">{row.p3}</td>
//                             <td className="border px-3 py-2">{row.p4}</td>
//                             <td className="border px-3 py-2">{row.servant}</td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <p className="text-gray-600 text-xs mt-4">
//                 Note: Charges are per day basis and subject to change.
//               </p>
//             </>
//           )}

//           {activeTab === "treatment" && (
//             <div className="text-center py-12 text-gray-600">
//               <h2 className="text-xl font-semibold mb-4">Treatment Charges</h2>
//               <p>Treatment charges data will be displayed here...</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccommodationCharges;






// import React, { useState } from "react";

// const AccommodationCharges: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<"accommodation" | "treatment">(
//     "accommodation"
//   );

//   const accommodationData = [
//     {
//       category: "Deluxe",
//       rows: [
//         { type: "Super Deluxe Nest", p1: 20000, p2: 20000, p3: 7500, p4: 7500, servant: 2500 },
//         { type: "Deluxe Nest", p1: 17000, p2: 17000, p3: 6000, p4: 6000, servant: 2500 },
//         { type: "Deluxe Hut", p1: 17000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
//         { type: "Deluxe Double Room", p1: 12000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
//       ],
//     },
//     {
//       category: "Premium",
//       rows: [
//         { type: "Nest", p1: 13000, p2: 13000, p3: 5500, p4: 5500, servant: 2500 },
//         { type: "Hut", p1: 13000, p2: 5500, p3: "-", p4: "-", servant: 2500 },
//         { type: "Cottage", p1: 12000, p2: 5000, p3: "-", p4: "-", servant: 2500 },
//       ],
//     },
//     {
//       category: "Economy",
//       rows: [
//         { type: "Executive Single Room", p1: 4500, p2: "-", p3: "-", p4: "-", servant: "-" },
//         { type: "Executive Double Room", p1: 5000, p2: 2000, p3: "-", p4: "-", servant: "-" },
//         { type: "Economy Single Room", p1: 2000, p2: "-", p3: "-", p4: "-", servant: "-" },
//         { type: "Economy Double Room", p1: 1700, p2: 1700, p3: "-", p4: "-", servant: "-" },
//         { type: "Free Ward", p1: "Free Bed", p2: "-", p3: "-", p4: "-", servant: "-" },
//       ],
//     },
//   ];

//   const treatmentCharges = [
//     {
//       category: "Hydro Therapy",
//       items: [
//         "Circular Jet",
//         "Cold Hip bath",
//         "Cold Immersion bath",
//         "Contrast arm bath",
//         "Contrast foot bath",
//         "Effusion hot & cold or Neutral Effusion",
//         "Enema",
//         "Hot and Cold hip bath",
//         "Hot foot bath",
//         "Hot foot Immersion bath",
//         "Hot hip bath",
//         "Ice Therapy",
//         "Neutral Half bath",
//         "Neutral Immersion bath",
//         "Sitz bath",
//         "Sponge bath",
//         "Spinal Bath",
//         "Vaginal Douche treatment",
//         "Trunk pack",
//       ],
//     },
//     {
//       category: "Mud Therapy",
//       items: ["Eye Pack", "Mud pack", "Mud to face", "Partial Mud Application"],
//     },
//     {
//       category: "Oil Therapy",
//       items: ["Oil injection"],
//     },
//     {
//       category: "Heat Therapy",
//       items: [
//         "Facial steam inhalation",
//         "Infrared lamp treatment",
//         "Sauna Bath/Steam room",
//         "Steam box",
//       ],
//     },
//     {
//       category: "Pack Treatments",
//       items: [
//         "Abdominal pack",
//         "Ankle Pack",
//         "Chest Pack",
//         "G.H Pack",
//         "Kidney pack",
//         "Knee Pack",
//         "Leg pack",
//         "Spinal Pack",
//         "Throat pack",
//         "Towel pack",
//         "Troma pack",
//         "Wet girdle pack",
//       ],
//     },
//   ];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl">
//         {/* Tabs */}
//         <div className="flex">
//           <button
//             className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
//               activeTab === "accommodation"
//                 ? "border-blue-600 text-blue-600 bg-gray-100"
//                 : "border-transparent text-gray-500 hover:text-blue-500"
//             }`}
//             onClick={() => setActiveTab("accommodation")}
//           >
//             Accommodation Charges
//           </button>
//           <button
//             className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
//               activeTab === "treatment"
//                 ? "border-blue-600 text-blue-600 bg-gray-100"
//                 : "border-transparent text-gray-500 hover:text-blue-500"
//             }`}
//             onClick={() => setActiveTab("treatment")}
//           >
//             Treatment Charges
//           </button>
//         </div>

//         {/* Tab Content */}
//         <div className="p-6">
//           {activeTab === "accommodation" && (
//             <>
//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Accommodation Charges
//               </h2>
//               <div className="overflow-x-auto">
//                 <table className="w-full border border-gray-300 text-sm text-center">
//                   <thead className="bg-gray-100 text-gray-800">
//                     <tr>
//                       <th className="border p-3">Accommodation Type</th>
//                       <th className="border p-3">
//                         1st Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         2nd Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         3rd Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         4th Patient <br /> (INR / Per Day)
//                       </th>
//                       <th className="border p-3">
//                         Servant Boarding <br /> and Lodging
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {accommodationData.map((group, i) => (
//                       <React.Fragment key={i}>
//                         <tr className="bg-gray-100 font-semibold">
//                           <td colSpan={6} className="text-left px-4 py-2">
//                             {group.category}
//                           </td>
//                         </tr>
//                         {group.rows.map((row, j) => (
//                           <tr key={j} className="hover:bg-gray-50">
//                             <td className="border px-3 py-2 text-left">{row.type}</td>
//                             <td className="border px-3 py-2">{row.p1}</td>
//                             <td className="border px-3 py-2">{row.p2}</td>
//                             <td className="border px-3 py-2">{row.p3}</td>
//                             <td className="border px-3 py-2">{row.p4}</td>
//                             <td className="border px-3 py-2">{row.servant}</td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <p className="text-gray-600 text-xs mt-4">
//                 Note: Charges are per day basis and subject to change.
//               </p>
//             </>
//           )}

//           {activeTab === "treatment" && (
//             <div>
//               <h2 className="text-xl font-semibold mb-6 text-center">
//                 Treatment Charges
//               </h2>
//               {treatmentCharges.map((section, i) => (
//                 <div key={i} className="mb-6">
//                   <h3 className="text-lg font-semibold text-blue-600 mb-2">
//                     {section.category}
//                   </h3>
//                   <ul className="list-disc list-inside space-y-1 text-gray-700">
//                     {section.items.map((item, j) => (
//                       <li key={j}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//               <p className="text-gray-600 text-xs mt-4">
//                 Note: The above treatments are included in your stay.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccommodationCharges;





import React, { useState } from "react";

const AccommodationCharges: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"accommodation" | "treatment">(
    "accommodation"
  );

  const accommodationData = [
    {
      category: "Deluxe",
      rows: [
        { type: "Super Deluxe Nest", p1: 20000, p2: 20000, p3: 7500, p4: 7500, servant: 2500 },
        { type: "Deluxe Nest", p1: 17000, p2: 17000, p3: 6000, p4: 6000, servant: 2500 },
        { type: "Deluxe Hut", p1: 17000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
        { type: "Deluxe Double Room", p1: 12000, p2: 6000, p3: "-", p4: "-", servant: 2500 },
      ],
    },
    {
      category: "Premium",
      rows: [
        { type: "Nest", p1: 13000, p2: 13000, p3: 5500, p4: 5500, servant: 2500 },
        { type: "Hut", p1: 13000, p2: 5500, p3: "-", p4: "-", servant: 2500 },
        { type: "Cottage", p1: 12000, p2: 5000, p3: "-", p4: "-", servant: 2500 },
      ],
    },
    {
      category: "Economy",
      rows: [
        { type: "Executive Single Room", p1: 4500, p2: "-", p3: "-", p4: "-", servant: "-" },
        { type: "Executive Double Room", p1: 5000, p2: 2000, p3: "-", p4: "-", servant: "-" },
        { type: "Economy Single Room", p1: 2000, p2: "-", p3: "-", p4: "-", servant: "-" },
        { type: "Economy Double Room", p1: 1700, p2: 1700, p3: "-", p4: "-", servant: "-" },
        { type: "Free Ward", p1: "Free Bed", p2: "-", p3: "-", p4: "-", servant: "-" },
      ],
    },
  ];

  const treatmentCharges = [
    {
      category: "Hydro Therapy",
      items: [
        "Circular Jet",
        "Cold Hip bath",
        "Cold Immersion bath",
        "Contrast arm bath",
        "Contrast foot bath",
        "Effusion hot & cold or Neutral Effusion",
        "Enema",
        "Hot and Cold hip bath",
        "Hot foot bath",
        "Hot foot Immersion bath",
        "Hot hip bath",
        "Ice Therapy",
        "Neutral Half bath",
        "Neutral Immersion bath",
        "Sitz bath",
        "Sponge bath",
        "Spinal Bath",
        "Vaginal Douche treatment",
        "Trunk pack",
      ],
    },
    {
      category: "Mud Therapy",
      items: ["Eye Pack", "Mud pack", "Mud to face", "Partial Mud Application"],
    },
    {
      category: "Oil Therapy",
      items: ["Oil injection"],
    },
    {
      category: "Heat Therapy",
      items: [
        "Facial steam inhalation",
        "Infrared lamp treatment",
        "Sauna Bath/Steam room",
        "Steam box",
      ],
    },
    {
      category: "Pack Treatments",
      items: [
        "Abdominal pack",
        "Ankle Pack",
        "Chest Pack",
        "G.H Pack",
        "Kidney pack",
        "Knee Pack",
        "Leg pack",
        "Spinal Pack",
        "Throat pack",
        "Towel pack",
        "Troma pack",
        "Wet girdle pack",
      ],
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl">
        {/* Tabs */}
        {/* <div className="flex">
          <button
            className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
              activeTab === "accommodation"
                ? "border-blue-600 text-blue-600 bg-gray-100"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("accommodation")}
          >
            Accommodation Charges
          </button>
          <button
            className={`w-1/2 text-center py-4 text-lg font-medium border-b-2 transition ${
              activeTab === "treatment"
                ? "border-blue-600 text-blue-600 bg-gray-100"
                : "border-transparent text-gray-500 hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("treatment")}
          >
            Treatment Charges
          </button>
        </div> */}

        {/* Tab Content */}
        {/* <div className="p-6">
          
          {activeTab === "accommodation" && (
            <>
              <h2 className="text-xl font-semibold mb-6 text-center">
                Accommodation Charges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm text-center">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="border p-3">Accommodation Type</th>
                      <th className="border p-3">
                        1st Patient <br /> (INR / Per Day)
                      </th>
                      <th className="border p-3">
                        2nd Patient <br /> (INR / Per Day)
                      </th>
                      <th className="border p-3">
                        3rd Patient <br /> (INR / Per Day)
                      </th>
                      <th className="border p-3">
                        4th Patient <br /> (INR / Per Day)
                      </th>
                      <th className="border p-3">
                        Servant Boarding <br /> and Lodging
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {accommodationData.map((group, i) => (
                      <React.Fragment key={i}>
                        <tr className="bg-gray-100 font-semibold">
                          <td colSpan={6} className="text-left px-4 py-2">
                            {group.category}
                          </td>
                        </tr>
                        {group.rows.map((row, j) => (
                          <tr key={j} className="hover:bg-gray-50">
                            <td className="border px-3 py-2 text-left">{row.type}</td>
                            <td className="border px-3 py-2">{row.p1}</td>
                            <td className="border px-3 py-2">{row.p2}</td>
                            <td className="border px-3 py-2">{row.p3}</td>
                            <td className="border px-3 py-2">{row.p4}</td>
                            <td className="border px-3 py-2">{row.servant}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-xs mt-4">
                Note: Charges are per day basis and subject to change.
              </p>
            </>
          )}

          {activeTab === "treatment" && (
            <div>
              <h2 className="text-xl font-semibold mb-6 text-center">
                Treatment Charges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100 text-gray-800">
                    <tr>
                      <th className="border p-3 text-left">Category</th>
                      <th className="border p-3 text-left">Treatment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {treatmentCharges.map((section, i) => (
                      <React.Fragment key={i}>
                        <tr className="bg-gray-100 font-semibold">
                          <td colSpan={2} className="px-4 py-2">
                            {section.category}
                          </td>
                        </tr>
                        {section.items.map((item, j) => (
                          <tr key={j} className="hover:bg-gray-50">
                            <td className="border px-3 py-2"></td>
                            <td className="border px-3 py-2">{item}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-xs mt-4">
                Note: The above treatments are included in your stay.
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default AccommodationCharges;
