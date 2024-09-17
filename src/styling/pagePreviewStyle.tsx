import styled from "styled-components";
import {
  fontColor,
  fontFamily,
  maxWidth,
  mobileBreakpoint,
} from "./stylingConstants";

// TYPES
export type ImageSizes = "big" | "small";

//STYLES
export const PageCardWrapper = styled.div`
  border-bottom: 2px solid ${fontColor};
  border-left: 0px;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${mobileBreakpoint}) {
    border-left: 2px solid ${fontColor};
    flex-direction: column;
  }

  :nth-last-child(2) {
    border-bottom: 0px;
  }

  :first-child {
    margin-left: 0px;
    border-left: 0px;
    @media only screen and (min-width: ${maxWidth}) {
      border-left: 2px solid ${fontColor};
      margin-left: calc(50vw - 554px);
    }
  }

  h3 {
    font-family: ${fontFamily.sanserif};
    font-weight: 500;
    font-size: 24px;
    margin: 16px;
    @media only screen and (min-width: ${mobileBreakpoint}) {
      margin: 24px 24px 0px 24px;
    }
  }
  p {
    display: none;
    line-height: 1.3;
    @media only screen and (min-width: ${mobileBreakpoint}) {
      margin: 24px;
      display: block;
    }
  }
`;
export const ColorImageWrapper = styled.div`
  min-width: 40px;
  min-height: 100%;
  flex-grow: 1;
  background: ${(props) => props.color};
  @media only screen and (min-width: ${mobileBreakpoint}) {
    width: 100%;
    min-width: 360px;
    height: 100%;
  }
`;
// this is the right hand side spacer; also serves to set height for pagecards
export const MarginPageCard = styled.div`
  display: none;
  min-width: calc((100vw - 1170px}) / 2);
  border-left: 0px;
  @media only screen and (min-width: ${mobileBreakpoint}) {
    display: block;
    height: 446px;
  }
  @media only screen and (min-width: ${maxWidth}) {
    border-left: 2px solid ${fontColor};
  }
`;
export const CardHorizontal = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border: 2px solid ${fontColor};
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  @media only screen and (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
    max-height: 446px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
