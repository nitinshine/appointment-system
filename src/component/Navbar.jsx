import React from "react";
import {
  NavItems,
  NavbarContainer,
  NavItem,
  LinkContainer,
} from "../styles/navbar-styles";
import logo from "../assets/images/logo.svg";
import externalLink from "../assets/images/external-link.svg";
import DownIcon from "../assets/images/chevron-down.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <img src={logo} alt="Company" />
      </div>
      <NavItems>
        <NavItem>
          <div>Menu</div>
          <img src={DownIcon} alt="" />
        </NavItem>
        <NavItem>
          <div>Contact us</div>
        </NavItem>
        <LinkContainer>
          <img src={externalLink}></img>
          <span>Share Link</span>
        </LinkContainer>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
