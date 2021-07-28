import styled from "styled-components";

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

export const LiIcon = styled.img`
  width: 30px;
  height: auto;
  align-self: start;
`;

export const StyledUl = styled.ul``;
