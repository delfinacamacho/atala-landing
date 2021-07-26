import styled from "styled-components";
import { Container } from "../../globalStyles";

export const StyledNav = styled.nav`
  display: flex;
  height: 85px;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 20;

  &.default {
    background-color: transparent;
  }
  &.sticky-bg {
    background-color: rgba(38, 35, 36, 0.85);
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}; //To get the other values of Container
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  margin-left: 40px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid white;
  }
`;

export const MenuLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;
