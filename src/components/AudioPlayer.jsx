import React, { useEffect, useRef } from 'react';
import './AudioPlayer.css';

const AudioPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {
          // If still fails, ignore
        });
      }
      // Remove listener after first play
      document.removeEventListener('click', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <article id="audio">
      <audio ref={audioRef} loop style={{ display: 'none' }}>
        <source src="sonidos/sonido.mp3" type="audio/mp3" />
        <source src="sonidos/sonido.ogg" type="audio/ogg" />
        <source src="sonidos/sonido.wav" type="audio/wav" />
      </audio>
    </article>
  );
};

export default AudioPlayer;