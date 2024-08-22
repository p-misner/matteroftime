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
import { vizColors } from "../src/styling/stylingConstants";
import { LegendDataType } from "../src/styling/typeConstants";
import { Legend } from "../src/components/Legend";

const ClockType = () => {
  const ClockTypeLegend: LegendDataType[] = [
    { symbol: "square", text: "12hr", color: vizColors.adamantineBlue },
    { symbol: "square", text: "12hr and 24hr", color: vizColors.brightGreen },
    { symbol: "square", text: "24hr", color: vizColors.pastelPurple },
    { symbol: "square", text: "24hr (12hr orally)", color: vizColors.yellow },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Clock Type</HeaderH2>
        <Subtitle>
          How countries around the world write today’s date. Month first? Day
          first? Everyone has an opinion.And a second line of text to further
          describe wtf is going on.
        </Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={ClockTypeLegend} />
        <Map type="clocktype" width={960} height={490} />
      </OutlinedWrapper>
      <PagePreview />
    </PageWrapper>
  );
};

export default ClockType;
