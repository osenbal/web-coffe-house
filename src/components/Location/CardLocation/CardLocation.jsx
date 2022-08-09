import React from "react";
import "./CardLocation.modules.css";

const CardLocation = ({ image, name, place, officeHours }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body mt-4">
        <div className="card-title">{name}</div>
        <div className="card-text mt-4">
          {officeHours}
          <br />
          {place}
        </div>
      </div>
    </div>
  );
};

export default CardLocation;
