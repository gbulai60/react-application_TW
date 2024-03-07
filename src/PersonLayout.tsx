import React from "react";
import { observer } from "mobx-react";
import data from "./PersonData";

const PersonLayout: React.FC = observer(() => {
    return (
        <div>
            <div>
                <h2>Personal info</h2>
                <p>Name: {data.name}</p>
                <p>Age: {data.age}</p>
            </div>
        </div>
    );
});

export default PersonLayout;