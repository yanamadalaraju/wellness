// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container-max section-padding">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 bg-sage-400 rounded-full flex items-center justify-center">
//                 <span className="text-white font-playfair font-bold text-xl">W</span>
//               </div>
//               <span className="text-2xl font-playfair font-bold">Wellness</span>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Your journey to wholeness starts here. Experience science-backed ancient healing in a serene environment.
//             </p>
//             <div className="flex space-x-4">
//               <Facebook className="w-5 h-5 text-gray-400 hover:text-sage-400 cursor-pointer transition-colors" />
//               <Instagram className="w-5 h-5 text-gray-400 hover:text-sage-400 cursor-pointer transition-colors" />
//               <Youtube className="w-5 h-5 text-gray-400 hover:text-sage-400 cursor-pointer transition-colors" />
//               <Twitter className="w-5 h-5 text-gray-400 hover:text-sage-400 cursor-pointer transition-colors" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/experience" className="text-gray-400 hover:text-sage-400 transition-colors">Our Experience</Link></li>
//               <li><Link to="/programs" className="text-gray-400 hover:text-sage-400 transition-colors">Programs</Link></li>
//               <li><Link to="/treatments" className="text-gray-400 hover:text-sage-400 transition-colors">Treatments</Link></li>
//               <li><Link to="/testimonials" className="text-gray-400 hover:text-sage-400 transition-colors">Testimonials</Link></li>
//               <li><Link to="/gallery" className="text-gray-400 hover:text-sage-400 transition-colors">Gallery</Link></li>
//             </ul>
//           </div>

//           {/* Health Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Health Services</h3>
//             <ul className="space-y-2">
//               <li><span className="text-gray-400">Ayurveda Treatments</span></li>
//               <li><span className="text-gray-400">Yoga & Meditation</span></li>
//               <li><span className="text-gray-400">Naturopathy</span></li>
//               <li><span className="text-gray-400">Detox Programs</span></li>
//               <li><span className="text-gray-400">Stress Management</span></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
//             <div className="space-y-3">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="w-5 h-5 text-sage-400 mt-0.5" />
//                 <span className="text-gray-400">123 Wellness Valley, Serene Hills, Nature State 12345</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-5 h-5 text-sage-400" />
//                 <span className="text-gray-400">+1 (555) 123-4567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-5 h-5 text-sage-400" />
//                 <span className="text-gray-400">info@wellness-retreat.com</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © 2024 Wellness Retreat. All rights reserved. | Privacy Policy | Terms of Service
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import React from 'react'
// import { Link } from 'react-router-dom'
// import {
//   Facebook,
//   Instagram,
//   Twitter,
//   Youtube,
//   Mail,
//   Linkedin,
//   MapPin
// } from 'lucide-react'
// import { FaPinterest, FaTripadvisor } from 'react-icons/fa'

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#F2F1E8] text-[#435334] text-sm pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
//         {/* Logo + Address */}
//         <div>
//           <img src="/logo.png" alt="Nimba Logo" className="mb-4 w-40" />
//           <address className="not-italic leading-relaxed">
//             Baliyasan, Nr. Mccain Foods, <br />
//             Ahmedabad – Mehsana Expressway, <br />
//             Mehsana – 382 732 Gujarat
//           </address>
//           <div className="flex space-x-3 mt-4">
//             <Facebook className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <Instagram className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <Twitter className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <Youtube className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <FaPinterest className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <FaTripadvisor className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//             <Mail className="w-5 h-5 cursor-pointer hover:text-[#9EB384]" />
//           </div>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">WhatsApp/Call Now: 834731 3333</h3>
//           <p className="mb-2">For inquiries, contact <a href="mailto:info@nimba.in" className="text-[#435334] underline">info@nimba.in</a> or call +91 81550 12274</p>
//           <h4 className="font-semibold mb-1 mt-4">Newsletter</h4>
//           <label className="block text-sm font-semibold mb-1 mt-2" htmlFor="email">Your email address *</label>
//           <input
//             id="email"
//             type="email"
//             className="border-b border-[#435334] bg-transparent outline-none w-full py-1 mb-4"
//             placeholder="Enter your email"
//           />
//           <button className="border border-[#435334] rounded-full px-6 py-2 hover:bg-[#9EB384] hover:text-white transition-all">
//             Send
//           </button>
//         </div>

//         {/* Navigation Left */}
//         <div>
//           <ul className="space-y-2">
//             <li><Link to="#" className="hover:text-[#9EB384]">The Mantra</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Story of Nimba</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Healing Team</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Blog</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Dinacharya</Link></li>
//           </ul>
//         </div>

//         {/* Navigation Right + Award */}
//         <div className="flex flex-col items-start lg:items-end">
//           <ul className="space-y-2 mb-4 text-right lg:text-left">
//             <li><Link to="#" className="hover:text-[#9EB384]">Right of Use</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Disclaimer</Link></li>
//             <li><Link to="#" className="hover:text-[#9EB384]">Rules & Regulations</Link></li>
//           </ul>
//           <img
//             src="https://media.istockphoto.com/id/696277714/vector/woman-meditating-in-yoga-pose.jpg?s=612x612&w=0&k=20&c=AQZE1TPlOMgCSwbXf6VAum2Dtv95wvOUdY-xGwQBMTY="
//             alt="TripAdvisor Award"
//             className="w-32 mt-4 lg:mt-0"
//           />
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="text-center text-xs text-[#435334] mt-10">
//         © 2025 All Rights reserved by Nimba.
//       </div>
//     </footer>
//   )
// }

// export default Footer


import React from 'react'
import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react'
import { FaPinterest, FaTripadvisor } from 'react-icons/fa'
import { SiTrustpilot } from 'react-icons/si'

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F2F1E8] text-[#435334] text-base pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo + Address */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Nimba Logo" className="w-48" />
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
            <address className="not-italic leading-relaxed">
              Baliyasan, Nr. Mccain Foods,<br />
              Ahmedabad – Mehsana Expressway,<br />
              Mehsana – 382 732 Gujarat, India
            </address>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <Facebook className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
            <Instagram className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
            <Twitter className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
            <Youtube className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
            <Linkedin className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
            <Mail className="w-6 h-6 cursor-pointer hover:text-[#9EB384] transition-colors" />
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
              <p className="font-medium">WhatsApp/Call Now:</p>
              <p className="text-lg">+91 83473 13333</p>
              <p className="mt-2">+91 81550 12274</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
            <a href="mailto:info@nimba.in" className="hover:underline">info@nimba.in</a>
          </div>
          
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 mt-1 flex-shrink-0" />
            <p>Open 7 days, 9:00 AM - 7:00 PM</p>
          </div>
          
          <div className="mt-6">
            <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                className="border-b border-[#435334] bg-transparent outline-none w-full py-2 px-1"
                placeholder="Your email address"
              />
              <button className="ml-4 bg-[#435334] text-white px-6 py-2 rounded hover:bg-[#9EB384] transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-[#9EB384] transition-colors">About Nimba</Link></li>
            <li><Link to="/treatments" className="hover:text-[#9EB384] transition-colors">Our Treatments</Link></li>
            <li><Link to="/ayurveda" className="hover:text-[#9EB384] transition-colors">Ayurveda Principles</Link></li>
            <li><Link to="/gallery" className="hover:text-[#9EB384] transition-colors">Photo Gallery</Link></li>
            <li><Link to="/testimonials" className="hover:text-[#9EB384] transition-colors">Patient Stories</Link></li>
          </ul>
        </div>

        {/* Awards & Recognition */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Awards & Recognition</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <img src="https://media.istockphoto.com/id/2206391716/photo/standing-golden-trophy-cup-on-light-green-background.jpg?s=612x612&w=0&k=20&c=odm6azR5ySVwy1hvfIpcGnMB9jzD2Pp3rF2Rrn9MvmQ=" alt="NABH Accredited" className="h-16 object-contain" />
            <img src="https://media.istockphoto.com/id/2163592890/photo/close-up-of-trophies.jpg?s=612x612&w=0&k=20&c=r9EOlJywiZ0qU214lh62dtD6oo07qdp2Z9PRd1xyfJg=" alt="TripAdvisor Award" className="h-16 object-contain" />
            <img src="https://media.istockphoto.com/id/1212486807/vector/aura-meditation-sitting-in-the-lotus-position-group-of-people-healthy-lifestyle-relaxation.jpg?s=612x612&w=0&k=20&c=nS96ZimVE7HK9oClxEO-Ct55dGIn4LpcvYSzzG8BOXc=" alt="Times Health Icon" className="h-16 object-contain" />
            <div className="flex items-center justify-center bg-white p-2 rounded">
              <SiTrustpilot className="text-3xl text-[#00B67A]" />
            </div>
          </div>
          
          <div className="pt-4">
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-[#9EB384] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#9EB384] transition-colors">Terms of Service</Link></li>
              <li><Link to="/cancellation" className="hover:text-[#9EB384] transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#9EB384]/30 mt-12 pt-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Nimba Nature Cure. All Rights Reserved.</p>
        <p className="mt-1">Designed with ❤️ for holistic wellness</p>
      </div>
    </footer>
  )
}

export default Footer