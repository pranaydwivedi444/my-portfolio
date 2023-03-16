import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import mainLogo from "./pranay-logo.png";
import "./navbar.styles.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  function handleClick() {
    setClick(!click);
  }
  function closeMenu() {
    if (window.innerWidth > 570) return;

    setClick(false);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="logo-container">
          <Link className="navbar-logo" to="/">
            <img src={mainLogo} alt="logo" className="main-logo" />
          </Link>
        </div>
        <div className="menu-icon " onClick={handleClick}>
          <i
            className={click ? "fa fa-times nav-icon" : "fas fa-bars  nav-icon"}
          />
        </div>
        <div
          className={click ? "navlink-container active" : "navlink-container"}
        >
          <ul className={"nav-menu"}>
            <li className="nav-item">
              <Link className="nav-links" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-links" to="/Podcast" onClick={closeMenu}>
                Podcast
              </Link>
            </li>
            <a
              className="nav-links"
              href="https://www.linkedin.com/in/pranayd32/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              className="nav-links"
              href="https://github.com/pranaydwivedi444"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="nav-links"
              href="https://twitter.com/pranayD32"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
          </ul>
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  );
}
