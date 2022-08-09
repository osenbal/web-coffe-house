import React from "react";
import "./CardFeature.modules.css";

const CardFeature = ({ icon, title, description, isLeft }) => {
  return (
    <div className="feature__card d-flex gap-3 align-items-center justify-content-center">
      <img
        className={`${isLeft ? "order-1 order-lg-2" : ""}`}
        src={icon}
        alt="icon feature product"
      />
      <div
        className={`description text-start ${
          isLeft ? "order-2 order-lg-1" : ""
        }`}
      >
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardFeature;
