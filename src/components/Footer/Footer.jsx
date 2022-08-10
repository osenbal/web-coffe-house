/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.modules.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container container__footer">
        <div className="d-flex justify-content-between align-item-center gap-4">
          <p className="footer__copyright">
            Copyright 2022 All rights reserved
          </p>
          <ul className="nav__footer d-flex flex-row justify-content-between align-item-center gap-5">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#product">Shop</a>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
          <ul className="media__footer d-flex flex-row justify-content-center align-items-center gap-4">
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.facebook.com"
              >
                Fb
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.twitter.com"
              >
                Tw
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com"
              >
                Ig
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
