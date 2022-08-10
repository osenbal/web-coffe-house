import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/images/thumbs/thumbs-hero.png";
import logo from "../../assets/images/icon/icon-logo.svg";

import "./Jumbotron.modules.css";
const Jumbotron = () => {
  return (
    <div id="jumbotron" className="jumbotron position-relative">
      <img src={hero} alt="hero" className="w-100 jumbotron__hero" />

      <div className="jumbotron__content gap-4 container position-absolute d-flex flex-column align-items-center justify-content-center w-100 m-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={logo} alt="logo" className="jumbotron__logo" />
        </motion.div>
        <h1>The Coffee Roasters</h1>
        <h4>
          We source our coffee seasonally, from farmers who care, and roast to
          highlight what makes them special.
        </h4>
        <a href="#menu" className="mt-3 jumbotron__button">
          VIEW OUR MENU
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
