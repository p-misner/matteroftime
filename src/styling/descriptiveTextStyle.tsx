/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import {
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  maxWidth,
  mobileBreakpoint,
  vizColors,
} from "./stylingConstants";

export const BaseText = styled.div`
  font-family: ${fontFamily.mono};
  font-size: ${fontSize.xlarge};
  font-weight: 400;
  line-height: 80px;
  @media screen and (max-width: ${mobileBreakpoint}) {
    font-size: ${fontSize.large};
    line-height: 60px;
  }
`;

export const HeroTextWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 64px auto;
  @media screen and (max-width: calc(${maxWidth} + 64px)) {
    padding: 0px 32px;
  }
`;

export const NoteText = styled.p`
  color: ${fontColor};
  line-height: 28px;
  span {
    font-weight: ${fontWeight.semibold};
  }
  margin-bottom: 16px;
`;

export const TimezoneButton = styled.button`
  background-color: #fff; /* Pale Purple */
  border: 1px solid ${fontColor};
  font-family: ${fontFamily.mono};
  color: ${fontColor};
  padding: 4px 8px;
  margin: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${fontSize.small};
  cursor: pointer;

  :hover {
    background-color: ${fontColor};
    color: #fff;
  }
`;

export const TimezoneBlackButton = styled.button`
  background-color: #fff;
  font-family: ${fontFamily.mono};
  border: 0px solid ${fontColor};
  color: ${fontColor};
  padding: 4px 8px;
  margin: 2px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: ${fontSize.small};
  // font-weight: ${fontWeight.semibold};
  cursor: pointer;
  opacity: 0.5;

  :hover {
    opacity: 1;
  }
`;
