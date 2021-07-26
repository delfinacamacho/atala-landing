import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: flex;
  & a {
    margin-right: 30px;
    margin-top: 10px;
    @media screen and (max-width: 768px) {
      margin-right: 15px;
      margin-top: 0;
    }
  }
`;