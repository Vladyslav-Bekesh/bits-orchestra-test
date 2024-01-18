import moment from "moment-timezone";

const PATTERN = "D MMMM YYYY, h:mmA";

export const takeLocalTimeZone = (): string => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  if (userTimeZone === "Europe/Kiev") {
    return "Europe/Kyiv";
  }
  return userTimeZone;
};

export const takeLocalTime = (): string => {
  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return moment().tz(userTimeZone).format(PATTERN);
};

export const utcToLocalTime = (
  utcTime: string,
  pattern: string = PATTERN
): string => {
  return moment.utc(utcTime).tz(takeLocalTimeZone()).format(pattern);
};

export const localToUtcTime = (
  localTime: string,
  pattern: string = PATTERN
): string => {
  return moment.tz(localTime, pattern, takeLocalTimeZone()).utc().format(pattern);
};

