import React, { useState, useEffect } from "react";
import Section from './Section';
import Heading from './Heading';
import GalleryCard from './GalleryCard';
import MobileGallery from './MobileGallery';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    const galleryImages = [
        { 
            src: "./image1.jpeg", 
            alt: "Gallery Image 1", 
            title: "Innovation",
            description: "Pioneering the future of data analytics with cutting-edge technology"
        },
        { 
            src: "./image6.jpeg", 
            alt: "Gallery Image 2", 
            title: "Technology",
            description: "State-of-the-art infrastructure powering intelligent insights"
        },
        { 
            src: "./image5.jpeg", 
            alt: "Gallery Image 3", 
            title: "Analytics",
            description: "Transform raw data into actionable business intelligence"
        },
        { 
            src: "./image4.jpeg", 
            alt: "Gallery Image 4", 
            title: "Solutions",
            description: "Tailored solutions for every business challenge"
        },
        { 
            src: "./image2.jpeg", 
            alt: "Gallery Image 5", 
            title: "Data Science",
            description: "Advanced algorithms meeting real-world applications"
        },
        { 
            src: "./image3.jpeg", 
            alt: "Gallery Image 6", 
            title: "AI Integration",
            description: "Seamlessly blend AI into your existing workflows"
        },
    ];

    return (
        <>
            <Section id="gallery" gradient="dark" pattern>
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Heading level={2}>
                        Our Gallery
                    </Heading>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '200ms' }}>
                        Explore our journey through innovation and technology
                    </p>
                </div>

                {/* Gallery - Mobile Carousel vs Desktop Grid */}
                {isMobile ? (
                    <MobileGallery images={galleryImages} />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image, index) => (
                            <div key={index} onClick={() => setSelectedImage(image)}>
                                <GalleryCard 
                                    image={image.src}
                                    title={image.title}
                                    description={image.description}
                                    delay={index * 100}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </Section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full">
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt}
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Gallery;