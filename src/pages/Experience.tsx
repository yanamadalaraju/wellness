import React from 'react';
import { Heart, Users, Award, Clock, Leaf, Mountain } from 'lucide-react'
import { Link } from 'react-router-dom';
import image from '../assets/natureimg.jpg';
import img from '../assets/3d1-1.jpg';
import AboutFounder from '../components/founder';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src={img}
            alt="Nowal Experience"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-overlay"></div> */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            The Nowal Experience
          </h1>
          <p className="text-xl md:text-2xl text-shadow">
            Discover the essence of holistic healing through our time-tested approach
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
                    <span className="text-sage-800 font-medium">About Founder</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* The Mantra Section */}
      <section className="bg-[#F2F1E8] text-[#435334] py-24 px-6 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
      Nowal NatureCare
    </h2>
    <h3 className="text-2xl md:text-3xl font-medium mb-8 italic">
      A Sanctuary for Holistic Natural Healing.
    </h3>
    <p className="text-lg md:text-xl leading-relaxed mb-6">
      In the rush of modern life, it's the mindful pause — the moment of embracing natural healing — 
      that brings us closer to true balance and vitality.
    </p>
    <p className="text-base md:text-lg leading-relaxed">
      At Nowal, our philosophy is simple yet profound: <span className="font-semibold">health and healing always come first. </span> 
      We believe that every individual deserves the time and space to rejuvenate, rediscover their 
      inner strength, and heal holistically — not just from today’s stressors, but from the deeper, 
      unseen imbalances of our times. Step into a journey where Nowal is a way of life.
    </p>
  </div>
</section>

 <AboutFounder />


      {/* Our Story Section */}
     <section className="relative h-[700px] bg-[#F2F1E8] text-[#435334] overflow-visible">
  {/* Background Image with Overlay */}
  <div className="relative w-full h-full">
    <img
      src={image}
      alt="Nowal Retreat"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#435334] opacity-20"></div>
  </div>

  {/* Content Block */}
  <div className="absolute left-1/2 bottom-[-150px] transform -translate-x-1/2 w-full max-w-4xl bg-[#F2F1E8] text-center px-8 py-12 shadow-lg rounded-lg border border-[#435334]/10">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-medium mb-6 leading-snug font-serif italic">
       Every corner of Nowal NatureCare radiates peace—where lush greenery, gentle serenity, and uplifting energy come together to soothe your soul
      </h3>
      
      <div className="h-px w-32 bg-[#435334]/30 mx-auto my-6"></div>
      
      <p className="text-base md:text-lg leading-relaxed mb-4 font-sans">
        At Nowal NatureCare, we gently guide you to a deeper truth—your health has always been in your hands.
Within our serene, holistic sanctuary, healing isn’t separate from health—it’s woven together through intention, care, and balance.
We combine the wisdom of ancient traditions, the precision of modern science, and the nurturing touch of natural therapies to help your body and mind return to harmony.
Here, wellness isn’t treated—it’s awakened.
You’ll find no shortcuts, only honest, organic pathways to restore what’s already within you.
Nowal NatureCare is simply your guide—a gentle catalyst on your journey toward healing, renewal, and the quiet magic of holistic living.

      </p>
      
      {/* <button className="mt-6 px-8 py-3 bg-[#435334] text-[#F2F1E8] rounded-full font-medium hover:bg-[#353d27] transition-colors">
        Discover Our Retreat
      </button> */}
    </div>
  </div>
</section>



  <section className="bg-[#E6E5D9] text-[#435334] py-16 px-6 text-center mt-56">
  <div className="max-w-3xl mx-auto">
    <blockquote className="text-2xl md:text-3xl italic font-medium leading-relaxed">
      “Your healing journey begins with a single breath, grounded in nature and nurtured by intention.”
    </blockquote>
    <p className="mt-4 text-sm uppercase tracking-wider text-[#6B7A4C]">— Nowal Philosophy</p>

    {/* Heal Now Button */}
    {/* <button className="mt-10 px-8 py-3 bg-[#435334] text-white rounded-full text-base font-semibold hover:bg-[#6B7A4C] transition-all duration-300">
      Heal Now
    </button> */}
  </div>
</section>



    

   
     
    </div>
  )
}

export default Experience



// import React from 'react'
// import { Heart, Users, Award, Clock, Leaf, Mountain, ChevronRight, Sparkles, Sun, Moon, Waves, Bird } from 'lucide-react'
// import { Link } from 'react-router-dom'

// const Experience: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#F9FAF4]">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <video 
//             autoPlay 
//             loop 
//             muted 
//             playsInline 
//             className="w-full h-full object-cover brightness-75"
//             poster="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
//           >
//             <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-meditating-in-a-natural-environment-39839-large.mp4" type="video/mp4" />
//           </video>
//           <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-[#2C3E50]/30 to-transparent"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <div className="mb-6 flex justify-center">
//             <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//               <Sparkles className="w-5 h-5 text-yellow-300" />
//               <span className="text-sm uppercase tracking-widest">New Retreats Available</span>
//             </div>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight animate-fadeIn">
//             The <span className="text-[#A8D8B9]">Nowal</span> Experience
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light leading-relaxed">
//             Discover the essence of holistic healing through our time-tested approach to mind-body harmony
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-3 bg-[#A8D8B9] text-[#2C3E50] rounded-full text-lg font-semibold hover:bg-[#C1E1D2] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
//               Begin Your Journey
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </button>
//             <button className="px-8 py-3 border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
//               Watch Intro
//               <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             </button>
//           </div>
//         </div>
        
//         {/* Scrolling indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Breadcrumbs */}
//           <div className="container mx-auto px-4 py-4 flex justify-center">
//                   <nav className="flex" aria-label="Breadcrumb">
//                     <ol className="inline-flex items-center space-x-2 md:space-x-2">
//                       <li className="inline-flex items-center">
//                         <Link to="/" className="text-sage-600 hover:text-sage-800">
//                           Home
//                         </Link>
//                       </li>
//                       <li className="flex items-center">
//                         <span className="mx text-sage-500">{'>'}</span>
//                         <span className="mx text-sage-500">{'>'}</span>
//                       </li>
//                       <li>
//                         <span className="text-sage-800 font-medium">The mantra</span>
//                       </li>
//                     </ol>
//                   </nav>
//                 </div>

//       {/* The Mantra Section */}
//       <section className="bg-[#ECF0F1] text-[#2C3E50] py-24 px-6 text-center relative overflow-hidden">
//         {/* Floating decorative elements */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//           <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-[#27AE60] mix-blend-multiply filter blur-xl animate-float"></div>
//           <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#2ECC71] mix-blend-multiply filter blur-xl animate-float-delay"></div>
//           <Leaf className="absolute top-1/4 left-1/5 text-[#A8D8B9]/30 w-24 h-24 animate-float-slow" />
//           <Leaf className="absolute bottom-1/4 right-1/5 text-[#A8D8B9]/30 w-24 h-24 animate-float-slow-delay" />
//         </div>
        
//         <div className="max-w-5xl mx-auto relative z-10">
//           <div className="inline-block mb-8">
//             <span className="text-[#27AE60] text-lg font-medium uppercase tracking-widest flex items-center justify-center">
//               <Sun className="w-5 h-5 mr-2" />
//               Our Philosophy
//               <Moon className="w-5 h-5 ml-2" />
//             </span>
//           </div>
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide font-serif">
//             <span className="text-[#2C3E50]">Nowal</span> <span className="text-[#27AE60]">Nature</span> <span className="text-[#2C3E50]">Care</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#27AE60] to-[#A8D8B9] mx-auto mb-8"></div>
//           <h3 className="text-2xl md:text-3xl font-medium mb-8 italic text-[#27AE60]">
//             A Sanctuary for Natural Healing & Holistic Nowal
//           </h3>
//           <div className="max-w-3xl mx-auto">
//             <p className="text-lg md:text-xl leading-relaxed mb-6">
//               In the rush of modern life, it's the mindful pause — the moment of embracing natural healing — 
//               that brings us closer to true balance and vitality.
//             </p>
//             <p className="text-base md:text-lg leading-relaxed">
//               At Nowal, our philosophy is simple yet profound: <span className="font-semibold text-[#2C3E50]">health and healing always come first.</span> 
//               We believe that every individual deserves the time and space to rejuvenate, rediscover their 
//               inner strength, and heal holistically — not just from today's stressors, but from the deeper, 
//               unseen imbalances of our times. Step into a journey where Nowal is a way of life.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="relative py-40 bg-[#F2F1E8] text-[#2C3E50] overflow-hidden">
//   {/* Background Image with parallax effect */}
//   <div className="absolute inset-0 overflow-hidden">
//     <div 
//       className="parallax-bg w-full h-full" 
//       style={{
//         backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}
//     ></div>
//     <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/70 via-[#2C3E50]/30 to-transparent"></div>
//   </div>

//   {/* Content Container */}
//   <div className="relative z-10 container mx-auto px-6">
//     {/* Content Block */}
//     <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 transition-all duration-500 hover:shadow-3xl hover:scale-[1.005]">
//       {/* Decorative top elements */}
//       <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-[#27AE60] to-transparent opacity-30"></div>
      
//       {/* Content */}
//       <div className="p-10 md:p-16">
//         <h3 className="text-4xl md:text-5xl font-bold mb-12 leading-tight font-serif text-center">
//           <span className="text-[#27AE60]">A Perfect Harmony</span> of <br className="hidden md:block" />
//           <span className="text-[#2C3E50]">Greenery</span>, <span className="text-[#A8D8B9]">Serenity</span>, and <span className="text-[#2C3E50]">Positivity</span>
//         </h3>
        
//         <div className="grid md:grid-cols-2 gap-10 text-left max-w-6xl mx-auto">
//           <div className="space-y-8">
//             <div className="flex items-start group">
//               <div className="relative mr-6 flex-shrink-0">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27AE60] to-[#A8D8B9] flex items-center justify-center group-hover:from-[#2C3E50] group-hover:to-[#34495E] transition-all duration-300">
//                   <Leaf className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="absolute -inset-2 border-2 border-[#27AE60]/30 rounded-full pointer-events-none animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <p className="text-xl leading-relaxed pt-1">
//                 Here, at Nowal, we take your hand and walk you through the truth of life — that <span className="font-semibold text-[#27AE60]">health is under our control, always.</span>
//               </p>
//             </div>
            
//             <div className="flex items-start group">
//               <div className="relative mr-6 flex-shrink-0">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27AE60] to-[#A8D8B9] flex items-center justify-center group-hover:from-[#2C3E50] group-hover:to-[#34495E] transition-all duration-300">
//                   <Heart className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="absolute -inset-2 border-2 border-[#27AE60]/30 rounded-full pointer-events-none animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <p className="text-xl leading-relaxed pt-1">
//                 In our holistic haven, <span className="font-semibold text-[#27AE60]">healing and health are interlinked.</span>
//               </p>
//             </div>
//           </div>
          
//           <div className="space-y-8">
//             <div className="flex items-start group">
//               <div className="relative mr-6 flex-shrink-0">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27AE60] to-[#A8D8B9] flex items-center justify-center group-hover:from-[#2C3E50] group-hover:to-[#34495E] transition-all duration-300">
//                   <Award className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="absolute -inset-2 border-2 border-[#27AE60]/30 rounded-full pointer-events-none animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <p className="text-xl leading-relaxed pt-1">
//                 Our entire process of healing and elevating your health is by an impeccable amalgamation of <span className="font-semibold text-[#27AE60]">modern science, traditional practices, and ancient wisdom.</span>
//               </p>
//             </div>
            
//             <div className="flex items-start group">
//               <div className="relative mr-6 flex-shrink-0">
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27AE60] to-[#A8D8B9] flex items-center justify-center group-hover:from-[#2C3E50] group-hover:to-[#34495E] transition-all duration-300">
//                   <Mountain className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="absolute -inset-2 border-2 border-[#27AE60]/30 rounded-full pointer-events-none animate-ping-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <p className="text-xl leading-relaxed pt-1">
//                 So, to experience the holistic force of Nowal, trace your steps to Nowal. We are just the catalyst for life-altering healing of the soul and healthification of the body.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Decorative bottom elements */}
//       <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-96 h-2 bg-gradient-to-r from-transparent via-[#A8D8B9] to-transparent opacity-30"></div>
//     </div>
//   </div>
// </section>

//       {/* Quote Section */}
//       <section className="bg-[#E6E5D9] text-[#2C3E50] py-32 px-6 text-center relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/soft-circle-scales.png')]"></div>
//         </div>
        
//         <div className="max-w-3xl mx-auto relative z-10">
//           <div className="relative inline-block mb-12">
//             <svg className="w-16 h-16 mx-auto text-[#27AE60]" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
//             </svg>
//             <Bird className="absolute -top-4 -right-4 text-[#A8D8B9] w-8 h-8" />
//           </div>
          
//           <blockquote className="text-2xl md:text-4xl italic font-medium leading-relaxed font-serif">
//             "Your healing journey begins with a single breath, grounded in nature and nurtured by intention."
//           </blockquote>
          
//           <div className="mt-12 flex justify-center">
//             <div className="w-24 h-1 bg-gradient-to-r from-[#27AE60] to-[#A8D8B9]"></div>
//           </div>
          
//           <p className="mt-8 text-sm uppercase tracking-widest text-[#27AE60] flex items-center justify-center">
//             <Waves className="w-4 h-4 mr-2" />
//             Nowal Philosophy
//             <Waves className="w-4 h-4 ml-2" />
//           </p>

//           {/* Heal Now Button */}
//           <div className="mt-12">
//             <button className="px-12 py-4 bg-gradient-to-r from-[#27AE60] to-[#A8D8B9] text-white rounded-full text-lg font-semibold hover:from-[#2ECC71] hover:to-[#B8E8C9] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center mx-auto">
//               Begin Your Healing Journey
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-24 px-6 bg-[#FAF9F5] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-5 pointer-events-none">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')]"></div>
//         </div>
        
//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="text-center mb-20">
//             <span className="text-[#27AE60] uppercase tracking-widest text-sm font-medium flex items-center justify-center">
//               <div className="w-4 h-0.5 bg-[#27AE60] mr-2"></div>
//               Our Approach
//               <div className="w-4 h-0.5 bg-[#27AE60] ml-2"></div>
//             </span>
//             <h2 className="text-3xl md:text-5xl font-bold mt-4 text-[#2C3E50] font-serif">
//               Pillars of <span className="text-[#27AE60]">Nowal</span>
//             </h2>
//             <div className="w-20 h-1 bg-gradient-to-r from-[#27AE60] to-[#A8D8B9] mx-auto my-6"></div>
//             <p className="text-lg text-[#27AE60] max-w-2xl mx-auto">
//               Six foundational elements that create transformative healing experiences
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <Leaf className="w-8 h-8" />,
//                 title: "Nature's Wisdom",
//                 description: "Harnessing the healing power of nature through organic treatments and natural remedies."
//               },
//               {
//                 icon: <Heart className="w-8 h-8" />,
//                 title: "Holistic Care",
//                 description: "Treating mind, body, and spirit as interconnected elements of whole health."
//               },
//               {
//                 icon: <Clock className="w-8 h-8" />,
//                 title: "Ancient Traditions",
//                 description: "Time-honored healing practices combined with modern Nowal techniques."
//               },
//               {
//                 icon: <Users className="w-8 h-8" />,
//                 title: "Community",
//                 description: "Shared experiences that foster connection and collective wellbeing."
//               },
//               {
//                 icon: <Award className="w-8 h-8" />,
//                 title: "Expert Guidance",
//                 description: "Seasoned practitioners dedicated to your Nowal journey."
//               },
//               {
//                 icon: <Mountain className="w-8 h-8" />,
//                 title: "Sacred Space",
//                 description: "A peaceful sanctuary designed to promote deep relaxation and healing."
//               }
//             ].map((pillar, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group hover:bg-[#ECF0F1] border border-white hover:border-[#D1D5C8] relative overflow-hidden"
//               >
//                 <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-[#A8D8B9]/10 group-hover:bg-[#A8D8B9]/20 transition-all duration-500"></div>
                
//                 <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#27AE60] to-[#A8D8B9] flex items-center justify-center mb-6 group-hover:from-[#2C3E50] group-hover:to-[#34495E] transition-all duration-300 relative z-10">
//                   {React.cloneElement(pillar.icon, { className: "w-6 h-6 text-white" })}
//                 </div>
                
//                 <h3 className="text-xl font-bold mb-3 text-[#2C3E50] relative z-10">{pillar.title}</h3>
//                 <p className="text-[#27AE60] relative z-10">{pillar.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-20 px-6 bg-gradient-to-br from-[#ECF0F1] to-[#D6E4E5] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10 pointer-events-none">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/soft-wallpaper.png')]"></div>
//         </div>
        
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50] font-serif">
//             Ready to Begin Your <span className="text-[#27AE60]">Nowal</span> Journey?
//           </h2>
          
//           <p className="text-lg text-[#27AE60] mb-10 max-w-2xl mx-auto">
//             Discover the transformative power of holistic healing in our serene sanctuary.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="px-8 py-4 bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white rounded-full text-lg font-medium hover:from-[#34495E] hover:to-[#2C3E50] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
//               Book a Consultation
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </button>
            
//             <button className="px-8 py-4 border-2 border-[#2C3E50] text-[#2C3E50] rounded-full text-lg font-medium hover:bg-[#2C3E50]/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
//               Explore Retreats
//               <ChevronRight className="w-5 h-5 ml-2" />
//             </button>
//           </div>
          
//           <div className="mt-12 flex justify-center">
//             <div className="flex space-x-4">
//               <div className="w-3 h-3 rounded-full bg-[#27AE60] animate-pulse"></div>
//               <div className="w-3 h-3 rounded-full bg-[#A8D8B9] animate-pulse delay-100"></div>
//               <div className="w-3 h-3 rounded-full bg-[#2C3E50] animate-pulse delay-200"></div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Experience