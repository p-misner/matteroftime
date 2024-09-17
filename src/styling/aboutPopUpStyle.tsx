import styled from "styled-components";
import { fontColor, fontFamily, fontSize, vizColors } from "./stylingConstants";

export const AboutWrapper = styled.div`
  max-width: 1000px;
  width: 80vw;
  min-height:200px;
  height:80%;
  max-height: 620px;
  overflow-x:scroll;
  border: 2px solid ${fontColor};
  color: ${fontColor};
  background-color: white;
  position: fixed;
  top: 100px;
  z-index: 200;
  left: 50%;
  transform: translate(-50%, 0);
  disp
`;

export const GreyoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 50%;
  z-index: 199;
  top: 0px;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(2px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 24px 24px 24px;
  row-gap: 24px;
  h1 {
    font-family: ${fontFamily.sanserif};
    font-size: ${fontSize.large};
  }
  p {
    font-family: ${fontFamily.mono};
    line-height: 1.2;
  }
  span {
    font-weight: 600;
  }
  ul {
    list-style-type: square;
    margin-left: 48px;
    line-height: 24px;
  }
  a {
    color: ${fontColor};
  }
  a:hover {
    color: ${vizColors.pastelPurple};
  }
  //   width: 80%;
`;

export const PopupWrapper = styled.div`
  background-color: transparent;
`;

export const Close = styled.div`
  font-size: ${fontSize.xlarge};
  cursor: pointer;
  position: absolute;
  right: 22px;
  top: 24px;
  padding: 0px 7px 3px 7px;

  :hover {
    border: 1px solid ${fontColor};
    color: white;
    background-color: ${fontColor};
  }
`;
