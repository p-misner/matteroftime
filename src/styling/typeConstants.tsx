export type RGB = `rgb(${number}, ${number}, ${number})`;
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HEX = `#${string}`;

export interface LegendDataType {
  symbol: "square" | "circle";
  text: string;
  color: HEX | RGB | RGBA;
}
