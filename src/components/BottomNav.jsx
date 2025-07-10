import React, { useState, useEffect } from 'react';

function BottomNav() {
    const [activeSection, setActiveSection] = useState('hero');
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navItems = [
        { id: 'hero', icon: '🏠', label: 'Home' },
        { id: 'about', icon: '💡', label: 'About' },
        { id: 'products-services', icon: '🚀', label: 'Services' },
        { id: 'contact', icon: '📧', label: 'Contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Hide/show based on scroll direction
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            
            setLastScrollY(currentScrollY);

            // Update active section based on scroll position
            const sections = navItems.map(item => ({
                id: item.id,
                element: document.getElementById(item.id)
            }));

            const current = sections.find(section => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (current) {
                setActiveSection(current.id);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`
            fixed bottom-0 left-0 right-0 z-40
            bg-gray-900/95 backdrop-blur-md
            border-t border-gray-800
            transform transition-transform duration-300
            safe-padding-bottom
            md:hidden
            ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}>
            <div className="flex justify-around items-center py-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`
                            flex flex-col items-center justify-center
                            p-2 rounded-lg
                            transition-all duration-200
                            ${activeSection === item.id 
                                ? 'text-cyan-400' 
                                : 'text-gray-400 hover:text-gray-300'
                            }
                        `}
                    >
                        <span className="text-xl mb-1">{item.icon}</span>
                        <span className="text-xs">{item.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default BottomNav;