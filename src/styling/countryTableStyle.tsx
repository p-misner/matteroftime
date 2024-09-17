import styled from "styled-components";
import {
  fontFamily,
  fontWeight,
  maxWidth,
  spacingBlocks,
} from "./stylingConstants";

export const TableWrapper = styled.div``;

export const TableTable = styled.table`
  border: 2px solid black;
  width: 100%;
  max-width: 1092px;
  margin: 0px auto;
  border-spacing: 20px;
`;
export const TableHeader = styled.th`
  text-align: left;
  font-weight: ${fontWeight.semibold};
  padding: ${spacingBlocks.small} ${spacingBlocks.small} ${spacingBlocks.small}
    32px;
  font-family: ${fontFamily.sanserif};
`;
export const TableRow = styled.tr`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;
export const TableCell = styled.td`
  padding: ${spacingBlocks.medium} ${spacingBlocks.medium}
    ${spacingBlocks.medium} 32px;
`;
export const DateCell = styled.td`
  padding: ${spacingBlocks.medium} ${spacingBlocks.medium}
    ${spacingBlocks.medium} 32px;
  display: flex;
  align-items: center;
  :first-child {
    font-weight: ${fontWeight.semibold};
  }
`;

type SquareSpanType = {
  color: string;
};
export const SquareSpan = styled.div<SquareSpanType>`
  width: 16px;
  height: 16px;
  border: 2px solid black;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  margin-right: ${spacingBlocks.small};
`;

// export const TableHeader
