import React from 'react';
import './App.css';
import './styles/animations.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductsServices from './components/ProductsServices';
import KPISection from './components/KPISection';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
/*import ScheduleBanner from "./components/ScheduleBanner";*/
import VideoShowcase from './components/VideoShowcase';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <About />
      <ProductsServices />
      <KPISection />
      <Gallery />
      <Blog />
      {/*<Team />*/}
      {/*<ScheduleBanner />*/}
      <VideoShowcase />
      <FAQ />
      <Contact />
      <Location />
      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
