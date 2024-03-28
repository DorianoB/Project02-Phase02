import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar">
        <span>
          <Link to="/about">About</Link>
        </span>
        <span>
          <Link to="/services">Services</Link>
        </span>
        <span>
          <Link to="/reviews">Reviews</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
        <strong>
          <span className="quote">
            <Link to="/quote">Get a Quote</Link>
          </span>
        </strong>
        {/* <span className="phone">
          <Link to="/contact">Contact us: 0481 924 285</Link>
        </span> */}
      </nav>
    </>
  );
}
export default Nav;
