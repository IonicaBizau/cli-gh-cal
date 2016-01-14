[![cli-gh-cal](http://i.imgur.com/pw82kYP.png)](#)

# `$ cli-gh-cal` [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Travis](https://img.shields.io/travis/IonicaBizau/cli-gh-cal.svg)](https://travis-ci.org/IonicaBizau/cli-gh-cal/) [![Version](https://img.shields.io/npm/v/cli-gh-cal.svg)](https://www.npmjs.com/package/cli-gh-cal) [![Downloads](https://img.shields.io/npm/dt/cli-gh-cal.svg)](https://www.npmjs.com/package/cli-gh-cal) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> GitHub like calendar graphs in command line.

[![cli-gh-cal](http://i.imgur.com/M5WIEsM.png)](#)

## Installation

You can install the package globally and use it as command line tool:

```sh
$ npm i -g cli-gh-cal
```

Then, run `cli-gh-cal --help` and see what the CLI tool can do.

```sh
$ cli-gh-cal --help
Usage: cli-gh-cal [options]

Options:
  -d, --data <data>      Provide the JSON data in this format:  
                         [["03/14/2015", 5]]                    
  -t, --theme <theme>    The theme to use.                      
  -s, --start <date>     The start date.                        
  -e, --end <date>       The end date.                          
  -n, --no-ansi          Forces the tool not to use ANSI styles.
  -l, --light            Enables the light theme.               
  -f, --first-day <day>  Sets the first day (e.g. 'Sun').       
  -h, --help             Displays this help.                    
  -v, --version          Displays version information.          

Examples:
  cli-gh-cal -d '[["03/14/2015", 5]]' -t none
  cli-gh-cal -d '[["03/14/2015", 5]]' -s '1 January 2014'

Documentation can be found at https://github.com/IonicaBizau/cli-gh-cal
```

## Example

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

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`ghcal`](https://github.com/IonicaBizau/ghcal)

 - [`git-stats`](https://github.com/IonicaBizau/git-stats)

 - [`github-stats`](https://github.com/IonicaBizau/github-stats)

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md