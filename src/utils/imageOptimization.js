// Image optimization utilities

export const getOptimizedImageSrc = (originalSrc, size = 1200) => {
  const baseName = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
  const extension = originalSrc.substring(originalSrc.lastIndexOf('.'));
  
  // If it's already an optimized image, return as is
  if (originalSrc.includes('/optimized/')) {
    return originalSrc;
  }
  
  // Return optimized WebP version
  return `/optimized/${baseName.replace('./', '')}-${size}w.webp`;
};

export const getImageSrcSet = (originalSrc) => {
  const baseName = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
  const sizes = [400, 800, 1200, 1600];
  
  // Generate WebP srcset
  const webpSrcSet = sizes
    .map(size => `/optimized/${baseName.replace('./', '')}-${size}w.webp ${size}w`)
    .join(', ');
    
  // Generate JPEG fallback srcset
  const jpegSrcSet = sizes
    .map(size => `/optimized/${baseName.replace('./', '')}-${size}w.jpg ${size}w`)
    .join(', ');
    
  return { webpSrcSet, jpegSrcSet };
};

export const getPlaceholderSrc = (originalSrc) => {
  const baseName = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
  return `/optimized/${baseName.replace('./', '')}-placeholder.jpg`;
};