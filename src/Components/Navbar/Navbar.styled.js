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
    @media screen and (max-width: 599px) {
      background-color: rgba(38, 35, 36, 0.95);
    }
  }
  &.sticky-bg {
    background-color: rgba(38, 35, 36, 0.85);
  }
  @media screen and (max-width: 599px) {
      height: 50px;
      background-color: rgba(38, 35, 36, 0.95);
    }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  text-align: center;
  ${Container}; //To get the other values of Container
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50px;
    left: ${({click}) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background-color: rgba(38, 35, 36, 0.95);
  }
`;

export const MenuItem = styled.li`
  margin-left: 40px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid white;
  }
  @media screen and (max-width: 599px) {
    text-align: center;
    margin-left: 0;
    padding: 30px;

    &:hover {
    border-bottom: unset;
  }
  }
`;

export const MenuLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
`;

export const HamburguerMenu = styled.div`
  display: none;

  @media screen and (max-width: 599px) {
    display: inline-flex;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
`;
