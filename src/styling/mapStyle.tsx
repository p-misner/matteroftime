import styled from "styled-components";

import {
  HEX,
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  vizColors,
} from "./stylingConstants";

export const CountryPathHoverEffect = styled.path`
  stroke: #fff;
  stroke-width: 0.5;

  &:hover {
    stroke-width: 1px;
    stroke: #000;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.05));
  }
`;

export const TooltipDiv = styled.div`
  min-width: 60px;
  max-width: 196px;
  color: ${fontColor};
  line-height: 20px;
  display: block;
  h3 {
    font-family: ${fontFamily.sanserif};
    font-size: ${fontSize.regular};
    font-weight: ${fontWeight.semibold};
  }
  span {
    font-family: ${fontFamily.sanserif};
    font-size: ${fontSize.small};
    letter-spacing: 1px;
    word-spacing: 2px;
  }

  p {
    font-family: ${fontFamily.mono};
    font-size: ${fontSize.small};
    padding-top: 8px;
  }
`;

export const DateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  margin: 8px 0px;
`;

type WorkWeekUnderlineInputs = {
  workWeekColor?: string;
  //   color: HEX;
};
export const WorkWeekUnderline = styled.span<WorkWeekUnderlineInputs>`
  font-weight: ${fontWeight.semibold};
  text-decoration: underline;
  text-decoration-thickness: 6px;
  text-underline-offset: 4px;
  text-decoration-color: ${(props) =>
    props.workWeekColor ? props.workWeekColor : "#000"};
`;

type TimeDivInputs = {
  // timeframe: string;
  color: HEX;
};
export const TimeDiv = styled.div<TimeDivInputs>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  h3 {
    font-family: ${fontFamily.sanserif};
    font-size: ${fontSize.small};
    color: ${fontColor};
  }
  h2 {
    font-family: ${fontFamily.sanserif};
    font-size: ${fontSize.large};
    text-decoration: underline;
    text-decoration-thickness: 6px;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) =>
      props.color ? props.color : fontColor};
  }
  p {
    margin-top: 16px;
    text-align: left;
  }
`;
