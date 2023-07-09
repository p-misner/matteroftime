import React, { useState, useEffect } from "react";
import { getCountriesForTimezone } from "countries-and-timezones";
import { DateTime } from "luxon";

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
  // const time = EffectTime();
  const time = LuxonTime().setZone(timeZone);
  const timeZoneLong = time
    .toLocaleString({
      day: "2-digit",
      timeZoneName: "long",
    })
    .slice(4);

  const timeToSecond = time.toLocaleString({
    hour: "numeric",
    minute: "2-digit",
    second: "numeric",
  });

  const dayofWeek = time.toLocaleString({ weekday: "long" });

  const formattedDate = time.toLocaleString({
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <HeroTextWrapper>
      <button
        type="button"
        onClick={() => {
          setTimezone("Africa/Kigali");
          setCountry(getCountriesForTimezone("Africa/Kigali")[0]?.name);
          // alert("clicked");
        }}
      >
        change
      </button>
      <BaseText>
        In <BoldedText text={country} />, today&apos;s date is{" "}
        <BoldedText text={formattedDate} />. In the{" "}
        <BoldedText text={timeZoneLong || "none detected"} /> zone, it is
        currently <BoldedText text={timeToSecond} /> on a {dayofWeek}. It&apos;s
        the <BoldedText text="first" /> day of the week and a{" "}
        <BoldedText text="weekday" />.
      </BaseText>

      {/* <BaseText>
        In <BoldedText text={country} />, today&apos;s date is{" "}
        <BoldedText text={timeLuxon.toLocaleString()} />. In the{" "}
        <BoldedText
          text={timeLuxon
            .toLocaleString({
              day: "2-digit",
              timeZoneName: "long",
            })
            .slice(4)}
        />
        , it is currently{" "}
        <BoldedText
          text={timeLuxon.toLocaleString({
            hour: "numeric",
            minute: "2-digit",
            second: "numeric",
          })}
        />
      </BaseText> */}
      <NoteText>
        Note: In {country}, there are multiple time zones. Information being
        displayed is for the &quot;{timeZone}&quot; region.
      </NoteText>
    </HeroTextWrapper>
  );
}
