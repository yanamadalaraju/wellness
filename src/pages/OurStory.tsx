import React from 'react'
import { Link } from 'react-router-dom'
import Video360Viewer from './Video360Viewer'

const OurStory: React.FC = () => {
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
            Our Story
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
                    <span className="text-sage-800 font-medium">Our Story</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* Intro Section */}
    <section className="bg-[#F2F1E8] text-[#435334] py-20 px-6">
  <div className="max-w-3xl mx-auto">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Health is the greatest wealth</h2>
      <div className="flex justify-center items-center space-x-4">
        <div className="w-10 h-px bg-[#435334]/50"></div>
        <svg className="w-5 h-5 text-[#435334]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
        </svg>
        <div className="w-10 h-px bg-[#435334]/50"></div>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-6 text-lg leading-relaxed">
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Health is the greatest wealth, and naturopathy as a drugless regimen helps you protect it, naturally with the concept of alternative medicine.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Rooted in the belief that the body can heal itself, naturopathy uses nature-based therapies, detox, nutrition, and mindful living to restore balance and prevent illness.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Nowal Naturecare is a sanctuary built on this philosophy, where ancient wisdom meets modern science in a calm, healing environment.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Here, we don’t just treat symptoms—we nurture the whole you.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        By awakening your body’s innate strength, we guide you toward lasting wellness, proving that investing in your health is the richest gift you can give yourself and to your family. You can also make others awake to follow the lifestyle to keep diseases away.
      </p>
    </div>

    {/* Decorative Footer Icon */}
    <div className="mt-12 flex justify-center">
      <svg className="w-12 h-12 text-[#435334]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    </div>
  </div>
</section>


<section className="bg-[#F2F1E8] text-[#435334] py-20 px-6">
  <div className="max-w-3xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">Health is the greatest wealth</h2>
      <div className="flex justify-center items-center space-x-4">
        <div className="w-10 h-px bg-[#435334]/50"></div>
        <svg className="w-5 h-5 text-[#435334]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd"/>
        </svg>
        <div className="w-10 h-px bg-[#435334]/50"></div>
      </div>
    </div>

    {/* Paragraphs */}
    <div className="space-y-6 text-lg leading-relaxed">
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Health is the greatest wealth, and naturopathy as a drugless regimen helps you protect it, naturally with the concept of alternative medicine.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Rooted in the belief that the body can heal itself, naturopathy uses nature-based therapies, detox, nutrition, and mindful living to restore balance and prevent illness.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Nowal Naturecare is a sanctuary built on this philosophy, where ancient wisdom meets modern science in a calm, healing environment.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        Here, we don’t just treat symptoms—we nurture the whole you.
      </p>
      <p className="relative pl-6 before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:rounded-full before:bg-[#435334]/70">
        By awakening your body’s innate strength, we guide you toward lasting wellness, proving that investing in your health is the richest gift you can give yourself and to your family. You can also make others awake to follow the lifestyle to keep diseases away.
      </p>
    </div>

    {/* Footer Icon */}
    <div className="mt-12 flex justify-center">
      <svg className="w-12 h-12 text-[#435334]/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
      </svg>
    </div>
  </div>
</section>

{/* Section 1: Wholeness of Nowals */}
<section className="bg-[#F2F1E8] py-20 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Content Box */}
    <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 transform transition-all hover:shadow-3xl hover:-translate-y-1">
      <div className="mb-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#435334] mb-6 relative pb-4">
          <span className="relative">
            Comprehensiveness of Nowal Naturecare
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#9EB384] rounded-full"></span>
          </span>
        </h2>
        <div className="flex justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9EB384" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
          </svg>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-[#435334] text-base md:text-lg leading-relaxed font-medium">
          Nimba is a mystical tree, every part of it overflowing with nourishing, selfless qualities. Our healers are just as treasured as the Nimba tree is.
        </p>
        <p className="text-[#435334] text-base md:text-lg leading-relaxed">
          The roots welcome you with Asana, where we can accommodate you with honour. Its bark acts as our Ashray, as we support you in this wonderful experience of wellness. Just like the branches of the Nimba tree bestow us with Sharan, our aim at Nimba is to protect you from diseases and ailments.
        </p>
        <p className="text-[#435334] text-base md:text-lg leading-relaxed">
          The Virya, the cooling energy of the leaves teach us to provide you with utmost relaxation and energy. You are our Humsafars, our companions, and we welcome you to an exquisite journey of health and healing.
        </p>
        <div className="bg-[#FAF8F1] p-4 rounded-lg border-l-4 border-[#9EB384]">
          <p className="text-[#435334] italic font-medium">
            "Nowal Naturecare isn't just a center, it's a return to self, a reminder that when you care for your health with intention and love, you unlock life's truest abundance."
          </p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center relative">
      <div className="relative max-w-md w-full">
        <img
          src="https://www.nimba.in/wp-content/uploads/2020/08/nimba-gif-1.gif"
          alt="Nowals Tree Graphic"
          className="w-full h-auto rounded-2xl shadow-xl transform transition-all hover:scale-105"
        />
        <div className="absolute -inset-4 border-2 border-[#9EB384] rounded-2xl opacity-20 pointer-events-none"></div>
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#9EB384] rounded-full opacity-10"></div>
        <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#9EB384] rounded-full opacity-10"></div>
      </div>
    </div>
  </div>
</section>

{/* Section 2: Image + Quote (Adjusted Margin for Overlap) */}
<section className="relative h-[600px] bg-[#F2F1E8] text-[#435334] overflow-visible mt-[300px]">
  <img
    src="https://media.istockphoto.com/id/508136324/photo/woman-on-tea-plantation-in-india.jpg?s=612x612&w=0&k=20&c=BW02dl3us_J0zKeummJXvtXBYtHBQU9PlcpVem1_AKw="
    alt="Nowals Story Background"
    className="w-full h-full object-cover"
  />

  <div className="absolute top-[-240px] left-1/2 transform -translate-x-1/2 w-full max-w-6xl flex bg-[#F2F1E8] shadow-2xl rounded-xl overflow-hidden">
    {/* Left Image Block */}
    <div className="w-1/2 relative">
      <img
        src="https://media.istockphoto.com/id/2211947210/photo/businesswoman-practicing-mindfulness-meditation-outdoors-in-urban-environment.jpg?s=612x612&w=0&k=20&c=DERZhBUdxb774M8dPcOEpeWD-9WW2wqXfWeJYY5luVo="
        alt="Decorative Element"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right Content Block */}
    <div className="w-1/2 px-8 py-10 text-left flex flex-col justify-center">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
        Our Vision & Mission
      </h3>
      
      <div className="mb-6">
        <h4 className="text-xl font-semibold mb-2">Our Vision</h4>
        <p className="text-lg leading-relaxed">
          To become a leading center for holistic healing and sustainable wellness, blending the ancient science of naturopathy with modern hospitality to promote natural living, preventative care, and complete rejuvenation of mind, body, and spirit.
        </p>
      </div>
      
      <div>
        <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
        <p className="text-lg leading-relaxed">
          To provide world-class naturopathic and wellness services in a serene and eco-friendly environment, offering personalized therapies, integrative treatments, and mindful experiences that foster long-term well-being and sustainable health.
        </p>
      </div>
    </div>
  </div>
</section>

{/* <Video360Viewer /> */}


      {/* Quote Section with Button */}
      <section className="bg-[#E6E5D9] text-[#435334] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl italic font-medium leading-relaxed">
            “Healing begins when you return to yourself — in rhythm with nature and nurtured by care.”
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-[#6B7A4C]">— Our Founding Belief</p>

          {/* Call to Action */}
          {/* <button className="mt-10 px-8 py-3 bg-[#435334] text-white rounded-full text-base font-semibold hover:bg-[#6B7A4C] transition-all duration-300">
            Know More
          </button> */}
        </div>
      </section>
    </div>
  )
}

export default OurStory

// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Leaf, Heart, Users, Award, Clock, Mountain, ChevronRight, Quote } from 'lucide-react';
// import image from '../assets/wellgif.jpg';

// const OurStory: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-[#F2F1E8]">
//       {/* Hero Section - Fullscreen with Parallax */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
//             alt="Serene Tea Plantation"
//             className="w-full h-full object-cover brightness-90 scale-110 animate-zoom-in"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#435334]/90 via-[#435334]/40 to-transparent"></div>
//         </div>
        
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 transform transition-all duration-1000 animate-fade-in">
//           <div className="mb-6">
//             <span className="text-[#D1D5C8] tracking-widest text-sm md:text-base font-medium">THE NOWAL JOURNEY</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 leading-tight">
//             Our <span className="text-[#9CAF88]">Story</span>
//           </h1>
//           <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
//             Rooted in nature, driven by purpose — the journey to healing began here
//           </p>
//         </div>

//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronRight className="w-8 h-8 text-white rotate-90" />
//         </div>
//       </section>

//       {/* Breadcrumbs - Elegant */}
//            <div className="container mx-auto px-4 py-4 flex justify-center">
//                    <nav className="flex" aria-label="Breadcrumb">
//                      <ol className="inline-flex items-center space-x-2 md:space-x-2">
//                        <li className="inline-flex items-center">
//                          <Link to="/" className="text-sage-600 hover:text-sage-800">
//                            Home
//                          </Link>
//                        </li>
//                        <li className="flex items-center">
//                          <span className="mx text-sage-500">{'>'}</span>
//                          <span className="mx text-sage-500">{'>'}</span>
//                        </li>
//                        <li>
//                          <span className="text-sage-800 font-medium">Our Story</span>
//                        </li>
//                      </ol>
//                    </nav>
//                  </div>

//       {/* Intro Section - Luxury Card */}
//       <section className="py-24 px-6 relative">
//         <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="md:flex">
//             <div className="md:w-2/5 bg-[#435334] p-12 flex items-center justify-center">
//               <div className="text-center text-white">
//                 <Leaf className="w-12 h-12 mx-auto mb-6" />
//                 <h3 className="text-2xl font-playfair font-bold mb-4">Our Origin</h3>
//                 <div className="w-16 h-0.5 bg-[#9CAF88] mx-auto mb-6"></div>
//                 <p className="text-[#D1D5C8] italic">"Where nature meets healing"</p>
//               </div>
//             </div>
//             <div className="md:w-3/5 p-12">
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#435334] font-playfair">
//                 From Vision to Vitality
//               </h2>
//               <h3 className="text-xl md:text-2xl font-medium mb-8 text-[#6B7A4C] italic">
//                 A Journey of Reawakening Body, Mind & Soul
//               </h3>
//               <div className="space-y-6">
//                 <p className="text-lg leading-relaxed text-[#435334]">
//                   Nowal was born from a dream to create a sanctuary where nature leads the way to healing —
//                   a haven where traditional wisdom and modern science meet.
//                 </p>
//                 <p className="text-lg leading-relaxed text-[#435334]">
//                   Over the years, our vision has remained unwavering: to restore balance in people's lives through holistic care,
//                   mindful experiences, and soulful healing.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Wholeness of Nowals Section */}
//       <section className="py-20 px-6 bg-[#F2F1E8]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-[#435334] mb-4 font-playfair">
//               Wholeness of Nowal
//             </h2>
//             <div className="w-20 h-0.5 bg-[#9CAF88] mx-auto"></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <div className="bg-white p-10 rounded-xl shadow-lg">
//               <p className="text-[#435334] text-lg leading-relaxed space-y-6">
//                 <span className="block">
//                   Nowals is a mystical tree, every part of it overflowing with nourishing, selfless qualities.
//                   Our healers are just as treasured as the Nowals tree is.
//                 </span>
//                 <span className="block">
//                   The roots welcome you with <span className="font-semibold">Asana</span>, 
//                   where we can accommodate you with honour. Its bark acts as our <span className="font-semibold">Ashray</span>, 
//                   as we support you in this wonderful experience of Nowals.
//                 </span>
//                 <span className="block">
//                   Just like the branches bestow us with <span className="font-semibold">Sharan</span>, 
//                   our aim is to protect you from diseases and ailments.
//                 </span>
//                 <span className="block">
//                   The <span className="font-semibold">Virya</span>, the cooling energy of the leaves, teach us to provide you with utmost relaxation and energy.
//                 </span>
//                 <span className="block">
//                   You are our <span className="font-semibold">Humsafars</span>, our companions, in this exquisite journey of health and healing.
//                 </span>
//               </p>
//             </div>

//             {/* Right Image */}
//             <div className="flex justify-center">
//               <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-xl">
//                 <img
//                   src={image}
//                   alt="Nowals Tree Graphic"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#435334]/30 to-transparent"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Legacy Section - Floating Card */}
//       <section className="relative py-40 px-6 overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
//             alt="Peaceful Tea Plantation"
//             className="w-full h-full object-cover brightness-75"
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-[#435334]/30 via-[#435334]/70 to-[#435334]/90"></div>
//         </div>

//         <div className="max-w-6xl mx-auto relative z-10">
//           <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-12 transform transition-all hover:scale-[1.01] duration-500">
//             <div className="grid md:grid-cols-2 gap-12">
//               {/* Left Image */}
//               <div className="relative rounded-xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//                   alt="Nowals Practice"
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#435334]/50 to-transparent"></div>
//               </div>

//               {/* Right Content */}
//               <div className="flex flex-col justify-center">
//                 <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug text-[#435334] font-playfair">
//                   A legacy of care rooted in timeless traditions
//                 </h3>
//                 <div className="space-y-6">
//                   <p className="text-lg leading-relaxed text-[#435334]">
//                     From ancient ayurvedic rituals to scientifically supported Nowals practices, 
//                     <span className="font-semibold"> every offering at Nowals is crafted to restore your wholeness.</span>
//                   </p>
//                   <p className="text-lg leading-relaxed text-[#435334]">
//                     Our dedicated experts — healers, nutritionists, yogis — come together with one goal: 
//                     <span className="font-semibold"> to help you reconnect with your inner vitality.</span>
//                   </p>
//                   <p className="text-lg leading-relaxed text-[#435334]">
//                     The story continues every day — in the people we touch, the lives we transform, and the nature we honor.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quote Section - Elegant */}
//       <section className="py-28 px-6 bg-[#435334] relative overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//             <path d="M0,0 L100,0 L100,100 Q50,80 0,100 Z" fill="#E8F0D6"></path>
//           </svg>
//         </div>
//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <Quote className="w-12 h-12 mx-auto mb-8 text-[#9CAF88] opacity-70" />
//           <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed text-white font-playfair mb-8">
//             "Healing begins when you return to yourself — in rhythm with nature and nurtured by care."
//           </blockquote>
//           <div className="w-24 h-0.5 bg-[#9CAF88] mx-auto mb-8"></div>
//           <p className="text-[#D1D5C8] uppercase tracking-widest text-sm">— Our Founding Belief</p>

//           {/* CTA Button */}
//           <div className="mt-12">
//             <button className="px-10 py-4 bg-white text-[#435334] rounded-full text-lg font-semibold hover:bg-[#F2F1E8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//               Discover Our Approach
//               <ChevronRight className="w-5 h-5 ml-2 inline" />
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default OurStory
