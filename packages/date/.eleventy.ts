import { DateTime, LocaleOptions, DateTimeFormatOptions } from 'luxon';
import { EleventyPlugin } from '../types';

const builtinFormats = {
  readableDate: DateTime.DATE_FULL,
  isoDate: 'yyyy-LL-dd',
};

function buildFilter(
  locale: string,
  format: string | FormatOptions
): (dateObj: Date) => string {
  function toDateTime(dateObj: Date) {
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

export type FormatOptions = LocaleOptions & DateTimeFormatOptions;

export interface DatePluginOptions {
  locale?: string;
  includeDefaults?: boolean;
  formats?: { [name: string]: string | FormatOptions };
}

const datePlugin: EleventyPlugin<DatePluginOptions> = {
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
export default datePlugin;
