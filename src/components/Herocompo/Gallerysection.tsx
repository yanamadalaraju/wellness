import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import image5 from "../../assets/wellness.jpg";
import image6 from "../../assets/303.jpg";
import image7 from "../../assets/3d2-1.jpg";
import image8 from "../../assets/Dormitory .jpg";
import { motion } from 'framer-motion';
import { Sprout } from 'lucide-react';

const GallerySection = () => {
  const navigate = useNavigate();

  const galleryItems = [
    { 
      title: 'Nowal', 
      image: image5,
      path: '/gallery-wellness'
    },
    { 
      title: 'Amenities', 
      image: image6,
      path: '/Amenities-wellness'
    },
    { 
      title: 'Media & Events', 
      image: image7,
      path: '/Media-wellness'
    },
    { 
      title: 'Living Space', 
      image: image8,
      path: '/Living-wellness'
    },
  ];

  const handleGalleryClick = (path) => {
    navigate(path);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f0f5f1] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <div className="flex justify-center items-center">
            <div className="w-16 h-1 bg-[#4a7d52] mr-3"></div>
            <Sprout className="text-[#3E5F44] w-6 h-6" />
            <div className="w-16 h-1 bg-[#4a7d52] ml-3"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-64"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleGalleryClick(item.path)}
                  className="bg-[#3E5F44] hover:bg-[#2E4A34] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all"
                >
                  {item.title} <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;