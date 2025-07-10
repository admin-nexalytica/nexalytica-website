import React, { useState, useEffect } from "react";

function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        // Preload optimized hero image
        const img = new Image();
        img.src = '/optimized/hero-bg1-1600w.webp';
        img.onload = () => setIsLoaded(true);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-[80vh] flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Optimized background with loading state */}
            <div className="absolute inset-0 -z-10">
                {/* Placeholder blur while loading */}
                <div 
                    className={`absolute inset-0 bg-gradient-to-br from-[#1B0530] to-[#3D0140] transition-opacity duration-1000 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
                
                {/* Responsive picture element */}
                <picture className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <source
                        type="image/webp"
                        srcSet="
                            /optimized/hero-bg1-400w.webp 400w,
                            /optimized/hero-bg1-800w.webp 800w,
                            /optimized/hero-bg1-1200w.webp 1200w,
                            /optimized/hero-bg1-1600w.webp 1600w
                        "
                        sizes="100vw"
                    />
                    <img
                        src="/optimized/hero-bg1-1200w.jpg"
                        alt="Hero background"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                    />
                </picture>
                
                {/* Gradient overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
            </div>
            
            {/* Hero content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                    Smarter Business Decision  In Minutes
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E6FF] to-[#FF40A0] mt-2">
                       
                    </span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                    Transforming data into insights with AI-powered analytics
                </p>
                
                <div className="flex justify-center animate-fade-in-up animation-delay-400">
                    <a 
                        href="#about" 
                        className="px-10 py-4 bg-gradient-to-r from-[#00E6FF] to-[#FF40A0] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#00E6FF]/50 transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
                    >
                        Learn More
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    );
}

export default Hero;
