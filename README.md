
[![cli-gh-cal](http://i.imgur.com/pw82kYP.png)](#)

# `$ cli-gh-cal`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/cli-gh-cal.svg)](https://travis-ci.org/IonicaBizau/cli-gh-cal/) [![Version](https://img.shields.io/npm/v/cli-gh-cal.svg)](https://www.npmjs.com/package/cli-gh-cal) [![Downloads](https://img.shields.io/npm/dt/cli-gh-cal.svg)](https://www.npmjs.com/package/cli-gh-cal)

> GitHub like calendar graphs in command line.

[![cli-gh-cal](http://i.imgur.com/M5WIEsM.png)](#)

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
$ npm i -g cli-gh-cal
```


Then, run `cli-gh-cal --help` and see what the CLI tool can do.


```
$ cli-gh-cal --help
Usage: cli-gh-cal [options]

GitHub like calendar graphs in command line.

Options:
  -d, --data <data>    Provide the JSON data in this format:
                       [["03/14/2015", 5]]
  -t, --theme <theme>  The theme to use.
  -s, --start <date>   The start date.
  -e, --end <date>     The end date.
  -n, --no-ansi        Forces the tool not to use ANSI styles.
  -l, --light          Enables the light theme.
  --raw                Get raw data.
  -v, --version        Displays version information.
  -h, --help           Displays this help.

Examples:
  $ cli-gh-cal -d '[["03/14/2015", 5]]' -t none
  $ cli-gh-cal -d '[["03/14/2015", 5]]' -s '1 January 2014'

Documentation can be found at https://github.com/IonicaBizau/cli-gh-cal.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm`:

```sh
$ npm i --save cli-gh-cal
```



```js
// Dependencies
var CliGhCal = require("cli-gh-cal")
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
```

## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help from me, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`ghcal`](https://github.com/IonicaBizau/ghcal)—See the GitHub contributions calendar of a user in the command line.
 - [`git-stats`](https://github.com/IonicaBizau/git-stats)—Local git statistics including GitHub-like contributions calendars.
 - [`github-stats`](https://github.com/IonicaBizau/github-stats)—Visualize stats about GitHub users and projects in your terminal.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
