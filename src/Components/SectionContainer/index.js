import styled from "styled-components";

export const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  border-radius: 0 0 0 140px;
  margin-top: -250px;
  padding-top: 250px;

  &.white {
    background-color: #FFFFFF;
  }

  &.light-grey {
    background-color: #F9FBFD;
  }

  &.red {
    background-color: red;
  }

  @media screen and (max-width: 1024px) {
    border-radius: 0 0 0 100px;
  }

  @media screen and (max-width: 599px) {
    border-radius: 0 0 0 75px;
  }
`;