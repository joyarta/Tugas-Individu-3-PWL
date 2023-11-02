import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="icon-container">
          <h1>Tugas Pemrograman Web React Js</h1>
        </div>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"about"}>About us</NavLink>
          </li>
          <li>
            <NavLink to={"contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
