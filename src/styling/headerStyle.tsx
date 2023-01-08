/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";

import { h2, fontColor, maxWidth } from "./stylingConstants";

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

export const HeaderH2 = styled.h2`
  font-size: ${h2};
  font-family: Outfit;
  color: ${fontColor};
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
  font-size: ${h2};
  font-family: Outfit;
`;
