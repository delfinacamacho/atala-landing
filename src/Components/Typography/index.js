import styled from "styled-components";

const primaryColor = "#FFFFFF";
const secondaryColor = "#202020";
const secondaryLight = "#A0AABB";

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 30px;
  font-weight: 700;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Caption = styled.h6`
  font-size: 24px;
  font-weight: 700;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }
`;

export const Copy = styled.p`
  font-size: 18px;
  font-weight: 400;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }
  &.light-contrast {
    color: ${secondaryLight};
  }
  &.caption {
    font-weight: 500;
  }
  @media screen and (max-width: 599px) {
    font-size: 16px;
  }
`;

export const Footnote = styled.p`
  font-size: 14px;
  font-weight: 400;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }
  &.light-contrast {
    color: ${secondaryLight};
  }

  @media screen and (max-width: 599px) {
    font-size: 12px;
  }
`;
