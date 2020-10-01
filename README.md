# This is the package to get the full date out 
For eg: Jan 01, 2020 11:23 AM

How to use:

const { getFullDate, convertTo12HRFormat, getLastActive } = require('getfulldate');

getFullDate(new Date(1578073312473)));
// Jan 03, 2020 11:26 PM

getFullDate(new Date(1578073312473), false));
// Jan 03, 2020 

convertTo12HRFormat(new Date(1578073312473)));
// 11:26 PM
