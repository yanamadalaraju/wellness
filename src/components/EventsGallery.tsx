// import React from 'react';
// import { Link } from 'react-router-dom';

// const SectionGallery = () => {
//   const items = [
//     {
//       title: "Wellness",
//       image: "https://www.nimba.in/wp-content/uploads/2021/01/Wellness-Main-Image-min.jpg",
//       link: "/gallery-wellness" // Added link property Amenties-wellness
//     },
//     {
//       title: "Amenities",
//       image: "https://www.nimba.in/wp-content/uploads/2020/10/Swimming-Pool.jpg"
      
//     },
//     {
//       title: "Media & Events",
//       image: "https://www.nimba.in/wp-content/uploads/2020/10/TAFI-1.jpg"
//     },
//     {
//       title: "Living Space",
//       image: "https://www.nimba.in/wp-content/uploads/2022/07/thumbgallery.jpg"
//     }
//   ];

//   return (
//     <section className="bg-[#f5f6f0] py-16 px-4">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
//         {items.map((item, index) => (
//           <div key={index} className="transition-transform transform hover:scale-105">
//             {item.link ? (
//               <Link to={item.link}>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-56 object-cover rounded shadow-lg cursor-pointer"
//                 />
//                 <h3 className="mt-4 text-xl font-medium text-gray-800">{item.title}</h3>
//               </Link>
//             ) : (
//               <>
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-56 object-cover rounded shadow-lg"
//                 />
//                 <h3 className="mt-4 text-xl font-medium text-gray-800">{item.title}</h3>
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default SectionGallery;



import React from 'react';
import { Link } from 'react-router-dom';

interface GalleryItem {
  title: string;
  image: string;
  link?: string;
}

const EventsGallery: React.FC = () => {
  const items: GalleryItem[] = [
    {
      title: "Environment Day Plantation Initiative 2025",
      image: "https://www.nimba.in/wp-content/uploads/2021/01/Wellness-Main-Image-min.jpg",
      link: "/EventsGallerySet"
    },
    {
      title: "International Day of Yoga 2024",
      image: "https://www.nimba.in/wp-content/uploads/2020/10/Swimming-Pool.jpg",
      link: "/amenities-wellness"
    },
    // {
    //   title: "Media & Events",
    //   image: "https://www.nimba.in/wp-content/uploads/2020/10/TAFI-1.jpg",
    //   link: "/Media-wellness"
    // },
    // {
    //   title: "Living Space",
    //   image: "https://www.nimba.in/wp-content/uploads/2022/07/thumbgallery.jpg",
    //   link: "/Living-wellness"
    // }
  ];

  return (
    <section className="bg-[#f5f6f0] py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="group transition-all duration-300 hover:scale-105"
          >
            <Link 
              to={item.link || '#'} 
              className="block"
              state={{ scrollPosition: window.pageYOffset }}
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-800 group-hover:text-sage-600 transition-colors">
                {item.title}
              </h3>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;