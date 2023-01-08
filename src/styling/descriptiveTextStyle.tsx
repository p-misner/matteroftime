/* eslint-disable import/prefer-default-export */
import React from "react";
import styled from "styled-components";
import { heroText, maxWidth } from "./stylingConstants";

export const BaseText = styled.p`
  font-family: "Roboto Mono";
  font-size: ${heroText};
  font-weight: 400;
  line-height: 80px;
`;

export const HeroTextWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 64px auto;
`;
