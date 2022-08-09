import React, { useEffect, useRef, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./Navbar.modules.css";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 992px)");
  const navbarRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const navbarOnScroll = () => {
    // navbar fixed when height document > ofset top navbar + 8 px
    document.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop >
        navbarRef.current.offsetTop + 8
      ) {
        navbarRef.current.classList.add("navbar-scrolled");
      } else {
        navbarRef.current.classList.remove("navbar-scrolled");
      }
    });
    if (
      document.documentElement.scrollTop >
      navbarRef.current.offsetHeight + 8
    ) {
      navbarRef.current.classList.add("navbar-scrolled");
    }
  };

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    navbarOnScroll();

    if (isDesktop) {
      setIsOpen(false);
    }

    return () => {
      document.removeEventListener("scroll", navbarOnScroll);
    };
  }, [isOpen, isDesktop]);

  return (
    <nav
      ref={navbarRef}
      className={`navbar navbar-expand-lg w-100 ${
        isOpen && isDesktop === false ? "nav-open" : ""
      }`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          COFFEE HOUSE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isDesktop === false && isOpen ? "show" : ""
          }`}
          id="navbarNavDropdown"
        >
          <ul
            className={`navbar-nav ms-auto ${
              isOpen && isDesktop === false ? "open-collapse" : ""
            }`}
          >
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">
                Happy Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#location">
                Our Locations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#newsletter">
                Newsletters
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
