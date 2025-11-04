import React from "react";

const UnitToggle = ({ unit, onToggleUnit }) => (
  <div className="toggle">
    <button onClick={onToggleUnit}>
      Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
    </button>
  </div>
);

export default UnitToggle;
