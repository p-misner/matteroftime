import React from "react";
import {
  LegendItemWrapper,
  LegendSymbol,
  LegendText,
  LegendWrapper,
} from "../styling/legendStyle";
import { LegendDataType } from "../styling/typeConstants";

export function Legend({ legendData }: { legendData: LegendDataType[] }) {
  return (
    <LegendWrapper>
      {" "}
      {legendData.map((x) => (
        <LegendItemWrapper key={x.text}>
          <LegendSymbol color={x.color} symbol={x.symbol} />
          <LegendText> {x.text}</LegendText>
        </LegendItemWrapper>
      ))}{" "}
    </LegendWrapper>
  );
}
