import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const NavBarComponents = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="navBar" to={"/"}>
              All Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navBar" to={"/product"}>
              products
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarComponents;
