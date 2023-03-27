import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import mainLogo from "./pranay-logo.png";
import "./navbar.styles.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick((preclick) => !preclick);
  }
  function closeMenu() {
    if (window.innerWidth > 570) return;

    setClick(false);
  }
  return (
    <>
      <nav className="navbar__nav-bar">
        <div className="navbar__logo-container">
          <Link className="navbar__navbar-logo" to="/">
            <img src={mainLogo} alt="logo" className="navbar__main-logo" />
          </Link>
        </div>
        <div className="navbar__menu-icon " onClick={handleClick}>
          <i
            className={
              click
                ? "fa fa-times navbar__nav-icon"
                : "fas fa-bars  navbar__nav-icon"
            }
          />
        </div>
        <div
          className={
            click
              ? "navbar__navlink-container navbar__active"
              : "navbar__navlink-container"
          }
        >
          <ul className={"navbar__nav-menu"}>
            <li className="navbar__nav-item">
              <Link className="navbar__nav-links" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__nav-item">
              <Link
                className="navbar__nav-links"
                to="/Projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="navbar__nav-item">
              <Link
                className="navbar__nav-links"
                to="/Podcast"
                onClick={closeMenu}
              >
                Podcast
              </Link>
            </li>
            <a
              className="navbar__nav-links"
              href="https://twitter.com/pranayD32"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              className="navbar__nav-links"
              href="https://github.com/pranaydwivedi444"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="navbar__nav-links"
              href="https://www.linkedin.com/in/pranayd32/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  );
}
