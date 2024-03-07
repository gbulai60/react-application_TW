import React, { useState } from "react";
import PersonLayout from "./PersonLayout";

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [buttonText] = useState("Click the button to view personal info");

  const handleButtonClick = () => {
    setShowInfo(!showInfo);

  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>{buttonText}</h2>
        <button onClick={handleButtonClick}>View Data</button>
        {showInfo && <PersonLayout />}
      </div>
  );
};

export default App;