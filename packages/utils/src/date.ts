import moment from "moment-jalaali";

export const formatSimpleJalaliDate = (
  e: Date | string | undefined,
  hour?: "date" | "dateHour"
) => {
  hour = hour ?? "date";

  if (!e) return "";

  return moment(e)
    .locale("fa")
    .format(hour === "dateHour" ? "HH:mm - jYYYY/jMM/jDD" : "jYYYY/jMM/jDD");
};

export const formatSimpleGregorianDate = (
  e: Date | string,
  hour?: "date" | "dateHour"
) => {
  hour = hour ?? "date";
  return moment(e)
    .locale("fa")
    .format(hour === "dateHour" ? "hh:mm YYYY/MM/DD" : "YYYY/MM/DD");
};

export const getRelativeTime = (date?: Date | string, t?: string): string => {
  if (!date) {
    return "";
  }

  t = t ?? "fa";

  const now = moment();
  const inputDate = moment(date);
  const diffInSeconds = now.diff(inputDate, "seconds");

  const isFa = t === "fa";

  if (diffInSeconds < 60) {
    return isFa ? `${diffInSeconds} ثانیه پیش` : `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return isFa
      ? minutes === 1
        ? `۱ دقیقه پیش`
        : `${minutes} دقیقه پیش`
      : minutes === 1
        ? `1 minute ago`
        : `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    const remainingMinutes = Math.floor((diffInSeconds % 3600) / 60);

    if (isFa) {
      return remainingMinutes === 0
        ? `${hours} ساعت پیش`
        : `${hours} ساعت و ${remainingMinutes} دقیقه پیش`;
    } else {
      return remainingMinutes === 0
        ? `${hours} hour${hours === 1 ? "" : "s"} ago`
        : `${hours} hour${hours === 1 ? "" : "s"} and ${remainingMinutes} minute${remainingMinutes === 1 ? "" : "s"} ago`;
    }
  } else if (diffInSeconds < 172800) {
    return isFa ? `دیروز` : `Yesterday`;
  } else if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return isFa ? `${days} روز پیش` : `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (diffInSeconds < 1209600) {
    return isFa ? `یک هفته پیش` : `A week ago`;
  } else {
    return isFa ? `بیشتر از یک هفته` : `More than a week ago`;
  }
};

export function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return `${hours}:${minutes}:${secs}`;
}
