import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
          alt="Starbucks Logo"
          className="logo"
        />
        <ul className="nav-links">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/gift" ? "active" : ""}>
            <Link to="/gift">Gift</Link>
          </li>
          <li className={location.pathname === "/order" ? "active" : ""}>
            <Link to="/order">Order</Link>
          </li>
          <li className={location.pathname === "/pay" ? "active" : ""}>
            <Link to="/pay">Pay</Link>
          </li>
          <li className={location.pathname === "/store" ? "active" : ""}>
            <Link to="/store">Store</Link>
          </li>
          <li className={location.pathname === "/corporate-gifting" ? "active" : ""}>
            <Link to="/corporate-gifting">Corporate Gifting</Link>
          </li>
        </ul>
      </div>
      <div className="nav-right">
        
        <button><Link to="/Login">Login</Link></button>
      </div>
    </nav>
  );
}

export default Navbar;
