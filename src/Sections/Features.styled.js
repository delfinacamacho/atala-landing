import styled from "styled-components";
import { Container } from "../globalStyles";

import Ellipse1 from "../images/animated-1.png";
import Ellipse2 from "../images/animated-2.png";

export const CardModule = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${Container}; //To get the other values of Container

  margin-top: 48px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
  }
`;

export const DetailsContainer = styled(Container)`
  display: flex;
  align-content: center;
  justify-content: space-evenly;
  padding-bottom: 100px;
  ${Container};

  @media screen and (max-width: 599px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const DetailContent = styled.div`
  align-self: center;
  max-width: 450px;
`;

export const DetailCard = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 599px) {
    margin-bottom: 50px;
  }
`;

export const BgAnimation = styled.div`
  position: relative;
  z-index: 1;

  &:hover {
    &:before {
      left: -160px;
    }
    &:after {
      right: -75px;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: 0.3s ease;
  }

  &:before {
    background: url(${Ellipse2}) no-repeat center;
    left: 160px;
  }
  &:after {
    background: url(${Ellipse1}) no-repeat center;
    bottom: 75px;
    right: 160px;
  }

  @media screen and (max-width: 768px) {
    &:before,
    &:after {
      content: none;
    }
  }
`;

export const DecorativeImg = styled.img`
  display: block;
  width: 100%;
  z-index: 2;
`;
