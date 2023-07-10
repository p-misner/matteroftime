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
  const formattedDate = time.toFormat(
    countryDateDetails.DateFormatDefault == "None Specified"
      ? defaultDateFormatter(countryDateDetails.DateFormat)
      : countryDateDetails.DateFormatDefault
  );

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
        , today&apos;s date is <BoldedText text={formattedDate} />. Part of the{" "}
        <BoldedText text={timeZoneLong || "none detected"} /> zone, it is
        currently <BoldedText text={timeToSecond} /> on a {dayofWeek}. It&apos;s
        the <BoldedText text="first" /> day of the week and a{" "}
        <BoldedText text="weekday" />.
      </BaseText>

      <NoteText>
        Note: In {country}, there are multiple time zones. Information being
        displayed is for the &quot;{timeZone}&quot; region.
      </NoteText>
    </HeroTextWrapper>
  );
}
