import React from "react";
import { BaseText, HeroTextWrapper } from "../styling/descriptiveTextStyle";

function CountryDropdown() {}

function Tooltip() {}

function BoldedText({ text }: { text: string }) {
  return <span style={{ fontWeight: 700 }}> {text}</span>;
}

export default function OverviewText() {
  return (
    <HeroTextWrapper>
      <BaseText>
        In United States the date is currently <BoldedText text="01/03/2023" />.
        It is <BoldedText text="5:47:32am" /> in the{" "}
        <BoldedText text="Eastern Time Zone" /> and a Monday, the{" "}
        <BoldedText text="first" /> day of the week and a{" "}
        <BoldedText text="weekday" />.
      </BaseText>
    </HeroTextWrapper>
  );
}
