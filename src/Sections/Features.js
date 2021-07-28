import React from "react";
import { SectionContainer as Container } from "../Components/SectionContainer";
import { Card, CardContainer } from "../Components/Card/Card";
import { Subtitle, Copy } from "../Components/Typography";
import IconTitle from '../Components/IconTitle/IconTitle';
import ImgSrc from "../images/decorative-card.png";
import IconSrc from "../images/icon-teach.svg";
import { CardModule } from "./Features.styled";
import { DetailsContainer, DetailContent, DetailCard, DecorativeImg, BgAnimation } from "./Features.styled";

const Features = () => {
  return (
    <>
      <Container className="white" id="features" style={{ zIndex: "2" }}>
        <CardModule>
          <Subtitle className="secondary">What is Atala Prism?</Subtitle>
          <Copy className="light-contrast">
            Digital wallet and credentials verification platform. All in one.
          </Copy>
          <CardContainer>
            <Card
              className="pink"
              caption="Credentials"
              description="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
            <Card
              className="blue"
              caption="Wallet"
              description="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
            <Card
              className="green"
              caption="Crypto"
              description="It is a long established fact that a reader will be distracted by the readable content of a page."
            />
          </CardContainer>
        </CardModule>
        
        <DetailsContainer>
          <DetailCard>
            <BgAnimation>
              <DecorativeImg src={ImgSrc} alt="" />
            </BgAnimation>
          </DetailCard>
          <DetailContent>
          <IconTitle icon={IconSrc}>Lorem Ipsum is simply printing text.</IconTitle>
          </DetailContent>
        </DetailsContainer>
      </Container>
    </>
  );
};

export default Features;
