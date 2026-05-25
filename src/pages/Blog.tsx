
import React from "react";
import { motion } from "framer-motion";
import BlogCards from "../components/BlogCards";
import SEO from '../components/SEO';
import seoData from '../config/seoData';
import CoupleRetreatBlogPage from "../components/CoupleRetreatBlogPage";

export default function BlogPage() {
  return (
    <>
    <SEO 
        title={seoData.blog.title}
        description={seoData.blog.description}
        keywords={seoData.blog.keywords}
        canonicalUrl={seoData.blog.canonicalUrl}
        ogType="article"
      />
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
     <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-emerald-700 to-teal-600 text-white">
  {/* Background Image with Overlay */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{ 
      backgroundImage: 'url("https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' 
      
    }}
  />
  
  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-black/40" />
  
  {/* Gradient overlay on top of image */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/70 to-teal-800/60" />
  
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center max-w-3xl px-4"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-6">
      Nowal Nature Care Blog
    </h1>
    <p className="text-lg md:text-xl leading-relaxed">
      Insights, therapies, and natural wellness wisdom to help you
      reconnect with nature and restore balance in mind, body, and soul.
    </p>
  </motion.div>
</section>

      {/* Blog Content Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#E6F7EF]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 mb-4">
              Healing Through Nature
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At Nowal Nature Care, we believe that nature itself is the greatest
              healer. Our blog shares knowledge, experiences, and holistic
              approaches rooted in naturopathy and traditional wellness
              practices.
            </p>
          </motion.div>

       
            <BlogCards />
            
            {/* Blog Card 1 */}
           {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src="https://i.pinimg.com/736x/92/0e/04/920e04a658b79a2f734039e34729df90.jpg"
                alt="Mud Therapy"
                className="w-full h-52 object-cover"
              /> 
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                  The Power of Mud Therapy
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Mud therapy is one of the most effective naturopathic
                  treatments, rich in minerals that detoxify the body, improve
                  circulation, and promote deep relaxation.
                </p>
             
              </div>
            </motion.div> */}

            {/* Blog Card 2 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src="https://i.pinimg.com/1200x/30/9b/85/309b85d1be1f6238568d5a27ed1dd48a.jpg"
                alt="Hydro Therapy"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                  Hydro Therapy for Complete Detox
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Water has powerful healing properties. Hydro therapy helps
                  cleanse toxins, boost immunity, and rejuvenate the nervous
                  system naturally.
                </p>
              
              </div>
            </motion.div> */}

            {/* Blog Card 3 */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src="https://i.pinimg.com/736x/6d/7c/ef/6d7cefb13762764a9f788441bd389f7a.jpg"
                alt="Yoga and Meditation"
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-emerald-700 mb-3">
                  Yoga & Meditation for Inner Balance
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Yoga and meditation calm the mind, strengthen the body, and
                  enhance emotional wellbeing, forming the foundation of
                  holistic healing.
                </p>
              
              </div>
            </motion.div> */}
         
        </div>


        <CoupleRetreatBlogPage />
      </section>
    </div>
    </>
  );
}
