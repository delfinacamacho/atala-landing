import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  border-radius: 0 0 0 140px;
  padding-top: 250px;
  position: relative;
  top: -250px;
  z-index: -1;
  background-color: #C1C1C1;

  @media screen and (max-width: 1024px) {
    border-radius: 0 0 0 100px;
  }

  @media screen and (max-width: 599px) {
    border-radius: 0 0 0 75px;
  }
`;