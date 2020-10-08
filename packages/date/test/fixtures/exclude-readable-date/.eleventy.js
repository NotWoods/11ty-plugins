const pluginDate = require('../../../');

/**
 * @type {import('@11ty/eleventy').LocalConfig}
 */
const config = (eleventyConfig) => {
  eleventyConfig.addPlugin(pluginDate, {
    includeDefaults: false,
  });
};

module.exports = config
