/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import {
  fontColor,
  fontFamily,
  fontSize,
  spacingBlocks,
} from "./stylingConstants";
import { LegendDataType, HEX, RGB, RGBA } from "../styling/typeConstants";

export const LegendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: ${spacingBlocks.medium};
`;
export const LegendItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: flex-start;
  align-items: center;
  margin-right: 24px;
  margin-top: 8px;
`;

type LegendSymbolType = {
  symbol: "square" | "circle";
  color: HEX | RGB | RGBA;
};
export const LegendSymbol = styled.div<LegendSymbolType>`
  width: 16px;
  height: 16px;
  background-color: ${(props) => (props.color ? props.color : "red")};
  border: 2px solid ${fontColor};
  border-radius: ${(props) => (props.symbol == "square" ? "2px" : "16px")};
  margin-right: 4px;
`;

export const LegendText = styled.p`
  font-family: ${fontFamily.sanserif};
  text-transform: capitalize;
  font-size: ${fontSize.regular};
`;
