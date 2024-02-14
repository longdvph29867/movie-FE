//index
export const convertDate = {
  date(dateTime: string) {
    const newDate = new Date(dateTime);
    const date = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return date;
  },
  time(dateTime: string) {
    const newDate = new Date(dateTime);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    return `${hours}:${(minutes < 10 ? "0" : "") + minutes}`;
  },
};
