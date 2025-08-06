import React from 'react';
import founderImage from '../assets/founders.jpg'; // Replace with actual image path

const AboutFounder = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-green-800 mb-4">
            About Our Founder
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Founder Image - Now takes equal width */}
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white">
              <img 
                src={founderImage} 
                alt="Shri Ram Niwas Nowal" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Added some personal details below the image for balance */}
            <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                SHRI RAM NIVAS NOWAL
              </h3>
              <h4 className="text-lg font-semibold text-green-700 mb-4">
                A VISIONARY LEADER AND SOCIAL REFORMER
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Founder of R.N. Nowal Foundation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Chairman & MD of Three Leaves India</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Social Reformer & Philanthropist</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-600">•</span>
                  <span>Pioneer in Tea Industry Innovations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Founder Bio - Now takes equal width */}
          <div className="md:w-1/2">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Shri Ram Niwas Nowal stands as an exemplary figure of first-generation entrepreneurship combined with unwavering social commitment. Born to Shri B.L. Nowal Sharma, he completed his early education in his ancestral village Gadri (Badhal) in Jaipur district, Rajasthan.
              </p>
              
              <p>
                As the founder of R.N. Nowal Foundation and co-founder, Chairman, and Managing Director of Three Leaves India Private Limited, Shri Nowal has built a leading tea company based in Guwahati that specializes in blending, packaging, and marketing premium Assam tea at affordable prices. The company pioneered poly-laminated packaging in the tea industry, showcasing his innovative approach to business.
              </p>
              
              <p>
                What truly distinguishes Shri Nowal is his deep-rooted connection to his birthplace and relentless service to rural communities. For nearly two decades, through his foundation, he has championed diverse causes including education, healthcare, environmental conservation, water harvesting, disaster relief, and the promotion of traditional Indian medicine systems.
              </p>
              
              <div className="bg-green-100 border-l-4 border-green-600 p-4 my-4">
                <p className="text-green-800 italic">
                  His humanitarian efforts during the COVID-19 pandemic, where he personally provided medicine, food, financial support, and medical assistance to hundreds of families without seeking recognition, exemplifies his selfless nature.
                </p>
              </div>
              
              <p>
                Shri Nowal's most ambitious project is the Nowal NatureCare in Gadri (Badhal), near the revered Khatu Shyam Temple. This revolutionary initiative combines extra luxury hospitality with traditional Indian healing systems, offering natural therapy, yoga, Ayurveda, and holistic wellness solutions. The resort serves dual purposes; providing world-class facilities for premium guests while offering free healthcare services to underprivileged rural populations.
              </p>
              
              <p>
                His future vision includes establishing 'Sant Niwas' and 'Gurukul Parisar' to preserve indigenous cattle breeds, promote organic farming, and provide value-based education rooted in Indian spiritual traditions. Shri Nowal embodies the perfect synthesis of business acumen, social responsibility, and cultural preservation, making him a true nation-builder and a respectable personality in his neighboring villages for his yeoman service to the community at large.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;