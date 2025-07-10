import React, { useState, useRef, useEffect } from 'react';

function MobileGallery({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const containerRef = useRef(null);

    // Handle touch events for swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && activeIndex < images.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
        if (isRightSwipe && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Image Carousel */}
            <div 
                ref={containerRef}
                className="relative aspect-video"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div 
                    className="flex transition-transform duration-300 ease-out h-full"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-full flex-shrink-0">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <h3 className="text-lg font-semibold text-white">{image.title}</h3>
                                {image.description && (
                                    <p className="text-sm text-gray-200 mt-1">{image.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`
                            w-2 h-2 rounded-full transition-all duration-300
                            ${activeIndex === index 
                                ? 'w-6 bg-cyan-400' 
                                : 'bg-gray-400/50 hover:bg-gray-400'
                            }
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Navigation Arrows (for larger touch devices) */}
            {activeIndex > 0 && (
                <button
                    onClick={() => setActiveIndex(activeIndex - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
            )}
            
            {activeIndex < images.length - 1 && (
                <button
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default MobileGallery;