import React from "react";
import "./CardNews.modules.css";
const CardNews = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <a href={link}>
        <img className="card-img-top" src={image} alt={title} />
      </a>
      <div className="card-body text-start">
        <h6>{title}</h6>
        <p className="card-text">{description}</p>
        <a className="card-read-more" href={link}>
          <span></span> Read more
        </a>
      </div>
    </div>
  );
};

export default CardNews;
