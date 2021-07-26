import React from "react";
import { SectionContainer } from "./Features.styled";
import CardModule from "../../Modules/CardModule";
import DetailModule from "../../Modules/DetailModule";

const Features = () => {
  return (
    <>
      <SectionContainer id='features'>
        <CardModule />
        <DetailModule />
      </SectionContainer>
    </>
  );
};

export default Features;
