## Documentation

You can see below the API reference of this module.

### `CliGhCal(data, options)`
Builds a GitHub Contributions like calendar using characters and
ANSI styles.

#### Params

- **Array** `data`: An array of arrays in the following format:
```js
[
  ["1 January 2015", 5]
, ["1 May 2015", 5]
, ["1 May 2015", 5]
]
```

 You can use any date input parsable by [`moment`](http://momentjs.com/).
- **Object** `options`: An object containing the following fields:
 - `start` (String|Date|Moment): The start date (parsable string or date object). The default is *one year ago*.
 - `end` (String|Date|Moment): The end date (parsable string or date object). The default is *now*.
 - `theme` (String): The theme name (default: `"DARK"`).
 - `noCrop` (Boolean): By default, when there's no enough horizontal space,
   the graph will be cropped in the left side. Use `noCrop:true` when you really
   want to get the result to not be cropped.
 - `raw` (Boolean): If `true`, the raw results will be returned.

#### Return
- **String** The stringified calendar built from input data.

