import React from "react";
import { observer } from "mobx-react";
import data from "./PersonData";
import "./PersonLayout.css";


const PersonLayout: React.FC = observer(() => {
    return (
        <div className="person-layout-container" >
            <div className="person-info">
                <h2>Personal info</h2>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
                <p>Group: {data.group}</p>
            </div>
        </div>
    );
});

export default PersonLayout;