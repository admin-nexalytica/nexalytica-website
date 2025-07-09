import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  width,
  height,
  sizes = '100vw',
  loading = 'lazy'
}) => {
  // Generate srcSet for responsive images
  const generateSrcSet = (imageSrc) => {
    const baseName = imageSrc.substring(0, imageSrc.lastIndexOf('.'));
    const extension = imageSrc.substring(imageSrc.lastIndexOf('.'));
    
    // Define responsive sizes
    const responsiveSizes = [400, 800, 1200, 1600];
    
    return responsiveSizes
      .map(size => `${baseName}-${size}w${extension} ${size}w`)
      .join(', ');
  };

  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      effect="blur"
      threshold={100}
      placeholderSrc={`${src}?w=50&blur=10`}
      loading={loading}
      sizes={sizes}
      srcSet={generateSrcSet(src)}
    />
  );
};

export default OptimizedImage;