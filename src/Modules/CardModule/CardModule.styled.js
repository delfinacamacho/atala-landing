import styled from "styled-components";
import { Container } from "../../globalStyles";

export const IntroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${Container}; //To get the other values of Container

  margin-top: 48px;

  & :nth-child(2) {
    margin-top: 25px;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;