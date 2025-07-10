import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import './styles/animations.css';
import { addPassiveEventListeners, optimizeScroll, throttle } from './utils/performanceOptimizations';

// Critical components loaded immediately
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BottomNav from './components/BottomNav';
import { SectionSkeleton } from './components/LazySection';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const ProductsServices = lazy(() => import('./components/ProductsServices'));
const KPISection = lazy(() => import('./components/KPISection'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));
const VideoShowcase = lazy(() => import('./components/VideoShowcase'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

// Performance monitoring in development
const PerformanceMonitor = lazy(() => 
  process.env.NODE_ENV === 'development' 
    ? import('./components/PerformanceMonitor') 
    : Promise.resolve({ default: () => null })
);

function App() {
  useEffect(() => {
    // Optimize scroll performance
    const handleScroll = throttle(optimizeScroll(), 100);
    const passiveOptions = addPassiveEventListeners();
    
    window.addEventListener('scroll', handleScroll, passiveOptions);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='App'>
      {/* Critical above-the-fold content */}
      <Navbar />
      <Hero />
      
      {/* Lazy loaded sections with suspense boundaries */}
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <ProductsServices />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <KPISection />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Gallery />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Blog />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <VideoShowcase />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Location />
      </Suspense>
      
      <Suspense fallback={<div className="h-64" />}>
        <Footer />
      </Suspense>
      
      <BottomNav />
      
      {/* Performance monitoring */}
      <Suspense fallback={null}>
        <PerformanceMonitor />
      </Suspense>
    </div>
  );
}

export default App;