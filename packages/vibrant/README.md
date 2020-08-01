# eleventy-plugin-vibrant

Extract prominent colors from your Eleventy site's images.

## Installation

Avaliable on npm:

```sh
npm install eleventy-plugin-vibrant --save-dev
```

Open up your Eleventy [config file](https://www.11ty.dev/docs/config/) (probably `.eleventy.js`) and use `addPlugin`:

```js
const pluginVibrant = require('eleventy-plugin-vibrant');
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginVibrant);
};
```

This supplies the following asynchronous Nunjucks [filter](https://www.11ty.dev/docs/filters/):

- `vibrant(swatch)`: Extract prominent colors from the image at a given path.

## Usage

In your Nunjucks templates:

```njk
<img src="{{ path }}" style="background: {{ path | vibrant('muted') }}">
```

Result:

```html
<img src="/path/to/image.png" style="background: #ff0000" />
```

The `vibrant` filter transforms a string that points to an image and returns a hex color. Up to 6 color swatches are extracted from the image, and they can be selected by passing in the corresponding keywords to the filter.

The following color swatch types can be used:

- `vibrant`
- `muted`
- `darkvibrant`
- `darkmuted`
- `lightvibrant`
- `lightmuted`

Not every image returns all swatch types. A fallback list can be provided, and the first matching type will be used.

```njk
<img src="{{ path }}" style="background: {{ path | vibrant(['darkmuted', 'muted', 'lightmuted']) }}">
```
