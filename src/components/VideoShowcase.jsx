// VideoShowcase.jsx
import React from 'react';
import './VideoShowcase.css';

function VideoShowcase() {
	return (
		<section id='video-showcase' className='video-showcase-section'>
			<h2>Watch Nexalytica in Action</h2>

			<div className='video-container'>
				{/* Using native browser controls */}
				<video width='560' height='315' controls>
					<source
						src='https://pqazc0omc0duhaei.public.blob.vercel-storage.com/nexa_video-a3ZpdVUpsm9PhkCbWJNH60VSYBUg4N.mp4'
						type='video/mp4'
					/>
					Your browser does not support the video tag.
				</video>
			</div>

			<p className='video-subtext'>
				Discover how Nexalytica’s advanced analytics can transform your
				business.
			</p>
		</section>
	);
}

export default VideoShowcase;
