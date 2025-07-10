import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function Section({ 
    children, 
    id,
    className = '', 
    gradient = 'primary',
    pattern = false 
}) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    
    const gradients = {
        primary: 'from-gray-900 to-purple-900/50',
        secondary: 'from-purple-900/50 to-pink-900/30',
        dark: 'from-gray-950 to-gray-900',
        light: 'from-gray-800 to-gray-900'
    };

    return (
        <section 
            ref={ref}
            id={id}
            className={`
                relative
                py-20 px-6
                bg-gradient-to-br ${gradients[gradient]}
                overflow-hidden
                ${isVisible ? 'opacity-100' : 'opacity-0'}
                transition-opacity duration-1000
                ${className}
            `}
        >
            {/* Background pattern */}
            {pattern && (
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300E6FF' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
            )}
            
            <div className="relative z-10 max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
}

export default Section;