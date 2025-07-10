import React, { Suspense, lazy } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

function LazySection({ componentPath, fallback, ...props }) {
    const [ref, isIntersecting] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '50px'
    });

    const Component = isIntersecting ? lazy(() => import(componentPath)) : null;

    return (
        <div ref={ref}>
            {isIntersecting ? (
                <Suspense fallback={fallback || <SectionSkeleton />}>
                    <Component {...props} />
                </Suspense>
            ) : (
                fallback || <SectionSkeleton />
            )}
        </div>
    );
}

// Skeleton loader for sections
export function SectionSkeleton() {
    return (
        <div className="py-20 px-4 animate-pulse">
            <div className="max-w-7xl mx-auto">
                <div className="h-12 bg-gray-800 rounded-lg w-1/3 mx-auto mb-8"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 bg-gray-800 rounded-lg"></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default LazySection;