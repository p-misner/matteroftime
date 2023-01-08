import React from "react";
import {
  HeaderH2,
  AboutBox,
  Question,
  FullWidth,
  Wrapper,
} from "../styling/headerStyle";

export default function Header() {
  return (
    <FullWidth>
      <Wrapper>
        <HeaderH2> A Matter of Time </HeaderH2>
        <AboutBox>
          <Question>?</Question>
        </AboutBox>
      </Wrapper>
    </FullWidth>
  );
}
