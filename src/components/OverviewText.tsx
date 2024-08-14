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
  TimezoneButton,
} from "../styling/descriptiveTextStyle";
import TextTooltip from "./Tooltips";
import { dayNumberofWeek, defaultDateFormatter, isWeekend } from "./utils";

function BoldedText({ text }: { text: string }) {
  return (
    <TextTooltip delay={100} text={text}>
      <span suppressHydrationWarning={true} style={{ fontWeight: 700 }}>
        {" "}
        {text}
      </span>
    </TextTooltip>
  );
}

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

  // maybe move this into separate function vs ternary
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

  // maybe move this into separate function vs ternary
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

  const listOptions = countryCodes.map((x) => ({
    value: x.name,
    label: x.name,
  }));
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
          options={listOptions}
          value={listOptions.find((option) => option.value === country)}
          isOptionSelected={(option) => {
            console.log(option.value == country);
            return option.value == country ? true : false;
          }}
          onChange={(e) => {
            const cc = countryCodes.filter((x) => x.name == e.value)[0].code;
            setTimezone(getTimezonesForCountry(cc)[0].name);
            setCountry(e.value);
          }}
        />
        , the date is <BoldedText text={formattedDate} />. Currently{" "}
        <BoldedText text={timeToSecond} /> on {dayofWeek} in{" "}
        <BoldedText text={timeZoneLong || "none detected"} />, it is the{" "}
        <BoldedText text={dayNumber} /> day of the week and a{" "}
        <BoldedText text={typeOfDay} />.
      </BaseText>

      {allTimeZones?.length > 1 && (
        <NoteText>
          Note: In {country}, there are multiple time zones. Information being
          displayed is for the <span>&quot;{timeZone}&quot;</span> region. Other
          timezones include{" "}
          {allTimeZones
            ?.filter((x) => x !== timeZone)
            .map((x) => (
              <TimezoneButton
                type="button"
                onClick={() => setTimezone(x)}
                key={x}
              >
                {x}{" "}
              </TimezoneButton>
            ))}
        </NoteText>
      )}
    </HeroTextWrapper>
  );
}
