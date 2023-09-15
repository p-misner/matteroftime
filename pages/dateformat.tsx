import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {
  HeaderH2,
  OutlinedWrapper,
  Subtitle,
} from "../src/styling/infoPageStyle";
import { Legend } from "../src/components/Legend";
import { LegendDataType } from "../src/styling/typeConstants";

const Blog = () => {
  const DummyData: LegendDataType[] = [
    { symbol: "square", text: "text here", color: "#00f" },
    { symbol: "square", text: "text here 2", color: "#f0f" },
    { symbol: "square", text: "text here 3", color: "#0ff" },
  ];
  return (
    <div>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Date Format</HeaderH2>
        <Subtitle>
          {" "}
          How countries around the world write today’s date. Month first? Day
          first? Everyone has an opinion.And a second line of text to further
          describe wtf is going on.
        </Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={DummyData} />
        <p> map here</p>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <HeaderH2> Endianness aka Date Order</HeaderH2>
        <p> map here</p>

        <HeaderH2> Endian Order And Time</HeaderH2>
        <p> map here</p>

        <HeaderH2>Formatting</HeaderH2>
        <p> map here</p>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <p> navigation</p>
      </OutlinedWrapper>
      <Footer />
    </div>
  );
};
export default Blog;
