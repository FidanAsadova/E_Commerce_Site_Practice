import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link className="linkNavbar" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="linkNavbar" to="/Shop">
              Shop
            </Link>
          </li>
          <li>
            <Link className="linkNavbar" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
