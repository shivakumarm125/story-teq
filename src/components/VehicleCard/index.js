import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const VehicleCard = ({ vehicle }) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate("/details", { state: { vehicle } });
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleButtonClick();
        }
    };

    return (
        <article className="vehicle-card" onClick={handleButtonClick} tabIndex="0" onKeyPress={handleKeyPress}>
            <figure className="vehicle-card__figure">
                {vehicle.media && vehicle.media.length > 0 && (
                    <img
                        src={vehicle.media[0].url}
                        alt={`${vehicle.id}`}
                        className="vehicle-card__image"
                    />
                )}
            </figure>
            <header className="vehicle-card__header">
                <h2 className="vehicle-card__name">
                    {vehicle.id.toUpperCase()}
                </h2>
            </header>
            <div className="vehicle-card__info">
                <p className="vehicle-card__price">From {vehicle.price}</p>
                <p className="vehicle-card__description">
                    {vehicle.description}
                </p>
            </div>
        </article>
    );
};

export default VehicleCard;
