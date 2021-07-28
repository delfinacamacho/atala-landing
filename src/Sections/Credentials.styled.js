import styled from "styled-components";
import { Container } from "../globalStyles";

export const CredentialContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 0.5fr;
  justify-items: start;
  row-gap: 100px;
  padding-top: 100px;
  padding-bottom: 100px;
  ${Container};

  & :last-child {
    grid-column: 3 / 5;
    grid-row: 2 / 3;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    padding-top: 50px;
  }
`;

export const DetailContent = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

export const DecorativeImg = styled.img`
  grid-column: 2 / 5;
  grid-row: 1 / 2;
  width: 100%;
  max-width: 860px;
  height: auto;
  border-radius: 15px;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.12), 0 3px 3px rgba(0, 0, 0, 0.25);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
