import styled from "styled-components";
import { fontSize, fontColor, fontWeight, maxWidth } from "./stylingConstants";

export const HeaderH2 = styled.h2`
  font-size: ${fontSize.xlarge};
  font-family: Outfit;
  color: ${fontColor};
  font-weight: ${fontWeight.semibold};
`;

export const OutlinedWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 0px auto;
  padding: 24px;
  border-left: 2px black solid;
  border-right: 2px black solid;
  border-bottom: 2px black solid;
`;

export const Subtitle = styled.p`
  margin-top: 16px;
  color: ${fontColor};
  font-family: Roboto Mono;
  font-size: ${fontSize.regular};
  line-height: normal;
`;
