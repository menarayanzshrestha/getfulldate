# This is the package to get the full date out 
for eg: Jan 01, 2020 11:23 AM

How to use:

const { getFullDate, convertTo12HRFormat, getLastActive } = require('getfulldate');

getFullDate(new Date(1578073312473)));
// Jan 03, 2020 11:26 PM

getFullDate(new Date(1578073312473), false));
// Jan 03, 2020 

convertTo12HRFormat(new Date(1578073312473)));
// 11:26 PM

getLastActive(1578073312473,1578073312473); 
// (t1, t2) t2 is current date and t1 is prevous date
//Results looks like : 5 months 6 days 5 hours 6 minutes 

getLastActive(1578073312473);
// (t1, t2) t2 is current date(Date.now()) and t1 is prevous date
Results looks like : 6 minutes 