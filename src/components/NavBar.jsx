import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <>
      <h1>Bucketlist</h1>
      <ul>
        {/* Home */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {/* List */}
        <li>
          <NavLink to="/list">Lijst</NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavBar;
