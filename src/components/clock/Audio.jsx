import React, { useEffect, useRef } from 'react';

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <audio ref={audioRef} controls loop className='hidden'>
      <source src={src} type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;