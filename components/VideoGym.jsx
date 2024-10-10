// src/components/VideoEmbed.jsx

import React from "react";
import '../components/VideoGym.css'
const VideoEmbed = () => {
  return (
    <div className="video-container">
      <iframe
        width="300"
        height="300"
        src="https://www.youtube.com/embed/h4a1t3nMJXE?autoplay=1&mute=1&controls=0&loop=1&playlist=h4a1t3nMJXE&modestbranding=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
