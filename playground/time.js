var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1720;
var date = moment(createdAt);

// Jun 29th 2017 05:39:28 pm
console.log(date.format('MMM Do YYYY hh:mm:ss a'));
