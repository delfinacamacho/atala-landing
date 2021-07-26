import React from "react";
import { LinkLogo, LogoIcon } from "./Logo.styled";
import LogoSrc from "../../images/groupatala-logo.svg";

const Logo = () => {
return (
  <LinkLogo to="/">
  <LogoIcon src={LogoSrc} alt="Atala logo" />
</LinkLogo>
)
};

export default Logo;
