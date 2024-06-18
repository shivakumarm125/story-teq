import React from "react";
import { useLocation } from "react-router-dom";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const VehicleDetails = () => {

    //Used to get data from location state
    const location = useLocation();
    const vehicle = location.state.vehicle;

    // Used to Navigate back to home
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/");
    };

    return (
        <>
            <div className="details">
                <figure className="details__image">
                    <img
                        src={`${vehicle.media[0].url}`}
                        alt={`${vehicle.id}`}
                        className="details__imagemore"
                    />
                </figure>
                <div className="details__moreInfo">
                    <span className="details__id">
                        {vehicle.id.toUpperCase()}
                    </span>
                    <span className="details__price">
                        {"From " +vehicle.price}
                    </span>
                    <span className="details__description">
                        {vehicle.description}
                    </span>
                    <div className="details__emission">
                        <span className="details__co2-label">{"CO2 "}</span>
                        {"Emissions " + vehicle.meta.emissions.value}
                        {vehicle.meta.emissions.template.slice(
                            vehicle.meta.emissions.template.length - 4,
                            vehicle.meta.emissions.template.length
                        )}
                    </div>
                    {/* Button back to home */}
                    <button
                        className="vehicle-card__readmore"
                        onClick={handleButtonClick}
                    >
                        {" "}
                        <span className="vehicle-card__readmorearrow">
                            &#8592;
                        </span>{" "}
                        BACK TO VEHICLES
                    </button>
                </div>
            </div>
        </>
    );
};

export default VehicleDetails;
