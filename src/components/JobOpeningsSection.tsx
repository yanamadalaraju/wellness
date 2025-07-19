// import React, { useState } from 'react';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const jobOpenings = [
//   {
//     title: 'F&B Production (vegetarian property) Conti CDP) - Indian Commi-2nd',
//     details: {
//       vacancies: 1,
//       description: 'Salary & Other Facility – Salary is No Bar Plus Food & Accommodation',
//     },
//   },
//   {
//     title: 'F&B Production (vegetarian property) Conti CDP) - Bakery Commi-3rd',
//     details: {
//       vacancies: 1,
//       description: 'Salary negotiable based on experience',
//     },
//   },
//   { 
//     title: 'F&B Service - Captain- Restaurant',
//     details: {
//       vacancies: 2,
//       description: 'Competitive salary with service benefits',
//     },
//   },
//   { 
//     title: 'Engineering - Electricians',
//     details: {
//       vacancies: 1,
//       description: 'Technical position with accommodation provided',
//     },
//   },
//   { 
//     title: 'Front Office - FOS/GSA',
//     details: {
//       vacancies: 3,
//       description: 'Front desk position with customer service focus',
//     },
//   },
//   { 
//     title: 'Doctor - Naturopathy (BAMS & BNYS)',
//     details: {
//       vacancies: 2,
//       description: 'Medical professional position with competitive package',
//     },
//   },
//   { 
//     title: 'Nutritionist / Dietician',
//     details: {
//       vacancies: 1,
//       description: 'Nutrition specialist role with flexible hours',
//     },
//   },
//   { 
//     title: 'Therapist Male & Female',
//     details: {
//       vacancies: 4,
//       description: 'Therapy positions available for both genders',
//     },
//   },
//   { 
//     title: 'Sales & Marketing Manager (Female)',
//     details: {
//       vacancies: 1,
//       description: 'Leadership role in sales and marketing department',
//     },
//   },
//   { 
//     title: 'Front Desk – Receptionist',
//     details: {
//       vacancies: 2,
//       description: 'First point of contact for guests and visitors',
//     },
//   },
//   { 
//     title: 'Multi Skilled Technician (Electrician Trade)',
//     details: {
//       vacancies: 1,
//       description: 'Electrical maintenance specialist position',
//     },
//   },
//   { 
//     title: 'Multi Skilled Technician (AC Trade)',
//     details: {
//       vacancies: 1,
//       description: 'HVAC specialist with comprehensive benefits',
//     },
//   },
//   { 
//     title: 'House Keeping Lady GSA',
//     details: {
//       vacancies: 5,
//       description: 'Housekeeping position with accommodation options',
//     },
//   },
//   { 
//     title: 'Security Guard - Lady',
//     details: {
//       vacancies: 3,
//       description: 'Female security personnel position',
//     },
//   },
//   { 
//     title: 'Security Guard - Male',
//     details: {
//       vacancies: 3,
//       description: 'Male security personnel position',
//     },
//   },
//   { 
//     title: 'Industrial Trainee',
//     details: {
//       vacancies: 10,
//       description: 'Training position for fresh graduates',
//     },
//   },
//   { 
//     title: 'Job Trainee',
//     details: {
//       vacancies: 8,
//       description: 'Entry-level position with training provided',
//     },
//   },
// ];

// const JobOpeningsSection = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const navigate = useNavigate();

//   const toggleIndex = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleApplyNow = (jobTitle: string) => {
//     navigate('/careers', { state: { selectedJob: jobTitle } });
//   };

//   return (
//     <section className="bg-[#f3f4ee] py-20 px-6 md:px-16 text-center">
//       <div className="max-w-5xl mx-auto text-left">
//         <h2 className="text-4xl font-serif text-gray-800 text-center mb-10">
//           Current Job Openings
//         </h2>

//         <div className="space-y-2">
//           {jobOpenings.map((job, index) => {
//             const isOpen = index === openIndex;
//             return (
//               <div
//                 key={index}
//                 className={`bg-white rounded-lg shadow-sm ${
//                   isOpen ? 'border-l-4 border-green-700' : ''
//                 }`}
//               >
//                 <button
//                   className="flex justify-between items-center w-full text-left px-6 py-4 text-green-900 font-medium hover:bg-gray-50 transition"
//                   onClick={() => toggleIndex(index)}
//                 >
//                   <span className="text-lg">{job.title}</span>
//                   {isOpen ? (
//                     <ChevronDown className="w-5 h-5" />
//                   ) : (
//                     <ChevronRight className="w-5 h-5" />
//                   )}
//                 </button>

//                 {/* Details */}
//                 {isOpen && (
//                   <div className="px-6 pb-5 text-gray-700 space-y-3">
//                     {job.details ? (
//                       <>
//                         <p>
//                           <strong>No. of Vacancies:</strong> {job.details.vacancies}
//                         </p>
//                         <p>
//                           <strong>Salary & Benefits:</strong> {job.details.description}
//                         </p>
//                       </>
//                     ) : (
//                       <p>Details not specified</p>
//                     )}
//                     <button 
//                       className="mt-4 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md transition-colors"
//                       onClick={() => handleApplyNow(job.title)}
//                     >
//                       Apply Now
//                     </button>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobOpeningsSection;


import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const jobOpenings = [
  {
    title: 'F&B Production (vegetarian property) Conti CDP) - Indian Commi-2nd',
    details: {
      vacancies: 1,
      description: 'Salary & Other Facility – Salary is No Bar Plus Food & Accommodation',
    },
  },
  {
    title: 'F&B Production (vegetarian property) Conti CDP) - Bakery Commi-3rd',
    details: {
      vacancies: 1,
      description: 'Salary negotiable based on experience',
    },
  },
  { 
    title: 'F&B Service - Captain- Restaurant',
    details: {
      vacancies: 2,
      description: 'Competitive salary with service benefits',
    },
  },
  { 
    title: 'Engineering - Electricians',
    details: {
      vacancies: 1,
      description: 'Technical position with accommodation provided',
    },
  },
  { 
    title: 'Front Office - FOS/GSA',
    details: {
      vacancies: 3,
      description: 'Front desk position with customer service focus',
    },
  },
  { 
    title: 'Doctor - Naturopathy (BAMS & BNYS)',
    details: {
      vacancies: 2,
      description: 'Medical professional position with competitive package',
    },
  },
  { 
    title: 'Nutritionist / Dietician',
    details: {
      vacancies: 1,
      description: 'Nutrition specialist role with flexible hours',
    },
  },
  { 
    title: 'Therapist Male & Female',
    details: {
      vacancies: 4,
      description: 'Therapy positions available for both genders',
    },
  },
  { 
    title: 'Sales & Marketing Manager (Female)',
    details: {
      vacancies: 1,
      description: 'Leadership role in sales and marketing department',
    },
  },
  { 
    title: 'Front Desk – Receptionist',
    details: {
      vacancies: 2,
      description: 'First point of contact for guests and visitors',
    },
  },
  { 
    title: 'Multi Skilled Technician (Electrician Trade)',
    details: {
      vacancies: 1,
      description: 'Electrical maintenance specialist position',
    },
  },
  { 
    title: 'Multi Skilled Technician (AC Trade)',
    details: {
      vacancies: 1,
      description: 'HVAC specialist with comprehensive benefits',
    },
  },
  { 
    title: 'House Keeping Lady GSA',
    details: {
      vacancies: 5,
      description: 'Housekeeping position with accommodation options',
    },
  },
  { 
    title: 'Security Guard - Lady',
    details: {
      vacancies: 3,
      description: 'Female security personnel position',
    },
  },
  { 
    title: 'Security Guard - Male',
    details: {
      vacancies: 3,
      description: 'Male security personnel position',
    },
  },
  { 
    title: 'Industrial Trainee',
    details: {
      vacancies: 10,
      description: 'Training position for fresh graduates',
    },
  },
  { 
    title: 'Job Trainee',
    details: {
      vacancies: 8,
      description: 'Entry-level position with training provided',
    },
  },
];

const JobOpeningsSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleApplyNow = (jobTitle: string) => {
    // Store the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // Navigate to the career form with the selected job title
    navigate('#careersform', { 
      state: { 
        selectedJob: jobTitle,
        fromJobsPage: true,
        scrollPosition 
      },
      replace: true
    });
    
    // Scroll to the form after a brief delay
    setTimeout(() => {
      const element = document.getElementById('careersform');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section className="bg-[#f3f4ee] py-20 px-6 md:px-16 text-center">
      <div className="max-w-5xl mx-auto text-left">
        <h2 className="text-4xl font-serif text-gray-800 text-center mb-10">
          Current Job Openings
        </h2>

        <div className="space-y-2">
          {jobOpenings.map((job, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-sm ${
                  isOpen ? 'border-l-4 border-green-700' : ''
                }`}
              >
                <button
                  className="flex justify-between items-center w-full text-left px-6 py-4 text-green-900 font-medium hover:bg-gray-50 transition"
                  onClick={() => toggleIndex(index)}
                >
                  <span className="text-lg">{job.title}</span>
                  {isOpen ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-700 space-y-3">
                    {job.details ? (
                      <>
                        <p>
                          <strong>No. of Vacancies:</strong> {job.details.vacancies}
                        </p>
                        <p>
                          <strong>Salary & Benefits:</strong> {job.details.description}
                        </p>
                      </>
                    ) : (
                      <p>Details not specified</p>
                    )}
                    <button 
                      className="mt-4 bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md transition-colors"
                      onClick={() => handleApplyNow(job.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobOpeningsSection;