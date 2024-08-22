import React, { useState } from "react";
import styled from "styled-components";
import { vizColors } from "../styling/stylingConstants";
// reference: https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: auto;
`;

const TooltipTip = styled.div`
  position: absolute;
  left: 0%;
  top: 15%;
  transform: translate(0%, -15%);
  z-index: 100;
  white-space: nowrap;
  background: white;
  border: 2px solid black;
  font-weight: 700;
  p {
    margin: 0px 16px;
  }
`;
const ColorDiv = styled.div`
  background: ${vizColors.adamantineBlue};
  font-family: Outfit;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  border-top: 2px solid black;
  cursor: pointer;
  padding: 8px 16px;
`;

type TextTooltipType = {
  text: string;
  delay: number;
  children: any | any[];
};
export default function TextTooltip({
  text,
  delay,
  children,
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
  return (
    <TooltipWrapper
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {children}
      {active && (
        <TooltipTip>
          {/* Content */}
          <p> {text}</p>
          <ColorDiv>
            Date Format{" "}
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
                d="M88.962 8.20711C89.3525 7.81658 89.3525 7.18342 88.962 6.79289L82.598 0.428932C82.2075 0.0384078 81.5744 0.0384078 81.1838 0.428932C80.7933 0.819457 80.7933 1.45262 81.1838 1.84315L86.8407 7.5L81.1838 13.1569C80.7933 13.5474 80.7933 14.1805 81.1838 14.5711C81.5744 14.9616 82.2075 14.9616 82.598 14.5711L88.962 8.20711ZM0.778076 8.5H88.2549V6.5H0.778076V8.5Z"
                fill="black"
              />
            </svg>
          </ColorDiv>
        </TooltipTip>
      )}
    </TooltipWrapper>
  );
}
