import React from "react";
import ReactDOM from "react-dom";
import VehicleList from "./components/VehicleList";
import "./global-styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VehicleDetails from "./components/VehicleDetails";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route exact path="/" element={<VehicleList />} />
                <Route exact path="/details" element={<VehicleDetails />} />
            </Routes>
        </Router>
    </React.StrictMode>,
    document.querySelector(".root")
);
