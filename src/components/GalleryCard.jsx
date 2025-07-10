import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function GalleryCard({ image, title, description, delay = 0 }) {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div 
            className="relative group overflow-hidden rounded-xl cursor-pointer animate-fadeInUp"
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-800">
                <LazyLoadImage
                    src={image}
                    alt={title}
                    effect="blur"
                    className={`
                        w-full h-full object-cover
                        transition-all duration-700
                        ${isHovered ? 'scale-110' : 'scale-100'}
                        ${imageLoaded ? 'opacity-100' : 'opacity-0'}
                    `}
                    afterLoad={() => setImageLoaded(true)}
                />
                
                {/* Gradient Overlay */}
                <div className={`
                    absolute inset-0 
                    bg-gradient-to-t from-black/80 via-black/20 to-transparent
                    transition-opacity duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-60'}
                `} />
                
                {/* Shimmer Effect */}
                <div className={`
                    absolute inset-0 
                    bg-gradient-to-r from-transparent via-white/10 to-transparent
                    -translate-x-full
                    ${isHovered ? 'translate-x-full transition-transform duration-1000' : ''}
                `} />
            </div>
            
            {/* Content Overlay */}
            <div className={`
                absolute bottom-0 left-0 right-0 p-6
                transform transition-all duration-500
                ${isHovered ? 'translate-y-0' : 'translate-y-2'}
            `}>
                <h3 className="text-xl font-bold text-white mb-2">
                    {title}
                </h3>
                <p className={`
                    text-gray-200 text-sm
                    transition-all duration-500
                    ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}
                    overflow-hidden
                `}>
                    {description}
                </p>
            </div>
            
            {/* Border Glow Effect */}
            <div className={`
                absolute inset-0 rounded-xl
                transition-all duration-300
                ${isHovered ? 'shadow-lg shadow-cyan-500/30' : ''}
            `} />
        </div>
    );
}

export default GalleryCard;