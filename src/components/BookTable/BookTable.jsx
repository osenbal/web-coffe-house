import React from "react";
import { motion } from "framer-motion";
import AnimationFade from "../../utils/Animations/AnimationFade";

import "./BookTable.modules.css";
const BookTable = () => {
  return (
    <section className="bookTable" id="bookTable">
      <div className="container container__section d-flex align-item-center flex-column justify-content-center h-100">
        <motion.div className="h-100" {...AnimationFade}>
          <div className="section__header">
            <h3>Looking for a fresh coffee?</h3>
            <span></span>
            <p>
              Come drink a coffee with us on <br /> Fleet Street, Chancery Lane
              or Milkwood Road!
            </p>
          </div>
          <a href="#book" className="mt-5 mx-auto bookTable__button">
            BOOK A TABLE
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BookTable;
