import React, { useState } from "react";
import {
  StyledNav,
  NavbarContainer,
  NavMenu,
  MenuItem,
  MenuLink,
} from "./Navbar.styled";
import { Logo } from "../index";

const Navbar = () => {
  /* To change the bg color of the sticky navbar when scrolling */
  const [navbar, setNavBar] = useState(false);
  const changeBackground = () =>
    window.scrollY >= 85 ? setNavBar(true) : setNavBar(false);
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <StyledNav className={navbar ? "sticky-bg" : "default"}>
        <NavbarContainer>
          <Logo />
          <NavMenu>
            <MenuItem>
              <MenuLink to="/">Features</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/">Credentials</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/">Download</MenuLink>
            </MenuItem>
          </NavMenu>
        </NavbarContainer>
      </StyledNav>
    </>
  );
};

export default Navbar;
