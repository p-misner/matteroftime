/* eslint-disable import/prefer-default-export */
import React from "react";

export const tabletBreakpoint = "768px";
export const mobileBreakpoint = "580px";
export const maxWidth = "1024px";
export const heroText = "32px";

/* Colors */
export const fontColor = "#000";

/* Font */
export const fontSize = {
  small: "14px",
  regular: "18px",
  large: "24px",
  xlarge: "32px",
};

export const fontFamily = {
  sanserif: "Outfit, Helvetica, san-serif",
  mono: "Roboto Mono, monospace",
};

export const fontWeight = {
  semibold: 600,
};
export const spacingBlocks = {
  xsmall: "4px",
  small: "8px",
  normal: "16px",
  medium: "24px",
  large: "48px",
};

export type HEX = `#${string}`;
export const vizColors: {
  yellow: HEX;
  brightGreen: HEX;
  adamantineBlue: HEX;
  pastelPurple: HEX;
  pink: HEX;
  neonSeaFoam: HEX;
} = {
  yellow: "#F9D147",
  brightGreen: "#9BE400",
  adamantineBlue: "#4BADF8",
  pastelPurple: "#9980FA",
  pink: "#FA80D8",
  neonSeaFoam: "#1ADB9A",
};
