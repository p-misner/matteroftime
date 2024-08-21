import React from "react";
import {
  HeaderH2,
  OutlinedWrapper,
  PageWrapper,
  Subtitle,
} from "../src/styling/infoPageStyle";
import Header from "../src/components/Header";
import Map from "../src/components/Map";

const WeekdayWeekend = () => {
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
        <Map type="weekdayweekend" width={960} height={490} />
      </OutlinedWrapper>
    </PageWrapper>
  );
};

export default WeekdayWeekend;
