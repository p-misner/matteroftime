import React from "react";
import {
  EndianWrapper,
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
import { LegendDataType } from "../src/styling/typeConstants";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";
import Image from "next/image";
import { SummaryCopy } from "../src/components/utils";

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
        <Subtitle>{SummaryCopy({ type: "/firstday" })}</Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={FirstDayLegend} />
        <Map type="firstday" width={960} height={490} />
      </OutlinedWrapper>
      <OutlinedWrapper>
        <HeaderH3> Origin of the 7 Day Week</HeaderH3>

        <TextParagraph>
          The seven-day week has no basis in any astronomical event, and for a
          while, different cultures had varying lengths of time that made up a
          week. The ancient Egyptians had a ten-day week, while the Etruscans
          followed an eight-day workweek that was initially adopted by the
          Romans. It is theorized that the Babylonians based their week on the
          seven celestial bodies (Sun, Moon, Mercury, Venus, Mars, Jupiter, and
          Saturn), and neighboring territories began to adopt the seven-day week
          as well.
        </TextParagraph>
        <HeaderH3> Beginning of the Week</HeaderH3>
        <TextParagraph>
          While all modern day cultures agree on the length of a week, the
          starting day has some variation around the world.
        </TextParagraph>
        <EndianWrapper>
          <Image
            src="/images/DaysofWeekGraphic.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "600px",
            }}
            alt="Picture of three week calendars, the first starting on Monday, the second starting on Sunday and the third starting on Saturday"
          />
        </EndianWrapper>
        <TextParagraph>
          Many countries with Catholic/Protestant origins begin their week on
          Sunday, influenced in part by the Sabbath being on Sunday. Influenced
          by Islamic traditions, the first day of the week is Saturday in many
          Middle Eastern and North African countries, while the majority of
          Europe begins their week on a Monday. The International Organization
          for Standardization (ISO) counts Monday as the first day of the week
          for recordkeeping.
        </TextParagraph>
      </OutlinedWrapper>
      <PagePreview />
      <Footer />
    </PageWrapper>
  );
};

export default FirstDay;
