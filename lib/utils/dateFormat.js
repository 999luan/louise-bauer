import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date) => {
  return formatInTimeZone(date, "America/Sao_Paulo", "dd/MM/yyyy");
};



export default dateFormat;
