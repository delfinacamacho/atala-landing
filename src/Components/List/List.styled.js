import styled from "styled-components";
import { ReactComponent as Icon } from "../../images/verified-icon.svg";

export const StyledLi = styled.li`
  display: flex;
`;

export const LiContent = styled.div`
  margin-left: 44px;

  & p {
    margin-top: 11px;
    margin-bottom: 11px;
  }

  @media screen and (max-width: 599px) {
    margin-left: 24px;
  }
`;

export const LiIcon = styled(Icon)`
  width: 32px;
  height: 32px;
`;

export const StyledUl = styled.ul``;
