// // src/components/StructuredData.jsx
// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const StructuredData = ({ type, data }) => {
//   const getStructuredData = () => {
//     switch (type) {
//       case 'LocalBusiness':
//         return {
//           "@context": "https://schema.org",
//           "@type": "HealthAndBeautyBusiness",
//           "name": "Nowal NatureCare",
//           "description": "Luxury wellness retreat offering naturopathy, Ayurveda, yoga, and holistic healing in Jaipur, Rajasthan.",
//           "image": "https://www.nowalnaturecare.com/logo192.png",
//           "url": "https://www.nowalnaturecare.com",
//           "telephone": "+91-9251582672",
//           "address": {
//             "@type": "PostalAddress",
//             "streetAddress": "Near Jaipur",
//             "addressLocality": "Jaipur",
//             "addressRegion": "Rajasthan",
//             "addressCountry": "IN"
//           },
//           "geo": {
//             "@type": "GeoCoordinates",
//             "latitude": "26.9124",
//             "longitude": "75.7873"
//           },
//           "openingHoursSpecification": {
//             "@type": "OpeningHoursSpecification",
//             "dayOfWeek": [
//               "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
//             ],
//             "opens": "00:00",
//             "closes": "23:59"
//           },
//           "sameAs": [
//             "https://www.facebook.com/nowalnaturecare",
//             "https://www.instagram.com/nowalnaturecare"
//           ],
//           "priceRange": "₹₹₹"
//         };
      
//       case 'Product':
//         return {
//           "@context": "https://schema.org",
//           "@type": "Product",
//           "name": data.name,
//           "description": data.description,
//           "offers": {
//             "@type": "Offer",
//             "priceCurrency": "INR",
//             "price": data.price,
//             "availability": "https://schema.org/InStock"
//           }
//         };
      
//       case 'Article':
//         return {
//           "@context": "https://schema.org",
//           "@type": "Article",
//           "headline": data.headline,
//           "description": data.description,
//           "author": {
//             "@type": "Organization",
//             "name": "Nowal NatureCare"
//           },
//           "publisher": {
//             "@type": "Organization",
//             "name": "Nowal NatureCare",
//             "logo": {
//               "@type": "ImageObject",
//               "url": "https://www.nowalnaturecare.com/logo192.png"
//             }
//           },
//           "datePublished": data.datePublished,
//           "dateModified": data.dateModified
//         };
      
//       default:
//         return {};
//     }
//   };

//   const structuredData = getStructuredData();

//   return (
//     <Helmet>
//       <script type="application/ld+json">
//         {JSON.stringify(structuredData)}
//       </script>
//     </Helmet>
//   );
// };

// export default StructuredData;




// src/components/StructuredData.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'LocalBusiness' | 'Product' | 'Article';
  data?: {
    name?: string;
    description?: string;
    price?: string;
    headline?: string;
    datePublished?: string;
    dateModified?: string;
  };
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data = {} }) => {
  const getStructuredData = () => {
    switch (type) {
      case 'LocalBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "name": "Nowal NatureCare",
          "description": "Luxury wellness retreat offering naturopathy, Ayurveda, yoga, and holistic healing in Jaipur, Rajasthan.",
          "image": "https://www.nowalnaturecare.com/logo192.png",
          "url": "https://www.nowalnaturecare.com",
          "telephone": "+91-9251582672",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Near Jaipur",
            "addressLocality": "Jaipur",
            "addressRegion": "Rajasthan",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "26.9124",
            "longitude": "75.7873"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/nowalnaturecare",
            "https://www.instagram.com/nowalnaturecare"
          ],
          "priceRange": "₹₹₹"
        };
      
      case 'Product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name || "Wellness Package",
          "description": data.description || "Holistic healing package",
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "price": data.price || "0",
            "availability": "https://schema.org/InStock"
          }
        };
      
      case 'Article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.headline || "Wellness Article",
          "description": data.description || "Read our wellness insights",
          "author": {
            "@type": "Organization",
            "name": "Nowal NatureCare"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Nowal NatureCare",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.nowalnaturecare.com/logo192.png"
            }
          },
          "datePublished": data.datePublished || new Date().toISOString(),
          "dateModified": data.dateModified || new Date().toISOString()
        };
      
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;