import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {
  HeaderH2,
  OutlinedWrapper,
  Subtitle,
} from "../src/styling/infoPageStyle";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";
import { LegendDataType } from "../src/styling/typeConstants";
import GeoCustom from "../src/components/Map";
const Blog = () => {
  const DummyData: LegendDataType[] = [
    { symbol: "square", text: "DMY", color: vizColors.adamantineBlue },
    { symbol: "square", text: "DMY/YMD", color: vizColors.brightGreen },
    { symbol: "square", text: "YMD", color: vizColors.neonSeaFoam },
    { symbol: "square", text: "MDY/YMD", color: vizColors.pink },
    { symbol: "square", text: "DMY/MDY", color: vizColors.yellow },
    { symbol: "square", text: "MDY/YMD/DMY", color: vizColors.pastelPurple },
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
        <GeoCustom width={960} height={490} />
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
