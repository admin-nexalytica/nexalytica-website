import React, { useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const galleryImages = [
        { src: "./image1.jpeg", alt: "Gallery Image 1", title: "Innovation" },
        { src: "./image6.jpeg", alt: "Gallery Image 2", title: "Technology" },
        { src: "./image5.jpeg", alt: "Gallery Image 3", title: "Analytics" },
        { src: "./image4.jpeg", alt: "Gallery Image 4", title: "Solutions" },
        { src: "./image2.jpeg", alt: "Gallery Image 5", title: "Data Science" },
        { src: "./image3.jpeg", alt: "Gallery Image 6", title: "AI Integration" },
    ];

    return (
        <>
            <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
                <div className="max-w-7xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
                            Our Gallery
                        </h2>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                            Explore our journey through innovation and technology
                        </p>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-500 cursor-pointer"
                                onClick={() => setSelectedImage(image)}
                            >
                                {/* Image Container */}
                                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.alt}
                                        effect="blur"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        threshold={100}
                                    />
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            {image.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            Click to view
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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