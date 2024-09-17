import { scaleOrdinal } from "@visx/scale";
import { vizColors } from "../styling/stylingConstants";

export function defaultDateFormatter(order: string) {
  const firstThree = order.slice(0, 3);
  switch (firstThree) {
    case "DMY":
      return "dd-LL-yyyy*";
    case "MDY":
      return "LL-dd-yyyy*";
    case "YMD":
      return "yyyy-LL-dd*";
    default:
      return "!non!";
  }
}

export function isWeekend({
  dayofWeek,
  WorkWeek,
}: {
  dayofWeek: string;
  WorkWeek: string;
}) {
  switch (WorkWeek) {
    case "MtoF":
      if (dayofWeek === "Sunday" || dayofWeek === "Saturday") return true;
      else return false;
    case "SutoTh":
      if (dayofWeek === "Friday" || dayofWeek === "Saturday") return true;
      else return false;
    case "SutoF":
      if (dayofWeek === "Saturday") return true;
      else return false;
    case "SatoTh":
      if (dayofWeek === "Friday") return true;
      else return false;
    case "MtoSa":
      if (dayofWeek === "Sunday") return true;
      else return false;
    default:
      return false;
  }
}

export function dayNumberofWeek({
  firstDay,
  dayofWeek,
}: {
  firstDay: string;
  dayofWeek: string;
}) {
  const orderWords = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
  ];
  let weekOrder: string[] = [];
  switch (firstDay) {
    case "Monday":
      weekOrder = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    case "Sunday":
      weekOrder = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    case "Saturday":
      weekOrder = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];
      return orderWords[weekOrder.indexOf(dayofWeek)];
    default:
      return "error";
  }
}

export const dateColors = scaleOrdinal({
  domain: ["DMY", "DMY, YMD", "YMD", "MDY, YMD, DMY", "MDY, YMD", "DMY, MDY"],
  range: [
    vizColors.brightGreen,
    vizColors.pastelPurple,

    vizColors.yellow,
    vizColors.neonSeaFoam,

    vizColors.adamantineBlue,
    vizColors.pink,
  ],
});

export const workWeekColors = scaleOrdinal({
  domain: ["MtoF", "MtoSa", "SutoTh", "SatoTh", "SutoF", "MtoThandSa", "mixed"],
  range: [
    vizColors.pastelPurple,
    vizColors.adamantineBlue,
    vizColors.brightGreen,
    vizColors.yellow,
    vizColors.pink,
    "#000",
    vizColors.neonSeaFoam,
  ],
});
export const firstDayColors = scaleOrdinal({
  domain: ["Monday", "Saturday", "Sunday", "Friday"],
  range: [
    vizColors.pastelPurple,
    vizColors.adamantineBlue,
    vizColors.brightGreen,
    vizColors.neonSeaFoam,
  ],
});

export const clockTypeColors = scaleOrdinal({
  domain: ["24hr", "12hr", "Both", "24hr12oral"],
  range: [
    vizColors.pastelPurple,
    vizColors.adamantineBlue,
    vizColors.brightGreen,
    vizColors.yellow,
  ],
});
export const daylightSavingsColors = scaleOrdinal({
  domain: ["north", "south", "past", "never"],
  range: [
    vizColors.brightGreen,
    vizColors.pink,
    vizColors.adamantineBlue,
    vizColors.pastelPurple,
  ],
});

export function SummaryCopy({ type }: { type: string }) {
  switch (type) {
    case "/dateformat":
      return " Countries around the world differ in how they write today’s date. Month first? Day first? Periods vs. dashes vs. slashes—everyone does it a little differently.";
    case "/weekdayweekend":
      return "The concept of weekdays and weekends isn't universal. While many countries follow a Monday-to-Friday workweek, others observe different days off based on cultural or religious traditions.";
    case "/daylightsavings":
      return " Not all countries observe Daylight Saving Time, and those that do might change their clocks at different times of the year—or not at all.";
    case "/firstday":
      return " The starting day of the week varies globally, with some regions beginning on Sunday and others on Monday or Saturday.";
    case "/clocktype":
      return "From 12-hour clocks to 24-hour military time, different regions use various clock formats. Certain countries even use one format orally and the other in written communication.";
    default:
      return "empty";
  }
}
