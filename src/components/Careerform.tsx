// import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { MapPin, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';

// type ContactFormData = {
//   name: string;
//   email: string;
//   phone: string;
//   designation: string;
//   message: string;
//   resume: FileList | null;
// };

// const CareerForm = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const selectedJob = location.state?.selectedJob || '';
//   const fromJobsPage = location.state?.fromJobsPage || false;

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<ContactFormData>({
//     defaultValues: {
//       designation: selectedJob
//     }
//   });

//   useEffect(() => {
//     if (selectedJob) {
//       setValue('designation', selectedJob);
//     }
//   }, [selectedJob, setValue]);

//   const onSubmit = (data: ContactFormData) => {
//     console.log('Form submitted:', data);
//     // Handle form submission (API call, etc.)
//   };

//   const handleBackToJobs = () => {
//     navigate('/careers');
//   };

//   return (
//     <section id="careersform" className="section-padding bg-white">
//       <div className="container-max">
//         <div className="max-w-4xl mx-auto card p-8">
//           {fromJobsPage && (
//             <button 
//               onClick={handleBackToJobs}
//               className="flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5 mr-1" />
//               Back to Job Openings
//             </button>
//           )}
          
//           <h2 className="text-3xl font-playfair font-bold text-sage-600 mb-6 text-center">
//             Career Application Form
//           </h2>
          
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name and Email Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   {...register('name', { required: 'Name is required' })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
//                   placeholder="Your full name"
//                 />
//                 {errors.name && (
//                   <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
//                 )}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   {...register('email', { 
//                     required: 'Email is required',
//                     pattern: {
//                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                       message: "Invalid email address"
//                     }
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
//                   placeholder="your@email.com"
//                 />
//                 {errors.email && (
//                   <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* Phone and Designation Row */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Mobile Number *
//                 </label>
//                 <input
//                   type="tel"
//                   {...register('phone', { 
//                     required: 'Phone number is required',
//                     pattern: {
//                       value: /^[0-9]{10}$/,
//                       message: "Please enter a valid 10-digit phone number"
//                     }
//                   })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
//                   placeholder="Your phone number"
//                 />
//                 {errors.phone && (
//                   <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
//                 )}
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Applying For *
//                 </label>
//                 <select
//                   {...register('designation', { required: 'Please select a position' })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
//                 >
//                   <option value="">{selectedJob || 'Select position'}</option>
//                   <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//                   <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//                   <option value="F&B Service - Captain">F&B Service - Captain</option>
//                   <option value="Engineering - Electricians">Engineering - Electricians</option>
//                   <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//                   <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//                   <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//                   <option value="Therapist Male">Therapist Male</option>
//                   <option value="Therapist Female">Therapist Female</option>
//                   <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//                   <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//                   <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//                   <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//                   <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//                   <option value="Security Guard - Lady">Security Guard - Lady</option>
//                   <option value="Security Guard - Male">Security Guard - Male</option>
//                   <option value="Industrial Trainee">Industrial Trainee</option>
//                   <option value="Job Trainee">Job Trainee</option>
//                 </select>
//                 {errors.designation && (
//                   <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
//                 )}
//               </div>
//             </div>

//             {/* Message Field */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Cover Letter / Message
//               </label>
//               <textarea
//                 {...register('message')}
//                 rows={4}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
//                 placeholder="Tell us about your experience and why you're applying..."
//               />
//             </div>

//             {/* Resume Upload */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
//               </label>
//               <div className="mt-1 flex items-center">
//                 <label className="cursor-pointer w-full">
//                   <input
//                     type="file"
//                     {...register('resume', { 
//                       required: 'Resume is required',
//                       validate: {
//                         lessThan5MB: files => files && files[0]?.size < 5000000 || 'File size should be less than 5MB',
//                         acceptedFormats: files => 
//                           files && 
//                           ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
//                           .includes(files[0]?.type) || 'Only PDF, DOC, and DOCX files are allowed'
//                       }
//                     })}
//                     className="block w-full text-sm text-gray-500
//                       file:mr-4 file:py-2 file:px-4
//                       file:rounded-lg file:border-0
//                       file:text-sm file:font-semibold
//                       file:bg-sage-100 file:text-sage-700
//                       hover:file:bg-sage-200"
//                     accept=".pdf,.doc,.docx"
//                   />
//                 </label>
//               </div>
//               {errors.resume && (
//                 <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
//               )}
//             </div>

//             {/* Contact Information */}
//             <div className="mt-8 p-6 bg-sage-50 rounded-lg">
//               <h3 className="font-semibold text-sage-700 mb-4 flex items-center">
//                 <ChevronRight className="w-5 h-5 mr-2" />
//                 For any queries about the application process:
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex items-start space-x-3">
//                   <Phone className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-700">+91 12345 67890</p>
//                     <p className="text-gray-500 text-sm">HR Department</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-3">
//                   <Mail className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="text-gray-700">careers@nimba.in</p>
//                     <p className="text-gray-500 text-sm">Email your queries</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6"
//             >
//               <span>Submit Application</span>
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerForm;



import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  designation: string;
  message: string;
  resume: FileList | null;
};

const CareerForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedJob = location.state?.selectedJob || '';
  const fromJobsPage = location.state?.fromJobsPage || false;

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      designation: selectedJob
    }
  });

  useEffect(() => {
    if (selectedJob) {
      setValue('designation', selectedJob);
    }
  }, [selectedJob, setValue]);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    // Handle form submission (API call, etc.)
  };

  const handleBackToJobs = () => {
    navigate('/careers');
  };

  return (
    <section id="careersform" className="section-padding bg-white relative z-0">
      <div className="container-max">
        <div className="max-w-4xl mx-auto card p-8">
          {/* {fromJobsPage && (
            <button 
              onClick={handleBackToJobs}
              className="flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to Job Openings
            </button>
          )} */}
          
          <h2 className="text-3xl font-playfair font-bold text-sage-600 mb-6 text-center">
            Career Application Form
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone and Designation Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  {...register('phone', { 
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
              
              <div className="relative">
  <label className="block text-sm font-medium text-gray-700 mb-2">
    Applying For *
  </label>
  <div className="relative">
    <select
      {...register('designation', { required: 'Please select a position' })}
      className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
    >
      <option value="">{selectedJob || 'Select position'}</option>
      <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
      <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
      <option value="F&B Service - Captain">F&B Service - Captain</option>
      <option value="Engineering - Electricians">Engineering - Electricians</option>
      <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
      <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
      <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
      <option value="Therapist Male">Therapist Male</option>
      <option value="Therapist Female">Therapist Female</option>
      <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
      <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
      <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
      <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
      <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
      <option value="Security Guard - Lady">Security Guard - Lady</option>
      <option value="Security Guard - Male">Security Guard - Male</option>
      <option value="Industrial Trainee">Industrial Trainee</option>
      <option value="Job Trainee">Job Trainee</option>
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
      </svg>
    </div>
  </div>
  {errors.designation && (
    <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
  )}
</div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter / Message
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400"
                placeholder="Tell us about your experience and why you're applying..."
              />
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
              </label>
              <div className="mt-1 flex items-center">
                <label className="cursor-pointer w-full">
                  <input
                    type="file"
                    {...register('resume', { 
                      required: 'Resume is required',
                      validate: {
                        lessThan5MB: files => files && files[0]?.size < 5000000 || 'File size should be less than 5MB',
                        acceptedFormats: files => 
                          files && 
                          ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
                          .includes(files[0]?.type) || 'Only PDF, DOC, and DOCX files are allowed'
                      }
                    })}
                    className="block w-full text-sm text-gray-500
                      file:mr-4 file:py-2 file:px-4
                      file:rounded-lg file:border-0
                      file:text-sm file:font-semibold
                      file:bg-sage-100 file:text-sage-700
                      hover:file:bg-sage-200"
                    accept=".pdf,.doc,.docx"
                  />
                </label>
              </div>
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
              )}
            </div>

            {/* Contact Information */}
            <div className="mt-8 p-6 bg-sage-50 rounded-lg">
              <h3 className="font-semibold text-sage-700 mb-4 flex items-center">
                <ChevronRight className="w-5 h-5 mr-2" />
                For any queries about the application process:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">+91 12345 67890</p>
                    <p className="text-gray-500 text-sm">HR Department</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-700">careers@nimba.in</p>
                    <p className="text-gray-500 text-sm">Email your queries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6"
            >
              <span>Submit Application</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;