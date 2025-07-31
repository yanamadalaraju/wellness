// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const experienceDropdown = [
//     { name: 'The Mantra', path: '/experience#mantra' },
//     { name: 'Our Story', path: '/Ourstory' },
//     { name: 'Healing Team', path: '/healing-team' },
//     { name: 'Dincharya (Daily Routine)', path: '/dincharya' },
//   ];

//   const healthOffersDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy' },
//         { name: 'Ayurveda', path: '/ayurveda' },
//         { name: 'Yoga & Meditation', path: '/yoga' },
//         { name: 'Physiotherapy', path: '/physiotheraphy' },
//         { name: 'Holistic Therapies', path: '/Holistictherapy' },
//       ]
//     },
//     { 
//       name: 'True Treatments', 
//       path: '/treatments',
//       submenu: [
//         { name: 'Respiratory Alignments', path: '/Respiratory' },
//         { name: 'Gastro-intestinal Disorders', path: '/gastro' },
//         { name: 'Musculoskeletal Conditions', path: '/Musculoskeletal' },
//         { name: 'Endocrine Disorders', path: '/Endocrine' },
//         { name: 'Lifestyle Preventive Wellness', path: '/lifestyle' },
//       ]
//     },
//     { 
//       name: 'Retreat Amenities', 
//       path: '/health-offers#amenities',
//       submenu: [
//         { name: 'Healing Abode', path: '/Healingabode' },
//         { name: 'Recreation Spaces', path: '/Recreation' },
//         { name: 'Meditation Caves', path: '/meditation' },
//         { name: 'Cardio Gym', path: '/gym' },
//       ]
//     },
//   ];

//   const galleryDropdown = [
//     { name: 'Virtual Tours', path: '/virtual-tour' },
//     { name: 'Images', path: '/gallery/images' },
//     { name: 'Events', path: '/gallery/events' },
//   ];

//   const contactDropdown = [
//     { name: 'Contact Us', path: '/contact' },
//     { name: 'Career', path: '/career' },
//   ];

//   const packagesDropdown = [
//     { 
//       name: 'Download', 
//       path: '/packages/download',
//       pdf: '/downloads/wellness-packages.pdf' // Path to your PDF file in public folder
//     },
//     { name: 'Tariff', path: '/tariff' },
//     { name: 'Rules & Regulations', path: '/rules' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
//     }`}>
//       <div className="container-max">
//         <div className="flex justify-between items-center h-20">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex items-center space-x-2">
//             <Link to="/">
//               <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
//                 <span className="text-white font-playfair font-bold text-xl">W</span>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Left Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>The Wellness Experience</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {experienceDropdown.map((item, index) => (
//                   <Link key={index} to={item.path} className="dropdown-item">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Health Offers</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu w-[300px]">
//                 {healthOffersDropdown.map((item, index) => (
//                   <div key={index} className="relative group/sub">
//                     <Link 
//                       to={item.path} 
//                       className="dropdown-item flex justify-between items-center"
//                       onMouseEnter={() => item.submenu && toggleDropdown(`health-${index}`)}
//                     >
//                       <span>{item.name}</span>
//                       {item.submenu && <ChevronRight className="w-4 h-4" />}
//                     </Link>
//                     {item.submenu && (
//                       <div 
//                         className={`absolute left-full top-0 ml-1 dropdown-menu w-[250px] ${
//                           openDropdown === `health-${index}` ? 'block' : 'hidden'
//                         } group-hover/sub:block`}
//                       >
//                         {item.submenu.map((subItem, subIndex) => (
//                           <Link 
//                             key={subIndex} 
//                             to={subItem.path} 
//                             className="dropdown-item"
//                           >
//                             {subItem.name}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <Link to="/testimonials" className="navbar-item">
//               The Healed Speaks
//             </Link>
//           </div>

//           {/* Centered Logo in Desktop Navigation */}
//           <div className="hidden lg:flex items-center mx-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
//                 <span className="text-white font-playfair font-bold text-xl">W</span>
//               </div>
//               <span className="text-2xl font-playfair font-bold text-sage-600">Wellness</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Right Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Gallery</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {galleryDropdown.map((item, index) => (
//                   <Link key={index} to={item.path} className="dropdown-item">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Get in Touch</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {contactDropdown.map((item, index) => (
//                   <Link key={index} to={item.path} className="dropdown-item">
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Health Packages</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {packagesDropdown.map((item, index) => (
//                   item.pdf ? (
//                     <a 
//                       key={index} 
//                       href={item.pdf} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="dropdown-item"
//                       download="Wellness-Packages.pdf"
//                     >
//                       {item.name}
//                     </a>
//                   ) : (
//                     <Link 
//                       key={index} 
//                       to={item.path} 
//                       className="dropdown-item"
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 ))}
//               </div>
//             </div>
            
//             <div className="ml-4">
//               <Link to="/booking" className="btn-primary">
//                 HEAL NOW
//               </Link>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link to="/experience" className="block px-3 py-2 text-gray-700 hover:text-sage-500">
//                 The Wellness Experience
//               </Link>
              
//               {/* Mobile Health Offers with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-health-offers')}
//                 >
//                   <span>Health Offers</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-health-offers' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-health-offers' && (
//                   <div className="pl-4 space-y-1">
//                     {healthOffersDropdown.map((item, index) => (
//                       <div key={index}>
//                         <button 
//                           className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                           onClick={() => toggleDropdown(`mobile-health-${index}`)}
//                         >
//                           <span>{item.name}</span>
//                           {item.submenu && (
//                             <ChevronDown className={`w-4 h-4 transition-transform ${
//                               openDropdown === `mobile-health-${index}` ? 'rotate-180' : ''
//                             }`} />
//                           )}
//                         </button>
//                         {item.submenu && openDropdown === `mobile-health-${index}` && (
//                           <div className="pl-4 space-y-1">
//                             {item.submenu.map((subItem, subIndex) => (
//                               <Link 
//                                 key={subIndex} 
//                                 to={subItem.path} 
//                                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                               >
//                                 {subItem.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link to="/testimonials" className="block px-3 py-2 text-gray-700 hover:text-sage-500">
//                 The Healed Speaks
//               </Link>

//               {/* Mobile Gallery with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-gallery')}
//                 >
//                   <span>Gallery</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-gallery' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-gallery' && (
//                   <div className="pl-4 space-y-1">
//                     {galleryDropdown.map((item, index) => (
//                       <Link 
//                         key={index} 
//                         to={item.path} 
//                         className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Get in Touch with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-contact')}
//                 >
//                   <span>Get in Touch</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-contact' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-contact' && (
//                   <div className="pl-4 space-y-1">
//                     {contactDropdown.map((item, index) => (
//                       <Link 
//                         key={index} 
//                         to={item.path} 
//                         className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Health Packages with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-packages')}
//                 >
//                   <span>Health Packages</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-packages' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-packages' && (
//                   <div className="pl-4 space-y-1">
//                     {packagesDropdown.map((item, index) => (
//                       item.pdf ? (
//                         <a 
//                           key={index} 
//                           href={item.pdf} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                           download="Wellness-Packages.pdf"
//                         >
//                           {item.name}
//                         </a>
//                       ) : (
//                         <Link 
//                           key={index} 
//                           to={item.path} 
//                           className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                         >
//                           {item.name}
//                         </Link>
//                       )
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link to="/booking" className="block px-3 py-2 btn-primary mt-4">
//                 HEAL NOW
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//----------working------------//

// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { Menu, X, ChevronDown } from 'lucide-react'

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10) // Change to 10 for quicker transition
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const experienceDropdown = [
//     { name: 'The Mantra', path: '/experience#mantra' },
//     { name: 'Our Story', path: '/experience#story' },
//     { name: 'Healing Team', path: '/healing-team' },
//     { name: 'Dincharya (Daily Routine)', path: '/experience#dincharya' },
//   ]

//   const healthOffersDropdown = [
//     { name: 'Holistic Programs', path: '/programs' },
//     { name: 'True Treatments', path: '/treatments' },
//     { name: 'Retreat Amenities', path: '/health-offers#amenities' },
//   ]

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
//     }`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex items-center">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 scrolled ? 'bg-sage-400' : 'bg-white/20 backdrop-blur-sm'
//               }`}>
//                 <span className={`text-xl font-playfair font-bold ${
//                   scrolled ? 'text-white' : 'text-white'
//                 }`}>W</span>
//               </div>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Left Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <div className="relative group">
//               <button className={`flex items-center space-x-1 transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}>
//                 <span>The Wellness Experience</span>
//                 <ChevronDown className={`w-4 h-4 ${
//                   scrolled ? 'text-gray-700' : 'text-white'
//                 }`} />
//               </button>
//               <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
//                 <div className="py-1">
//                   {experienceDropdown.map((item, index) => (
//                     <Link 
//                       key={index} 
//                       to={item.path} 
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-sage-50 hover:text-sage-600"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="relative group">
//               <button className={`flex items-center space-x-1 transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}>
//                 <span>Health Offers</span>
//                 <ChevronDown className={`w-4 h-4 ${
//                   scrolled ? 'text-gray-700' : 'text-white'
//                 }`} />
//               </button>
//               <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50">
//                 <div className="py-1">
//                   {healthOffersDropdown.map((item, index) => (
//                     <Link 
//                       key={index} 
//                       to={item.path} 
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-sage-50 hover:text-sage-600"
//                     >
//                       {item.name}
//                     </Link>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <Link 
//               to="/testimonials" 
//               className={`transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}
//             >
//               The Healed Speaks
//             </Link>
//           </div>

//           {/* Centered Logo in Desktop Navigation */}
//           <div className="hidden lg:flex items-center mx-4">
//             <Link to="/" className="flex items-center space-x-2">
//               <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
//                 scrolled ? 'bg-sage-400' : 'bg-white/20 backdrop-blur-sm'
//               }`}>
//                 <span className={`text-xl font-playfair font-bold ${
//                   scrolled ? 'text-white' : 'text-white'
//                 }`}>W</span>
//               </div>
//               <span className={`text-2xl font-playfair font-bold ${
//                 scrolled ? 'text-sage-600' : 'text-white'
//               }`}>Wellness</span>
//             </Link>
//           </div>

//           {/* Desktop Navigation - Right Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <Link 
//               to="/gallery" 
//               className={`transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}
//             >
//               Gallery
//             </Link>
//             <Link 
//               to="/contact" 
//               className={`transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}
//             >
//               Get in Touch
//             </Link>
//             <Link 
//               to="/health-packages" 
//               className={`transition-colors ${
//                 scrolled ? 'text-gray-700 hover:text-sage-600' : 'text-white hover:text-white/80'
//               }`}
//             >
//               Health Packages
//             </Link>
            
//             <div className="ml-4">
//               <Link 
//                 to="/booking" 
//                 className={`px-4 py-2 rounded-md font-medium transition-colors ${
//                   scrolled ? 'bg-sage-600 hover:bg-sage-700 text-white' : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm'
//                 }`}
//               >
//                 HEAL NOW
//               </Link>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <X className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
//             ) : (
//               <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-700' : 'text-white'}`} />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className={`lg:hidden ${scrolled ? 'bg-white' : 'bg-white/95 backdrop-blur-md'} border-t`}>
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <Link 
//                 to="/experience" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 The Wellness Experience
//               </Link>
//               <Link 
//                 to="/health-offers" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Health Offers
//               </Link>
//               <Link 
//                 to="/testimonials" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 The Healed Speaks
//               </Link>
//               <Link 
//                 to="/gallery" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Gallery
//               </Link>
//               <Link 
//                 to="/contact" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Get in Touch
//               </Link>
//               <Link 
//                 to="/health-packages" 
//                 className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Health Packages
//               </Link>
//               <Link 
//                 to="/booking" 
//                 className="block px-3 py-2 bg-sage-600 text-white rounded-md mt-4"
//                 onClick={() => setIsOpen(false)}
//               >
//                 HEAL NOW
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar




//--------final -----------//


// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDropdown = (dropdown: string) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   // Define dropdown arrays
//   const experienceDropdown = [
//     { name: 'The Mantra', path: '/experience#mantra' },
//     { name: 'Our Story', path: '/Ourstory' },
//     { name: 'Healing Team', path: '/healing-team' },
//     { name: 'Dincharya (Daily Routine)', path: '/dincharya' },
//   ];

//   const healthOffersDropdown = [
//     { 
//       name: 'Holistic Programs', 
//       path: '/programs',
//       submenu: [
//         { name: 'Naturopathy Wonders', path: '/narutopathy' },
//         { name: 'Ayurveda', path: '/ayurveda' },
//         { name: 'Yoga & Meditation', path: '/yoga' },
//         { name: 'Physiotherapy', path: '/physiotheraphy' },
//         { name: 'Holistic Therapies', path: '/Holistictherapy' },
//       ]
//     },
//     { 
//       name: 'True Treatments', 
//       path: '/treatments',
//       submenu: [
//         { name: 'Respiratory Alignments', path: '/Respiratory' },
//         { name: 'Gastro-intestinal Disorders', path: '/gastro' },
//         { name: 'Musculoskeletal Conditions', path: '/Musculoskeletal' },
//         { name: 'Endocrine Disorders', path: '/Endocrine' },
//         { name: 'Lifestyle Preventive Wellness', path: '/lifestyle' },
//       ]
//     },
//     { 
//       name: 'Retreat Amenities', 
//       path: '/health-offers#amenities',
//       submenu: [
//         { name: 'Healing Abode', path: '/Healingabode' },
//         { name: 'Recreation Spaces', path: '/Recreation' },
//         { name: 'Meditation Caves', path: '/meditation' },
//         { name: 'Cardio Gym', path: '/gym' },
//       ]
//     },
//   ];

//   const galleryDropdown = [
//     { name: 'Virtual Tours', path: '/virtual-tour' },
//     { name: 'Images', path: '/image' },
//     { name: 'Events', path: '/Events' },
//   ];

//   const contactDropdown = [
//     { name: 'Contact Us', path: '/contact' },
//     { name: 'Career', path: '/career' },
//   ];

//   const packagesDropdown = [
//     { 
//       name: 'Download', 
//       path: '/packages/download',
//       pdf: '/downloads/wellness-packages.pdf' // Path to your PDF file in public folder
//     },
//     { name: 'Tariff', path: '/tariff' },
//     { name: 'Rules & Regulations', path: '/Rulesandregulations' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${
//       scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
//     }`}>
//       <div className="container-max">
//         <div className="flex justify-between items-center h-20">
//           {/* Mobile Logo */}
//           <div className="lg:hidden flex items-center space-x-2">
//             <NavLink to="/" className={({ isActive }) => (isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500')}>
//               <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
//                 <span className="text-white font-playfair font-bold text-xl">W</span>
//               </div>
//             </NavLink>
//           </div>

//           {/* Desktop Navigation - Left Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>The Wellness Experience</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {experienceDropdown.map((item, index) => (
//                   <NavLink 
//                     key={index} 
//                     to={item.path} 
//                     className={({ isActive }) => 
//                       `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Health Offers</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu w-[300px]">
//                 {healthOffersDropdown.map((item, index) => (
//                   <div key={index} className="relative group/sub">
//                     <NavLink 
//                       to={item.path} 
//                       className={({ isActive }) => 
//                         `dropdown-item flex justify-between items-center ${isActive ? 'text-sage-600 font-medium' : ''}`
//                       }
//                       onMouseEnter={() => item.submenu && toggleDropdown(`health-${index}`)}
//                     >
//                       <span>{item.name}</span>
//                       {item.submenu && <ChevronRight className="w-4 h-4" />}
//                     </NavLink>
//                     {item.submenu && (
//                       <div 
//                         className={`absolute left-full top-0 ml-1 dropdown-menu w-[250px] ${
//                           openDropdown === `health-${index}` ? 'block' : 'hidden'
//                         } group-hover/sub:block`}
//                       >
//                         {item.submenu.map((subItem, subIndex) => (
//                           <NavLink 
//                             key={subIndex} 
//                             to={subItem.path} 
//                             className={({ isActive }) => 
//                               `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
//                             }
//                           >
//                             {subItem.name}
//                           </NavLink>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500')}>
//               The Healed Speaks
//             </NavLink>
//           </div>

//           {/* Centered Logo in Desktop Navigation */}
//           <div className="hidden lg:flex items-center mx-4">
//             <NavLink to="/" className="flex items-center space-x-2">
//               <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
//                 <span className="text-white font-playfair font-bold text-xl">W</span>
//               </div>
//               <span className="text-2xl font-playfair font-bold text-sage-600">Wellness</span>
//             </NavLink>
//           </div>

//           {/* Desktop Navigation - Right Side */}
//           <div className="hidden lg:flex items-center space-x-8">
//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Gallery</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {galleryDropdown.map((item, index) => (
//                   <NavLink 
//                     key={index} 
//                     to={item.path} 
//                     className={({ isActive }) => 
//                       `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Get in Touch</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {contactDropdown.map((item, index) => (
//                   <NavLink 
//                     key={index} 
//                     to={item.path} 
//                     className={({ isActive }) => 
//                       `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 ))}
//               </div>
//             </div>

//             <div className="relative group">
//               <button className="navbar-item flex items-center space-x-1">
//                 <span>Health Packages</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               <div className="dropdown-menu">
//                 {packagesDropdown.map((item, index) => (
//                   item.pdf ? (
//                     <a 
//                       key={index} 
//                       href={item.pdf} 
//                       target="_blank" 
//                       rel="noopener noreferrer"
//                       className="dropdown-item"
//                       download="Wellness-Packages.pdf"
//                     >
//                       {item.name}
//                     </a>
//                   ) : (
//                     <NavLink 
//                       key={index} 
//                       to={item.path} 
//                       className={({ isActive }) => 
//                         `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
//                       }
//                     >
//                       {item.name}
//                     </NavLink>
//                   )
//                 ))}
//               </div>
//             </div>
            
//             <div className="ml-4">
//               <NavLink 
//                 to="/booking" 
//                 className={({ isActive }) => 
//                   `btn-primary ${isActive ? 'bg-sage-600' : ''}`
//                 }
//               >
//                 HEAL NOW
//               </NavLink>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="lg:hidden"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="lg:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <NavLink 
//                 to="/experience" 
//                 className={({ isActive }) => 
//                   `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                 }
//               >
//                 The Wellness Experience
//               </NavLink>
              
//               {/* Mobile Health Offers with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-health-offers')}
//                 >
//                   <span>Health Offers</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-health-offers' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-health-offers' && (
//                   <div className="pl-4 space-y-1">
//                     {healthOffersDropdown.map((item, index) => (
//                       <div key={index}>
//                         <button 
//                           className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                           onClick={() => toggleDropdown(`mobile-health-${index}`)}
//                         >
//                           <span>{item.name}</span>
//                           {item.submenu && (
//                             <ChevronDown className={`w-4 h-4 transition-transform ${
//                               openDropdown === `mobile-health-${index}` ? 'rotate-180' : ''
//                             }`} />
//                           )}
//                         </button>
//                         {item.submenu && openDropdown === `mobile-health-${index}` && (
//                           <div className="pl-4 space-y-1">
//                             {item.submenu.map((subItem, subIndex) => (
//                               <NavLink 
//                                 key={subIndex} 
//                                 to={subItem.path}
//                                 className={({ isActive }) => 
//                                   `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                                 }
//                               >
//                                 {subItem.name}
//                               </NavLink>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <NavLink 
//                 to="/testimonials" 
//                 className={({ isActive }) => 
//                   `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                 }
//               >
//                 The Healed Speaks
//               </NavLink>

//               {/* Mobile Gallery with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-gallery')}
//                 >
//                   <span>Gallery</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-gallery' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-gallery' && (
//                   <div className="pl-4 space-y-1">
//                     {galleryDropdown.map((item, index) => (
//                       <NavLink 
//                         key={index} 
//                         to={item.path}
//                         className={({ isActive }) => 
//                           `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                         }
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Get in Touch with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-contact')}
//                 >
//                   <span>Get in Touch</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-contact' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-contact' && (
//                   <div className="pl-4 space-y-1">
//                     {contactDropdown.map((item, index) => (
//                       <NavLink 
//                         key={index} 
//                         to={item.path}
//                         className={({ isActive }) => 
//                           `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                         }
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Mobile Health Packages with dropdown */}
//               <div>
//                 <button 
//                   className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
//                   onClick={() => toggleDropdown('mobile-packages')}
//                 >
//                   <span>Health Packages</span>
//                   <ChevronDown className={`w-4 h-4 transition-transform ${
//                     openDropdown === 'mobile-packages' ? 'rotate-180' : ''
//                   }`} />
//                 </button>
//                 {openDropdown === 'mobile-packages' && (
//                   <div className="pl-4 space-y-1">
//                     {packagesDropdown.map((item, index) => (
//                       item.pdf ? (
//                         <a 
//                           key={index} 
//                           href={item.pdf} 
//                           target="_blank" 
//                           rel="noopener noreferrer"
//                           className="block px-3 py-2 text-gray-700 hover:text-sage-500"
//                           download="Wellness-Packages.pdf"
//                         >
//                           {item.name}
//                         </a>
//                       ) : (
//                         <NavLink 
//                           key={index} 
//                           to={item.path}
//                           className={({ isActive }) => 
//                             `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
//                           }
//                         >
//                           {item.name}
//                         </NavLink>
//                       )
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <NavLink 
//                 to="/booking" 
//                 className={({ isActive }) => 
//                   `block px-3 py-2 btn-primary mt-4 ${isActive ? 'bg-sage-600' : ''}`
//                 }
//               >
//                 HEAL NOW
//               </NavLink>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png'; // Update this path to your actual logo file

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // Define dropdown arrays
  const experienceDropdown = [
    { name: 'The Mantra', path: '/experience#mantra' },
      // { name: 'The Mantra', path: '/nowal' },
    // { name: 'About Us', path: '/nowal' },
    { name: '	Nowal NatureCare	', path: '/Ourstory' },
    { name: 'Healing Team', path: '/healing-team' },
    { name: 'Dincharya (Daily Routine)', path: '/dincharya' },
  ];

  const healthOffersDropdown = [
    { 
      name: 'Holistic Programs', 
      path: '/programs',
      submenu: [
        { name: 'Naturopathy Wonders', path: '/narutopathy' },
        { name: 'Ayurveda', path: '/ayurveda' },
        { name: 'Yoga & Meditation', path: '/yoga' },
        { name: 'Physiotherapy', path: '/physiotheraphy' },
        { name: 'Holistic Therapies', path: '/Holistictherapy' },
      ]
    },
    { 
      name: 'True Treatments', 
      path: '/treatments',
      submenu: [
        { name: 'Respiratory Alignments', path: '/Respiratory' },
        { name: 'Gastro-intestinal Disorders', path: '/gastro' },
        { name: 'Musculoskeletal Conditions', path: '/Musculoskeletal' },
        { name: 'Endocrine Disorders', path: '/Endocrine' },
        { name: 'Lifestyle Preventive Nowal', path: '/lifestyle' },
      ]
    },
    { 
      name: 'Retreat Amenities', 
      path: '/health-offers#amenities',
      submenu: [
        { name: 'Healing Abode', path: '/Healingabode' },
        { name: 'Recreation Spaces', path: '/Recreation' },
        { name: 'Meditation Caves', path: '/meditation' },
        { name: 'Cardio Gym', path: '/gym' },
      ]
    },
  ];

  const galleryDropdown = [
    // { name: 'Virtual Tours', path: '/virtual-tour' },
    { name: 'Images', path: '/image' },
    { name: 'Events', path: '/Events' },
  ];

  const contactDropdown = [
    { name: 'Contact Us', path: '/contact' },
    { name: 'Career', path: '/career' },
  ];

  const packagesDropdown = [
    { 
      name: 'Download', 
      path: '/packages/download',
      pdf: '/downloads/wellness-packages.pdf' // Path to your PDF file in public folder
    },
    { name: 'Tariff', path: '/tariff' },
    { name: 'Rules & Regulations', path: '/Rulesandregulations' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center space-x-2">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500')}>
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-10 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation - Left Side */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="navbar-item flex items-center space-x-1">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu">
                {experienceDropdown.map((item, index) => (
                  <NavLink 
                    key={index} 
                    to={item.path} 
                    className={({ isActive }) => 
                      `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="navbar-item flex items-center space-x-1">
                <span>Treatments</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu w-[300px]">
                {healthOffersDropdown.map((item, index) => (
                  <div key={index} className="relative group/sub">
                    <NavLink 
                      to={item.path} 
                      className={({ isActive }) => 
                        `dropdown-item flex justify-between items-center ${isActive ? 'text-sage-600 font-medium' : ''}`
                      }
                      onMouseEnter={() => item.submenu && toggleDropdown(`health-${index}`)}
                    >
                      <span>{item.name}</span>
                      {item.submenu && <ChevronRight className="w-4 h-4" />}
                    </NavLink>
                    {item.submenu && (
                      <div 
                        className={`absolute left-full top-0 ml-1 dropdown-menu w-[250px] ${
                          openDropdown === `health-${index}` ? 'block' : 'hidden'
                        } group-hover/sub:block`}
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <NavLink 
                            key={subIndex} 
                            to={subItem.path} 
                            className={({ isActive }) => 
                              `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500')}>
              The Healed Speaks
            </NavLink> */}
          </div>

          {/* Centered Logo in Desktop Navigation */}
          <div className="hidden lg:flex items-center mx-4">
            <NavLink to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-14 w-auto"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="navbar-item flex items-center space-x-1">
                <span>			Accommodation 	</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu">
                {galleryDropdown.map((item, index) => (
                  <NavLink 
                    key={index} 
                    to={item.path} 
                    className={({ isActive }) => 
                      `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="navbar-item flex items-center space-x-1">
                <span>		CONTACT US	</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu">
                {contactDropdown.map((item, index) => (
                  <NavLink 
                    key={index} 
                    to={item.path} 
                    className={({ isActive }) => 
                      `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="relative group">
              <button className="navbar-item flex items-center space-x-1">
                <span>TARIFF</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="dropdown-menu">
                {packagesDropdown.map((item, index) => (
                  item.pdf ? (
                    <a 
                      key={index} 
                      href={item.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="dropdown-item"
                      download="Nowal-Packages.pdf"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink 
                      key={index} 
                      to={item.path} 
                      className={({ isActive }) => 
                        `dropdown-item ${isActive ? 'text-sage-600 font-medium' : ''}`
                      }
                    >
                      {item.name}
                    </NavLink>
                  )
                ))}
              </div>
            </div>
            
            <div className="ml-4">
              <NavLink 
                to="/booking" 
                className={({ isActive }) => 
                  `btn-primary ${isActive ? 'bg-sage-600' : ''}`
                }
              >
              APPLY FOR ADMISSION
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* The Wellness Experience Dropdown */}
              <div>
                <button 
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                  onClick={() => toggleDropdown('mobile-experience')}
                >
                  <span>The Nowal Experience</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-experience' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === 'mobile-experience' && (
                  <div className="pl-4 space-y-1">
                    {experienceDropdown.map((item, index) => (
                      <NavLink 
                        key={index} 
                        to={item.path}
                        className={({ isActive }) => 
                          `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Health Offers Dropdown */}
              <div>
                <button 
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                  onClick={() => toggleDropdown('mobile-health-offers')}
                >
                  <span>Health Offers</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-health-offers' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === 'mobile-health-offers' && (
                  <div className="pl-4 space-y-1">
                    {healthOffersDropdown.map((item, index) => (
                      <div key={index}>
                        <button 
                          className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                          onClick={() => toggleDropdown(`mobile-health-${index}`)}
                        >
                          <span>{item.name}</span>
                          {item.submenu && (
                            <ChevronDown className={`w-4 h-4 transition-transform ${
                              openDropdown === `mobile-health-${index}` ? 'rotate-180' : ''
                            }`} />
                          )}
                        </button>
                        {item.submenu && openDropdown === `mobile-health-${index}` && (
                          <div className="pl-4 space-y-1">
                            {item.submenu.map((subItem, subIndex) => (
                              <NavLink 
                                key={subIndex} 
                                to={subItem.path}
                                className={({ isActive }) => 
                                  `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                                }
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* The Healed Speaks */}
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => 
                  `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                }
                onClick={() => setIsOpen(false)}
              >
                The Healed Speaks
              </NavLink>

              {/* Gallery Dropdown */}
              <div>
                <button 
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                  onClick={() => toggleDropdown('mobile-gallery')}
                >
                  <span>Gallery</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-gallery' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === 'mobile-gallery' && (
                  <div className="pl-4 space-y-1">
                    {galleryDropdown.map((item, index) => (
                      <NavLink 
                        key={index} 
                        to={item.path}
                        className={({ isActive }) => 
                          `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Get in Touch Dropdown */}
              <div>
                <button 
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                  onClick={() => toggleDropdown('mobile-contact')}
                >
                  <span>Get in Touch</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-contact' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === 'mobile-contact' && (
                  <div className="pl-4 space-y-1">
                    {contactDropdown.map((item, index) => (
                      <NavLink 
                        key={index} 
                        to={item.path}
                        className={({ isActive }) => 
                          `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {/* Health Packages Dropdown */}
              <div>
                <button 
                  className="flex justify-between items-center w-full px-3 py-2 text-gray-700 hover:text-sage-500"
                  onClick={() => toggleDropdown('mobile-packages')}
                >
                  <span>Health Packages</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${
                    openDropdown === 'mobile-packages' ? 'rotate-180' : ''
                  }`} />
                </button>
                {openDropdown === 'mobile-packages' && (
                  <div className="pl-4 space-y-1">
                    {packagesDropdown.map((item, index) => (
                      item.pdf ? (
                        <a 
                          key={index} 
                          href={item.pdf} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block px-3 py-2 text-gray-700 hover:text-sage-500"
                          download="Nowal-Packages.pdf"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <NavLink 
                          key={index} 
                          to={item.path}
                          className={({ isActive }) => 
                            `block px-3 py-2 ${isActive ? 'text-sage-600 font-medium' : 'text-gray-700 hover:text-sage-500'}`
                          }
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </NavLink>
                      )
                    ))}
                  </div>
                )}
              </div>

              {/* HEAL NOW Button */}
              <NavLink 
                to="/booking" 
                className={({ isActive }) => 
                  `block px-3 py-2 btn-primary mt-4 text-center ${isActive ? 'bg-sage-600' : ''}`
                }
                onClick={() => setIsOpen(false)}
              >
                HEAL NOW
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;