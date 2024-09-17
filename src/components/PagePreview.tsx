import React, { useRef } from "react";

import { vizColors } from "../styling/stylingConstants";
import { UnStyledLink } from "../styling/headerStyle";
import {
  CardHorizontal,
  ColorImageWrapper,
  ImageSizes,
  MarginPageCard,
  PageCardWrapper,
} from "../styling/pagePreviewStyle";
import { TimezoneBlackButton } from "../styling/descriptiveTextStyle";
import { SummaryCopy } from "./utils";

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
  color,
  link,
  comingsoon,
}: {
  title: string;
  color: string;
  link: string;
  comingsoon?: string;
}) {
  return (
    <PageCardWrapper>
      {comingsoon == "true" && (
        <TimezoneBlackButton>Coming Soon</TimezoneBlackButton>
      )}
      <UnStyledLink href={link}>
        <h3>{title} →</h3>
      </UnStyledLink>
      <p>{SummaryCopy({ type: link })}</p>
      <ColorImage size="big" color={color} />
    </PageCardWrapper>
  );
}

export default function PagePreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  let pos = { top: 0, left: 0, x: 0, y: 0 };

  const mouseDownHandler = function (e: any) {
    if (!scrollRef.current) return;
    scrollRef.current.style.cursor = "grabbing";
    // scrollRef.current.userSelect = "none";
    pos = {
      // The current scroll
      left: scrollRef.current.scrollLeft,
      top: scrollRef.current.scrollTop,
      // Get the current mouse position
      x: e.clientX,
      y: e.clientY,
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  };

  const mouseMoveHandler = function (e: any) {
    if (!scrollRef.current) return;

    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
    // const dy = e.clientY - pos.y;
    const dy = 0;
    // Scroll the element
    scrollRef.current.scrollTop = pos.top - dy;
    scrollRef.current.scrollLeft = pos.left - dx;
  };

  const mouseUpHandler = function () {
    if (!scrollRef.current) return;

    document.removeEventListener("mousemove", mouseMoveHandler);
    document.removeEventListener("mouseup", mouseUpHandler);

    scrollRef.current.style.cursor = "grab";
    scrollRef.current.style.removeProperty("user-select");
  };

  return (
    <CardHorizontal ref={scrollRef} onMouseDown={mouseDownHandler}>
      <PageCard
        title="Date Formats"
        color={vizColors.yellow}
        link="/dateformat"
      />
      <PageCard
        title="Clock Type"
        color={vizColors.adamantineBlue}
        link="/clocktype"
      />
      <PageCard
        title="Daylight Savings"
        color={vizColors.pink}
        link="/daylightsavings"
      />
      <PageCard
        title="First Day of the Week"
        color={vizColors.brightGreen}
        link="/firstday"
      />
      <PageCard
        title="Weekday vs Weekend"
        color={vizColors.pastelPurple}
        link="/weekdayweekend"
      />

      {/* <PageCard
        comingsoon="true"
        title="Timezones"
        bodyCopy={placeholderCopy}
        color={vizColors.adamantineBlue}
        link="/"
      /> */}
      <MarginPageCard />
    </CardHorizontal>
  );
}
