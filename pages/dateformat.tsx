import React from "react";
import Image from "next/image";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import {
  BoldedCell,
  BracketsSpan,
  EndianWrapper,
  HeaderH2,
  HeaderH3,
  OutlinedWrapper,
  Subtitle,
  TableHeader,
  TableRow,
  TableTable,
  TableWrapper,
  TextParagraph,
  PageWrapper,
  TableCell,
} from "../src/styling/infoPageStyle";
import { vizColors } from "../src/styling/stylingConstants";
import { Legend } from "../src/components/Legend";
import { LegendDataType } from "../src/styling/typeConstants";
import Map from "../src/components/Map";
import { LegendSymbol } from "../src/styling/legendStyle";
import PagePreview from "../src/components/PagePreview";
import { SummaryCopy } from "../src/components/utils";
const DateFormat = () => {
  const DateFormatLegend: LegendDataType[] = [
    { symbol: "square", text: "DMY", color: vizColors.brightGreen },
    { symbol: "square", text: "DMY/YMD", color: vizColors.pastelPurple },
    { symbol: "square", text: "YMD", color: vizColors.yellow },
    { symbol: "square", text: "MDY/YMD", color: vizColors.adamantineBlue },
    { symbol: "square", text: "DMY/MDY", color: vizColors.pink },
    { symbol: "square", text: "MDY/YMD/DMY", color: vizColors.neonSeaFoam },
  ];
  return (
    <PageWrapper>
      <Header />
      <OutlinedWrapper>
        <HeaderH2> Date Format</HeaderH2>
        <Subtitle>{SummaryCopy({ type: "/dateformat" })}</Subtitle>
      </OutlinedWrapper>
      <OutlinedWrapper>
        <Legend legendData={DateFormatLegend} />
        <Map type="dateformat" width={960} height={490} />
      </OutlinedWrapper>
      <OutlinedWrapper>
        <HeaderH3> Endianness aka Date Order</HeaderH3>
        <TextParagraph>
          The order in which the day, month and year for a date is written is
          known as it&apos;s &#39;endianess&#39;. Generally dates are written
          from either smallest magnitude to biggest magnitude or vice versa. The
          United States takes a different tack and is the primary country to use
          Middle Endian for most date formatting.{" "}
        </TextParagraph>
        <EndianWrapper>
          <Image
            src="/images/AllEndian.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", maxWidth: "800px" }}
            alt="Picture of the author"
          />
        </EndianWrapper>

        <HeaderH3>Formatting</HeaderH3>
        <TextParagraph>
          While order is a key part of writing dates, there are also variations
          in the way countries write out the days, months, and years in a date.
          For example, January can be written as “1,” “01,” or “Jan,” depending
          on the country convention. By pairing the endianness with the
          different forms of day, month, and year, you can write the same date
          in many different ways.{" "}
        </TextParagraph>
        <TextParagraph>
          Exact formats are defined and communicated using the shorthand below:
        </TextParagraph>
        <TableWrapper>
          <TableTable>
            <TableRow>
              <TableHeader>
                <LegendSymbol
                  color={vizColors.brightGreen}
                  symbol={"square"}
                ></LegendSymbol>
                Day
              </TableHeader>
            </TableRow>
            <TableRow>
              <BoldedCell>d</BoldedCell>
              <TableCell>
                one-digit for days below ten. <BracketsSpan>[2]</BracketsSpan>
              </TableCell>
            </TableRow>
            <TableRow>
              <BoldedCell>dd</BoldedCell>
              <TableCell>
                two-digits for days below ten. <BracketsSpan>[02]</BracketsSpan>
              </TableCell>
            </TableRow>
            <TableRow>
              <BoldedCell>ddd</BoldedCell>
              <td>
                three-letter abbreviation for day of the week{" "}
                <BracketsSpan>[Fri]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>dddd</BoldedCell>
              <td>
                day of the week spelled out in full{" "}
                <BracketsSpan>[Friday]</BracketsSpan>
              </td>
            </TableRow>
          </TableTable>

          <TableTable>
            <TableRow>
              <TableHeader>
                {" "}
                <LegendSymbol
                  color={vizColors.adamantineBlue}
                  symbol={"square"}
                ></LegendSymbol>
                Month
              </TableHeader>
            </TableRow>
            <TableRow>
              <BoldedCell>m</BoldedCell>
              <td>
                one-digit for months below 10 <BracketsSpan>[4]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>mm</BoldedCell>
              <td>
                two-digits for months below ten.{" "}
                <BracketsSpan>[04]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>mmm</BoldedCell>
              <td>
                three-letter abbreviation for month{" "}
                <BracketsSpan>[Apr]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>mmmm</BoldedCell>
              <td>
                month spelled out in full <BracketsSpan>[April]</BracketsSpan>
              </td>
            </TableRow>
          </TableTable>
        </TableWrapper>
        <TableWrapper>
          <TableTable>
            <TableRow>
              <TableHeader>
                <LegendSymbol
                  color={vizColors.yellow}
                  symbol={"square"}
                ></LegendSymbol>
                Year
              </TableHeader>
            </TableRow>
            <TableRow>
              <BoldedCell>yy</BoldedCell>
              <td>
                two-digit year <BracketsSpan>[24]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>yyyy</BoldedCell>
              <td>
                four-digits year <BracketsSpan>[2024]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>-</BoldedCell>
            </TableRow>
          </TableTable>

          <TableTable>
            <TableRow>
              <TableHeader>
                {" "}
                <LegendSymbol color="#ffffff" symbol={"square"}></LegendSymbol>
                Separators
              </TableHeader>
            </TableRow>
            <TableRow>
              <BoldedCell>/</BoldedCell>
              <td>
                oblique stroke <BracketsSpan>[slash]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>.</BoldedCell>
              <td>
                full stop, dot or point <BracketsSpan>[period]</BracketsSpan>
              </td>
            </TableRow>
            <TableRow>
              <BoldedCell>-</BoldedCell>
              <td>
                hyphen <BracketsSpan>[dash]</BracketsSpan>
              </td>
            </TableRow>
          </TableTable>
        </TableWrapper>
        {/* <HeaderH3> Table of Selected Countries</HeaderH3> */}
      </OutlinedWrapper>
      {/* <Table></Table> */}

      <PagePreview />
      <Footer />
    </PageWrapper>
  );
};
export default DateFormat;
