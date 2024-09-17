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
  TimezoneBlackButton,
  TimezoneButton,
} from "../styling/descriptiveTextStyle";
import TextTooltip from "./OverviewTextTooltips";
import { dayNumberofWeek, defaultDateFormatter, isWeekend } from "./utils";

function BoldedText({ text, link }: { text: string; link: string }) {
  return (
    <TextTooltip link={link} delay={100} text={text}>
      <span suppressHydrationWarning={true} style={{ fontWeight: 700 }}>
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

  const [overflow, setOverflow] = useState<boolean>(true);
  const [formattedDate, setFormattedDate] = useState<string>("-");
  const countryCode = countryCodes.filter((x) => x.name == country)[0]?.code;
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
    countryDateDetails?.ClockTypeHour == "12hr"
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
  // const formattedDate = time?.toFormat(
  //   countryDateDetails?.DateFormatDefault == "None Specified"
  //     ? defaultDateFormatter(countryDateDetails?.DateFormat)
  //     : countryDateDetails?.DateFormatDefault
  // );

  // let formattedDate = "holder";
  useEffect(() => {
    setFormattedDate(
      time?.toFormat(
        countryDateDetails?.DateFormatDefault == "None Specified"
          ? defaultDateFormatter(countryDateDetails?.DateFormat)
          : countryDateDetails?.DateFormatDefault
      )
    );
  }, [time]);

  const typeOfDay = isWeekend({
    dayofWeek: dayofWeek,
    WorkWeek: countryDateDetails?.WorkWeek,
  })
    ? "weekend"
    : "weekday";

  const dayNumber = dayNumberofWeek({
    dayofWeek: dayofWeek,
    firstDay: countryDateDetails?.FirstDayofWeek,
  });

  const allTimeZones = getTimezonesForCountry(countryCode)?.map((x) => x.name);

  const listOptions = countryCodes.map((x) => ({
    value: x.name,
    label: x.code == "US" ? "USA" : x.name,
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
              "@media only screen and (max-width: 580px)": {
                width: "300px",
                fontSize: "20px",
              },
            }),
          }}
          options={listOptions}
          value={listOptions.find((option) => option.value === country)}
          isOptionSelected={(option) => {
            return option.value == country ? true : false;
          }}
          onChange={(e) => {
            if (e) {
              const cc = countryCodes.filter((x) => x.name == e.value)[0]?.code;
              setTimezone(getTimezonesForCountry(cc)![0].name);

              setCountry(e.value);
            }
          }}
        />
        , the date is <BoldedText text={formattedDate} link={"/dateformat"} />.
        Currently <BoldedText text={timeToSecond} link={"/clocktype"} /> on{" "}
        {dayofWeek} in{" "}
        <BoldedText
          text={timeZoneLong || "none detected"}
          link={"/daylightsavings"}
        />
        , it is the <BoldedText text={dayNumber} link={"/firstday"} /> day of
        the week and a <BoldedText text={typeOfDay} link={"/weekdayweekend"} />.
      </BaseText>

      {countryDateDetails?.DateFormatDefault.includes("None") && (
        <NoteText>
          * date format not specifically stated, defaults to international
          standard
        </NoteText>
      )}

      {allTimeZones && allTimeZones?.length > 1 && (
        <NoteText>
          Note: Information being displayed is for the{" "}
          <span>&quot;{timeZone}&quot;</span> region. Other regions include{" "}
          {allTimeZones
            ?.filter((x) => x !== timeZone)
            .filter((x, i) => (overflow ? i < 5 : i >= 0))
            .map((x) => (
              <TimezoneButton
                type="button"
                onClick={() => setTimezone(x)}
                key={x}
              >
                {x}{" "}
              </TimezoneButton>
            ))}
          {overflow && allTimeZones && allTimeZones.length > 5 ? (
            <TimezoneBlackButton
              type="button"
              onClick={() => setOverflow(false)}
            >
              Show More
            </TimezoneBlackButton>
          ) : allTimeZones.length <= 5 ? null : (
            <TimezoneBlackButton
              type="button"
              onClick={() => setOverflow(true)}
            >
              Show Less
            </TimezoneBlackButton>
          )}
        </NoteText>
      )}
    </HeroTextWrapper>
  );
}
