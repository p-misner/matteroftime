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
