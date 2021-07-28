import React from "react";
import ReactStoreBadges from "react-store-badges";
import { Subtitle } from "../Components/Typography";
import { BadgeContainer } from "../Components/BadgeContainer";

import { Container, DownloadContent, Image } from "./Download.styled";

const Credentials = () => {
  return (
    <>
      <Container id="download" style={{ zIndex: "2" }}>
        <Image />
        <DownloadContent>
          <Subtitle className="primary">
            Lorem Ipsum is simply dummy text of the printing texto simulado.
          </Subtitle>
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
        </DownloadContent>
      </Container>
    </>
  );
};

export default Credentials;
