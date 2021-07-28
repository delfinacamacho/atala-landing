import React from "react";
import styled from "styled-components";
import { Subtitle } from "../Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  &.icon-end {
    flex-direction: column-reverse;
  }
`;

const Icon = styled.img`
  width: 60px;
  height: auto;
  margin: 20px 0;

  @media screen and (max-width: 599px) {
    width: 40px;
  }
`;

const IconTitle = ({ className, icon, children }) => {
  return (
    <>
      <Container className={className}>
        <Icon src={icon} />
        <Subtitle className="secondary">{children}</Subtitle>
      </Container>
    </>
  );
};

export default IconTitle;
