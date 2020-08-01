const pluginDate = require('../../../');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate, {
    formats: {
      readableDate: 'dd LLL yyyy',
    },
  });
};
