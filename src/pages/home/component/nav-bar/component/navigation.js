import React, { Component } from "react";
import DrawerToggleButton from "./side-drawer/DrawerToggleButton";
import NeLogo from "../../../../../assets/team-icon/ne-dev.svg";
import "./navigation.css";

import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <header className="Navbar">
        <nav className="NavbarNavigation">
          <div className="NavbarToggleButton">
            <DrawerToggleButton click={this.props.drawerClickHandler} />
          </div>
          <div className="NavbarLogo">
            <a href="/">
              <img src={NeLogo} alt="ne-logo" />
            </a>
          </div>
          <div className="spacer" />
          <div className="NavbarNavigationsItems">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="dropdown">
                <Link className="v-mid" to="/all-services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about-us">About-us</Link>
              </li>
              {/* <li>
                <a href="/">Gallery</a>
              </li> */}

              <li>
                <Link to="/contact-us"> Contact-us </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
