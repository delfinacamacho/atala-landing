import styled from "styled-components";
import ImgSrc from "../images/download-img.png";

export const Container = styled.section`
  width: 100%;
  height: 1000px;
  margin-top: -250px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media screen and (max-width: 1024px) {
    margin-top: -50px;
    height: 500px;
  }

  @media screen and (max-width: 599px) {
    margin-top: 0;
    display: flex;
    flex-direction: column-reverse;
    column-gap: 0;
  }
`;

export const DownloadContent = styled.div`
  align-self: center;

  & h4 {
    margin-bottom: 60px;
    max-width: 350px;

    @media screen and (max-width: 599px) {
    margin: 30px;
    text-align: center;
  }

  }
`;

export const Image = styled.div`
  grid-column: 1 / 2;
  background-image: url(${ImgSrc});
  background-position: top right;
  background-size: auto 1000px;
  background-repeat: no-repeat;

  @media screen and (max-width: 599px) {
    height: 250px;
    background-position: top right;
    background-size: 200%;
  }
`;
