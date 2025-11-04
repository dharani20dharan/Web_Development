import React from "react";

const TemperatureControls = ({ onIncrease, onDecrease }) => (
  <div className="controls">
    <button onClick={onDecrease}>-</button>
    <button onClick={onIncrease}>+</button>
  </div>
);

export default TemperatureControls;
