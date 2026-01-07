// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   X, 
//   ChevronDown, 
//   Home, 
//   Info, 
//   Heart, 
//   Hotel, 
//   Images, 
//   Phone, 
//   ShoppingBag, 
//   Calendar,
//   Users,
//   User,
//   Clock,
//   Leaf,
//   Activity,
//   Utensils,
//   Gem,
//   MapPin,
//   Briefcase,
//   BookOpen,
//   Shield,
//   HelpCircle,
//   CreditCard,
//   Menu
// } from 'lucide-react';
// import logo from '../assets/logo.png';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const toggleSubDropdown = (parentId: string, subId: string) => {
//     setOpenSubDropdowns(prev => ({
//       ...prev,
//       [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
//     }));
//   };

//   const closeAllDropdowns = () => {
//     setOpenDropdown(null);
//     setOpenSubDropdowns({});
//     onClose();
//   };

//   // Define dropdown arrays with icons
//   const aboutUsDropdown = [
//     { name: 'Nowal NatureCare', path: '/Ourstory', icon: <Leaf className="w-4 h-4" />, description: 'Our holistic healing philosophy' },
//     { name: 'About Founder', path: '/experience#mantra', icon: <User className="w-4 h-4" />, description: 'Meet our visionary leader' },
//     { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" />, description: 'Our expert practitioners' },
//     { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" />, description: 'Structured wellness schedule' },
//   ];

//   const treatmentsDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       icon: <Activity className="w-4 h-4" />,
//       description: 'Comprehensive wellness packages',
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
//         { name: 'Yoga & Meditation', path: '/yoga', icon: <Activity className="w-4 h-4" /> },
//         { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
//         { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
//         { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
//         { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
//       ]
//     }
//   ];

//   const accommodationsDropdown = [
//     { name: 'Accommodation Details', path: '/accomadation', icon: <Hotel className="w-4 h-4" />, description: 'Room options & amenities' },
//     { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" />, description: 'Stay information & policies' },
//   ];

//   const contactUsDropdown = [
//     { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" />, description: 'Get in touch with us' },
//     { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" />, description: 'Join our healing team' },
//   ];

//   // Additional sections for sidebar
//   const faqDropdown = [
//     { name: 'General Questions', path: '/faq', icon: <HelpCircle className="w-4 h-4" />, description: 'Common questions answered' },
//     // { name: 'Treatment FAQs', path: '/faq/treatments', icon: <Heart className="w-4 h-4" />, description: 'About our therapies' },
//     // { name: 'Booking Process', path: '/faq/booking', icon: <Calendar className="w-4 h-4" />, description: 'How to reserve your stay' },
//   ];

//   const chargesDropdown = [
//     { name: 'Treatment Packages', path: '/charges', icon: <Activity className="w-4 h-4" />, description: 'Therapy pricing details' },
//     // { name: 'Accommodation Rates', path: '/charges/accommodation', icon: <Hotel className="w-4 h-4" />, description: 'Room pricing options' },
//     // { name: 'Special Offers', path: '/charges/offers', icon: <CreditCard className="w-4 h-4" />, description: 'Current promotions' },
//   ];

//   return (
//     <>
//       {/* Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar */}
//       <div className={`
//         fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//       `}>
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200">
//           <div className="flex items-center">
//             <img 
//               src={logo} 
//               alt="Company Logo" 
//               className="h-10 w-auto"
//             />
//             {/* <span className="ml-2 text-lg font-semibold text-green-700">Nowal NatureCare</span> */}
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-gray-100 transition-colors"
//           >
//             <X className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Navigation Content */}
//         <div className="h-full overflow-y-auto pb-20">
//           <div className="p-4 space-y-1">
//             {/* Home Button */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 rounded-md transition-all duration-200 font-medium ${
//                   isActive 
//                     ? 'bg-green-100 text-green-700' 
//                     : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Home className="w-5 h-5 mr-3" />
//               <span>Home</span>
//             </NavLink>

//             {/* About Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('about')}
//               >
//                 <div className="flex items-center">
//                   <Info className="w-5 h-5 mr-3" />
//                   <span>About Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'about' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'about' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {aboutUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Treatments */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('treatments')}
//               >
//                 <div className="flex items-center">
//                   <Heart className="w-5 h-5 mr-3" />
//                   <span>Treatments</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'treatments' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'treatments' ? 'max-h-[500px]' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {treatmentsDropdown.map((item, index) => (
//                     <div key={index}>
//                       {item.submenu ? (
//                         <>
//                           <button 
//                             className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200"
//                             onClick={() => toggleSubDropdown('treatments', `sub-${index}`)}
//                           >
//                             <div className="flex items-center">
//                               <span className="mr-2">{item.icon}</span>
//                               <span>{item.name}</span>
//                             </div>
//                             <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                               openSubDropdowns[`treatments-sub-${index}`] ? 'rotate-180' : ''
//                             }`} />
//                           </button>
//                           <div className={`transition-all duration-200 overflow-hidden ${
//                             openSubDropdowns[`treatments-sub-${index}`] ? 'max-h-96' : 'max-h-0'
//                           }`}>
//                             <div className="pl-6 space-y-1">
//                               {item.submenu.map((subItem, subIndex) => (
//                                 <NavLink 
//                                   key={subIndex} 
//                                   to={subItem.path}
//                                   className={({ isActive }) => 
//                                     `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                                   }
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   <span className="mr-2">{subItem.icon}</span>
//                                   {subItem.name}
//                                 </NavLink>
//                               ))}
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <NavLink 
//                           to={item.path}
//                           className={({ isActive }) => 
//                             `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                           }
//                           onClick={closeAllDropdowns}
//                         >
//                           <span className="mr-2">{item.icon}</span>
//                           {item.name}
//                         </NavLink>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Accommodations */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('accommodations')}
//               >
//                 <div className="flex items-center">
//                   <Hotel className="w-5 h-5 mr-3" />
//                   <span>Accommodations</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'accommodations' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'accommodations' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {accommodationsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Gallery */}
//             <NavLink
//               to="/image"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium ${
//                   isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Images className="w-5 h-5 mr-3" />
//               <span>Gallery</span>
//             </NavLink>

//             {/* FAQ Section (New) */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('faq')}
//               >
//                 <div className="flex items-center">
//                   <HelpCircle className="w-5 h-5 mr-3" />
//                   <span>FAQ</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'faq' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'faq' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {faqDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Charges Section (New) */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('charges')}
//               >
//                 <div className="flex items-center">
//                   <CreditCard className="w-5 h-5 mr-3" />
//                   <span>Charges & Packages</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'charges' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'charges' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {chargesDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-md hover:bg-green-50 transition-all duration-200 font-medium"
//                 onClick={() => toggleDropdown('contact')}
//               >
//                 <div className="flex items-center">
//                   <Phone className="w-5 h-5 mr-3" />
//                   <span>Contact Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'contact' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'contact' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {contactUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2 rounded-md ${isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'} transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-2">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
//             <div className="space-y-2">
//               <NavLink
//                 to=" "
//                 className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-center shadow-md"
//                 onClick={closeAllDropdowns}
//               >
//                 <ShoppingBag className="w-5 h-5 mr-2" />
//                 <span>Our Products</span>
//               </NavLink>

//               <NavLink
//                 to="/contact"
//                 className="flex items-center justify-center px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-center shadow-md"
//                 onClick={closeAllDropdowns}
//               >
//                 <Calendar className="w-5 h-5 mr-2" />
//                 <span>Book Now</span>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;





// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   X, 
//   ChevronDown, 
//   Home, 
//   Info, 
//   Heart, 
//   Hotel, 
//   Images, 
//   Phone, 
//   ShoppingBag, 
//   Calendar,
//   Users,
//   User,
//   Clock,
//   Leaf,
//   Activity,
//   Utensils,
//   Gem,
//   MapPin,
//   Briefcase,
//   BookOpen,
//   Shield,
//   HelpCircle,
//   CreditCard
// } from 'lucide-react';
// import logo from '../assets/logo.png';
// import { scrollToSection } from '../components/utils/scrollToSection';
// import { useNavigate } from 'react-router-dom';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   const handleBookNow = () => {
//     onClose();
//     if (window.location.pathname === '/contact') {
//       setTimeout(() => scrollToSection('contact-form'), 300);
//     } else {
//       navigate('/contact');
//       setTimeout(() => scrollToSection('contact-form'), 500);
//     }
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const toggleSubDropdown = (parentId: string, subId: string) => {
//     setOpenSubDropdowns(prev => ({
//       ...prev,
//       [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
//     }));
//   };

//   const closeAllDropdowns = () => {
//     setOpenDropdown(null);
//     setOpenSubDropdowns({});
//     onClose();
//   };

//   // Define dropdown arrays with icons
//   const aboutUsDropdown = [
//     { name: 'Nowal NatureCare', path: '/Ourstory', icon: <Leaf className="w-4 h-4" /> },
//     { name: 'About Founder', path: '/experience#mantra', icon: <User className="w-4 h-4" /> },
//     { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" /> },
//     { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" /> },
//   ];

//   const treatmentsDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       icon: <Activity className="w-4 h-4" />,
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
//         { name: 'Yoga & Meditation', path: '/yoga', icon: <Activity className="w-4 h-4" /> },
//         { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
//         { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
//         { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
//         { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
//       ]
//     }
//   ];

//   const accommodationsDropdown = [
//     { name: 'Accommodation Details', path: '/accomadation', icon: <Hotel className="w-4 h-4" /> },
//     { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" /> },
//   ];

//   const contactUsDropdown = [
//     { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" /> },
//     { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" /> },
//   ];

//   const faqDropdown = [
//     { name: 'General Questions', path: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
//   ];

//   const chargesDropdown = [
//     { name: 'Treatment Packages', path: '/charges', icon: <Activity className="w-4 h-4" /> },
//   ];

//   return (
//     <>
//       {/* Overlay - Show on all devices */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar - Responsive width */}
//       <div className={`
//         fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
//         bg-white shadow-xl
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//         /* Responsive widths */
//         w-80 lg:w-96 xl:w-80 2xl:w-96
//       `}>
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-100">
//           <div className="flex items-center">
//             <img 
//               src={logo} 
//               alt="Company Logo" 
//               className="h-10 w-auto"
//             />
//             <span className="ml-3 text-lg font-semibold text-green-800 hidden sm:block">Nowal NatureCare</span>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-green-200 transition-colors"
//           >
//             <X className="h-6 w-6 text-gray-700" />
//           </button>
//         </div>

//         {/* Navigation Content */}
//         <div className="h-full overflow-y-auto pb-24">
//           <div className="p-4 space-y-1">
//             {/* Home Button */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base ${
//                   isActive 
//                     ? 'bg-green-100 text-green-700' 
//                     : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Home className="w-5 h-5 mr-3" />
//               <span>Home</span>
//             </NavLink>

//             {/* About Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('about')}
//               >
//                 <div className="flex items-center">
//                   <Info className="w-5 h-5 mr-3" />
//                   <span>About Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'about' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'about' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {aboutUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Treatments */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('treatments')}
//               >
//                 <div className="flex items-center">
//                   <Heart className="w-5 h-5 mr-3" />
//                   <span>Treatments</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'treatments' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'treatments' ? 'max-h-[500px]' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {treatmentsDropdown.map((item, index) => (
//                     <div key={index}>
//                       {item.submenu ? (
//                         <>
//                           <button 
//                             className="flex justify-between items-center w-full px-3 py-2.5 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 text-sm"
//                             onClick={() => toggleSubDropdown('treatments', `sub-${index}`)}
//                           >
//                             <div className="flex items-center">
//                               <span className="mr-3">{item.icon}</span>
//                               <span>{item.name}</span>
//                             </div>
//                             <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                               openSubDropdowns[`treatments-sub-${index}`] ? 'rotate-180' : ''
//                             }`} />
//                           </button>
//                           <div className={`transition-all duration-200 overflow-hidden ${
//                             openSubDropdowns[`treatments-sub-${index}`] ? 'max-h-96' : 'max-h-0'
//                           }`}>
//                             <div className="pl-6 space-y-1">
//                               {item.submenu.map((subItem, subIndex) => (
//                                 <NavLink 
//                                   key={subIndex} 
//                                   to={subItem.path}
//                                   className={({ isActive }) => 
//                                     `flex items-center px-3 py-2 rounded-lg text-sm ${
//                                       isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                                     } transition-colors duration-150`
//                                   }
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   <span className="mr-3">{subItem.icon}</span>
//                                   {subItem.name}
//                                 </NavLink>
//                               ))}
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <NavLink 
//                           to={item.path}
//                           className={({ isActive }) => 
//                             `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                               isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                             } transition-colors duration-150`
//                           }
//                           onClick={closeAllDropdowns}
//                         >
//                           <span className="mr-3">{item.icon}</span>
//                           {item.name}
//                         </NavLink>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Accommodations */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('accommodations')}
//               >
//                 <div className="flex items-center">
//                   <Hotel className="w-5 h-5 mr-3" />
//                   <span>Accommodations</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'accommodations' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'accommodations' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {accommodationsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Gallery */}
//             <NavLink
//               to="/image"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base ${
//                   isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Images className="w-5 h-5 mr-3" />
//               <span>Gallery</span>
//             </NavLink>

//             {/* FAQ Section */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('faq')}
//               >
//                 <div className="flex items-center">
//                   <HelpCircle className="w-5 h-5 mr-3" />
//                   <span>FAQ</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'faq' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'faq' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {faqDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Charges Section */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('charges')}
//               >
//                 <div className="flex items-center">
//                   <CreditCard className="w-5 h-5 mr-3" />
//                   <span>Charges & Packages</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'charges' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'charges' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {chargesDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('contact')}
//               >
//                 <div className="flex items-center">
//                   <Phone className="w-5 h-5 mr-3" />
//                   <span>Contact Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'contact' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'contact' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {contactUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Info Section */}
//           <div className="px-4 py-6 border-t border-gray-200">
//             <div className="bg-green-50 rounded-lg p-4">
//               <h3 className="font-semibold text-green-800 text-sm mb-3">Contact Information</h3>
//               <div className="space-y-2">
//                 <div className="flex items-center text-sm text-gray-700">
//                   <Phone className="w-4 h-4 mr-2 text-green-600" />
//                   <span>+9251582672</span>
//                 </div>
//                 <div className="text-xs text-gray-500">Mon-Sun, 7:00 AM - 7:00 PM</div>
//                 <div className="text-xs text-gray-500 mt-2">
//                   Get in touch with us for any inquiries or to book your wellness journey.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons - Responsive */}
//         <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
//           <div className="space-y-2">
//             <NavLink
//               to=" "
//               className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
//               onClick={closeAllDropdowns}
//             >
//               <ShoppingBag className="w-5 h-5 mr-2" />
//               <span>Our Products</span>
//             </NavLink>

//             <button
//               onClick={handleBookNow}
//               className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
//             >
//               <Calendar className="w-5 h-5 mr-2" />
//               <span>Book Now</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;



// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { 
//   X, 
//   ChevronDown, 
//   Home, 
//   Info, 
//   Heart, 
//   Hotel, 
//   Images, 
//   Phone, 
//   ShoppingBag, 
//   Calendar,
//   Users,
//   User,
//   Clock,
//   Leaf,
//   Activity,
//   Utensils,
//   Gem,
//   MapPin,
//   Briefcase,
//   BookOpen,
//   Shield,
//   HelpCircle,
//   CreditCard
// } from 'lucide-react';
// import logo from '../assets/logo.png';
// import { scrollToSection } from '../components/utils/scrollToSection';
// import { useNavigate } from 'react-router-dom';

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);
//   const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});
//   const navigate = useNavigate();

//   useEffect(() => {
//     const handleEscape = (event: KeyboardEvent) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'hidden';
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen, onClose]);

//   const handleBookNow = () => {
//     onClose();
//     if (window.location.pathname === '/contact') {
//       setTimeout(() => scrollToSection('contact-form'), 300);
//     } else {
//       navigate('/contact');
//       setTimeout(() => scrollToSection('contact-form'), 500);
//     }
//   };

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const toggleSubDropdown = (parentId: string, subId: string) => {
//     setOpenSubDropdowns(prev => ({
//       ...prev,
//       [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
//     }));
//   };

//   const closeAllDropdowns = () => {
//     setOpenDropdown(null);
//     setOpenSubDropdowns({});
//     onClose();
//   };

//   // Define dropdown arrays with icons
//   const aboutUsDropdown = [
//     { name: 'Nowal NatureCare', path: '/Ourstory', icon: <Leaf className="w-4 h-4" /> },
//     { name: 'About Founder', path: '/experience#mantra', icon: <User className="w-4 h-4" /> },
//     { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" /> },
//     { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" /> },
//   ];

//   const treatmentsDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       icon: <Activity className="w-4 h-4" />,
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
//         { name: 'Yoga & Meditation', path: '/yoga', icon: <Activity className="w-4 h-4" /> },
//         { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
//         { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
//         { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
//         { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
//       ]
//     }
//   ];

//   const accommodationsDropdown = [
//     { name: 'Accommodation Details', path: '/accomadation', icon: <Hotel className="w-4 h-4" /> },
//     { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" /> },
//   ];

//   const contactUsDropdown = [
//     { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" /> },
//     { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" /> },
//   ];

//   const faqDropdown = [
//     { name: 'General Questions', path: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
//   ];

//   const chargesDropdown = [
//     { name: 'Treatment Packages', path: '/charges', icon: <Activity className="w-4 h-4" /> },
//   ];

//   return (
//     <>
//       {/* Overlay - Show on all devices */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
//           onClick={onClose}
//         />
//       )}

//       {/* Sidebar - Responsive width */}
//       <div className={`
//         fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
//         bg-white shadow-xl flex flex-col
//         ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//         /* Responsive widths */
//         w-80 lg:w-96 xl:w-80 2xl:w-96
//       `}>
//         {/* Header - Fixed */}
//         <div className="flex-shrink-0">
//           <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-100">
//             <div className="flex items-center">
//               <img 
//                 src={logo} 
//                 alt="Company Logo" 
//                 className="h-10 w-auto"
//               />
//               {/* <span className="ml-3 text-lg font-semibold text-green-800 hidden sm:block">Nowal NatureCare</span> */}
//             </div>
//             <button
//               onClick={onClose}
//               className="p-2 rounded-full hover:bg-green-200 transition-colors"
//             >
//               <X className="h-6 w-6 text-gray-700" />
//             </button>
//           </div>
//         </div>

//         {/* Navigation Content - Scrollable */}
//         <div className="flex-1 overflow-y-auto">
//           <div className="p-4 space-y-1">
//             {/* Home Button */}
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base ${
//                   isActive 
//                     ? 'bg-green-100 text-green-700' 
//                     : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Home className="w-5 h-5 mr-3" />
//               <span>Home</span>
//             </NavLink>

//             {/* About Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('about')}
//               >
//                 <div className="flex items-center">
//                   <Info className="w-5 h-5 mr-3" />
//                   <span>About Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'about' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'about' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {aboutUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Treatments */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('treatments')}
//               >
//                 <div className="flex items-center">
//                   <Heart className="w-5 h-5 mr-3" />
//                   <span>Treatments</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'treatments' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'treatments' ? 'max-h-[500px]' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {treatmentsDropdown.map((item, index) => (
//                     <div key={index}>
//                       {item.submenu ? (
//                         <>
//                           <button 
//                             className="flex justify-between items-center w-full px-3 py-2.5 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 text-sm"
//                             onClick={() => toggleSubDropdown('treatments', `sub-${index}`)}
//                           >
//                             <div className="flex items-center">
//                               <span className="mr-3">{item.icon}</span>
//                               <span>{item.name}</span>
//                             </div>
//                             <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                               openSubDropdowns[`treatments-sub-${index}`] ? 'rotate-180' : ''
//                             }`} />
//                           </button>
//                           <div className={`transition-all duration-200 overflow-hidden ${
//                             openSubDropdowns[`treatments-sub-${index}`] ? 'max-h-96' : 'max-h-0'
//                           }`}>
//                             <div className="pl-6 space-y-1">
//                               {item.submenu.map((subItem, subIndex) => (
//                                 <NavLink 
//                                   key={subIndex} 
//                                   to={subItem.path}
//                                   className={({ isActive }) => 
//                                     `flex items-center px-3 py-2 rounded-lg text-sm ${
//                                       isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                                     } transition-colors duration-150`
//                                   }
//                                   onClick={closeAllDropdowns}
//                                 >
//                                   <span className="mr-3">{subItem.icon}</span>
//                                   {subItem.name}
//                                 </NavLink>
//                               ))}
//                             </div>
//                           </div>
//                         </>
//                       ) : (
//                         <NavLink 
//                           to={item.path}
//                           className={({ isActive }) => 
//                             `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                               isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                             } transition-colors duration-150`
//                           }
//                           onClick={closeAllDropdowns}
//                         >
//                           <span className="mr-3">{item.icon}</span>
//                           {item.name}
//                         </NavLink>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Accommodations */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('accommodations')}
//               >
//                 <div className="flex items-center">
//                   <Hotel className="w-5 h-5 mr-3" />
//                   <span>Accommodations</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'accommodations' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'accommodations' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {accommodationsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Gallery */}
//             <NavLink
//               to="/image"
//               className={({ isActive }) =>
//                 `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base ${
//                   isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
//                 }`
//               }
//               onClick={closeAllDropdowns}
//             >
//               <Images className="w-5 h-5 mr-3" />
//               <span>Gallery</span>
//             </NavLink>

//             {/* FAQ Section */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('faq')}
//               >
//                 <div className="flex items-center">
//                   <HelpCircle className="w-5 h-5 mr-3" />
//                   <span>FAQ</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'faq' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'faq' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {faqDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Charges Section */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('charges')}
//               >
//                 <div className="flex items-center">
//                   <CreditCard className="w-5 h-5 mr-3" />
//                   <span>Charges & Packages</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'charges' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'charges' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {chargesDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Contact Us */}
//             <div>
//               <button 
//                 className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
//                 onClick={() => toggleDropdown('contact')}
//               >
//                 <div className="flex items-center">
//                   <Phone className="w-5 h-5 mr-3" />
//                   <span>Contact Us</span>
//                 </div>
//                 <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
//                   openDropdown === 'contact' ? 'rotate-180' : ''
//                 }`} />
//               </button>
//               <div className={`transition-all duration-200 overflow-hidden ${
//                 openDropdown === 'contact' ? 'max-h-96' : 'max-h-0'
//               }`}>
//                 <div className="pl-9 space-y-1">
//                   {contactUsDropdown.map((item, index) => (
//                     <NavLink 
//                       key={index} 
//                       to={item.path}
//                       className={({ isActive }) => 
//                         `flex items-center px-3 py-2.5 rounded-lg text-sm ${
//                           isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
//                         } transition-colors duration-150`
//                       }
//                       onClick={closeAllDropdowns}
//                     >
//                       <span className="mr-3">{item.icon}</span>
//                       {item.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons - Fixed at bottom */}
//         <div className="flex-shrink-0 p-4 bg-white border-t border-gray-200">
//           <div className="space-y-2">
//             <NavLink
//               to=" "
//               className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
//               onClick={closeAllDropdowns}
//             >
//               <ShoppingBag className="w-5 h-5 mr-2" />
//               <span>Our Products</span>
//             </NavLink>

//             <button
//               onClick={handleBookNow}
//               className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
//             >
//               <Calendar className="w-5 h-5 mr-2" />
//               <span>Book Now</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;






import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Heart, 
  Hotel, 
  Images, 
  Phone, 
  ShoppingBag, 
  Calendar,
  Users,
  User,
  Clock,
  Leaf,
  Activity,
  Utensils,
  Gem,
  MapPin,
  Briefcase,
  BookOpen,
  Shield,
  HelpCircle,
  CreditCard,
  PartyPopper  // Added PartyPopper icon
} from 'lucide-react';
import logo from '../assets/logo.png';
import { scrollToSection } from '../components/utils/scrollToSection';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openSubDropdowns, setOpenSubDropdowns] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBookNow = () => {
    onClose();
    if (window.location.pathname === '/contact') {
      setTimeout(() => scrollToSection('contact-form'), 300);
    } else {
      navigate('/contact');
      setTimeout(() => scrollToSection('contact-form'), 500);
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleSubDropdown = (parentId: string, subId: string) => {
    setOpenSubDropdowns(prev => ({
      ...prev,
      [`${parentId}-${subId}`]: !prev[`${parentId}-${subId}`]
    }));
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
    setOpenSubDropdowns({});
    onClose();
  };

  // Define dropdown arrays with icons
  const aboutUsDropdown = [
    { name: 'Nowal NatureCare', path: '/Ourstory', icon: <Leaf className="w-4 h-4" /> },
    { name: 'About Founder', path: '/experience#mantra', icon: <User className="w-4 h-4" /> },
    { name: 'Healing Team', path: '/healing-team', icon: <Users className="w-4 h-4" /> },
    { name: 'Daily Routine', path: '/dincharya', icon: <Clock className="w-4 h-4" /> },
  ];

  const treatmentsDropdown = [
    { 
      name: 'Holistic Programs', 
      path: '/programs',
      icon: <Activity className="w-4 h-4" />,
      submenu: [
        { name: 'Naturopathy Wonders', path: '/narutopathy', icon: <Leaf className="w-4 h-4" /> },
        { name: 'Yoga & Meditation', path: '/yoga', icon: <Activity className="w-4 h-4" /> },
        { name: 'Diet & Nutrition', path: '/diet', icon: <Utensils className="w-4 h-4" /> },
        { name: 'Ayurveda', path: '/ayurveda', icon: <Gem className="w-4 h-4" /> },
        { name: 'Acupuncture', path: '/Holistictherapy', icon: <Shield className="w-4 h-4" /> },
        { name: 'Physiotherapy', path: '/physiotheraphy', icon: <Activity className="w-4 h-4" /> },
      ]
    }
  ];

  const accommodationsDropdown = [
    { name: 'Accommodation Details', path: '/accomadation', icon: <Hotel className="w-4 h-4" /> },
    { name: 'Accommodation Guidelines', path: '/guidliness', icon: <BookOpen className="w-4 h-4" /> },
  ];

  // Added Celebrations dropdown
  const celebrationsDropdown = [
    { name: 'Wedding & Events', path: '/wedding', icon: <PartyPopper className="w-4 h-4" /> },
  ];

  const contactUsDropdown = [
    { name: 'Contact Information', path: '/contact', icon: <MapPin className="w-4 h-4" /> },
    { name: 'Career Opportunities', path: '/career', icon: <Briefcase className="w-4 h-4" /> },
  ];

  const faqDropdown = [
    { name: 'General Questions', path: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  const chargesDropdown = [
    { name: 'Treatment Packages', path: '/charges', icon: <Activity className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Overlay - Show on all devices */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Responsive width */}
      <div className={`
        fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out
        bg-white shadow-xl flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        /* Responsive widths */
        w-80 lg:w-96 xl:w-80 2xl:w-96
      `}>
        {/* Header - Fixed */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-green-50 to-emerald-100">
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-10 w-auto"
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-green-200 transition-colors"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Navigation Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-1">
            {/* Home Button */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base ${
                  isActive 
                    ? 'bg-green-100 text-green-700' 
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                }`
              }
              onClick={closeAllDropdowns}
            >
              <Home className="w-5 h-5 mr-3" />
              <span>Home</span>
            </NavLink>

            {/* About Us */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('about')}
              >
                <div className="flex items-center">
                  <Info className="w-5 h-5 mr-3" />
                  <span>About Us</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'about' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'about' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {aboutUsDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Treatments */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('treatments')}
              >
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-3" />
                  <span>Treatments</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'treatments' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'treatments' ? 'max-h-[500px]' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {treatmentsDropdown.map((item, index) => (
                    <div key={index}>
                      {item.submenu ? (
                        <>
                          <button 
                            className="flex justify-between items-center w-full px-3 py-2.5 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 text-sm"
                            onClick={() => toggleSubDropdown('treatments', `sub-${index}`)}
                          >
                            <div className="flex items-center">
                              <span className="mr-3">{item.icon}</span>
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                              openSubDropdowns[`treatments-sub-${index}`] ? 'rotate-180' : ''
                            }`} />
                          </button>
                          <div className={`transition-all duration-200 overflow-hidden ${
                            openSubDropdowns[`treatments-sub-${index}`] ? 'max-h-96' : 'max-h-0'
                          }`}>
                            <div className="pl-6 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <NavLink 
                                  key={subIndex} 
                                  to={subItem.path}
                                  className={({ isActive }) => 
                                    `flex items-center px-3 py-2 rounded-lg text-sm ${
                                      isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                                    } transition-colors duration-150`
                                  }
                                  onClick={closeAllDropdowns}
                                >
                                  <span className="mr-3">{subItem.icon}</span>
                                  {subItem.name}
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        <NavLink 
                          to={item.path}
                          className={({ isActive }) => 
                            `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                              isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                            } transition-colors duration-150`
                          }
                          onClick={closeAllDropdowns}
                        >
                          <span className="mr-3">{item.icon}</span>
                          {item.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accommodations */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('accommodations')}
              >
                <div className="flex items-center">
                  <Hotel className="w-5 h-5 mr-3" />
                  <span>Accommodations</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'accommodations' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'accommodations' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {accommodationsDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <NavLink
              to="/image"
              className={({ isActive }) =>
                `flex items-center px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base ${
                  isActive ? 'bg-green-50 text-green-700 font-semibold' : ''
                }`
              }
              onClick={closeAllDropdowns}
            >
              <Images className="w-5 h-5 mr-3" />
              <span>Gallery</span>
            </NavLink>

            {/* Celebrations - Added this section */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('celebrations')}
              >
                <div className="flex items-center">
                  <PartyPopper className="w-5 h-5 mr-3" />
                  <span>Celebrations</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'celebrations' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'celebrations' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {celebrationsDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('faq')}
              >
                <div className="flex items-center">
                  <HelpCircle className="w-5 h-5 mr-3" />
                  <span>FAQ</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'faq' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'faq' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {faqDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Charges Section */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('charges')}
              >
                <div className="flex items-center">
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>Charges & Packages</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'charges' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'charges' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {chargesDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <button 
                className="flex justify-between items-center w-full px-3 py-3 text-gray-700 hover:text-green-600 rounded-lg hover:bg-green-50 transition-all duration-200 font-medium text-sm lg:text-base"
                onClick={() => toggleDropdown('contact')}
              >
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Contact Us</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                  openDropdown === 'contact' ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`transition-all duration-200 overflow-hidden ${
                openDropdown === 'contact' ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="pl-9 space-y-1">
                  {contactUsDropdown.map((item, index) => (
                    <NavLink 
                      key={index} 
                      to={item.path}
                      className={({ isActive }) => 
                        `flex items-center px-3 py-2.5 rounded-lg text-sm ${
                          isActive ? 'bg-green-50 text-green-700 font-medium' : 'text-gray-700 hover:bg-green-50 hover:text-gray-900'
                        } transition-colors duration-150`
                      }
                      onClick={closeAllDropdowns}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Fixed at bottom */}
        <div className="flex-shrink-0 p-4 bg-white border-t border-gray-200">
          <div className="space-y-2">
            <NavLink
              to=" "
              className="flex items-center justify-center px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
              onClick={closeAllDropdowns}
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              <span>Our Products</span>
            </NavLink>

            <button
              onClick={handleBookNow}
              className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200 font-medium text-center shadow-md text-sm lg:text-base"
            >
              <Calendar className="w-5 h-5 mr-2" />
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;