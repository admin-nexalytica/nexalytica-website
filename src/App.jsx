import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductsServices from './components/ProductsServices';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
/*import ScheduleBanner from "./components/ScheduleBanner";*/
import VideoShowcase from './components/VideoShowcase';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<h1 class='flex items-center text-5xl font-extrabold dark:text-white'>
				Flowbite
				<span class='bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-2'>
					PRO
				</span>
			</h1>

			<Navbar />
			<Hero />
			<About />
			<ProductsServices />
			<Gallery />
			<Blog />
			{/*<Team />*/}
			{/*<ScheduleBanner />*/}
			<VideoShowcase />
			<FAQ />
			<Contact />
			<Location />
			<Footer />
		</div>
	);
}

export default App;
