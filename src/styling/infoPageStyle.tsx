import styled from "styled-components";
import {
  fontSize,
  fontColor,
  fontWeight,
  maxWidth,
  spacingBlocks,
  fontFamily,
  vizColors,
} from "./stylingConstants";
import { HEX } from "./typeConstants";

export const HeaderH2 = styled.h2`
  font-size: ${fontSize.xlarge};
  font-family: ${fontFamily.sanserif};
  color: ${fontColor};
  font-weight: ${fontWeight.semibold};
`;
export const HeaderH3 = styled.h3`
  font-size: ${fontSize.large};
  font-family: ${fontFamily.sanserif};
  color: ${fontColor};
  font-weight: ${fontWeight.semibold};
`;

export const HeaderH4 = styled.h4`
  font-size: ${fontSize.regular};
  font-family: "Roboto Mono";
  color: ${fontColor};
  font-weight: ${fontWeight.semibold};
  margin-bottom: ${spacingBlocks.small};
`;

export const PageWrapper = styled.div`
  // margin: 24px;
`;

export const OutlinedWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 0px auto;
  padding: 24px 32px;
  border-left: 2px black solid;
  border-right: 2px black solid;
  border-bottom: 2px black solid;
  h3:not(:first-child) {
    margin-top: ${spacingBlocks.medium};
  }
`;

export const Subtitle = styled.p`
  margin-top: 16px;
  color: ${fontColor};
  font-family: Roboto Mono;
  font-size: ${fontSize.regular};
  line-height: 1.6;
`;

export const TextParagraph = styled.p`
  margin-top: ${spacingBlocks.normal};
  line-height: normal;
  max-width: ${maxWidth};
`;

export const EndianWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  // max-width: 700px;
`;

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
export const TableTable = styled.table`
  border: 2px solid black;
  width: 45%;
  max-width: 400px;
  min-width: 300px;
  margin-bottom: ${spacingBlocks.normal};
  :first-child {
    margin-right: ${spacingBlocks.normal};
  }
`;
export const TableHeader = styled.th`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-weight: ${fontWeight.semibold};
  padding: ${spacingBlocks.small};
`;
export const TableRow = styled.tr`
  border-top: 1px solid black;
  line-height: 22px;
`;
export const BoldedCell = styled.td`
  font-weight: ${fontWeight.semibold};
  padding: ${spacingBlocks.small};
  vertical-align: middle;
`;

export const TableCell = styled.td`
  vertical-align: middle;
`;
export const BracketsSpan = styled.span`
  opacity: 0.5;
`;

export const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: auto;
`;

export const TooltipTip = styled.div`
  position: absolute;
  left: 0%;
  top: 15%;
  transform: translate(0%, -15%);
  z-index: 100;
  white-space: nowrap;
  background: white;
  border: 2px solid black;
  font-weight: 700;
  p {
    margin: 0px 16px;
  }
`;

type ColorDivInput = {
  color?: HEX;
};
export const ColorDiv = styled.div`
  background: ${(props) => (props.color ? props.color : "white")};
  font-family: Outfit;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  border-top: 2px solid black;
  cursor: pointer;
  padding: 8px 16px;
`;
