import React from "react";
import Link from "next/link";

import {
  HeaderH3,
  AboutBox,
  Question,
  FullWidth,
  Wrapper,
  UnStyledLink,
} from "../styling/headerStyle";

export default function Header() {
  return (
    <FullWidth>
      <Wrapper>
        {" "}
        {/* Remove styling of underline*/}
        <UnStyledLink href="/">
          {" "}
          <HeaderH3>A Matter of Time</HeaderH3>
        </UnStyledLink>
        <AboutBox>
          <Question>?</Question>
        </AboutBox>
      </Wrapper>
    </FullWidth>
  );
}
