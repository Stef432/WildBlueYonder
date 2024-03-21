import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <NavLink to="/donations">
        <button className="btn btn-warning">Choose your Gift</button>
      </NavLink>
      <NavLink to="/">
        <button className="btn btn-warning">Home</button>
      </NavLink>
      <NavLink to="/contact">
        <button className="btn btn-warning">Contact Us</button>
      </NavLink>
    </nav>
  );
}
