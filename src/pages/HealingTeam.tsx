// import React from 'react'
// import { Award, BookOpen, Heart, Star } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const HealingTeam: React.FC = () => {
//   const teamMembers = [
//     {
//       name: "Dr. Priya Sharma",
//       title: "Founder & Chief Ayurvedic Physician",
//       image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Ayurveda, Panchakarma, Women's Health",
//       experience: "20+ years",
//       education: "BAMS, MD (Ayurveda), Certified Panchakarma Specialist",
//       description: "Dr. Priya is a renowned Ayurvedic physician with over two decades of experience in traditional healing. She has treated thousands of patients worldwide and is passionate about making ancient wisdom accessible to modern lives.",
//       achievements: [
//         "Founder of Nowal Retreat Center",
//         "Published author of 'Ayurveda for Modern Life'",
//         "International speaker on holistic health",
//         "Winner of Excellence in Ayurveda Award 2020"
//       ]
//     },
//     {
//       name: "Dr. Michael Chen",
//       title: "Naturopathic Doctor & Nowal Director",
//       image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Naturopathy, Nutrition, Detoxification",
//       experience: "15+ years",
//       education: "ND, MS in Holistic Nutrition, Certified Detox Specialist",
//       description: "Dr. Chen combines scientific training with natural healing methods. His approach focuses on identifying and treating root causes rather than just symptoms.",
//       achievements: [
//         "Board certified Naturopathic Doctor",
//         "Research in integrative medicine",
//         "Developed our signature detox protocols",
//         "Featured in Natural Health Magazine"
//       ]
//     },
//     {
//       name: "Sarah Johnson",
//       title: "Senior Yoga Instructor & Meditation Guide",
//       image: "https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Hatha Yoga, Meditation, Breathwork",
//       experience: "12+ years",
//       education: "E-RYT 500, Meditation Teacher Training, Pranayama Specialist",
//       description: "Sarah brings a gentle yet powerful approach to yoga and meditation. Her classes are designed to meet students where they are and guide them toward deeper self-awareness.",
//       achievements: [
//         "Certified E-RYT 500 Yoga Teacher",
//         "Trained over 200 yoga instructors",
//         "Specialist in therapeutic yoga",
//         "Lead meditation retreat facilitator"
//       ]
//     },
//     {
//       name: "Dr. Rajesh Patel",
//       title: "Ayurvedic Physician & Pulse Diagnostician",
//       image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Pulse Diagnosis, Herbal Medicine, Lifestyle Counseling",
//       experience: "18+ years",
//       education: "BAMS, MD (Kayachikitsa), Advanced Pulse Diagnosis",
//       description: "Dr. Patel is a master of traditional Ayurvedic pulse diagnosis. His intuitive understanding of the body's subtle energies helps create highly personalized treatment plans.",
//       achievements: [
//         "Expert in Nadi Pariksha (pulse diagnosis)",
//         "Herbalist with extensive plant knowledge",
//         "Trained in traditional Gurukula system",
//         "Consultant to international Nowal centers"
//       ]
//     },
//     {
//       name: "Emma Williams",
//       title: "Nutritionist & Nowal Coach",
//       image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Holistic Nutrition, Lifestyle Coaching, Meal Planning",
//       experience: "10+ years",
//       education: "MS in Nutrition, Certified Health Coach, Ayurvedic Nutrition Specialist",
//       description: "Emma specializes in creating sustainable nutrition plans that honor both modern nutritional science and traditional wisdom. Her approach emphasizes whole foods and mindful eating.",
//       achievements: [
//         "Certified Holistic Nutrition Specialist",
//         "Developed our signature meal programs",
//         "Expert in food as medicine approach",
//         "Workshop leader in conscious eating"
//       ]
//     },
//     {
//       name: "Marcus Thompson",
//       title: "Massage Therapist & Bodywork Specialist",
//       image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=400",
//       specialization: "Abhyanga, Deep Tissue, Lymphatic Drainage",
//       experience: "14+ years",
//       education: "LMT, Certified Ayurvedic Massage Therapist, Craniosacral Therapy",
//       description: "Marcus brings healing touch to our Nowal programs. His skilled hands and intuitive understanding of the body's energy systems provide deep relaxation and therapeutic benefits.",
//       achievements: [
//         "Licensed Massage Therapist",
//         "Trained in traditional Ayurvedic massage",
//         "Specialist in therapeutic bodywork",
//         "Certified in lymphatic drainage"
//       ]
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-cream-50">
//       {/* Hero Section */}
//       <section className="relative min-h-96 flex items-center justify-center">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg?auto=compress&cs=tinysrgb&w=1920"
//             alt="Healing Team"
//             className="w-full h-full object-cover"
//           />
         
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
//             Our Healing Team
//           </h1>
//           <p className="text-xl md:text-2xl text-shadow">
//             Meet the compassionate experts guiding your Nowal journey
//           </p>
//         </div>
//       </section>

//         {/* Breadcrumbs */}
//                         <div className="container mx-auto px-4 py-4 flex justify-center">
//                     <nav className="flex" aria-label="Breadcrumb">
//                       <ol className="inline-flex items-center space-x-2 md:space-x-2">
//                         <li className="inline-flex items-center">
//                           <Link to="/" className="text-sage-600 hover:text-sage-800">
//                             Home
//                           </Link>
//                         </li>
//                         <li className="flex items-center">
//                           <span className="mx text-sage-500">{'>'}</span>
//                           <span className="mx text-sage-500">{'>'}</span>
//                         </li>
//                         <li>
//                           <span className="text-sage-800 font-medium">Healing Team</span>
//                         </li>
//                       </ol>
//                     </nav>
//                   </div>

//       {/* Team Introduction */}
//       <section className="section-padding bg-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold text-sage-600 mb-8">
//             Experts in Healing
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//             Our diverse team of healing professionals brings together centuries of traditional wisdom 
//             with modern expertise. Each member is carefully selected for their deep knowledge, 
//             compassionate approach, and commitment to your complete Nowal.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Award className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Certified Experts
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 All our practitioners hold advanced certifications in their specialties
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <BookOpen className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Continuous Learning
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Our team regularly updates their knowledge with latest research
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Heart className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Compassionate Care
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Every interaction is guided by empathy and genuine care
//               </p>
//             </div>
            
//             <div className="text-center">
//               <div className="w-16 h-16 bg-sage-400 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <Star className="w-8 h-8 text-white" />
//               </div>
//               <h3 className="text-lg font-playfair font-semibold text-sage-600 mb-2">
//                 Proven Results
//               </h3>
//               <p className="text-gray-600 text-sm">
//                 Thousands of successful healing journeys speak to our expertise
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Team Members */}
//       <section className="section-padding bg-sage-50">
//         <div className="container-max">
//           <div className="space-y-16">
//             {teamMembers.map((member, index) => (
//               <div key={index} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
//                 <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
//                   <div className="card">
//                     <img
//                       src={member.image}
//                       alt={member.name}
//                       className="w-full h-64 object-cover rounded-lg mb-4"
//                     />
//                     <div className="text-center">
//                       <h3 className="text-xl font-playfair font-bold text-sage-600 mb-1">
//                         {member.name}
//                       </h3>
//                       <p className="text-terracotta-500 font-medium mb-3">
//                         {member.title}
//                       </p>
//                       <div className="space-y-2 text-sm">
//                         <p><span className="font-medium">Experience:</span> {member.experience}</p>
//                         <p><span className="font-medium">Specialization:</span> {member.specialization}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
//                   <div className="card">
//                     <h3 className="text-2xl font-playfair font-bold text-sage-600 mb-4">
//                       About {member.name.split(' ')[0]}
//                     </h3>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {member.description}
//                     </p>
                    
//                     <div className="mb-6">
//                       <h4 className="text-lg font-semibold text-sage-600 mb-3">Education & Training</h4>
//                       <p className="text-gray-600">{member.education}</p>
//                     </div>
                    
//                     <div>
//                       <h4 className="text-lg font-semibold text-sage-600 mb-3">Key Achievements</h4>
//                       <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                         {member.achievements.map((achievement, idx) => (
//                           <li key={idx} className="flex items-start text-gray-600">
//                             <div className="w-2 h-2 bg-sage-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
//                             <span className="text-sm">{achievement}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-sage-400 text-white">
//         <div className="container-max text-center">
//           <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
//             Ready to Meet Your Healing Team?
//           </h2>
//           <p className="text-xl mb-8 max-w-2xl mx-auto">
//             Our experts are here to guide you on your Nowal journey with personalized care and proven expertise.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <a href="/booking" className="btn-secondary">
//               Book Your Consultation
//             </a>
//             <a href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-sage-400">
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default HealingTeam


import React from 'react'
import { Link } from 'react-router-dom'
import Video360Viewer from './Video360Viewer'

const HealingTeam: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/477473902/photo/tea-plantations.jpg?s=612x612&w=0&k=20&c=6V4oFEe4iqofERaro5Ivw4O-8tZVtxIUOOpZiIhUBlk="
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
          Our Healing Team
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Rooted in nature, driven by purpose — the journey to healing began here.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 md:space-x-2">
            <li className="inline-flex items-center">
              <Link to="/" className="text-sage-600 hover:text-sage-800">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx text-sage-500">{'>'}</span>
              <span className="mx text-sage-500">{'>'}</span>
            </li>
            <li>
              <span className="text-sage-800 font-medium">Healing Team</span>
            </li>
          </ol>
        </nav>
      </div>

      {/* Intro Section */}
     <section className="bg-[#F2F1E8] text-[#435334] py-24 px-6 text-center">
  <div className="max-w-5xl mx-auto">
    {/* Main Heading */}
    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide leading-tight">
      Your Healing with Naturopathy and Yoga
    </h2>

    {/* Subheading */}
    <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-[#5A6650]">
      Nowal Team Work
    </h3>

    {/* Subheading Decorative Line */}
    <div className="flex justify-center items-center mb-10">
      <div className="w-16 h-px bg-[#435334]/50 mr-3"></div>
      <svg className="w-6 h-6 text-[#435334]" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
      </svg>
      <div className="w-16 h-px bg-[#435334]/50 ml-3"></div>
    </div>

    {/* Paragraphs */}
    <div className="text-lg md:text-xl leading-relaxed space-y-6 text-justify px-4 md:px-0">
      <p>
        At Nowal NatureCare, it is our people who bring purpose and heart to everything we do, the environment simply amplifies their dedication.
      </p>
      <p>
        Our dedicated team is deeply committed to guiding each individual on a transformative journey toward health and self-restoration.
      </p>
      <p>
        From experienced doctors, skilled therapists and compassionate support staff, every member of our team shares a unified passion for holistic wellness.
      </p>
      <p>
        Their authenticity, expertise, and unwavering care form the very ethos of Nowal NatureCare.
      </p>
      <p>
        Together, they create a nurturing space where healing is not just delivered—it is lived, with intention, empathy, and excellence.
      </p>
    </div>
  </div>
</section>


<section className="bg-gradient-to-br from-[#f2f1e8] via-[#fafaf5] to-[#e7e6dc] py-24 px-6">
  <div className="max-w-5xl mx-auto text-center">
    {/* Decorative Heading */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#435334] mb-2 relative inline-block">
      Thought of CMD - <span className="text-[#7E8A59]">Shri Ram Nivas Nowal</span>
      <span className="block h-1 w-20 bg-[#9EB384] mt-2 mx-auto rounded-full"></span>
    </h2>

    {/* Quote-style Divider */}
    <div className="flex justify-center my-6">
      <svg className="w-10 h-10 text-[#9EB384]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.17 6A4.992 4.992 0 003 11v7a1 1 0 001 1h5a1 1 0 001-1v-7a1 1 0 00-1-1H5.1a3 3 0 012.07-3.6zM18.17 6A4.992 4.992 0 0014 11v7a1 1 0 001 1h5a1 1 0 001-1v-7a1 1 0 00-1-1h-3.1a3 3 0 012.07-3.6z" />
      </svg>
    </div>

    {/* Content */}
    <div className="text-[#435334] text-lg md:text-xl leading-relaxed space-y-6 text-justify mt-8 px-4 md:px-0">
      <p>
        At the heart of Nowal NatureCare lies my deep-rooted belief: naturopathy holds the power to prevent most lifestyle-related diseases—naturally, affordably, and without side effects.
      </p>
      <p>
        This conviction led me on a journey across India, where I explored some of the finest nature cure centres to understand and experience the true essence of holistic healing.
      </p>
      <p>
        These experiences, combined with years of research into naturopathy and natural wellness systems, inspired me to create a center that reflects not just traditional wisdom, but also my personal vision for sustainable, preventive health care.
      </p>
      <p>
        This dream took shape in Gujarat—with the founding of Nowal NatureCare, a haven where the healing force of nature meets scientific sensibility and mindful living.
      </p>
      <p>
        Today, I am proud to see Nowal NatureCare recognized among India’s respected naturopathy destinations. We’ve touched countless lives by encouraging meaningful lifestyle shifts and empowering people to take charge of their own wellness.
      </p>
      <p className="border-l-4 border-[#9EB384] pl-4 italic font-medium bg-[#FAF8F1] rounded-md py-2">
        This success is not mine alone—it belongs to our dedicated team and to every guest who trusted us. To each of you, I offer my heartfelt gratitude and continued commitment to your journey toward lasting health and harmony.
      </p>
    </div>
  </div>
</section>


      {/* Healing Team Section */}
      {/* <section className="relative min-h-96 flex items-center justify-center bg-[#F2F1E8]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Healing Team"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 text-center text-[#435334] max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wide">
            Nowal Team Work
          </h2>
          <h1>Thought of CMD - Shri Ram Nivash Nowal</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
     At Nowal NatureCare, it is our people who bring purpose and heart to everything we do, the environment simply amplifies their dedication.
Our dedicated team is deeply committed to guiding each individual on a transformative journey toward health and self-restoration.
From experienced doctors, skilled therapists and compassionate support staff, every member of our team shares a unified passion for holistic wellness.
Their authenticity, expertise, and unwavering care form the very ethos of Nowal NatureCare.
Together, they create a nurturing space where healing is not just delivered—it is lived, with intention, empathy, and excellence.

          </p>
    
        </div>
      </section> */}

      {/* Flip Cards Section */}
      {/* <section className="py-20 px-6 bg-[#F9F8F3]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#435334]">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Holistic Approach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-2xl font-bold">Holistic Approach</h3>
                  </div>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-[#435334] text-white rounded-lg shadow-lg p-6 flex flex-col justify-center transform rotate-y-180">
                  <h3 className="text-2xl font-bold mb-4">Holistic Approach</h3>
                  <p className="text-lg">
                    We treat the whole person - mind, body, and spirit - not just symptoms. Our integrated therapies work together to restore balance and promote lasting wellness.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Nature's Wisdom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-2xl font-bold">Nature's Wisdom</h3>
                  </div>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-[#435334] text-white rounded-lg shadow-lg p-6 flex flex-col justify-center transform rotate-y-180">
                  <h3 className="text-2xl font-bold mb-4">Nature's Wisdom</h3>
                  <p className="text-lg">
                    Our treatments harness the healing power of natural elements. We combine ancient remedies with modern understanding to help your body heal itself.
                  </p>
                </div>
              </div>
            </div>

          
            <div className="flip-card h-96">
              <div className="flip-card-inner relative w-full h-full transition-transform duration-700">
                <div className="flip-card-front absolute w-full h-full backface-hidden bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                    alt="Personalized Care"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <h3 className="text-2xl font-bold">Personalized Care</h3>
                  </div>
                </div>
                <div className="flip-card-back absolute w-full h-full backface-hidden bg-[#435334] text-white rounded-lg shadow-lg p-6 flex flex-col justify-center transform rotate-y-180">
                  <h3 className="text-2xl font-bold mb-4">Personalized Care</h3>
                  <p className="text-lg">
                    Every healing journey is unique. Our experts create customized treatment plans tailored to your specific needs, goals, and lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quote Section with Button */}
      <section className="bg-[#E6E5D9] text-[#435334] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl italic font-medium leading-relaxed">
            "Healing begins when you return to yourself — in rhythm with nature and nurtured by care."
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-[#6B7A4C]">— Our Founding Belief</p>

          {/* Call to Action */}
          <a href="/contact">
          <button className="mt-10 px-8 py-3 bg-[#435334] text-white rounded-full text-base font-semibold hover:bg-[#6B7A4C] transition-all duration-300">
            Know More
          </button>
          </a>
        </div>
      </section>

      {/* Add the following CSS for flip cards */}
      <style jsx>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}

export default HealingTeam;