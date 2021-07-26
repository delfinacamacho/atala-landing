import styled from "styled-components";

const primaryColor = "#FFFFFF";
const secondaryColor = "#202020";
const secondaryLight = "#A0AABB";

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  line-height: 53px;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 34px;
    line-height: 42px;
  }
`;

export const Subtitle = styled.h4`
  font-size: 30px;
  font-weight: 500;
  line-height: 38px;

  &.primary {
    color: ${primaryColor};
  }
  &.secondary {
    color: ${secondaryColor};
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 35px;
  }
`;

export const Copy = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;

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
`;

export const Footnote = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;

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
    line-height: 15px;
  }
`;
