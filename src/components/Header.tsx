import React, { useState } from "react";

import {
  HeaderH3,
  AboutBox,
  Question,
  FullWidth,
  Wrapper,
  UnStyledLink,
} from "../styling/headerStyle";
import { AboutPopUp } from "./AboutPopUp";

export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      {modalOpen && <AboutPopUp setModalOpen={setModalOpen} />}
      <FullWidth>
        <Wrapper>
          {" "}
          {/* Remove styling of underline*/}
          <UnStyledLink href="/">
            {" "}
            <HeaderH3>A Matter of Time</HeaderH3>
          </UnStyledLink>
          <AboutBox onClick={() => setModalOpen(!modalOpen)}>
            <Question>?</Question>
          </AboutBox>
        </Wrapper>
      </FullWidth>
    </div>
  );
}
