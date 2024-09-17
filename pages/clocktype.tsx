import React from "react";
import {
  HeaderH2,
  HeaderH3,
  OutlinedWrapper,
  PageWrapper,
  Subtitle,
  TextParagraph,
} from "../src/styling/infoPageStyle";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Map from "../src/components/Map";
import PagePreview from "../src/components/PagePreview";
import { vizColors } from "../src/styling/stylingConstants";
import { LegendDataType } from "../src/styling/typeConstants";
import { Legend } from "../src/components/Legend";
import { SummaryCopy } from "../src/components/utils";

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
        <Subtitle>{SummaryCopy({ type: "/clocktype" })}</Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={ClockTypeLegend} />
        <Map type="clocktype" width={960} height={490} />
      </OutlinedWrapper>
      <OutlinedWrapper>
        <HeaderH3> 24 Hour vs 12 Hour Time</HeaderH3>
        <TextParagraph>
          {" "}
          Ofter referred to as military time, the 24 hour clock runs from
          midnight to midnight. This is the most common way to notate time
          around the globe. THe other system used is 12 hour time, running from
          midnight to noon before repeating from noon to midnight with the
          numbers 1 through 12 used twice each day. Even in countries that
          default to the 12 hour clock, like the United States, certain
          industries use the 24 hour clock to tell time to prevent
          misunderstandings when communicating.
        </TextParagraph>
      </OutlinedWrapper>
      <PagePreview />
      <Footer />
    </PageWrapper>
  );
};

export default ClockType;
