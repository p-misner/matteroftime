import React from "react";
import { FullWidth, UnStyledLink, Wrapper } from "../styling/headerStyle";

export default function Footer() {
  return (
    <FullWidth>
      <Wrapper>
        <p> Created by Priya Misner </p>
        <UnStyledLink href="https://www.priyamisner.com">
          {" "}
          priyamisner.com
        </UnStyledLink>
      </Wrapper>
    </FullWidth>
  );
}
