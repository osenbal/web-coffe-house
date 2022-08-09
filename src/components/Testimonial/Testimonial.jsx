import React from "react";
import FeedbackList from "./FeedbackList/FeedbackList";
import "./Testimonial.modules.css";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container container__section h-100 d-flex justify-content-center align-item-center flex-column">
        <div className="testimonial__content mx-auto">
          <div className="section__header">
            <h3>Testimonials</h3>
            <span></span>
          </div>
          <FeedbackList />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
