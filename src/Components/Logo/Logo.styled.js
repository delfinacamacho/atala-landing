import styled from "styled-components";

export const LinkLogo = styled.a`
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