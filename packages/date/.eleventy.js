const { DateTime } = require('luxon');

const builtinFormats = {
  readableDate: DateTime.DATE_FULL,
  isoDate: 'yyyy-LL-dd',
};

function buildFilter(locale, format) {
  function toDateTime(dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).setLocale(locale);
  }

  if (typeof format === 'string') {
    return (dateObj) => {
      return toDateTime(dateObj).toFormat(format);
    };
  } else if (typeof format === 'object') {
    return (dateObj) => {
      return toDateTime(dateObj).toLocaleString(format);
    };
  }
}

module.exports = {
  initArguments: {},
  configFunction(eleventyConfig, options = {}) {
    const {
      locale = DateTime.local().locale,
      includeDefaults = true,
    } = options;

    const formats = Object.assign(
      {},
      includeDefaults ? builtinFormats : {},
      options.formats
    );

    for (const [name, format] of Object.entries(formats)) {
      eleventyConfig.addFilter(name, buildFilter(locale, format));
    }
  },
};
