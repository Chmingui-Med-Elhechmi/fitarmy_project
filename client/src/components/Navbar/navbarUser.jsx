import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import AccountMenu from "./AvatarMenu/Avatar";

const NavbarUser = () => {
  const [mobile, SetMobile] = useState(true);

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">
        Fit-Art
      </NavLink>
      <button className="navbar-toggler" onClick={() => SetMobile(!mobile)}>
        <FaBars />
      </button>

      <div className={`mobile mobile-${mobile}`}>
        <NavLink exact to="/" activeClassName="current" className="navbar-link">
          Home
        </NavLink>

        <NavLink
          to="/fitarmy"
          activeClassName="current"
          className="navbar-link"
        >
          #FitArmy
        </NavLink>

        <NavLink to="/about" activeClassName="current" className="navbar-link">
          About Us
        </NavLink>

        <NavLink
          to="/produit"
          activeClassName="current"
          className="navbar-link"
        >
          Produit
        </NavLink>

        <NavLink to="/price" className="navbar-link" activeClassName="current">
          Pricing
        </NavLink>
        <NavLink
          to="/produit"
          className="navbar-link"
          activeClassName="current"
        >
          Products
        </NavLink>

        <NavLink
          to="/contact"
          activeClassName="current"
          className="navbar-link"
        >
          Contact
        </NavLink>
        <AccountMenu />
      </div>
    </nav>
  );
};

export default NavbarUser;
