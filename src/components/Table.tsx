import React from "react";
import dateData from "../data/dateData.json";
import {
  TableRow,
  TableTable,
  TableHeader,
  TableCell,
  SquareSpan,
  DateCell,
} from "../styling/countryTableStyle";
import { DateTime } from "luxon";
import { getTimezonesForCountry } from "countries-and-timezones";
import { dateColors, defaultDateFormatter } from "./utils";

export default function Table() {
  const randomCountryArray = [...Array(10)].map(
    (e) => ~~(Math.random() * dateData.length)
  );

  //   var orderedCountryArray = [];
  //   for (var i = 0; i <= 6; i++) {
  //     orderedCountryArray.push(i);
  //   }

  return (
    <div>
      <TableTable>
        <TableRow>
          <TableHeader> Country</TableHeader>
          <TableHeader> Date</TableHeader>
          <TableHeader> Notes</TableHeader>{" "}
        </TableRow>
        {randomCountryArray.map((x) => (
          <TableRow key={dateData[x].CountryCode}>
            <TableCell>{dateData[x].FullName}</TableCell>
            <DateCell>
              <SquareSpan
                color={dateColors(dateData[x].DateFormat)}
              ></SquareSpan>
              {DateTime.now()
                .setZone(
                  getTimezonesForCountry(dateData[x].CountryCode)?.map(
                    (x) => x.name
                  )[0]
                )
                .toFormat(
                  dateData[x].DateFormatDefault == "None Specified"
                    ? defaultDateFormatter(dateData[x].DateFormat)
                    : dateData[x].DateFormatDefault
                )
                .toString()}
            </DateCell>
            <TableCell>
              Some Notes would go hear about the country in question.{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableTable>
    </div>
  );
}
