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

  const dayofWeek = time.toLocaleDateString("en-US", { weekday: "long" });

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  // const dateFormatted = time.toLocaleDateString("en-US", { year: "long" });
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <HeroTextWrapper>
      <BaseText>
        In your location, today&apos;s date is{" "}
        <BoldedText text={formattedDate} />. In the{" "}
        <BoldedText text={timeZoneLong || "none detected"} /> zone, it is
        currently <BoldedText text={timeToSecond} /> on a {dayofWeek}. It&apos;s
        the <BoldedText text="first" /> day of the week and a{" "}
        <BoldedText text="weekday" />.
      </BaseText>
    </HeroTextWrapper>
  );
}
