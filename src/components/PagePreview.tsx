import React from "react";
import styled from "styled-components";
import Link from "next/link";

import {
  fontColor,
  vizColors,
  mobileBreakpoint,
  maxWidth,
} from "../styling/stylingConstants";
import { UnStyledLink } from "../styling/headerStyle";
import {
  CardHorizontal,
  ColorImageWrapper,
  ImageSizes,
  MarginPageCard,
  PageCardWrapper,
} from "../styling/pagePreviewStyle";

export function ColorImage({
  size,
  color,
}: {
  size: ImageSizes;
  color: string;
}) {
  return <ColorImageWrapper color={color} />;
}

function PageCard({
  title,
  bodyCopy,
  color,
  link,
}: {
  title: string;
  bodyCopy: string;
  color: string;
  link: string;
}) {
  return (
    <PageCardWrapper>
      <UnStyledLink href={link}>
        <h3>{title} →</h3>
      </UnStyledLink>
      <p>{bodyCopy}</p>
      <ColorImage size="big" color={color} />
    </PageCardWrapper>
  );
}

export default function PagePreview() {
  const placeholderCopy =
    "How countries around the world write today’s date. Month first? Day first? Everyone has an opinion. ";
  return (
    <CardHorizontal>
      <PageCard
        title="Date Formats"
        bodyCopy={placeholderCopy + placeholderCopy}
        color={vizColors.yellow}
        link="/dateformat"
      />
      <PageCard
        title="Weekday vs Weekend"
        bodyCopy={placeholderCopy}
        color={vizColors.adamantineBlue}
        link="/weekdayweekend"
      />
      <PageCard
        title="First Day of the Week"
        bodyCopy={placeholderCopy}
        color={vizColors.brightGreen}
        link="/firstday"
      />
      <PageCard
        title="ClockType"
        bodyCopy={placeholderCopy}
        color={vizColors.pastelPurple}
        link="/clocktype"
      />
      <PageCard
        title="Daylight Savings"
        bodyCopy={placeholderCopy}
        color={vizColors.pink}
        link="/daylightsavings"
      />
      <PageCard
        title="Timezones"
        bodyCopy={placeholderCopy}
        color={vizColors.adamantineBlue}
        link="/"
      />
      <MarginPageCard />
    </CardHorizontal>
  );
}
