// VideoShowcase.jsx
import React from "react";

function VideoShowcase() {
	return (
		<section
			id="video-showcase"
			className="
        py-14
        px-5
        text-center
        bg-gradient-to-r
        from-[#0078FF]
        to-[#0A0F1F]
      "
		>
			<h2
				className="
          text-2xl
          mb-4
          text-[#00E6FF]
        "
			>
				Watch Nexalytica in Action
			</h2>

			<div
				className="
          mt-8
          inline-block
          relative
        "
			>
				{/* Using native browser controls */}
				<video
					width="560"
					height="315"
					controls
					className="
            w-full
            max-w-[560px]
            h-auto
            border-2
            border-[rgba(108,31,96,0.4)]
            shadow-[0_0_15px_rgba(108,31,96,0.4)]
          "
				>
					<source
						src="https://pqazc0omc0duhaei.public.blob.vercel-storage.com/nexa_video-a3ZpdVUpsm9PhkCbWJNH60VSYBUg4N.mp4"
						type="video/mp4"
					/>
					Your browser does not support the video tag.
				</video>
			</div>

			<p
				className="
          text-[rgba(234,234,234,0.85)]
          max-w-[560px]
          mx-auto
          mt-4
          text-sm
          leading-relaxed
        "
			>
				Discover how Nexalytica’s advanced analytics can transform your business.
			</p>
		</section>
	);
}

export default VideoShowcase;
