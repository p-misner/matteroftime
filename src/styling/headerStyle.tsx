/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

import { fontSize, fontColor, maxWidth, fontFamily } from "./stylingConstants";
import Link from "next/link";

export const FullWidth = styled.div`
  border-bottom: 2px solid ${fontColor};
  background: white;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: ${maxWidth};
  justify-content: space-between;
  align-items: center;
  margin: 12px auto;
`;

export const HeaderH3 = styled.h2`
  font-size: ${fontSize.large};
  font-family: ${fontFamily.sanserif};
  color: ${fontColor};
`;

export const UnStyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;¬
  }
`;

export const AboutBox = styled.div`
  border: 2px solid ${fontColor};
  height: 29px;
  width: 32px;
  text-align: center;
  padding-top: 3px;
  color: ${fontColor};

  &:hover {
    background: ${fontColor};
    cursor: pointer;
    color: white;
  }
`;

export const Question = styled.p`
  font-size: ${fontSize.large};
  font-family: ${fontFamily.sanserif};
`;
