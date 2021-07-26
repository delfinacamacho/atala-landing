import React from "react";
import{ StyledCardContainer, StyledCard, CardIcon, StyledIcon} from "./Card.styled";
import { Copy } from "../Typography/Typography";


export const Card = ({caption, description, className}) => {
  return (
    <>
      <StyledCard>
        <CardIcon className={className}>
          <StyledIcon />
        </CardIcon>
        <Copy className='secondary caption'>{caption}</Copy>
        <Copy className='light-contrast'>{description}</Copy>
      </StyledCard>
    </>
  );
};

export const CardContainer = ({children}) => {
  return (
    <>
    <StyledCardContainer>
      {children}
    </StyledCardContainer>
    </>
  );
};

