import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Nexalytica - Transform Your Business with Data-Driven Insights",
  description = "Nexalytica empowers businesses with advanced data analytics, custom dashboards, and strategic consulting. Transform raw data into actionable insights that drive growth and innovation.",
  keywords = "data analytics, business intelligence, dashboard solutions, data consulting, predictive analytics, data visualization, business insights, data-driven decisions",
  image = "https://nexalytica.com/og-image.png",
  url = "https://nexalytica.com",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;