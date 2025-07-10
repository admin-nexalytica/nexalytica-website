import React, { useEffect, useState } from 'react';

function ParallaxSection({ children, speed = 0.5, className = '' }) {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div 
            className={`relative ${className}`}
            style={{
                transform: `translateY(${offsetY * speed}px)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
            {children}
        </div>
    );
}

export default ParallaxSection;