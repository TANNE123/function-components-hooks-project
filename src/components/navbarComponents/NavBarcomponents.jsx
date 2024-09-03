import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./style.css"

const NavBarComponents = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/about"} className="nav-link">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/Login"} className="nav-link">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarComponents;
