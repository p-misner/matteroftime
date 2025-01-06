import React from "react";
import Link from "next/link";
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

const WeekdayWeekend = () => {
  const WeekendWeekdayLegend: LegendDataType[] = [
    { symbol: "square", text: "M→F", color: vizColors.pastelPurple },
    { symbol: "square", text: "M→Sa", color: vizColors.adamantineBlue },
    { symbol: "square", text: "Su→Th", color: vizColors.brightGreen },
    { symbol: "square", text: "Su→F", color: vizColors.pink },
    { symbol: "square", text: "Sa→Th", color: vizColors.yellow },
    { symbol: "square", text: "mixed", color: vizColors.neonSeaFoam },
    { symbol: "square", text: "M→Th+Sa", color: "#000" },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Weekday vs Weekend</HeaderH2>
        <Subtitle>{SummaryCopy({ type: "/weekdayweekend" })}</Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={WeekendWeekdayLegend} />
        <Map type="weekdayweekend" width={960} height={490} />
      </OutlinedWrapper>
      <OutlinedWrapper>
        <HeaderH3>The Creation of a Weekend</HeaderH3>
        <TextParagraph>
          Even once the seven-day week was accepted as the norm (read more at{" "}
          <Link href="/firstday">First Day of the Week</Link>), days of rest
          were not a standard weekly feature. In most societies, holy days
          occurred throughout the year and gave people the day off from work to
          celebrate and rest. Islam, Judaism, and Christianity all had a
          singular day of worship and rest: traditionally, Muslims had Friday
          off, Jews observed their rest day on Saturday, and Christians on
          Sunday.
        </TextParagraph>

        <EndianWrapper>
          <Image
            src="/images/test2.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "800px",
            }}
            alt="Picture of three week calendars, the first starting on Monday, the second starting on Sunday and the third starting on Saturday"
          />
        </EndianWrapper>
        <TextParagraph>
          During the Industrial Revolution, shift work became increasingly
          common, and many workers adhered to a twelve-hour day, six-day
          workweek, giving them a single day for rest or worship. In the United
          States, as working conditions deteriorated, unions and workers
          campaigned for and secured a standardized eight-hour workday, but a
          six-day workweek remained the norm. In 1926, Henry Ford gave workers
          Saturday off along with Sunday. In 1933, under President Franklin
          Roosevelt, the Ford week inspired a collection of industry codes in
          the United States that stated the 40-hour (or 5-day) workweek would be
          the standard. Many other countries have since adopted similar
          standards, but variations in religious and labor practices account for
          a variation in workweeks and weekend lengths around the world.
        </TextParagraph>
      </OutlinedWrapper>
      <PagePreview />
      <Footer />
    </PageWrapper>
  );
};

export default WeekdayWeekend;
