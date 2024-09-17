import React from 'react'
import { Link } from 'react-router-dom'

const NavBarComponents = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
    <div className="container-fluid">
      <ul className="navbar-nav">
        <li className="nav-item">
         <Link to={"/"}>Recipes</Link>
        </li>
        <li className="nav-item">
          <Link>main Page</Link>
        </li>
        <li className="nav-item">
          <Link>Fav page</Link>
        </li>
      </ul>
    </div>
  </nav>
  
  )
}

export default NavBarComponents
