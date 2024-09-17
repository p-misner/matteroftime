import React, { useState } from "react";

import { ColorDiv, TooltipTip, TooltipWrapper } from "../styling/infoPageStyle";
import { UnStyledLink } from "../styling/headerStyle";
import { vizColors } from "../styling/stylingConstants";
// reference: https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/

type TextTooltipType = {
  text: string;
  delay: number;
  link: string;
  children: any | any[];
};
export default function TextTooltip({
  text,
  delay,
  children,
  link,
}: TextTooltipType) {
  let timeout: ReturnType<typeof setTimeout>;

  const [active, setActive] = useState(false);
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  function OverviewTooltipText({ type }: { type: string }) {
    switch (type) {
      case "/dateformat":
        return "Date Format";
      case "/weekdayweekend":
        return "Weekday vs Weekend";
      case "/firstday":
        return "First Day";
      case "/clocktype":
        return "Clock Type";
      case "/daylightsavings":
        return "Daylight Savings";
      default:
        return "Other";
    }
  }
  function OverviewTooltipColor({ type }: { type: string }) {
    switch (type) {
      case "/dateformat":
        return vizColors.yellow;
      case "/weekdayweekend":
        return vizColors.pastelPurple;
      case "/firstday":
        return vizColors.brightGreen;
      case "/clocktype":
        return vizColors.adamantineBlue;
      case "/daylightsavings":
        return vizColors.pink;
      default:
        return "Other";
    }
  }
  return (
    <TooltipWrapper
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <UnStyledLink href={link}>
          <TooltipTip>
            {/* Content */}
            <p> {text}</p>
            <ColorDiv color={OverviewTooltipColor({ type: link })}>
              {OverviewTooltipText({ type: link })}{" "}
              {/* TO DO: Have arrow length be dynamic. 
				0. First figure out which label in list is longest
				1. If {text} is longer than arrow label, have arrow go to end of {text} 
				2. If arrow label is longer, have a 16px long arrow
				3. Some adjustment for edge cases (mayve everything gets right aligned) OR center {text} like in original designs
			*/}
              <svg
                width="90"
                height="15"
                viewBox="0 0 90 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M88.962 8.20711C89.3525 7.81658 89.3525 7.18342 88.962 6.79289L82.598 0.428932C82.2075 0.0384078 81.5744 0.0384078 81.1838 0.428932C80.7933 0.819457 80.7933 1.45262 81.1838 1.84315L86.8407 7.5L81.1838 13.1569C80.7933 13.5474 80.7933 14.1805 81.1838 14.5711C81.5744 14.9616 82.2075 14.9616 82.598 14.5711L88.962 8.20711ZM0.778076 8.5H88.2549V6.5H 0.778076V8.5Z"
                  fill="black"
                />
              </svg>
            </ColorDiv>
          </TooltipTip>
        </UnStyledLink>
      )}
    </TooltipWrapper>
  );
}
