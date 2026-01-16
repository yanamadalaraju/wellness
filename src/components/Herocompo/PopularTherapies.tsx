import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assuming you have these images imported
import image2 from '../../assets/mudtherapy.jpg';
import image3 from '../../assets/hydrotherap.jpg';
import image4 from '../../assets/massage.jpg';
import image55 from '../../assets/physiotherapy.jpg';

const PopularTherapies = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-[#DDF4E7]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
            Popular Therapies
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
            <HeartPulse className="text-[#3E5F44] w-6 h-6" />
            <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              title: "Mud Therapy", 
              image: image2,
              link: "/narutopathy?therapy=mud-pack"
            },
            { 
              title: "Hydro Therapy", 
              image: image3,
              link: "/narutopathy?therapy=colon-hydrotherapy"
            },
            { 
              title: "Massage Therapy", 
              image: image4,
              link: "/narutopathy?therapy=hands-on-therapy"
            },
            { 
              title: "Physiotherapy", 
              image: image55,
              link: "/physiotheraphy" // Redirects to Hands-on Therapy tab
            },
          ].map((therapy, index) => (
            <Link 
              to={therapy.link} 
              key={index}
              className="block no-underline"
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group flex flex-col h-full cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={therapy.image} 
                    alt={therapy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{therapy.title}</h3>
         
                  <div className="mt-2 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm text-[#4a7d52] font-medium">Click to learn more</span>
                    <svg className="w-4 h-4 ml-1 text-[#4a7d52]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTherapies;