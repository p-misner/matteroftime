import {
  AboutWrapper,
  Close,
  Content,
  GreyoutWrapper,
  PopupWrapper,
} from "../styling/aboutPopUpStyle";

export function AboutPopUp({ setModalOpen }: { setModalOpen: any }) {
  return (
    <PopupWrapper>
      <GreyoutWrapper></GreyoutWrapper>
      <AboutWrapper>
        <Close onClick={() => setModalOpen(false)}>&#x2715;</Close>
        <Content>
          <h1>About</h1>
          <p>
            I showed up to an appointment a month early once, not internalizing
            that the Month first Day second date format of the United States was
            not the standard in India. After getting over the embarassment, I
            fell down a pretty deep Wikipedia rabbit hole about all things time
            related and the more I discovered the worldwide differences in how
            we represent date and time, the more fascinated I became. This page,
            and the maps illustrating how the world approaches time, is a
            culmination of my interest 😊
          </p>
          <h1>Data Sources</h1>
          <p>
            I relied mostly on Wikipedia to gather my data for this project, as
            they had the most complete lists relating to Date Format, Clock Type
            etc. My sources are as follows:
          </p>
          <ul>
            <li>
              <span> Date Format: </span>{" "}
              <a href="https://en.wikipedia.org/wiki/List_of_date_formats_by_country">
                Wikipedia: List of Date Formats by Country
              </a>
            </li>
            <li>
              <span> Weekday vs Weekend: </span>{" "}
              <a href="https://en.wikipedia.org/wiki/Workweek_and_weekend">
                Wikipedia: Workweek and weekend
              </a>
            </li>
            <li>
              <span> First Day of the Week: </span>{" "}
              <a href="https://en.wikipedia.org/wiki/Week">Wikipedia: Week</a>
            </li>
            <li>
              <span> Clock Type: </span>{" "}
              <a href="https://en.wikipedia.org/wiki/24-hour_clock">
                Wikipedia: 24 hour clock
              </a>
            </li>
          </ul>
          <h1>Development</h1>
          <p>
            {" "}
            Built by Priya Misner using next.js and d3.js. The maps use the{" "}
            <a href="https://observablehq.com/@d3/mollweide-hemispheres">
              {" "}
              Mollweide Hemisphere
            </a>{" "}
            Projection. To see more of my work, check out{" "}
            <a href="https://www.priyamisner.com">priyamisner.com</a>
          </p>
        </Content>
      </AboutWrapper>
    </PopupWrapper>
  );
}
