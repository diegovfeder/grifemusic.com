import React, { useState, useEffect } from 'react';

const Spotify = ({ spotifyUri, containerWidth, containerHeight }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <iframe
      style={{ 'borderRadius': '12px' }}
      title="SpotifyFrame"
      src={spotifyUri}
      width={windowWidth - 80}
      height={windowHeight - 320}
      frameBorder="0"
      allowtransparency="true"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  );
};

export default Spotify;
