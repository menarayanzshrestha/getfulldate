const MONTHS = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const convertTo12HRFormat = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
};

module.exports.getFullDate = (date, withTime = true) => {
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let t = '';

  if (withTime) {
    t = convertTo12HRFormat(date);
  }

  m = MONTHS[m];
  m = m.charAt(0).toUpperCase() + m.slice(1);

  d = d < 10 ? '0' + d.toString() : d;

  return `${m} ${d}, ${y} ${t}`;
};
