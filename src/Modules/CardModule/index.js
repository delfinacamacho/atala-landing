import React from "react";
import { Card, CardContainer } from "../../Components/Card/Card";
import { Subtitle, Copy } from "../../Components/Typography/Typography";
import { IntroContainer } from "./CardModule.styled";

const CardModule = () => {
  return (
    <>
      <IntroContainer>
        <Subtitle className="secondary">What is Atala Prism?</Subtitle>
        <Copy className="light-contrast">Digital wallet and credentials verification platform. All in one.</Copy>
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
      </IntroContainer>
    </>
  );
};

export default CardModule;
