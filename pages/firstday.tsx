import React from "react";
import {
  HeaderH2,
  OutlinedWrapper,
  PageWrapper,
  Subtitle,
} from "../src/styling/infoPageStyle";
import Header from "../src/components/Header";
import Map from "../src/components/Map";
import PagePreview from "../src/components/PagePreview";
import { LegendDataType } from "../src/styling/typeConstants";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";

const FirstDay = () => {
  const FirstDayLegend: LegendDataType[] = [
    { symbol: "square", text: "Monday", color: vizColors.pastelPurple },
    { symbol: "square", text: "Saturday", color: vizColors.adamantineBlue },
    { symbol: "square", text: "Sunday", color: vizColors.brightGreen },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> First Day of the Week</HeaderH2>
        <Subtitle>
          How countries around the world write today’s date. Month first? Day
          first? Everyone has an opinion.And a second line of text to further
          describe wtf is going on.
        </Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={FirstDayLegend} />
        <Map type="firstday" width={960} height={490} />
      </OutlinedWrapper>
      <PagePreview />
    </PageWrapper>
  );
};

export default FirstDay;
