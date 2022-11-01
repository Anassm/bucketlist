import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <header>
      {/* Title */}
      <Link to="/" className={classes.title}>Bucketlist website</Link>
      <nav>
        <ul>
          {/* Home */}
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          {/* List */}
          <li>
            <NavLink to="/list">Lijst</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
