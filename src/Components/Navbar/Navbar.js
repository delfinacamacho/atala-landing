import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  StyledNav,
  NavbarContainer,
  NavMenu,
  MenuItem,
  MenuLink,
  HamburguerMenu
} from "./Navbar.styled";
import { Logo } from "../index";

const Navbar = () => {
  const [stickyNav, setstickyNav] = useState(false);
  const changeBackground = () =>
    window.scrollY >= 85 ? setstickyNav(true) : setstickyNav(false);
  window.addEventListener("scroll", changeBackground);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <StyledNav className={stickyNav ? "sticky-bg" : "default"}>
        <NavbarContainer>
          <Logo />
          <NavMenu onClick={handleClick} click={click}>
            <MenuItem>
              <MenuLink href="#features">Features</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#credentials">Credentials</MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#download">Download</MenuLink>
            </MenuItem>
          </NavMenu>
          <HamburguerMenu onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</HamburguerMenu>
        </NavbarContainer>
      </StyledNav>
    </>
  );
};

export default Navbar;
