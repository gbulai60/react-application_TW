import React, {useState} from "react";
import PersonLayout from "./PersonLayout";
import "./App.css";

const App = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [buttonText, setButtonText] = useState("View Data");
    const handleButtonClick = () => {
        setShowInfo(!showInfo);
        setButtonText(showInfo ? "View Data" : "Hide Data");
    };

    return (
        <div className="container">
            <button className="button" onClick={handleButtonClick}>
                {buttonText}
            </button>
            {showInfo && <div className="spacer" />}
            {showInfo && <PersonLayout />}
        </div>
    );
};

export default App;