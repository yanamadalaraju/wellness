// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './pages/Home'
// import Experience from './pages/Experience'
// import HealthOffers from './pages/HealthOffers'
// import Testimonials from './pages/Testimonials'
// import Gallery from './pages/Gallery'
// import Contact from './pages/Contact'
// import HealthPackages from './pages/HealthPackages'
// import Booking from './pages/Booking'
// import Programs from './pages/Programs'
// import Treatments from './pages/Treatments'
// import HealingTeam from './pages/HealingTeam'
// import WhatsAppButton from './components/WhatsAppButton'
// import ChatBot from './components/ChatBot'
// import OurStory from './pages/OurStory'
// import VirtualTourPage from './pages/VirtualTourPage'
// import DinacharyaPage from './pages/DinacharyaPage'
// import Narutopathy from './pages/Narutopathy'
// import AyurvedsTherapySection from './components/Ayurvedtheraphy'
// import Ayurveda from './pages/Ayurveda'
// import Yoga from './pages/Yoga'
// import Physiotheraphy from './pages/Physiotheraphy'
// import Holistictheraphy from './pages/Holistictherapy'
// import Respiratory from './pages/Respiratory'
// import Gastro from './pages/Gastro'
// import Musculoskeletal from './pages/Musculoskeletal'
// import Endocrine from './pages/Endocrine'
// import Lifestyle from './pages/lifestyle'
// import Healingabode from './pages/Healingabode'
// import Meditation from './pages/Meditation'
// import Recreation from './pages/Recreation'
// import Gym from './pages/Gym'
// import Carrer from './pages/Career'
// import TariffPage from './pages/TariffPage'
// import Image from './pages/Imagepage'
// import Gallerywellness from './pages/Gallery_wellness'
// import Amenitieswellness from './pages/AmenitiesGallery'
// import MediaEventswellness from './pages/MediaandEventsWellness'
// import LivingSpaceWellness from './pages/LivingSpaceGallery'
// import Events from './pages/Events'
// import EventsGallerySet from './pages/EventsGallerySet'
// import RulesAndRegulations from './pages/RulesAndRegulations'
// import Register from './admin/Register'
// import Login from './admin/login'

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/experience" element={<Experience />} />
//            <Route path="/Ourstory" element={<OurStory />} />
//           <Route path="/health-offers" element={<HealthOffers />} />
//           <Route path="/programs" element={<Programs />} />
//           <Route path="/treatments" element={<Treatments />} />
//           <Route path="/healing-team" element={<HealingTeam />} />
//           <Route path="/testimonials" element={<Testimonials />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/gallery-wellness" element={<Gallerywellness />} />
//           <Route path="/Media-wellness" element={<MediaEventswellness />} />
//           <Route path="/Living-wellness" element={<LivingSpaceWellness />} />
//           <Route path="/Amenities-wellness" element={<Amenitieswellness />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/health-packages" element={<HealthPackages />} />
//           <Route path="/booking" element={<Booking />} />
//           <Route path="/dincharya" element={<DinacharyaPage />} />
//           <Route path="/narutopathy" element={<Narutopathy />} />
//           <Route path="/ayurveda" element={<Ayurveda />} />
//           <Route path="/yoga" element={<Yoga />} />
//           <Route path="/physiotheraphy" element={<Physiotheraphy />} />
//           <Route path="/Holistictherapy" element={<Holistictheraphy />} />
//           <Route path="/Respiratory" element={<Respiratory />} />
//           <Route path="/gastro" element={<Gastro />} />
//           <Route path="/Musculoskeletal" element={<Musculoskeletal />} />
//           <Route path="/Endocrine" element={<Endocrine />} />
//           <Route path="/lifestyle" element={<Lifestyle />} />
//           <Route path="/Healingabode" element={<Healingabode />} />
//           <Route path="/Recreation" element={<Recreation />} />
//           <Route path="/meditation" element={<Meditation />} />
//           <Route path="/gym" element={<Gym />} />
//           <Route path="/career" element={<Carrer />} />
//           <Route path="/tariff" element={<TariffPage />} />
//           <Route path="/image" element={<Image />} />
//           <Route path="/Events" element={<Events />} />
//           <Route path="/EventsGallerySet" element={<EventsGallerySet />} />
//           <Route path="/Rulesandregulations" element={<RulesAndRegulations />} />
//           <Route path="/virtual-tour" element={<VirtualTourPage />} />
//           <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />

//         </Routes>
//         <WhatsAppButton />
//         <ChatBot />
//       </Layout>
//     </Router>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Experience from './pages/Experience'
import HealthOffers from './pages/HealthOffers'
import Testimonials from './pages/Testimonials'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import HealthPackages from './pages/HealthPackages'
import Booking from './pages/Booking'
import Programs from './pages/Programs'
import Treatments from './pages/Treatments'
import HealingTeam from './pages/HealingTeam'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'
import OurStory from './pages/OurStory'
import VirtualTourPage from './pages/VirtualTourPage'
import DinacharyaPage from './pages/DinacharyaPage'
import Narutopathy from './pages/Narutopathy'
import Ayurveda from './pages/Ayurveda'
import Yoga from './pages/Yoga'
import Physiotheraphy from './pages/Physiotheraphy'
import Holistictheraphy from './pages/Holistictherapy'
import Respiratory from './pages/Respiratory'
import Gastro from './pages/Gastro'
import Musculoskeletal from './pages/Musculoskeletal'
import Endocrine from './pages/Endocrine'
import Lifestyle from './pages/lifestyle'
import Healingabode from './pages/Healingabode'
import Meditation from './pages/Meditation'
import Recreation from './pages/Recreation'
import Gym from './pages/Gym'
import Carrer from './pages/Career'
import TariffPage from './pages/TariffPage'
import Image from './pages/Imagepage'
import Gallerywellness from './pages/Gallery_wellness'
import Amenitieswellness from './pages/AmenitiesGallery'
import MediaEventswellness from './pages/MediaandEventsWellness'
import LivingSpaceWellness from './pages/LivingSpaceGallery'
import Events from './pages/Events'
import EventsGallerySet from './pages/EventsGallerySet'
import RulesAndRegulations from './pages/RulesAndRegulations'
import Register from './admin/Register'
import Login from './admin/login'
import AdminContactDashboard from './admin/AdminContactDashboard'

function AppRoutes() {
  const location = useLocation()
  const hideLayout = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/customers'


function App() {
  return (
    <>
      {!hideLayout && <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/Ourstory" element={<OurStory />} />
          <Route path="/health-offers" element={<HealthOffers />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/healing-team" element={<HealingTeam />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery-wellness" element={<Gallerywellness />} />
          <Route path="/Media-wellness" element={<MediaEventswellness />} />
          <Route path="/Living-wellness" element={<LivingSpaceWellness />} />
          <Route path="/Amenities-wellness" element={<Amenitieswellness />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/dincharya" element={<DinacharyaPage />} />
          <Route path="/narutopathy" element={<Narutopathy />} />
          <Route path="/ayurveda" element={<Ayurveda />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/physiotheraphy" element={<Physiotheraphy />} />
          <Route path="/Holistictherapy" element={<Holistictheraphy />} />
          <Route path="/Respiratory" element={<Respiratory />} />
          <Route path="/gastro" element={<Gastro />} />
          <Route path="/Musculoskeletal" element={<Musculoskeletal />} />
          <Route path="/Endocrine" element={<Endocrine />} />
          <Route path="/lifestyle" element={<Lifestyle />} />
          <Route path="/Healingabode" element={<Healingabode />} />
          <Route path="/Recreation" element={<Recreation />} />
          <Route path="/meditation" element={<Meditation />} />
          <Route path="/gym" element={<Gym />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/tariff" element={<TariffPage />} />
          <Route path="/image" element={<Image />} />
          <Route path="/Events" element={<Events />} />
          
          <Route path="/EventsGallerySet" element={<EventsGallerySet />} />
          <Route path="/Rulesandregulations" element={<RulesAndRegulations />} />
          <Route path="/virtual-tour" element={<VirtualTourPage />} />
        </Routes>
        <WhatsAppButton />
        <ChatBot />
      </Layout>}

      {hideLayout && (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/customers" element={<AdminContactDashboard />} />
         
          
        </Routes>
      )}
    </>
  )
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
