import React from 'react'
import { Heart, Users, Award, Clock, Leaf, Mountain } from 'lucide-react'
import { Link } from 'react-router-dom'

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.jpg?s=612x612&w=0&k=20&c=LXeGeLgKznGamU25tLajijCVuV5lxWIZH0RW5qN3k5g="
            alt="Wellness Experience"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-overlay"></div> */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 text-shadow">
            The Wellness Experience
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
                    <span className="text-sage-800 font-medium">The Mantra</span>
                  </li>
                </ol>
              </nav>
            </div>

      {/* The Mantra Section */}
      <section className="bg-[#F2F1E8] text-[#435334] py-24 px-6 text-center">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
      Wellness Nature Care
    </h2>
    <h3 className="text-2xl md:text-3xl font-medium mb-8 italic">
      A Sanctuary for Natural Healing & Holistic Wellness
    </h3>
    <p className="text-lg md:text-xl leading-relaxed mb-6">
      In the rush of modern life, it's the mindful pause — the moment of embracing natural healing — 
      that brings us closer to true balance and vitality.
    </p>
    <p className="text-base md:text-lg leading-relaxed">
      At Wellness, our philosophy is simple yet profound: <span className="font-semibold">health and healing always come first.</span> 
      We believe that every individual deserves the time and space to rejuvenate, rediscover their 
      inner strength, and heal holistically — not just from today’s stressors, but from the deeper, 
      unseen imbalances of our times. Step into a journey where wellness is a way of life.
    </p>
  </div>
</section>



      {/* Our Story Section */}
     <section className="relative h-[600px] bg-[#F2F1E8] text-[#435334] overflow-visible">
  {/* Background Image */}
  <img
    src="https://media.istockphoto.com/id/1140510027/photo/rabindra-sarovar-lake-kolkata-india.jpg?s=612x612&w=0&k=20&c=-644i3pAovgQ7XqyEg_edR1uTTDXlTpdbwSeOXAwDbM="
    alt="Wellness Wellness Retreat"
    className="w-full h-full object-cover"
  />

  {/* Content Block extending outside */}
  <div className="absolute left-1/2 bottom-[-180px] transform -translate-x-1/2 w-full max-w-5xl bg-[#F2F1E8] text-center px-6 py-14 shadow-2xl rounded-xl">
    <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-snug">
      A perfect harmony of greenery, serenity and positivity, every corner at Wellness will speak to your inner peace.
    </h3>
    <p className="text-lg md:text-xl leading-relaxed mb-4">
      Here, at Wellness, we take your hand and walk you through the truth of life — that <span className="font-semibold">health is under our control, always.</span>
    </p>
    <p className="text-lg md:text-xl leading-relaxed mb-4">
      In our holistic haven, <span className="font-semibold">healing and health are interlinked.</span>
    </p>
    <p className="text-lg md:text-xl leading-relaxed mb-4">
      Our entire process of healing and elevating your health is by an impeccable amalgamation of 
      <span className="font-semibold"> modern science, traditional practices and ancient wisdom.</span>
    </p>
    <p className="text-lg md:text-xl leading-relaxed">
      So, to experience the holistic force of wellness, trace your steps to Wellness. 
      We are just the catalyst for life-altering healing of the soul and healthification of the body — 
      all the magic of organic and natural wonders comes from within.
    </p>
  </div>
</section>



  <section className="bg-[#E6E5D9] text-[#435334] py-16 px-6 text-center mt-56">
  <div className="max-w-3xl mx-auto">
    <blockquote className="text-2xl md:text-3xl italic font-medium leading-relaxed">
      “Your healing journey begins with a single breath, grounded in nature and nurtured by intention.”
    </blockquote>
    <p className="mt-4 text-sm uppercase tracking-wider text-[#6B7A4C]">— Wellness Philosophy</p>

    {/* Heal Now Button */}
    <button className="mt-10 px-8 py-3 bg-[#435334] text-white rounded-full text-base font-semibold hover:bg-[#6B7A4C] transition-all duration-300">
      Heal Now
    </button>
  </div>
</section>



    

   
     
    </div>
  )
}

export default Experience