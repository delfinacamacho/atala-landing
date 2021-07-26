import styled from "styled-components";
import { ReactComponent as Icon } from '../../images/card-icon.svg';

export const StyledCardContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 80px;
margin-bottom: 80px;
& div:nth-child(2) {
  border-left: 1px solid rgba(160, 170, 187, 0.5);
  border-right: 1px solid rgba(160, 170, 187, 0.5);
}

@media screen and (max-width: 599px) {
flex-direction: column;
& div:nth-child(2) {
  border: none;
}
  }
`;

export const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-content: center;
text-align: center;
padding: 0 56px 40px 56px;
min-height: 260px;

& p {
  max-width: 300px;
  margin-top: 29px;
}
`;

export const StyledIcon = styled(Icon)`
  width: 48px;
  height: auto;
`;

export const CardIcon = styled.div`
display: flex;
align-self: center;
justify-content: center;
align-content: center;
width: 80px;
height: 80px;
border-radius: 6px;

&.pink {
  color: rgba(175, 45, 255, 1);
  background-color: rgba(175, 45, 255, 0.1);
}

&.blue {
  color: rgba(74, 45, 255, 1);
  background-color: rgba(74, 45, 255, 0.1);
}

&.green {
  color: rgba(30, 214, 158, 1);
  background-color: rgba(30, 214, 158, 0.1);
}
`;