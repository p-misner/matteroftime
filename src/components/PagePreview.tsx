import React from "react";
import styled from "styled-components";
import { fontColor, vizColors } from "../styling/stylingConstants";

const PageCardWrapper = styled.div`
  height: 446px;
  border-left: 2px solid ${fontColor};
  width: auto;
  display: flex;
  flex-direction: column;

  :first-child {
    margin-left: calc((100vw - 1170px) / 2);
  }

  h3 {
    font-family: Outfit;
    font-weight: 500;
    font-size: 24px;
    margin: 24px 24px 0px 24px;
  }
  p {
    margin: 24px;
  }
`;

const ColorImageWrapper = styled.div`
  min-width: 360px;
  height: 100%;
  background: ${(props) => props.color};
`;
const MarginPageCard = styled.div`
  height: 446px;
  min-width: calc((100vw - 1170px) / 2);
  border-left: 2px solid ${fontColor};
  background: white;
`;

const CardHorizontal = styled.div`
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  border: 2px solid ${fontColor};
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
      {" "}
      <h3>{title}</h3>
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
