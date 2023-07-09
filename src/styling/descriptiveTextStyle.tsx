/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { heroText, maxWidth } from "./stylingConstants";

export const BaseText = styled.div`
  font-family: "Roboto Mono";
  font-size: ${heroText};
  font-weight: 400;
  line-height: 80px;
`;

export const HeroTextWrapper = styled.div`
  max-width: ${maxWidth};
  margin: 64px auto;
`;

export const NoteText = styled.p`
  color: gray;
  line-height: 130%;
`;
