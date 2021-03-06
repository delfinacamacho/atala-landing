import React from "react";
import {
  StyledHero,
  HeroContainer,
  HeroContent,
  HeroImage,
} from "./Hero.styled";
import { BadgeContainer } from "../BadgeContainer";
import { Title, Copy } from "../Typography";
import HeroImgSrc from "../../images/hero-img.png";
import ReactStoreBadges from "react-store-badges";

const Hero = () => {
  return (
    <>
      <StyledHero id='hero'>
        <HeroContainer>
          <HeroContent>
            <Title className="primary">
              Digital universities degrees powered by Blockchain
            </Title>
            <Copy className="primary">
              Carry and share your credentials inside your digital wallet.
            </Copy>
            <BadgeContainer>
              <ReactStoreBadges
                platform={"ios"}
                url="https://www.apple.com/app-store/"
                target="_blank"
                height={60}
              />
              <ReactStoreBadges
                platform={"android"}
                url="https://play.google.com/store/apps"
                target="_blank"
                height={60}
              />
            </BadgeContainer>
          </HeroContent>
          <HeroImage src={HeroImgSrc} alt="" />
        </HeroContainer>
      </StyledHero>
    </>
  );
};

export default Hero;
