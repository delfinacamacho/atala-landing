import styled from "styled-components";
import { Container } from "../../globalStyles";
import heroUrl from "../../images/hero-bg.jpg";

export const StyledHero = styled.section`
  background-image: url(${heroUrl});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius: 0 0 140px 140px;
  position: relative;
  top: -85px;
  padding-bottom: 70px;
  z-index: 5;

  @media screen and (max-width: 1024px) {
    border-radius: 0 0 100px 100px;
    padding-bottom: 140px;
    overflow: hidden;
  }

  @media screen and (max-width: 599px) {
    border-radius: 0 0 75px 75px;
    padding-bottom: 25px;
    overflow: visible;
  }
`;

export const HeroContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 85px;

  @media screen and (max-width: 599px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
`;

export const HeroContent = styled.div`
  max-width: 550px;
  display: flex;
  flex-direction: column;

  & p {
    margin-top: 25px;
    margin-bottom: 40px;

    @media screen and (max-width: 599px) {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 599px) {
    margin-top: 50px;
      margin-bottom: 50px;
    }
`;

export const HeroImage = styled.img`
  width: 650px;
  height: auto;
  position: relative;
  top: 90px;
  right: -50px;

  @media screen and (max-width: 1100px) {
    width: 350px;
    height: auto;
    top: 0;
    right: -25px;
  }

  @media screen and (max-width: 599px) {
    right: 0;
  }
`;
