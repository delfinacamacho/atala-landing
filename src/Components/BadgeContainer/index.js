import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: flex;

  @media screen and (max-width: 599px) {
    justify-content: center;
  }

  & a {
    margin-right: 30px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      margin-right: 15px;
      margin-top: 0;
    }
  }

  & a:last-child {
    margin-right: 0;
    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }
`;
