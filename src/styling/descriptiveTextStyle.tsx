/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import {
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  maxWidth,
  vizColors,
} from "./stylingConstants";

export const BaseText = styled.div`
  font-family: "Roboto Mono";
  font-size: ${fontSize.xlarge};
  font-weight: 400;
  line-height: 80px;
`;

export const HeroTextWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 64px auto;
`;

export const NoteText = styled.p`
  color: ${fontColor};
  line-height: 28px;
  span {
    font-weight: ${fontWeight.semibold};
  }
`;

export const TimezoneButton = styled.button`
  background-color: #fff; /* Pale Purple */
  border: 1px solid ${fontColor};
  font-family: "Roboto Mono";
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
  font-family: "Roboto Mono";
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
