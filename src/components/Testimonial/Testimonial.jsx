import React from "react";
import { motion } from "framer-motion";
import FeedbackList from "./FeedbackList/FeedbackList";
import AnimationFade from "../../utils/Animations/AnimationFade";
import "./Testimonial.modules.css";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container container__section h-100 w-100">
        <motion.div {...AnimationFade}>
          <div className="section__header">
            <h3>Testimonials</h3>
            <span></span>
          </div>
          <div className="testimonial__content mx-auto">
            <FeedbackList />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
