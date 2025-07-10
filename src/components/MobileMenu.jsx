import React, { useEffect } from 'react';

function MobileMenu({ isOpen, onClose, navItems }) {
    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Backdrop */}
            <div 
                className={`
                    fixed inset-0 bg-black/60 backdrop-blur-sm z-40
                    transition-opacity duration-300
                    ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                onClick={onClose}
            />
            
            {/* Slide-out Menu */}
            <div className={`
                fixed top-0 right-0 h-full w-80 max-w-full
                bg-gradient-to-b from-gray-900 to-gray-950
                border-l border-gray-800
                z-50
                transform transition-transform duration-300 ease-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                    <h2 className="text-xl font-semibold text-white">Menu</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        aria-label="Close menu"
                    >
                        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Navigation Items */}
                <nav className="p-6">
                    <ul className="space-y-2">
                        {navItems.map((item, index) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={onClose}
                                    className={`
                                        block px-4 py-3 rounded-lg
                                        text-gray-300 hover:text-white
                                        hover:bg-gray-800
                                        transition-all duration-200
                                        transform hover:translate-x-1
                                        animate-slideInRight
                                    `}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                        animationFillMode: 'both'
                                    }}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <a 
                        href="#contact"
                        onClick={onClose}
                        className="
                            mt-8 w-full px-6 py-3 
                            bg-gradient-to-r from-cyan-500 to-pink-500 
                            text-white font-medium rounded-full 
                            hover:shadow-lg hover:shadow-cyan-500/25 
                            transform hover:scale-105 
                            transition-all duration-300 
                            inline-block text-center
                            animate-fadeInUp
                        "
                        style={{
                            animationDelay: '300ms',
                            animationFillMode: 'both'
                        }}
                    >
                        Get Started
                    </a>
                </nav>
            </div>
        </>
    );
}

export default MobileMenu;