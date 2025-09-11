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
//     <section id="careersform" className="section-padding bg-white relative z-0">
//       <div className="container-max">
//         <div className="max-w-4xl mx-auto card p-8">
//           {/* {fromJobsPage && (
//             <button 
//               onClick={handleBackToJobs}
//               className="flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors"
//             >
//               <ChevronLeft className="w-5 h-5 mr-1" />
//               Back to Job Openings
//             </button>
//           )} */}
          
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
              
//               <div className="relative">
//   <label className="block text-sm font-medium text-gray-700 mb-2">
//     Applying For *
//   </label>
//   <div className="relative">
//     <select
//       {...register('designation', { required: 'Please select a position' })}
//       className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
//     >
//       <option value="">{selectedJob || 'Select position'}</option>
//       <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//       <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//       <option value="F&B Service - Captain">F&B Service - Captain</option>
//       <option value="Engineering - Electricians">Engineering - Electricians</option>
//       <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//       <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//       <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//       <option value="Therapist Male">Therapist Male</option>
//       <option value="Therapist Female">Therapist Female</option>
//       <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//       <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//       <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//       <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//       <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//       <option value="Security Guard - Lady">Security Guard - Lady</option>
//       <option value="Security Guard - Male">Security Guard - Male</option>
//       <option value="Industrial Trainee">Industrial Trainee</option>
//       <option value="Job Trainee">Job Trainee</option>
//     </select>
//     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//       <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//       </svg>
//     </div>
//   </div>
//   {errors.designation && (
//     <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
//   )}
// </div>
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
//                     <p className="text-gray-700">careers@nowal.in</p>
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


//--------------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react';
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
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');

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

//  const onSubmit = async (data: ContactFormData) => {
//   setIsSubmitting(true);
//   setSubmitError('');
//   try {
//     const formData = new FormData();
    
//     formData.append('name', data.name);
//     formData.append('email', data.email);
//     formData.append('phone', data.phone);
//     formData.append('designation', data.designation);
//     formData.append('message', data.message || '');
    
//     if (data.resume && data.resume[0]) {
//       formData.append('resume', data.resume[0]); // Make sure this matches backend
//     }

//     const response = await fetch('http://localhost:5000/api/careers', {
//       method: 'POST',
//       body: formData,
//       // No Content-Type header - let browser set it with boundary
//     });

//     if (!response.ok) {
//       let errorData;
//       try {
//         errorData = await response.json();
//       } catch (e) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       throw new Error(errorData.error || 'Failed to submit application');
//     }

//     const result = await response.json();
//     console.log('Success:', result);
//     navigate('/thank-you');
//   } catch (error) {
//     console.error('Error:', error);
//     setSubmitError(error.message || 'Failed to submit application. Please try again.');
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   const handleBackToJobs = () => {
//     navigate('/careers');
//   };

//   return (
//     <section id="careersform" className="section-padding bg-white relative z-0">
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

//           {submitError && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//               {submitError}
//             </div>
//           )}
          
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
              
//               <div className="relative">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Applying For *
//                 </label>
//                 <div className="relative">
//                   <select
//                     {...register('designation', { required: 'Please select a position' })}
//                     className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
//                   >
//                     <option value="">{selectedJob || 'Select position'}</option>
//                     <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//                     <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//                     <option value="F&B Service - Captain">F&B Service - Captain</option>
//                     <option value="Engineering - Electricians">Engineering - Electricians</option>
//                     <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//                     <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//                     <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//                     <option value="Therapist Male">Therapist Male</option>
//                     <option value="Therapist Female">Therapist Female</option>
//                     <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//                     <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//                     <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//                     <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//                     <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//                     <option value="Security Guard - Lady">Security Guard - Lady</option>
//                     <option value="Security Guard - Male">Security Guard - Male</option>
//                     <option value="Industrial Trainee">Industrial Trainee</option>
//                     <option value="Job Trainee">Job Trainee</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                     </svg>
//                   </div>
//                 </div>
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
//             {/* <div className="mt-8 p-6 bg-sage-50 rounded-lg">
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
//                     <p className="text-gray-700">careers@nowal.in</p>
//                     <p className="text-gray-500 text-sm">Email your queries</p>
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//               {!isSubmitting && <ChevronRight className="w-5 h-5" />}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerForm;
//---------------------------------------------------------------------------------------------


// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { MapPin, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
// import { BASE_URL } from '../config';

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
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');

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

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     setSubmitError('');
//     try {
//       const formData = new FormData();
      
//       formData.append('name', data.name);
//       formData.append('email', data.email);
//       formData.append('phone', data.phone);
//       formData.append('designation', data.designation);
//       formData.append('message', data.message || '');
      
//       if (data.resume && data.resume[0]) {
//         formData.append('resume', data.resume[0]);
//       } else {
//         throw new Error('Resume is required');
//       }

//       const response = await fetch(`${BASE_URL}/api/careers`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         let errorData;
//         try {
//           errorData = await response.json();
//         } catch (e) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         throw new Error(errorData.error || 'Failed to submit application');
//       }

//       const result = await response.json();
//       console.log('Success:', result);
//       navigate('/');
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitError(error.message || 'Failed to submit application. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleBackToJobs = () => {
//     navigate('/careers');
//   };

//   return (
//     <section id="careersform" className="section-padding bg-white relative z-0">
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

//           {submitError && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//               {submitError}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
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
              
//               {/* <div className="relative">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Applying For *
//                 </label>
//                 <div className="relative">
//                   <select
//                     {...register('designation', { required: 'Please select a position' })}
//                     className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
//                   >
//                     <option value="">{selectedJob || 'Select position'}</option>
//                     <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//                     <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//                     <option value="F&B Service - Captain">F&B Service - Captain</option>
//                     <option value="Engineering - Electricians">Engineering - Electricians</option>
//                     <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//                     <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//                     <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//                     <option value="Therapist Male">Therapist Male</option>
//                     <option value="Therapist Female">Therapist Female</option>
//                     <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//                     <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//                     <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//                     <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//                     <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//                     <option value="Security Guard - Lady">Security Guard - Lady</option>
//                     <option value="Security Guard - Male">Security Guard - Male</option>
//                     <option value="Industrial Trainee">Industrial Trainee</option>
//                     <option value="Job Trainee">Job Trainee</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                     </svg>
//                   </div>
//                 </div>
//                 {errors.designation && (
//                   <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
//                 )}
//               </div> */}
//               <div className="relative">
//   <label className="block text-sm font-medium text-gray-700 mb-2">
//     Applying For *
//   </label>
//   <div className="relative">
//     <select
//       {...register('designation', { required: 'Please select a position' })}
//       className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
//       value={selectedJob}
//     >
//       <option value="">Select position</option>
//       <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//       <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//       <option value="F&B Service - Captain">F&B Service - Captain</option>
//       <option value="Engineering - Electricians">Engineering - Electricians</option>
//       <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//       <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//       <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//       <option value="Therapist Male">Therapist Male</option>
//       <option value="Therapist Female">Therapist Female</option>
//       <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//       <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//       <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//       <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//       <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//       <option value="Security Guard - Lady">Security Guard - Lady</option>
//       <option value="Security Guard - Male">Security Guard - Male</option>
//       <option value="Industrial Trainee">Industrial Trainee</option>
//       <option value="Job Trainee">Job Trainee</option>
//     </select>
//     <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//       <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//         <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//       </svg>
//     </div>
//   </div>
//   {errors.designation && (
//     <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
//   )}
// </div>
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

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//               {!isSubmitting && <ChevronRight className="w-5 h-5" />}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerForm;




//-------------------------------kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk---------------------------------------


// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { MapPin, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
// import { BASE_URL } from '../config';

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
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState('');

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

//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     setSubmitError('');
//     try {
//       const formData = new FormData();
      
//       formData.append('name', data.name);
//       formData.append('email', data.email);
//       formData.append('phone', data.phone);
//       formData.append('designation', data.designation);
//       formData.append('message', data.message || '');
      
//       if (data.resume && data.resume[0]) {
//         formData.append('resume', data.resume[0]);
//       } else {
//         throw new Error('Resume is required');
//       }

//       const response = await fetch(`${BASE_URL}/api/careers`, {
//         method: 'POST',
//         body: formData,
//       });

//       if (!response.ok) {
//         let errorData;
//         try {
//           errorData = await response.json();
//         } catch (e) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         throw new Error(errorData.error || 'Failed to submit application');
//       }

//       const result = await response.json();
//       console.log('Success:', result);
//       navigate('/');
//     } catch (error) {
//       console.error('Error:', error);
//       setSubmitError(error.message || 'Failed to submit application. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleBackToJobs = () => {
//     navigate('/careers');
//   };

//   return (
//     <section id="careersform" className="section-padding bg-white relative z-0">
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

//           {submitError && (
//             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//               {submitError}
//             </div>
//           )}
          
//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
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
              
//               <div className="relative">
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Applying For *
//                 </label>
//                 <div className="relative">
//                   <select
//                     {...register('designation', { required: 'Please select a position' })}
//                     className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 appearance-none bg-white hover:border-gray-400 transition-colors"
//                   >
//                     <option value="">{selectedJob || 'Select position'}</option>
//                     <option value="F&B Production (Indian Commi-2nd)">F&B Production (Indian Commi-2nd)</option>
//                     <option value="F&B Production (Bakery Commi-3rd)">F&B Production (Bakery Commi-3rd)</option>
//                     <option value="F&B Service - Captain">F&B Service - Captain</option>
//                     <option value="Engineering - Electricians">Engineering - Electricians</option>
//                     <option value="Front Office - FOS/GSA">Front Office - FOS/GSA</option>
//                     <option value="Doctor - Naturopathy">Doctor - Naturopathy</option>
//                     <option value="Nutritionist / Dietician">Nutritionist / Dietician</option>
//                     <option value="Therapist Male">Therapist Male</option>
//                     <option value="Therapist Female">Therapist Female</option>
//                     <option value="Sales & Marketing Manager (Female)">Sales & Marketing Manager (Female)</option>
//                     <option value="Front Desk – Receptionist">Front Desk – Receptionist</option>
//                     <option value="Multi Skilled Technician (Electrician Trade)">Multi Skilled Technician (Electrician Trade)</option>
//                     <option value="Multi Skilled Technician (AC Trade)">Multi Skilled Technician (AC Trade)</option>
//                     <option value="House Keeping Lady GSA">House Keeping Lady GSA</option>
//                     <option value="Security Guard - Lady">Security Guard - Lady</option>
//                     <option value="Security Guard - Male">Security Guard - Male</option>
//                     <option value="Industrial Trainee">Industrial Trainee</option>
//                     <option value="Job Trainee">Job Trainee</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
//                     </svg>
//                   </div>
//                 </div>
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

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
//             >
//               {isSubmitting ? 'Submitting...' : 'Submit Application'}
//               {!isSubmitting && <ChevronRight className="w-5 h-5" />}
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CareerForm;

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, ChevronLeft, Upload, User, Briefcase, MessageCircle, CheckCircle } from 'lucide-react';
import { BASE_URL } from '../config';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fileName, setFileName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for tracking submission success

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const formData = new FormData();
      
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('designation', data.designation);
      formData.append('message', data.message || '');
      
      if (data.resume && data.resume[0]) {
        formData.append('resume', data.resume[0]);
      } else {
        throw new Error('Resume is required');
      }

      const response = await fetch(`${BASE_URL}/api/careers`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        throw new Error(errorData.error || 'Failed to submit application');
      }

      const result = await response.json();
      console.log('Success:', result);
      setIsSubmitted(true); // Set success state instead of navigating
    } catch (error) {
      console.error('Error:', error);
      setSubmitError(error.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToJobs = () => {
    navigate('/career');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  // If form is successfully submitted, show success message
  if (isSubmitted) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-sage-50 to-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              We've received your application and will get back to you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {fromJobsPage && (
                <button
                  onClick={handleBackToJobs}
                  className="flex-1 flex items-center justify-center text-sage-600 hover:text-sage-800 border border-sage-600 hover:border-sage-800 py-2 px-4 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back to Job Openings
                </button>
              )}
              <button
                onClick={() => navigate('/')}
                className="flex-1 bg-sage-600 hover:bg-sage-700 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="careersform" className="min-h-screen bg-gradient-to-br from-sage-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {fromJobsPage && (
          <button 
            onClick={handleBackToJobs}
            className="flex items-center text-sage-600 hover:text-sage-800 mb-6 transition-colors font-medium"
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Back to Job Openings
          </button>
        )}
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Left Column - Decorative/Info */}
            <div className="md:w-2/5 bg-gradient-to-br from-sage-600 to-sage-800 p-8 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-playfair font-bold mb-2">Join Our Team</h2>
                <p className="text-sage-100 mb-6">We're excited that you're interested in pursuing a career with us.</p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-sage-500/20 p-2 rounded-lg mr-4">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Personal Information</h3>
                      <p className="text-sm text-sage-100">Tell us about yourself</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sage-500/20 p-2 rounded-lg mr-4">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Position Details</h3>
                      <p className="text-sm text-sage-100">Which role interests you?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-sage-500/20 p-2 rounded-lg mr-4">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Your Story</h3>
                      <p className="text-sm text-sage-100">Why are you the right fit?</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-sage-500/30">
                <div className="flex items-center text-sage-200">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">hr@example.com</span>
                </div>
                <div className="flex items-center text-sage-200 mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="md:w-3/5 p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Career Application</h3>
              <p className="text-gray-600 mb-6">Please complete the form below to apply for a position.</p>
              
              {submitError && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {submitError}
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="your@email.com"
                      />
                    </div>
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
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Please enter a valid 10-digit phone number"
                          }
                        })}
                        className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Applying For *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Briefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        {...register('designation', { required: 'Please select a position' })}
                        className="block w-full pl-10 px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500 appearance-none bg-white"
                      >
                        <option value="">Select a position</option>
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
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <textarea
                      {...register('message')}
                      rows={4}
                      className="block w-full pl-10 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-sage-500"
                      placeholder="Tell us about your experience and why you're applying..."
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume/CV * (PDF, DOC, DOCX - Max 5MB)
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-sage-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-sage-600 hover:text-sage-500 focus-within:outline-none">
                          <span>Upload a file</span>
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
                            className="sr-only"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                      {fileName && (
                        <p className="text-sm text-sage-600 mt-2">
                          Selected file: {fileName}
                        </p>
                      )}
                    </div>
                  </div>
                  {errors.resume && (
                    <p className="text-red-500 text-sm mt-1">{errors.resume.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 mt-6 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerForm;