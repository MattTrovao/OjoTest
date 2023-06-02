export function getYear(year) {
  let date = new Date(year)
  let resultYear = date.getFullYear()

  return resultYear
}

export function formatDate(date)  {
  let format = new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  return format;
};