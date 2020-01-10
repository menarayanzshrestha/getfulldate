const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];

const convertTo12HRFormat = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const getFullDate = (date, withTime = true) => {
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();
  let t = "";

  if (withTime) {
    t = convertTo12HRFormat(date);
  }

  m = MONTHS[m];
  m = m.charAt(0).toUpperCase() + m.slice(1);

  d = d < 10 ? "0" + d.toString() : d;

  return `${m} ${d}, ${y} ${t}`;
};

const isPluralAndName = (time, dataSet) => {

  let a = Math.round(time);

  if(a === 0){
      return '';
  }

  if(a > 1){
      return `${a} ${dataSet}s`;
  }
  return `${a} ${dataSet}`;

};

const getLastActive = (t1, t2 = Date.now()) => {

  let n = Math.round((t2 - t1)/1000);

  if(n < 60) {
      return `${isPluralAndName(n, "second")}`;
  }

  //getting second
  let sec = n % 60; 

  //subtracting second to get exact seconds left as we alerady calualted seconds
  n = n - sec; 

  let m = n % (60 * 60); 

  let min = m / 60 ;

  //subtracting enough seconds to get exact seconds left as we alerady calualted minutes
  n = (n - ((min * 60) + sec));

  let h = n % ( 24 * 60 * 60);

  let hour = h / 3600;

  //subtracting enough seconds to get exact seconds left as we alerady calualted hours
  n = n - ((Math.round(hour) * 60 * 60 ) + (Math.round(min) * 60) + sec);   

  let d = n % (  30 * 24 * 60 * 60) ; 

  let day = d / (24 * 60 * 60); 

   //subtracting enough seconds to get exact seconds left as we alerady calualted hours
   n = n - ((Math.round(day) * 24 * 60 * 60 ) + (Math.round(hour) * 60 * 60 ) + (Math.round(min) * 60) + sec);   

   let mo = n % (  30* 30 * 24 * 60 * 60) ; 

   let mon = mo / (30 * 24 * 60 * 60); 
  
  //to avoid roundoff error
  if(Math.round(min) === 60){
      console.log("here weare in min")
      min = 0;
      hour = hour + 1
  }

  //to avoid roundoff error
  if(Math.round(hour) === 24){
      console.log("here weare in hour")
      hour = 0;
      day = day + 1
  }

  //to avoid roundoff error
  if(Math.round(day) === 30){
      console.log("here weare in mon")
      day = 0;
      mon = mon + 1
  }

  //to print the last data directly
  if(Math.round(mon) > 12) {
      return `${getFullDate(new Date(t1),false)}`;
  }

  // let returnMessage = `${isPluralAndName(mon, "month")}${isPluralAndName(day, "day")}${isPluralAndName(hour, "hour")}${isPluralAndName(min, "minute")}${isPluralAndName(sec, "second")}`;
  let returnMessage = `${isPluralAndName(mon, "month")} ${isPluralAndName(day, "day")} ${isPluralAndName(hour, "hour")} ${isPluralAndName(min, "minute")}`;

  return returnMessage.trim();

};

module.exports.convertTo12HRFormat = convertTo12HRFormat;
module.exports.getFullDate = getFullDate;
module.exports.getLastActive = getLastActive;
