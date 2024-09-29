import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Protofolio Me
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/skill">Skill</NavLink>
        </li>
        <li>
          <NavLink to="/interest">Interest</NavLink>
        </li>
        <li>
          <NavLink to="/award">Award</NavLink>
        </li>
      </ul>
    </nav>
  );
};
