import styled from "styled-components";
import { Container } from "../../globalStyles";

export const StyledFooter = styled.footer`
  height: 180px;
  background-color: #202020;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  ${Container}; //To get the other values of Container

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    & p {
      padding-top: 30px;
      align-self: center;
      text-align: center;
    }
  }
  @media screen and (max-width: 599px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;
