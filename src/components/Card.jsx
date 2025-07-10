import React from 'react';

function Card({ 
    children, 
    className = '', 
    hover = true, 
    glow = false,
    animate = true,
    delay = 0 
}) {
    return (
        <div 
            className={`
                relative
                bg-gradient-to-br from-gray-900/80 to-gray-800/80
                backdrop-blur-md
                border border-gray-700/50
                rounded-xl
                p-4 sm:p-6
                transition-all duration-300
                ${hover ? 'hover:transform hover:-translate-y-1 hover:shadow-xl hover:border-cyan-500/50' : ''}
                ${glow ? 'hover:shadow-cyan-500/20' : ''}
                ${animate ? 'animate-fadeInUp' : ''}
                ${className}
            `}
            style={{
                animationDelay: `${delay}ms`,
                animationFillMode: 'both'
            }}
        >
            {/* Gradient border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            {children}
        </div>
    );
}

export default Card;