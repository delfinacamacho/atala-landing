import styled from "styled-components";
import { Container } from "../../globalStyles";
import Ellipse1 from '../../images/animated-1.png'
import Ellipse2 from '../../images/animated-2.png'

export const DetailsContainer = styled(Container)``;

export const DetailCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const BgAnimation = styled.div`
  position: relative;

  &:hover {
    &:before {
      top: -160px;
     left: -75px;
    }
    
    &:after {
      bottom: -75px;
      right: -160px;
    }
  }
  
  &:before, &:after {
    content:'';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: .3s ease;
  }
  
  &:before {
    background: url(${Ellipse2}) no-repeat center;
    top: 160px;
    left: 75px;
  }
  
  &:after {
    background: url(${Ellipse1})no-repeat center;
    bottom: 75px;
      right: 160px;
  }
`;

export const DecorativeImg = styled.img`
  display: block;
`;
