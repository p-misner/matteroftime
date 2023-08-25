import React, { useState, useEffect } from "react";
import {
  getCountriesForTimezone,
  getTimezonesForCountry,
} from "countries-and-timezones";
import { DateTime } from "luxon";
import Select from "react-select";
import { countryCodes } from "../data/dataConstants";
import dateData from "../data/dateData.json";

import {
  BaseText,
  HeroTextWrapper,
  NoteText,
} from "../styling/descriptiveTextStyle";
import TextTooltip from "./Tooltips";

function BoldedText({ text }: { text: string }) {
  return (
    <TextTooltip delay={100} text={text}>
      <span style={{ fontWeight: 700 }}> {text}</span>
    </TextTooltip>
  );
}

// from dropdown, allow change of region selection.
// do dumb dropdown, come back to redesign later
// then, based on region selected, update how date, day of week and weekend looks.
//final step: change note to show alternate timezones within country

function LuxonTime() {
  const [time, setTime] = useState<DateTime>(DateTime.now());
  useEffect(() => {
    const timer = setInterval(() => setTime(DateTime.now()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);
  return time;
}
function defaultDateFormatter(order: string) {
  const firstThree = order.slice(0, 3);
  switch (firstThree) {
    case "DMY":
      return "dd-LL-yyyy*";
    case "MDY":
      return "LL-dd-yyyy*";
    case "YMD":
      return "yyyy-LL-dd*";
    default:
      return "!non!";
  }
}
function isWeekend({
  dayofWeek,
  WorkWeek,
}: {
  dayofWeek: string;
  WorkWeek: string;
}) {
  switch (WorkWeek) {
    case "MtoF":
      if (dayofWeek === "Sunday" || dayofWeek === "Saturday") return true;
      else return false;
    case "SutoTh":
      if (dayofWeek === "Friday" || dayofWeek === "Saturday") return true;
      else return false;
    case "SutoF":
      if (dayofWeek === "Saturday") return true;
      else return false;
    case "SatoTh":
      if (dayofWeek === "Friday") return true;
      else return false;
    case "MtoSa":
      if (dayofWeek === "Sunday") return true;
      else return false;
    default:
      return false;
  }
}
function dayNumberofWeek({
  firstDay,
  dayofWeek,
}: {
  firstDay: string;
  dayofWeek: string;
}) {
  const orderWords = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
  ];
  let weekOrder: string[] = [];
  switch (firstDay) {
    case "Monday":
      weekOrder = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    case "Sunday":
      weekOrder = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    case "Saturday":
      weekOrder = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    default:
      return "error";
  }
}

export default function OverviewText() {
  const [timeZone, setTimezone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [country, setCountry] = useState<string>(
    getCountriesForTimezone(timeZone)[0]?.name
  );

  const countryCode = countryCodes.filter((x) => x.name == country)[0].code;
  const countryDateDetails = dateData.filter(
    (x) => x.CountryCode == countryCode
  )[0];

  const time = LuxonTime().setZone(timeZone);

  const timeZoneLong = time
    .toLocaleString({
      day: "2-digit",
      timeZoneName: "long",
    })
    .slice(4);

  // maybe move this into separate funciton vs ternary
  const timeToSecond = time.toLocaleString(
    countryDateDetails.ClockTypeHour == "12hr"
      ? {
          hour: "numeric",
          minute: "2-digit",
          second: "numeric",
        }
      : {
          hour: "numeric",
          minute: "2-digit",
          second: "numeric",
          ...DateTime.TIME_24_WITH_SECONDS,
        }
  );

  const dayofWeek = time.toLocaleString({ weekday: "long" });

  // maybe move this into separate funciton vs ternary
  const formattedDate = time.toFormat(
    countryDateDetails.DateFormatDefault == "None Specified"
      ? defaultDateFormatter(countryDateDetails.DateFormat)
      : countryDateDetails.DateFormatDefault
  );

  const typeOfDay = isWeekend({
    dayofWeek: dayofWeek,
    WorkWeek: countryDateDetails.WorkWeek,
  })
    ? "weekend"
    : "weekday";

  const dayNumber = dayNumberofWeek({
    dayofWeek: dayofWeek,
    firstDay: countryDateDetails.FirstDayofWeek,
  });

  const allTimeZones = getTimezonesForCountry(countryCode)?.map((x) => x.name);
  // console.log(allTimeZones?.map((x) => x.name));
  //
  return (
    <HeroTextWrapper>
      <BaseText>
        In{" "}
        <Select
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "blue" : "gray",
              fontSize: "24px",
              lineHeight: "32px",
              display: "inline-block",
              margin: "0 0.25em",
              width: "400px",
            }),
          }}
          options={countryCodes.map((x) => ({ value: x.name, label: x.name }))}
          defaultValue={{ label: country, value: country }}
          onChange={(e) => {
            const cc = countryCodes.filter((x) => x.name == e.value)[0].code;
            setTimezone(getTimezonesForCountry(cc)[0].name);
            setCountry(e.value);
          }}
        />
        , today&apos;s date is <BoldedText text={formattedDate} />. Currently{" "}
        <BoldedText text={timeToSecond} /> on a {dayofWeek} in{" "}
        <BoldedText text={timeZoneLong || "none detected"} />, it is the{" "}
        <BoldedText text={dayNumber} /> day of the week and a{" "}
        <BoldedText text={typeOfDay} />.
      </BaseText>

      {allTimeZones?.length > 1 && (
        <NoteText>
          Note: In {country}, there are multiple time zones. Information being
          displayed is for the &quot;{timeZone}&quot; region. Other timezones
          include{" "}
          {allTimeZones?.map((x) => (
            <button type="button" onClick={() => setTimezone(x)} key={x}>
              {x}{" "}
            </button>
          ))}
        </NoteText>
      )}
    </HeroTextWrapper>
  );
}
