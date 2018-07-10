import moment from "moment/moment";
export const getAgeFromDate = (date,today) =>  moment(today).diff(moment(date, 'YYYY-MM-DD'), 'years');
