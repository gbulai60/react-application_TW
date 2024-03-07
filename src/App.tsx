import React, { useState } from "react";
import PersonLayout from "./PersonLayout";

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const handleButtonClick = () => {
    setShowInfo(!showInfo);

  };

  return (
      <div style={{ textAlign: "center"}}>
        <button onClick={handleButtonClick}>View Data</button>
        {showInfo && <PersonLayout />}
      </div>
  );
};

export default App;