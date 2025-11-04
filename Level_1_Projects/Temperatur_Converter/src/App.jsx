import React, { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControls from "./components/TemperatureControls";
import UnitToggle from "./components/UnitToggle";
import "./App.css";

const App = () => {
  const [temperature, setTemperature] = useState(25);
  const [unit, setUnit] = useState("C");

  const handleIncrease = () => setTemperature(prev => prev + 1);
  const handleDecrease = () => setTemperature(prev => prev - 1);

  const handleToggleUnit = () => {
    if (unit === "C") {
      setTemperature(((temperature * 9) / 5 + 32).toFixed(1));
      setUnit("F");
    } else {
      setTemperature((((temperature - 32) * 5) / 9).toFixed(1));
      setUnit("C");
    }
  };

  return (
    <div className="container">
      <h1>Temperature Converter</h1>
      <TemperatureDisplay temperature={temperature} unit={unit} />
      <TemperatureControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <UnitToggle unit={unit} onToggleUnit={handleToggleUnit} />
    </div>
  );
};

export default App;
