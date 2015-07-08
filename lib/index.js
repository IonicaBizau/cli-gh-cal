// Dependencies
var Moment = require("moment")
  , GitStatsColors = require("git-stats-colors")
  , Couleurs = require("couleurs")
  , Ul = require("ul")
  , CliBox = require("cli-box")
  , AnsiParser = require("ansi-parser")
  , Deffy = require("deffy")
  ;

// Configs
// TODO If anyone knows how to solve this hack, please contribute! :)
Moment.suppressDeprecationWarnings = true;

// Constants
const DATE_FORMAT = "MMM D, YYYY"
    , LEVELS = [
        "⬚"
      , "▢"
      , "▤"
      , "▣"
      , "◼"
      ]
    , DAYS = [
        "Sun"
      , "Mon"
      , "Tue"
      , "Wed"
      , "Thu"
      , "Fri"
      , "Sat"
      ]
    ;

/**
 * CliGhCal
 * Builds a GitHub Contributions like calendar using characters and
 * ANSI styles.
 *
 * @name CliGhCal
 * @function
 * @param {Array} data An array of arrays in the following format:
 *
 * ```js
 * [
 *   ["1 January 2015", 5]
 * , ["1 May 2015", 5]
 * , ["1 May 2015", 5]
 * ]
 * ```
 *
 *  You can use any date input parsable by [`moment`](http://momentjs.com/).
 *
 * @param {Object} options An object containing the following fields:
 *
 *  - `firstDay` (String): The first day in the week (default: `"Sun"`).
 *  - `start` (String|Date|Moment): The start date (parsable string or date object). The default is *one year ago*.
 *  - `end` (String|Date|Moment): The end date (parsable string or date object). The default is *now*.
 *  - `theme` (String): The theme name (default: `"DARK"`).
 *
 * @return {String} The stringified calendar built from input data.
 */
function CliGhCal(data, options) {

    var cal = {
        total: 0
      , days: {}
      , cStreak: 0
      , lStreak: 0
      , max: 0
    };

    // Convert input data dates into Moment
    data.forEach(function (c) {
        c[0] = Moment(c[0]);
        c[1] = Deffy(c[1], 0);

        // Sum the total
        cal.total += c[1];

        // Check the max value
        if (c[1] > cal.max) {
            cal.max = c[1];
        }

        // Check the current streak and the longest streak
        if (c[1] > 0) {
            if (++cal.cStreak > cal.lStreak) {
                cal.lStreak = cal.cStreak;
            }
        } else {
            cal.cStreak = 0;
        }
    });

    var levels = cal.max / (LEVELS.length * 2)
      , cLevel = 0
      ;

    data.forEach(function (c) {
        cal.days[c[0].format(DATE_FORMAT)] = {
            c: c[1]
          , level: !levels
          ? 0 : (cLevel = Math.round(c[1] / levels)) >= 4
          ? 4 : !cLevel && c[1] > 0 ? 1 : cLevel
        };
    });

    options.firstDay = Deffy(options.firstDay, "Sun");
    if (data.length) {
        options.start = Deffy(options.start, data[0][0], true);
        options.end = Deffy(options.end, data.slice(-1)[0][0], true);
    } else {
        options.start = Deffy(options.start, Moment().subtract(1, "years"));
        options.end = Deffy(options.end, Moment());
    }

    var year = []
      , months = new Array(52) // Stores the months depending on their first week
      , cWeek = [" ", " ", " ", " ", " ", " ", " "]
      , monthHack = "MM"
      , sDay = ""
      , cDayObj = null
      , strYear = ""
      , strMonths = ""
      , w = 0
      , d = 0
      , when = options.when || "the last year"
      , mDay = null
      , dataClone = {
            start: Moment(options.start.format(DATE_FORMAT), DATE_FORMAT)
          , end: Moment(options.end.format(DATE_FORMAT), DATE_FORMAT)
        }
      ;

    dataClone.s = options.start.format(DATE_FORMAT);
    dataClone.e = options.end.format(DATE_FORMAT);

    function iterateDays(callback) {

        var start = dataClone.start
          , end = dataClone.end
          , tomrrow = Moment(end.format(DATE_FORMAT), DATE_FORMAT).add(1, "days")
          , endStr = tomrrow.format(DATE_FORMAT)
          , cDay = null
          ;

        while (start.format(DATE_FORMAT) !== endStr) {
            cDay = start.format(DATE_FORMAT);
            callback(cDay, start);
            start.add(1, "days");
        }
    }

    if (Moment().subtract(1, "years").format(DATE_FORMAT) !== dataClone.s
        || Moment().format(DATE_FORMAT) !== dataClone.e) {
        when = [Couleurs.bold(dataClone.s), Couleurs.bold(dataClone.e)].join(" – ");
    }

    iterateDays(function (cDay, mDay) {
        sDay = mDay.format("ddd");
        cDayObj = cal.days[cDay];
        if (!cDayObj) {
            cDayObj = { level: 0 };
        }
        if (sDay === options.firstDay && Object.keys(cWeek).length) {
            year.push(cWeek);
            cWeek = [" ", " ", " ", " ", " ", " ", " "];
        }

        // Store the new month this week
        if (mDay.format("D") === "1") {
            months[year.length] = mDay.format("MMM");
        }

        cWeek[DAYS.indexOf(sDay)] = LEVELS[cDayObj.level];
    });

    if (cWeek.length) {
        year.push(cWeek);
    }

    for (d = 0; d < 7; ++d) {
        for (w = 0; w < year.length; ++w) {
            strYear += " " + year[w][d];
        }
        strYear += "\n";
    }

    // Add day names
    // TODO This doesn't really work
    var firstDayIndex = DAYS.indexOf(options.firstDay);
    strYear = strYear.split("\n").map(function (c, i) {
        if (i > 6) { return; }
        return DAYS[(i + firstDayIndex) % DAYS.length] + c;
    }).join("\n");

    // Months label
    monthHack = "MMMM"; //Left padding

    for (var i = 0; i < months.length; i++) {
        // The length of strMonths should always be 2*(i+1) (at the i-th column)
        if (!months[i]) {
            strMonths += new Array(2 * (i + 1) - strMonths.length + 1).join(" ");
        } else {
            strMonths += months[i];
        }
    }

    strYear = monthHack + strMonths + "\n" + strYear;
    strYear +=
         new Array(5 + 2 * Math.ceil(365 / 7)).join("-")
      + "\n" + "Commits in " + when + ": " + cal.total
      + " | " + "Longest Streak: " + cal.lStreak + " days"
      + " | " + "Current Streak: " + cal.cStreak + " days"
      + " | " + "Max a day: " + cal.max
      ;

    strYear = CliBox({
        w: 10
      , h: 10
      , marks: {
            nw: "╔"
          , n:  "═"
          , ne: "╗"
          , e:  "║"
          , se: "╝"
          , s:  "═"
          , sw: "╚"
          , w:  "║"
          , b: " "
        }
    }, {
        text: strYear
      , stretch: true
      , hAlign: "left"
    });

    strYear = AnsiParser.removeAnsi(strYear);
    strYear = strYear.replace(monthHack, new Array(monthHack.length + 1).join(" "));
    if (options.theme) {
        strYear = GitStatsColors(strYear, options.theme);
    }

    return strYear;
}

module.exports = CliGhCal;
