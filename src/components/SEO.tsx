// // src/components/SEO.jsx
// import React from 'react';
// import { Helmet } from 'react-helmet-async';

// const SEO = ({ 
//   title, 
//   description, 
//   canonicalUrl,
//   keywords = [],
//   ogImage = "/logo192.png",
//   ogType = "website"
// }) => {
//   const siteTitle = "Nowal NatureCare";
//   const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
//   const defaultKeywords = "wellness retreat, naturopathy, ayurveda, yoga, holistic healing, spa resort, Jaipur, Rajasthan";
//   const allKeywords = keywords.length > 0 ? `${keywords.join(', ')}, ${defaultKeywords}` : defaultKeywords;

//   return (
//     <Helmet>
//       <title>{fullTitle}</title>
//       <meta name="description" content={description} />
//       <meta name="keywords" content={allKeywords} />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
//       <meta name="language" content="English" />
//       <meta name="revisit-after" content="7 days" />
//       <meta name="robots" content="index, follow" />
      
//       {/* Open Graph / Social Media */}
//       <meta property="og:title" content={fullTitle} />
//       <meta property="og:description" content={description} />
//       <meta property="og:type" content={ogType} />
//       <meta property="og:image" content={ogImage} />
//       <meta property="og:url" content={canonicalUrl} />
//       <meta property="og:site_name" content={siteTitle} />
      
//       {/* Twitter Card */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={fullTitle} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={ogImage} />
      
//       {/* Canonical URL */}
//       {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
//       {/* Geo Tags for Local SEO */}
//       <meta name="geo.region" content="IN-RJ" />
//       <meta name="geo.placename" content="Jaipur" />
//       <meta name="geo.position" content="26.9124;75.7873" />
//       <meta name="ICBM" content="26.9124, 75.7873" />
//     </Helmet>
//   );
// };

// export default SEO;




// src/components/SEO.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

// Add proper TypeScript interface
interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonicalUrl,
  keywords = [], // Provide default empty array
  ogImage = "/logo192.png",
  ogType = "website"
}) => {
  const siteTitle = "Nowal NatureCare";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultKeywords = "wellness retreat, naturopathy, ayurveda, yoga, holistic healing, spa resort, Jaipur, Rajasthan";
  // Convert keywords array to string safely
  const keywordsString = keywords.length > 0 ? `${keywords.join(', ')}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Social Media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Geo Tags for Local SEO */}
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Jaipur" />
      <meta name="geo.position" content="26.9124;75.7873" />
      <meta name="ICBM" content="26.9124, 75.7873" />
    </Helmet>
  );
};

export default SEO;