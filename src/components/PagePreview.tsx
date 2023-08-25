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

const PageCardWrapper = styled.div`
  border-bottom: 2px solid ${fontColor};
  border-left: 0px;
  display: flex;
  flex-direction: row;
  @media only screen and (min-width: ${mobileBreakpoint}) {
    border-left: 2px solid ${fontColor};
    flex-direction: column;
  }

  :nth-last-child(2) {
    border-bottom: 0px;
  }

  :first-child {
    margin-left: 0px;
    border-left: 0px;
    @media only screen and (min-width: ${maxWidth}) {
      border-left: 2px solid ${fontColor};
      margin-left: calc(50vw - 585px);
    }
  }

  h3 {
    font-family: Outfit;
    font-weight: 500;
    font-size: 24px;
    margin: 16px;
    @media only screen and (min-width: ${mobileBreakpoint}) {
      margin: 24px 24px 0px 24px;
    }
  }
  p {
    display: none;
    @media only screen and (min-width: ${mobileBreakpoint}) {
      margin: 24px;
      display: block;
    }
  }
`;

const ColorImageWrapper = styled.div`
  min-width: 40px;
  min-height: 100%;
  flex-grow: 1;
  background: ${(props) => props.color};
  @media only screen and (min-width: ${mobileBreakpoint}) {
    width: 100%;
    min-width: 360px;
    height: 100%;
  }
`;

// this is the right hand side spacer; also serves to set height for pagecards
const MarginPageCard = styled.div`
  display: none;
  min-width: calc((100vw - 1170px) / 2);
  border-left: 0px;
  @media only screen and (min-width: ${mobileBreakpoint}) {
    display: block;
    height: 446px;
  }
  @media only screen and (min-width: ${maxWidth}) {
    border-left: 2px solid ${fontColor};
  }
`;

const CardHorizontal = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  border: 2px solid ${fontColor};
  @media only screen and (min-width: ${mobileBreakpoint}) {
    flex-direction: row;
    max-height: 446px;
  }
`;
type ImageSizes = "big" | "small";

function ColorImage({ size, color }: { size: ImageSizes; color: string }) {
  return <ColorImageWrapper color={color} />;
}

function PageCard({
  title,
  bodyCopy,
  color,
}: {
  title: string;
  bodyCopy: string;
  color: string;
}) {
  return (
    <PageCardWrapper>
      <UnStyledLink href="/dateformat">
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
      />
      <PageCard
        title="Second"
        bodyCopy={placeholderCopy}
        color={vizColors.adamantineBlue}
      />
      <PageCard
        title="Third"
        bodyCopy={placeholderCopy}
        color={vizColors.brightGreen}
      />
      <PageCard
        title="Date Another"
        bodyCopy={placeholderCopy}
        color={vizColors.pastelPurple}
      />
      <PageCard
        title="Fourth Formats"
        bodyCopy={placeholderCopy}
        color={vizColors.adamantineBlue}
      />
      <MarginPageCard />
    </CardHorizontal>
  );
}
