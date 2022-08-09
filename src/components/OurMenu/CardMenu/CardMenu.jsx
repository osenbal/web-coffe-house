import React from "react";

import "./CardMenu.modules.css";
const CardMenu = ({ menuImg, menuName, menuDescription, price }) => {
  return (
    <div className="card__menu d-flex justify-content-between align-item-center text-start gap-3 position-relative">
      <div className="d-flex gap-4 justify-content-start align-item-center">
        <img src={menuImg} alt={menuName} />
        <div>
          <h6>{menuName}</h6>
          <p>{menuDescription}</p>
        </div>
      </div>
      <span className="menu_price">{price}</span>
    </div>
  );
};

export default CardMenu;
