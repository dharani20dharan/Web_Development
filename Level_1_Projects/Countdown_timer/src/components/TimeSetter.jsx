import React, { useState } from "react";

const TimeSetter = ({ minutes, seconds, onTimeChange }) => {
  const [m, setM] = useState(minutes);
  const [s, setS] = useState(seconds);

  const handleChange = () => {
    onTimeChange(Number(m), Number(s));
  };

  return (
    <div className="time-setter">
      <input
        type="number"
        value={m}
        onChange={(e) => setM(e.target.value)}
        placeholder="Min"
        min="0"
      />
      <input
        type="number"
        value={s}
        onChange={(e) => setS(e.target.value)}
        placeholder="Sec"
        min="0"
      />
      <button onClick={handleChange}>Set</button>
    </div>
  );
};

export default TimeSetter;
