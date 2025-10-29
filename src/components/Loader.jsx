import React, { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div className="loader">
        <img src="/gifs/hour-glass.gif" alt="Loading" />
      </div>
    )
  );
};

export default Loader;