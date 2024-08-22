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

const WeekdayWeekend = () => {
  const WeekendWeekdayLegend: LegendDataType[] = [
    { symbol: "square", text: "M→F", color: vizColors.pastelPurple },
    { symbol: "square", text: "M→Sa", color: vizColors.adamantineBlue },
    { symbol: "square", text: "Su→Th", color: vizColors.brightGreen },
    { symbol: "square", text: "Sa→Th", color: vizColors.pink },
    { symbol: "square", text: "Sa→W", color: vizColors.neonSeaFoam },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Weekday vs Weekend</HeaderH2>
        <Subtitle>
          How countries around the world write today’s date. Month first? Day
          first? Everyone has an opinion.And a second line of text to further
          describe wtf is going on.
        </Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={WeekendWeekdayLegend} />
        <Map type="weekdayweekend" width={960} height={490} />
      </OutlinedWrapper>
      <PagePreview />
    </PageWrapper>
  );
};

export default WeekdayWeekend;
