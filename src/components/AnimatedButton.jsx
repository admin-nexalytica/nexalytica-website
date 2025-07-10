import React from 'react';

function AnimatedButton({ children, onClick, variant = 'primary', className = '' }) {
    const variants = {
        primary: 'bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600',
        secondary: 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600',
        outline: 'bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white'
    };

    return (
        <button
            onClick={onClick}
            className={`
                relative overflow-hidden
                px-8 py-3 
                font-semibold text-white 
                rounded-full 
                transform transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25
                active:scale-95
                ${variants[variant]}
                ${className}
            `}
        >
            <span className="relative z-10">{children}</span>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -top-[2px] -left-[100%] w-[200%] h-[105%] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] hover:left-[100%] transition-all duration-1000 ease-out" />
            
            {/* Pulse rings on hover */}
            <div className="absolute inset-0 rounded-full opacity-0 hover:opacity-100">
                <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
            </div>
        </button>
    );
}

export default AnimatedButton;