import React from "react";
import useData from "./useData";
import "./style.scss";
import VehicleCard from "../VehicleCard";

export default function VehicleList() {
  
    const [loading, error, vehicles] = useData();

    if (loading) {
        return <div data-testid="loading">Loading</div>;
    }

    if (error) {
        return <div data-testid="error">{error}</div>;
    }

    console.log(JSON.stringify(vehicles), "vehicles");

    return (
        <section
            className="vehicle-list"
            aria-labelledby="vehicle-list-heading"
        >
            {vehicles.map((vehicle) => {
                return <VehicleCard key={vehicle.id} vehicle={vehicle} />;
            })}
        </section>
    );
}
