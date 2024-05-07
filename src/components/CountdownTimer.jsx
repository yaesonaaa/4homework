import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setTimer(10);
    setRunning(false);
  };

  return (
    <div className='withhooks'>
      <h3>Countdown: {timer}</h3>
      {!running && (
        <button onClick={handleStart}>Start</button>
      )}
      {running && (

      <button onClick={handleReset}>Reset</button>
      )}
    </div>
  );
};

export default CountdownTimer;
