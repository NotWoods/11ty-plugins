const pluginDate = require('../../../');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginDate, {
    formats: {
      justMonth: { year: 'numeric', month: 'long' },
    },
  });
};
