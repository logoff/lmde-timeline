import React from "react";
import "./styles.css";
import { Chrono } from "react-chrono";
import data from "./data";

export default function App() {
    return (
        <div className="App">
            <div style={{ width: "100%", height: "100%" }}>
                <Chrono
                    items={data}
                    mode="VERTICAL_ALTERNATING"
                    enableDarkToggle
                    textDensity="HIGH"
                    theme={{
                        primary: 'black',
                        secondary: 'grey',
                        cardBgColor: 'grey',
                        cardTitleColor: 'white',
                        titleColor: 'black',
                        titleColorActive: 'white',
                    }}
                />
            </div>
        </div>
    );
}
