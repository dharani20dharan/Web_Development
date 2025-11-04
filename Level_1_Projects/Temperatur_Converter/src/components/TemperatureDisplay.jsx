import React from "react";

const TemperatureDisplay = ({ temperature, unit }) => (
  <div className="temp-display">
    <h2>{temperature}°{unit}</h2>
  </div>
);

export default TemperatureDisplay;
