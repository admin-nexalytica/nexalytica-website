import React, { useState, useEffect } from 'react';

function OptimizedImage({ 
    src, 
    alt, 
    className = '', 
    sizes = '100vw',
    loading = 'lazy',
    placeholder = null,
    onLoad = () => {}
}) {
    const [imageSrc, setImageSrc] = useState(placeholder || generatePlaceholder());
    const [imageLoading, setImageLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Preload image
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
            setImageLoading(false);
            onLoad();
        };
        img.onerror = () => {
            setError(true);
            setImageLoading(false);
        };
    }, [src, onLoad]);

    // Generate a simple gradient placeholder
    function generatePlaceholder() {
        return 'data:image/svg+xml;base64,' + btoa(
            `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="100" height="100" fill="url(#g)"/>
            </svg>`
        );
    }

    if (error) {
        return (
            <div className={`bg-gray-800 flex items-center justify-center ${className}`}>
                <span className="text-gray-600">Failed to load image</span>
            </div>
        );
    }

    return (
        <div className="relative overflow-hidden">
            <img
                src={imageSrc}
                alt={alt}
                className={`
                    transition-all duration-700
                    ${imageLoading ? 'blur-lg scale-110' : 'blur-0 scale-100'}
                    ${className}
                `}
                loading={loading}
                sizes={sizes}
            />
            {imageLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 animate-pulse" />
            )}
        </div>
    );
}

export default OptimizedImage;