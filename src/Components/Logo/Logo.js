import React from "react";
import { LinkLogo, LogoIcon } from "./Logo.styled";
import LogoSrc from "../../images/groupatala-logo.svg";

const Logo = () => {
return (
  <LinkLogo href="#hero">
  <LogoIcon src={LogoSrc} alt="Atala logo" />
</LinkLogo>
)
};

export default Logo;
