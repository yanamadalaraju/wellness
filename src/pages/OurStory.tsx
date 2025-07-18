import React from 'react'

const OurStory: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative min-h-96 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.istockphoto.com/id/614133098/photo/happy-woman-sitting-on-a-pier-getting-inspired-by-nature.jpg?s=612x612&w=0&k=20&c=9BKYealoJJqt7ggQWAehn6_6r2WKlgqazxMFLpYVll4="
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

      {/* Intro Section */}
      <section className="bg-[#F2F1E8] text-[#435334] py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            From Vision to Vitality
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 italic">
            A Journey of Reawakening Body, Mind & Soul
          </h3>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Nimba was born from a dream to create a sanctuary where nature leads the way to healing —
            a haven where traditional wisdom and modern science meet.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Over the years, our vision has remained unwavering: to restore balance in people’s lives through holistic care,
            mindful experiences, and soulful healing. What began as a simple wellness retreat is now a
            growing movement — one that believes in the innate power of the human spirit and the magic of nature.
          </p>
        </div>
      </section>
{/* Section 1: Wholeness of Wellness */}
<section className="bg-[#F2F1E8] py-20 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left Content Box */}
    <div className="bg-white shadow-xl rounded-lg p-10">
      <div className="mb-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#435334] mb-6">
          Wholeness of wellness
        </h2>
      </div>
      <p className="text-[#435334] text-base md:text-lg leading-relaxed">
        Nimba is a mystical tree, every part of it overflowing with nourishing, selfless qualities.
        Our healers are just as treasured as the Nimba tree is. The roots welcome you with <span className="font-semibold">Asana</span>, 
        where we can accommodate you with honour. Its bark acts as our <span className="font-semibold">Ashray</span>, 
        as we support you in this wonderful experience of wellness. 
        Just like the branches of the Nimba tree bestow us with <span className="font-semibold">Sharan</span>, 
        our aim at Nimba is to protect you from diseases and ailments.
        The <span className="font-semibold">Virya</span>, the cooling energy of the leaves, teach us to provide you with utmost relaxation and energy.
        You are our <span className="font-semibold">Humsafars</span>, our companions, and we welcome you to an exquisite journey of health and healing.
      </p>
    </div>

    {/* Right Image */}
    <div className="flex justify-center">
      <img
        src="https://www.nimba.in/wp-content/uploads/2020/08/nimba-gif-1.gif"
        alt="Nimba Tree Graphic"
        className="max-w-full h-auto rounded-lg shadow-md"
      />
    </div>
  </div>
</section>

{/* Section 2: Image + Quote (Adjusted Margin for Overlap) */}
<section className="relative h-[600px] bg-[#F2F1E8] text-[#435334] overflow-visible mt-[300px]">
  <img
    src="https://media.istockphoto.com/id/508136324/photo/woman-on-tea-plantation-in-india.jpg?s=612x612&w=0&k=20&c=BW02dl3us_J0zKeummJXvtXBYtHBQU9PlcpVem1_AKw="
    alt="Nimba Story Background"
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
        A legacy of care rooted in timeless traditions.
      </h3>
      <p className="text-lg md:text-xl leading-relaxed mb-4">
        From ancient ayurvedic rituals to scientifically supported wellness practices, 
        <span className="font-semibold"> every offering at Nimba is crafted to restore your wholeness.</span>
      </p>
      <p className="text-lg md:text-xl leading-relaxed mb-4">
        Our dedicated experts — healers, nutritionists, yogis — come together with one goal: 
        <span className="font-semibold"> to help you reconnect with your inner vitality.</span>
      </p>
      <p className="text-lg md:text-xl leading-relaxed">
        The story continues every day — in the people we touch, the lives we transform, and the nature we honor.
      </p>
    </div>
  </div>
</section>




      {/* Quote Section with Button */}
      <section className="bg-[#E6E5D9] text-[#435334] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <blockquote className="text-2xl md:text-3xl italic font-medium leading-relaxed">
            “Healing begins when you return to yourself — in rhythm with nature and nurtured by care.”
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-wider text-[#6B7A4C]">— Our Founding Belief</p>

          {/* Call to Action */}
          <button className="mt-10 px-8 py-3 bg-[#435334] text-white rounded-full text-base font-semibold hover:bg-[#6B7A4C] transition-all duration-300">
            Know More
          </button>
        </div>
      </section>
    </div>
  )
}

export default OurStory
