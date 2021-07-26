import styled from "styled-components";
import { Container } from "../../globalStyles";

export const IntroContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${Container}; //To get the other values of Container
`;