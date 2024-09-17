import React from "react";
import {
  HeaderH2,
  OutlinedWrapper,
  PageWrapper,
  Subtitle,
} from "../src/styling/infoPageStyle";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

import Map from "../src/components/Map";
import PagePreview from "../src/components/PagePreview";
import { LegendDataType } from "../src/styling/typeConstants";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";
import { SummaryCopy } from "../src/components/utils";

const DaylighSavings = () => {
  const DaylightSavingsLegend: LegendDataType[] = [
    {
      symbol: "square",
      text: "Observed in Northern Hemisphere Summer",
      color: vizColors.brightGreen,
    },
    {
      symbol: "square",
      text: "Observed in Southern Hemisphere Summer",
      color: vizColors.pink,
    },
    {
      symbol: "square",
      text: "Formerly Observed",
      color: vizColors.adamantineBlue,
    },
    { symbol: "square", text: "Never Observed", color: vizColors.pastelPurple },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Daylight Savings</HeaderH2>
        <Subtitle>{SummaryCopy({ type: "/daylightsavings" })}</Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={DaylightSavingsLegend} />
        <Map type="daylightsavings" width={960} height={490} />
      </OutlinedWrapper>

      <PagePreview />
      <Footer />
    </PageWrapper>
  );
};

export default DaylighSavings;
