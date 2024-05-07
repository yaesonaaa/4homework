import React, { useState, useEffect } from 'react';

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='withhooks'>
      <h3>Window Size</h3>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
    </div>
  );
};

export default WindowSize;
