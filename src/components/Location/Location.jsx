import React from "react";
import CardLocation from "./CardLocation/CardLocation";
import Image1 from "../../assets/images/thumbs/thumbs-location-1.png";
import Image2 from "../../assets/images/thumbs/thumbs-location-2.png";
import Image3 from "../../assets/images/thumbs/thumbs-location-3.png";

import "./Location.modules.css";

const Location = () => {
  return (
    <section className="locations" id="locations">
      <div className="container container__section h-100">
        <div className="section__header">
          <h3>Our locations</h3>
          <span></span>
          <p>
            Come drink a coffee with us on
            <br />
            Fleet Street or Chancery Lane!
          </p>
        </div>
        <div className="location__content mt-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <CardLocation
                image={Image1}
                name="Fleet Street Press"
                officeHours="Mon - Sun:  10:00 - 00:00"
                place="3 Fleet Street, London EC4Y 1AU"
              />
            </div>
            <div className="col-12 col-md-4">
              <CardLocation
                image={Image2}
                name="Chancery Press"
                officeHours="Mon - Sun:  10:00 - 00:00"
                place="81 Chancery Lane, London WC2A 1DD"
              />
            </div>
            <div className="col-12 col-md-4">
              <CardLocation
                image={Image3}
                name="SHOREDITCH"
                officeHours="Mon - Sun:  10:00 - 00:00"
                place="Unit 15, Stone Trading Estate Milkwood Road, Herne Hill SE24 0JU"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
