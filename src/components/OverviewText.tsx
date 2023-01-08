import React, { useState, useEffect } from "react";

import { BaseText, HeroTextWrapper } from "../styling/descriptiveTextStyle";
import TextTooltip from "./Tooltips";

function CountryDropdown() {}

function BoldedText({ text }: { text: string }) {
  return (
    <TextTooltip delay={100} text={text}>
      <span style={{ fontWeight: 700 }}> {text}</span>
    </TextTooltip>
  );
}

export default function OverviewText() {
  const [time, setTime] = useState<Date>(new Date());
  const timeZoneLong = time
    .toLocaleDateString("en-US", {
      day: "2-digit",
      timeZoneName: "long",
    })
    .slice(4);

  const timeToSecond = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "numeric",
  });

  const DayofWeek = time.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <HeroTextWrapper>
      <BaseText>
        In your location, todays date is <BoldedText text="01/03/2023" />. In
        the <BoldedText text={timeZoneLong || "none detected"} /> zone, it is
        currently <BoldedText text={timeToSecond} /> on a {DayofWeek}. It is the{" "}
        <BoldedText text="first" /> day of the week and a{" "}
        <BoldedText text="weekday" />.
      </BaseText>
    </HeroTextWrapper>
  );
}
