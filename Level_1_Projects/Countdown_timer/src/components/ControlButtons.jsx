import React from "react";

const ControlButtons = ({ onStart, onPause, onReset, isRunning }) => (
  <div className="controls">
    <button onClick={onStart} disabled={isRunning}>Start</button>
    <button onClick={onPause} disabled={!isRunning}>Pause</button>
    <button onClick={onReset}>Reset</button>
  </div>
);

export default ControlButtons;
