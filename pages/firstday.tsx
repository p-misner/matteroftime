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
import Map from "../src/components/Map";
import PagePreview from "../src/components/PagePreview";
import { LegendDataType } from "../src/styling/typeConstants";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";
import Image from "next/image";

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
      <OutlinedWrapper>
        <HeaderH3> Origin of the 7 Day Week</HeaderH3>
        <TextParagraph>
          {" "}
          The seven day week has no basis in any astronomical phenomenon and for
          a while, different cultures had varying lengths of time that made up a
          week. The ancient egyptians had a ten day week while while the
          Etruscans followed an eight day work week that was initally adopted by
          the Romans. In 321 CE, Emperor [NAME] decreed that the Roman empire
          would be following the seven day week and slowly this standard was
          adopted around the world.
        </TextParagraph>
        <TextParagraph>
          The seven day week has no basis in any astronomical event and for a
          while, different cultures had varying lengths of time that made up a
          week. The ancient egyptians had a ten day week while while the
          Etruscans followed an eight day work week that was initally adopted by
          the Romans. It is theorized that the Babylonians based their week on
          the seven celestial bodies (Sun, Moon, Mercury, Venus, Mars, Jupiter
          and Saturn) and neighboring territories began to adopt the unit as
          well. In 321 CE, Emperor [NAME] decreed that the Roman empire would be
          following the seven day week, acclerating the adoption of the this
          standard around the world.
        </TextParagraph>
        <HeaderH3> Beginning of the Week</HeaderH3>
        <TextParagraph>
          While all modern day cultures agree on the lenght of a week, the
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
          Sunday, influenced in part by the Sabath being on Sunday. Influenced
          by Islamic traditions, the first day of the week is Saturday in many
          Middle Eastern and North African countries while the majority of
          Europe begins their week on a Monday. The International Organization
          for Standardization (ISO) counts Monday as the first day of their week
          for recordkeeping.
        </TextParagraph>
      </OutlinedWrapper>
      <PagePreview />
    </PageWrapper>
  );
};

export default FirstDay;
