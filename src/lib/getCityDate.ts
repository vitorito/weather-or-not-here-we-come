const getCityDate = (timezone: string) =>
  new Date().toLocaleString('en-us', {
    timeZone: timezone,
  });

export default getCityDate;
