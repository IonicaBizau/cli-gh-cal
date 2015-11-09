[![cli-gh-cal](http://i.imgur.com/pw82kYP.png)](#)

# `$ cli-gh-cal` [![Support this project][donate-now]][paypal-donations]

GitHub like calendar graphs in command line.

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
$ npm i cli-gh-cal
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

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md