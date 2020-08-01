const pluginDate = require('../../../');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate, {
    includeDefaults: false,
  });
};
