import React from "react";

import "./BookTable.modules.css";
const BookTable = () => {
  return (
    <section className="bookTable" id="bookTable">
      <div className="container container__section d-flex align-item-center flex-column justify-content-center h-100">
        <div className="section__header">
          <h3>Looking for a fresh coffee?</h3>
          <span></span>
          <p>
            Come drink a coffee with us on <br /> Fleet Street, Chancery Lane or
            Milkwood Road!
          </p>
        </div>
        <a href="#book" className="mt-5 bookTable__button">
          BOOK A TABLE
        </a>
      </div>
    </section>
  );
};

export default BookTable;
