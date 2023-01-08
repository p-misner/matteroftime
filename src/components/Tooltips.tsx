import React, { useState } from "react";
import styled from "styled-components";

// reference: https://paladini.dev/posts/how-to-make-an-extremely-reusable-tooltip-component-with-react--and-nothing-else/
const textColor = "black";
const background = "white";
const arrowsize = "6px";

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: auto;
`;

const TooltipTip = styled.div`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -15%);
  z-index: 100;
  white-space: nowrap;
  background: white;
  border: 2px solid black;
  font-weight: 700;
`;
const ColorDiv = styled.div`
  background: #4badf8;
  font-family: Outfit;
  font-size: 24px;
  weight: 600;
  line-height: 2;
  border-top: 2px solid black;
  cursor: pointer;
`;

type TextTooltipType = {
  text: string;
  delay: number;
  children: JSX.Element | JSX.Element[];
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
          {text}
          <ColorDiv> Date Format</ColorDiv>
        </TooltipTip>
      )}
    </TooltipWrapper>
  );
}

export function MapTooltip() {}
