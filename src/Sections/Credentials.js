import React from "react";
import { SectionContainer as Container } from "../Components/SectionContainer";
import { List } from "../Components";
import IconTitle from '../Components/IconTitle/IconTitle';
import IconSrc from "../images/icon-arrow.svg";

import {
  CredentialContainer,
  DetailContent,
  DecorativeImg,
} from "./Credentials.styled";
import ImgSrc from "../images/decorative-credential.png";

const listItems = [
  {
    id: 1,
    title: "Trust 1",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
  {
    id: 2,
    title: "Trust 2",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
  },
];

const Credentials = () => {
  return (
    <>
      <Container
        className="light-grey"
        id="credentials"
        style={{ zIndex: "1" }}
      >
        <CredentialContainer>
          <DetailContent>
            <IconTitle className='icon-end' icon={IconSrc}>Find a Credential</IconTitle>
          </DetailContent>
          <DecorativeImg src={ImgSrc} alt="" />
          <List listItems={listItems} />
        </CredentialContainer>
      </Container>
    </>
  );
};

export default Credentials;
