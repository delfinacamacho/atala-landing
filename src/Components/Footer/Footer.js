import React from "react";
import { StyledFooter, FooterContainer } from "./Footer.styled";
import { Footnote } from "../Typography";
import { Logo } from "../index";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterContainer>
          <Logo/>
          <Footnote className='primary'>
            © Copyright 2019, ATALA. All Rights Reserved. ATALA Prism is a
            registered trademarke of IOHK.
          </Footnote>
        </FooterContainer>
      </StyledFooter>
    </>
  );
};

export default Footer;
