import React from "react";
import { defaultStyles } from "@visx/tooltip";
import {
  DateWrapper,
  TimeDiv,
  TooltipDiv,
  WorkWeekUnderline,
} from "../styling/mapStyle";
import {
  clockTypeColors,
  dateColors,
  daylightSavingsColors,
  defaultDateFormatter,
  firstDayColors,
  workWeekColors,
} from "./utils";
import { getTimezonesForCountry } from "countries-and-timezones";
import { DateTime } from "luxon";

export type TooltipData = {
  country: string;
  countryCode: string;
  dateFormat: string;
  dateFormatDefault: string;
  punctuation: string;
  color: string;
  workWeek: string;
  firstDay: string;
  clockType: string;
  daylightSavings: string;
};
export const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: "white",
  border: "1px solid black",
  paddingBottom: "16px",
};
export function dateFormatSubtitle(dateFormatString: string) {
  switch (dateFormatString) {
    case "DMY":
      return "This country primarily uses the DMY format for dates or (*) has no date format specified so defaults to the international standard.";
    case "DMY, YMD":
      return "This country uses a mix of DMY and YMD formats.";
    case "YMD":
      return "This country primarily uses the YMD format for dates.";
    case "MDY, YMD":
      return "Primarily using MDY for dates, this country also uses the YMD formats.";
    case "DMY, MDY":
      return "This country uses a mix of DMY and MDY formats.";
    case "MDY, YMD, DMY":
      return "This country uses a mix of MDY, YMD and DMY formats.";
    default:
      return "Multiple Date Formats";
  }
}

export function workWeekSubtitle(workWeekString: string) {
  switch (workWeekString) {
    case "MtoF":
      return "Monday to Friday.";
    case "MtoSa":
      return "Monday to Saturday";
    case "SutoTh":
      return "Sunday to Thursday";
    case "SatoW":
      return "Saturday to Wednesday";
    case "SatoTh":
      return "Saturday to Thursday";
    case "SutoF":
      return "Sunday to Friday.";
    case "MtoThandSa":
      return "Monday to Thursday plus Saturday";
    default:
      return "Multiple Date Formats";
  }
}
export function clockTypeSubtitle(workWeekString: string) {
  switch (workWeekString) {
    case "12hr":
      return "12 hour";
    case "24hr":
      return "24 hour";
    case "Both":
      return "12hr and 24hr";
    case "24hr12oral":
      return "24 hour (12hr orally)";
    default:
      return "Other";
  }
}
export function firstDaySubtitle(workWeekString: string) {
  switch (workWeekString) {
    case "MtoF":
      return "Monday to Friday.";
    case "MtoSa":
      return "Monday to Saturday";
    case "SutoTh":
      return "Sunday to Thursday";
    case "SatoW":
      return "Saturday to Wednesday";
    case "SatoTh":
      return "Saturday to Thursday";
    case "SutoF":
      return "Sunday to Friday.";
    case "MtoThandSa":
      return "Monday to Thursday plus Saturday";
    default:
      return "Multiple Date Formats";
  }
}
export function daylightSavingsSubtitle(workWeekString: string) {
  switch (workWeekString) {
    case "north":
      return "Northern Hemisphere summer";
    case "south":
      return "Southern Hemisphere summer";
    case "past":
      return "formerly";
    case "never":
      return "never";

    default:
      return "other";
  }
}

export function MapTooltipContents({
  tooltipData,
  type,
}: {
  tooltipData: TooltipData;
  type: string;
}) {
  return (
    <TooltipDiv>
      <h3>{tooltipData.country}</h3>

      {type === "weekdayweekend" && tooltipData.workWeek && (
        <p>
          The week runs from{" "}
          <WorkWeekUnderline
            workWeekColor={workWeekColors(tooltipData.workWeek)}
          >
            {workWeekSubtitle(tooltipData.workWeek)}
          </WorkWeekUnderline>
        </p>
      )}
      {type === "firstday" && tooltipData.firstDay && (
        <p>
          The week begins on a{" "}
          <WorkWeekUnderline
            workWeekColor={firstDayColors(tooltipData.firstDay)}
          >
            {tooltipData.firstDay}
          </WorkWeekUnderline>
        </p>
      )}

      {type === "dateformat" && (
        <DateWrapper>
          <TimeDiv color={dateColors(tooltipData.dateFormat)}>
            <h2>
              {" "}
              {tooltipData &&
                tooltipData.dateFormatDefault &&
                DateTime.now()
                  .setZone(
                    getTimezonesForCountry(tooltipData.countryCode)?.map(
                      (x) => x.name
                    )[0]
                  )
                  .toFormat(
                    tooltipData.dateFormatDefault == "None Specified"
                      ? defaultDateFormatter(tooltipData.dateFormat)
                      : tooltipData.dateFormatDefault
                  )
                  .toString()}
            </h2>
            <p> {dateFormatSubtitle(tooltipData.dateFormat)}</p>
          </TimeDiv>
        </DateWrapper>
      )}

      {type === "clocktype" && (
        <div>
          <p>
            {" "}
            Follows a{" "}
            <WorkWeekUnderline
              workWeekColor={clockTypeColors(tooltipData.clockType)}
            >
              {clockTypeSubtitle(tooltipData.clockType)}
            </WorkWeekUnderline>{" "}
            clock{" "}
          </p>
        </div>
      )}
      {type === "daylightsavings" && (
        <div>
          {tooltipData.daylightSavings == "never" ||
          tooltipData.daylightSavings == "past" ? (
            <p>
              Daylight savings has{" "}
              <WorkWeekUnderline
                workWeekColor={daylightSavingsColors(
                  tooltipData.daylightSavings
                )}
              >
                {daylightSavingsSubtitle(tooltipData.daylightSavings)}
              </WorkWeekUnderline>{" "}
              been observed
            </p>
          ) : (
            <p>
              Daylight savings is observed during{" "}
              <WorkWeekUnderline
                workWeekColor={daylightSavingsColors(
                  tooltipData.daylightSavings
                )}
              >
                {daylightSavingsSubtitle(tooltipData.daylightSavings)}
              </WorkWeekUnderline>{" "}
            </p>
          )}
        </div>
      )}
    </TooltipDiv>
  );
}
