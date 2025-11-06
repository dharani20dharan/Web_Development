import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

const Timer = () => {
  const [time, setTime] = useState(0); // time in seconds
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState('');
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);

  const handleStart = () => {
    if (inputMinutes && !isActive) {
      setTime(parseInt(inputMinutes, 10) * 60);
      setIsActive(true);
    }
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsActive(false);
    setTime(0);
    setInputMinutes('');
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="timer-container">
      <h2>⏱ Timer</h2>
      <div className="input-section">
        <input
          type="number"
          placeholder="Enter minutes"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          disabled={isActive}
        />
        <button onClick={handleStart} disabled={isActive}>Start</button>
        <button onClick={handlePause} disabled={!isActive}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <h3>{formatTime(time)}</h3>
    </div>
  );
};

export default Timer;
