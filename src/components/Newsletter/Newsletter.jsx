import React from "react";

import "./Newsletter.modules.css";
const Newsletter = () => {
  return (
    <section className="newsletter" id="newsletter">
      <div className="container container__section h-100">
        <div className="section__header">
          <h3>Our newsletter</h3>
          <span></span>
          <p>
            Available all day! We can not guarantee our foods are allergen-free.
            Service charge not included.
          </p>
        </div>
        <div className="newsletter__content mt-5">
          <form className="newsletter__form d-flex justify-content-center align-item-center flex-column flex-sm-row gap-4">
            <input
              name="email"
              type="email"
              placeholder="Your E-mail Adress..."
            />
            <button type="button" className="btn__subscribe">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
