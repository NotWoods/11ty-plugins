# eleventy-plugin-date

Dead simple Eleventy plugin for formatting dates inside your templates.

## Installation

Avaliable on npm:

```sh
npm install eleventy-plugin-date --save-dev
```

Open up your Eleventy [config file](https://www.11ty.dev/docs/config/) (probably `.eleventy.js`) and use `addPlugin`:

```js
const pluginDate = require('eleventy-plugin-date');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate);
};
```

This supplies the following universal [filters](https://www.11ty.dev/docs/filters/) by default:

- `readableDate`: format a Date to be presented to humans. _Example: `January 2, 2019`_.
- `isoDate`: format a Date that includes the year, month, day in ISO format. _Example: `2019-01-02`_.

## Options

Optionally pass in an options object as the second argument to `addPlugin` to further customize this plugin.

```js
const pluginDate = require('eleventy-plugin-date');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate, {
    // Specify custom date formats
    formats: {
      // Change the readableDate filter to use abbreviated months.
      readableDate: { year: 'numeric', month: 'short', day: 'numeric' },
      // Add a new filter to format a Date to just the month and year.
      readableMonth: { year: 'numeric', month: 'long' },
      // Add a new filter using formatting tokens.
      timeZone: 'z',
    },
  });
};
```

### `formats`

Type: `object`<br>
Default: `{}`

An object that specifies date filters to be added by this plugin. The keys will be used as filter names, and the values will indicate how dates should be formatted.

Values can either be options objects that can be provided to [`Intl.DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat), or [tokens](https://moment.github.io/luxon/docs/manual/formatting.html#table-of-tokens) used with Luxon.

### `includeDefaults`

Type: `boolean`<br>
Default: `true`

Whether or not to include the default date filters `readableDate` and `isoDate`. Setting this to false will cause the plugin to only add filters specified in `formats`.
