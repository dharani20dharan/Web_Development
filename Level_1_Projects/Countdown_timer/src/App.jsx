import React, { useState, useEffect } from "react";
import TimeSetter from "./components/TimeSetter";
import TimerDisplay from "./components/TimerDisplay";
import ControlButtons from "./components/ControlButtons";
import "./App.css";

const App = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  const handleTimeChange = (m, s) => {
    setMinutes(m);
    setSeconds(s);
    setTimeLeft(m * 60 + s);
  };

  const handleStart = () => {
    if (timeLeft > 0) setIsRunning(true);
  };

  const handlePause = () => setIsRunning(false);

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(minutes * 60 + seconds);
  };

  const formatTime = () => {
    const min = Math.floor(timeLeft / 60);
    const sec = timeLeft % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="container">
      <h1>Countdown Timer</h1>
      <TimeSetter minutes={minutes} seconds={seconds} onTimeChange={handleTimeChange} />
      <TimerDisplay timeLeft={formatTime()} />
      <ControlButtons
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        isRunning={isRunning}
      />
    </div>
  );
};

export default App;
