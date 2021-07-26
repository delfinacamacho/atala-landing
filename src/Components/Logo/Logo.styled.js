import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkLogo = styled(Link)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.img`
  height: 30px;
  width: auto;

  @media screen and (max-width: 599px) {
    height: auto;
    width: 120px;
  }
`;