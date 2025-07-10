import React from 'react';

function Heading({ 
    level = 2, 
    children, 
    gradient = true, 
    className = '',
    align = 'center',
    animate = true 
}) {
    const Tag = `h${level}`;
    
    const sizes = {
        1: 'text-5xl md:text-6xl lg:text-7xl',
        2: 'text-4xl md:text-5xl lg:text-6xl',
        3: 'text-3xl md:text-4xl',
        4: 'text-2xl md:text-3xl',
        5: 'text-xl md:text-2xl',
        6: 'text-lg md:text-xl'
    };
    
    const alignments = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
    };

    return (
        <Tag 
            className={`
                font-bold
                ${sizes[level]}
                ${alignments[align]}
                ${gradient ? 'bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent' : 'text-white'}
                ${animate ? 'animate-fadeInUp' : ''}
                mb-6
                ${className}
            `}
        >
            {children}
        </Tag>
    );
}

export default Heading;