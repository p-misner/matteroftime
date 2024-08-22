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

const FirstDay = () => {
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
        <Map type="clocktype" width={960} height={490} />
      </OutlinedWrapper>
      <PagePreview />
    </PageWrapper>
  );
};

export default FirstDay;
