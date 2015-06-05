// Dependencies
var CliGhCal = require("../lib")
  , Moment = require("moment")
  ;

console.log(CliGhCal([
    [Moment().format("LL"), 4]
  , [Moment().subtract(2, "days").format("LL"), 6]
], {
    theme: "LIGHT"
  , start: new Moment().subtract(1, "years")
  , end: new Moment()
}));
